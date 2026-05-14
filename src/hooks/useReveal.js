import { useEffect, useRef } from 'react'

export function useReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px', ...options }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}

export function useRevealChildren(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const parent = ref.current
    if (!parent) return

    const children = parent.querySelectorAll('.reveal-child')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px', ...options }
    )

    children.forEach((child, i) => {
      child.style.transitionDelay = `${i * 0.07}s`
      observer.observe(child)
    })

    return () => observer.disconnect()
  }, [])

  return ref
}
