import React from "react";
import type { NextPage } from "next";

import { Box, chakra, SimpleGrid } from "@chakra-ui/react";
import { Animate, PageLayout, StackCard } from "../components";

import meta from "../constants/meta";
import stack from "../constants/stack";

const StackPage: NextPage = () => {
  const { title, description } = meta.stack;
  return (
    <PageLayout title={title} description={description}>
      <Box maxW="7xl" pb={12} mx={"auto"} px={{ base: 4, sm: 12, md: 20 }}>
        <Animate animation="fade-down" delay={400} duration={400}>
          <chakra.h1
            textAlign={"center"}
            fontSize={"4xl"}
            pt={10}
            pb={4}
            fontWeight={"bold"}
          >
            My Go To Stacks
          </chakra.h1>
          <chakra.p pb={4}>
            Below are some of my go to stacks for when I'm working on a project
            or application. Sometimes I like to mix it up -- one day I might
            want to fiddle with Nuxt.js the other im playing with Next.js (never
            hurts to keep learning something new!), but all these technologies
            I'm pretty familar with. I also am familar with lot's of other
            programming languages, frameworks, libraries and tools. Things such
            as Java or Angular to NestJS or Ruby on Rails. The list is honestly
            to long to list!
          </chakra.p>
        </Animate>
        <Animate animation="fade-in" delay={100}>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
            {stack.map((stack, idx) => (
              <StackCard
                key={idx}
                icon={stack.icon}
                title={stack.title}
                stat={stack.stat}
              />
            ))}
          </SimpleGrid>
        </Animate>
      </Box>
    </PageLayout>
  );
};

export default StackPage;
