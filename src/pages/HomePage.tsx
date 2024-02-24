import { GenreList, Main } from "@/components";
import { Grid, Show, GridItem } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5} position="fixed">
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Main />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
