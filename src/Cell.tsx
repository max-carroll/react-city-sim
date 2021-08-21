import React, { useState } from "react"
import { Grid } from "@material-ui/core"
import { CellInfo, CELL_SIZE } from "./App"
import { PlacedBuilding } from "./Building"

export interface CellProps {
  onClick: any
  rowIndex: number
  columnIndex: number
  cellInfo: CellInfo
}

export function Cell({ onClick, rowIndex, columnIndex, cellInfo }: CellProps) {
  const [active, setActive] = useState(false)
  const handleMouseEnter = () => {
    setActive(true)
  }

  const handleClick = () => {
    console.log({ rowIndex, columnIndex, cellInfo })
    onClick(rowIndex, columnIndex)
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
