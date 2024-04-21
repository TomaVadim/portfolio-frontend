import { Metadata } from "next";

import { AllPosts } from "@/components/all-posts/all-posts";
import { generatePosts } from "@/components/posts/posts-list";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Portfolio | Blog",
};

export default function Blog() {
  const t = useTranslations("header");
  const postsList = generatePosts();

  return (
    <section className="container px-4 max-w-[950px] pt-20 lg:pt-[160px] tracking-wide">
      <h1 className="lg:px-5 text-dark text-[clamp(1.2rem,5vw,3rem)] font-bold">{t("blog")}</h1>

      <div className="lg:mb-14 lg:mt-6">
        <AllPosts postsList={postsList} />
      </div>
    </section>
  );
}
