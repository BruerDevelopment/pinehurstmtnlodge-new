import ThingsToDoIndex from "@/components/articles/ThingsToDoIndex";
import { pageMetadata } from "@/configs/metadata";

// Legacy URL. Same content as /things-to-do, so the canonical points there.
export const metadata = pageMetadata({
  title: "Local Area Guide Articles",
  description:
    "Articles about hikes, fishing, dining, and history around Rollinsville, Colorado, from the Pinehurst Mtn Lodge team.",
  path: "/things-to-do",
  cover: "area_guide",
});

export default function AreaGuideArticlesPage() {
  return <ThingsToDoIndex />;
}
