import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

export const GameCardContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      borderRadius={10}
      overflow="hidden"
      _hover={{
        transform: "scale(1.03)",
        transition: "transform 200ms ease-in",
      }}
    >
      {children}
    </Box>
  );
};
