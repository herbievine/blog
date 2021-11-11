import { Dispatch, SetStateAction, useContext } from 'react'
import { ThemeOptions, ThemeContext } from '../context/Theme'

interface UseThemeHook {
  theme: ThemeOptions
  setTheme: Dispatch<SetStateAction<'light' | 'dark'>>
}

const useTheme = (): UseThemeHook => {
  const { theme, setTheme } = useContext(ThemeContext)

  return {
    theme,
    setTheme
  }
}

export { useTheme }
