import { IProjectType } from '../interfaces/IProjects';
import { IExperienceItem } from '../interfaces/IExperience';
import { ISkillGroup } from '../interfaces/ISkills';

export const RESUME_S3_URL =
  import.meta.env.VITE_RESUME_S3_URL ||
  'https://majportfolio.s3.us-east-1.amazonaws.com/Matthew_Johnson_Resume.pdf';

export const LINKEDIN_URL = 'https://www.linkedin.com/in/matthew-johnson-dev';
export const GITHUB_URL = 'https://github.com/mattandbucs34';
export const EMAIL_ADDRESS = 'mailto:matthew@majportfolio.com';

export const FEATURED_PROJECTS: IProjectType[] = [
  {
    projectName: 'Total Officiating',
    imagePath: '/totalofficiating.png',
    alt: 'Total Officiating Platform Screenshot',
    href: 'https://totalofficiating.org',
    githubUrl: 'https://github.com/mattandbucs34/total_officiating',
    description:
      'A modern, full-stack sports officiating management platform featuring official registrations, tournament schedule tracking, venue location maps, and Stripe payment processing.',
    tags: ['Next.js 15', 'Payload CMS 3', 'PostgreSQL', 'Stripe', 'AWS S3', 'MUI v7', 'TypeScript'],
    featured: true,
    featuredOrder: 1,
  },
  {
    projectName: 'Right Call Umpires',
    imagePath: '/rightcallumpires.png',
    alt: 'Right Call Umpires Portal Screenshot',
    href: 'https://rightcallumpires.org',
    githubUrl: 'https://github.com/mattandbucs34/right-call-umpires',
    description:
      'Multi-tenant umpire organization portal and scheduling hub for managing assignors, official registrations, training resource distribution, and game assignments.',
    tags: ['Next.js 15', 'Payload CMS 3', 'Multi-Tenant', 'PostgreSQL', 'AWS S3', 'TypeScript'],
    featured: true,
    featuredOrder: 2,
  },
  {
    projectName: 'Diamond Legacy Events',
    imagePath: '/diamondlegacyevents.png',
    alt: 'Diamond Legacy Events Platform Screenshot',
    href: 'https://diamondlegacyevents.com',
    githubUrl: 'https://github.com/mattandbucs34/diamondlegacyevents',
    description:
      'Full-featured tournament management and team registration platform for baseball and softball events, team rosters, and real-time game schedules.',
    tags: ['Next.js 16', 'Payload CMS 3', 'PostgreSQL', 'MUI v9', 'AWS S3', 'TypeScript'],
    featured: true,
    featuredOrder: 3,
  },
];

export const EXPERIENCE_ITEMS: IExperienceItem[] = [
  {
    id: 'exp-usnews',
    role: 'Senior Software Developer',
    company: 'U.S. News & World Report',
    period: '2021 - Present',
    type: 'work',
    description: [
      'Develop and maintain high-traffic production web applications serving millions of site visitors.',
      'Architect responsive frontend interfaces using React, TypeScript, and modern design systems.',
      'Build robust backend services and REST APIs using Python, Django, and PostgreSQL.',
    ],
    skills: ['React', 'Python', 'Django', 'Java', 'PostgreSQL', 'AWS'],
  },
  {
    id: 'exp-cpat',
    role: 'Full Stack Software Developer',
    company: 'CPaT Global',
    period: '2019 - 2021',
    type: 'work',
    description: [
      'Contributed to scalable learning management software (LMS) serving aviation professionals worldwide.',
      'Designed reusable frontend UI components and optimized database query performance for large user bases.',
    ],
    skills: ['React', 'Typescript', 'Postgres', 'C#', 'ASP.NET Core'],
  },
  {
    id: 'exp-finance',
    role: 'Assistant Controller',
    company: 'Finance & Accounting',
    period: 'Prior to Software Engineering',
    type: 'education',
    description: [
      'Managed corporate financial reporting, budgeting, and systems analysis.',
      'Sharpened analytical thinking, complex systems architecture, and extreme attention to detail.',
    ],
    skills: ['Financial Analysis', 'Systems Architecture', 'Data Modeling'],
  },
  {
    id: 'exp-umpire',
    role: 'NCAA Division I Softball Umpire',
    company: 'NCAA Division I',
    period: 'Ongoing',
    type: 'leadership',
    description: [
      'Officiate high-stakes NCAA Division I softball games demanding decisive problem-solving under pressure, composure, and adaptability.',
    ],
    skills: ['Leadership', 'Decisive Action', 'High-Pressure Management'],
  },
];

export const SKILL_GROUPS: ISkillGroup[] = [
  {
    category: 'Frontend Development',
    skills: [
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'TypeScript' },
      { name: 'JavaScript (ES6+)' },
      { name: 'Material UI (MUI)' },
      { name: 'HTML5 & CSS3' },
    ],
  },
  {
    category: 'Backend & Database',
    skills: [
      { name: 'Python' },
      { name: 'Django' },
      { name: 'Node.js' },
      { name: 'Express' },
      { name: 'Payload CMS' },
      { name: 'PostgreSQL' },
      { name: 'REST APIs' },
      { name: 'C#' },
      { name: 'ASP.NET Core' },
    ],
  },
  {
    category: 'DevOps & Tools',
    skills: [
      { name: 'AWS (S3, EC2, Lightsail)' },
      { name: 'Git & GitHub' },
      { name: 'Stripe API' },
      { name: 'pnpm / npm' },
      { name: 'Vite' },
      { name: 'Vitest & Playwright' },
    ],
  },
];
