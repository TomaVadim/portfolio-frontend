import Image from "next/image";

import type { Work } from "@/shared/interfaces/work";

export const WorkCard = ({ imageSrc, alt, nameOfWork, year, technologies, describing }: Work): JSX.Element => {
  return (
    <article className="pt-6 pb-8 flex flex-col lg:grid lg:grid-cols-10 gap-5 border-b border-gray-300">
      <div className="aspect-[246px/180px] col-start-1 col-span-3">
        <Image src={imageSrc} alt={alt} />
      </div>
      <div className="col-start-4 col-span-6">
        <h3 className="mb-4 font-semibold text-[clamp(1.5rem,5vw,1.875rem)]">{nameOfWork}</h3>
        <span className="inline-block px-[10px] py-[2px] text-[clamp(0.875rem,3vw,1.25rem)] bg-[#142850] rounded-full text-center font-black text-white">
          {year}
        </span>
        <span className="ml-6 inline-block text-[clamp(0.875rem,3vw,1.25rem)] text-light">{technologies}</span>
        <p className="mt-6">{describing}</p>
      </div>
    </article>
  );
};
