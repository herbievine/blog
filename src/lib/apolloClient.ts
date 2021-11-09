import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri:
    process.env.NODE_ENV === 'production'
      ? 'https://blog-api.herbievine.com/graphql'
      : 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer $cookie`
  }
})

export { client }
