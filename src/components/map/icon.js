import L from "leaflet";
import wybuch from "./wybuch.png";

const LeafIcon = L.Icon.extend({
  options: {
    iconSize: [100, 100],
    iconAnchor: [50, 50],
    tooltipAnchor: [0, 0],
  },
});

export const wybuchIcon = new LeafIcon({ iconUrl: wybuch });
