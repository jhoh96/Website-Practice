import { React } from "react";
import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  HStack,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import * as Scroll from "react-scroll";

import "./componentStyle.css";

const Link = Scroll.Link;

export default function Nav() {
  //ts state
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg={useColorModeValue("red.400", "gray.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        {/* 
          @J Updated Links array to add more pages/links to navbar
          */}
        <HStack as={"nav"} spacing={55} display={{ base: "none", md: "flex" }}>
          {/* This is for Default Links (Chakra UI provided) */}
          {/* {Links.map((link) => (
              <Link key={link}>{link}</Link>
            ))} */}

          <Button
            colorScheme={useColorModeValue("red.500", "gray")}
            size="lg"
            variant="link"
          >
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              {" "}
              Home{" "}
            </Link>
          </Button>
          <Button
            colorScheme={useColorModeValue("red.500", "gray")}
            size="lg"
            variant="link"
          >
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              {" "}
              About{" "}
            </Link>
          </Button>
          <Button
            colorScheme={useColorModeValue("red.500", "gray")}
            size="lg"
            variant="link"
          >
            <Link
              activeClass="active"
              to="blog"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              {" "}
              Projects{" "}
            </Link>
          </Button>
          <Button
            colorScheme={useColorModeValue("red.500", "gray")}
            size="lg"
            variant="link"
          >
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              {" "}
              Contact{" "}
            </Link>
          </Button>
        </HStack>
        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={20}>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <SunIcon /> : <MoonIcon />}
            </Button>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
}
