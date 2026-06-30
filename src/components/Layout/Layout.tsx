import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import styles from './Layout.module.css'

function Layout() {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Jack Huang. Built with React + Vite.</p>
      </footer>
    </div>
  )
}

export default Layout
