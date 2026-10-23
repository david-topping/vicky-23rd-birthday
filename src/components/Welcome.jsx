import { useEffect } from 'react'
import { config } from '../config.js'
import { celebrate, burst } from '../confetti.js'

// Counts whole days between her local date and the birthday, so it flips at her midnight
function ageLine() {
  const now = new Date()
  const today = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate())
  const days = Math.round((today - Date.parse(config.birthday)) / 86400000)
  const plural = (n) => `${n} day${n === 1 ? '' : 's'}`
  if (days === 0) return `${config.age} today 🥳`
  if (days < 0) return `${config.age} in ${plural(-days)} 🥳`
  return `${config.age} and ${plural(days)} old 🥳`
}

export default function Welcome({ onDone }) {
  useEffect(() => {
    burst()
    const stop = celebrate(config.welcomeDuration - 1500)
    const timer = setTimeout(onDone, config.welcomeDuration)
    return () => {
      stop()
      clearTimeout(timer)
    }
  }, [onDone])

  return (
    <section className="screen welcome" onClick={burst}>
      <div className="cake" aria-hidden="true">🎂</div>
      <h1 className="script">Happy Birthday</h1>
      <h2 className="name">{config.welcomeName}!</h2>
      <p className="age">{ageLine()}</p>
      <div className="progress" aria-hidden="true">
        <span style={{ animationDuration: `${config.welcomeDuration}ms` }} />
      </div>
    </section>
  )
}
