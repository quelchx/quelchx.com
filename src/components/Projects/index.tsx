import {
  chakra,
  useColorModeValue,
  Box,
  Flex,
  SimpleGrid,
  Container,
} from "@chakra-ui/react";

import data from "../../constants";
import { ProjectCard } from "./ProjectCard";

export default function PersonalProjects() {
  return (
    <Flex
      textAlign={"center"}
      pt={10}
      justifyContent={"center"}
      direction={"column"}
      width={"full"}
    >
      <Box width={{ base: "full", sm: "lg", lg: "xl" }} margin={"auto"}>
        <chakra.h3
          fontFamily={"Work Sans"}
          fontWeight={"bold"}
          fontSize={20}
          textTransform={"uppercase"}
          color={"blue.400"}
        >
          My Creations
        </chakra.h3>
        <chakra.h1
          py={5}
          fontSize={36}
          fontFamily={"Work Sans"}
          fontWeight={"bold"}
          color={useColorModeValue("gray.700", "gray.50")}
        >
          Personal Projects Currently in Production
        </chakra.h1>
        <chakra.h2
          margin={"auto"}
          width={"70%"}
          fontFamily={"Inter"}
          fontWeight={"medium"}
          color={useColorModeValue("gray.500", "gray.400")}
        >
          With over{" "}
          <chakra.strong color={useColorModeValue("gray.700", "gray.50")}>
            7500+
          </chakra.strong>{" "}
          downloads among my projects, check out what the buzz is about.
        </chakra.h2>
      </Box>
      <div className="md:px-16 px-4 flex items-center">
        <SimpleGrid
          columns={{ base: 1, xl: 2 }}
          spacing={"4"}
          mt={16}
          mx={"auto"}
        >
          {data.projects.map((cardInfo, index) => (
            <ProjectCard delay={index * 250} {...cardInfo} key={index} />
          ))}
        </SimpleGrid>
      </div>
    </Flex>
  );
}
