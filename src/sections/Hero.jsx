import { useReveal } from '../hooks/useReveal'
import { HERO } from '../data/portfolio'
import styles from './Hero.module.css'
import photo from '../assets/mercy.jpg'

export default function Hero() {
  const textRef = useReveal()
  const imgRef = useReveal()

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.glow} />

      <div className={`reveal ${styles.text}`} ref={textRef}>
        <div className={styles.eyebrow}>
          <span className={styles.dot} />
          Open to opportunities
        </div>

        <h1 className={styles.h1}>
          AI Systems<br />
          <span className={styles.accent}>Engineer</span>
          <span className={styles.sub}>&amp; Technical Writer</span>
        </h1>

        <p className={styles.desc}>{HERO.tagline}</p>

        <div className={styles.btns}>
          <a href={HERO.cta.href} className="btn-primary">View Work →</a>
          <a href={HERO.cta2.href} className="btn-secondary">Let's Talk</a>
        </div>

        <div className={styles.stats}>
          {HERO.stats.map(s => (
            <div key={s.label}>
              <div className={styles.statNum}>{s.num}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={`reveal ${styles.imgSide}`} ref={imgRef}>
        <div className={styles.imgFrame}>
          <img src={photo} alt="Mercy Babayemi" />
          <div className={styles.imgOverlay} />
        </div>
        <div className={`${styles.badge} ${styles.badge1}`}>
          <span className={styles.bdot} /> AI Systems Engineer
        </div>
        <div className={`${styles.badge} ${styles.badge2}`}>
          <span className={`${styles.bdot} ${styles.gold}`} /> Lagos, Nigeria 🇳🇬
        </div>
      </div>
    </section>
  )
}
