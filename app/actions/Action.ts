/**
 * Different actions emitted by client/player
 */
export enum ActionTypes {
  Connect = "connection",
  Disconnect = "disconnect",
  Join = "join",
  Enter = "enter",
  Leave = "leave",
  Velocity = "velocity",
  Position = "position",
  Talk = "talk",
  Pick = "pick",
  Drop = "drop",
  Shoot = "shoot",
}

export interface Action {
  type: ActionTypes;
}

export class ConcreteAction implements Action {
  constructor(public type: ActionTypes) {
    
  }
}
