import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'
import styles from './Nav.module.css'

const LINKS = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Research',   href: '#research' },
  { label: 'Writing',    href: '#writing' },
  { label: 'Experience', href: '#experience' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Services',   href: '#services' },
  { label: 'Contact',    href: '#contact' },
]

export default function Nav() {
  const { theme, toggleTheme } = useTheme()
  const [active, setActive]   = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = document.querySelectorAll('section[id]')
      let current = ''
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 110) current = s.id
      })
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#home" className={styles.logo}>
        MB<span className={styles.dot}>.</span>
      </a>

      <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {LINKS.map(l => (
          <li key={l.href}>
            <a
              href={l.href}
              className={active === l.href.replace('#','') ? styles.activeLink : ''}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <div className={styles.right}>
        <button
          className={styles.toggle}
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
        <a href="#contact" className={styles.hireCta}>Hire Me</a>
        <button
          className={styles.burger}
          onClick={() => setMenuOpen(m => !m)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
