import React from "react";
import { motion } from "framer-motion";
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
  useColorModeValue,
  Flex,
  Divider,
} from "@chakra-ui/react";
import {
  FaGraduationCap,
  FaRegCircle,
  FaSchool,
  FaLanguage,
  FaPlane,
  FaLaptopCode,
} from "react-icons/fa";

// Array of features/content I want to display
// Fill with content I need to use
const timeLineArray = [
  {
    icon: FaRegCircle,
    title: "Jun/2020 - Present",
    text: "Currently looking for software development job opportunities in Korea, Australia, and the USA.",
    height: "80%",
  },
  {
    icon: FaRegCircle,
    title: "Sep/2020 - Jun/2022",
    text: "Completed military service at the Republic of Korea Air Force.",
    height: "80%",
  },
  {
    icon: FaRegCircle,
    title: "Mar/2015 - Jul/2019",
    text: "Moved to Brisbane, Australia to complete my University Program at The University of Queensland",
    height: "80%",
  },
  {
    icon: FaRegCircle,
    title: "May/2014",
    text: "Moved to South Korea after graduating high school in the United States of America",
    height: "80%",
  },
];

const featureArray = [
  {
    icon: FaGraduationCap,
    title:
      "Graduated from the University of Queensland Australia Class of 2019",
    text: "Completed a BSc majoring in Computer Science & Psychology (dual).",
  },
  {
    icon: FaSchool,
    title: "Transfer from the University of New South Wales Australia in 2015",
    text: "Started a dual degree program for Computer Science and Psychological Sciences.",
  },
  {
    icon: FaPlane,
    title: "Served in the Republic of Korea Air Force ",
    text: "Served as an Information Systems Operator/Manager for the South Korean Air Force.",
  },
  {
    icon: FaLanguage,
    title: "Freelance Translator",
    text: "Worked as a freelance translator/transcriber for multiple clients in Korea. Remote work from Australia.",
  },
];

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

export default function GridListWithHeading() {
  var changeColor = useColorModeValue("red.400", "gray.100");
  var boxColor = useColorModeValue("red.100", "gray.700");
  var textColor = useColorModeValue("gray.900", "gray.300");

  return (
    <Box p={4} className="timeline-box">
      <Divider marginTop="10" variant='dashed'/>
      {/* TOP Heading Area goes here */}
      <Stack spacing={4} as={Container} maxW={"6xl"} textAlign={"center"}>
        <FadeInWhenVisible>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Heading fontSize={"6xl"}>About Me</Heading>
          </motion.div>
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <Text color={"gray.600"} fontSize={"2xl"}>
            Experiences, Education, and more...
          </Text>
        </FadeInWhenVisible>
      </Stack>

      {/* Timeline Grid goes here */}
      <FadeInWhenVisible>
        <Container maxW={"6xl"} mt={10}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            {/* <SimpleGrid columns={2} spacing={10}> */}
            <Flex direction="column">
              {/* 
              Time Line
            */}
              {timeLineArray.map((timeStone, index) => (
                // Align Icons at top
                <motion.div
                  key={index}
                  whileTap={{ scale: 1.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <HStack
                    p={6}
                    key={index}
                    align={"top"}
                    background={boxColor}
                    margin="10px"
                    rounded="lg"
                  >
                    <Box color={changeColor} px={2}>
                      <Icon as={timeStone.icon} w={6} h={6} />
                    </Box>
                    <VStack align={"start"}>
                      <Text fontWeight={700}>{timeStone.title}</Text>
                      <Text color={textColor}>{timeStone.text}</Text>
                    </VStack>
                  </HStack>
                </motion.div>
              ))}
            </Flex>
            <Flex direction="column">
              {/* 
              Key Facts
            */}
              {featureArray.map((feature, index) => (
                <motion.div
                  whileTap={{ scale: 1.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <HStack
                    p={6}
                    key={index}
                    align={"top"}
                    background={boxColor}
                    margin="10px"
                    rounded="lg"
                  >
                    <Box color={changeColor} px={2}>
                      <Icon as={feature.icon} w={6} h={6} />
                    </Box>
                    <VStack align={"start"}>
                      <Text fontWeight={700}>{feature.title}</Text>
                      <Text color={textColor}>{feature.text}</Text>
                    </VStack>
                  </HStack>
                </motion.div>
              ))}
            </Flex>
          </SimpleGrid>
        </Container>
      </FadeInWhenVisible>
      <Divider marginTop="10" variant='dashed'/>
      
    </Box>
  );
}
