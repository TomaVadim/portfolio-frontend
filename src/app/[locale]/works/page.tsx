import { Metadata } from "next";

import { useTranslations } from "next-intl";

import { Works as WorksList } from "@/components/works/works";
import { generateWorksList } from "@/components/works/works-list";

export const metadata: Metadata = {
  title: "Portfolio | Works",
};

export default function Works() {
  const worksList = generateWorksList();
  const t = useTranslations("header");

  return (
    <section className="container px-4 max-w-[950px] pt-20 lg:pt-[160px] tracking-wide">
      <h1 className="lg:px-4 text-dark text-[clamp(1.2rem,5vw,3rem)] font-bold">{t("projects")}</h1>

      <div className="lg:mb-14 lg:mt-6">
        <WorksList worksList={worksList} />
      </div>
    </section>
  );
}
