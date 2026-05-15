import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>© {new Date().getFullYear()} Mercy Babayemi · Lagos, Nigeria 🇳🇬</span>
      <span>
        Built with Naija energy ·{' '}
        <a href="https://naijatechsis.com" target="_blank" rel="noreferrer">Mercy Babayemi</a>
      </span>
    </footer>
  )
}
