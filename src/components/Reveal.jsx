import { useEffect } from 'react'
import { celebrate } from '../confetti.js'

export default function Reveal({ emoji, day, title, place, time, address, image, note }) {
  useEffect(() => celebrate(2500), [])

  return (
    <section className="card reveal">
      <div className="emoji big" aria-hidden="true">{emoji}</div>
      <p className="eyebrow">{day}</p>
      <h2>{title}</h2>
      {image && <img className="photo" src={`${import.meta.env.BASE_URL}${image}`} alt={place} />}
      <dl className="details">
        <div><dt>Where</dt><dd>{place}</dd></div>
        <div><dt>When</dt><dd>{time}</dd></div>
        <div><dt>Address</dt><dd>{address}</dd></div>
      </dl>
      {note && <p className="note">{note}</p>}
    </section>
  )
}
