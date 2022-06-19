import React from "react";
import {
  Container,
  Box,
  Grid,
  GridItem,
  // useColorModeValue,
  // Image,
  // Button,
  // IconButton,
  useColorModeValue,
  Square,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import TextAnimation from '../components/TextAnimation.tsx' 
import Lottie from "react-lottie";
import animation from "../assets/animationOne.json";

import "./style.css";

// const fullPage = "calc(100vh)"; // Jank code for full page (fix later)

export default function Header() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    /**
     *      C O L
     * ROW
     * ROW
     * ROW
     *
     *
     */

    <Container
      bg={useColorModeValue("red.400", "gray.900")}
      maxW={"10xl"}
      p="12"
      className="main-box"
    >
      <Flex className="intro-grid">
        <Flex className="image-grid">
          <div className="image-icon">
            <Lottie options={defaultOptions} height={550} width={550} />
          </div>
        </Flex>
        <Spacer />
        <Flex
          className="intro-box"
          color={useColorModeValue("white.400", "gray.100")}
          p="1"
        >
          <TextAnimation/>
        </Flex>
      </Flex>
    </Container>
  );
}
