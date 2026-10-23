// ✏️ Edit everything about the surprise here.
// Passwords are case-insensitive and ignore spaces at the start/end.
// Note: anyone who digs through the page source could find these, so
// don't reuse a real password.

export const config = {
  name: 'Vicky',
  // Shown on the "Happy Birthday" screen only
  welcomeName: 'Vic',
  age: 23,
  // YYYY-MM-DD. The intro says "23 in x days" before, "23 today" on the day, "23 and x days old" after
  birthday: '2026-10-28',

  // How long the "Happy Birthday" screen shows before moving on (ms)
  welcomeDuration: 6000,

  cardPassword: 'ilovebella!',
  saturdayPassword: 'victheric!',

  friday: {
    emoji: '🍝',
    day: 'Friday 30th',
    title: "We're going out for dinner!",
    place: 'Piggs Spanish Wine Bar & Café',
    time: '8:00pm',
    address: '171 Bruntsfield Pl, Edinburgh EH10 4DG',
    image: 'friday.webp',
  },

  saturday: {
    emoji: '🎨',
    day: 'Saturday 31st',
    title: "We're going pottery painting!",
    place: 'Doodles Ceramic Workshop',
    time: '10:00am',
    address: '27-29 Marchmont Cres, Edinburgh EH9 1HQ',
    image: 'saturday.jpeg',
  },
}
