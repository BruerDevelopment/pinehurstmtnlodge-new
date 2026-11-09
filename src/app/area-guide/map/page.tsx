import AreaMap from "@/components/sections/AreaMap";
import { pageMetadata } from "@/configs/metadata";

// Legacy map URL. The map also appears on /things-to-do.
export const metadata = pageMetadata({
  title: "Area Map",
  description: "Interactive map of Rollinsville and the ski resorts and lodge near Pinehurst Mtn Lodge.",
  path: "/area-guide/map",
  cover: "area_guide",
});

export default function AreaGuideMapPage() {
  return (
    <main className="flex-1 pt-8">
      <AreaMap />
    </main>
  );
}
