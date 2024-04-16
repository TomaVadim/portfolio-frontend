import { Posts } from "@/components/posts/posts";
import { postsList } from "@/components/posts/posts-list";
import Link from "next/link";

export const RecentPosts = (): JSX.Element => {
  return (
    <section className="bg-secondary/10 tracking-wide">
      <div className="pb-8 content-container">
        <div className="py-6 w-full flex justify-between">
          <h6 className="text-[22px] text-dark">Recent posts</h6>
          <Link href="/blog" className="text-secondary hover:text-primary transition-colors duration-200">
            View all
          </Link>
        </div>

        <section className="flex flex-col lg:flex-row gap-5">
          <Posts postsList={postsList} />
        </section>
      </div>
    </section>
  );
};
