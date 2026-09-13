import React from 'react'
import { motion } from 'framer-motion'
import { skillGroups } from '../data/portfolioData'
import SectionHeader from './SectionHeader'

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeader
          index="Skills"
          title="Technologies I work with"
          description="Grouped by where they fit in a full-stack Java application."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: (i % 3) * 0.08 }}
              className="card-surface p-6"
            >
              <h3 className="text-sm font-semibold text-ink">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-surface-border bg-base/40 px-3 py-1.5 text-xs font-medium text-ink-muted transition-colors hover:border-accent-cyan/40 hover:text-ink"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
