import cat from "../assets/cat.webp";
import lyric from "../assets/lyric.webp";
import mva from "../assets/mva.webp";
import type { ImageMetadata } from "astro";

export interface Project {
  title: string;
  description: string;
  link: string;
  image: ImageMetadata;
  width: Number;
  height: Number;
}

export const projects: Project[] = [
  {
    title: "Multivariate Analysis of Southern Utah Water Quality",
    description:
      "Research project that utilizes principal component analysis to explore Southern Utah water trends and measure feature importance.",
    link: "https://repository.utahtech.edu/items/da074a0e-cd24-4b12-9b0e-faf8d2aa0ce3",
    image: mva,
    width: 275,
    height: 108,
  },
  {
    title: "Lyric-Luminary",
    description:
      "This is a fun project that aims to view lyrics via the lens of a text classification model. I'm experimenting with TF-IDF to classify songs into a genere via the lyrics of the song.",
    link: "https://github.com/angel-721/lyric-luminary",
    image: lyric,
    width: 206,
    height: 104,
  },
  {
    title: "Godot Image Classification",
    description:
      "Use a pre-trained convolutional neural network to make in game predictions! Take screenshots of the game and classify if a cat or dog is in the scene with the power of machine learning.",

    link: "https://github.com/angel-721/godot-image-classification",
    image: cat,
    width: 196,
    height: 131,
  },
];
