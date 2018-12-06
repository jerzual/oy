export interface Options {
  video: {
    screenRatio: number;
    resolution: { width: number; height: number };
  };
  gameplay?: {
    debug: boolean;
    effects: boolean;
    fieldOfView: boolean;
  };
  controls: {
    type: "keyboard" | "gamepad";
    mapping?: {};
  };
}

export function defaultOptions(): Options {
  return {
    video: {
      screenRatio: 16 / 9,
      resolution: {
        width: 1280,
        height: 720,
      },
    },
    controls: {
      type: "keyboard",
    },
  };
}
