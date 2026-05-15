import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import SectionHeader from '../components/SectionHeader'
import { SOCIALS } from '../data/portfolio'
import styles from './Contact.module.css'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const ref = useReveal()

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="section section--alt2">
      <SectionHeader chip="Contact" title="Let's Build Something" />
      <div className={`reveal ${styles.wrap}`} ref={ref}>
        <div>
          <h3 className={styles.h3}>Open to freelance projects, research collaborations and opportunities.</h3>
          <p className={styles.p}>Whether you need an AI systems engineer, want to commission a website, need technical documentation, or want to discuss a research collaboration — I'm here.</p>
          <div className={styles.socials}>
            {SOCIALS.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className={styles.socialRow}>
                <span className={styles.si}>{s.icon}</span>
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div className={styles.ff}>
              <label>Name</label>
              <input type="text" placeholder="Your name" required />
            </div>
            <div className={styles.ff}>
              <label>Email</label>
              <input type="email" placeholder="your@email.com" required />
            </div>
          </div>
          <div className={styles.ff}>
            <label>Subject</label>
            <input type="text" placeholder="What's this about?" />
          </div>
          <div className={styles.ff}>
            <label>Message</label>
            <textarea rows={5} placeholder="Tell me about your project, opportunity, or just say hi..." required />
          </div>
          <button
            type="submit"
            className={`btn-primary ${sent ? styles.sent : ''}`}
            style={{ alignSelf: 'flex-start' }}
          >
            {sent ? 'Sent! ✓' : 'Send Message →'}
          </button>
        </form>
      </div>
    </section>
  )
}
