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
    company: "Tech Corp",
    companyLink: "https://example.com/tech-corp",
    startDate: "2022-01",
    endDate: "Present",
    description: "Developed and maintained web applications using modern JavaScript frameworks. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    skills: ["TypeScript", "React", "Node.js", "AWS"]
  },
  {
    title: "Data Analyst",
    company: "Data Insights Inc.",
    companyLink: "https://example.com/data-insights",
    startDate: "2020-06",
    endDate: "2021-12",
    description: "Analyzed large datasets to provide business insights and recommendations. Created dashboards and reports to visualize data for stakeholders.",
    skills: ["Python", "SQL", "Tableau", "Pandas"]
  }
];
