import type { Metadata } from "next";
import ThingsToDoIndex from "@/components/articles/ThingsToDoIndex";
import { absoluteUrl } from "@/configs/site";

export const metadata: Metadata = {
  title: "Things to Do",
  description:
    "Hikes, fishing spots, local dining, and history around Rollinsville, Colorado, from the Pinehurst Mtn Lodge team.",
  alternates: { canonical: absoluteUrl("/things-to-do") },
};

export default function ThingsToDoPage() {
  return <ThingsToDoIndex />;
}
