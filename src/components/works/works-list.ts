import { useTranslations } from "next-intl";

import type { Work } from "@/shared/interfaces/work";
import workImage from "@/public/images/work.jpg";

export const generateWorksList = (): Work[] => {
  const t = useTranslations("projects");

  return [
    {
      id: 1,
      imageSrc: workImage,
      alt: "work image",
      nameOfWork: t("designing-dashboards-title"),
      year: "2020",
      technologies: t("designing-dashboards-category"),
      describing: t("designing-dashboards-text"),
    },
    {
      id: 2,
      imageSrc: workImage,
      alt: "work image",
      nameOfWork: t("designing-dashboards-title"),
      year: "2020",
      technologies: t("designing-dashboards-category"),
      describing: t("designing-dashboards-text"),
    },
    {
      id: 3,
      imageSrc: workImage,
      alt: "work image",
      nameOfWork: t("designing-dashboards-title"),
      year: "2020",
      technologies: t("designing-dashboards-category"),
      describing: t("designing-dashboards-text"),
    },
    {
      id: 4,
      imageSrc: workImage,
      alt: "work image",
      nameOfWork: t("designing-dashboards-title"),
      year: "2020",
      technologies: t("designing-dashboards-category"),
      describing: t("designing-dashboards-text"),
    },
  ];
};
