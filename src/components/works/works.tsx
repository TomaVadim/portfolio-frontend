import type { Work } from "@/types/work";
import { WorkCard } from "@/components/work-card/work-card";

interface Props {
  worksList: Work[];
}
export const Works = ({ worksList }: Props): JSX.Element => {
  return (
    <section className="content-container text-dark tracking-wide">
      <h6 className="pt-6 text-[22px] text-start">Featured works</h6>
      {worksList.map(({ id, ...workProps }) => (
        <WorkCard key={id} id={id} {...workProps} />
      ))}
    </section>
  );
};
