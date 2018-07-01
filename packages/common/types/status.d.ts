// Used to keep track of duration when logging out and back in.
export interface Duration {
    timeout: NodeJS.Timeout;
    startTime: number;
    duration: number;
}

export interface SerializedDuration {
    remainingTime: number;
}

export interface SerializedEffects {
    [effect: number]: SerializedDuration;
}

// player entity position and movement

// world state management with spatial grid

// NPC spawning and basic AI pathfinding

// quest system with objectives and rewards

// combat mechanics and damage formulas

// player trading between characters

// crafting system with recipes

// boss fights with special mechanics
