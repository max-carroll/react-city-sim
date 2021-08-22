import { MouseEventHandler, useState } from "react"
import { BuildingInfo, Coords, Resources } from "./Models"
import { canAfford, subtractCost } from "./logic"
import { CellInfo } from "./App"
import { createLandData, isSpaceForBuilding } from "./landLogic"

export const useGame = () => {
  const [population, setPopulation] = useState(400)
  const [selectedBuildingInfo, setSelectedBuildingInfo] = useState<BuildingInfo>()
  const [elPos, setElPos] = useState<Coords>({ x: 0, y: 0 })

  const [resources, setResources] = useState<Resources>({
    money: 1000,
    wood: 100,
    iron: 100,
  } as Resources)

  const initialGrid = createLandData()
  const [landGrid, setLandGrid] = useState<CellInfo[][]>(initialGrid)

  // When selecting one from the menu
  const handleSelectBuilding = (buildingInfo: BuildingInfo) => {
    setSelectedBuildingInfo(buildingInfo)
  }

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (moveEvent) => {
    setElPos({ y: moveEvent.clientY, x: moveEvent.clientX })
  }

  const handlePlaceBuilding = (rowIndex: number, columnIndex: number) => {
    var building = selectedBuildingInfo

    if (!building) return

    if (!isSpaceForBuilding(building, landGrid, rowIndex, columnIndex)) {
      alert("no space for this building")
      return
    }

    if (!canAfford(resources, building.cost)) {
      alert("can not afford building")
      setSelectedBuildingInfo(undefined)
      return
    }

    setResources((old) => subtractCost(old, building!.cost))

    const newLandGrid = [...landGrid]
    let currentCell = landGrid[rowIndex][columnIndex]
    currentCell.buildingInfo = building // set the building info in the top left corner of range

    // update andjacent cells to be occupied
    for (let x = 0; x < building.size; x++) {
      for (let y = 0; y < building.size; y++) {
        landGrid[rowIndex + x][columnIndex + y].occupied = true
      }
    }

    setLandGrid(newLandGrid)
    setSelectedBuildingInfo(undefined)
  }

  return {
    population,
    setPopulation,
    handleSelectBuilding,
    handleMouseMove,
    elPos,
    handlePlaceBuilding,
    selectedBuildingInfo,
    landGrid,
    setLandGrid,
    resources,
    setResources,
  }
}
