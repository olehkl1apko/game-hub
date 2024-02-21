import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

export const GameCardContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Box borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};
