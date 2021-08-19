import React from "react"
import { Grid } from "@material-ui/core"
import { Cell } from "./Cell"

export interface RowProps {
  cellOnClick: any
  children?: React.ReactNode
}

export function Row({ cellOnClick, children }: RowProps) {
  return <Grid container>{children}</Grid>
}
