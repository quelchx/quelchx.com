import { forwardRef } from "react";
import { Box, Spinner } from "@chakra-ui/react";
import { ComputerProps, ComputerRef } from "../../interface";

export const ComputerSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
);

export const ComputerContainer = forwardRef<ComputerRef, ComputerProps>(
  ({ children }, ref) => (
    <Box
      ref={ref}
      m="auto"
      mt={["-20px", "-60px", "-90px"]}
      mb={["-40px", "-140px", "-200px"]}
      w={[240, 400, 460]}
      h={[240, 400, 460]}
    >
      {children}
    </Box>
  )
);

const Loader = () => {
  return (
    <ComputerContainer>
      <ComputerSpinner />
    </ComputerContainer>
  );
};

export default Loader;

