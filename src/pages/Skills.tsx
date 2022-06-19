import React from "react";
import TimeLine from "../components/TimeLine.tsx";
import Lottie from "react-lottie";
import animation from "../assets/animationTwo.json";
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

export default function Skills() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <div className='timeline-box'>
        <TimeLine />
        <div className="skills-animation">
        </div>
      </div>
    </div>
  );
}
