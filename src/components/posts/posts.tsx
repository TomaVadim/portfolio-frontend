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
        <article key={id} className="py-6 px-5 bg-white shadow rounded text-dark">
          <PostCard id={id} {...postsProps} />
        </article>
      ))}
    </>
  );
};
