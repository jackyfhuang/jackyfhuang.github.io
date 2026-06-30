import ProjectCard from '../../components/ProjectCard/ProjectCard'
import { projects } from '../../data/projects'
import styles from './Projects.module.css'

function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading">
      <header className={styles.header}>
        <h1 id="projects-heading" className={styles.title}>
          Projects
        </h1>
        <p className={styles.subtitle}>
          A selection of academic and client-facing work from my time at BCIT
          and beyond.
        </p>
      </header>

      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
