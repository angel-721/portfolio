import cat from "../assets/cat.webp";
import lyric from "../assets/lyric.webp";
import mva from "../assets/mva.webp";
import type { ImageMetadata } from "astro";

export interface Project {
    title: string;
    description: string | null;
    link: string;
    linkText: string | null;
    image: ImageMetadata | null;
    width: Number | null;
    height: Number | null;
    company: string;
    isGithub: boolean;
    skills: string[] | null;
}

export const projects: Partial<Project>[] = [
    {
        title: "Multivariate Analysis of Southern Utah Water Quality",
        description:
            "Research project that utilizes principal component analysis to explore Southern Utah water trends and measure feature importance.",
        link: "https://repository.utahtech.edu/items/da074a0e-cd24-4b12-9b0e-faf8d2aa0ce3",
        image: mva,
        width: 275,
        height: 108,
        company: "Utah Tech Research",
        isGithub: true,
        skills: ["Python", "Jupyter", "Scikit-learn"],
    },
    {
        title: "Lyric-Luminary",
        description:
            "This is a fun project that aims to view lyrics via the lens of a text classification model. I'm experimenting with TF-IDF to classify songs into a genere via the lyrics of the song.",
        link: "https://github.com/angel-721/lyric-luminary",
        image: lyric,
        width: 206,
        height: 104,
        company: "",
        isGithub: true,
        skills: ["Python", "Go", "Svelte", "Scikit-learn"],
    },
    {
        title: "Godot Image Classification",
        description:
            "Use a pre-trained convolutional neural network to make in game predictions! Take screenshots of the game and classify if a cat or dog is in the scene with the power of machine learning.",

        link: "https://github.com/angel-721/godot-image-classification",
        image: cat,
        width: 196,
        height: 131,
        company: "Code Camp 2023",
        isGithub: true,
        skills: ["Python", "Godot", "Numpy", "PyTorch"],
    },
    // Partial Projects
    {
        title: "BlackJack Deck Counter",
        link: "https://github.com/angel-721/yolo-blackjack-hand-detection",
        company: "",
        isGithub: true,
        skills: ["Python", "Ultralytics", "OpenCV"],
    },
    {
        title: "Discord DJ Music Bot",
        link: "https://github.com/angel-721/music-discord-bot/tree/main",
        company: "",
        isGithub: true,
        skills: ["Rust"],
    },
    {
        title: "XSCI 3054",
        company: "Utah Tech Online",
        link: "https://www.youtube.com/watch?v=aqx4HUE_pnM",
        linkText: "Demo Video",
        skills: ["C#", "Unity", "Oculus"],
    },
    {
        title: "PHYSICS 2215",
        company: "Utah Tech Online",
        link: "https://www.youtube.com/watch?v=ead660LGiRM",
        linkText: "Demo Video",
        skills: ["C#", "Unity", "Oculus"],
    },
    {
        title: "Lehigh TRAC Program Website(Maintainer)",
        company: "Lehigh TRAC",
        skills: ["Python", "Flask,", "SQL", "HTML/CSS"],
        link: "https://trac.lehigh.edu/",
        linkText: "https://trac.lehigh.edu/",
    },
    {
        title: "NBA Player Style Unsupervised Clustering",
        company: "",
        skills: ["R"],
        link: "https://github.com/angel-721/nba-player-clustering-r",
        isGithub: true,
    },
    {
        title: "Ultimate Fight Predictor",
        company: "",
        skills: ["Python", "MongoDB", "Express", "Vue", "Scikit-learn"],
        link: "https://github.com/angel-721/ultimate-fight-predictor",
        isGithub: true,
    },
    {
        title: "Tapology Python Parser",
        company: "",
        skills: ["Python", "Beautiful Soup"],
        link: "https://github.com/angel-721/tapology-python-parser",
        isGithub: true,
    },
    {
        title: "Tweepy Media Bot",
        company: "",
        skills: ["Python", "SQL", "Twitter API", "AWS", "Bash"],
        link: "https://github.com/angel-721/tweepy-media-bot",
        isGithub: true,
    },
    {
        title: "Godot(HTTP Client Unit Test)",
        company: "Open Source Contribution",
        skills: ["C++"],
        link: "https://github.com/godotengine/godot/pull/76636",
        isGithub: true,
    },
    {
        title: "MyMood",
        company: "Open Source Contribution",
        skills: ["Kotlin", "Android"],
        link: "https://github.com/NimaKhajehpour/MyMood/pull/19",
        isGithub: true,
    },
    {
        title: "NookBeats",
        company: "",
        skills: ["Kotlin", "Android"],
        link: "",
        linkText: "",
    },
    {
        title: "MindJot",
        company: "",
        skills: ["JavaScript", "HTML/CSS", "Python", "Flask", "SQL"],
        link: "",
        linkText: "",
    },
    {
        title: "Tuneleaf",
        company: "",
        skills: ["JavaScript", "HTML/CSS", "Python", "Flask", "SQL"],
        link: "",
        linkText: "",
    },
    {
        title: "Image to ASCII Converter",
        company: "",
        skills: ["Java"],
        link: "https://github.com/angel-721/java-image-ascii-converter",
        isGithub: true,
    },
    {
        title: "Compubox Python",
        company: "",
        skills: ["Python", "SQL"],
        link: "https://github.com/angel-721/compubox-python",
        isGithub: true,
    },
];
