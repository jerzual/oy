  import GamePad from 'react-gamepad';
import Controller from './Controller';

  class GamePadController extends Controller {
      render() {
          return <Gamepad
      gamepadIndex={Number}
      stickThreshold={Number}
      deadZone={Number}
      layout={Object}
 
      onConnect={(gamepadIndex) => {}}
      onDisconnect={(gamepadIndex) => {}}
 
      onButtonDown={(buttonName) => {}}
      onButtonUp={(buttonName) => {}}
      onButtonChange={(buttonName, pressed) => {}}
      onAxisChange={(axisName, value, previousValue) => {}}
 
      onA={() => {}}
      onB={() => {}}
      onX={() => {}}
      onY={() => {}}
 
      onStart={() => {}}
      onBack={() => {}}
 
      onLT={() => {}}
      onRT={() => {}}
 
      onLB={() => {}}
      onRB={() => {}}
 
      onLS={() => {}}
      onRS={() => {}}
 
      onUp={() => {}}
      onDown={() => {}}
      onLeft={() => {}}
      onRight={() => {}}
    />;
      }
    }