import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import { personal } from '../data/portfolioData'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-surface-border">
      <div className="container-page flex flex-col items-center gap-4 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-display text-sm font-semibold text-ink">{personal.name}</p>
          <p className="text-xs text-ink-faint">{personal.title}</p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="rounded-lg p-2 text-ink-muted transition-colors hover:bg-surface-raised hover:text-ink"
          >
            <Github size={17} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="rounded-lg p-2 text-ink-muted transition-colors hover:bg-surface-raised hover:text-ink"
          >
            <Linkedin size={17} />
          </a>
          <a
            href={`mailto:${personal.email}`}
            aria-label="Send email"
            className="rounded-lg p-2 text-ink-muted transition-colors hover:bg-surface-raised hover:text-ink"
          >
            <Mail size={17} />
          </a>
        </div>

        <p className="text-xs text-ink-faint">
          © {year} {personal.name} · Built with React
        </p>
      </div>
    </footer>
  )
}
