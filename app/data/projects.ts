export interface RepositoryLink {
  title: string;
  description: string;
  url: string;
  badge?: string;
}

export interface EcosystemComponent {
  name: string;
  role: string;
  description: string;
  highlights: string[];
}

export interface ProjectSection {
  title: string;
  text: string;
}

export interface Project {
  id: string;
  number: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  longOverview: string;
  featured?: boolean;
  technologies: string[];
  features: string[];
  sections: ProjectSection[];
  github: string;
  repositories: RepositoryLink[];
  disclaimer?: string;
  ecosystemComponents?: EcosystemComponent[];
  techArchitecture?: {
    frontend?: string[];
    backend?: string[];
    stateManagement?: string[];
    storage?: string[];
  };
}

export const projectsData: Record<string, Project> = {
  ezzewash: {
    id: "ezzewash",
    number: "01",
    category: "FLAGSHIP SYSTEM",
    title: "EzzeWash",
    subtitle: "Full-Stack Laundry Service & Management Ecosystem",
    description:
      "A multi-platform laundry management ecosystem built as a major B.Sc. CSE final-year collaborative project, connecting customers, administrators, delivery riders, and a promotional web portal through unified services.",
    longOverview:
      "EzzeWash addresses the operational friction of laundry services by connecting four distinct touchpoints: a customer booking mobile app, an administrative command center, a delivery rider application, and a customer-facing promotional website. The system coordinates order intake, scheduling, live status tracking, pickup/delivery routing, and administrative oversight under a cohesive architecture.",
    featured: true,
    technologies: [
      "Flutter",
      "Dart",
      "BLoC",
      "GoRouter",
      "Supabase",
      "PostgreSQL",
      "Realtime",
      "Storage",
      "Edge Functions",
      "Payment Integration",
      "Push Notifications",
      "GPS Tracking",
    ],
    disclaimer:
      "EzzeWash was developed as a collaborative final-year CSE project. My portfolio focuses on the parts of the system, product development, implementation, architecture, and integration that I contributed to.",
    ecosystemComponents: [
      {
        name: "Customer Mobile App",
        role: "Booking & Order Lifecycle",
        description:
          "End-to-end service experience enabling customers to select services, pick nearby branches, schedule pickup & delivery, apply promo codes, and track their laundry lifecycle in real time.",
        highlights: [
          "5-Step Booking Flow: Service → Store → Schedule → Quantity/Promo → Payment",
          "Live order lifecycle updates and push notifications",
          "Profile, address book, and order history",
        ],
      },
      {
        name: "Admin Control Center",
        role: "Operations & Analytics Hub",
        description:
          "Desktop-capable and mobile operational dashboard for laundry facility operators to manage incoming workloads, staff assignments, and store metrics.",
        highlights: [
          "Comprehensive order queue and assignment workflow",
          "Service pricing, branch, and category management",
          "Revenue analytics, reports, and delivery oversight",
        ],
      },
      {
        name: "Rider Mobile App",
        role: "Logistics & Delivery Execution",
        description:
          "Field application for delivery personnel to receive pickup and drop-off assignments, update task states, and manage cash collection.",
        highlights: [
          "Real-time task dispatch with location-based guidance",
          "Order status transitions (Picked up, At Laundry, Out for Delivery, Completed)",
          "Cash management and delivery confirmation",
        ],
      },
      {
        name: "Promotional & Service Website",
        role: "Web Presence & Onboarding",
        description:
          "Responsive, high-aesthetic web portal built with glassmorphism, dynamic theme switching, an interactive order wizard, and automated service simulations.",
        highlights: [
          "Responsive design with Dark & Light theme support",
          "Multi-step interactive laundry order wizard",
          "Promotional coupon validator and virtual chatbot simulation",
        ],
      },
    ],
    sections: [
      {
        title: "The Vision & Real-World Challenge",
        text: "Traditional laundry services rely on fragmented paper receipts and phone coordination, creating delays and lost tracking. EzzeWash was engineered to bring transparent digital tracking to laundry operations—synchronizing customers, drivers, and operations staff across mobile and web interfaces.",
      },
      {
        title: "Architecture & Technical Foundations",
        text: "Built on Flutter with the BLoC pattern for predictable state management and GoRouter for declarative navigation. The backend relies on Supabase PostgreSQL for relational consistency, Realtime web sockets for live status changes, secure cloud storage for receipts, and Edge Functions for server-side logic.",
      },
      {
        title: "Personal Contribution & Leadership",
        text: "I focused on shaping the product structure, developing the Admin Control Center, implementing key parts of the Rider logistics flow, building the promotional web portal, and architecting the Supabase database schema and realtime synchronizations.",
      },
    ],
    features: [
      "Customer laundry booking flow",
      "Service and dynamic pricing management",
      "Order lifecycle state machine",
      "Rider dispatch and delivery workflow",
      "Supabase Auth & PostgreSQL DB",
      "Realtime subscription updates",
      "Secure cloud asset storage",
      "Payment verification handling",
      "Push notification integration",
      "Rider GPS & location tracking",
      "Responsive promotional website",
      "Multi-step order simulation wizard",
    ],
    github: "https://github.com/ImranHasan13421",
    repositories: [
      {
        title: "Admin Application",
        description:
          "Operational control center for managing orders, services, pricing, and system analytics.",
        url: "https://github.com/ImranHasan13421/EzzeWash_Laundry_Management-Admin-V1.0.2",
        badge: "Primary / Admin",
      },
      {
        title: "Rider Application",
        description:
          "Logistics tool for riders handling laundry pickup, delivery tasks, and location updates.",
        url: "https://github.com/ImranHasan13421/EzeeWash_Laundry_Management-Rider-V1.0.0",
        badge: "Logistics",
      },
      {
        title: "Promotional Website",
        description:
          "Responsive portal with dark/light themes, order wizard, and promotional validations.",
        url: "https://github.com/ImranHasan13421/EzzeWash-Website",
        badge: "Web Portal",
      },
      {
        title: "Customer Application",
        description:
          "Mobile application for end users to browse services, book laundry, and track orders.",
        url: "https://github.com/Abdulaowalasif/EzeeWash-App",
        badge: "Collaborative / Customer",
      },
    ],
    techArchitecture: {
      frontend: ["Flutter", "Dart", "BLoC Pattern", "GoRouter", "Responsive UI"],
      backend: ["Supabase", "PostgreSQL", "Realtime WebSockets", "Edge Functions"],
      stateManagement: ["BLoC / Cubit", "StreamControllers"],
      storage: ["Supabase Storage", "Encrypted Local Cache"],
    },
  },

  atlanta: {
    id: "atlanta",
    number: "02",
    category: "AI APPLICATION",
    title: "ATLANTA",
    subtitle: "Personal AI Assistant & Cyber-Tech Command Center",
    description:
      "A Flutter-based personal AI assistant and cyber-tech command center exploring voice interaction, AI assistance, productivity automation, and connected-device capabilities.",
    longOverview:
      "ATLANTA was conceived as an intelligent digital command hub. Moving beyond conventional plain chat wrappers, ATLANTA blends cyber-tech aesthetic styling with voice recognition, Google Gemini generative AI reasoning, productivity shortcuts, and smart hardware device interactions.",
    technologies: [
      "Flutter",
      "Dart",
      "Google Gemini",
      "Voice Interaction",
      "Automation",
      "Connected Devices",
      "Audio Processing",
    ],
    sections: [
      {
        title: "Product Concept",
        text: "Rather than building a standard text prompt box, ATLANTA is styled as a cybernetic terminal. It interprets spoken directives, generates context-aware conversational replies using Google Gemini, and simulates command execution across productivity and connected-device workflows.",
      },
      {
        title: "Voice & AI Integration",
        text: "The application integrates speech-to-text input, audio feedback, and structured prompt engineering with the Gemini API to deliver concise, authoritative assistant responses.",
      },
      {
        title: "UI/UX & Design Philosophy",
        text: "Designed with high-contrast sci-fi cyber elements, glowing tactical nodes, custom telemetry visualizations, and fluid tactile feedback built completely in Flutter.",
      },
    ],
    features: [
      "Conversational AI reasoning",
      "Google Gemini integration",
      "Voice input and speech synthesis",
      "Productivity automation workflows",
      "Cyber-tech telemetry HUD interface",
      "Connected-device command capabilities",
      "Custom audio reactive feedback",
      "Offline fallback commands",
    ],
    github: "https://github.com/ImranHasan13421/ATLANTA",
    repositories: [
      {
        title: "ATLANTA Repository",
        description: "Complete Flutter application source code and command modules.",
        url: "https://github.com/ImranHasan13421/ATLANTA",
      },
    ],
    techArchitecture: {
      frontend: ["Flutter", "Dart", "Custom Painter HUD"],
      backend: ["Google Gemini API", "Speech-to-Text Services"],
      stateManagement: ["Provider / ValueNotifiers"],
      storage: ["Hive / Secure Storage"],
    },
  },

  ezzemusic: {
    id: "ezzemusic",
    number: "03",
    category: "OFFLINE AUDIO",
    title: "EzzeMusic",
    subtitle: "Premium Offline Music Player & Audio Experience",
    description:
      "A premium offline music player focused on local audio indexing, dynamic themes, glassmorphism, background playback, and an immersive vinyl-style Now Playing experience.",
    longOverview:
      "EzzeMusic turns offline local music listening into an aesthetically elevated experience. It automatically scans device storage for audio files, extracts embedded ID3 metadata and artwork, and presents them in a glassmorphic interface with reactive color palettes derived from album art.",
    technologies: [
      "Flutter",
      "Dart",
      "Local Audio Processing",
      "Background Playback",
      "Dynamic Theming",
      "Glassmorphism",
      "Audio Service",
    ],
    sections: [
      {
        title: "The Problem with Generic Offline Players",
        text: "Many offline music apps are either cluttered with intrusive ads or designed with outdated, utilitarian interfaces. EzzeMusic was crafted to prove that an offline audio utility can feel just as luxurious and fluid as modern streaming platforms.",
      },
      {
        title: "Audio Engine & Background Lifecycle",
        text: "Engineered using Flutter audio background services to ensure seamless lock-screen controls, notification drawer media actions, playlist shuffling, and audio focus management during calls.",
      },
      {
        title: "Vinyl Now Playing & Dynamic Aesthetics",
        text: "Features an animated vinyl turntable visualization that responds to playback state, alongside frosted glass surfaces, custom seek bars, and dynamic palette extraction based on the current album artwork.",
      },
    ],
    features: [
      "Fast local storage audio indexing",
      "Background audio playback service",
      "Lock-screen and notification controls",
      "Vinyl-style animated Now Playing experience",
      "Dynamic album art color palette theming",
      "Glassmorphic cards and translucent controls",
      "Playlist creation and track favorites",
      "ID3 tag and audio metadata parsing",
    ],
    github: "https://github.com/ImranHasan13421/EzzeMusic",
    repositories: [
      {
        title: "EzzeMusic Repository",
        description: "Full Flutter offline music player source code and custom UI components.",
        url: "https://github.com/ImranHasan13421/EzzeMusic",
      },
    ],
    techArchitecture: {
      frontend: ["Flutter", "Dart", "Frosted Glassmorphism"],
      backend: ["On-device Audio Engine", "Audio Service Integration"],
      stateManagement: ["ChangeNotifier / Provider"],
      storage: ["Shared Preferences", "Local Media Store"],
    },
  },

  ezzecv: {
    id: "ezzecv",
    number: "04",
    category: "PRODUCTIVITY",
    title: "EzzeCV",
    subtitle: "Offline CV & Resume Builder with Live PDF Generation",
    description:
      "An offline CV builder featuring 5 ATS-friendly templates, live customization, PDF rendering, local drafts, image cropping, and JSON backup/restore.",
    longOverview:
      "EzzeCV removes the frustration of online resume builders that lock users behind paywalls or require persistent internet access. Built entirely for private, on-device usage, it lets job candidates assemble structured, ATS-compliant resumes with real-time preview and export crisp vector PDFs ready for printing or job applications.",
    technologies: [
      "Flutter",
      "Dart",
      "Provider",
      "PDF Generation",
      "Printing",
      "Image Cropping",
      "Local Storage",
    ],
    sections: [
      {
        title: "Product Philosophy: Privacy & Zero Lock-in",
        text: "User resumes contain sensitive personal and career data. EzzeCV guarantees total privacy by processing every character and image on-device, with zero cloud requirement and free JSON backup export.",
      },
      {
        title: "Template System & ATS Architecture",
        text: "Provides 5 distinct templates specifically structured around modern Applicant Tracking System (ATS) parsing standards, ensuring clear heading hierarchies, date alignments, and clean text flow.",
      },
      {
        title: "Multi-Language & Customization",
        text: "Includes full bilingual support (English and Bengali), interactive profile photo cropping, customizable color accents, and live PDF page calculation.",
      },
    ],
    features: [
      "5 ATS-friendly CV templates",
      "Real-time vector PDF generation",
      "Instant on-device print & export",
      "Local drafts with multi-profile support",
      "JSON backup and restore portability",
      "Interactive image cropping for profile photos",
      "Dark and light theme support",
      "Bilingual interface (English & Bengali)",
    ],
    github: "https://github.com/ImranHasan13421/EzzeCVmaker",
    repositories: [
      {
        title: "EzzeCV Repository",
        description: "Flutter CV builder application repository with PDF templating engines.",
        url: "https://github.com/ImranHasan13421/EzzeCVmaker",
      },
    ],
    techArchitecture: {
      frontend: ["Flutter", "Dart", "Custom PDF Canvas"],
      backend: ["pdf / printing Dart packages"],
      stateManagement: ["Provider"],
      storage: ["Hive / Local JSON Files"],
    },
  },

  ezzeexpense: {
    id: "ezzeexpense",
    number: "05",
    category: "FINANCE",
    title: "EzzeExpense",
    subtitle: "Personal Expense & Budget Management Application",
    description:
      "An offline expense tracking application featuring monthly and category budgets, weekly/monthly/yearly analytics, comparative charts, and actionable spending warnings.",
    longOverview:
      "EzzeExpense empowers users to take full control of their personal finances without trusting sensitive transactional data to third-party servers. It combines fast expense logging with rich visual telemetry—interactive pie charts, bar comparisons, budget thresholds, and spending warnings.",
    technologies: [
      "Flutter",
      "Dart",
      "Analytics",
      "Offline Storage",
      "Data Visualization",
      "FL Chart",
    ],
    sections: [
      {
        title: "Practical Finance Without Complexity",
        text: "Personal finance tools often fail because logging a transaction takes too many steps. EzzeExpense emphasizes frictionless entry: quick category selection, date presets, and immediate visual budget impact.",
      },
      {
        title: "Multi-Dimensional Analytics",
        text: "Provides weekly, monthly, and yearly aggregation views. Users can inspect spending breakdowns via interactive pie charts, analyze monthly expenditure velocity with bar charts, and view category percentages.",
      },
      {
        title: "Budget Enforcement & Proactive Alerts",
        text: "Users can establish monthly and per-category spending limits. When expenditures reach critical thresholds, proactive warnings guide conscious financial habits.",
      },
    ],
    features: [
      "100% offline expense and income logging",
      "Monthly overall budget ceilings",
      "Per-category granular budget allocations",
      "Full search, filter, and date-range queries",
      "Weekly, monthly, and annual financial analytics",
      "Interactive pie charts and comparative bar graphs",
      "Month-over-month expenditure velocity metrics",
      "Proactive threshold budget warning alerts",
      "Category breakdown and spending insights",
    ],
    github: "https://github.com/ImranHasan13421/EzzeExpense",
    repositories: [
      {
        title: "EzzeExpense Repository",
        description: "Flutter personal expense tracker with offline storage and analytics modules.",
        url: "https://github.com/ImranHasan13421/EzzeExpense",
      },
    ],
    techArchitecture: {
      frontend: ["Flutter", "Dart", "FL Chart"],
      backend: ["Local SQLite / Hive"],
      stateManagement: ["Provider / BLoC"],
      storage: ["On-device Database"],
    },
  },

  "shec-cse": {
    id: "shec-cse",
    number: "06",
    category: "COMMUNITY PLATFORM",
    title: "ShEC CSE",
    subtitle: "Departmental Information & Academic Community Platform",
    description:
      "A departmental CSE mobile platform unifying academic progress tracking, campus announcements, student messaging, career resources, and departmental administrative procedures.",
    longOverview:
      "Developed for the Computer Science & Engineering department at Shyamoli Engineering College, ShEC CSE solves the fragmentation of academic announcements, class schedules, and student communication. It serves as a unified digital commons for syllabus details, department procedures, direct peer messaging, and career guidance.",
    technologies: [
      "Flutter",
      "Dart",
      "Supabase",
      "PostgreSQL",
      "Cloud Storage",
      "Realtime Messaging",
      "Image Processing",
    ],
    sections: [
      {
        title: "Origin & Purpose",
        text: "In college departments, critical notices, exam routines, and syllabi are frequently scattered across group chats, bulletin boards, and email threads. ShEC CSE was developed to create a single, authoritative digital focal point for the CSE student body.",
      },
      {
        title: "Academic & Career Infrastructure",
        text: "Equipped with academic milestone trackers, semester routine archives, and dedicated career preparation pathways offering curated resources for software development, competitive programming, and internship hunting.",
      },
      {
        title: "Cloud Synchronization & Media Handling",
        text: "Backed by Supabase for authentication, structured PostgreSQL data tables, and cloud storage with client-side image optimization for fast notice viewing over low-bandwidth campus networks.",
      },
    ],
    features: [
      "Department academic announcements & notice board",
      "Semester syllabus and academic tracking",
      "Direct campus and student communication",
      "Career navigation pathways and resources",
      "Department administrative procedures guide",
      "Realtime peer messaging capabilities",
      "Cloud and local cache synchronization",
      "Image processing and lightweight notice rendering",
    ],
    github: "https://github.com/ImranHasan13421/ShEC-CSE",
    repositories: [
      {
        title: "ShEC CSE Repository",
        description: "Departmental Flutter mobile application repository with Supabase integration.",
        url: "https://github.com/ImranHasan13421/ShEC-CSE",
      },
    ],
    techArchitecture: {
      frontend: ["Flutter", "Dart", "Custom Material 3 Components"],
      backend: ["Supabase", "PostgreSQL", "Realtime"],
      stateManagement: ["Provider"],
      storage: ["Supabase Cloud Storage", "Cached Network Images"],
    },
  },
};

export const projectSlugs = Object.keys(projectsData);
