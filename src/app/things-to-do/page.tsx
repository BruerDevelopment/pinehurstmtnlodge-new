import ThingsToDoIndex from "@/components/articles/ThingsToDoIndex";
import { pageMetadata } from "@/configs/metadata";

export const metadata = pageMetadata({
  title: "Things to Do",
  description:
    "Hikes, fishing spots, local dining, and history around Rollinsville, Colorado, from the Pinehurst Mtn Lodge team.",
  path: "/things-to-do",
  cover: "area_guide",
});

export default function ThingsToDoPage() {
  return <ThingsToDoIndex />;
}
