import type { Work } from "@/types/work";
import Image from "next/image";

export const WorkCard = ({ imageSrc, alt, nameOfWork, year, technologies, describing }: Work): JSX.Element => {
  return (
    <article className="pt-6 pb-8 flex flex-col lg:grid lg:grid-cols-10 gap-5 border-b border-gray-300">
      <div className="aspect-[246px/180px] col-start-1 col-span-3">
        <Image priority src={imageSrc} alt={alt} />
      </div>
      <div className="col-start-4 col-span-6">
        <h5 className="mb-4 font-semibold [font-size:_clamp(1.5rem,5vw,1.875rem)]">{nameOfWork}</h5>
        <span className="inline-block px-[10px] py-[2px] [font-size:_clamp(0.875rem,3vw,1.25rem)] bg-[#142850] rounded-full text-center font-black text-white">
          {year}
        </span>
        <span className="ml-6 inline-block [font-size:_clamp(0.875rem,3vw,1.25rem)] text-light">{technologies}</span>
        <p className="mt-6">{describing}</p>
      </div>
    </article>
  );
};
