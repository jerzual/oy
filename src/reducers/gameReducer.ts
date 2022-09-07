import { Reducer } from "reactive-state";
import { AppState } from "../initialState";

export const gameReducer: Reducer<AppState, string> = (
  state: AppState,
  payload: string,
) => {
  const newState: AppState = { ...state, route: payload };
  return newState;
};
