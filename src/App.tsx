import React, {
  createElement,
  FunctionComponentElement,
  RefObject,
  useCallback,
  useState,
} from "react";

import { Grid } from "@material-ui/core";
import { Building, BuildingProps, MovableBuilding } from "./Building";
import { useBuilding } from "./useBuilding";

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

const useBuildings = () => {
  const [element, setElement] =
    useState<FunctionComponentElement<BuildingProps>>();

  const [jsxElement, setJsxElement] = useState<JSX.Element>();

  // const handleMouseMove = useCallback(
  //   (moveEvent: MouseEvent) => {
  //     if (element != null) {
  //       element.style.position = "absolute";
  //       // perhaps make the click go through this so that we can interact with the board behind
  //       element.style.top = `${moveEvent.clientY}px`;
  //       element.style.left = `${moveEvent.clientX}px`;
  //     }
  //   },
  //   [element]
  // );

  const handleClick = () => {
    console.log("hi guys");
    var functionalComponent = createElement(MovableBuilding, { color: "blue" });

    var timmy = <MovableBuilding color="blue" />;

    // both methods work
    setElement(functionalComponent);
    setJsxElement(timmy);
  };

  return { handleClick, element, jsxElement };
};

function App() {
  var { handleClick, element, jsxElement } = useBuildings();

  return (
    <div className="App">
      <Grid container>
        {/* {element} */}
        {jsxElement}
        <Grid item xs={4}>
          <Grid container direction="column">
            <Grid item>
              <Building color="blue" onClick={handleClick} />
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
