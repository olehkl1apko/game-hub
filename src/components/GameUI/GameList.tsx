import { SimpleGrid, Text } from "@chakra-ui/react";

import { useGames } from "@/hooks";
import { GameCard, GameCardContainer, GameCardSkeleton } from ".";
// import { GameQuery } from "../App";
// import useGames, { Platform } from "../hooks/useGames";
// import { Genre } from "../hooks/useGenres";
// import GameCard from "./GameCard";
// import GameCardContainer from "./GameCardContainer";
// import GameCardSkeleton from "./GameCardSkeleton";

// interface Props {
//   gameQuery: GameQuery;
// }
const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9] as const;

export const GameList = () => {
  const { data, error, isLoading } = useGames();

  if (error) return <Text>{error}</Text>;

  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={6}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};
