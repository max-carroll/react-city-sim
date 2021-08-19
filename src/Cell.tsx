import React, { useState } from "react";
import { Grid } from "@material-ui/core";

export interface CellProps {
  onClick: any;
}

export function Cell({ onClick }: CellProps) {
  const [active, setActive] = useState(false);
  const handleMouseEnter = () => {
    setActive(true);
  };
  const handleMouseLeave = () => setActive(false);
  return (
    <Grid
      item
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        border: "1px solid black",
        height: 20,
        width: 20,
        backgroundColor: active ? "grey" : "initial",
      }}
    ></Grid>
  );
}
