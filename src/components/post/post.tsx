import type { Post as Props } from "@/types/post";

export const Post = ({ date, categores, text, title }: Props): JSX.Element => {
  return (
    <>
      <h5 className="mb-4 font-semibold [font-size:_clamp(1.2rem,5vw,1.5rem)]">{title}</h5>
      <div className="mb-3 text-lg flex gap-6">
        <span className="[font-size:_clamp(0.875rem,3vw,1.25rem)]">{date}</span>
        <span className="h-full min-h-7 w-[1px] bg-black"></span>
        <span className="text-light [font-size:_clamp(0.875rem,3vw,1.25rem)]">{categores}</span>
      </div>
      <p>{text}</p>
    </>
  );
};
