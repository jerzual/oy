import { connectAction, disconnectAction } from "../actions/ClientActions";

// A reducer is a function that takes a state and an optional payload, and returns a new state
export function clientReducer(state, payload) {
	return { ...state, counter: state.counter + payload };
}
