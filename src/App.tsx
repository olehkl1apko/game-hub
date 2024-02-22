import { useState } from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";

import { Main, GenreList, NavBar } from "@/components";
import { IGameQuery } from "./constants";

function App() {
  const [gameQuery, setGameQuery] = useState<IGameQuery>({} as IGameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenreId={gameQuery.genreId}
            onSelectGenre={(genre) =>
              setGameQuery({ ...gameQuery, genreId: genre.id })
            }
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Main
          gameQuery={gameQuery}
          onSelectPlatform={(platform) =>
            setGameQuery({ ...gameQuery, platformId: platform.id })
          }
          onSelectSortOrder={(sortOrder) =>
            setGameQuery({ ...gameQuery, sortOrder })
          }
        />
      </GridItem>
    </Grid>
  );
}

export default App;
