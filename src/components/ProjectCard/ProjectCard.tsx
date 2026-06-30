import type { Project } from '../../types/project'
import styles from './ProjectCard.module.css'

interface ProjectCardProps {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, stack, githubUrl, liveUrl } = project

  return (
    <article className={styles.card}>
      <div className={styles.cardBody}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>

        <ul className={styles.stack} aria-label="Tech stack">
          {stack.map((tech) => (
            <li key={tech} className={styles.tag}>
              {tech}
            </li>
          ))}
        </ul>

        <div className={styles.links}>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            GitHub
          </a>
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Live Demo
          </a>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
