import { useEffect, useState } from 'react'

const baseUrl = import.meta.env.VITE_MARVEL_BASE_URL
const apiKey = import.meta.env.VITE_MARVEL_PUBLIC_KEY
const hash = import.meta.env.VITE_MARVEL_HASH
const ts = import.meta.env.VITE_MARVEL_TS

/**
 *
 * @param initialUrlPath Url path to fetch specific contex from Marvel API (ex: comics, characters, character/:id etc.)
 * @param initialData Data to be returned when the API call is successful
 * @returns data, isLoading, error object
 */

export const useMarvelApi = (initialUrlPath: string, initialData: any, queryParams: Array<string> = []) => {
  const [data, setData] = useState<any>(initialData)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const [url, setUrl] = useState<string>(initialUrlPath)
  const solvedQueryParams = queryParams.join('&')

  const fetchData = async () => {
    try {
      const res = await fetch(`${baseUrl}/${url}?apikey=${apiKey}&ts=${ts}&hash=${hash}&${solvedQueryParams}`)
      const data: ComicDataWrapper = await res.json()
      console.log('Data:', data)
      setData(data.data)
      setIsLoading(false)
    } catch (_error) {
      setHasError(true)
    }
  }

  useEffect(() => {
    fetchData()
  }, [url])

  return { data, isLoading, hasError, setUrl }
}
