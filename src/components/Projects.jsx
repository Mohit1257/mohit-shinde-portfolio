import React from 'react'
import { projects } from '../data/portfolioData'
import SectionHeader from './SectionHeader'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeader
          index="Projects"
          title="Things I've built"
          description="Full-stack applications built with Java, Spring Boot, and React across backend APIs, security, and UI."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
