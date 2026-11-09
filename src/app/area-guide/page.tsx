import type { Metadata } from "next";
import ThingsToDoIndex from "@/components/articles/ThingsToDoIndex";
import { absoluteUrl } from "@/configs/site";

// Legacy URL. Same content as /things-to-do, so the canonical points there.
export const metadata: Metadata = {
  title: "Local Area Guide",
  description:
    "Hikes, fishing spots, local dining, and history around Rollinsville, Colorado, from the Pinehurst Mtn Lodge team.",
  alternates: { canonical: absoluteUrl("/things-to-do") },
};

export default function AreaGuidePage() {
  return <ThingsToDoIndex />;
}
