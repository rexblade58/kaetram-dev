import Skill from '../skill';

import { Modules } from '@kaetram/common/network';

export default class Magic extends Skill {
    public override combat = true;

    public constructor() {
        super(Modules.Skills.Magic);
    }
}

// WebSocket server with player connections

// tile-based map rendering engine

// collision detection for entities and terrain

// inventory system with item management
