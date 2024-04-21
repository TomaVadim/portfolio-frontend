"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import { useTranslations } from "next-intl";

import { LanguagesToggler } from "@/components/languages-toggler/languages-toggler";
import { PublicRoutes } from "@/shared/enums/public-routes";

export const Header = ({ locale }: { locale: string }): JSX.Element => {
  const t = useTranslations("header");
  const isActive = (href: string | null) => {
    const currentPage = useSelectedLayoutSegment();

    return currentPage === href ? "text-primary" : "text-dark";
  };

  return (
    <header className="px-4 lg:px-0 py-2 w-full fixed z-50 top-0 left-0">
      <nav className="container py-4 px-8 flex rounded-full justify-end items-center gap-4 lg:gap-8 backdrop-blur-xl bg-white/30 tracking-wide">
        <LanguagesToggler locale={locale} />

        <Link
          className={`${isActive(
            null,
          )} text-[clamp(0.875rem,3vw,1.3rem)] font-medium hover:text-primary transition-color duration-200`}
          href={PublicRoutes.HOME}
        >
          {t("about-me")}
        </Link>
        <Link
          className={`${isActive(
            "works",
          )} text-[clamp(0.875rem,3vw,1.3rem)] font-medium hover:text-primary transition-color duration-200`}
          href={PublicRoutes.WORKS}
        >
          {t("projects")}
        </Link>
        <Link
          className={`${isActive(
            "blog",
          )} text-[clamp(0.875rem,3vw,1.3rem)] font-medium hover:text-primary transition-color duration-200`}
          href={PublicRoutes.BLOG}
        >
          {t("blog")}
        </Link>
      </nav>
    </header>
  );
};
