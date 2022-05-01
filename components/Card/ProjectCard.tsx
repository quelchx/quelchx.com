import {
  Box,
  VStack,
  Button,
  Flex,
  Divider,
  chakra,
  Grid,
  GridItem,
  Container,
} from "@chakra-ui/react";

import { FeatureProps, ProjectProps } from "../../interface";
import Redirect from "../Redirect/Redirect";

const Feature = ({ heading, text }: FeatureProps) => {
  return (
    <GridItem>
      <chakra.h3 fontSize="xl" pb={2} fontWeight="600">
        {heading}
      </chakra.h3>
      <chakra.p>{text}</chakra.p>
    </GridItem>
  );
};

const ProjectCard = ({ title, link, description, features }: ProjectProps) => {
  return (
    <chakra.div mx={6}>
      <Box as={Container} maxW="7xl" mt={14} p={4}>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(2, 1fr)",
          }}
          mx={6}
          gap={4}
        >
          <GridItem colSpan={1}>
            <VStack alignItems="flex-start" spacing="6px">
              <chakra.h2 fontSize="3xl" fontWeight="700">
                {title}
              </chakra.h2>
              <Button colorScheme="blue" size="md">
                <Redirect href={link}>
                  View Source
                </Redirect>
              </Button>
            </VStack>
          </GridItem>
          <GridItem>
            <Flex pt={4}>
              <chakra.p>{description}</chakra.p>
            </Flex>
          </GridItem>
        </Grid>
        <chakra.div mt={12} mb={12} />
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(1, 1fr)",
            md: "repeat(3, 1fr)",
          }}
          gap={{ base: "8", sm: "12", md: "16" }}
        >
          {features.map((feature, idx) => (
            <Feature key={idx} heading={feature.heading} text={feature.text} />
          ))}
        </Grid>
      </Box>
      <Divider mt={12} mb={12} />
    </chakra.div>
  );
};

export default ProjectCard;
