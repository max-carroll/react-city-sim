import React, { MouseEventHandler, useState } from "react"

import { Grid } from "@material-ui/core"
import { Building, MovableBuilding } from "./Building"
import { BuildingInfo, Coords } from "./Models"
import { Land } from "./Land"

const useGame = () => {
  const [selectedBuildingInfo, setSelectedBuildingInfo] = useState<BuildingInfo>()
  const [elPos, setElPos] = useState<Coords>({ x: 0, y: 0 })

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

  const handleUnsetSelection = () => {
    setSelectedBuildingInfo(undefined)
  }

  return { handleSelectBuilding, handleMouseMove, elPos, handleUnsetSelection, selectedBuildingInfo, landGrid, setLandGrid }
}

function App() {
  var { handleSelectBuilding, handleMouseMove, elPos, handleUnsetSelection, selectedBuildingInfo, landGrid, setLandGrid } =
    useGame()

  var buildings: Array<BuildingInfo> = [
    { color: "blue", size: 2 },
    { color: "green", size: 2 },
    { color: "yellow", size: 2 },
  ]

  const handleClickApp = !!selectedBuildingInfo ? handleUnsetSelection : undefined

  return (
    <div className="App" onMouseMove={handleMouseMove} onClick={handleClickApp}>
      <Grid container>
        {selectedBuildingInfo && <MovableBuilding x={elPos.x} y={elPos.y} buildingInfo={selectedBuildingInfo} />}
        <Grid item xs={4}>
          <Grid container direction="column">
            {buildings.map((b) => (
              <Grid item>
                <Building buildingInfo={b} onSelectBuilding={handleSelectBuilding} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={6}>
          {<Land landGrid={landGrid} cellOnClick={handleUnsetSelection} setLandGrid={setLandGrid} />}
        </Grid>
      </Grid>
    </div>
  )
}

export interface CellInfo {}

export default App
