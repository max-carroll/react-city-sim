import React, { MouseEventHandler, useState } from "react"

import { Grid } from "@material-ui/core"
import { Building, MovableBuilding } from "./Building"
import { Row } from "./Row"
import { BuildingInfo, Coords } from "./Models"

const useGame = () => {
  const [selectedBuildingInfo, setSelectedBuildingInfo] = useState<BuildingInfo>()
  const [elPos, setElPos] = useState<Coords>({ x: 0, y: 0 })

  const handleSelectBuilding = (buildingInfo: BuildingInfo) => {
    setSelectedBuildingInfo(buildingInfo)
  }

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (moveEvent) => {
    setElPos({ y: moveEvent.clientY, x: moveEvent.clientX })
  }

  const handleUnsetSelection = () => {
    setSelectedBuildingInfo(undefined)
  }

  return { handleSelectBuilding, handleMouseMove, elPos, handleUnsetSelection, selectedBuildingInfo }
}

function App() {
  var { handleSelectBuilding, handleMouseMove, elPos, handleUnsetSelection, selectedBuildingInfo } = useGame()

  var buildings: Array<BuildingInfo> = [{ color: "blue" }, { color: "green" }, { color: "yellow" }]

  return (
    <div className="App" onMouseMove={handleMouseMove}>
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
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <Row cellOnClick={handleUnsetSelection} />
          ))}
        </Grid>
      </Grid>
    </div>
  )
}

export default App
