import { NextPage } from 'next'
import React from 'react'
import { usePostsQuery } from '../generated/graphql'

const Home: NextPage = () => {
  const { data } = usePostsQuery()

  return (
    <div>
      <h1>data:</h1>
      <p>{JSON.stringify(data.posts)}</p>
    </div>
  )
}

export default Home
