import { Box, Flex } from "@chakra-ui/react";

import { GameHeading, GameList } from "@/components/GameUI";
import { PlatformSelector, SortSelector } from "@/components/Filters";

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
