import React from "react";

import { Grid } from "@material-ui/core";
import { Building } from "./Building";

function Cell() {
  return (
    <Grid
      item
      style={{ border: "1px solid black", height: 20, width: 20 }}
    ></Grid>
  );
}

function Row() {
  return (
    <Grid container>
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
    </Grid>
  );
}

function App() {
  return (
    <div className="App">
      <Grid container>
        <Grid item xs={4}>
          <Grid container direction="column">
            <Grid item>
              <Building color="blue" />
            </Grid>
            <Grid item>
              <Building color="green" />
            </Grid>
            <Grid item>
              <Building color="yellow" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <Row />
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
