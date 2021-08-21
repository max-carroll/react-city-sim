import { CellInfo } from "./App"
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
