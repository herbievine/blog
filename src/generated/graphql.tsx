import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
const defaultOptions = {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any
}

export type AuthenticatedUserEntity = {
  __typename?: 'AuthenticatedUserEntity'
  jwt: Scalars['String']
  user: UserEntity
}

export type CategoryCreateDto = {
  color: Scalars['String']
  name: Scalars['String']
}

export type CategoryEntity = {
  __typename?: 'CategoryEntity'
  color: Scalars['String']
  createdAt: Scalars['DateTime']
  id: Scalars['String']
  name: Scalars['String']
  posts?: Maybe<Array<PostEntity>>
  updatedAt: Scalars['DateTime']
}

export type CategoryUpdateDto = {
  color?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

export type Mutation = {
  __typename?: 'Mutation'
  createCategory: CategoryEntity
  createPost: PostEntity
  deleteCategory: CategoryEntity
  deletePost: PostEntity
  login: AuthenticatedUserEntity
  register: AuthenticatedUserEntity
  updateCategory: CategoryEntity
  updatePost: PostEntity
}

export type MutationCreateCategoryArgs = {
  payload: CategoryCreateDto
  relations?: Maybe<Array<PostCreateDto>>
}

export type MutationCreatePostArgs = {
  payload: PostCreateDto
  relations?: Maybe<Array<CategoryCreateDto>>
}

export type MutationDeleteCategoryArgs = {
  id: Scalars['String']
}

export type MutationDeletePostArgs = {
  id: Scalars['String']
}

export type MutationLoginArgs = {
  payload: UserLoginDto
}

export type MutationRegisterArgs = {
  payload: UserCreateDto
  websitePassword: Scalars['String']
}

export type MutationUpdateCategoryArgs = {
  id: Scalars['String']
  payload: CategoryUpdateDto
  relations?: Maybe<Array<PostCreateDto>>
}

export type MutationUpdatePostArgs = {
  id: Scalars['String']
  payload: PostUpdateDto
  relations?: Maybe<Array<CategoryCreateDto>>
}

export type PostCreateDto = {
  description: Scalars['String']
  published?: Maybe<Scalars['Boolean']>
  rawMdx: Scalars['String']
  relativeImage: Scalars['String']
  slug?: Maybe<Scalars['String']>
  title: Scalars['String']
}

export type PostEntity = {
  __typename?: 'PostEntity'
  categories?: Maybe<Array<CategoryEntity>>
  createdAt: Scalars['DateTime']
  description: Scalars['String']
  id: Scalars['String']
  likes: Scalars['Int']
  published: Scalars['Boolean']
  rawMdx: Scalars['String']
  relativeImage: Scalars['String']
  slug: Scalars['String']
  title: Scalars['String']
  updatedAt: Scalars['DateTime']
  views: Scalars['Int']
}

export type PostUpdateDto = {
  description?: Maybe<Scalars['String']>
  rawMdx?: Maybe<Scalars['String']>
  relativeImage?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  views?: Maybe<Scalars['Int']>
}

export type Query = {
  __typename?: 'Query'
  categories: Array<CategoryEntity>
  category: CategoryEntity
  post: PostEntity
  posts: Array<PostEntity>
}

export type QueryCategoryArgs = {
  name: Scalars['String']
}

export type QueryPostArgs = {
  slug: Scalars['String']
}

export type UserCreateDto = {
  email: Scalars['String']
  name: Scalars['String']
  password: Scalars['String']
}

export type UserEntity = {
  __typename?: 'UserEntity'
  createdAt: Scalars['DateTime']
  email: Scalars['String']
  id: Scalars['String']
  name: Scalars['String']
  updatedAt: Scalars['DateTime']
}

export type UserLoginDto = {
  email: Scalars['String']
  password: Scalars['String']
}

export type PostQueryVariables = Exact<{
  slug: Scalars['String']
}>

export type PostQuery = {
  __typename?: 'Query'
  post: {
    __typename?: 'PostEntity'
    id: string
    title: string
    description: string
    slug: string
    relativeImage: string
    rawMdx: string
    published: boolean
    views: number
    likes: number
    updatedAt: any
  }
}

export type PostsQueryVariables = Exact<{ [key: string]: never }>

export type PostsQuery = {
  __typename?: 'Query'
  posts: Array<{
    __typename?: 'PostEntity'
    id: string
    title: string
    description: string
    slug: string
    relativeImage: string
    rawMdx: string
    published: boolean
    views: number
    likes: number
    updatedAt: any
  }>
}

export const PostDocument = gql`
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

/**
 * __usePostQuery__
 *
 * To run a query within a React component, call `usePostQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function usePostQuery(
  baseOptions: Apollo.QueryHookOptions<PostQuery, PostQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PostQuery, PostQueryVariables>(PostDocument, options)
}
export function usePostLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PostQuery, PostQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<PostQuery, PostQueryVariables>(
    PostDocument,
    options
  )
}
export type PostQueryHookResult = ReturnType<typeof usePostQuery>
export type PostLazyQueryHookResult = ReturnType<typeof usePostLazyQuery>
export type PostQueryResult = Apollo.QueryResult<PostQuery, PostQueryVariables>
export const PostsDocument = gql`
  query Posts {
    posts {
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

/**
 * __usePostsQuery__
 *
 * To run a query within a React component, call `usePostsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsQuery({
 *   variables: {
 *   },
 * });
 */
export function usePostsQuery(
  baseOptions?: Apollo.QueryHookOptions<PostsQuery, PostsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PostsQuery, PostsQueryVariables>(
    PostsDocument,
    options
  )
}
export function usePostsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PostsQuery, PostsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<PostsQuery, PostsQueryVariables>(
    PostsDocument,
    options
  )
}
export type PostsQueryHookResult = ReturnType<typeof usePostsQuery>
export type PostsLazyQueryHookResult = ReturnType<typeof usePostsLazyQuery>
export type PostsQueryResult = Apollo.QueryResult<
  PostsQuery,
  PostsQueryVariables
>
