export interface Role {
  title: string;
  description: string;
  skills: string[];
}
export interface Experience {
  company: string;
  companyLink?: string;
  startDate: string;
  endDate: string;
  roles: Role[];
}

export const experiences: Experience[] = [
  {
    company: "Tdooz",
    companyLink: "https://tdooz.com/",
    startDate: "May 2025",
    endDate: "Present",
    roles: [
      {
        title: "Full-Stack Software Engineer",
        description:
          "Full-stack engineer on a home services platform, built across Go microservices and React, including real-time messaging on AWS, vendor payouts via Stripe, and the CRM to manage both vendors and customers",
        skills: [
          "TypeScript",
          "React",
          "Go",
          "PostgreSQL",
          "Docker",
          "AWS",
          "Stripe",
          "React Native",
        ],
      },
    ],
  },
  {
    company: "Ilico Genetics",
    companyLink: "https://ilicogenetics.com/",
    startDate: "Oct. 2024",
    endDate: "May 2025",
    roles: [
      {
        title: "Software Engineer Intern",
        description:
          "Built an end-to-end ML pipeline at Ilico covering data ingestion, validation, and model training, served through a FastAPI microservice. On the frontend, overhauled the core React workflows with data tables and input validation to match.",
        skills: [
          "Python",
          "Scikit-learn",
          "React.js",
          "Express.js",
          "Node.js",
          "MongoDB",
          "FastAPI",
        ],
      },
    ],
  },
  {
    company: "Lehigh University",
    startDate: "Sep. 2024",
    endDate: "May 2025",
    roles: [
      {
        title: "Graduate Assistant",
        description:
          "Maintained and extended a Flask web application for Lehigh TRAC, adding admin tooling to manage tutor listings, course assignments, and availability across the public-facing site. Led technical workshops on Git for Unity development, writing guides for students, alongside weekly VR workshops classroom activities.",
        skills: ["Python", "SQL", "Unity", "Flask", "Git", "HTML", "CSS"],
      },
    ],
  },
  {
    company: "Utah Tech University",
    companyLink: "https://online.utahtech.edu/immersive/",
    startDate: "May 2023",
    endDate: "Aug. 2024",
    roles: [
      {
        title: "VR Software Engineer",
        description:
          "Contributed to 14 multiplayer Unity VR lab experiences built for two Utah Tech courses, building interactive systems and optimizing core networking, such as building a render-texture sync system that let students save and share lab progress across sessions.",
        skills: ["C#", ".NET", "SVN", "Unity"],
      },
      {
        title: "Code School Instructor",
        description:
          "Co-taught a 9-week full-stack summer program covering Vue, Express, MongoDB, and REST APIs. Guided six student groups through the full development lifecycle while advising on API design, feature scoping, and debugging.",
        skills: [
          "Express.js",
          "Vue.js",
          "Node",
          "MongoDB",
          "JavaScript",
          "HTML",
          "CSS",
          "Git",
        ],
      },
    ],
  },
];
