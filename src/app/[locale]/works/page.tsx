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
    <section className="content-container pt-20 lg:pt-[160px] tracking-wide">
      <h1 className="lg:px-[16px] text-dark [font-size:_clamp(1.2rem,5vw,3rem)] font-bold">{t("projects")}</h1>

      <div className="-mx-[16px] lg:mx-0 lg:mb-14 lg:mt-6">
        <WorksList worksList={worksList} />
      </div>
    </section>
  );
}
