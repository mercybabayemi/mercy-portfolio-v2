// ─────────────────────────────────────────────
//  PORTFOLIO DATA  —  edit everything here
// ─────────────────────────────────────────────

export const HERO = {
  name: 'Mercy Babayemi',
  title: 'AI Systems Engineer',
  subtitle: '& Technical Writer',
  tagline:
    'I build production AI pipelines, NLP evaluation frameworks, and intelligent applications — and document them so humans actually understand them. Founder of ForNaijaKids. Based in Lagos, Nigeria.',
  stats: [
    { num: '30M+', label: 'Records Processed' },
    { num: '14', label: 'GitHub Repos' },
    { num: '6yrs', label: 'Technical Writing' },
  ],
  cta: { primary: 'View Work', href: '#projects' },
  cta2: { label: "Let's Talk", href: '#contact' },
}

export const ABOUT = {
  bio: [
    'From studying English at the University of Lagos to teaching secondary school students English and Literature in English to starting a data analysis internship and now engineering AI systems at Labs by Semicolon — my journey is one of intentional transition, deep curiosity, and relentless craft.',
    'I specialize in AI/ML infrastructure, NLP research, and data science and engineering. I have built CPU-native/GPU content generation pipelines, African pedagogical evaluation frameworks, and full-stack AI products built for real African contexts.',
    'My edge? I think across linguistics, pedagogy, and systems engineering simultaneously. My BA in English Language is not background noise — it is the reason the AI I build understands how people actually learn and communicate.',
  ],
  tags: [
    'FastAPI', 'Python', 'NLP', 'Pydantic v2', 'Ollama',
    'n8n', 'React', 'HuggingFace', 'Paystack', 'PostgreSQL',
    'Docker', 'Technical Writing', 'Mermaid', 'REST APIs',
  ],
  cards: [
    { icon: '🏛️', title: 'Labs by Semicolon', body: 'AI Systems Engineering intern — EnumVerse content layer, VentureMarker pipeline (~56K records), AfriPed evaluation framework.' },
    { icon: '🎓', title: 'University of Lagos', body: 'B.A. English Language — linguistic foundation that powers my NLP intuition and technical writing depth.' },
    { icon: '🌱', title: 'ForNaijaKids', body: 'Founder. Bridging the digital divide in suburban Nigerian communities — putting computers in children\'s hands and teaching digital literacy so no child is left behind in the digital age.' },
    { icon: '📡', title: 'Naija Tech Sis', body: 'Founder. AI education courses, web services, and digital products for Nigerian businesses and global learners.' },
    { icon: '🌍', title: 'Rotaract Club of Lagos Island', body: 'President 2026–2027. "Create Lasting Impact" — Porto Novo June, President Elect Conference May.' },
  ],
}

export const SKILLS = [
  { icon: '🤖', title: 'AI Engineering', tags: ['FastAPI', 'Ollama', 'Open Source Models', 'Pydantic v2', 'LLM Pipelines', 'LangChain', 'LangGraph', 'Model Finetuning', 'Prompt Engineering', 'Agentic Systems'] },
  { icon: '🧠', title: 'AI, NLP & ML', tags: ['Large Language Models', 'HuggingFace', 'Transformers', 'BERT', 'NLTK', 'SpaCy', 'Feature Engineering', 'ROUGE-L', "Bloom's Taxonomy", 'Evaluation Metrics', 'PyTorch', 'TensorFlow', 'Scikit-learn', 'NumPy'] },
  { icon: '🗄️', title: 'Data Engineering', tags: ['Pandas', 'PostgreSQL', 'MongoDB', 'MySQL', '30M+ records', 'ETL', 'Data Cleaning'] },
  { icon: '⚡', title: 'Automation', tags: ['n8n', 'Make', 'Tally', 'Paystack', 'Webhooks', 'WebSockets', 'Socket.IO', 'Workflow Design'] },
  { icon: '🌐', title: 'Full-Stack Dev', tags: ['React', 'TypeScript', 'Tailwind CSS', 'Flask', 'Spring Boot', 'Node.js', 'Django', 'MongoDB', 'Socket.IO', 'Redis', 'REST APIs', 'JWT', 'HTML/CSS', 'JavaScript'] },
  { icon: '✍️', title: 'Technical Writing', tags: ['Software Requirements Spec', 'API Docs', 'User Manuals', 'Tutorials', 'Architecture Docs', 'Mermaid Diagrams', 'Changelogs'] },
  { icon: '📐', title: 'System Design', tags: ['Requirements Analysis', 'Wireframes', 'Mermaid', 'Class Diagrams', 'Use Cases', 'ER Diagrams', 'Architecture Docs'] },
  { icon: '📊', title: 'Research & Eval', tags: ['G-Eval', 'RubricEval', 'AfriPed', 'Gradio', 'HuggingFace Spaces', 'Google Colab', 'Jupyter Notebook', 'Academic Writing', 'ArXiv'] },
]

export const PROJECTS = {
  featured: {
    badge: '⭐ Featured Build',
    title: 'EnumVerse — AI-Powered E-Learning Platform',
    desc: 'An intelligent e-learning content generation system built at Labs by Semicolon. CPU-native AI pipeline (phi3.5 via Ollama), structured content and assessment generation with Pydantic v2 validation, and a coordinated multi-agent architecture. Runtime benchmark: 7–15 minutes on CPU. Contributed as AI Systems Engineering intern.',
    stack: ['FastAPI', 'Pydantic v2', 'Ollama / phi3.5', 'CPU-native', 'Agent Architecture', 'Python'],
    links: [{ label: 'Private — Company IP', href: null }],
    color: 'gold',
  },
  grid: [
    {
      badge: 'Data Pipeline',
      title: 'VentureMarker',
      desc: 'Company data pipeline scraping and structuring ~56,000 company records. Powers the VentureMarker product at Labs by Semicolon.',
      stack: ['Python', 'Web Scraping', 'PostgreSQL', 'ETL'],
      links: [{ label: 'Private', href: null }],
    },
    {
      badge: 'Full-Stack',
      title: 'BRC Auction App',
      desc: 'Full-featured auction platform with real-time bidding, user auth, and payment integration. Built for the Black Rising Community fellowship.',
      stack: ['React', 'Node.js', 'REST API', 'Auth'],
      links: [{ label: 'GitHub →', href: 'https://github.com/mercybabayemi' }],
    },
    {
      badge: 'Web Dev',
      title: 'BRC Website',
      desc: 'Contributed to the development and integration of the Black Rising Community website as part of my fellowship responsibilities.',
      stack: ['React', 'HTML/CSS', 'JavaScript'],
      links: [{ label: 'GitHub →', href: 'https://github.com/mercybabayemi' }],
    },
    {
      badge: 'Web Dev',
      title: 'Niger Local Links',
      desc: 'Community directory platform for local businesses in Niger State, connecting residents with local vendors and services.',
      stack: ['React', 'CSS', 'Directory'],
      links: [{ label: 'GitHub →', href: 'https://github.com/mercybabayemi' }],
    },
    {
      badge: 'Data',
      title: 'Dewey Data Pipeline',
      desc: 'Large-scale data ingestion and processing pipeline handling 30M+ records for the Labs by Semicolon data team.',
      stack: ['Python', '30M records', 'ETL', 'PostgreSQL'],
      links: [],
    },
    {
      badge: 'AI Education',
      title: 'Naija Tech Sis Courses',
      desc: 'AI & tech education courses on Selar and Gumroad with dual Naira/dollar pricing, targeting Nigerian and global audiences.',
      stack: ['Selar', 'Gumroad', 'AI Education'],
      links: [{ label: 'naijatechsis.com →', href: 'https://naijatechsis.com' }],
    },
  ],
}

export const RESEARCH = {
  title: 'African Pedagogical Evaluation Framework (AfriPed)',
  chip: '📄 Standalone Framework',
  desc: [
    'AfriPed is a standalone NLP evaluation framework built to assess AI-generated educational content through the lens of African pedagogy. Not just an embedded EnumVerse layer — a citable, independent contribution to educational AI evaluation.',
    "Central empirical finding: negative ROUGE-L / Bloom's Taxonomy accuracy correlation — challenging assumptions about surface-level text similarity as a proxy for educational quality.",
    'Benchmarked against G-Eval, RubricEval, ELF, and the NAACL 2025 AI tutor taxonomy. Publication targets: AIED 2026 and AfricaNLP 2026.',
  ],
  stack: ['HuggingFace', 'ROUGE-L', "Bloom's Taxonomy", 'G-Eval', 'Gradio', 'Python Package', 'AIED 2026'],
  finding: "Negative correlation between ROUGE-L scores and Bloom's Taxonomy accuracy — high lexical overlap does not guarantee pedagogically sound AI-generated content.",
  links: [
    { label: 'Google Scholar', href: 'https://scholar.google.com', placeholder: true },
    { label: 'arXiv', href: 'https://arxiv.org', placeholder: true },
    { label: 'HuggingFace Space', href: 'https://huggingface.co/spaces', placeholder: true },
    { label: 'ResearchGate', href: 'https://researchgate.net', placeholder: true },
    { label: 'Semantic Scholar', href: 'https://semanticscholar.org', placeholder: true },
  ],
  stats: [
    { num: '4', label: 'Frameworks Benchmarked' },
    { num: '2026', label: 'Target Publication' },
    { num: 'pip', label: 'Installable Library' },
    { num: '↘', label: 'ROUGE-L vs Blooms' },
  ],
}

export const TECH_WRITING = {
  intro: 'My BA in English Language from UNILAG is not decoration — it is the engine behind every doc, tutorial, and research paper I produce. Six years writing publicly on Medium, across styles and audiences.',
  styles: [
    {
      type: 'Tutorial',
      icon: '📖',
      title: 'Building CPU-Native LLM Pipelines with Ollama and FastAPI',
      desc: 'Step-by-step technical guide with code blocks, architecture diagrams, and troubleshooting notes.',
      medium: 'https://medium.com/@mercybabayemi',
    },
    {
      type: 'NLP / Research',
      icon: '🔬',
      title: "Why ROUGE-L Alone Can't Evaluate Educational AI Content",
      desc: 'Research-style explainer translating empirical findings for a practitioner audience.',
      medium: 'https://medium.com/@mercybabayemi',
    },
    {
      type: 'Beginner Guide',
      icon: '🚀',
      title: '5 AI Tools Every Nigerian Freelancer Needs Right Now',
      desc: 'Accessible, outcome-driven writing for non-technical audiences — practical over jargon.',
      medium: 'https://medium.com/@mercybabayemi',
    },
    {
      type: 'Journey / Reflection',
      icon: '🗺️',
      title: 'From English Teacher to AI Engineer: What I Wish I Knew',
      desc: 'Personal narrative mapping a career transition — story-driven with real technical anchors.',
      medium: 'https://medium.com/@mercybabayemi',
    },
    {
      type: 'Roadmap / Course',
      icon: '🗓️',
      title: 'The 90-Day Python Roadmap for Nigerian Beginners',
      desc: 'Structured learning path with milestones, resources, and community touchpoints.',
      medium: 'https://medium.com/@mercybabayemi',
    },
    {
      type: 'Architecture Doc',
      icon: '📐',
      title: 'Documenting a Multi-Agent AI System with Mermaid Diagrams',
      desc: 'Technical documentation style: system design, data flow, and component relationships in Mermaid.',
      medium: 'https://medium.com/@mercybabayemi',
    },
  ],
  upcomingSuggestions: [
    { type: 'API Reference', idea: 'REST API Docs for EnumVerse — endpoints, schemas, request/response examples' },
    { type: 'User Manual', idea: 'Non-technical user manual for a Paystack-integrated business website' },
    { type: 'Changelog', idea: 'AfriPed v0.1 → v0.2 changelog with migration notes' },
    { type: 'Case Study', idea: 'Data Pipeline Case Study: Processing 30M records on a budget' },
  ],
}

export const EXPERIENCE = {
  paid: [
    {
      role: 'AI Systems Engineering Intern',
      org: 'Labs by Semicolon',
      period: 'Oct 2025 – Mar 2026',
      type: 'Full-time Internship',
      points: [
        'Built EnumVerse AI content & assessment generation layer (FastAPI + Pydantic v2 + Ollama)',
        'Developed VentureMarker data pipeline — scraped and structured ~56,000 company records',
        'Created AfriPed evaluation framework — empirical NLP research now targeting AIED 2026',
        'Processed 30M+ records for the Dewey Data pipeline project',
        'Documented 14 GitHub repositories with full technical documentation',
      ],
    },
    {
      role: 'Scholarship Fellow & Website Contributor',
      org: 'Black Rising Community (BRC)',
      period: 'Sep 2024 – Dec 2025',
      type: 'Fellowship',
      points: [
        'Contributed to BRC website development and integration',
        'Participated in monthly development sessions and peer mentorship (buddy system)',
        'Represented BRC through content creation: visuals, testimonials, media outreach',
        'Co-planned community events including the end-of-year celebration',
        'Built BRC Auction App — real-time bidding platform for the community',
      ],
    },
    {
      role: 'Class Representative / Priestess',
      org: 'Semicolon Africa',
      period: 'Sep 2024 – Dec 2025',
      type: 'Leadership Role',
      points: [
        'Elected representative for Software Engineering cohort',
        'Coordinated between administrative team and 50+ trainees',
        'Managed welfare, event planning, and stakeholder communication across multiple cohorts',
      ],
    },
  ],
  volunteering: [
    {
      role: 'Founder',
      org: 'ForNaijaKid Initiative',
      period: 'Jan 2026 – Present',
      type: 'Founder',
      icon: '🌱',
      points: [
        'Founded initiative to bridge the digital divide in suburban communities across Nigeria',
        'Running outreach programs teaching children digital literacy and computer fundamentals',
        'Operating in Lagos with expansion targets across Nigerian communities',
        '"Every child has the potential to become when shown infinite possibilities"',
      ],
      link: 'https://fornaijakid.org',
    },
    {
      role: 'President (2026–2027)',
      org: 'Rotaract Club of Lagos Island',
      period: 'Jul 2026 – Jun 2027',
      type: 'President',
      icon: '🏆',
      points: [
        'Leading "Create Lasting Impact" theme — 25 projects target for the year',
        'Porto Novo international trip — June 2026',
        'President Elect Conference — May 2026',
        'Previous roles: Club Secretary, Welfare, Basic Education & Literacy Rep',
        'Documenting all initiatives on YouTube for impact evidence',
      ],
      link: null,
    },
    {
      role: 'Volunteer',
      org: 'Rotary Club of Lagos Island',
      period: 'Apr 2022 – Present',
      type: 'Volunteer',
      icon: '⚙️',
      points: [
        'Community service: leadership development, education, humanitarian outreach',
        'Roles held: Club Secretary, Welfare Personnel, Basic Education & Literacy Rep',
        'Fundraising, advocacy programs, and local project coordination',
      ],
      link: null,
    },
    {
      role: 'English Language Teacher',
      org: 'RevolvingCity',
      period: 'Aug 2023 – Jan 2024',
      type: 'Volunteer Teacher',
      icon: '📚',
      points: [
        'Created and recorded interactive English lessons for underserved communities',
        'Sessions distributed via interactive displays in remote areas without qualified teachers',
        'Contributed to improving literacy, communication skills, and learning confidence',
      ],
      link: null,
    },
  ],
}

export const LEADERSHIP = {
  intro: 'Rotaract Club of Lagos Island — President 2026–2027. Every event, conference, and project will be documented and linked here.',
  conferences: [
    { name: 'President Elect Conference', date: 'May 2026', status: 'upcoming', youtube: null },
    { name: 'Porto Novo International Trip', date: 'June 2026', status: 'upcoming', youtube: null },
    { name: 'President Installation Ceremony', date: 'July 2026', status: 'upcoming', youtube: null },
  ],
  theme: 'Create Lasting Impact',
  targetProjects: 25,
  exec: [
    { role: 'President', name: 'Mercy Babayemi' },
    { role: 'VP', name: 'Victoria Remilekun' },
    { role: 'IPP', name: 'Orji Michael' },
    { role: 'Partnerships', name: 'Alfred Odunayo' },
    { role: 'Treasurer', name: 'Jeremiah' },
    { role: 'Secretary', name: 'Hubaidat' },
    { role: 'Welfare', name: 'Khalidat' },
    { role: 'Tech', name: 'Dolapo Abdullahi' },
    { role: 'Social Media', name: 'Ogbebor Oluwadoyisola' },
  ],
}

export const SERVICES = [
  {
    icon: '🌐',
    title: 'Website Development',
    desc: 'Industry-specific websites for Nigerian businesses — from features and functionality to full documentation, wireframes, Mermaid diagrams, class diagrams, use case diagrams, and deployment. Paystack integration, Tally forms, n8n/Make automation included.',
    price: 'Custom Pricing',
    cta: 'Book a Call →',
    href: '#contact',
  },
  {
    icon: '📊',
    title: 'Data Analysis Template',
    desc: 'Ready-to-use digital product for data analysis workflows. Structured templates, guided processes, and practical frameworks for Nigerian businesses and analysts.',
    price: 'Available on Selar',
    cta: 'Get Template →',
    href: 'https://selar.co',
  },
  {
    icon: '📝',
    title: 'Technical Writing',
    desc: 'API documentation, user manuals, architecture docs, system design with Mermaid/class diagrams, tutorials, and research writing. From technical jargon to plain English — I bridge both worlds.',
    price: 'Contact for Rates',
    cta: 'Enquire →',
    href: '#contact',
  },
  {
    icon: '💻',
    title: 'Programming Tutoring',
    desc: '1-on-1 intro to programming for absolute beginners. Python, web fundamentals, or AI basics — taught by someone who was a teacher first and an engineer second.',
    price: 'Contact for Rates',
    cta: 'Enquire →',
    href: '#contact',
  },
  {
    icon: '📣',
    title: 'Meta & Google Ads',
    desc: 'Paid social and search advertising for Nigerian brands. Campaign setup, audience targeting, creative strategy, and performance reporting. Results-focused, no fluff.',
    price: 'Service Fee — Contact for Quote',
    cta: 'Get Quote →',
    href: '#contact',
  },
]

export const FASHION = {
  brand: 'Aafinoge',
  tagline: 'Wearable Identity. African Luxury.',
  desc: "Aafinoge is a fashion brand rooted in African identity and contemporary elegance. Every piece is a statement — crafted with intention, worn with confidence. Follow the journey.",
  links: [
    { label: 'Website', icon: '🌐', href: 'https://aafinoge.com' },          // ← replace
    { label: 'Instagram', icon: '📸', href: 'https://instagram.com/aafinoge' }, // ← replace
    { label: 'TikTok', icon: '🎵', href: 'https://tiktok.com/@aafinoge' },    // ← replace
    { label: 'Twitter / X', icon: '🐦', href: 'https://x.com/aafinoge' },     // ← replace
  ],
}

export const INITIATIVE = {
  name: 'ForNaijaKid',
  tagline: 'Every naija kid deserves to understand the world they will inherit.',
  desc: 'Bridging the digital divide in suburban communities across Nigeria — starting from Lagos. We visit communities, put computers in children\'s hands, and hand them a key to a world without borders. No child gets left behind in the digital age.',
  links: {
    site: 'https://fornaijakid.org',
    volunteer: 'https://fornaijakid.org/volunteer',
    support: 'https://fornaijakid.org/support',
  },
}

export const SOCIALS = [
  { icon: '🐙', label: 'github.com/mercybabayemi', href: 'https://github.com/mercybabayemi' },
  { icon: '✍️', label: 'medium.com/@mercybabayemi', href: 'https://medium.com/@mercybabayemi' },
  { icon: '💼', label: 'LinkedIn', href: 'https://linkedin.com/in/mercybabayemi' },
  { icon: '🎵', label: 'TikTok — @naijatechsis', href: 'https://tiktok.com/@naijatechsis' },
  { icon: '📸', label: 'Instagram — @naijatechsis', href: 'https://instagram.com/naijatechsis' },
  { icon: '▶️', label: 'YouTube — Naija Tech Sis', href: 'https://youtube.com/@naijatechsis' },
  { icon: '🌍', label: 'fornaijakid.org', href: 'https://fornaijakid.org' },
]
