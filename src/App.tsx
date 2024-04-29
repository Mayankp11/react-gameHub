import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      {/* <Show> is useful to restrict when its component should be displayed
     here: above="lg" means, the GridItem "aside" will only be shown to lg screens and above & not on mobile devices*/}
      <Show above="lg">
        <GridItem area="aside" >
          Aside
        </GridItem>
      </Show>

      <GridItem area="main" >
        Main
      </GridItem>
    </Grid>
  );
};

export default App;
