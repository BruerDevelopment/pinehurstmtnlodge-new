import type { Metadata } from "next";
import AreaMap from "@/components/sections/AreaMap";
import { absoluteUrl } from "@/configs/site";

// Legacy map URL. The map also appears on /things-to-do.
export const metadata: Metadata = {
  title: "Area Map",
  description: "Interactive map of Rollinsville and the ski resorts and lodge near Pinehurst Mtn Lodge.",
  alternates: { canonical: absoluteUrl("/area-guide/map") },
};

export default function AreaGuideMapPage() {
  return (
    <main className="flex-1 pt-8">
      <AreaMap />
    </main>
  );
}
