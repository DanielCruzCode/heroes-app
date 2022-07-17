import toast from 'react-hot-toast'

import { ErrorPage } from '@/ui'
import { useMarvelApi } from '../hooks/useMarvelApi'

interface comicApi {
  data: ComicDataContainer
  hasError: boolean
  isLoading: boolean
}

export const ComicsPage = () => {
  const { data, hasError, isLoading }: comicApi = useMarvelApi('comcics', [])
  const comicList: Array<Comic> = data.results || []

  if (hasError) {
    toast.error('Error loading comics')
    return (
      <>
        <ErrorPage />
      </>
    )
  }

  return (
    <>
      <h1>Comics</h1>
      Read our most loved comics
      <hr />
      {isLoading ? (
        <h2>Loading..</h2>
      ) : (
        <ul>
          {comicList.map(comic => {
            return (
              <li key={comic?.id}>
                <h2>{comic?.title}</h2>
              </li>
            )
          })}
        </ul>
      )}
    </>
  )
}
