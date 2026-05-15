import { useRevealChildren } from '../hooks/useReveal'
import SectionHeader from '../components/SectionHeader'
import { PROJECTS } from '../data/portfolio'
import styles from './Projects.module.css'

function ProjectLink({ href, label }) {
  if (!href) return <span className={styles.disabledLink}>{label}</span>
  return <a href={href} target="_blank" rel="noreferrer" className={styles.link}>{label}</a>
}

export default function Projects() {
  const gridRef = useRevealChildren()
  const f = PROJECTS.featured

  return (
    <section id="projects" className="section section--alt">
      <SectionHeader chip="Projects" title="Things I've Built" />

      {/* Featured */}
      <div className={styles.featured}>
        <span className={styles.featBadge}>⭐ Featured Build</span>
        <h3 className={styles.projTitle}>{f.title}</h3>
        <p className={styles.projDesc}>{f.desc}</p>
        <div className="stack-tags" style={{ marginBottom: '1.2rem' }}>
          {f.stack.map(t => <span key={t} className="stack-tag">{t}</span>)}
        </div>
        <div className={styles.links}>
          {f.links.map(l => <ProjectLink key={l.label} {...l} />)}
        </div>
      </div>

      {/* Grid */}
      <div className={styles.grid} ref={gridRef}>
        {PROJECTS.grid.map(p => (
          <div key={p.title} className={`card ${styles.pcard} reveal-child`}>
            <span className={styles.cardBadge}>{p.badge}</span>
            <h4 className={styles.cardTitle}>{p.title}</h4>
            <p className={styles.cardDesc}>{p.desc}</p>
            <div className="stack-tags" style={{ marginBottom: '1rem' }}>
              {p.stack.map(t => <span key={t} className="stack-tag">{t}</span>)}
            </div>
            <div className={styles.links}>
              {p.links.map(l => <ProjectLink key={l.label} {...l} />)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
