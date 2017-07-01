import Quest from '../quest';
import Data from '../../../../../../../data/quests/minersquest2.json';

export default class MinersQuest2 extends Quest {
    public constructor(key: string) {
        super(key, Data);
    }
}

// player entity position and movement

// world state management with spatial grid

// NPC spawning and basic AI pathfinding
