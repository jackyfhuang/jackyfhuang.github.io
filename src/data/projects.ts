import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    id: 'wit-hydrometric-glc',
    title: 'WIT Hydrometric GLC Tool',
    description:
      'Capstone project built for Fathom Scientific — a web tool that ingests hydrometric gauge readings and applies gap-level correction workflows, giving field teams a faster way to validate and export water-level data.',
    stack: ['React', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL'],
    githubUrl: 'https://github.com/jackyfhuang/wit-hydrometric-glc',
    liveUrl: 'https://your-demo-url.com/wit-hydrometric-glc',
  },
  {
    id: 'childguard-id',
    title: 'ChildGuard ID',
    description:
      'Mobile app developed with KOM Community Policing Center — lets parents create and manage secure child ID profiles that authorized officers can access during community safety initiatives.',
    stack: ['React Native', 'TypeScript', 'Node.js', 'Firebase'],
    githubUrl: 'https://github.com/jackyfhuang/childguard-id',
    liveUrl: 'https://your-demo-url.com/childguard-id',
  },
  {
    id: 'shelterlink',
    title: 'ShelterLink',
    description:
      'Full-stack resource-matching platform that connects people in need with available shelter beds and local support services through a searchable, role-based dashboard.',
    stack: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    githubUrl: 'https://github.com/jackyfhuang/shelterlink',
    liveUrl: 'https://your-demo-url.com/shelterlink',
  },
]
