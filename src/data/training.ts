export interface Training {
  title: string
  org: string
  period: string
  status: 'in-progress' | 'upcoming' | 'complete'
  focus?: string[]
}

export const trainings: Training[] = [
  {
    title: 'Software Development Track',
    org: 'Digital Egypt Pioneers Initiative (DEPI)',
    period: 'Expected Completion — January 2027',
    status: 'in-progress',
    focus: [
      'React',
      'Next.js',
      'TypeScript',
      'UI/UX',
      'Node.js',
      'Express',
      'NestJS',
      'Docker',
      'Unit Testing',
      'Business English',
      'Professional Soft Skills',
      'Freelance Coaching',
    ],
  },
  {
    title: 'Build with AI — Masr Edition 2025',
    org: 'Google for Developers & ITI',
    period: '2025',
    status: 'complete',
  },
  {
    title: '100 Days of Code — Python Bootcamp',
    org: 'Dr. Angela Yu',
    period: 'In Progress',
    status: 'in-progress',
  },
]
