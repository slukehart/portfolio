export interface Profile {
  name: string
  initials: string
  /** Set to a path under /public (e.g. '/images/me.jpg') to swap the initials avatar for a photo. */
  photo: string | null
  title: string
  location: string
  email: string
  github: string
  linkedin: string
  resumePath: string
}

export interface Job {
  title: string
  company: string
  dates: string
  bullets: string[]
}

export interface Project {
  title: string
  github: string
  description: string
  /** Reserved for future demo embeds (video/iframe). */
  demo: null
}

export interface SkillCategory {
  category: string
  skills: string[]
}

export interface Education {
  school: string
  degree: string
  dates: string
  details: string
  certifications: string[]
}

export const profile: Profile = {
  name: 'Spencer Lukehart',
  initials: 'SL',
  photo: '/images/me.png',
  title: 'senior full-stack software engineer',
  location: 'charleston, sc',
  email: 'lukehartsc@gmail.com',
  github: 'https://github.com/slukehart',
  linkedin: 'https://www.linkedin.com/in/spencerlukehartprofile/',
  resumePath: '/resume.pdf'
}

export const about: string[] = [
  "I'm a software engineer based in Charleston, South Carolina, where I work at Lasso building warehouse-management and logistics software. Most of my recent work sits at the intersection of full-stack product engineering and AI: production LLM agents that fix bugs autonomously, a code knowledge graph that gives agents structural memory, and the design-system groundwork for generative UI.",
  "My degree is in Computing in the Arts, and I still treat software as a creative medium — the best tools feel designed, not just built. If you'd like to chat, reach out at lukehartsc@gmail.com."
]

export const jobs: Job[] = [
  {
    title: 'Senior Software Engineer',
    company: 'Lasso',
    dates: 'April 2026–Present',
    bullets: [
      'Designed and shipped a production LLM agent that detects 500-class errors in Datadog, reasons over root cause, and acts across Slack, Jira, and GitHub — auto-fixing behind a three-stage evaluation framework (TDD reproduction, blast-radius analysis, UI response-path evals) or escalating to the area-expert engineer when agent gates don’t pass. Cut server errors 81% as traffic grew 20%.',
      'Built a code knowledge graph (FalkorDB) that indexes ~3,400 files, 449 routes, and 260+ data models across two repos, giving AI agents structural memory for blast-radius and cross-repo impact analysis over MCP.',
      'Authored the team’s end-to-end observability roadmap — correlating database queries, API request flows, and UI sessions by request ID with custom APM spans — plus a scheduled autonomous agent fleet that runs every two hours.',
      'Led architecture and production rollout of a single-spa micro-frontend running Vue 3 alongside the legacy Vue 2 app, authored the team’s migration runbook, and led team-wide adoption of Claude Code, Cursor, and AI-assisted development workflows.',
      'As part of the Vue 3 migration, replaced BootstrapVue with an AI-native design system on the path to generative UI: DTCG design tokens compiled via Style Dictionary into a runtime theme, headless reka-ui + Tailwind components, and a machine-readable component registry (JSON schemas for 40+ components) that AI agents consume over MCP.'
    ]
  },
  {
    title: 'Software Engineer III',
    company: 'Lasso',
    dates: 'April 2024–April 2026',
    bullets: [
      'Built a compliance-driven warehouse management system supporting complex logistics workflows in Node.js, Express, Vue, and Amazon Aurora MySQL, balancing user configurability with strict regulatory requirements.',
      'Reduced complex function execution by 90% by architecting a Redis caching layer.',
      'Designed and optimized high-performance SQL queries in Aurora MySQL, maintaining SLA compliance for real-time tracking and scanning operations.',
      'Partnered with principal engineers on large-scale system rebuilds; led technical discovery and end-to-end feature delivery with product stakeholders.'
    ]
  },
  {
    title: 'Software Engineer II',
    company: 'Bear Cognition',
    dates: 'October 2023–April 2024',
    bullets: [
      'Led migration of a legacy SPA from deprecated Nuxt 2 to Nuxt 3 with the Nitro server runtime, replacing the Firebase Functions backend with Nuxt server routes.',
      'Stood up the team’s CI/CD pipeline in GitHub Actions — automated lint, type-check, test, and deploy jobs for every PR.',
      'Architected the transition from PostgreSQL to Google Firestore; mentored junior developers through code reviews.'
    ]
  },
  {
    title: 'Software Engineer I',
    company: 'Bear Cognition',
    dates: 'July 2022–October 2023',
    bullets: [
      'Implemented backend features in Node.js and Google Cloud Functions powering a Nuxt frontend.',
      'Engineered data pipelines integrating Snowflake, PostgreSQL, and Tableau for customer reporting.',
      'Implemented microservices via AWS Lambda for internal task automation.'
    ]
  },
  {
    title: 'Developer',
    company: 'Zuora × College of Charleston',
    dates: 'January 2022–April 2022',
    bullets: [
      'Built event-driven REST APIs for asynchronous synchronization between the company database and Salesforce.'
    ]
  }
]

export const projects: Project[] = [
  {
    title: 'Agentic Content Generation',
    github: 'https://github.com/slukehart/agentic-automated-content-generation',
    description:
      'End-to-end news-to-video pipeline: agentic workflows select stories, write scripts with the Grok API, and render AI-avatar video through HeyGen. Built in Go and Python.',
    demo: null
  },
  {
    title: 'Menu Scanner',
    github: 'https://github.com/slukehart/menu-scanner',
    description:
      'Mobile app that scans line items on a menu and shows a photo and description of each dish. Built with Flutter/Dart.',
    demo: null
  },
  {
    title: 'Claude Review Extension',
    github: 'https://github.com/slukehart/claude-review-extension',
    description:
      'VS Code extension for reviewing Claude’s file changes at the hunk level — approve or reject line-by-line, inline in the editor. TypeScript.',
    demo: null
  }
]

export const skillCategories: SkillCategory[] = [
  {
    category: 'AI & Agents',
    skills: [
      'LLM integration',
      'agentic systems',
      'evaluation frameworks',
      'MCP servers',
      'prompt engineering',
      'Claude Code',
      'Cursor'
    ]
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'TypeScript', 'Express', 'Python', 'RESTful APIs', 'microservices']
  },
  {
    category: 'Frontend',
    skills: ['Vue 3', 'Nuxt 3', 'single-spa micro-frontends', 'Pinia', 'Vite', 'Tailwind']
  },
  {
    category: 'Cloud & Infra',
    skills: [
      'AWS (Lambda, S3, ECS, CloudWatch)',
      'GCP',
      'Docker',
      'GitHub Actions',
      'CircleCI',
      'Datadog'
    ]
  },
  {
    category: 'Data',
    skills: ['PostgreSQL', 'MySQL (Aurora)', 'Redis', 'Firestore', 'Snowflake']
  }
]

export const education: Education = {
  school: 'College of Charleston',
  degree: 'B.A. Computing in the Arts: Digital Media',
  dates: 'May 2022',
  details: 'Minor in German Language Studies · Dean’s List',
  certifications: [
    'Google Cloud Digital Leader (2022)',
    'AWS Certified Cloud Practitioner (2022)'
  ]
}
