import type { Post as Props } from "@/shared/interfaces/post";

export const FullPostCard = ({ date, categores, text, title, length }: Props): JSX.Element => {
  return (
    <>
      <h3 className="mb-4 grow font-semibold text-[clamp(1.2rem,5vw,1.5rem)]">{title}</h3>
      <div className="mb-3 text-lg flex gap-6">
        <span className="text-[clamp(0.875rem,3vw,1.25rem)]">{date}</span>
        <span className="h-full min-h-7 w-px bg-black"></span>
        <span className="text-light text-[clamp(0.875rem,3vw,1.25rem)]">{categores}</span>
      </div>
      {text.map((paragraph, index) => (
        <p className="[&:not(:first-child)]:mt-3" key={index}>
          {paragraph}
        </p>
      ))}
    </>
  );
};
