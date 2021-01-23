import * as React from "react";
import { render } from "react-dom";
import Grid from "./components/Grid";
import GridItem from "./components/GridItem";
import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <Grid>
        <GridItem large={[3, 10]}>
          <div style={{ background: "red", height: 100 }}></div>
        </GridItem>
        <GridItem large={[3, 6]}>
          <div style={{ background: "yellow", height: 100 }}></div>
        </GridItem>
        <GridItem large={[7, 10]}>
          <div style={{ background: "green", height: 100 }}></div>
        </GridItem>
        <GridItem large={[1, 12]}>
          <div style={{ background: "black", height: 400 }}></div>
        </GridItem>
        <GridItem large={[7, 10]}>
          <div style={{ background: "blue", height: 100 }}></div>
        </GridItem>
      </Grid>
    );
  }
}

render(<App />, document.getElementById("root"));
