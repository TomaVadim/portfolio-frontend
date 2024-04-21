import { useTranslations } from "next-intl";

import type { Work } from "@/shared/interfaces/work";
import deminingImage from "@/public/images/demining.png";
import financeAndConsultancyImage from "@/public/images/finance-and-consultancy.png";

export const generateWorksList = (): Work[] => {
  const t = useTranslations("projects");

  return [
    {
      id: 1,
      imageSrc: deminingImage,
      href: "https://demining-georesource.tech",
      alt: "Picture with site preview",
      nameOfWork: t("demining-georesource-title"),
      year: "2023",
      technologies: "React, TS",
      describing: t("designing-dashboards-text"),
    },
    {
      id: 2,
      href: "https://courageous-biscotti-dd7bfd.netlify.app",
      imageSrc: financeAndConsultancyImage,
      alt: "Picture with site preview",
      nameOfWork: t("finance-and-consultancy-solution-title"),
      year: "2022",
      technologies: "Html, Scss, JS",
      describing: t("designing-dashboards-text"),
    },
  ];
};
