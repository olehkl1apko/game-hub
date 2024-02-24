import { Heading } from "@chakra-ui/react";

import { findCurrentFilterById, ITypeFilter } from "@/services";
import { useGameQueryStore } from "@/store";

export const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const currentGenre = findCurrentFilterById(ITypeFilter.GENRE, genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const currentPlatform = findCurrentFilterById(
    ITypeFilter.PLATFORM,
    platformId
  );

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {`${currentPlatform?.name || ""} ${currentGenre?.name || ""} Games`}
    </Heading>
  );
};
