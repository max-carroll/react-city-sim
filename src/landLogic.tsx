import { CellInfo } from "./App"
import { BuildingName } from "./constants"
import { buildings } from "./Data"
import { BuildingInfo } from "./Models"

export function isSpaceForBuilding(
  building: BuildingInfo,
  landGrid: CellInfo[][],
  rowIndex: number,
  columnIndex: number,
): boolean {
  for (let x = 0; x < building.size; x++) {
    for (let y = 0; y < building.size; y++) {
      if (
        !landGrid[rowIndex + x] ||
        !landGrid[rowIndex + x][columnIndex + y] ||
        landGrid[rowIndex + x][columnIndex + y].occupied
      ) {
        return false
      }
    }
  }
  return true
}

export function createLandData(): CellInfo[][] {
  var land = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((j) => ({} as CellInfo)))

  var cityCentre = buildings.find((x) => x.name === BuildingName.cityCentre)
  var house = buildings.find((x) => x.name === BuildingName.house)

  land[4][5].buildingInfo = cityCentre
  land[3][5].buildingInfo = house

  return land
}
