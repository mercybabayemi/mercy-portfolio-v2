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
        <h1 className={styles.h1}>
          Mercy<br />
          <span className={styles.accent}>Babayemi</span>
        </h1>

        <p className={styles.location}>Lagos, Nigeria 🇳🇬</p>

        <div className={styles.btns}>
          <a href={HERO.cta.href} className="btn-primary">View Work →</a>
          <a href={HERO.cta2.href} className="btn-secondary">Let's Talk</a>
        </div>
      </div>

      <div className={`reveal ${styles.imgSide}`} ref={imgRef}>
        <div className={styles.imgFrame}>
          <img src={photo} alt="Mercy Babayemi" />
          <div className={styles.imgOverlay} />
        </div>
        <div className={`${styles.badge} ${styles.badge2}`}>
          <span className={`${styles.bdot} ${styles.gold}`} /> Lagos, Nigeria 🇳🇬
        </div>
      </div>
    </section>
  )
}
