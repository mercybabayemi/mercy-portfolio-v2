import { useState, useEffect, useRef } from 'react'
import SectionHeader from '../components/SectionHeader'
import { EXPERIENCE } from '../data/portfolio'
import styles from './Experience.module.css'

function ExpCard({ exp, type }) {
  return (
    <div className={`card ${styles.ecard} ${styles[type]}`}>
      <div className={styles.header}>
        <div>
          <span className={styles.roleBadge}>{exp.type}</span>
          <h4 className={styles.role}>{exp.role}</h4>
          <div className={styles.meta}>
            <span className={styles.org}>{exp.org}</span>
            <span className={styles.sep}>·</span>
            <span className={styles.period}>{exp.period}</span>
          </div>
        </div>
        {exp.icon && <span className={styles.bigIcon}>{exp.icon}</span>}
      </div>
      <ul className={styles.points}>
        {exp.points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
      {exp.link && (
        <a href={exp.link} target="_blank" rel="noreferrer" className={styles.expLink}>
          Visit →
        </a>
      )}
    </div>
  )
}

export default function Experience() {
  const [tab, setTab] = useState('paid')
  const listRef = useRef(null)

  const data = tab === 'paid' ? EXPERIENCE.paid : EXPERIENCE.volunteering

  // Re-observe children whenever tab changes
  useEffect(() => {
    const parent = listRef.current
    if (!parent) return

    const children = parent.querySelectorAll('.reveal-child')
    // Reset then trigger
    children.forEach(c => c.classList.remove('visible'))

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.05 }
    )

    children.forEach((child, i) => {
      child.style.transitionDelay = `${i * 0.07}s`
      observer.observe(child)
    })

    return () => observer.disconnect()
  }, [tab])

  return (
    <section id="experience" className="section">
      <SectionHeader chip="Experience" title="Where I've Shown Up" />

      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${tab === 'paid' ? styles.active : ''}`}
          onClick={() => setTab('paid')}
        >
          💼 Paid &amp; Fellowship
        </button>
        <button
          className={`${styles.tab} ${tab === 'volunteering' ? styles.active : ''}`}
          onClick={() => setTab('volunteering')}
        >
          🌱 Volunteering &amp; Initiatives
        </button>
      </div>

      <div className={styles.list} ref={listRef}>
        {data.map(exp => (
          <div key={`${tab}-${exp.org}-${exp.role}`} className="reveal-child">
            <ExpCard exp={exp} type={tab} />
          </div>
        ))}
      </div>
    </section>
  )
}
