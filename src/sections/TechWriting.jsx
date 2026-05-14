import { useState, useEffect, useRef } from 'react'
import SectionHeader from '../components/SectionHeader'
import { TECH_WRITING } from '../data/portfolio'
import styles from './TechWriting.module.css'

function useMediumPosts() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const url = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mercybabayemi`
    fetch(url)
      .then(r => r.json())
      .then(data => { if (data.items) setPosts(data.items.slice(0, 3)) })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  return { posts, loading }
}

function WritingStyleBadge({ type }) {
  const map = {
    'Tutorial': 'teal',
    'NLP / Research': 'purple',
    'Beginner Guide': 'gold',
    'Journey / Reflection': 'gold',
    'Roadmap / Course': 'teal',
    'Architecture Doc': 'purple',
  }
  return <span className={`${styles.badge} ${styles[map[type] || 'teal']}`}>{type}</span>
}

export default function TechWriting() {
  const { posts, loading } = useMediumPosts()
  const [tab, setTab] = useState('styles')
  const gridRef = useRef(null)

  // Re-observe on tab change
  useEffect(() => {
    const parent = gridRef.current
    if (!parent) return
    const children = parent.querySelectorAll('.reveal-child')
    children.forEach(c => c.classList.remove('visible'))

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) }
        })
      },
      { threshold: 0.05 }
    )
    children.forEach((child, i) => {
      child.style.transitionDelay = `${i * 0.07}s`
      observer.observe(child)
    })
    return () => observer.disconnect()
  }, [tab, posts])

  const TABS = [
    { id: 'styles', label: '📐 Writing Styles' },
    { id: 'live',   label: '📡 Live on Medium' },
    { id: 'upcoming', label: '🗒️ Upcoming Formats' },
  ]

  return (
    <section id="writing" className="section section--alt">
      <SectionHeader
        chip="Technical Writing"
        title="Words That Work"
        sub="Six years on Medium. BA English from UNILAG. Writing that spans technical depth and human clarity — tutorials, research, reflections, roadmaps, and docs."
      />

      <div className={styles.tabs}>
        {TABS.map(t => (
          <button
            key={t.id}
            className={`${styles.tab} ${tab === t.id ? styles.activeTab : ''}`}
            onClick={() => setTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* WRITING STYLES */}
      {tab === 'styles' && (
        <div className={styles.grid} ref={gridRef}>
          {TECH_WRITING.styles.map(s => (
            <div key={s.title} className={`card ${styles.scard} reveal-child`}>
              <div className={styles.iconRow}>
                <span className={styles.ico}>{s.icon}</span>
                <WritingStyleBadge type={s.type} />
              </div>
              <h4 className={styles.cardTitle}>{s.title}</h4>
              <p className={styles.cardDesc}>{s.desc}</p>
              <a href={s.medium} target="_blank" rel="noreferrer" className={styles.readLink}>
                Read on Medium →
              </a>
            </div>
          ))}
        </div>
      )}

      {/* LIVE MEDIUM POSTS */}
      {tab === 'live' && (
        <div>
          {loading && (
            <div className={styles.loading}>
              <div className={styles.spinner} />
              <span>Fetching latest from Medium...</span>
            </div>
          )}
          {!loading && posts.length > 0 && (
            <div className={styles.grid} ref={gridRef}>
              {posts.map(post => (
                <a
                  key={post.guid}
                  href={post.link}
                  target="_blank"
                  rel="noreferrer"
                  className={`card ${styles.liveCard} reveal-child`}
                >
                  {post.thumbnail && (
                    <img src={post.thumbnail} alt={post.title} className={styles.thumb} />
                  )}
                  <div className={styles.liveBody}>
                    <span className={styles.liveDate}>
                      {new Date(post.pubDate).toLocaleDateString('en-GB', {
                        day: 'numeric', month: 'short', year: 'numeric'
                      })}
                    </span>
                    <h4 className={styles.cardTitle}>{post.title}</h4>
                    <p className={styles.cardDesc}>
                      {post.description?.replace(/<[^>]+>/g, '').slice(0, 140)}...
                    </p>
                    <span className={styles.readLink}>Read on Medium →</span>
                  </div>
                </a>
              ))}
            </div>
          )}
          {!loading && posts.length === 0 && (
            <div className={styles.fallback}>
              <p>Live feed unavailable —{' '}
                <a href="https://medium.com/@mercybabayemi" target="_blank" rel="noreferrer">
                  read all articles on Medium →
                </a>
              </p>
            </div>
          )}
          <div className={styles.allLink}>
            <a href="https://medium.com/@mercybabayemi" target="_blank" rel="noreferrer" className="btn-secondary">
              See All Articles on Medium →
            </a>
          </div>
        </div>
      )}

      {/* UPCOMING FORMATS */}
      {tab === 'upcoming' && (
        <div className={styles.upcomingGrid} ref={gridRef}>
          {TECH_WRITING.upcomingSuggestions.map(s => (
            <div key={s.type} className={`card ${styles.upCard} reveal-child`}>
              <span className={styles.upType}>{s.type}</span>
              <p className={styles.upIdea}>{s.idea}</p>
              <span className={styles.comingSoon}>In progress</span>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
