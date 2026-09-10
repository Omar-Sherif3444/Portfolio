export interface Achievement {
  title: string
  org: string
  date: string
  description: string
}

export const achievements: Achievement[] = [
  {
    title: '53rd Place — ECPC Qualifications',
    org: 'Egyptian Collegiate Programming Contest (ICPC)',
    date: 'July 2025',
    description:
      'Competed in the official Egyptian Collegiate Programming Contest Day 1 qualifications, solving complex algorithmic problems under time constraints.',
  },
  {
    title: 'Best Web Programming Project Award',
    org: 'Faculty of Computer Science — AASTMT',
    date: '2025',
    description:
      'Recognized for the full-stack implementation of a PHP cinema booking system featuring seat-level reservation logic, secure authentication, and dynamic MySQL database connectivity.',
  },
]
