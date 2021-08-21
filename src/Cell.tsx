import React, { Dispatch, SetStateAction, useState } from "react"
import { Grid } from "@material-ui/core"
import { CellInfo, CELL_SIZE } from "./App"
import { BuildingInfo } from "./Models"
import { PlacedBuilding } from "./Building"

export interface CellProps {
  onClick: any
  rowIndex: number
  columnIndex: number
  landGrid: CellInfo[][]
  cellInfo: CellInfo
  setLandGrid: Dispatch<SetStateAction<CellInfo[][]>>
}

export function Cell({ onClick, rowIndex, columnIndex, landGrid, cellInfo, setLandGrid }: CellProps) {
  const [active, setActive] = useState(false)
  const handleMouseEnter = () => {
    setActive(true)
  }

  const handleClick = () => {
    console.log({ rowIndex, columnIndex, cellInfo })
    var building: BuildingInfo = onClick()

    if (!building) {
      return
    }

    // check sufficient space to allow for building
    for (let x = 0; x < building.size; x++) {
      for (let y = 0; y < building.size; y++) {
        if (
          !landGrid[rowIndex + x] ||
          !landGrid[rowIndex + x][columnIndex + y] ||
          landGrid[rowIndex + x][columnIndex + y].occupied
        ) {
          handleNoSpace()
          return
        }
      }
    }

    handleAddBuilding(building)
  }

  const handleNoSpace = () => {
    alert("sorry no space for this building")
  }

  const handleAddBuilding = (buildingInfo: BuildingInfo) => {
    const newLandGrid = [...landGrid]

    let currentCell = landGrid[rowIndex][columnIndex]

    currentCell.buildingInfo = buildingInfo // set the building info in the top left corner of range

    // update andjacent cells to be occupied
    for (let x = 0; x < buildingInfo.size; x++) {
      for (let y = 0; y < buildingInfo.size; y++) {
        landGrid[rowIndex + x][columnIndex + y].occupied = true
      }
    }

    // TODO: Handle removal of a building

    setLandGrid(newLandGrid)
  }

  var color
  if (cellInfo.buildingInfo?.color) {
    color = cellInfo.buildingInfo?.color
  } else if (active) {
    color = "grey"
  } else {
    color = "initial"
  }

  // var color = cellInfo.buildingInfo?.color ?? active ? "grey" : "initial"

  const handleMouseLeave = () => setActive(false)
  return (
    <Grid
      item
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{
        border: "1px solid black",
        height: CELL_SIZE,
        width: CELL_SIZE,
        backgroundColor: color,
      }}
    >
      {cellInfo.buildingInfo && <PlacedBuilding buildingInfo={cellInfo.buildingInfo} />}
    </Grid>
  )
}
