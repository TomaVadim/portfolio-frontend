import type { Post } from "@/shared/interfaces/post";
import { FullPostCard } from "@/components/full-post-card/full-post-card";

interface Props {
  postsList: Post[];
}

export const AllPosts = ({ postsList }: Props): JSX.Element => {
  return (
    <>
      {postsList.map(({ id, ...postsProps }) => (
        <article key={id} className="py-6 lg:px-5 bg-white text-dark border-b">
          <FullPostCard id={id} {...postsProps} />
        </article>
      ))}
    </>
  );
};
