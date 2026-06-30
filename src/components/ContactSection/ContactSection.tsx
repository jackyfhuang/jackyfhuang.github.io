import { contact } from '../../data/contact'
import { GitHubIcon, LinkedInIcon } from '../icons/SocialIcons'
import styles from './ContactSection.module.css'

interface ContactSectionProps {
  isPage?: boolean
}

function ContactSection({ isPage = false }: ContactSectionProps) {
  const Heading = isPage ? 'h1' : 'h2'

  return (
    <section id="contact" className={styles.section} aria-labelledby="contact-heading">
      <Heading id="contact-heading" className={styles.title}>
        Get in Touch
      </Heading>

      <p className={styles.subtitle}>
        Have a question or want to work together? I'd love to hear from you.
      </p>

      <a href={`mailto:${contact.email}`} className={styles.email}>
        {contact.email}
      </a>

      <div className={styles.social}>
        <a
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}
          aria-label="GitHub"
        >
          <GitHubIcon className={styles.icon} />
        </a>
        <a
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}
          aria-label="LinkedIn"
        >
          <LinkedInIcon className={styles.icon} />
        </a>
      </div>
    </section>
  )
}

export default ContactSection
