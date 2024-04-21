import type { Post } from "@/shared/interfaces/post";
import { PrevPostCard } from "@/components/prev-post-card/prev-post-card";

interface Props {
  postsList: Post[];
}

export const Posts = ({ postsList }: Props): JSX.Element => {
  const latestPosts = postsList.slice(-2);

  return (
    <>
      {latestPosts.map(({ id, ...postsProps }) => (
        <article key={id} className="py-6 px-5 flex-[50%] flex flex-col bg-white shadow rounded text-dark">
          <PrevPostCard id={id} length={100} {...postsProps} />
        </article>
      ))}
    </>
  );
};
