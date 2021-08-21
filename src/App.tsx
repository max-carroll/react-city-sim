import React from "react"

import { Grid } from "@material-ui/core"
import { Building, MovableBuilding } from "./Building"
import { BuildingInfo } from "./Models"
import { Land } from "./Land"
import { useGame } from "./useGame"

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
  } = useGame()

  var buildings: Array<BuildingInfo> = [
    { name: "farm", icon: "🌽", color: "blue", size: 2, cost: { money: 100, wood: 30 } },
    { name: "power plant", icon: "⚛", color: "green", size: 1, cost: { money: 200, iron: 50 } },
    { name: "iron mine", icon: "🔧", color: "yellow", size: 2, cost: { money: 300, iron: 20 } },
    { name: "university", icon: "🧪", color: "yellow", size: 2, cost: { money: 300, iron: 20 } },
    { name: "house", icon: "🏠", color: "yellow", size: 1, cost: { money: 300, iron: 20 } },
  ]

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
