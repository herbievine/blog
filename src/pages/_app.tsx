import 'tailwindcss/tailwind.css'
import React from 'react'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { client } from '../lib/apolloClient'
import ThemeProvider from '../context/Theme'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <div className="bg-gray-100 dark:bg-gray-900 h-screen">
          <div className="w-11/12 sm:w-10/12 lg:w-2/3 xl:w-1/2 mx-auto pt-6">
            <Component {...pageProps} />
          </div>
        </div>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default MyApp
