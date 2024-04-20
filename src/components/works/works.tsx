import { useTranslations } from "next-intl";

import type { Work } from "@/types/work";
import { WorkCard } from "@/components/work-card/work-card";

interface Props {
  worksList: Work[];
}
export const Works = ({ worksList }: Props): JSX.Element => {
  const t = useTranslations("projects");

  return (
    <section className="content-container text-dark tracking-wide">
      {worksList.map(({ id, ...workProps }) => (
        <WorkCard key={id} id={id} {...workProps} />
      ))}
    </section>
  );
};
