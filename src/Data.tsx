import { BuildingName } from "./constants"
import { BuildingInfo } from "./Models"

export var buildings: Array<BuildingInfo> = [
  { name: BuildingName.farm, icon: "๐ฝ", color: "blue", size: 2, cost: { money: 100, wood: 30 } },
  { name: BuildingName.powerPlant, icon: "โ", color: "green", size: 1, cost: { money: 200, iron: 50 } },
  { name: BuildingName.ironMine, icon: "๐ง", color: "yellow", size: 2, cost: { money: 300, iron: 20 } },
  { name: BuildingName.university, icon: "๐งช", color: "yellow", size: 2, cost: { money: 300, iron: 20 } },
  { name: BuildingName.house, icon: "๐ ", color: "yellow", size: 1, cost: { money: 300, iron: 20 } },
  { name: BuildingName.cityCentre, icon: "๐", color: "yellow", size: 2, cost: { money: 300, iron: 20 } },
]
