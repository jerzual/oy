import Entity from './Entity';
/**
 * an item is something you can pick up.
 */
class Item extends Entity{
    initialize() {

    }
}
Item.defaultValues = {
    'name': 'item name',
        //infinite durability
        'durability': 1
};

export default Item;
