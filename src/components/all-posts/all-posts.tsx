import type { Post } from "@/types/post";
import { Post as PostCard } from "@/components/post/post";

interface Props {
  postsList: Post[];
}

export const AllPosts = ({ postsList }: Props): JSX.Element => {
  return (
    <>
      {postsList.map(({ id, ...postsProps }) => (
        <article key={id} className="py-6 lg:px-5 bg-white text-dark border-b">
          <PostCard id={id} {...postsProps} />
        </article>
      ))}
    </>
  );
};
