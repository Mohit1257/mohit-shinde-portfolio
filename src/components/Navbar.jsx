import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Download, Github, Linkedin, Menu, X } from 'lucide-react'
import { navLinks, personal } from '../data/portfolioData'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-base/85 backdrop-blur-md border-b border-surface-border' : 'bg-transparent'
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between sm:h-[4.5rem]" aria-label="Primary">
        <a href="#home" className="font-display text-lg font-bold text-ink">
          {personal.name}
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="rounded-lg p-2 text-ink-muted transition-colors hover:bg-surface-raised hover:text-ink"
          >
            <Github size={19} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="rounded-lg p-2 text-ink-muted transition-colors hover:bg-surface-raised hover:text-ink"
          >
            <Linkedin size={19} />
          </a>
          <a
            href={personal.resumePath}
            download={personal.resumeFileName}
            className="inline-flex items-center gap-2 rounded-xl bg-accent-cyan px-4 py-2 text-sm font-medium text-[#04101F] transition-colors hover:bg-[#6cc5ff]"
          >
            <Download size={16} />
            Resume
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-ink md:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-surface-border bg-base/95 backdrop-blur-md md:hidden"
          >
            <div className="container-page flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-lg px-3 py-3 text-base font-medium text-ink-muted transition-colors hover:bg-surface-raised hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 flex items-center gap-3 px-3 pt-2">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="rounded-lg p-2 text-ink-muted hover:text-ink"
                >
                  <Github size={20} />
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="rounded-lg p-2 text-ink-muted hover:text-ink"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={personal.resumePath}
                  download={personal.resumeFileName}
                  className="ml-auto inline-flex items-center gap-2 rounded-xl bg-accent-cyan px-4 py-2.5 text-sm font-medium text-[#04101F]"
                >
                  <Download size={16} />
                  Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
