
class Tile{
  constructor(args){
    this.x = args.x || 0;
    this.y = args.y || 0;
  }
    initialize() {

    }

    static defaultValues : {
        x: 0,
        y: 0,
        color: 'white',
        isInARoom: false,
        isWalkable: true,
        isDeadly: false
    }
}

export default Tile;
