import { SimpleGrid, Text } from "@chakra-ui/react";

import { useGames } from "@/hooks";
import { GameCard, GameCardContainer } from ".";
// import { GameQuery } from "../App";
// import useGames, { Platform } from "../hooks/useGames";
// import { Genre } from "../hooks/useGenres";
// import GameCard from "./GameCard";
// import GameCardContainer from "./GameCardContainer";
// import GameCardSkeleton from "./GameCardSkeleton";

// interface Props {
//   gameQuery: GameQuery;
// }

export const GameList = () => {
  const { games, error } = useGames();

  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={6}
      >
        {games.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};
