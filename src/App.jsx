import { useCallback, useEffect, useState } from 'react'
import { config } from './config.js'
import Welcome from './components/Welcome.jsx'
import PasswordGate from './components/PasswordGate.jsx'
import Reveal from './components/Reveal.jsx'

// welcome → card → friday → saturday
// Nothing is saved, so every visit starts at the intro and asks for the
// passwords again. Within a visit she can move back and forth between
// pages she has already unlocked.
export default function App() {
  const [unlocked, setUnlocked] = useState(null)
  const [stage, setStage] = useState('welcome')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [stage])

  const unlock = (next) => {
    setUnlocked((prev) => (prev === 'saturday' ? prev : next))
    setStage(next)
  }

  const finishWelcome = useCallback(() => setStage(unlocked ? 'friday' : 'card'), [unlocked])

  return (
    <main className="app">
      <div className="hearts" aria-hidden="true">
        {Array.from({ length: 12 }, (_, i) => (
          <span key={i} style={{ '--i': i }}>💗</span>
        ))}
      </div>

      {stage === 'welcome' && <Welcome onDone={finishWelcome} />}

      {stage === 'card' && (
        <PasswordGate
          key="card"
          emoji="💌"
          title="The password is in your card…"
          password={config.cardPassword}
          onUnlock={() => unlock('friday')}
        />
      )}

      {stage === 'friday' && (
        <div className="stack">
          <button className="back" onClick={() => setStage('welcome')}>← Replay intro</button>
          <Reveal {...config.friday} />
          {unlocked === 'saturday' ? (
            <button onClick={() => setStage('saturday')}>Next: {config.saturday.day} →</button>
          ) : (
            <PasswordGate
              key="saturday"
              emoji="🔒"
              title="But wait, there's more…"
              hint="I'll give you the next password after Friday night 😉"
              password={config.saturdayPassword}
              onUnlock={() => unlock('saturday')}
              compact
            />
          )}
        </div>
      )}

      {stage === 'saturday' && (
        <div className="stack">
          <button className="back" onClick={() => setStage('friday')}>← Back to {config.friday.day}</button>
          <Reveal {...config.saturday} />
          <p className="signoff">Happy birthday, {config.name} 💖</p>
        </div>
      )}
    </main>
  )
}
