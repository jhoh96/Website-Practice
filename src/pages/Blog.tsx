import React from "react";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";
import {
  FaGraduationCap,
  FaRegCircle,
  FaSchool,
  FaLanguage,
  FaPlane,
  FaLaptopCode,
} from "react-icons/fa";
import { motion } from "framer-motion";
import imageOne from "../assets/Colors.avif";
import imageTwo from "../assets/UQ.avif";
import imageThree from "../assets/ResearchPic.jpg";

interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps["marginTop"];
}

const colors = new Map<string, string>([
  ["React", "teal"],
  ["TypeScript", "blue"],
  ["Java", "orange"],
  ["Python", "yellow"],
  ["JavaScript", "red"],
  ["UX", "purple"],
  ["Research", "green"],
]);

const FadeInWhenVisible = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={{
        visible: { x: 0 },
        hidden: { x: -1000 },
      }}
    >
      {children}
    </motion.div>
  );
};

const FadeUpWhenVisible = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={{
        visible: { y: 0 },
        hidden: { y: 300 },
      }}
    >
      {children}
    </motion.div>
  );
};

// Customize Blog Tags - revised from original to display colours based on tag category
const BlogTags: React.FC<IBlogTags> = (props) => {
  return (
    <HStack spacing={3} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <motion.div whileHover={{ scale: 1.2 }}>
            <Tag
              size={"md"}
              variant="solid"
              colorScheme={getColors(tag)}
              key={tag}
            >
              {tag}
            </Tag>
          </motion.div>
        );
      })}
    </HStack>
  );
};

const getColors = (tag) => {
  let color = colors.get(tag);
  console.log(color);
  return color;
};

const ArticleList = () => {
  return (
    <Container maxW={"7xl"} p="12" className="blog">
      <FadeInWhenVisible>
        <motion.div whileHover={{ scale: 1.1 }}>
          <Heading as="h1">University & Personal Projects</Heading>
        </motion.div>
        <Box
          marginTop={{ base: "1", sm: "5" }}
          display="flex"
          flexDirection={{ base: "column", sm: "row" }}
          justifyContent="space-between"
        >
          <Box
            display="flex"
            flex="1"
            marginRight="3"
            position="relative"
            alignItems="center"
          >
            <Box
              width={{ base: "100%", sm: "85%" }}
              zIndex="2"
              marginLeft={{ base: "0", sm: "5%" }}
              marginTop="5%"
            >
              <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Image
                    borderRadius="lg"
                    src={
                      "https://images.unsplash.com/photo-1537884944318-390069bb8665?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    }
                    alt="Resume website"
                    objectFit="contain"
                  />
                </motion.div>
              </Link>
            </Box>
            <Box zIndex="1" width="100%" position="absolute" height="100%">
              <Box
                bgGradient={useColorModeValue(
                  "radial(red.600 2px, transparent 1px)",
                  "radial(red.200 2px, transparent 1px)"
                )}
                backgroundSize="20px 20px"
                opacity="0.7"
                height="105%"
              />
            </Box>
          </Box>
          <Box
            display="flex"
            flex="1"
            flexDirection="column"
            justifyContent="center"
            marginTop={{ base: "3", sm: "0" }}
          >
            <BlogTags tags={["React", "TypeScript", "JavaScript", "Resume"]} />
            <Heading marginTop="1">
              <Link
                textDecoration="none"
                _hover={{ textDecoration: "none" }}
                href="https://www.github.com/jhoh96"
                target="_blank"
              >
                This Website
              </Link>
            </Heading>
            <Text
              as="p"
              marginTop="2"
              color={useColorModeValue("gray.700", "gray.200")}
              fontSize="lg"
            >
              Simple, single-paged create-react-app using typescript. Here I've
              referenced and utilized many React libraries for simple UI
              (Chakra), data visualization (visx), animation (framer), form
              handling (mailjs), and more. It is a more programming-oriented
              resume for those who are interested.
            </Text>
          </Box>
        </Box>
      </FadeInWhenVisible>
      <FadeUpWhenVisible>
        <Heading as="h1" marginTop="10">
          &nbsp; &nbsp;
        </Heading>
        <Divider marginTop="5" />
        <Wrap spacing="30px" marginTop="5">
          <WrapItem width={{ base: "100%", sm: "45%", md: "45%", lg: "30%" }}>
            <Box w="100%">
              <Box borderRadius="lg" overflow="hidden">
                <Link
                  textDecoration="none"
                  _hover={{ textDecoration: "none" }}
                  href="https://github.com/jhoh96/Draw-practice"
                  target="_blank"
                >
                  <Image
                    transform="scale(1.0)"
                    src={imageOne}
                    alt="Visx Line Visualisation"
                    objectFit="contain"
                    width="100%"
                    transition="0.3s ease-in-out"
                    _hover={{
                      transform: "scale(1.1)",
                    }}
                  />
                </Link>
              </Box>
              <BlogTags tags={["TypeScript", "JavaScript"]} marginTop="3" />
              <Heading fontSize="xl" marginTop="2">
                <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                  Line Visualisation/Draw Practice using @visx
                </Link>
              </Heading>
              <Text as="p" fontSize="md" marginTop="2">
                Collecting mouse movement & events to map them onto a canvas. A
                paint application sample/mockup.
              </Text>
            </Box>
          </WrapItem>
          <WrapItem width={{ base: "100%", sm: "45%", md: "45%", lg: "30%" }}>
            <Box w="100%">
              <Box borderRadius="lg" overflow="hidden">
                <Link
                  textDecoration="none"
                  _hover={{ textDecoration: "none" }}
                  href="https://github.com/Joh1996/Queensland-Alliance-for-Environmental-Health-Sciences---Final-Report"
                  target="_blank"
                >
                  <Image
                    transform="scale(1.0)"
                    src={imageTwo}
                    alt="UQ Capstone Project"
                    objectFit="contain"
                    width="100%"
                    transition="0.3s ease-in-out"
                    _hover={{
                      transform: "scale(1.1)",
                    }}
                  />
                </Link>
              </Box>
              <BlogTags
                tags={["React", "JavaScript", "UX", "Python", "Research",]}
                marginTop="3"
              />
              <Heading fontSize="xl" marginTop="2">
                <Link
                  textDecoration="none"
                  _hover={{ textDecoration: "none" }}
                  href="https://github.com/jhoh96/Human-Factors-Research"
                  target="_blank"
                >
                  University Capstone Project
                </Link>
              </Heading>
              <Text as="p" fontSize="md" marginTop="2">
                Queensland Alliance for Environmental Health Sciences Web
                Application Project. Code cannot be shared per University
                Guidelines. However, a full report can be found on github.
              </Text>
            </Box>
          </WrapItem>
          <WrapItem width={{ base: "100%", sm: "45%", md: "45%", lg: "30%" }}>
            <Box w="100%">
              <Box borderRadius="lg" overflow="hidden">
                <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                  <Image
                    transform="scale(1.0)"
                    src={imageThree}
                    alt="Final Project"
                    objectFit="contain"
                    width="100%"
                    transition="0.3s ease-in-out"
                    _hover={{
                      transform: "scale(1.1)",
                    }}
                  />
                </Link>
              </Box>
              <BlogTags tags={["UX", "Research"]} marginTop="3" />
              <Heading fontSize="xl" marginTop="2">
                <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                  Human Factors Research
                </Link>
              </Heading>
              <Text as="p" fontSize="md" marginTop="2">
                Observational Study of Human Factors' affect on system designs.
                Applicable on macro/micro scale system design.
              </Text>
            </Box>
          </WrapItem>
        </Wrap>
        <Divider marginTop="5" />
      </FadeUpWhenVisible>
    </Container>
  );
};

export default ArticleList;
