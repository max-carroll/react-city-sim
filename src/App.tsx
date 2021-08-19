import React, { createElement, FunctionComponentElement, MouseEventHandler, useState } from "react"

import { Grid } from "@material-ui/core"
import { Building, MovableBuilding, MovableBuildingProps } from "./Building"
import { Row } from "./Row"
import { BuildingInfo, Coords } from "./Models"

const useGame = () => {
  const [element, setElement] = useState<FunctionComponentElement<MovableBuildingProps>>()
  const [selectedBuildingInfo, setSelectedBuildingInfo] = useState<BuildingInfo>()

  const [elPos, setElPos] = useState<Coords>({ x: 0, y: 0 })

  const handleSelectBuilding = (buildingInfo: BuildingInfo) => {
    console.log("hi guys")
    var functionalComponent = createElement(MovableBuilding, {
      buildingInfo,
      x: elPos.x,
      y: elPos.y,
    })
    setElement(functionalComponent)
    setSelectedBuildingInfo(buildingInfo)
  }

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (moveEvent) => {
    setElPos({ y: moveEvent.clientY, x: moveEvent.clientX })
  }

  const handleUnsetSelection = () => {
    setElement(undefined)
    setSelectedBuildingInfo(undefined)
  }

  return { handleSelectBuilding, element, handleMouseMove, elPos, handleUnsetSelection, selectedBuildingInfo }
}

function App() {
  var { handleSelectBuilding, element, handleMouseMove, elPos, handleUnsetSelection, selectedBuildingInfo } = useGame()

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
