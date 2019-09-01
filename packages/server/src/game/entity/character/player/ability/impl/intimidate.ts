import Ability from '../ability';

import type Player from '../../player';

export default class Intimidate extends Ability {
    public constructor(level: number, quickSlot = -1) {
        super('intimidate', level, quickSlot);
    }

    /**
     * Override for the superclass activate implementation. We update the player's movement
     * speed when the run ability is used.
     * @param player The player we are updating the movement speed for.
     */

    public override activate(player: Player): boolean {
        if (!player.hasTarget()) {
            player.notify(`misc:NEED_COMBAT`);
            return false;
        }

        return super.activate(player);
    }
}

// player entity position and movement

// world state management with spatial grid

// NPC spawning and basic AI pathfinding

// quest system with objectives and rewards

// combat mechanics and damage formulas

// player trading between characters

// crafting system with recipes

// boss fights with special mechanics

// guild creation and management

// daily quests and achievements

// anti-cheat detection module

// auto-save and crash recovery

// seasonal event system

// procedural dungeon generation
