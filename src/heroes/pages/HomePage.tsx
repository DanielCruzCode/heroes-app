import { useMarvelApi } from '../hooks/useMarvelApi'

const AVENGERS_SERIE = '22547' // Avengers (2016 - 2018)

export const HomePage = () => {
  const { data, hasError, isLoading }: CharacterApi = useMarvelApi(`/series/${AVENGERS_SERIE}/characters`, [])
  const characterList: Array<Character> = data.results || []

  console.log('characterList', characterList)

  return (
    <>
      <div>Home</div>
      <div className="carousel">
        {characterList.map(character => {
          const imageSrc = `${character.thumbnail?.path}.${character.thumbnail?.extension}`

          return (
            <div>
              <span>{character.name}</span>
              <img src={imageSrc} alt={character.name} width="150px" />
            </div>
          )
        })}
      </div>
    </>
  )
}
