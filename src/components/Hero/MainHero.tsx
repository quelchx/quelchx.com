import React from "react";
import { Avatar, Box, chakra, Container, Heading } from "@chakra-ui/react";
import { BioSection, BioYear } from "../Bio";
import Section from "../Section";

const MainHero = () => (
  <Container maxW="container.lg">
    <Box display={{ md: "flex" }}>
      <Box
        flexShrink={0}
        mt={{ base: 12, md: 10 }}
        mr={{ md: 6 }}
        textAlign="center"
      >
        <Box
          borderColor="whiteAlpha.800"
          borderWidth={2}
          borderStyle="solid"
          w="100px"
          h="100px"
          display="inline-block"
          borderRadius="full"
          overflow="hidden"
        >
          <Avatar src="/images/quelchx.jpg" size={"xl"} />
        </Box>
      </Box>
      <Box flexGrow={1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <p>
          I'm a talented IT professional with a passion for tailored solutions
          seeking a position as a Web Developer in a thriving, exciting and
          growing company. Comes with a college degree in Internet Applications
          and Web Development with almost 4 years of experience with HTML,
          JavaScript, TypeScript, React, NextJS and the fundamentals of Django
          and NodeJS. Able to provide quality support to the company’s IT team
          in developing and deploying web-based event and registration software
          tools.
        </p>
      </Box>
    </Box>
    <Section delay={1.1}>
      <Box mx={20}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1989</BioYear>
          Born in Brantford, Ontario
        </BioSection>
        <BioSection>
          <BioYear>2014</BioYear>
          Worked as a Technician at Cainsville Tire Discounter
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Decided to make a change in life and persue a dream of becoming a Web
          Developer
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Finally got accepted into College to persue my dreams.
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Completed Internet Applications and Web Development Degree at Fanshawe
          College
        </BioSection>
      </Box>
    </Section>
  </Container>
);

export default MainHero;
