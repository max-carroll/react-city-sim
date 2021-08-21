import { CellInfo } from "./App"
import { BuildingInfo, Resources } from "./Models"

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

export function canAfford(playerReources: Resources, cost: Resources): boolean {
  for (var key of Object.keys(cost) as Array<keyof Resources>) {
    if (cost[key] && playerReources[key]! < cost[key]!) {
      return false
    }
  }
  return true
}

export function subtractCost(playerReources: Resources, cost: Resources): Resources {
  let result: Resources = {
    wood: playerReources.wood! - (cost.wood ?? 0),
    money: playerReources.money! - (cost.money ?? 0),
    iron: playerReources.iron! - (cost.iron ?? 0),
  }
  return result
}
