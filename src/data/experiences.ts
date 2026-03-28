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
    company: "Tdooz (Contract)",
    companyLink: "https://tdooz.com/",
    startDate: "May 2025",
    endDate: "Present",
    roles: [
      {
        title: "Software Engineer",
        description:
          "I'm a full-stack engineer across 3 production applications — a customer booking app, a vendor management portal, and an admin CRM. I designed and built cross-cutting systems including a real-time messaging system deployed on AWS, an automated Stripe vendor payout system, and various full-stack features across Go microservices and React frontends.",
        skills: [
          "TypeScript",
          "React",
          "Go",
          "PostgreSQL",
          "Docker",
          "AWS",
          "Stripe",
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
          "I redesigned both the machine-learning pipeline on the backend and the UI/UX flow of the frontend. I created a FastAPI microservice which was able to speed up batch predictions by 200%. On the frontend I was able to clean up many views by utilizing data tables and frontend validation to create a more enjoyable experience for end-users.",
        skills: ["Python", "Scikit-learn", "React.js", "Express.js"],
      },
    ],
  },
  {
    company: "Lehigh University",
    startDate: "Sep. 2024",
    endDate: "May 2025",
    roles: [
      {
        title: "Classroom Technology Graduate Assistant",
        description:
          "I maintained and enhanced the Lehigh TRAC program's Flask web-application by expanding admin tools to reduce the amount of manual database work. I also helped both Lehigh students and faculty with weekly VR workshops for classroom and community activities.",
        skills: ["Python", "SQL", "Unity", "Flask", "Git"],
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
          "I was a part of the development of 14 multiplayer Unity VR lab experiences for two Utah Tech courses. In addition to building many small interactive systems, I optimized core network systems, such as making a render-texture sync system over 200% faster, so that students can save their progress on their labs and share their work with other students.",
        skills: ["Unity", "C#"],
      },
      {
        title: "Code School Instructor",
        description:
          "I taught a 9-week full-stack development summer program covering Vue, Express, MongoDB, and REST APIs to 19 students along side one other instructor. I guided 6 groups through the full-stack development lifecycle, advising on API design, feature scoping, and (a lot) of debugging.",
        skills: ["Express.js", "Vue.js", "Node", "MongoDB"],
      },
    ],
  },
];
