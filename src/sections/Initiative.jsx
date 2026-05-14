import { useReveal } from '../hooks/useReveal'
import { INITIATIVE } from '../data/portfolio'
import styles from './Initiative.module.css'

export default function Initiative() {
  const ref = useReveal()

  return (
    <section id="initiative" className="section section--alt">
      <div className={`reveal ${styles.card}`} ref={ref}>
        <div className={styles.text}>
          <span className="sec-chip">Initiative</span>
          <h2 className={styles.name}>{INITIATIVE.name}</h2>
          <p className={styles.tagline}>{INITIATIVE.tagline}</p>
          <p className={styles.desc}>{INITIATIVE.desc}</p>
          <div className={styles.btns}>
            <a href={INITIATIVE.links.site} target="_blank" rel="noreferrer" className="btn-primary">
              Visit fornaijakid.org
            </a>
            <a href={INITIATIVE.links.volunteer} target="_blank" rel="noreferrer" className="btn-secondary">
              Volunteer →
            </a>
            <a href={INITIATIVE.links.support} target="_blank" rel="noreferrer" className="btn-secondary">
              Support →
            </a>
          </div>
        </div>
        <div className={styles.badge}>
          <span className={styles.flag}>🇳🇬</span>
          <span className={styles.badgeLabel}>Nigerian Children</span>
          <span className={styles.badgeSub}>Digital Literacy Access</span>
        </div>
      </div>
    </section>
  )
}
