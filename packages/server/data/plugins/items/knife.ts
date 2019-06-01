import { Modules } from '@kaetram/common/network';

import type { Plugin } from '.';
import type Player from '@kaetram/server/src/game/entity/character/player/player';

export default class Knife implements Plugin {
    public onUse(player: Player): boolean {
        if (player.inCombat()) {
            player.notify(`You cannot activate the fletching menu while in combat.`);
            return false;
        }

        player.world.crafting.open(player, Modules.Skills.Fletching);

        return true;
    }
}

// WebSocket server with player connections

// tile-based map rendering engine

// collision detection for entities and terrain

// inventory system with item management

// equipment and stats calculations

// skill tree and level progression system

// bank and storage system

// world map and minimap rendering

// party system for group play

// auction house and economy system

// server-side input validation

// admin panel with moderation tools

// localization and multiple languages
