export interface HitData {
    type: Modules.Hits;
    damage: number;
    ranged?: boolean;
    aoe?: number;
    terror?: boolean;
    poison?: boolean;
    skills?: string[];
}

// player entity position and movement

// world state management with spatial grid
