import { useReveal } from '../hooks/useReveal'
import SectionHeader from '../components/SectionHeader'
import { RESEARCH } from '../data/portfolio'
import styles from './Research.module.css'

export default function Research() {
  const cardRef = useReveal()

  return (
    <section id="research" className="section">
      <SectionHeader chip="Research" title="AfriPed Framework" sub="An independent, citable NLP evaluation framework grounded in African pedagogical theory." />

      <div className={`reveal ${styles.card}`} ref={cardRef}>
        <div className={styles.main}>
          <span className={styles.chip}>📄 Standalone Research Framework</span>
          <h3 className={styles.title}>{RESEARCH.title}</h3>

          {RESEARCH.desc.map((p, i) => (
            <p key={i} className={styles.para}>{p}</p>
          ))}

          <div className="stack-tags" style={{ margin: '1.2rem 0' }}>
            {RESEARCH.stack.map(t => <span key={t} className="stack-tag">{t}</span>)}
          </div>

          <div className={styles.finding}>
            🔬 <strong>Key Finding:</strong> {RESEARCH.finding}
          </div>

          {/* Publication platform links */}
          <div className={styles.pubSection}>
            <p className={styles.pubLabel}>📚 Find this research on:</p>
            <div className={styles.pubLinks}>
              {RESEARCH.links.map(l => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`${styles.pubLink} ${l.placeholder ? styles.placeholder : ''}`}
                >
                  {l.label}
                  {l.placeholder && <span className={styles.soon}> · coming soon</span>}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.aside}>
          {RESEARCH.stats.map(s => (
            <div key={s.label} className={styles.statCard}>
              <div className={styles.statNum}>{s.num}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
