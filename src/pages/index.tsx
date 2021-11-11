import { NextPage } from 'next'
import React from 'react'
import { usePostsQuery } from '../generated/graphql'
import { useTheme } from '../hooks/useTheme'

const Home: NextPage = () => {
  const { data } = usePostsQuery()
  const { setTheme } = useTheme()

  return (
    <div>
      <h1>data:</h1>
      <p>{JSON.stringify(data?.posts)}</p>

      <button
        onClick={() =>
          setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
        }
      >
        theme
      </button>
    </div>
  )
}

export default Home
