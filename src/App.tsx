import React, { MouseEventHandler, useState } from "react"

import { Grid, Typography } from "@material-ui/core"
import { Building, MovableBuilding } from "./Building"
import { BuildingInfo, Coords, Resources } from "./Models"
import { Land } from "./Land"

function canAfford(playerReources: Resources, cost: Resources): boolean {
  for (var key of Object.keys(cost) as Array<keyof Resources>) {
    if (cost[key] && playerReources[key]! < cost[key]!) {
      return false
    }
  }
  return true
}

function subtractCost(playerReources: Resources, cost: Resources): Resources {
  let result: Resources = {
    wood: playerReources.wood! - (cost.wood ?? 0),
    money: playerReources.money! - (cost.money ?? 0),
    iron: playerReources.iron! - (cost.iron ?? 0),
  }
  return result
}

const useGame = () => {
  const [selectedBuildingInfo, setSelectedBuildingInfo] = useState<BuildingInfo>()
  const [elPos, setElPos] = useState<Coords>({ x: 0, y: 0 })

  const [resources, setResources] = useState<Resources>({
    money: 1000,
    wood: 100,
    iron: 100,
  } as Resources)

  const initialGrid: CellInfo[][] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) =>
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((j) => ({} as CellInfo)),
  )
  const [landGrid, setLandGrid] = useState<CellInfo[][]>(initialGrid)

  const handleSelectBuilding = (buildingInfo: BuildingInfo) => {
    setSelectedBuildingInfo(buildingInfo)
  }

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (moveEvent) => {
    setElPos({ y: moveEvent.clientY, x: moveEvent.clientX })
  }

  const handlePlaceBuilding = (): BuildingInfo | undefined => {
    var building = selectedBuildingInfo
    setSelectedBuildingInfo(undefined)
    return building
  }

  return {
    handleSelectBuilding,
    handleMouseMove,
    elPos,
    handlePlaceBuilding,
    selectedBuildingInfo,
    landGrid,
    setLandGrid,
    resources,
    setResources,
  }
}

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

  const handleClickApp = !!selectedBuildingInfo ? handlePlaceBuilding : undefined

  return (
    <div className="App" onMouseMove={handleMouseMove} onClick={handleClickApp}>
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
