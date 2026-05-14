import styles from './SectionHeader.module.css'

export default function SectionHeader({ chip, title, sub }) {
  return (
    <div className={styles.wrap}>
      <span className="sec-chip">{chip}</span>
      <h2 className="sec-title">{title}</h2>
      <div className="teal-bar" />
      {sub && <p className="sec-sub">{sub}</p>}
    </div>
  )
}
