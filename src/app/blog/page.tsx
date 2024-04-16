import { AllPosts } from "@/components/all-posts/all-posts";
import { postsList } from "@/components/posts/posts-list";

export default function Blog() {
  return (
    <section className="content-container pt-20 lg:pt-[160px] tracking-wide">
      <h1 className="lg:px-5 text-dark [font-size:_clamp(1.2rem,5vw,3rem)] font-bold">Blog</h1>

      <div className="lg:mb-14 lg:mt-6">
        <AllPosts postsList={postsList} />
      </div>
    </section>
  );
}
