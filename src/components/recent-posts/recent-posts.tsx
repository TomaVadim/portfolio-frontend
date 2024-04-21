import Link from "next/link";

import { useTranslations } from "next-intl";

import { Posts } from "@/components/posts/posts";
import { generatePosts } from "@/components/posts/posts-list";

export const RecentPosts = (): JSX.Element => {
  const t = useTranslations("posts");
  const postsList = generatePosts();

  return (
    <section className="bg-secondary/10 tracking-wide">
      <div className="pb-8 content-container">
        <div className="py-6 w-full flex justify-between items-center">
          <h2 className="text-[clamp(1.2rem,3vw,1.5rem)] text-dark">{t("latest-updates-title")}</h2>
          <Link href="/blog" className="text-secondary hover:text-primary transition-colors duration-200">
            {t("button-view-all")}
          </Link>
        </div>

        <section className="flex flex-col lg:flex-row gap-5">
          <Posts postsList={postsList} />
        </section>
      </div>
    </section>
  );
};
