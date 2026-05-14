import { useRevealChildren } from '../hooks/useReveal'
import SectionHeader from '../components/SectionHeader'
import { SKILLS } from '../data/portfolio'
import styles from './Skills.module.css'

export default function Skills() {
  const gridRef = useRevealChildren()

  return (
    <section id="skills" className="section">
      <SectionHeader chip="Skills" title="What I Build With" sub="A cross-disciplinary stack spanning AI engineering, data infrastructure, system design, and technical writing." />
      <div className={styles.grid} ref={gridRef}>
        {SKILLS.map(s => (
          <div key={s.title} className={`card ${styles.card} reveal-child`}>
            <div className={styles.ico}>{s.icon}</div>
            <h4 className={styles.title}>{s.title}</h4>
            <div className="stack-tags">
              {s.tags.map(t => <span key={t} className="stack-tag">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
