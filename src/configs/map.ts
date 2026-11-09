// Points converted from public/lodge-map.kmz. Coordinates are [lat, lng].
export type MapPoint = {
  name: string;
  position: [number, number];
  icon: "lodge" | "resort" | "hiking";
};

export const mapCenter: [number, number] = [39.9176458, -105.4998844];
export const mapZoom = 10;

export const mapPoints: MapPoint[] = [
  { name: "Pinehurst Lodge", position: [39.9176458, -105.4998844], icon: "lodge" },
  { name: "Eldora Mountain", position: [39.9372203, -105.5826786], icon: "resort" },
  { name: "Arapahoe Basin", position: [39.634108, -105.8714672], icon: "resort" },
  { name: "Winter Park Resort", position: [39.8627761, -105.7787396], icon: "resort" },
  { name: "Keystone Resort", position: [39.5816989, -105.9436688], icon: "resort" },
  { name: "Copper Mountain", position: [39.4790136, -106.1612906], icon: "resort" },
  { name: "Breckenridge Ski Resort", position: [39.4782643, -106.0723156], icon: "resort" },
  { name: "Vail Ski Resort", position: [39.6061444, -106.3549717], icon: "resort" },
  { name: "Beaver Creek Resort", position: [39.6016505, -106.5316112], icon: "resort" },
  { name: "Steamboat Ski Resort", position: [40.4537983, -106.7708804], icon: "resort" },
  { name: "Aspen Snowmass Ski Resort", position: [39.1895221, -106.9497086], icon: "resort" },
  { name: "Crested Butte Mountain Resort", position: [38.8991036, -106.9657648], icon: "resort" },
  { name: "James Peak Wilderness", position: [39.8717673, -105.6963974], icon: "hiking" },
];
