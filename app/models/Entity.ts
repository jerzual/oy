import Matter from 'matter-js';
import PIXI from 'pixi.js';

class Entity{
  constructor(){
    //mater.js Physics object
    this.body = {};
    //PIXI.js sprite
    this.sprite = {};
    this.textureName = 'default';
  }
  update(){
    //TODO connect
  }
  initObjects(){
    this.sprite = new PIXI.Sprite();
    this.body = new Matter.Body();
  }
}

export default Entity;
