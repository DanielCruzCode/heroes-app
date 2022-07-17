import { MouseEvent } from 'react'

import { NavLink, useNavigate } from 'react-router-dom'
import { ProfileIcon } from './ProfileIcon'

export const Navbar = () => {
  const navigate = useNavigate()

  const handleLogout = (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    event.preventDefault()
    navigate('/login', { replace: true })
  }

  return (
    <nav className="flex items-center h-24 px-20 mx-auto text-lg border-b max-w-7xl">
      <div className="logo">
        <a href="/">
          <img src="/marvel-logo.svg" alt="Marvel logo" className="max-w-sm max-h-12" />
        </a>
      </div>
      <ul className="flex items-center justify-center flex-1 gap-3">
        <li className="navlink">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'font-bold' : '')}>
            Home
          </NavLink>
        </li>
        <li className="navlink">
          <NavLink to="comics" className={({ isActive }) => (isActive ? 'font-bold' : '')}>
            Comics
          </NavLink>
        </li>
        <li className="navlink">
          <NavLink to="characters" className={({ isActive }) => (isActive ? 'font-bold' : '')}>
            Characters
          </NavLink>
        </li>
        <li className="navlink">
          <NavLink to="search" className={({ isActive }) => (isActive ? 'font-bold' : '')}>
            Search
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center justify-center gap-3">
        <li className="flex items-center gap-2 w-28 navlink">Daniel</li>
        <li className="navlink">
          <button onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </nav>
  )
}
