import { useRevealChildren } from '../hooks/useReveal'
import SectionHeader from '../components/SectionHeader'
import { SERVICES } from '../data/portfolio'
import styles from './Services.module.css'

export default function Services() {
  const gridRef = useRevealChildren()

  return (
    <section id="services" className="section">
      <SectionHeader chip="Services" title="Work With Me" sub="Digital products, web services, AI education, and technical writing under the Naija Tech Sis brand." />
      <div className={styles.grid} ref={gridRef}>
        {SERVICES.map(s => (
          <div key={s.title} className={`${styles.card} reveal-child`}>
            <div className={styles.icon}>{s.icon}</div>
            <h3 className={styles.title}>{s.title}</h3>
            <p className={styles.desc}>{s.desc}</p>
            <div className={styles.price}>{s.price}</div>
            <a
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel={s.href.startsWith('http') ? 'noreferrer' : undefined}
              className={styles.cta}
            >
              {s.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
