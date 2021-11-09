import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import React from 'react'
import { client } from '../../lib/apolloClient'
import { gql } from '@apollo/client'
import { PostEntity, PostQuery } from '../../generated/graphql'

interface PostProps {
  post?: PostEntity
}

const Post: NextPage<PostProps> = ({ post }) => {
  return <div>{JSON.stringify(post)}</div>
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = gql`
    query Post($slug: String!) {
      post(slug: $slug) {
        id
        title
        description
        slug
        relativeImage
        rawMdx
        published
        views
        likes
        updatedAt
      }
    }
  `

  const { data } = await client.query<PostQuery>({
    query,
    variables: {
      slug: params.slug
    }
  })

  return {
    props: {
      post: data.post
    },
    revalidate: 60
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const query = gql`
    query Posts {
      posts {
        slug
      }
    }
  `

  const { data } = await client.query<{ posts: { slug: string }[] }>({
    query
  })

  const paths = data.posts.map((post) => ({ params: { slug: post.slug } }))

  return {
    paths,
    fallback: false
  }
}

export default Post
