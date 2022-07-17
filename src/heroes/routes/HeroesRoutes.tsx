import { Route, Routes } from 'react-router-dom'

import { CharactersPage, CharacterPage, SearchPage, ComicsPage, HomePage } from '@/heroes'
import { Navbar } from '@/ui'

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container p-12 mx-auto max-w-7xl">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/character/:id" element={<CharacterPage />} />
          <Route path="/characters" element={<CharactersPage />} />
          <Route path="/comics" element={<ComicsPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </div>
    </>
  )
}
