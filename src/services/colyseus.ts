import { Client, Room } from "@colyseus/sdk";

export const client = import.meta.env.SSR
	? null
	: new Client(`ws://${window.location.hostname}:4000`);

let currentRoom: Room | null = null;

export async function joinGame(seed: string, name: string): Promise<Room> {
	if (!client) throw new Error("Colyseus client is not available on the server");
	currentRoom = await client.joinOrCreate("game", { seed, name });
	return currentRoom;
}

export function getRoom(): Room | null {
	return currentRoom;
}
