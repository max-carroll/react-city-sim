import React, { MouseEventHandler } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Grid } from "@material-ui/core";

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

interface BuildingProps {
  color?: string;
}

function Building({ color }: BuildingProps) {
  const handleClick: MouseEventHandler<HTMLDivElement> = (clickEvent): void => {
    console.log(clickEvent);
    const node: HTMLDivElement = clickEvent.target as HTMLDivElement;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      node.style.transform = "translateY(" + (moveEvent.clientY - 5) + "px)";
      node.style.transform += "translateX(" + (moveEvent.clientX - 5) + "px)";
    };

    document.addEventListener("mousemove", handleMouseMove, false);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        height: 40,
        width: 40,
        border: "1px solid black",
        background: color ?? "red",
      }}
    ></div>
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
