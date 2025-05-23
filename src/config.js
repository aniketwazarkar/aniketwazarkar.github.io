module.exports = {
  siteTitle: 'Aniket Wazarkar',
  siteDescription:
    'Aniket Wazarkar is a backend engineer with expertise in backend architecture, microservices, and real-time scalable applications, based in Mumbai, India.',
  siteKeywords:
    'Aniket Wazarkar, Aniket, Wazarkar, aniketwazarkar, software engineer, backend developer, backend engineer, javascript, python, c++, microservices, aws, gcp',
  siteUrl: 'https://aniketwazarkar.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Aniket Wazarkar',
  location: 'Mumbai, India',
  email: 'aniket.wazarkar@outlook.com',
  github: 'https://github.com/aniketwazarkar',
  twitterHandle: '@',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/aniketwazarkar',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/aniketwazarkar',
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/aniketwazarkar/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/aniketspeaks',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
