import { Store } from "reactive-state";
import { Subject } from "rxjs";
import io from "socket.io";

export interface ClientState {
	ioClient: io.Client;
	//
	ipAdress?: string;
	// date timestamp
	lastSeen?: number;
}

export interface LevelState {
	gameMode: "freeroam" | "special";
	size: { w: number; h: number };
	decor: {};
	entities: {};
}
export interface ServerState {
	clients: { [id: string]: ClientState };
	worlds?: { [id: string]: LevelState };
}

export const getInitialServerState = (): ServerState => {
	return {
		clients: {},
	};
};
