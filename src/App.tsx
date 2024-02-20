import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
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
      <GridItem area="nav">Nav</GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          Aside
        </GridItem>
      </Show>
      <GridItem area="main">Main</GridItem>
    </Grid>
  );
}

export default App;
