import React from "react"
import { Grid } from "@material-ui/core"

export interface RowProps {
  children?: React.ReactNode
}

export function Row({ children }: RowProps) {
  return <Grid container>{children}</Grid>
}
