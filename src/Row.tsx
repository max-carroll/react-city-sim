import React from "react";
import { Grid } from "@material-ui/core";
import { Cell } from "./Cell";

export interface RowProps {
  cellOnClick: any;
}

export function Row({ cellOnClick }: RowProps) {
  return (
    <Grid container>
      {Array(8)
        .fill(0)
        .map(() => (
          <Cell onClick={cellOnClick} />
        ))}
    </Grid>
  );
}
