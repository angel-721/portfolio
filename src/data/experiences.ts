export interface Role {
  title: string;
  bulletPoints?: string[];
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
        bulletPoints: [
          "Created a vendor payout interface with TypeScript and React, integrating Stripe, allowing admins to review and manually adjust automated payouts.",
          "Developed a customer messaging system using React Native, PostgreSQL and Go, deployed on AWS (EC2), allowing mobile and web users to communicate in real time.",
          "Built a GitHub Actions CI/CD pipeline to deploy microservices as Docker containers, enabling a cross-functional team to ship features faster with instant rollbacks.",
        ],
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
        bulletPoints: [
          "Developed a patient record machine-learning API with Python, FastAPI, and Scikit-learn, increasing prediction speed by batching records and hot loading.",
          "Built multi-role access controls across a React frontend, Node.js/Express.js middleware layer, and MongoDB, establishing strict data permissions for lab assistants and doctors.",
          "Automated a model training pipeline with Python and Bash scripts, AWS cronjobs, automating the training of new models while generating reports for model validation.",
          "Created OpenAPI specs and deployed both the React frontend and Express backend on a Docker container, integrating with APIsec for penetration testing, eliminating backend vulnerabilities.",
          "Built Jest testing suite for React components, and integration tests with Playwright, integrating with Github Actions, reducing the amount of regression bugs when new features are shipped.",
        ],
        skills: [
          "Python",
          "Scikit-learn",
          "React.js",
          "Express.js",
          "Node.js",
          "MongoDB",
          "FastAPI",
          "Docker",
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
        bulletPoints: [
          "Maintained and enhanced the Lehigh TRAC program's Python Flask web-application by expanding admin tools, reducing the amount of manual database work by automating update every semester.",
          "Assisted both Lehigh students and faculty with weekly VR workshops for classroom and community activities.",
        ],
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
        bulletPoints: [
          "Optimized C# online systems with the use of bit-packing and caching optimizations so that a render texture sync system draws files 2.5x faster than the old system.",
          "Created persistent lab progress across 14 assignments by building a .NET Core and Unity save system with automatic semester resets so incoming students start fresh.",
        ],
        skills: ["C#", ".NET", "SVN", "Unity"],
      },
      {
        title: "Code School Instructor",
        bulletPoints: [
          "Taught a 9-week full-stack development summer program covering Vue, Express, MongoDB, and REST APIs to 19 students along side one other instructor.",
          "Guided 6 groups through the full-stack development lifecycle, advising on API design, feature scoping, and (a lot) of debugging.",
        ],
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
