import React from "react"
import { Row } from "./Row"
import { Cell } from "./Cell"
import { CellInfo } from "./App"

export function Land({ landGrid, cellOnClick }: LandProps): JSX.Element {
  return (
    <>
      {landGrid.map((row, i) => (
        <Row key={i}>
          {row.map((cellInfo, j) => (
            <Cell key={j} onClick={cellOnClick} rowIndex={i} columnIndex={j} landGrid={landGrid} cellInfo={cellInfo} />
          ))}
        </Row>
      ))}
    </>
  )
}
interface LandProps {
  landGrid: CellInfo[][]
  cellOnClick: any
}
