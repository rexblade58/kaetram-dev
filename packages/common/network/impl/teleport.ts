import Packet from '../packet';

import { Packets } from '@kaetram/common/network';

export interface TeleportPacketData {
    instance: string; // Main entity involved in the teleportation.
    x: number; // x coordinate of the teleportation.
    y: number; // y coordinate of the teleportation.
    withAnimation?: boolean;
}

export type TeleportPacketCallback = (info: TeleportPacketData) => void;

export default class TeleportPacket extends Packet {
    public constructor(data: TeleportPacketData) {
        super(Packets.Teleport, undefined, data);
    }
}

// WebSocket server with player connections

// tile-based map rendering engine

// collision detection for entities and terrain

// inventory system with item management

// equipment and stats calculations

// packet serialization optimization
