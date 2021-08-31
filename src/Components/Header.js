import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import DogLogo from '../Assets/dogs.svg'

const Header = () => {
  return (
    <header className={styles.Header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/">
          <img src={DogLogo} alt="" />
        </Link>
        <Link  className={styles.login} to="/login">Login / Criar</Link>
      </nav>
    </header>
  )
}

export default Header