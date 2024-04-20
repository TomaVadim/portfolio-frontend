import { useTranslations } from "next-intl";

import type { Post } from "@/types/post";

export const generatePosts = (): Post[] => {
  const t = useTranslations("posts");

  return [
    {
      id: 1,
      date: t("evolution-of-frontend-development-date"),
      title: t("evolution-of-frontend-development-title"),
      categores: t("evolution-of-frontend-development-category"),
      text: t("evolution-of-frontend-development-text"),
    },
    {
      id: 2,
      date: t("mastering-css-date"),
      title: t("mastering-css-title"),
      categores: t("mastering-css-category"),
      text: t("mastering-css-text"),
    },
    {
      id: 3,
      date: t("demystifying-typescript-date"),
      title: t("demystifying-typescript-title"),
      categores: t("demystifying-typescript-category"),
      text: t("demystifying-typescript-text"),
    },
  ];
};
