export const myProjects = [
  {
    id: 1,
    title: "TaxSphere",
    description:
      "A private, AI-powered tax and expense companion for India that automatically parses bank and UPI SMS messages, categorizes spending, and surfaces missed tax deductions.",
    subDescription: [
      "Automatically parses bank and UPI transaction SMS using regex templates with an LLM fallback, categorizing spending across 10 categories.",
      "Scans for missed tax deductions under Indian tax law (§80C, §80D, §80E, §80G, HRA, §24, standard deduction) and compares Old vs New tax regimes with personalized recommendations.",
      "Ships an on-device AI chat assistant powered by Google Gemini, redacting PII (account numbers, PAN, phone number) from prompts before dispatch so sensitive data never leaves the device.",
      "Secures all financial data with Room + SQLCipher (AES-256 encryption), biometric lock, and a single-action data wipe, and generates claim packet exports plus curated finance news.",
    ],
    href: "https://github.com/aniketwazarkar/Tax-Sphere",
    liveDemo: "",
    logo: "",
    image: "/assets/projects/taxsphere.jpg",
    tags: [
      {
        id: 1,
        name: "Kotlin",
        path: "/assets/logos/kotlin.svg",
      },
      {
        id: 2,
        name: "Jetpack Compose",
        path: "/assets/logos/android.svg",
      },
      {
        id: 3,
        name: "Room + SQLCipher",
        path: "/assets/logos/sqlite.svg",
      },
      {
        id: 4,
        name: "Gemini",
        path: "/assets/logos/googlecloud.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Pune Startup Map",
    description:
      "An interactive directory and map of startups founded or based in Pune — browse by neighborhood, funding stage, and sector.",
    subDescription: [
      "Built an interactive Leaflet map with marker clustering to visualize 60+ startups across Pune's peths and tech corridors.",
      "Implemented filtering by area, startup type, funding stage, and sector, alongside a map/grid toggle view.",
      "Built a public 'Submit a startup' flow to let founders add their company to the directory.",
      "Developed a Node.js/Express + MongoDB backend with CORS and rate limiting, deployed on Render, with a React + Vite frontend deployed on Vercel.",
    ],
    href: "https://github.com/aniketwazarkar/Pune-Startup-Map",
    liveDemo: "https://punestartupmap.vercel.app/",
    logo: "",
    image: "/assets/projects/pune-startup-map.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Leaflet",
        path: "/assets/logos/leaflet.svg",
      },
      {
        id: 3,
        name: "Express",
        path: "/assets/logos/express.svg",
      },
      {
        id: 4,
        name: "MongoDB",
        path: "/assets/logos/mongodb.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "GitHub",
    href: "https://github.com/aniketwazarkar",
    icon: "/assets/socials/github.svg",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/aniket-wazarkar/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com/aniketwazarkar/",
    icon: "/assets/socials/leetcode.svg",
  },
];

export const experiences = [
  {
    title: "Software Development Engineer",
    job: "Smallcase Platforms",
    logo: "/assets/logos/smallcase.png",
    date: "Sept 2025 - Present",
    contents: [
      "Built scalable backend systems for SIB onboarding, pledge workflows, agreement processing, and webhook orchestration using Golang, Redis, and MongoDB; refactored LAMF to be multi lender agnostic, cutting new-lender integration down to a config-driven change instead of a code change.",
      "Designed distributed components including Redis caching, IP whitelisting, OTP state management, dynamic webhook routing, and retry mechanisms, eliminating silent webhook drops across multi replica, multi partner environments.",
      "Built a multi lender admin dashboard with unpledging and cancellation workflows.",
      "Developed secure financial workflows covering dual signature agreements, pledge collateral submission, webhook integrations, and lender verification, with zero reported reconciliation errors since launch.",
      "Deployed Kafka using Strimzi in production for reliable event streaming, and resolved long-standing legacy race conditions as part of technical debt remediation.",
      "Built an AI powered CAS parser that automates equity holding extraction, validation, and loan eligibility processing from uploaded statements, cutting a manual multi-minute review down to a near-instant automated check, as an alternative to Account Aggregator integration.",
      "Built an AI powered debugging agent with Claude, Elastic MCP, and Redash MCP that automates production investigation and root cause analysis across logs, databases, and codebases, cutting mean-time-to-root-cause by 70% across production tickets handled monthly.",
      "Built contextual AI memory and SOP driven agents for lender specific business logic, onboarding journeys, and production debugging, reducing manual triage by 60%.",
      "Integrated external systems through APIs, webhooks, Redis, and middleware architectures across 3 partner platforms, improving reliability and observability of partner integrations.",
    ],
  },
  {
    title: "Software Development Engineer",
    job: "JIO Platforms",
    logo: "/assets/logos/jio.png",
    date: "Oct 2023 - Sept 2025",
    contents: [
      "Engineered Jiomeet+ (over 20 million active users), integrated over 15-20 critical features and refactored legacy code, including key functionalities such as status management, real-time document collaboration, and link unfurling using cloud functions, enhancing collaboration experience and improving engagement by 30%.",
      "Contributed to the development of JioWorkspace, a collaborative workspace application. Integrated Keycloak for secure authentication and handling login/logout flows across the platform.",
      "Built User Status Management with publisher-subscriber model for multi-device support. Implemented a Bloom filter-based architecture during new account creation, reducing redundant database calls and decreasing CPU utilization by 40%.",
      "Revamped Elasticsearch functionality by introducing a recency-based scoring algorithm and optimizing fuzzy search mechanisms, resulting in significantly faster, more accurate, and contextually relevant search results.",
    ],
  },
];
export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
