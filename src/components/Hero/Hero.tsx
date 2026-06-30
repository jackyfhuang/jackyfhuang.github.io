import { Link } from 'react-router-dom'
import styles from './Hero.module.css'

function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.content}>
        <h1 id="hero-heading" className={styles.name}>
          Jack <span className={styles.lastName}>Huang</span>
        </h1>

        <p className={styles.subtitle}>
          Full-Stack Developer · BCIT Computer Systems Technology Graduate
        </p>

        <p className={styles.bio}>
          I build clean, reliable web applications with a focus on thoughtful
          user experience and maintainable code.
        </p>

        <div className={styles.actions}>
          <Link to="/projects" className={styles.primaryBtn}>
            View My Work
          </Link>
          <a
            href="/resume.pdf"
            className={styles.secondaryBtn}
            download
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
