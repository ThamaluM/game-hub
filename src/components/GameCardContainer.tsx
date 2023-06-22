import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Prop {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Prop) => {
  return (
    <Box borderRadius={10} overflow={"hidden"}>
      {children}
    </Box>
  );
};

export default GameCardContainer;
