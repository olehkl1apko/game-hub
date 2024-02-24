import { GameList } from "@/components/GameUI";
import {
  GameHeading,
  PlatformSelector,
  SortSelector,
} from "@/components/Utilities";
import { Box, Flex } from "@chakra-ui/react";

export const Main = () => {
  return (
    <>
      <Box paddingLeft={2}>
        <GameHeading />
        <Flex gap={5} marginBottom={5} wrap="wrap">
          <PlatformSelector />
          <SortSelector />
        </Flex>
      </Box>
      <GameList />
    </>
  );
};
