import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            ホーム
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/resume"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            経歴
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            プロジェクト
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            ブログ
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            お問い合わせ
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
