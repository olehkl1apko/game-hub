import { Heading } from "@chakra-ui/react";
import { IGameQuery } from "@/constants";
import { useGenres, usePlatforms } from "@/hooks";

interface Props {
  gameQuery: IGameQuery;
}

export const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();
  const currentGenre = genres?.results.find((g) => g.id === gameQuery.genreId);
  const currentPlatform = platforms?.results.find(
    (p) => p.id === gameQuery.platformId
  );

  const heading = `${currentPlatform?.name || ""} ${
    currentGenre?.name || ""
  } Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};
