import { Reducer } from "reactive-state";
import { AppState } from "../initialState";

const routeReducer: Reducer<AppState, string> = (
  state: AppState,
  payload: string,
) => {
  const newState: AppState = { ...state, route: payload };
  return newState;
};
