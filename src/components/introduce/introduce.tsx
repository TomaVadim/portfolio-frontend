import Image from "next/image";

import { useTranslations } from "next-intl";

import myAvatar from "@/assets/images/my-avatar.jpeg";
import { ButtonLoadCV } from "@/components/button-load-cv/button-load-cv";

export const Introduce = (): JSX.Element => {
  const t = useTranslations("home");

  return (
    <section className="content-container pt-[120px] pb-[40px] lg:pt-[210px] lg:pb-[70px] tracking-wide flex flex-col-reverse lg:flex-row lg:gap-[115px] items-center">
      <article className="flex flex-col gap-8 items-center lg:items-stretch">
        <h1 className="font-bold text-dark [font-size:_clamp(1.5rem,5vw,3rem)] leading-tight text-center lg:text-start">
          {t("greeting")}
        </h1>
        <p className="text-dark text-center lg:text-start">{t("about-me")}</p>
        <ButtonLoadCV />
      </article>
      <div>
        <div className="rounded-full -translate-y-6 lg:-translate-y-12 shadow-md overflow-hidden w-[150px] h-[150px] lg:w-[243px] lg:h-[243px]">
          <div className="aspect-[4000px/6000px] bg-gray-200">
            <Image width={250} height={250} src={myAvatar} alt="Photo with me" />
          </div>
        </div>
      </div>
    </section>
  );
};
