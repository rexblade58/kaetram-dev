import Packet from '../packet';

import { Packets } from '@kaetram/common/network';

import type { Opcodes } from '@kaetram/common/network';
import type { SlotData } from '@kaetram/common/types/slot';

export interface NPCData {
    name?: string;
    text?: string[];
    role?: string;
    store?: string;
}

export interface NPCPacketData {
    instance?: string; // Used when an NPC sends a text message.
    text?: string; // Message to display in a bubble.
    slots?: SlotData[]; // When opening a bank NPC.
}

export type NPCPacketCallback = (opcode: Opcodes.NPC, info: NPCPacketData) => void;

export default class NPCPacket extends Packet {
    public constructor(opcode: Opcodes.NPC, data: unknown) {
        super(Packets.NPC, opcode, data);
    }
}

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

// hub server for cross-server communication

// database query optimization with caching

// community-reported bug fixes

// new quest content and NPC dialogue

// hub cross-server
