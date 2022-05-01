import React from "react";

import {
  Box,
  HStack,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";

import { StatsCardProps } from "../../interface";
import Animate from "../Animate/Animate";

const StackCard = ({ title, stat, icon }: StatsCardProps) => {
  const Icon = icon;
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}
    >
      <Animate animation="fade-in" delay={400} duration={400}>
        <HStack mb={1.5} spacing={1}>
          <Box mt={0.5}>
            <Icon size={24} />
          </Box>
          <StatLabel fontSize={"lg"} fontWeight={"medium"} isTruncated>
            {title}
          </StatLabel>
        </HStack>
        <StatNumber mx={0.5} fontSize={"md"} fontWeight={"medium"}>
          {stat}
        </StatNumber>
      </Animate>
    </Stat>
  );
};

export default StackCard;
