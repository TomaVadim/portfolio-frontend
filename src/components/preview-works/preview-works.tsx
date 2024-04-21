import { useTranslations } from "next-intl";

import type { Work } from "@/shared/interfaces/work";
import { WorkCard } from "@/components/work-card/work-card";

interface Props {
  worksList: Work[];
}
export const PreviewWorks = ({ worksList }: Props): JSX.Element => {
  const t = useTranslations("projects");

  const previewWorksList = worksList.slice(-3);

  return (
    <section className="content-container text-dark tracking-wide">
      <h2 className="pt-6 text-[clamp(1.2rem,3vw,1.5rem)] text-start">{t("featured-projects-title")}</h2>
      {previewWorksList.map(({ id, ...workProps }) => (
        <WorkCard key={id} id={id} {...workProps} />
      ))}
    </section>
  );
};
