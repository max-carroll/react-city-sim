import * as React from "react";
import { MouseEventHandler, useState } from "react";

export interface BuildingProps {
  color?: string;
  ref?: React.RefObject<HTMLDivElement>;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export function Building({ color, ref, onClick }: BuildingProps) {
  return (
    <div
      ref={ref}
      onClick={onClick}
      style={{
        height: 40,
        width: 40,
        border: "1px solid black",
        background: color ?? "red",
      }}
    ></div>
  );
}

export interface MovableBuildingProps {
  color: string;
  x: number;
  y: number;
}

export function MovableBuilding({ color, x, y }: MovableBuildingProps) {
  var top: string = `${y}px`;
  var left: string = `${x}px`;

  return (
    <div
      // onClick={onClick}
      // onMouseMove={handleMouseMove}
      style={{
        height: 40,
        width: 40,
        position: "absolute",
        top,
        left,
        border: "1px solid black",
        background: color ?? "red",
      }}
    ></div>
  );
}
