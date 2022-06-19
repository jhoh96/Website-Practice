import React from "react";
import { motion } from "framer-motion";
import { scaleQuantize } from "@visx/scale";
import { Mercator, Graticule } from "@visx/geo";
import * as topojson from "topojson-client";
import topology from "./world-topo.json";
import { Grid, GridItem, Box, useColorModeValue } from "@chakra-ui/react";
import PopOver from "../components/PopOver.tsx";

// @J Background-Colour Here
export const background = "#013a63";

export type GeoMercatorProps = {
  width: number;
  height: number;
  events?: boolean;
};

interface FeatureShape {
  type: "Feature";
  id: string;
  geometry: { coordinates: [number, number][][]; type: "Polygon" };
  properties: { name: string };
}

// @ts-ignore
const world = topojson.feature(topology, topology.objects.units) as {
  type: "FeatureCollection";
  features: FeatureShape[];
};

const color = scaleQuantize({
  domain: [
    Math.min(...world.features.map((f) => f.geometry.coordinates.length)),
    Math.max(...world.features.map((f) => f.geometry.coordinates.length)),
  ],
  // @J Geo Colours
  range: [
    "#ffb01d",
    "#ffa020",
    "#ff9221",
    "#ff8424",
    "#ff7425",
    "#fc5e2f",
    "#f94b3a",
    "#f63a48",
  ],
});
// Event = true for clicks
// eslint-disable-next-line import/no-anonymous-default-export
export default ({ width, height }: GeoMercatorProps) => {
  const centerX = width / 2;
  const centerY = height / 2;
  const scale = (width / 630) * 100;

  return width < 10 ? null : (
    <svg width={width} height={height * 0.95}>
      <Box
        x={0}
        y={0}
        width={width}
        height={height}
        fill={useColorModeValue("white.400", "gray.900")}
        rx={5}
      />
      <Mercator<FeatureShape>
        data={world.features}
        scale={scale}
        translate={[centerX, centerY + 50]}
      >
        {(mercator) => (
          <g>
            <Graticule
              graticule={(g) => mercator.path(g) || ""}
              stroke={"rgba(33,33,33,0.05)"}
            />
            {mercator.features.map(({ feature, path }, i) => (
              <path
                key={`map-feature-${i}`}
                d={path || ""}
                // fill={color(feature.geometry.coordinates.length)}
                fill={color(useColorModeValue("white.400", "gray.900"))}
                // stroke={useColorModeValue("white.400", "gray.900")}
                // strokeWidth={0.5}
                onClick={() => {
                  if (events)
                    // @J CLICK EVENT HERE!
                    console.log("EVENT CLICKED EVENT CLICKED");
                  alert(`Clicked: ${feature.properties.name} (${feature.id})`);
                }}
              />
            ))}
          </g>
        )}
      </Mercator>
      <PopOver />

    </svg>
  );
};
