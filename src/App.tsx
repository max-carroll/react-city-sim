import React, {
  createElement,
  FunctionComponentElement,
  MouseEventHandler,
  useState,
} from "react";

import { Grid } from "@material-ui/core";
import { Building, MovableBuilding, MovableBuildingProps } from "./Building";
import { Row } from "./Row";

interface Coords {
  x: number;
  y: number;
}
const useBuildings = () => {
  const [element, setElement] =
    useState<FunctionComponentElement<MovableBuildingProps>>();

  const [elPos, setElPos] = useState<Coords>({ x: 0, y: 0 });

  const handleClick = () => {
    console.log("hi guys");
    var functionalComponent = createElement(MovableBuilding, {
      color: "blue",
      x: elPos.x,
      y: elPos.y,
    });
    setElement(functionalComponent);
  };

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (moveEvent) => {
    setElPos({ y: moveEvent.clientY, x: moveEvent.clientX });
  };

  const handleUnsetSelection = () => setElement(undefined);

  return { handleClick, element, handleMouseMove, elPos, handleUnsetSelection };
};

function App() {
  var { handleClick, element, handleMouseMove, elPos, handleUnsetSelection } =
    useBuildings();

  return (
    <div className="App" onMouseMove={handleMouseMove}>
      <Grid container>
        {element && <MovableBuilding x={elPos.x} y={elPos.y} color="blue" />}

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
            <Row cellOnClick={handleUnsetSelection} />
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
