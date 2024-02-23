import { Heading } from "@chakra-ui/react";
import { IGameQuery } from "@/constants";
import { findCurrentFilterById, IType } from "@/services";

interface Props {
  gameQuery: IGameQuery;
}

export const GameHeading = ({ gameQuery }: Props) => {
  const currentGenre = findCurrentFilterById(IType.GENRE, gameQuery.genreId);
  const currentPlatform = findCurrentFilterById(
    IType.PLATFORM,
    gameQuery.platformId
  );

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {`${currentPlatform?.name || ""} ${currentGenre?.name || ""} Games`}
    </Heading>
  );
};
