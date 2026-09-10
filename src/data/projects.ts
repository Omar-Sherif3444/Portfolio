export interface Project {
  slug: 'eyt-cinema' | 'dokan-shop'
  name: string
  tagline: string
  description: string
  techStack: string[]
  features: string[]
  github: string
  live?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    slug: 'eyt-cinema',
    name: 'EYT — Cinema Booking System',
    tagline: 'Full-stack PHP & MySQL ticketing platform',
    description:
      'A full-stack cinema ticketing platform built with PHP and MySQL. Users register, browse showtimes, reserve seats, and receive a scannable e-ticket — with the booking flow engineered around data integrity, so two people can never walk away with the same seat.',
    techStack: ['PHP', 'MySQL', 'mysqli', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'QRCode.js'],
    features: [
      'Session-based authentication with bcrypt password hashing (password_hash / password_verify) and fully parameterized queries against SQL injection',
      'Interactive seat map that fetches live occupancy before rendering, locking already-booked seats from selection',
      'Transactional booking engine — seat availability is re-checked and the booking is written inside a single SQL transaction with rollback on conflict, preventing race-condition double bookings',
      'Auto-generated booking codes and an e-ticket page with a QR code summarizing the reservation',
      '"My Bookings" history page with upcoming / past filtering',
      'Responsive multi-page UI covering movie listings, showtimes, checkout, FAQ, and legal pages',
    ],
    github: 'https://github.com/Omar-Sherif3444/EYT-System-PHP-',
    featured: true,
  },
  {
    slug: 'dokan-shop',
    name: 'Dokan Shop',
    tagline: 'Responsive e-commerce storefront UI',
    description:
      'A responsive, multi-page storefront front-end for a fashion retailer, built with Bootstrap 5. The project is focused on catalog browsing UX and interface craft — clean layouts, an animated hero carousel, and real-world form patterns for account creation.',
    techStack: ['HTML5', 'CSS3', 'Bootstrap 5', 'JavaScript', 'Font Awesome'],
    features: [
      'Category browsing across dedicated Men\'s, Women\'s, Kids\', and Accessories pages',
      'Animated hero carousel and a "Hot Deals" promotional section',
      'Sign-up / sign-in forms with real-world UX patterns — country selector, date picker, terms acceptance',
      'Feedback and contact sections with store details and a store-visit video',
      'Fully responsive, collapsible navigation with no horizontal overflow at any breakpoint',
    ],
    github: 'https://github.com/Omar-Sherif3444/Dokan-Shop',
    live: 'https://dokan-shop-iota.vercel.app/',
    featured: false,
  },
]
