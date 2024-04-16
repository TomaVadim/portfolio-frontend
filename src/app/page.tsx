import { RecentPosts } from "@/components/recent-posts/recent-posts";
import { Introduce } from "@/components/introduce/introduce";
import { worksList } from "@/components/works/works-list";
import { PreviewWorks } from "@/components/preview-works/preview-works";

export default function Home() {
  return (
    <>
      <Introduce />
      <RecentPosts />
      <PreviewWorks worksList={worksList} />
    </>
  );
}
