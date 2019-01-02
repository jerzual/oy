import { Reducer } from "reactive-state";
import { AppState } from "../initialState";

const messageReducer: Reducer<AppState, string> = (
  state: AppState,
  payload: string,
) => {
  const newState: AppState = { ...state, route: payload };
  return newState;
};
