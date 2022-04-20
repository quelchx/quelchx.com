import { Avatar, chakra, Flex } from "@chakra-ui/react";
import Animate from "../Animate";
import Wrapper from "./Wrapper";

export interface ProjectProps {
  details: string;
  path: string;
  image: string;
  name: string;
  delay: number;
}

export function ProjectCard(props: ProjectProps) {
  const { name, details, path, image, delay } = props;
  return (
    <Animate animation="fade-down" delay={delay}>
      <Wrapper>
        <Flex
          direction={"column"}
          textAlign={"left"}
          justifyContent={"space-between"}
        >
          <chakra.p
            fontFamily={"Inter"}
            fontWeight={"medium"}
            fontSize={"15px"}
            pb={4}
          >
            {details}
          </chakra.p>
          <chakra.p fontFamily={"Work Sans"} fontWeight={"bold"} fontSize={14}>
            {name}
            <chakra.span
              fontFamily={"Inter"}
              fontWeight={"medium"}
              color={"gray.500"}
            >
              {" "}
              <a href={path} className="pl-2">
                Visit
              </a>
            </chakra.span>
          </chakra.p>
        </Flex>
        <Avatar
          src={image}
          height={"80px"}
          width={"80px"}
          alignSelf={"center"}
          m={{ base: "0 0 35px 0", md: "0 0 0 50px" }}
        />
      </Wrapper>
    </Animate>
  );
}
