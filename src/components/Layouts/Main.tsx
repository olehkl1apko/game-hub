import { Box, Flex } from "@chakra-ui/react";
import {
  GameHeading,
  PlatformSelector,
  SortSelector,
} from "@/components/Utilities";
import { GameList } from "@/components/GameUI";
import { IGameQuery, IPlatform } from "@/constants";

interface Props {
  gameQuery: IGameQuery;
  onSelectPlatform: (platform: IPlatform) => void;
  onSelectSortOrder: (sortOrder: string) => void;
}

export const Main = ({
  gameQuery,
  onSelectPlatform,
  onSelectSortOrder,
}: Props) => {
  return (
    <>
      <Box paddingLeft={2}>
        <GameHeading gameQuery={gameQuery} />
        <Flex gap={5} marginBottom={5} wrap="wrap">
          <PlatformSelector
            selectedPlatformId={gameQuery.platformId}
            onSelectPlatform={onSelectPlatform}
          />
          <SortSelector
            sortOrder={gameQuery.sortOrder}
            onSelectSortOrder={onSelectSortOrder}
          />
        </Flex>
      </Box>
      <GameList gameQuery={gameQuery} />
    </>
  );
};
