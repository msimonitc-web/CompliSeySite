import { FeatureItem, FaqItem, CourseItem } from '../types';

export const LEGAL_INFO = {
  legalName: "COMPLISANC CONSULTING SERVICES (SEY)",
  tradeName: "CompliSey",
  brn: "B8440882",
  tradeLicence: "923280",
  jurisdiction: "Republic of Seychelles",
  description: "Systems integration & compliance technology, Awareness and Training.",
};

export const FOUNDERS = [
  {
    name: "Malcolm Simon",
    role: "Co-Founder & Lead Technical Consultant",
    tagline: "The Practical Edge",
    bio: "Malcolm brings over 20 years of international experience in building and securing digital infrastructures across the Seychelles, Cyprus, and Kenya. With deep roots in IT leadership for luxury hospitality and financial bureaus, Malcolm ensures that CompliSey's technical solutions are built on a foundation of architectural resilience and operational reliability.",
    specialties: ["IT Infrastructure & Security", "On-Premise Deployment", "Data Sovereignty", "CPD-certified in Fraud Management & AML Awareness"]
  },
  {
    name: "Eric D'Souza",
    role: "Co-Founder & Regulatory Compliance Expert",
    tagline: "The Policy Architect",
    bio: "Eric is a results-driven professional with a distinguished career in the Seychelles Non-Bank Financial Services Industry. During his tenure at the Financial Services Authority (FSA), Eric was instrumental in shaping national policy, notably coordinating the National Risk Assessment on Virtual Assets & VASPs and driving the enactment of the VASP Act, 2024.",
    specialties: ["Regulatory Compliance & Policy", "VASP Act & Virtual Assets", "National Risk Assessment", "Crypto-asset Anti-Financial Crime"]
  }
];

export const FEATURES_LIST: FeatureItem[] = [
  {
    id: 'onboarding',
    title: 'Customer Management & Onboarding',
    description: 'Add, search, and manage customers with a four-step onboarding wizard. Multiple entity types: Individuals, Corporations, Trusts, NGOs, NPOs, and FinTech. FATF-aligned CDD fields including beneficial ownership.',
    category: 'core',
    icon: 'Users'
  },
  {
    id: 'documents',
    title: 'Document Management',
    description: 'Secure upload, verification, and storage with AES-256 encryption. Document type verification, version control, and expiry tracking. GDPR-aligned view/print restrictions.',
    category: 'core',
    icon: 'FileText'
  },
  {
    id: 'approvals',
    title: 'Approvals & Sign-off',
    description: 'Review onboarding submissions and verify documents. Four-eye approval workflow for high-risk cases and MLRO escalation for confirmed sanctions hits with full audit trails.',
    category: 'core',
    icon: 'CheckCircle2'
  },
  {
    id: 'screening',
    title: 'Automated Sanctions Screening',
    description: 'Screen customers against OFAC, UN, EU, and UK sanctions lists. Operational refresh and on-demand checks with comprehensive dataset version tracking for regulatory audits.',
    category: 'core',
    icon: 'ShieldAlert'
  },
  {
    id: 'risk',
    title: 'Dynamic Risk Assessment & Reports',
    description: 'Automated risk scoring by jurisdiction, entity type, PEP status, and source of funds. Generate Risk Summary, Assessment, and Compliance Summary reports.',
    category: 'core',
    icon: 'BarChart3'
  },
  {
    id: 'saved_reports',
    title: 'Saved Customer Reports',
    description: 'Centralised repository of previously generated customer-level reports. Preview online or print directly for hardcopy compliance filing.',
    category: 'core',
    icon: 'FolderKanban'
  },
  {
    id: 'delta_tracker',
    title: 'Delta Tracker',
    description: 'Track changes to sanctions lists over time with instant alerts for additions, removals, or amendments. Delta reports by source (OFAC, UN, EU, UK).',
    category: 'advanced',
    icon: 'RefreshCw'
  },
  {
    id: 'edd_queue',
    title: 'EDD Queue',
    description: 'Enhanced due diligence queue for high-risk customers. Centralised workspace for compliance officers to complete and document EDD reviews.',
    category: 'advanced',
    icon: 'Clock'
  },
  {
    id: 'monitoring',
    title: 'Ongoing Monitoring',
    description: 'Monitoring dashboard with key metrics: customers monitored, pending screenings, overdue checks, new sanctions in period, and re-screening triggers.',
    category: 'advanced',
    icon: 'Activity'
  },
  {
    id: 'regulatory_repo',
    title: 'Regulatory Repository & FATF Lists',
    description: 'Store and filter regulatory acts, guidelines, and circulars by jurisdiction. Live tracking of FATF Black and Grey Lists with jurisdiction risk warnings.',
    category: 'advanced',
    icon: 'BookOpen'
  },
  {
    id: 'rbac',
    title: 'Role-Based Access Control',
    description: 'Granular permissions for Admin, Compliance, Risk, Authorizer, and Viewer roles. Restricts access to sensitive PII and administrative functions.',
    category: 'security',
    icon: 'Lock'
  },
  {
    id: 'audit_logs',
    title: 'Comprehensive Audit Logging',
    description: 'Immutable audit trail recording every user action, data modification, and document access attempt for complete regulatory accountability.',
    category: 'security',
    icon: 'ScrollText'
  },
  {
    id: 'api',
    title: 'RESTful API & Bulk Import',
    description: 'Import customers from CSV, JSON, or Excel with field mapping. Secure RESTful API endpoints for seamless integration with core banking systems.',
    category: 'advanced',
    icon: 'Network'
  },
  {
    id: 'backup',
    title: 'Backup & Restore',
    description: 'Full system backups with optional document inclusion and SHA-256 verification hashes for robust disaster recovery and data migration.',
    category: 'security',
    icon: 'Database'
  }
];

export const FAQ_LIST: FaqItem[] = [
  {
    question: "Is CompliSey on-premise?",
    answer: "Yes. CompliSey is deployed directly on your organisation's infrastructure so customer and screening data remain under your total control—essential for data-residency, privacy, and regulatory audit requirements."
  },
  {
    question: "Which sanctions lists are included?",
    answer: "Core coverage includes OFAC, UN, EU, and UK sanctions lists, alongside PEP screening and adverse media workflows. Additional list sources can be configured for specific jurisdictional needs."
  },
  {
    question: "Who is CompliSey designed for?",
    answer: "Banks, FinTechs, payment service providers, legal and corporate service providers (CSPs), virtual asset service providers (VASPs), and other regulated entities requiring robust KYC/AML workflows with audit readiness."
  },
  {
    question: "What is CompliSey Academy?",
    answer: "CompliSey Academy is a specialized online training platform providing private AML/CFT staff training. Reporting entities are legally mandated to train employees; our prepaid 12-month seats offer practical courses with unit quizzes and official certificates."
  },
  {
    question: "How does the software trial work?",
    answer: "Request a 7-day trial via our contact form using your organisation email. We review each application personally and, upon approval, issue a secure download link and activation key for evaluation on one workstation."
  },
  {
    question: "Does CompliSey replace our regulatory compliance obligations?",
    answer: "No. CompliSey is powerful software that assists your AML/CFT programme—automating screening, risk scoring, and record-keeping. Your institution's internal policies, MLRO oversight, and ultimate legal responsibility remain with you."
  },
  {
    question: "How do we obtain commercial pricing?",
    answer: "Pricing is tailored based on organisation size, deployment scope, and user counts. Submit a quote request through our contact form and our team responds within 24–48 hours on business days."
  }
];

export const ACADEMY_COURSES: CourseItem[] = [
  {
    level: "Level 1",
    title: "AML/CFT Foundations",
    subtitle: "The Fundamentals & National Context",
    description: "Designed for all staff assuming no prior compliance background. Covers the mechanics of money laundering, terrorist financing, proliferation financing, and the Seychelles regulatory map.",
    topics: [
      "What is Money Laundering & Terrorist Financing",
      "The Three Stages: Placement, Layering, Integration",
      "Regulatory Frameworks & International Standards (FATF)",
      "Seychelles AML/CFT/PF Legislative Architecture",
      "Employee Reporting Duties & Tip-Off Offences"
    ]
  },
  {
    level: "Level 2",
    title: "CDD, Sanctions & Monitoring",
    subtitle: "Practical Compliance & Risk Management",
    description: "Designed for compliance officers, front-office staff, and risk personnel. Dives deep into day-to-day operational execution of Customer Due Diligence, PEPs, Targeted Financial Sanctions, and Suspicious Transaction Reporting.",
    topics: [
      "Customer Due Diligence (CDD) & Enhanced Due Diligence (EDD)",
      "Beneficial Ownership Identification & Verification",
      "Targeted Financial Sanctions (OFAC, UN, EU, UK screening)",
      "Politically Exposed Persons (PEPs) & Source of Wealth",
      "Transaction Monitoring & Suspicious Transaction Reports (STRs)"
    ]
  }
];
