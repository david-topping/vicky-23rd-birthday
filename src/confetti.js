import confetti from 'canvas-confetti'

const colors = ['#ff4f93', '#ff8fb8', '#ffc2d9', '#ffffff', '#ffd166']

export function burst() {
  confetti({ particleCount: 120, spread: 90, origin: { y: 0.6 }, colors })
}

// Confetti cannons from both sides for `duration` ms
export function celebrate(duration = 3000) {
  const end = Date.now() + duration
  let frame
  const tick = () => {
    confetti({ particleCount: 4, angle: 60, spread: 60, origin: { x: 0, y: 0.7 }, colors })
    confetti({ particleCount: 4, angle: 120, spread: 60, origin: { x: 1, y: 0.7 }, colors })
    if (Date.now() < end) frame = requestAnimationFrame(tick)
  }
  tick()
  return () => cancelAnimationFrame(frame)
}
