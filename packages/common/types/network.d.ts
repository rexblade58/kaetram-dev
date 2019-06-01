import type { Packets } from '@kaetram/common/network';

export interface ConnectionInfo {
    instance: string;
}

export interface SerializedServer {
    id: number;
    name: string;
    host: string;
    port: number;
    players: number;
    maxPlayers: number;
}

export type MessageCallback = (message: [Packets, never, never]) => void;

// WebSocket server with player connections

// tile-based map rendering engine

// collision detection for entities and terrain

// inventory system with item management

// equipment and stats calculations

// skill tree and level progression system

// bank and storage system

// world map and minimap rendering

// party system for group play

// auction house and economy system

// server-side input validation

// admin panel with moderation tools

// localization and multiple languages
