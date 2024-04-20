"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { LanguagesToggler } from "../languages-toggler/languages-toggler";

export const Header = ({ locale }: { locale: string }): JSX.Element => {
  const t = useTranslations("header");
  const isActive = (href: string | null) => {
    return useSelectedLayoutSegment() === href ? "text-primary" : "text-dark";
  };

  return (
    <header className="container py-2 w-full fixed z-50 top-0 left-0">
      <nav className="container py-4 px-8 flex rounded-full justify-end gap-8 backdrop-blur-xl bg-white/30 tracking-wide">
        <LanguagesToggler locale={locale} />

        <Link
          className={`${isActive(
            null,
          )} text-medium lg:text-xl font-medium hover:text-primary transition-color duration-200`}
          href="/"
        >
          {t("about-me")}
        </Link>
        <Link
          className={`${isActive(
            "works",
          )} text-medium lg:text-xl font-medium hover:text-primary transition-color duration-200`}
          href="/works"
        >
          {t("projects")}
        </Link>
        <Link
          className={`${isActive(
            "blog",
          )} text-medium lg:text-xl font-medium hover:text-primary transition-color duration-200`}
          href="/blog"
        >
          {t("blog")}
        </Link>
      </nav>
    </header>
  );
};
