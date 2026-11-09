"use client";

import { useEffect, useRef, useState } from "react";
import type { LatLng, Map as LeafletMap, Point } from "leaflet";
import "leaflet/dist/leaflet.css";
import Section from "@/components/ui/Section";
import { mapCenter, mapPoints, mapZoom } from "@/configs/map";
import Link from "next/link";
import { withBase } from "@/configs/site";
import ArticleCard from "@/components/articles/ArticleCard";
import type { ArticleSummary } from "@/lib/article-types";

// Leaflet reads `window` when its module loads, so it is imported only in the browser (inside the effect).
// Only type imports stay at the top of the file.
type Leaflet = typeof import("leaflet");

type Corner = "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
type Hint = { count: number; arrow: string };
type Hints = Record<Corner, Hint | null>;

// Arrows indexed by compass direction, counterclockwise from east (0°).
const ARROWS = ["→", "↗", "↑", "↖", "←", "↙", "↓", "↘"];

// Points an arrow from the view center toward the average position of the given resorts.
function arrowToward(points: typeof mapPoints, center: LatLng): string {
  const avgLat = points.reduce((sum, p) => sum + p.position[0], 0) / points.length;
  const avgLng = points.reduce((sum, p) => sum + p.position[1], 0) / points.length;
  // Scale longitude by cos(latitude) so the angle matches real-world distance.
  const dx = (avgLng - center.lng) * Math.cos((center.lat * Math.PI) / 180);
  const dy = avgLat - center.lat;
  const degrees = (Math.atan2(dy, dx) * 180) / Math.PI;
  return ARROWS[(Math.round(degrees / 45) + 8) % 8];
}

// Each off-screen resort counts toward the map corner nearest to it, measured in screen pixels.
function getHints(L: Leaflet, map: LeafletMap): Hints {
  const bounds = map.getBounds();
  const center = map.getCenter();
  const size = map.getSize();
  const hidden = mapPoints.filter((p) => p.icon === "resort" && !bounds.contains(p.position));

  const corners: Record<Corner, Point> = {
    topLeft: L.point(0, 0),
    topRight: L.point(size.x, 0),
    bottomLeft: L.point(0, size.y),
    bottomRight: L.point(size.x, size.y),
  };

  const groups: Record<Corner, typeof mapPoints> = { topLeft: [], topRight: [], bottomLeft: [], bottomRight: [] };
  for (const point of hidden) {
    const pixel = map.latLngToContainerPoint(point.position);
    let nearest: Corner = "topLeft";
    for (const corner of Object.keys(corners) as Corner[]) {
      if (pixel.distanceTo(corners[corner]) < pixel.distanceTo(corners[nearest])) nearest = corner;
    }
    groups[nearest].push(point);
  }

  const hint = (points: typeof mapPoints): Hint | null =>
    points.length ? { count: points.length, arrow: arrowToward(points, center) } : null;

  return {
    topLeft: hint(groups.topLeft),
    topRight: hint(groups.topRight),
    bottomLeft: hint(groups.bottomLeft),
    bottomRight: hint(groups.bottomRight),
  };
}

function hintText({ count, arrow }: Hint) {
  return `${arrow} ${count} more ski ${count === 1 ? "resort" : "resorts"} this way`;
}

// Corner placement. The bottom-right badge sits above the zoom controls and the attribution.
const badgePosition: Record<Corner, string> = {
  topLeft: "left-3 top-3",
  topRight: "right-3 top-3",
  bottomLeft: "bottom-3 left-3",
  bottomRight: "bottom-24 right-3",
};

// Optional article cards shown below the map (used on the home page).
export default function AreaMap({ articles = [] }: { articles?: ArticleSummary[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [hints, setHints] = useState<Hints>({ topLeft: null, topRight: null, bottomLeft: null, bottomRight: null });

  useEffect(() => {
    let map: LeafletMap | undefined;
    let cancelled = false;

    import("leaflet").then(({ default: L }) => {
      if (cancelled || !ref.current) return;

      const icons = {
        lodge: L.icon({ iconUrl: withBase("/map/icon-1.png"), iconSize: [32, 32], iconAnchor: [16, 32], popupAnchor: [0, -32] }),
        resort: L.icon({ iconUrl: withBase("/map/icon-2.png"), iconSize: [32, 32], iconAnchor: [16, 32], popupAnchor: [0, -32] }),
      };

      const m = L.map(ref.current, { center: mapCenter, zoom: mapZoom, scrollWheelZoom: false, zoomControl: false });
      map = m;
      L.control.zoom({ position: "bottomright" }).addTo(m);

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(m);

      for (const point of mapPoints) {
        L.marker(point.position, { icon: icons[point.icon], title: point.name })
          .bindPopup(point.name)
          .addTo(m);
      }

      const updateHints = () => setHints(getHints(L, m));
      m.on("moveend", updateHints);
      updateHints();
    });

    return () => {
      cancelled = true;
      map?.remove();
    };
  }, []);

  return (
    <Section id="map" eyebrow="Explore" title="Around the Lodge">
      <div className="relative overflow-hidden rounded-2xl border border-line bg-surface">
        <div ref={ref} className="h-[28rem] w-full md:h-[36rem]" role="region" aria-label="Map of the area around Pinehurst Mountain Lodge" />
        {(Object.keys(hints) as Corner[]).map((corner) => {
          const hint = hints[corner];
          return hint ? (
            <p
              key={corner}
              className={`pointer-events-none absolute z-[1000] rounded-full bg-surface px-3 py-1 text-sm font-medium text-ink shadow-md ${badgePosition[corner]}`}
            >
              {hintText(hint)}
            </p>
          ) : null;
        })}
      </div>

      {articles.length > 0 && (
        <div className="mt-12">
          <h3 className="text-2xl font-semibold tracking-tight text-ink">Local guides</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.href} article={article} />
            ))}
          </div>
          <Link href="/things-to-do" className="mt-8 inline-block font-medium text-accent underline underline-offset-4">
            See all guides
          </Link>
        </div>
      )}
    </Section>
  );
}
