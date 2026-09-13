import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Database, ShieldCheck, Sparkles } from 'lucide-react'
import { personal } from '../data/portfolioData'
import SectionHeader from './SectionHeader'

const pillars = [
  {
    icon: Code2,
    title: 'Backend APIs',
    text: 'Building REST APIs with Java, Spring Boot, and Spring MVC.',
  },
  {
    icon: Database,
    title: 'Data & Persistence',
    text: 'Integrating MySQL with Hibernate ORM and JPA.',
  },
  {
    icon: ShieldCheck,
    title: 'Auth & Security',
    text: 'Implementing authentication and authorization with Spring Security.',
  },
  {
    icon: Sparkles,
    title: 'Frontend Interfaces',
    text: 'Creating responsive UIs with React.js, HTML, CSS, and JavaScript.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeader index="About" title="A quick introduction" />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="max-w-xl text-lg leading-relaxed text-ink-muted"
          >
            {personal.about}
          </motion.p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.06 }}
                className="card-surface p-5"
              >
                <pillar.icon size={20} className="text-accent-cyan" strokeWidth={1.8} />
                <h3 className="mt-3 text-sm font-semibold text-ink">{pillar.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{pillar.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
