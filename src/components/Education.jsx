import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { education } from '../data/portfolioData'
import SectionHeader from './SectionHeader'

export default function Education() {
  return (
    <section id="education" className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeader index="Education" title="Academic background" />

        <div className="relative max-w-2xl">
          <div aria-hidden="true" className="absolute left-[19px] top-2 bottom-2 w-px bg-surface-border" />

          <div className="space-y-8">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.1 }}
                className="relative flex gap-5 pl-0"
              >
                <div className="relative z-10 flex h-10 w-10 flex-none items-center justify-center rounded-full border border-surface-border bg-surface">
                  <GraduationCap size={18} className="text-accent-cyan" />
                </div>
                <div className="card-surface flex-1 p-5">
                  <p className="text-xs font-medium text-ink-faint">{edu.period}</p>
                  <h3 className="mt-1 text-base font-semibold text-ink">{edu.degree}</h3>
                  <p className="mt-1 text-sm text-ink-muted">
                    {edu.institution}, {edu.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
