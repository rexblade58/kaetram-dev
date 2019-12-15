import type { Bonuses, Enchantments, Stats } from './item';

export type SlotType = 'inventory' | 'bank';

export interface SerializedContainer {
    username?: string;
    slots: SlotData[];
}

export interface SlotData {
    index: number;
    key: string;
    count: number;
    enchantments: Enchantments;
    name?: string;
    description?: string;
    edible?: boolean;
    interactable?: boolean;
    equippable?: boolean;
    price?: number;
    attackStats?: Stats;
    defenseStats?: Stats;
    bonuses?: Bonuses;
}

// packet serialization optimization

// performance optimization for scale

// end-to-end tests and v1.0 release
