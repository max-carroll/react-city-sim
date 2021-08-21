export interface Coords {
  x: number
  y: number
}

export interface BuildingInfo {
  name: string
  color: string
  size: number
  cost: Resources
  icon: string
}

export interface Resources {
  money?: number
  wood?: number
  iron?: number
}
