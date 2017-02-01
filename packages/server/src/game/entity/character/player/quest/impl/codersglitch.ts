import Quest from '../quest';
import Data from '../../../../../../../data/quests/codersglitch.json';

export default class CodersGlitch extends Quest {
    public constructor(key: string) {
        super(key, Data);
    }
}

// WebSocket server with player connections
