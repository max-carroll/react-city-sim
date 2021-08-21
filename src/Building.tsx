import * as React from "react"
import { CELL_SIZE } from "./App"
import { BuildingInfo } from "./Models"

export interface BuildingProps {
  ref?: React.RefObject<HTMLDivElement>
  onSelectBuilding: (buildingInfo: BuildingInfo) => void
  buildingInfo: BuildingInfo
}

export function Building({ ref, onSelectBuilding, buildingInfo }: BuildingProps) {
  const handleSelectBuilding = () => {
    console.log("click")
    onSelectBuilding(buildingInfo)
  }

  return (
    <>
      {buildingInfo.name}
      <div
        ref={ref}
        onClick={handleSelectBuilding}
        style={{
          height: CELL_SIZE,
          width: CELL_SIZE,
          border: "1px solid black",
          background: buildingInfo.color ?? "red",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {buildingInfo.icon}
      </div>
    </>
  )
}

interface PlacedBuildingProps {
  buildingInfo: BuildingInfo
}

export function PlacedBuilding({ buildingInfo }: PlacedBuildingProps) {
  return (
    <div
      style={{
        height: buildingInfo.size * CELL_SIZE,
        width: buildingInfo.size * CELL_SIZE,
        border: "1px solid black",
        position: "absolute",
        background: buildingInfo.color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {buildingInfo.icon}
    </div>
  )
}

export interface MovableBuildingProps {
  buildingInfo: BuildingInfo
  x: number
  y: number
}

export function MovableBuilding({ buildingInfo, x, y }: MovableBuildingProps) {
  var top: string = `${y}px`
  var left: string = `${x}px`

  return (
    <div
      // onClick={onClick}
      // onMouseMove={handleMouseMove}
      style={{
        height: buildingInfo.size * CELL_SIZE,
        width: buildingInfo.size * CELL_SIZE,
        position: "absolute",
        pointerEvents: "none",
        top,
        left,
        border: "1px solid black",
        background: buildingInfo.color ?? "red",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {buildingInfo.icon}
    </div>
  )
}
