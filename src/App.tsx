import { Grid, GridItem } from "@chakra-ui/react";
import { Switch, Route } from "react-router-dom";
import styles from "./app.module.css";
import { Main } from "./pages/Main";

function App() {
  return (
    <Grid
      className={styles.appContainer}
      templateColumns="minmax(240px, .5fr) 1fr"
    >
      <GridItem backgroundColor={"charlestonGreen"} color={"white"}>
        Side Nav
      </GridItem>
      <GridItem
        backgroundColor={"blueSapphire"}
        color={"white"}
        className={styles.main}
      >
        <Switch>
          <Route exact={true} path="/" component={Main} />
          <Route path="/message" component={Message} />
          <Route path="/test" component={Test} />
        </Switch>
      </GridItem>
    </Grid>
  );
}

function Message() {
  return <div>Some amazing message</div>;
}
function Test() {
  return <div>Test</div>;
}

export default App;
