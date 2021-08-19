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

export function MovableBuilding({ color, onClick }: BuildingProps) {
  interface Coords {
    x: number;
    y: number;
  }
  const [state, setState] = useState<Coords>({ x: 0, y: 0 });

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (moveEvent) => {
    setState({ y: moveEvent.clientY, x: moveEvent.clientX });
  };

  var top: string = `${state.x}px`;
  var left: string = `${state.y}px`;

  return (
    <div
      onClick={onClick}
      onMouseMove={handleMouseMove}
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
