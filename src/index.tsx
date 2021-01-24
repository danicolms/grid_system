import * as React from "react";
import { render } from "react-dom";
import Grid from "./components/Grid";
import GridItem from "./components/GridItem";
import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <Grid>
        <GridItem
          l={{ start: 1, end: 5, row: 1 }}
          m={{ start: 1, end: 8, row: 2 }}
          s={{ start: 2, end: 4, row: 2 }}
        >
          <div style={{ background: "red", height: 500 }}></div>
        </GridItem>
        <GridItem
          l={{ start: 6, end: 12, row: 1 }}
          m={{ start: 1, end: 8, row: 1 }}
          s={{ start: 1, end: 4, row: 1 }}
        >
          <div style={{ background: "blue", height: 500 }}></div>
        </GridItem>
      </Grid>
    );
  }
}

render(<App />, document.getElementById("root"));
