import React from 'react'
import { motion } from 'framer-motion'
import { Download, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { personal } from '../data/portfolioData'
import Button from './Button'
import profileImg from '../assets/profile/mohit-shinde-profile.webp'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-[-10%] h-[420px] w-[420px] rounded-full bg-accent-cyan/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-[-10%] h-[360px] w-[360px] rounded-full bg-accent-violet/10 blur-[120px]"
      />

      <div className="container-page relative grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface/60 px-3.5 py-1.5 text-xs font-medium text-ink-muted"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-cyan" />
            </span>
            {personal.status}
          </motion.div>

          <motion.p variants={item} className="mt-6 text-lg font-medium text-ink-muted">
            Hi, I&apos;m {personal.name}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-2 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]"
          >
            {personal.title}
          </motion.h1>

          <motion.p variants={item} className="mt-5 max-w-xl text-[15px] font-medium text-accent-cyan/90 sm:text-base">
            {personal.techLine}
          </motion.p>

          <motion.p variants={item} className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted">
            {personal.summary}
          </motion.p>

          <motion.div variants={item} className="mt-5 flex items-center gap-2 text-sm text-ink-muted">
            <MapPin size={16} className="text-accent-cyan" />
            {personal.location}
          </motion.div>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <Button href="#projects" variant="primary">
              View My Projects
            </Button>
            <Button href={personal.resumePath} download={personal.resumeFileName} variant="secondary" icon={Download}>
              Download Resume
            </Button>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex items-center gap-2">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="rounded-lg border border-surface-border p-2.5 text-ink-muted transition-colors hover:border-accent-cyan/40 hover:text-ink"
            >
              <Github size={18} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="rounded-lg border border-surface-border p-2.5 text-ink-muted transition-colors hover:border-accent-cyan/40 hover:text-ink"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              aria-label="Send email"
              className="rounded-lg border border-surface-border p-2.5 text-ink-muted transition-colors hover:border-accent-cyan/40 hover:text-ink"
            >
              <Mail size={18} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-accent-cyan/20 via-transparent to-accent-violet/20 blur-2xl"
          />
          <div className="relative overflow-hidden rounded-[2rem] border border-surface-border bg-surface/40 p-2 shadow-glow">
            <img
              src={profileImg}
              alt="Mohit Shinde - Java Full Stack Developer"
              width={1024}
              height={1024}
              className="aspect-square w-full rounded-[1.6rem] object-cover"
              loading="eager"
            />
          </div>
          <div className="absolute -bottom-5 left-1/2 w-max -translate-x-1/2 rounded-full border border-surface-border bg-surface/90 px-4 py-2 text-xs font-semibold text-ink shadow-card backdrop-blur">
            Java Full Stack Developer
          </div>
        </motion.div>
      </div>
    </section>
  )
}
