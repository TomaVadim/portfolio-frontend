import { useTranslations } from "next-intl";

import type { Post } from "@/shared/interfaces/post";

export const generatePosts = (): Post[] => {
  const t = useTranslations("posts");

  return [
    {
      id: 1,
      date: t("evolution-of-frontend-development-date"),
      title: t("evolution-of-frontend-development-title"),
      categores: t("evolution-of-frontend-development-category"),
      text: [
        t("evolution-of-frontend-development-paragraph-1"),
        t("evolution-of-frontend-development-paragraph-2"),
        t("evolution-of-frontend-development-paragraph-3"),
        t("evolution-of-frontend-development-paragraph-4"),
        t("evolution-of-frontend-development-paragraph-5"),
        t("evolution-of-frontend-development-paragraph-6"),
        t("evolution-of-frontend-development-paragraph-7"),
        t("evolution-of-frontend-development-paragraph-8"),
        t("evolution-of-frontend-development-paragraph-9"),
      ],
    },
    {
      id: 2,
      date: t("mastering-css-date"),
      title: t("mastering-css-title"),
      categores: t("mastering-css-category"),
      text: [
        t("mastering-css-paragraph-1"),
        t("mastering-css-paragraph-2"),
        t("mastering-css-paragraph-3"),
        t("mastering-css-paragraph-4"),
        t("mastering-css-paragraph-5"),
        t("mastering-css-paragraph-6"),
        t("mastering-css-paragraph-7"),
        t("mastering-css-paragraph-8"),
      ],
    },
    {
      id: 3,
      date: t("demystifying-typescript-date"),
      title: t("demystifying-typescript-title"),
      categores: t("demystifying-typescript-category"),
      text: [
        t("demystifying-typescript-paragraph-1"),
        t("demystifying-typescript-paragraph-2"),
        t("demystifying-typescript-paragraph-3"),
        t("demystifying-typescript-paragraph-4"),
        t("demystifying-typescript-paragraph-5"),
        t("demystifying-typescript-paragraph-6"),
      ],
    },
  ];
};
