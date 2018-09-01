import type { Modules } from '@kaetram/common/network';

export default class Ability {
    public active = false;

    public constructor(
        public type: Modules.AbilityType,
        public key: string,
        public level: number,
        public quickSlot = -1
    ) {}

    /**
     * Updates the ability information.
     * @param level New level to set the ability to.
     */

    public update(level: number, quickSlot = this.quickSlot): void {
        this.level = level;
        this.quickSlot = quickSlot;
    }

    /**
     * Updates the active status of the ability.
     */

    public toggle(): void {
        this.active = !this.active;
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
