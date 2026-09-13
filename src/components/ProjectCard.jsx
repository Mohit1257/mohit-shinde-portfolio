import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Github, Layers } from 'lucide-react'

const visualVariants = [
  'from-accent-cyan/25 via-surface to-surface',
  'from-accent-violet/25 via-surface to-surface',
  'from-accent-cyan/15 via-accent-violet/10 to-surface',
]

export default function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false)
  const gradient = visualVariants[index % visualVariants.length]

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: (index % 3) * 0.08 }}
      className="group card-surface overflow-hidden transition-colors hover:border-accent-cyan/30"
    >
      <div className={`relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br ${gradient} sm:h-52`}>
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(231,234,243,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(231,234,243,0.5) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="relative flex flex-col items-center gap-2 transition-transform duration-500 group-hover:scale-[1.03]">
          <Layers size={30} className="text-ink/80" strokeWidth={1.5} />
          <span className="font-display text-lg font-bold tracking-tight text-ink/90">{project.name}</span>
        </div>
      </div>

      <div className="p-6 sm:p-7">
        <p className="text-xs font-medium uppercase tracking-wide text-ink-faint">Project {String(index + 1).padStart(2, '0')}</p>
        <h3 className="mt-1.5 text-xl font-bold text-ink">{project.name}</h3>
        <p className="mt-1 text-sm font-medium text-accent-cyan/90">{project.subtitle}</p>

        <p className="mt-4 text-sm leading-relaxed text-ink-muted">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 6).map((t) => (
            <span
              key={t}
              className="rounded-md border border-surface-border bg-base/40 px-2.5 py-1 text-[11px] font-medium text-ink-muted"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 6 && (
            <span className="rounded-md border border-surface-border bg-base/40 px-2.5 py-1 text-[11px] font-medium text-ink-faint">
              +{project.tech.length - 6} more
            </span>
          )}
        </div>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              key="details"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="mt-5 space-y-4 border-t border-surface-border pt-5">
                {project.roles.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">Roles Supported</p>
                    <p className="mt-1.5 text-sm text-ink-muted">{project.roles.join(', ')}</p>
                  </div>
                )}

                {project.functionalAreas.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">Key Areas</p>
                    <ul className="mt-1.5 grid grid-cols-1 gap-1 sm:grid-cols-2">
                      {project.functionalAreas.map((area) => (
                        <li key={area} className="text-sm text-ink-muted">
                          · {area}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">Highlights</p>
                  <ul className="mt-1.5 space-y-1.5">
                    {project.highlights.map((h) => (
                      <li key={h} className="text-sm leading-relaxed text-ink-muted">
                        · {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">Full Tech Stack</p>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-surface-border bg-base/40 px-2.5 py-1 text-[11px] font-medium text-ink-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-6 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted transition-colors hover:text-ink"
          >
            {expanded ? 'Hide details' : 'View details'}
            <ChevronDown size={16} className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} />
          </button>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-surface-border px-3.5 py-2 text-sm font-medium text-ink transition-colors hover:border-accent-cyan/40 hover:bg-surface-raised"
          >
            <Github size={16} />
            View on GitHub
          </a>
        </div>
      </div>
    </motion.article>
  )
}
