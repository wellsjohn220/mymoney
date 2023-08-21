import { Link } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext"
import { useLogout } from '../hooks/useLogout'
import styles from './Navbar.module.css'
import React from 'react'
import { FaUserTie } from 'react-icons/fa'


export default function Navbar() {
  const { logout } = useLogout()
  const { user } = useAuthContext()
  const style = { color:"green", fontSize: "1.5em" }

  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}><Link to="/"><FaUserTie style={style} />&nbsp;&nbsp;12345</Link></li>
        {!user && (
          <>
           <li><Link to="/version">Version</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </>
        )}
        {user && (
          <>
            <li>Hello, {user.displayName}</li>
            <li>
              <button className="btn" onClick={logout}>Logout</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}
