import { geoEqualEarth, geoGraticule10, geoPath } from "d3-geo";
import type { FeatureCollection, Geometry } from "geojson";
import { feature } from "topojson-client";
import type { GeometryCollection, Topology } from "topojson-specification";
import worldData from "world-atlas/countries-110m.json";

type MapCopy = {
  ariaLabel: string;
  originLegend: string;
  marketLegend: string;
  ecuadorLabel: string;
  asiaLabel: string;
  marketLabel: string;
};

const WIDTH = 1120;
const HEIGHT = 570;

const originCountryIds = new Set(["218", "608", "116", "704", "418"]);
const marketCountryIds = new Set(["398", "860", "417", "762", "795"]);

const originPoints: [number, number][] = [
  [-78.1834, -1.8312],
  [121.774, 12.8797],
  [104.991, 12.5657],
  [108.2772, 14.0583],
  [102.4955, 19.8563],
  [108.3669, 22.817],
];

const marketPoints: [number, number][] = [
  [66.9237, 48.0196],
  [64.5853, 41.3775],
  [74.7661, 41.2044],
  [71.2761, 38.861],
  [59.5563, 38.9697],
];

export default function GlobalPresenceMap({ copy }: { copy: MapCopy }) {
  const topology = worldData as unknown as Topology<{ countries: GeometryCollection }>;
  const countries = feature(topology, topology.objects.countries) as FeatureCollection<Geometry>;
  const projection = geoEqualEarth().fitExtent(
    [
      [24, 20],
      [WIDTH - 24, HEIGHT - 58],
    ],
    { type: "Sphere" },
  );
  const path = geoPath(projection);

  return (
    <div className="overflow-hidden rounded-[2rem] border border-[#24336f]/10 bg-[#f5f6ef]">
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        role="img"
        aria-label={copy.ariaLabel}
        className="h-auto w-full"
      >
        <title>{copy.ariaLabel}</title>
        <path d={path({ type: "Sphere" }) || undefined} fill="#eef1e9" />
        <path
          d={path(geoGraticule10()) || undefined}
          fill="none"
          stroke="#24336f"
          strokeOpacity="0.08"
          strokeWidth="0.8"
        />

        <g>
          {countries.features.map((country) => {
            const id = String(country.id);
            const isOrigin = originCountryIds.has(id);
            const isMarket = marketCountryIds.has(id);
            return (
              <path
                key={id}
                d={path(country) || undefined}
                fill={isOrigin ? "#ead66a" : isMarket ? "#7f90c6" : "#dce3dc"}
                stroke="#ffffff"
                strokeWidth="0.8"
                className="transition-colors duration-300 hover:fill-[#cbd5cc]"
              />
            );
          })}
        </g>

        <g aria-hidden="true">
          {originPoints.map((coordinates, index) => (
            <MapPoint key={`origin-${index}`} projection={projection} coordinates={coordinates} color="#d6a900" />
          ))}
          {marketPoints.map((coordinates, index) => (
            <MapPoint key={`market-${index}`} projection={projection} coordinates={coordinates} color="#24338c" />
          ))}
        </g>

        <MapLabel projection={projection} coordinates={[-78.1834, -1.8312]} text={copy.ecuadorLabel} dx={-12} dy={-13} anchor="end" />
        <MapLabel projection={projection} coordinates={[108.8, 16.3]} text={copy.asiaLabel} dx={14} dy={25} anchor="start" />
        <MapLabel projection={projection} coordinates={[68.5, 43.5]} text={copy.marketLabel} dx={-10} dy={-18} anchor="end" />

        <g transform={`translate(32 ${HEIGHT - 30})`} aria-hidden="true">
          <circle cx="0" cy="0" r="5" fill="#d6a900" />
          <text x="13" y="4" fill="#465044" fontSize="12" fontWeight="650" className="map-legend-text">
            {copy.originLegend}
          </text>
          <circle cx="190" cy="0" r="5" fill="#24338c" />
          <text x="203" y="4" fill="#465044" fontSize="12" fontWeight="650" className="map-legend-text">
            {copy.marketLegend}
          </text>
        </g>
      </svg>
    </div>
  );
}

function MapPoint({
  projection,
  coordinates,
  color,
}: {
  projection: ReturnType<typeof geoEqualEarth>;
  coordinates: [number, number];
  color: string;
}) {
  const point = projection(coordinates);
  if (!point) return null;
  return (
    <g transform={`translate(${point[0]} ${point[1]})`}>
      <circle r="8" fill={color} fillOpacity="0.15" />
      <circle r="3.7" fill={color} stroke="#ffffff" strokeWidth="1.5" />
    </g>
  );
}

function MapLabel({
  projection,
  coordinates,
  text,
  dx,
  dy,
  anchor,
}: {
  projection: ReturnType<typeof geoEqualEarth>;
  coordinates: [number, number];
  text: string;
  dx: number;
  dy: number;
  anchor: "start" | "end";
}) {
  const point = projection(coordinates);
  if (!point) return null;
  return (
    <text
      x={point[0] + dx}
      y={point[1] + dy}
      textAnchor={anchor}
      fill="#18214f"
      stroke="#f5f6ef"
      strokeWidth="5"
      paintOrder="stroke"
      strokeLinejoin="round"
      fontSize="14"
      fontWeight="750"
      className="map-label-text"
    >
      {text}
    </text>
  );
}
