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
    company: "Tdooz(Contract)",
    companyLink: "https://tdooz.com/",
    startDate: "May 2025",
    endDate: "Present",
    roles: [
      {
        title: "Software Engineer",
        description:
          "Worked on 5 different Go microservices and 2 different React frontends. I was able to build up new features such as automated payout systems on backend services while using the best state-management practices and TailwindCSS on the frontend to ensure that UI/UX for new features can be iterated through rapidly.",
        skills: ["TypeScript", "React", "Go", "TailwindCSS"],
      },
    ],
  },
  {
    company: "Ilico Genetics (Contract)",
    companyLink: "https://ilicogenetics.com/",
    startDate: "Oct. 2024",
    endDate: "May 2025",
    roles: [
      {
        title: "Software Engineer",
        description:
          "Redesigned both the machine-learning pipeline on the backend and the UI/UX flow of the frontend. I created a FastAPI microservice which was able to speed up batch predictions by 200%. On the frontend I was able to clean up many views by utilizing data tables and frontend validation to create a more enjoyable experience for end-users.",
        skills: ["Python", "Scikit-learn", "React.js", "Figma", "Express.js"],
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
          "Helped with the development of 14 multiplayer Unity VR lab experiences for two Utah Tech courses. In addition to building many small interactive systems, I optimized core network systems, such as making a render-texture sync system over 200% faster, so that students can save their progress on their labs and share their work with other students.",
        skills: ["Unity", "C#", "SCM"],
      },
      {
        title: "Code School Instructor",
        description:
          "Taught a 9-week full-stack development summer program covering Vue, Express, MongoDB, and REST APIs to 19 students. I provided a lot of code architectural advice and debugging guidance to each of the six groups building their web applications.",
        skills: ["Express.js", "Vue.js", "Node"],
      },
    ],
  },
];
