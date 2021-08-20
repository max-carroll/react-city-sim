import React, { Dispatch, SetStateAction, useState } from "react"
import { Grid } from "@material-ui/core"
import { CellInfo } from "./App"
import { BuildingInfo } from "./Models"

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

    // check theres space on the grid
    if (cellInfo.occupied) {
      handleNoSpace()
      return
    }

    handleAddBuilding(building)
  }

  const handleNoSpace = () => {
    alert("sorry no space for this building")
  }

  const handleAddBuilding = (buildingInfo: BuildingInfo) => {
    const newLandGrid = [...landGrid]

    let currentCell = landGrid[rowIndex][columnIndex]
    currentCell.occupied = true
    currentCell.buildingInfo = buildingInfo

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
        height: 20,
        width: 20,
        backgroundColor: color,
      }}
    ></Grid>
  )
}
