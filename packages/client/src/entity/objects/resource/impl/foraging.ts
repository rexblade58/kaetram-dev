import Resource from '../resource';

import { Modules } from '@kaetram/common/network';

export default class Foraging extends Resource {
    public constructor(instance: string) {
        super(instance, Modules.EntityType.Foraging);
    }
}

// player entity position and movement

// world state management with spatial grid

// NPC spawning and basic AI pathfinding

// quest system with objectives and rewards

// combat mechanics and damage formulas
