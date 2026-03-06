// @vitest-environment node
import { ColyseusTestServer, boot } from "@colyseus/testing";
import { describe, beforeAll, afterAll, beforeEach, test, expect } from "vitest";
import appConfig from "./app.config";

describe("Colyseus game server", () => {
	let colyseus: ColyseusTestServer;

	beforeAll(async () => {
		colyseus = await boot(appConfig);
	});
	afterAll(async () => await colyseus.shutdown());
	beforeEach(async () => await colyseus.cleanup());

	test("should allow a client to connect to a game room", async () => {
		const room = await colyseus.createRoom("game", {});
		const client1 = await colyseus.connectTo(room);
		expect(client1.sessionId).toEqual(room.clients[0].sessionId);
	});

	test("should track players in state on join", async () => {
		const room = await colyseus.createRoom("game", {});
		const client1 = await colyseus.connectTo(room, { name: "Alice" });

		expect(room.state.players.size).toBe(1);
		const player = room.state.players.get(client1.sessionId);
		expect(player).toBeDefined();
		expect(player!.name).toBe("Alice");
		expect(player!.sessionId).toBe(client1.sessionId);
	});

	test("should remove player from state on leave", async () => {
		const room = await colyseus.createRoom("game", {});
		const client1 = await colyseus.connectTo(room, { name: "Alice" });

		expect(room.state.players.size).toBe(1);

		await client1.leave();

		expect(room.state.players.size).toBe(0);
	});

	test("should use default name when none provided", async () => {
		const room = await colyseus.createRoom("game", {});
		const client1 = await colyseus.connectTo(room);

		const player = room.state.players.get(client1.sessionId);
		expect(player!.name).toBe("Player");
	});

	test("should set seed from options", async () => {
		const room = await colyseus.createRoom("game", { seed: "TESTSD" });

		expect(room.state.seed).toBe("TESTSD");
	});

	test("should generate a seed when none provided", async () => {
		const room = await colyseus.createRoom("game", {});

		expect(room.state.seed).toBeTruthy();
		expect(room.state.seed.length).toBeGreaterThan(0);
	});

	test("should support multiple clients in the same room", async () => {
		const room = await colyseus.createRoom("game", {});
		const client1 = await colyseus.connectTo(room, { name: "Alice" });
		const client2 = await colyseus.connectTo(room, { name: "Bob" });

		expect(room.state.players.size).toBe(2);
		expect(room.state.players.get(client1.sessionId)!.name).toBe("Alice");
		expect(room.state.players.get(client2.sessionId)!.name).toBe("Bob");
	});
});
