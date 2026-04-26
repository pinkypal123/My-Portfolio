// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import cursorLogo from './assets/tech_logo/cursorAI.png';


// Experience Section Logo's
import freelancingLogo from './assets/company_logo/freelancer-logo.png';
import grabittsLogo from './assets/company_logo/grabitts.jpg';
import appsinvoLogo from './assets/company_logo/appsinvo.jpg';
import iphLogo from './assets/company_logo/iph.jpg';

// Education Section Logo's
import aktuLogo from './assets/education_logo/aktu.png';


// Project Section Logo's
import billingLogo from './assets/work_logo/billing.svg';
import iphTechLogo from './assets/work_logo/iph.png';
import hposLogo from './assets/work_logo/hassan-brand.jpeg';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      // { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      // { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo }
      // { name: 'Firebase', logo: firebaseLogo },
      // { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      // { name: 'C', logo: cLogo },
      // { name: 'C++', logo: cppLogo },
      // { name: 'Java', logo: javaLogo },
      // { name: 'Python', logo: pythonLogo },
      // { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Cursor AI', logo: cursorLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: grabittsLogo,
    role: "Full Stack Developer",
    company: "Grabitts Softech Services Private Limited",
    date: "September 2025 - April 2026",
    desc: "Developed and maintained a scalable web-based Point of Sale (POS) system using React.js, Node.js, Express.js, and MongoDB. Built RESTful APIs for billing, order management, and inventory tracking, and implemented JWT-based authentication with role-based access control. Designed responsive UI using Material UI and ensured seamless frontend-backend integration.",
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "TypeScript",
      "REST API",
      "JWT Auth",
      "Redux Toolkit",
      "Material UI",
      "Bootstrap",
      "Git",
      "Postman"
    ],
  },
  {
    id: 1,
    img: freelancingLogo,
    role: "Frontend Developer",
    company: "Freelance Frontend Developer",
    date: "August 2023 - March 2025",
    desc: "Worked as a freelance Frontend developer, delivering custom web applications with a focus on clean UI, responsiveness, and client satisfaction.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "Next Js",
      "Bootstrap",
      "Figma",
      "Material UI"
    ],
  },
  {
    id: 2,
    img: appsinvoLogo,
    role: "Frontend Developer",
    company: "Appsinvo Private Limited",
    date: "August 2023 - March 2025",
    desc: "Frontend Developer at Appsinvo Private Limited — built dynamic and responsive web applications using React.js, Material UI, and modern frontend practices, focusing on performance, usability, and maintainable code.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "Next Js",
      "Bootstrap",
      "Figma",
      "Material UI"
    ],
  },
  {
    id: 3,
    img: iphLogo,
    role: "Frontend Developer",
    company: "IPH Technologies Private Limited",
    date: "June 2022 - July 2023",
    desc: "Worked as a Frontend Developer, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "Next Js",
      "Bootstrap",
      "Figma",
      "Material UI"
    ],
  },
];

export const education = [
  {
    id: 0,
    img: aktuLogo,
    school: "APJ Abdul Kalam Technical University, Lucknow",
    date: "July 2017 - June 2021",
    grade: "8.1 CGPA",
    desc: "I have completed my Bachelor's degree (B.Tech) in Computer Science and Engineering from Dr. A.P.J. Abdul Kalam Technical University, Lucknow. During my studies, I gained a strong foundation in core subjects like Data Structures, Algorithms, Object-Oriented Programming, and Web Development. This experience helped me build solid technical and problem-solving skills.",
    degree: "Bachelor of Technology (CSE) - B.Tech",
  },
  //  {
  //     id: 0,
  //     img: aktuLogo,
  //     school: "APJ Abdul Kalam Technical University, Lucknow",
  //     date: "Sept 2022 - July 2024",
  //     grade: "8.1 CGPA",
  //     desc: "I have completed my Bachelor's degree (B.Tech) in Computer Science and Engineering from Dr. A.P.J. Abdul Kalam Technical University, Lucknow. During my studies, I gained a strong foundation in core subjects like Data Structures, Algorithms, Object-Oriented Programming, and Web Development. This experience helped me build solid technical and problem-solving skills.",
  //     degree: "Bachelor of Technology (CSE) - B.Tech",
  //   },
  //   {
  //     id: 3,
  //     img: aktuLogo,
  //     school: "Vatsalya Public School Govardhan, Mathura",
  //     date: "Apr 2015 - March 2016",
  //     grade: "87.5%",
  //     desc: "I completed my class 10 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Science with Computer.",
  //     degree: "CBSE(X), Science with Computer Application",
  //   },
];

export const projects = [

  {
    id: 1,
    title: "HPOS - Point of Sale System",
    description:
      "Developed a scalable full-stack POS system using React.js, Node.js, Express.js, and MongoDB. Built RESTful APIs for billing, order management, and inventory tracking. Implemented JWT-based authentication and role-based access control, along with a responsive and high-performance UI using Material UI.",
    image: hposLogo,
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
      "JWT Auth",
      "Material UI",
      "JavaScript"
    ],
  },
     {
    id: 2,
    title: "Billing Software",
    description:
      "Billing Software is a web-based application built using React that helps businesses generate invoices, manage customer data, and track transactions efficiently.",
    image: billingLogo,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
  },
  {
    id: 3,
    title: "IPH Technologies Website",
    description:
      "Developed a responsive company website for IPH Technologies using React, showcasing services, company information, and contact features.",
    image: iphTechLogo,
    tags: ["React JS", "HTML", "CSS", "JavaScript"],
  },
];  