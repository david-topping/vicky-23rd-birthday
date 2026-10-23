import { useState } from 'react'

const normalise = (s) => s.trim().toLowerCase()

export default function PasswordGate({ emoji, title, hint, password, onUnlock, compact }) {
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    if (normalise(value) === normalise(password)) {
      onUnlock()
    } else {
      setError(true)
      setTimeout(() => setError(false), 600)
    }
  }

  return (
    <section className={`card gate ${compact ? 'compact' : 'screen'}`}>
      <div className="emoji" aria-hidden="true">{emoji}</div>
      <h2>{title}</h2>
      {hint && <p className="hint">{hint}</p>}
      <form onSubmit={submit} className={error ? 'shake' : ''}>
        <input
          type="text"
          inputMode="text"
          autoComplete="off"
          autoCapitalize="none"
          autoCorrect="off"
          spellCheck="false"
          placeholder="Enter password"
          aria-label="Password"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" disabled={!value.trim()}>Unlock</button>
      </form>
      <p className="error" role="alert">{error ? 'Not quite… try again 💕' : ' '}</p>
    </section>
  )
}
