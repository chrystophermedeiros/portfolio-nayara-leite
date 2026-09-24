import { go } from '../lib/router'
import type { Project } from '../data/projects'
import { ArrowUpRightIcon } from './Icons'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-card__image-wrap">
        <img src={project.image} alt={`${project.title} — mockups do projeto`} className="project-card__image" loading="lazy" />
      </div>
      <div className="project-card__copy">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <button onClick={() => go(`/projetos/${project.slug}`)} className="text-button project-card__button">Ver projeto <ArrowUpRightIcon aria-hidden="true" /></button>
      </div>
    </article>
  )
}
