import { useState, useEffect } from 'react'

export const useDebounce = <T>(value: T, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const tick = setTimeout(() => setDebouncedValue(value), delay)
    return () => {
      clearTimeout(tick)
    }
  }, [value, delay])

  return debouncedValue
}
