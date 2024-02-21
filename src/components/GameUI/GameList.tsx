import { SimpleGrid, Text } from "@chakra-ui/react";

import { GameCard, GameCardContainer, GameCardSkeleton } from ".";
import { IGameQuery, countSkeletons } from "@/constants";
import { useGames } from "@/hooks";

interface Props {
  gameQuery: IGameQuery;
}

export const GameList = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);

  if (error) return <Text>{error}</Text>;

  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={6}
      >
        {isLoading &&
          countSkeletons.map((skeleton) => (
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
