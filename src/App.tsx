import React, {
  MouseEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
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
  const [selected, setSelected] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((moveEvent: MouseEvent) => {
    if (ref.current != null) {
      ref.current.style.position = "absolute";
      // perhaps make the click go through this so that we can interact with the board behind
      ref.current.style.top = `${moveEvent.clientY}px`;
      ref.current.style.left = `${moveEvent.clientX}px`;
    }
  }, []);

  const handleSnapToCursor: MouseEventHandler<HTMLDivElement> = (
    clickEvent
  ): void => {
    setSelected((old) => !old);
  };

  useEffect(() => {
    if (selected) {
      window.addEventListener("mousemove", handleMouseMove);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [selected, handleMouseMove]);

  // const action = !selected ? handleSnapToCursor

  return (
    <div
      ref={ref}
      onClick={handleSnapToCursor}
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
