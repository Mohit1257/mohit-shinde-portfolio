import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { AlertCircle, CheckCircle2, Github, Linkedin, Loader2, Mail, MapPin, Phone, Send } from 'lucide-react'
import { personal } from '../data/portfolioData'
import SectionHeader from './SectionHeader'

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

const initialForm = { name: '', email: '', subject: '', message: '' }

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Please enter your name.'
  if (!form.email.trim()) {
    errors.email = 'Please enter your email.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!form.subject.trim()) errors.subject = 'Please enter a subject.'
  if (!form.message.trim()) {
    errors.message = 'Please enter a message.'
  } else if (form.message.trim().length < 20) {
    errors.message = 'Message should be at least 20 characters.'
  }
  return errors
}

const contactDetails = [
  { icon: Mail, label: personal.email, href: `mailto:${personal.email}` },
  { icon: Phone, label: personal.phone, href: personal.phoneHref },
  { icon: MapPin, label: personal.location, href: null },
  { icon: Github, label: 'github.com/Mohit1257', href: personal.github },
  { icon: Linkedin, label: 'LinkedIn Profile', href: personal.linkedin },
]

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error | unconfigured

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const validationErrors = validate(form)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus('unconfigured')
      return
    }

    setStatus('loading')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          from_name: `${personal.name} Portfolio`,
        }),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setStatus('success')
        setForm(initialForm)
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeader
          index="Contact"
          title="Let's work together"
          description="Have an opening for an entry-level Java role, or just want to connect? Reach out directly or send a message below."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <div className="space-y-3">
            {contactDetails.map(({ icon: Icon, label, href }) => {
              const Wrapper = href ? 'a' : 'div'
              const wrapperProps = href
                ? { href, ...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {}) }
                : {}
              return (
                <Wrapper
                  key={label}
                  {...wrapperProps}
                  className="flex items-center gap-3.5 rounded-xl border border-surface-border bg-surface/50 px-4 py-3.5 text-sm text-ink-muted transition-colors hover:border-accent-cyan/30 hover:text-ink"
                >
                  <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg border border-surface-border bg-base/40">
                    <Icon size={16} className="text-accent-cyan" />
                  </span>
                  {label}
                </Wrapper>
              )
            })}
          </div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            onSubmit={handleSubmit}
            noValidate
            className="card-surface space-y-4 p-6 sm:p-8"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-ink-muted">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className="w-full rounded-lg border border-surface-border bg-base/50 px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-accent-cyan/50"
                  placeholder="Your name"
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-xs text-red-400">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-ink-muted">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className="w-full rounded-lg border border-surface-border bg-base/50 px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-accent-cyan/50"
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-xs text-red-400">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="mb-1.5 block text-xs font-medium text-ink-muted">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={form.subject}
                onChange={handleChange}
                aria-invalid={Boolean(errors.subject)}
                aria-describedby={errors.subject ? 'subject-error' : undefined}
                className="w-full rounded-lg border border-surface-border bg-base/50 px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-accent-cyan/50"
                placeholder="Java Developer opening"
              />
              {errors.subject && (
                <p id="subject-error" className="mt-1 text-xs text-red-400">
                  {errors.subject}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-ink-muted">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'message-error' : undefined}
                className="w-full resize-none rounded-lg border border-surface-border bg-base/50 px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-accent-cyan/50"
                placeholder="Tell me a bit about the role or opportunity..."
              />
              {errors.message && (
                <p id="message-error" className="mt-1 text-xs text-red-400">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent-cyan px-5 py-3 text-sm font-medium text-[#04101F] transition-colors hover:bg-[#6cc5ff] disabled:opacity-60 sm:w-auto"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </button>

            {status === 'success' && (
              <p className="flex items-center gap-2 text-sm text-emerald-400" role="status">
                <CheckCircle2 size={16} />
                Your message was sent successfully. I&apos;ll get back to you soon.
              </p>
            )}

            {status === 'error' && (
              <p className="flex items-center gap-2 text-sm text-red-400" role="alert">
                <AlertCircle size={16} />
                Something went wrong sending your message. Please try again or email me directly at{' '}
                <a href={`mailto:${personal.email}`} className="underline">
                  {personal.email}
                </a>
                .
              </p>
            )}

            {status === 'unconfigured' && (
              <p className="flex items-start gap-2 text-sm text-amber-400" role="alert">
                <AlertCircle size={16} className="mt-0.5 flex-none" />
                The contact form isn&apos;t configured yet. Please email me directly at{' '}
                <a href={`mailto:${personal.email}`} className="underline">
                  {personal.email}
                </a>{' '}
                instead.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
