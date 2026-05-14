import { useRevealChildren } from '../hooks/useReveal'
import SectionHeader from '../components/SectionHeader'
import { ABOUT } from '../data/portfolio'
import styles from './About.module.css'

export default function About() {
  const gridRef = useRevealChildren()

  return (
    <section id="about" className="section section--alt">
      <SectionHeader chip="About" title="Builder. Researcher. Educator." />
      <div className={styles.grid} ref={gridRef}>
        <div className="reveal-child">
          {ABOUT.bio.map((p, i) => (
            <p key={i} className={styles.bio}>{p}</p>
          ))}
          <div className={styles.tags}>
            {ABOUT.tags.map(t => (
              <span key={t} className={styles.tag}>{t}</span>
            ))}
          </div>
        </div>

        <div className={`${styles.cards} reveal-child`}>
          {ABOUT.cards.map(c => (
            <div key={c.title} className={`card ${styles.acard}`}>
              <div className={styles.icon}>{c.icon}</div>
              <div>
                <h4 className={styles.cardTitle}>{c.title}</h4>
                <p className={styles.cardBody}>{c.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
