export interface SkillGroup {
  title: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    items: ['Java', 'C', 'C++', 'JavaScript', 'TypeScript', 'Python'],
  },
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'HTML5', 'CSS3', 'Bootstrap', 'UI/UX Principles'],
  },
  {
    title: 'Backend',
    items: ['Spring Boot', 'Spring MVC', 'Node.js', 'Express', 'NestJS', 'PHP', 'Thymeleaf', 'Hibernate'],
  },
  {
    title: 'Tools & DevOps',
    items: ['Docker', 'Git', 'GitHub', 'MySQL', 'VS Code', 'Postman'],
  },
  {
    title: 'Core CS',
    items: ['Data Structures', 'Algorithms', 'Competitive Programming', 'Problem Solving', 'Unit Testing'],
  },
  {
    title: 'Professional',
    items: ['Business Communication', 'Technical English', 'Presentation', 'Teamwork', 'Freelancing'],
  },
]
