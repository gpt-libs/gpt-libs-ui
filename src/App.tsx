import { Grid, GridItem } from "@chakra-ui/react";
import styles from "./app.module.css"

function App() {
  return (
  <Grid  className={styles.appContainer} templateColumns='minmax(240px, .5fr) 1fr'>
    <GridItem backgroundColor={"charlestonGreen"} color={"white"}>Side Nav</GridItem>
    <GridItem backgroundColor={"blueSapphire"} color={"white"} className={styles.main}>Main</GridItem>
  </Grid>
  
  );
}

export default App;
