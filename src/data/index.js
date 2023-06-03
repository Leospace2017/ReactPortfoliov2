import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    dci,


    threejs,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Studies",
      company_name: "DCI DigitalCareerInstitut",
      icon: dci,
      iconBg: "black",
      date: "October 2022 - Jan 2024",
      points: [
        "Intensiver Ausbildungsprogramm in Webentwicklung",
        "Umfassende Einführung in Frontend Backend",
        "Praxisorientierter Ansatz mit realen Projekten",
        "Vermittlung von Versionsverwaltung und Zusammenarbeit in Teams",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "???",
      icon: null,
      iconBg: "#E6DEDD",
      date: "2024 - 2025",
      points: [
        "",
        "",
        "",
        "",
      ],
    },
    {
      title: "Web Developer",
      company_name: "???",
      icon: null,
      iconBg: "#383E56",
      date: "2026",
      points: [
        "",
        "",
        "",
        "",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "???",
      icon: null,
      iconBg: "#E6DEDD",
      date: "2027",
      points: [
        "",
        "",
        "",
        "",
      ],
    },
  ];
  
  
  const projects = [
    {
      name: "HtmlCssDictionary",
      description:
        "first Project (combine with PortfolioBase)",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "GridLayout",
          color: "pink-text-gradient",
        },
      ],
      image: null,
      source_code_link: "https://github.com/Leospace2017",
    },
    {
      name: "PortfolioBase",
      description:
        "get to know advanced sass and css animation ",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "sass",
          color: "green-text-gradient",
        },
        {
          name: "module",
          color: "pink-text-gradient",
        },
      ],
      image: null,
      source_code_link: "https://leospace2017.github.io/Portfolio/",
    },
    {
      name: "PortfolioVersion2",
      description:
        "insight into the different frameworks ",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "framer-motion",
          color: "green-text-gradient",
        },
        {
          name: "Tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: null,
      source_code_link: "https://github.com/Leospace2017",
    },
  ];
  
  export { services, technologies, experiences,  projects };