import * as React from "react"
import { BuildingInfo } from "./Models"

export interface BuildingProps {
  ref?: React.RefObject<HTMLDivElement>
  onSelectBuilding: (buildingInfo: BuildingInfo) => void
  buildingInfo: BuildingInfo
}

export function Building({ ref, onSelectBuilding, buildingInfo }: BuildingProps) {
  const handleSelectBuilding = () => {
    onSelectBuilding(buildingInfo)
  }

  return (
    <div
      ref={ref}
      onClick={handleSelectBuilding}
      style={{
        height: 40,
        width: 40,
        border: "1px solid black",
        background: buildingInfo.color ?? "red",
      }}
    ></div>
  )
}

interface PlacedBuildingProps {
  buildingInfo: BuildingInfo
}

export function PlacedBuilding({ buildingInfo }: PlacedBuildingProps) {
  return (
    <div
      style={{
        height: 40,
        width: 40,
        border: "1px solid black",
        position: "absolute",
        background: buildingInfo.color,
      }}
    ></div>
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
        height: 40,
        width: 40,
        position: "absolute",
        pointerEvents: "none",
        top,
        left,
        border: "1px solid black",
        background: buildingInfo.color ?? "red",
      }}
    ></div>
  )
}
