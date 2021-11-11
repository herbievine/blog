const getItem = async (key: string) => {
  if (key) {
    return window.localStorage.getItem(key)
  }

  return null
}

const setItem = async (key: string, payload: string) => {
  if (key && payload) {
    return window.localStorage.setItem(key, payload)
  }

  return null
}

export { getItem, setItem }
