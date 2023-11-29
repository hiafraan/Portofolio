import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
  git,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  python,
  java,
  django,
  springboot,
  sass,
  mysql,
  dsa,
  flask,
  redux,
  express,
  psql,
  bootstrap,
  tailwind,
  mui,
  linux,
  wordpress,
  office,
  figma,
  blender,
  adobe,
  person1,
  person2,
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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "React Native Developer",
    icon: backend,
  },
  {
    title: "Penetration Tester",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Data Structures & Algorithms",
    icon: dsa,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "Spring Boot",
    icon: springboot,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Sass",
    icon: sass,
  },
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "Express.js",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "PostgreSQL",
    icon: psql,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material-UI",
    icon: mui,
  },
  {
    name: "Kali Linux",
    icon: linux,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "WordPress",
    icon: wordpress,
  },
  {
    name: "MS Office",
    icon: office,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Blender",
    icon: blender,
  },
  {
    name: "Adobe CC",
    icon: adobe,
  },
];

const experiences = [
  {
    title: "Wordpress Developer",
    company_name: "Elite Business & Tax Consultancy",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Apr 2020 - Apr 2023",
    points: [
      "Developed and maintained the company's website using WordPress, a popular CMS.",
      "Collaborated with the consulting team to design and implement new features and functionality.",
      "Improved the website's performance and user experience through regular updates and bug fixes.",
      "Successfully launched website updates on schedule, resulting in a 30% increase in user engagement and contributing to the company's overall success.",
    ],
  },
  {
    title: "Wordpress Developer",
    company_name: "Madina Hajj Travels and Tours",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Sep 2022 - Sep 2023",
    points: [
      "Developed and maintained the website for MHTravels Agency using WordPress, a CMS.",
      "Collaborated with the marketing team to design and implement new features to improve user experience.",
      "Monitored website performance and made updates as needed to ensure smooth operation.",
      "Assisted in troubleshooting and resolving technical issues as they arose.",
      "Contributed to the overall success of the company by successfully launching multiple updates to the website on the schedule that, resulted in a 20% increase in bookings.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Ones & Zeros",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jun 2023 - Sep 2023",
    points: [
      "Collaborating with a team to develop a website for the Department of Agriculture in Sri Lanka.",
      "Utilizing React and Spring Boot to build the website's frontend and backend components.",
      "Participating in the design and implementation of new features to enhance the website's functionality.",
      "Contributing to the project's success by actively working on development tasks and ensuring project milestones are met.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I am very pleased with Mr. Afraan's work; his knowledge and professionalism in this field are exceptional.",
    name: "AM.Hassaan (ACA)(FCCA)(CTA)(B.Sc)",
    designation: "Founder",
    company: "Elite Biz & Tax Consultancy",
    image: person1,
  },
  {
    testimonial:
      "Grateful for Mr. Afraan's exceptional website work, meeting tight deadlines with professionalism and creativity.",
    name: "As-sheikh A. Abooubaitha (Madani)",
    designation: "CEO",
    company: "MH Travels & Tours",
    image: person2,
  },
];

const projects = [
  {
    name: "HackGenius",
    description:
      "HackGenius is a Flask-based web application that allows users to create, edit, and publish blog posts. The application also provides user authentication to ensure that only authorized users can access certain features.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "flask",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/hiafraan/HackGenius-Flask",
  },
  {
    name: "Brand Since 97",
    description:
      "This is an E-commerce website developed using React, Strapi, and Stripe. It allows users to browse products, add them to their cart, and checkout using Stripe as the payment gateway.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "strapi",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link:
      "https://github.com/hiafraan/Brand_Since_97-React_Strapi_Stripe",
  },
  {
    name: "JobHuntX",
    description:
      "JobHuntX is a mobile app made with React Native. It makes job searching easy on both iPhones and Androids. It shows real-time job info from top websites using Rapid API, giving users a simple and smooth experience.",
    tags: [
      {
        name: "reactnative",
        color: "blue-text-gradient",
      },
      {
        name: "expo",
        color: "green-text-gradient",
      },
      {
        name: "api",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/hiafraan/jobhuntx",
  },
];

export { services, technologies, experiences, testimonials, projects };
