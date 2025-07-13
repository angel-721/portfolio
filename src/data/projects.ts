export interface Project {
  title: string;
  description: string;
  link: string;
}

export const projects: Project[] = [
  {
    title: "Minimal Portfolio",
    description: "A lightweight personal website using Astro and Tailwind.",
    link: "https://example.com/portfolio",
  },
  {
    title: "Weather App",
    description: "A simple weather checker app using OpenWeather API.",
    link: "https://example.com/weather",
  },
];

