import React from 'react'
import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { certification } from '../data/portfolioData'

export default function Certification() {
  return (
    <section aria-labelledby="certification-heading" className="pb-20 sm:pb-28">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="card-surface flex flex-col items-start gap-4 p-6 sm:flex-row sm:items-center sm:p-8"
        >
          <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl border border-surface-border bg-base/50">
            <Award size={22} className="text-accent-cyan" />
          </div>
          <div>
            <h2 id="certification-heading" className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
              Certification
            </h2>
            <p className="mt-1 text-lg font-semibold text-ink">{certification.title}</p>
            <p className="text-sm text-ink-muted">{certification.issuer}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
