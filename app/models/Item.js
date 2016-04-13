import Entity from './Entity';
/**
 * an item is something you can pick up.
 */
class Item extends Entity{
    static defaults: {
        'name': 'item name',
        //infinite durability
        'durability': 1
    }
    initialize() {

    }
}

export default Item;
