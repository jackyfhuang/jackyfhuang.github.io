import ContactSection from '../../components/ContactSection/ContactSection'
import styles from './Contact.module.css'

function Contact() {
  return (
    <div className={styles.page}>
      <ContactSection isPage />
    </div>
  )
}

export default Contact
