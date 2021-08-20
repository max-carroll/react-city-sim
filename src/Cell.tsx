import React, { Dispatch, SetStateAction, useState } from "react"
import { Grid } from "@material-ui/core"
import { CellInfo } from "./App"

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
    onClick()
  }
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
        backgroundColor: active ? "grey" : "initial",
      }}
    ></Grid>
  )
}
