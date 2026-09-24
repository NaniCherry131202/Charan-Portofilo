import html from "../assets/skills/html.svg";
import css from "../assets/skills/css.svg";
import react from "../assets/skills/react.svg";
import nextjs from "../assets/skills/nextjs.svg";
import typescript from "../assets/skills/typescript.svg";
import tailwind from "../assets/skills/tailwind.svg";
import node from "../assets/skills/node.svg";
import mongo from "../assets/skills/mongodb.svg";
import bootstrap from "../assets/skills/bootstrap.svg";
import javascript from "../assets/skills/javascript.svg";
import express from "../assets/skills/express.svg";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/Last Project.png";
import cosmoAdmin from "../assets/cosmo_admin.png";
import cosmoPublic from "../assets/cosmo_public.png";
import ashoka from "../assets/ashoka.png";
import syscoreInfo from "../assets/syscore.png";
import chandraComputer from "../assets/chandra.png";
import rahulEditor from "../assets/rahul.png";
import venkateshSigma from "../assets/venkatesh.png";

export const skills = [
  {
    id: 1,
    title: "HTML",
    imageSrc: html,
  },
  {
    id: 2,
    title: "CSS",
    imageSrc: css,
  },
  {
    id: 3,
    title: "Bootstrap",
    imageSrc: bootstrap,
  },
  {
    id: 4,
    title: "JavaScript",
    imageSrc: javascript,
  },
  {
    id: 5,
    title: "React",
    imageSrc: react,
  },
  {
    id: 6, 
    title: "Next.js", 
    imageSrc: nextjs 
  },
  {
    id: 7,
    title: "Node.js",
    imageSrc: node,
  },
  {
    id: 8,
    title: "MongoDB",
    imageSrc: mongo,
  },
  {
    id: 9,
    title: "Express.js",
    imageSrc: express,
  },
  {
    id: 10,
    title: "Tailwind CSS",
    imageSrc: tailwind,
  },
];

export const projects = [
  {
    title: "Sri Sampoornam E-commerce",
    subtitle: "Next.js | Node.js | MongoDB | Stripe",
    imageSrc: null,
    description: "A full-featured E-commerce platform with product catalogs, shopping cart, secure checkout, payment gateway integration, and order management.",
    skills: ["Next.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
  },
  {
    title: "Cosmo Radiance Public Platform",
    subtitle: "Next.js 16+ | Tailwind v4 | SEO Automation",
    imageSrc: cosmoPublic, 
    description: "A blazing-fast, highly SEO-optimized front-end patient platform with 0ms database latency via in-memory static generation. Features AI Content Optimizers, legal compliance scrubbing, and medical tourism tools.",
    skills: ["Next.js", "React 19", "Tailwind CSS", "Gemini AI", "Claude 3.5"],
    demo: "https://www.cosmoradiance.com",
  },
  {
    title: "Cosmo Radiance Admin HMS & CRM",
    subtitle: "React 18 | Node.js | MongoDB | Socket.IO",
    imageSrc: cosmoAdmin,
    description: "An enterprise-grade ERP/HMS serving as the clinic's nervous system. Includes full Operation Theater (OT) scheduling, IPD Ward management, Pharmacy Supply Chain, and real-time Telecaller Kanban CRM.",
    skills: ["React", "Node.js", "Socket.IO", "MongoDB", "Redux"],
    demo: "https://admin.cosmoradiance.com",
  },
  {
    title: "Autonomous AI Omnichannel Chatbot",
    subtitle: "Gemini 2.0 Flash | WhatsApp Cloud API",
    imageSrc: null,
    description: "A function-calling AI agent that autonomously handles calendar bookings, lead capturing, and sentiment-based human escalation across Web Chat and WhatsApp. Includes a dedicated WhatsApp Broadcast Studio.",
    skills: ["Gemini 2.0", "WhatsApp API", "Node.js", "Express"],
  },
  {
    title: "School Management Platform",
    subtitle: "React.js | MongoDB | Tailwind CSS",
    imageSrc: ashoka,
    description: "Developed role-based dashboards for teachers and students, featuring attendance tracking and marks management systems with secure authentication.",
    skills: ["React.js", "MongoDB", "Tailwind CSS", "Node.js"],
    demo: "https://www.ashokavidyamandir.com",
  },
  {
    title: "Digital Wedding Invitations",
    subtitle: "Next.js | Tailwind CSS (Ongoing)",
    imageSrc: null,
    description: "An ongoing project building a dynamic, customizable platform for digital wedding invitations with seamless sharing capabilities.",
    skills: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "Real-Time Chat Application",
    subtitle: "MERN STACK & Socket.io",
    imageSrc: null,
    description: "A live messaging platform supporting real-time communication, implemented with JWT-based authentication and media sharing via Cloudinary.",
    skills: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
  },
  {
    title: "Syscore Info",
    subtitle: "React.js | Tailwind CSS",
    imageSrc: syscoreInfo,
    description: "A professional and responsive website for an IT solutions and services provider, highly optimized for SEO.",
    skills: ["Freelance", "React.js", "Tailwind CSS", "SEO"],
    demo: "https://www.syscoreinfo.com",
  },
  {
    title: "Chandra Computer Info",
    subtitle: "React.js | Tailwind CSS",
    imageSrc: chandraComputer,
    description: "A dynamic website for an IT hardware and services company focusing on smooth user experience.",
    skills: ["Freelance", "React.js", "Tailwind CSS"],
    demo: "https://www.chandracomputerinfo.com",
  },
  {
    title: "Rahul Video Editor",
    subtitle: "Frontend Portfolio",
    imageSrc: rahulEditor,
    description: "A sleek, visually appealing personal portfolio for a freelance video editor.",
    skills: ["Freelance", "HTML/CSS", "JavaScript"],
    demo: "https://rahul-video-editor.onrender.com",
  },
  {
    title: "Venkatesh Sigma",
    subtitle: "Frontend Portfolio",
    imageSrc: venkateshSigma,
    description: "A modern and responsive personal portfolio built to showcase a client's professional brand.",
    skills: ["Freelance", "React.js", "Vercel"],
    demo: "https://venkatesh-sigma.vercel.app",
  }
];

export const achievements = [
  "Delivered 6+ live client projects independently.",
  "Generated ₹1.2L/month additional revenue through platform optimization.",
  "Built a complete CRM + CMS + AI Chatbot ecosystem for healthcare operations.",
  "Automated 70% of patient interactions using AI-powered solutions.",
  "Reduced patient booking time by 40%.",
  "Achieved sub-2-second page load performance.",
  "Managed complete product development lifecycle independently from concept to deployment.",
];

export const experiences = [
  {
    title: "Full Stack Developer",
    company: "Sunders Cosmo Radiance Hospitals Pvt. Ltd.",
    period: "06/2025 - Present",
    location: "Hyderabad, India",
    description: [
      "Architected and developed a comprehensive Hospital Management System (HMS) and ERP software from scratch to digitize hospital operations.",
      "Led end-to-end development of a scalable healthcare platform using React.js, Next.js, Node.js, Express.js, MongoDB, and Tailwind CSS.",
      "Increased online service revenue by ₹1.2L/month through conversion-focused UI/UX improvements and optimized patient journeys.",
      "Designed and developed a Custom CRM System and implemented Digital Marketing Automations for lead capturing and retention.",
      "Built an AI-Powered Chatbot that automated over 70% of patient interactions, reducing manual administrative workload.",
      "Developed a Dynamic CMS and migrated frontend architecture from React.js (CSR) to Next.js (SSR/SSG), achieving sub-2-second page load times."
    ]
  },
  {
    title: "Full Stack Developer",
    company: "Freelance",
    period: "01/2025 - Present",
    location: "Hyderabad, India",
    description: [
      "Developed a full-featured E-commerce Platform for 'Sri Sampoornam', integrating product catalogs, secure payment gateways, and order management.",
      "Currently building a Digital Wedding Invitations platform, focusing on dynamic, customizable user interfaces and seamless sharing capabilities.",
      "Developed and deployed 6+ live client websites across healthcare, education, IT services, and personal branding sectors.",
      "Managed complete product development lifecycles including responsive UI design, API development, SEO optimization, and cloud deployment."
    ]
  }
];

export const education = [
  {
    degree: "B.Tech (Computer Science and Engineering)",
    school: "Mahatma Gandhi University, Nalgonda",
    period: "2020 - 2024",
    details: "CGPA: 6.85/10",
  },
  {
    degree: "Intermediate (MPC)",
    school: "Krishnaveni Junior College, Warangal",
    period: "2018 - 2020",
    details: "Marks: 937",
  },
  {
    degree: "SSC",
    school: "Ushodaya High School, Warangal",
    period: "2018",
    details: "CGPA: 8.7",
  },
];
