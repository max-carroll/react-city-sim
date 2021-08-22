import React from "react"

import { Grid } from "@material-ui/core"
import { Building, MovableBuilding } from "./Building"
import { BuildingInfo } from "./Models"
import { Land } from "./Land"
import { useGame } from "./useGame"
import { buildings } from "./Data"

export const CELL_SIZE = 50

function App() {
  var {
    handleSelectBuilding,
    handleMouseMove,
    elPos,
    handlePlaceBuilding,
    selectedBuildingInfo,
    landGrid,
    setLandGrid,
    resources,
    population,
  } = useGame()

  return (
    <div className="App" onMouseMove={handleMouseMove}>
      <Grid container>
        {selectedBuildingInfo && <MovableBuilding x={elPos.x} y={elPos.y} buildingInfo={selectedBuildingInfo} />}
        <Grid item xs={4}>
          <Grid container direction="column">
            <Grid item>Buildings</Grid>
            {buildings.map((b) => (
              <Grid item>
                <Building buildingInfo={b} onSelectBuilding={handleSelectBuilding} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={6}>
          {<Land landGrid={landGrid} cellOnClick={handlePlaceBuilding} setLandGrid={setLandGrid} />}
        </Grid>
        <Grid item xs={2}>
          <Grid container direction="column">
            <Grid item>Resources</Grid>
            <Grid item>Money: {resources.money}</Grid>
            <Grid item>Wood: {resources.wood}</Grid>
            <Grid item>Iron: {resources.iron}</Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export interface CellInfo {
  occupied: boolean
  buildingInfo?: BuildingInfo
}

export default App
