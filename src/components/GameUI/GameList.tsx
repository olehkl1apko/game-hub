import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { Fragment } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { countSkeletons } from "@/constants";
import { useGames } from "@/hooks";
import { fetchedGamesCount } from "@/services";
import { GameCard, GameCardContainer, GameCardSkeleton } from ".";

export const GameList = () => {
  const { data, error, isLoading, hasNextPage, fetchNextPage } = useGames();

  if (error) return <Text>{error.message}</Text>;

  return (
    <InfiniteScroll
      dataLength={data ? fetchedGamesCount(data?.pages) : 0}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<Spinner />}
    >
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
        {data?.pages.map((page, idx) => (
          <Fragment key={idx}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};
