export interface Experience {
  title: string;
  company: string;
  companyLink?: string;
  startDate: string;
  endDate: string;
  description: string;
  skills: string[];
}

export const experiences: Experience[] = [
  {
    title: "Software Engineer",
    company: "Tdooz",
    companyLink: "https://tdooz.com/",
    startDate: "May 2025",
    endDate: "Present",
    description: "Developed and maintained web applications using modern JavaScript frameworks. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    skills: ["TypeScript", "React", "Go"]
  },
  {
    title: "Software Engineer",
    company: "Ilico Genetics",
    companyLink: "https://ilicogenetics.com/",
    startDate: "Oct. 2024",
    endDate: "May 2025",
    description: "Analyzed large datasets to provide business insights and recommendations. Created dashboards and reports to visualize data for stakeholders.",
    skills: ["Python", "Scikit-learn", "React.js", "Figma", "Express.js"]
  },
  {
    title: "Classroom Technology Student Assistant",
    company: "Lehigh University-LTS",
    startDate: "Sep. 2024",
    endDate: "May 2025",
    description: "Assisted in the setup and maintenance of classroom technology. Provided technical support to faculty and students.",
    skills: ["Python", "SQL", "Unity", "Flask", "Git"]
  },
  {
    title: "VR Software Engineer",
    company: "Utah Tech University",
    startDate: "May 2023",
    endDate: "Aug. 2024",
    description: "Developed and maintained web applications using modern JavaScript frameworks. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    skills: ["Unity", "C#", "SCM"]
  }
];
