import Packet from '../packet';

import { Packets } from '@kaetram/common/network';

export type DeathPacketCallback = () => void;

export default class DeathPacket extends Packet {
    public constructor(instance: string) {
        super(Packets.Death, undefined, instance);
    }
}

// packet serialization optimization

// performance optimization for scale

// end-to-end tests and v1.0 release
