export interface Institution {
  name: string;
  tagline: string;
  description: string;
  established: string;
  accreditation: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  description: string;
  cta: {
    primary: { text: string; href: string };
    secondary: { text: string; href: string };
  };
  backgroundImage: string;
}

export interface Statistic {
  value: string;
  label: string;
  icon: string;
}

export interface Program {
  id: string;
  title: string;
  degree: string;
  duration: string;
  description: string;
  highlights: string[];
  category: 'undergraduate' | 'graduate' | 'doctorate' | 'professional';
}

export interface AdmissionStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface AdmissionRequirement {
  category: string;
  items: string[];
}

export interface NewsEvent {
  id: string;
  type: 'news' | 'event';
  title: string;
  date: string;
  excerpt: string;
  image: string;
  category: string;
}

export interface Document {
  id: string;
  title: string;
  description: string;
  category: string;
  fileSize: string;
  icon: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  hours: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface FooterSection {
  title: string;
  links: Array<{ label: string; href: string }>;
}

export const institution: Institution = {
  name: 'EduInstitution',
  tagline: 'Excellence in Education, Innovation in Learning',
  description: 'A premier institution committed to academic excellence, research innovation, and developing tomorrow\'s leaders through transformative education.',
  established: '1965',
  accreditation: 'Accredited by the Higher Learning Commission',
};

export const navigation: NavigationItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Programs', href: '#programs' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'News & Events', href: '#news' },
  { label: 'Documents', href: '#documents' },
  { label: 'Contact', href: '#contact' },
];

export const heroContent: HeroContent = {
  title: 'Shape Your Future with Excellence',
  subtitle: 'Where Academic Rigor Meets Innovation',
  description: 'Join a community of scholars, innovators, and leaders. Experience education that transforms lives and shapes the future.',
  cta: {
    primary: { text: 'Apply Now', href: '#admissions' },
    secondary: { text: 'Explore Programs', href: '#programs' },
  },
  backgroundImage: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1920',
};

export const statistics: Statistic[] = [
  { value: '15,000+', label: 'Students Enrolled', icon: 'Users' },
  { value: '250+', label: 'Degree Programs', icon: 'GraduationCap' },
  { value: '95%', label: 'Graduate Employment', icon: 'TrendingUp' },
  { value: '60+', label: 'Countries Represented', icon: 'Globe' },
];

export const programs: Program[] = [
  {
    id: 'prog-1',
    title: 'Business Administration',
    degree: 'Bachelor of Business Administration',
    duration: '4 Years',
    description: 'Comprehensive business education preparing leaders for the global marketplace with focus on strategic thinking and innovation.',
    highlights: ['Global Business Perspectives', 'Entrepreneurship Track', 'Industry Partnerships', 'Internship Opportunities'],
    category: 'undergraduate',
  },
  {
    id: 'prog-2',
    title: 'Computer Science',
    degree: 'Bachelor of Science',
    duration: '4 Years',
    description: 'Cutting-edge curriculum in software engineering, AI, cybersecurity, and data science with hands-on project experience.',
    highlights: ['AI & Machine Learning', 'Full-Stack Development', 'Research Opportunities', 'Tech Industry Connections'],
    category: 'undergraduate',
  },
  {
    id: 'prog-3',
    title: 'Master of Public Health',
    degree: 'MPH',
    duration: '2 Years',
    description: 'Advanced study in public health policy, epidemiology, and community health with practical field experience.',
    highlights: ['Field Practicum', 'Research Projects', 'Global Health Focus', 'Healthcare Leadership'],
    category: 'graduate',
  },
  {
    id: 'prog-4',
    title: 'Engineering',
    degree: 'Bachelor of Engineering',
    duration: '4 Years',
    description: 'Rigorous engineering education with specializations in mechanical, electrical, civil, and chemical engineering.',
    highlights: ['ABET Accredited', 'Design Projects', 'Industry Collaboration', 'Modern Lab Facilities'],
    category: 'undergraduate',
  },
  {
    id: 'prog-5',
    title: 'Educational Leadership',
    degree: 'Doctor of Education',
    duration: '3-5 Years',
    description: 'Doctoral program for educational administrators and policy makers focused on transformative leadership.',
    highlights: ['Dissertation Research', 'Policy Analysis', 'Leadership Development', 'Cohort Model'],
    category: 'doctorate',
  },
  {
    id: 'prog-6',
    title: 'International Relations',
    degree: 'Master of Arts',
    duration: '2 Years',
    description: 'Graduate study in global politics, diplomacy, and international development with Washington D.C. immersion.',
    highlights: ['Study Abroad Options', 'UN Simulations', 'Policy Research', 'Language Training'],
    category: 'graduate',
  },
];

export const admissionSteps: AdmissionStep[] = [
  {
    step: 1,
    title: 'Submit Application',
    description: 'Complete our online application form with your personal information and academic history.',
    icon: 'FileText',
  },
  {
    step: 2,
    title: 'Required Documents',
    description: 'Upload transcripts, test scores, recommendation letters, and personal statement.',
    icon: 'Upload',
  },
  {
    step: 3,
    title: 'Application Review',
    description: 'Our admissions committee carefully reviews all materials and may request additional information.',
    icon: 'Search',
  },
  {
    step: 4,
    title: 'Decision Notification',
    description: 'Receive your admission decision via email and access your personalized enrollment portal.',
    icon: 'CheckCircle',
  },
];

export const admissionRequirements: AdmissionRequirement[] = [
  {
    category: 'Undergraduate',
    items: [
      'High school diploma or equivalent',
      'Minimum 3.0 GPA',
      'SAT or ACT scores',
      'Two letters of recommendation',
      'Personal statement (500-750 words)',
      'Official transcripts',
    ],
  },
  {
    category: 'Graduate',
    items: [
      'Bachelor\'s degree from accredited institution',
      'Minimum 3.2 GPA',
      'GRE or GMAT scores (program dependent)',
      'Three letters of recommendation',
      'Statement of purpose',
      'Resume or CV',
    ],
  },
  {
    category: 'International',
    items: [
      'TOEFL or IELTS scores',
      'Credential evaluation report',
      'Financial documentation',
      'Valid passport copy',
      'Student visa requirements',
      'English proficiency demonstration',
    ],
  },
];

export const newsEvents: NewsEvent[] = [
  {
    id: 'news-1',
    type: 'news',
    title: 'EduInstitution Ranks Top 50 in National University Rankings',
    date: '2025-01-15',
    excerpt: 'Our commitment to academic excellence and student success has been recognized in the latest national rankings.',
    image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Achievements',
  },
  {
    id: 'event-1',
    type: 'event',
    title: 'Annual Open House: Discover Your Future',
    date: '2025-02-10',
    excerpt: 'Join us for campus tours, meet faculty, attend sample classes, and learn about our programs and admissions process.',
    image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Campus Events',
  },
  {
    id: 'news-2',
    type: 'news',
    title: 'New Research Center for Sustainable Technology Opens',
    date: '2025-01-08',
    excerpt: 'State-of-the-art facility will advance research in renewable energy, green technology, and environmental sustainability.',
    image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Research',
  },
  {
    id: 'event-2',
    type: 'event',
    title: 'International Student Welcome Week',
    date: '2025-02-20',
    excerpt: 'Special orientation program for international students featuring cultural activities, campus resources, and networking.',
    image: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Student Life',
  },
  {
    id: 'news-3',
    type: 'news',
    title: 'Alumni Endowment Funds 100 New Scholarships',
    date: '2024-12-20',
    excerpt: 'Generous donation from distinguished alumni will provide full-tuition scholarships for deserving students.',
    image: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Financial Aid',
  },
  {
    id: 'event-3',
    type: 'event',
    title: 'Graduate School Fair',
    date: '2025-03-05',
    excerpt: 'Explore graduate programs from departments across campus. Meet program directors and current graduate students.',
    image: 'https://images.pexels.com/photos/1152500/pexels-photo-1152500.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Academic',
  },
];

export const documents: Document[] = [
  {
    id: 'doc-1',
    title: 'Undergraduate Catalog 2024-2025',
    description: 'Complete academic programs, course descriptions, and degree requirements',
    category: 'Academic Catalogs',
    fileSize: '12.5 MB',
    icon: 'BookOpen',
  },
  {
    id: 'doc-2',
    title: 'Graduate Programs Guide',
    description: 'Comprehensive guide to all graduate degree programs and specializations',
    category: 'Academic Catalogs',
    fileSize: '8.2 MB',
    icon: 'GraduationCap',
  },
  {
    id: 'doc-3',
    title: 'Application Checklist',
    description: 'Step-by-step guide to completing your application successfully',
    category: 'Admissions',
    fileSize: '1.1 MB',
    icon: 'CheckSquare',
  },
  {
    id: 'doc-4',
    title: 'Financial Aid Information',
    description: 'Scholarships, grants, loans, and payment plan options',
    category: 'Financial Aid',
    fileSize: '3.4 MB',
    icon: 'DollarSign',
  },
  {
    id: 'doc-5',
    title: 'Campus Safety Report',
    description: 'Annual security and fire safety report as required by federal law',
    category: 'Campus Life',
    fileSize: '2.8 MB',
    icon: 'Shield',
  },
  {
    id: 'doc-6',
    title: 'Student Handbook',
    description: 'Policies, procedures, and resources for current students',
    category: 'Campus Life',
    fileSize: '5.6 MB',
    icon: 'Book',
  },
  {
    id: 'doc-7',
    title: 'International Student Guide',
    description: 'Essential information for international applicants and students',
    category: 'Admissions',
    fileSize: '4.2 MB',
    icon: 'Globe',
  },
  {
    id: 'doc-8',
    title: 'Transfer Credit Policy',
    description: 'Guidelines for transferring credits from other institutions',
    category: 'Admissions',
    fileSize: '1.8 MB',
    icon: 'ArrowRightLeft',
  },
];

export const contactInfo: ContactInfo = {
  address: '1234 University Avenue, Education City, EC 12345',
  phone: '+1 (555) 123-4567',
  email: 'admissions@eduinstitution.edu',
  hours: 'Monday - Friday: 8:00 AM - 6:00 PM',
};

export const socialLinks: SocialLink[] = [
  { platform: 'Facebook', url: 'https://facebook.com/eduinstitution', icon: 'Facebook' },
  { platform: 'Twitter', url: 'https://twitter.com/eduinstitution', icon: 'Twitter' },
  { platform: 'LinkedIn', url: 'https://linkedin.com/school/eduinstitution', icon: 'Linkedin' },
  { platform: 'Instagram', url: 'https://instagram.com/eduinstitution', icon: 'Instagram' },
  { platform: 'YouTube', url: 'https://youtube.com/eduinstitution', icon: 'Youtube' },
];

export const footerSections: FooterSection[] = [
  {
    title: 'Academics',
    links: [
      { label: 'Undergraduate Programs', href: '#programs' },
      { label: 'Graduate Programs', href: '#programs' },
      { label: 'Online Learning', href: '#programs' },
      { label: 'Academic Calendar', href: '#documents' },
      { label: 'Course Catalog', href: '#documents' },
    ],
  },
  {
    title: 'Admissions',
    links: [
      { label: 'How to Apply', href: '#admissions' },
      { label: 'Visit Campus', href: '#contact' },
      { label: 'Tuition & Financial Aid', href: '#admissions' },
      { label: 'International Students', href: '#admissions' },
      { label: 'Transfer Students', href: '#admissions' },
    ],
  },
  {
    title: 'Campus Life',
    links: [
      { label: 'Student Services', href: '#contact' },
      { label: 'Housing & Dining', href: '#contact' },
      { label: 'Clubs & Organizations', href: '#news' },
      { label: 'Athletics', href: '#news' },
      { label: 'Arts & Culture', href: '#news' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Library', href: '#documents' },
      { label: 'Career Services', href: '#contact' },
      { label: 'IT Support', href: '#contact' },
      { label: 'Alumni Network', href: '#contact' },
      { label: 'News & Media', href: '#news' },
    ],
  },
];
