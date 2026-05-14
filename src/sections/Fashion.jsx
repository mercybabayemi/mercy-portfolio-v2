import { useReveal } from '../hooks/useReveal'
import { FASHION } from '../data/portfolio'
import styles from './Fashion.module.css'

export default function Fashion() {
  const ref = useReveal()

  return (
    <section id="fashion" className="section">
      <div className={`reveal ${styles.card}`} ref={ref}>
        <div className={styles.left}>
          <span className="sec-chip">Fashion</span>
          <h2 className={styles.brand}>{FASHION.brand}</h2>
          <p className={styles.tagline}>{FASHION.tagline}</p>
          <p className={styles.desc}>{FASHION.desc}</p>
          <div className={styles.links}>
            {FASHION.links.map(l => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className={styles.socialLink}
              >
                <span>{l.icon}</span>
                {l.label}
              </a>
            ))}
          </div>
          <p className={styles.note}>
            ✏️ <em>Links marked above are placeholders — update with live Aafinoge URLs in <code>src/data/portfolio.js</code></em>
          </p>
        </div>
        <div className={styles.right}>
          <div className={styles.logoBox}>
            <span className={styles.logoText}>Aafinoge</span>
            <span className={styles.logoSub}>Fashion · Identity · Africa</span>
          </div>
        </div>
      </div>
    </section>
  )
}
