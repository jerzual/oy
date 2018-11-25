class Tile {
  constructor(private x: number, private y: number, private color?: string) {}
}

export function defaultTile() {
  return {
    x: 0,
    y: 0,
    color: "white",
    isBlock: true,
    isDeadly: false,
  };
}

export default Tile;
