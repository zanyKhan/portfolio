import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  python,
  django,
  mysql,
  postgresql,
  foodWeb,
  zenithReport,
  library,
  jarvis
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "postgreSQL",
    icon: postgresql,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Python Developer",
    company_name: "Voice Assistant - Jarvis",
    icon: python,
    iconBg: "#E6DEDD",
    date: "2025",
    points: [
      "Developed a Python-based voice assistant capable of performing multiple automation tasks.",
      "Implemented voice commands for opening websites, playing music, and searching Wikipedia.",
      "Integrated text-to-speech functionality for interactive responses.",
      "Added news fetching and predefined music library support.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "ZenithReport",
    icon: django,
    iconBg: "#383E56",
    date: "2025",
    points: [
      "Built a modern blog website using Django with authentication and role-based access.",
      "Implemented features for creating, editing, and managing blog posts across categories.",
      "Developed admin dashboard for blog and user management.",
      "Designed responsive frontend using HTML, CSS, and Bootstrap.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Food Delivery App",
    icon: reactjs,
    iconBg: "#383E56",
    date: "2025",
    points: [
      "Built a modern and responsive Food Delivery Web App using React.js and Tailwind CSS.",
      "Implemented cart management functionality using Context API for real-time updates.",
      "Designed a clean and mobile-friendly UI with responsive layouts.",
      "Used React Hooks for efficient state and component management.",
    ],
  },
  {
  title: "Backend Developer",
  company_name: "Book-Warm-Library",
  icon: django,
  iconBg: "#E6DEDD",
  date: "2025",
  points: [
    "Developed a Django-based Library Management System with user authentication and book management.",
    "Implemented book request and admin approval/rejection functionality.",
    "Built features to track borrowed and returned books efficiently.",
    "Added contact form support and automatic book expiry tracking system.",
  ],
},

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Food Delivery App",
    description:
      "A modern and responsive food delivery web application that allows users to browse food items, manage cart functionality, and enjoy a seamless ordering experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "context-api",
        color: "pink-text-gradient",
      },
    ],
    image: foodWeb,
    source_code_link: "https://github.com/zanyKhan/food-delivery",
    live_link: "https://food-delivery-website-zanykhan.netlify.app/",
  },

  {
    name: "Voice Assistant - Jarvis",
    description:
      "A Python-based voice assistant capable of opening websites, playing music, reading news, and searching Wikipedia using voice commands and text-to-speech functionality.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "speech-recognition",
        color: "green-text-gradient",
      },
      {
        name: "automation",
        color: "pink-text-gradient",
      },
    ],
    image: jarvis,
    source_code_link: "https://github.com/zanyKhan/jarvis-voice-assistant",
  },

  {
    name: "ZenithReport",
    description:
      "A modern Django-based blog platform where users can create, manage, and explore blogs across multiple categories with authentication and role-based access.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: zenithReport,
    source_code_link: "https://github.com/zanyKhan/zenithReport",
    live_link: "https://zanykhan.pythonanywhere.com/",
  },

  {
    name: "Book-Warm-Library",
    description:
      "A Django-based library management system that enables users to browse books, request borrowing access, and manage returns with an admin approval system.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "sqlite",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: library,
    source_code_link: "https://github.com/zanyKhan/Book-Warm-Library",
  },
];


export { services, technologies, experiences, testimonials, projects };
