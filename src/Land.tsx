import React from "react"
import { Row } from "./Row"
import { Cell } from "./Cell"
import { CellInfo } from "./App"

export function Land({ landGrid, cellOnClick }: LandProps): JSX.Element {
  return (
    <>
      {landGrid.map((row) => (
        <Row>
          {row.map((cell) => (
            <Cell onClick={cellOnClick} />
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
