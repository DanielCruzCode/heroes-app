import toast from 'react-hot-toast'

import { ErrorPage } from '@/ui'
import { useMarvelApi } from '../hooks/useMarvelApi'

export const ComicsPage = () => {
  const { data, hasError, isLoading }: ComicApi = useMarvelApi('comics', [], ['limit=20'])
  const comicList: Array<Comic> = data.results || []

  if (hasError) {
    toast.error('Error loading comics')
    return <ErrorPage />
  }

  if (isLoading) {
    return <h2>Loading</h2>
  }

  return (
    <>
      <h1>Comics</h1>
      Read our most loved comics
      <hr />
      {/* TODO: Make a FC to render this comic list / grid */}
      <ul>
        {comicList.map(comic => {
          return (
            <li key={comic?.id}>
              <h2>{comic?.title}</h2>
            </li>
          )
        })}
      </ul>
    </>
  )
}
