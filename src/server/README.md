# Server

Colyseus game server with schema-based state synchronization.

## Architecture

- **`schemas.ts`** — `@colyseus/schema` classes (`GameRoomState`, `PlayerState`, `Vector2`)
- **`GameRoom.ts`** — Room lifecycle: `onCreate`, `onJoin`, `onLeave`, message handlers
- **`../server.ts`** — Entry point: `defineServer()` + Vite dev middleware

## State

The server holds:

- World seed and game mode per room
- Connected players map (name, position, velocity, life, score, gold)
- State is automatically synced to clients via `@colyseus/schema`

## Rooms

- `game` — Main game room, max 8 clients, supports `chat` messages
