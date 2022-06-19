import React from "react";
import WorldMap from "../components/WorldMap.tsx";
import { Grid, GridItem, Flex, useColorModeValue } from "@chakra-ui/react";
import * as Responsive from "@visx/responsive";
import PopOver from "../components/PopOver.tsx";

import "./style.css";

const fullPage = "calc(100vh)";

/**
 * World Map Page that displays (with popovers) where I was at the time
 */

export default function About() {
  return (
    <Flex bg={useColorModeValue("white.400", "gray.900")}>
      <Grid
        className="map-header"
        h={fullPage}
        templateRows="repeat(6, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={15}
      >
        <GridItem
          className="top-grid"
          rowSpan={4}
          colSpan={4}
          bg={useColorModeValue("white.400", "gray.900")}
          w="100%"
          h="100%"
        >
          {/* <span className="us-popover">
            <PopOver />
          </span> */}
          <Responsive.ParentSize>
            {({ width, height, events }) => (
              <WorldMap width={width} height={height * 1.5} />
            )}
          </Responsive.ParentSize>
        </GridItem>
      </Grid>
    </Flex>
  );
}
