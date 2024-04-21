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
    <header className="py-2 w-full fixed z-50 top-0 left-0">
      <nav className="container py-4 px-8 flex rounded-full justify-end items-center gap-4 lg:gap-8 backdrop-blur-xl bg-white/30 tracking-wide">
        <LanguagesToggler locale={locale} />

        <Link
          className={`${isActive(
            null,
          )} [font-size:_clamp(0.875rem,3vw,1.3rem)] font-medium hover:text-primary transition-color duration-200`}
          href="/"
        >
          {t("about-me")}
        </Link>
        <Link
          className={`${isActive(
            "works",
          )} [font-size:_clamp(0.875rem,3vw,1.3rem)] font-medium hover:text-primary transition-color duration-200`}
          href="/works"
        >
          {t("projects")}
        </Link>
        <Link
          className={`${isActive(
            "blog",
          )} [font-size:_clamp(0.875rem,3vw,1.3rem)] font-medium hover:text-primary transition-color duration-200`}
          href="/blog"
        >
          {t("blog")}
        </Link>
      </nav>
    </header>
  );
};
