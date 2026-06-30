import ContactSection from '../../components/ContactSection/ContactSection'
import Hero from '../../components/Hero/Hero'
import styles from './Home.module.css'

function Home() {
  return (
    <div className={styles.home}>
      <Hero />
      <ContactSection />
    </div>
  )
}

export default Home
