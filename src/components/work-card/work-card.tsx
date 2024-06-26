import Image from "next/image";

import type { Work } from "@/shared/interfaces/work";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export const WorkCard = ({ imageSrc, alt, href, nameOfWork, year, technologies, describing }: Work): JSX.Element => {
  return (
    <article className="pt-6 pb-8 flex flex-col lg:grid lg:grid-cols-10 gap-5 border-b border-gray-300">
      <a
        href={href}
        rel="noopener noreferrer"
        className="block aspect-[246px/180px] col-start-1 col-span-3 rounded-md h-fit overflow-hidden border border-light bg-gray-100"
      >
        <Image src={imageSrc} alt={alt} />
      </a>
      <div className="col-start-4 col-span-6">
        <h3 className="mb-4 font-semibold text-[clamp(1.5rem,5vw,1.875rem)]">
          <a href={href} rel="noopener noreferrer" className="flex items-center gap-2">
            <FontAwesomeIcon className="w-[clamp(1.3rem,5vw,1.5rem)]" icon={faLink} />
            {nameOfWork}
          </a>
        </h3>
        <span className="inline-block px-[10px] py-[2px] text-[clamp(0.875rem,3vw,1.25rem)] bg-[#142850] rounded-full text-center font-black text-white">
          {year}
        </span>
        <span className="ml-6 inline-block text-[clamp(0.875rem,3vw,1.25rem)] text-light">{technologies}</span>
        <p className="mt-6">{describing}</p>
      </div>
    </article>
  );
};
