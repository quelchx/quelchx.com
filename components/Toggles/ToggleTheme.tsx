import React from "react";
import { Button, useColorMode } from "@chakra-ui/react";
import { FaMoon } from "react-icons/fa";
import { FiSunrise } from "react-icons/fi";
import { ToggleThemeProps } from "../../interface";

const ToggleTheme = ({ size, rounded }: ToggleThemeProps) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button
      size={size ? size : "md"}
      rounded={rounded ? rounded : "lg"}
      onClick={toggleColorMode}
    >
      {colorMode === "light" ? <FaMoon /> : <FiSunrise />}
    </Button>
  );
};

export default ToggleTheme;
