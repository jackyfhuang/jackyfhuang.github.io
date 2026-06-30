import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
] as const

function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink to="/" className={styles.logo} end>
          <span className={styles.logoBracket}>&lt;</span>
          jack
          <span className={styles.logoBracket}>/&gt;</span>
        </NavLink>

        <ul className={styles.links}>
          {navLinks.map(({ to, label, ...rest }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  isActive ? `${styles.link} ${styles.active}` : styles.link
                }
                {...rest}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
