import { Route, Routes } from 'react-router-dom'

import { Toaster } from 'react-hot-toast'

import { HeroesRoutes } from '@/heroes'
import { LoginPage } from '@/auth'

export const AppRouter = () => {
  return (
    <>
      <Toaster position="bottom-left" reverseOrder={true} />
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<HeroesRoutes />} />
      </Routes>
    </>
  )
}
