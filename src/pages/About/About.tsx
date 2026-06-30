import { contact } from '../../data/contact'
import styles from './About.module.css'

const skillGroups = [
  {
    category: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'SQL'],
  },
  {
    category: 'Frameworks',
    items: ['React', 'React Native', 'Node.js', 'Express', 'FastAPI'],
  },
  {
    category: 'Tools',
    items: ['Git', 'Docker', 'PostgreSQL', 'Firebase', 'Linux'],
  },
] as const

const socialLinks = [
  {
    label: 'LinkedIn',
    href: contact.linkedin,
    display: contact.linkedin.replace('https://', ''),
  },
  {
    label: 'GitHub',
    href: contact.github,
    display: contact.github.replace('https://', ''),
  },
] as const

function About() {
  return (
    <section className={styles.about} aria-labelledby="about-heading">
      <header className={styles.header}>
        <h1 id="about-heading" className={styles.title}>
          About
        </h1>
      </header>

      <div className={styles.layout}>
        <div className={styles.photoColumn}>
          <div className={styles.photoPlaceholder} role="img" aria-label="Headshot placeholder">
            <span className={styles.photoLabel}>Photo</span>
          </div>
        </div>

        <div className={styles.contentColumn}>
          <p className={styles.bio}>
            I'm Jack Huang, a full-stack developer who recently finished BCIT's
            Computer Systems Technology program. Over the last couple of years
            I've worked on everything from mobile apps with community partners
            to capstone projects for real clients — and I still get a kick out
            of shipping something that actually helps someone do their job
            faster. I'm looking for a team where I can keep learning, write
            code I'm proud of, and grow as an engineer.
          </p>

          <div className={styles.skills}>
            <h2 className={styles.skillsTitle}>Skills</h2>

            {skillGroups.map(({ category, items }) => (
              <div key={category} className={styles.skillGroup}>
                <h3 className={styles.skillCategory}>{category}</h3>
                <ul className={styles.tagList} aria-label={category}>
                  {items.map((skill) => (
                    <li key={skill} className={styles.tag}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className={styles.social}>
            <h2 className={styles.socialTitle}>Find me online</h2>
            <ul className={styles.socialList}>
              {socialLinks.map(({ label, href, display }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    <span className={styles.socialLabel}>{label}</span>
                    <span className={styles.socialUrl}>{display}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
