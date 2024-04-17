import type { Post } from "@/types/post";
import { Post as PostCard } from "@/components/post/post";

interface Props {
  postsList: Post[];
}

export const Posts = ({ postsList }: Props): JSX.Element => {
  const latestPosts = postsList.slice(-2);

  return (
    <>
      {latestPosts.map(({ id, ...postsProps }) => (
        <article key={id} className="py-6 px-5 flex-[50%] flex flex-col bg-white shadow rounded text-dark">
          <PostCard id={id} length={100} {...postsProps} />
        </article>
      ))}
    </>
  );
};
