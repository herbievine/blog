import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { getItem, setItem } from '../lib/storage'

export type ThemeOptions = 'light' | 'dark'

export interface ThemeContextInterface {
  theme: ThemeOptions
  setTheme: Dispatch<SetStateAction<ThemeOptions>>
}

export const ThemeContext = React.createContext<ThemeContextInterface | null>(
  null
)

const ThemeProvider: React.FC<{}> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeOptions>('dark')

  useEffect(() => {
    const fetchTheme = async () => {
      const localTheme = await getItem('theme')

      return localTheme
    }

    fetchTheme().then((localTheme) => {
      if (localTheme === 'dark' || localTheme === 'light') {
        setTheme(localTheme)
      }
    })
  }, [])

  useEffect(() => {
    console.log(`Current theme: ${theme}`)

    setItem('theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
