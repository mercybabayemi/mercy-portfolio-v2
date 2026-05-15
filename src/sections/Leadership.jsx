import { useReveal } from '../hooks/useReveal'
import SectionHeader from '../components/SectionHeader'
import { LEADERSHIP } from '../data/portfolio'
import styles from './Leadership.module.css'

const STATUS_LABELS = {
  upcoming: { label: 'Upcoming', color: 'gold' },
  live: { label: 'Live', color: 'teal' },
  done: { label: 'Completed', color: 'muted' },
}

export default function Leadership() {
  const cardRef = useReveal()

  return (
    <section id="leadership" className="section section--alt">
      <SectionHeader
        chip="Year in Service"
        title="Serving"
        sub={`President 2026–2027 · "${LEADERSHIP.theme}"`}
      />

      <div className={`reveal ${styles.grid}`} ref={cardRef}>
        {/* Conference tracker */}
        <div className={styles.confCard}>
          <h3 className={styles.confTitle}>📅 Conference & Events Tracker</h3>
          <p className={styles.confSub}>All events will be documented and linked to YouTube for impact evidence.</p>
          <div className={styles.confList}>
            {LEADERSHIP.conferences.map(c => {
              const s = STATUS_LABELS[c.status]
              return (
                <div key={c.name} className={styles.confRow}>
                  <div className={styles.confInfo}>
                    <span className={styles.confName}>{c.name}</span>
                    <span className={styles.confDate}>{c.date}</span>
                  </div>
                  <div className={styles.confActions}>
                    <span className={`${styles.statusBadge} ${styles[s.color]}`}>{s.label}</span>
                    {c.youtube ? (
                      <a href={c.youtube} target="_blank" rel="noreferrer" className={styles.ytLink}>
                        ▶️ Watch
                      </a>
                    ) : (
                      <span className={styles.ytPending}>YouTube link pending</span>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
          <p className={styles.ytNote}>
            📺 Follow the Rotary year on YouTube with{' '}
            <a href="https://youtube.com/@naijatechsis" target="_blank" rel="noreferrer">
              Mercy Babayemi
            </a>
          </p>
        </div>

        {/* Executive team */}
        <div className={styles.execCard}>
          <h3 className={styles.confTitle}>🤝 Executive Team</h3>
          <div className={styles.execGrid}>
            {LEADERSHIP.exec.map(e => (
              <div key={e.role} className={styles.execItem}>
                <div className={styles.execRole}>{e.role}</div>
                <div className={styles.execName}>{e.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
