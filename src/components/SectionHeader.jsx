import React from 'react'
import { motion } from 'framer-motion'

export default function SectionHeader({ index, title, description, align = 'left' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`mb-12 max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}
    >
      <div className={`flex items-baseline gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
        {index && <span className="font-display text-sm font-semibold text-accent-cyan">{index}</span>}
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      </div>
      {description && <p className="mt-3 text-base leading-relaxed text-ink-muted">{description}</p>}
    </motion.div>
  )
}
