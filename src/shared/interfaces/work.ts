import { StaticImageData } from "next/image";

export interface Work {
  id: number;
  href: string;
  imageSrc: StaticImageData;
  alt: string;
  year: string;
  nameOfWork: string;
  technologies: string;
  describing: string;
}
