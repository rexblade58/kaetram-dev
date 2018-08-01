/**
 * A class that handles logging.
 *
 * @param level The level of logging to perform.
 */
class Logger {
    public constructor(public level: 'debug' | 'info') {}

    public info(...data: unknown[]): void {
        if (this.level === 'debug' || this.level === 'info') console.info(...data);
    }

    public debug(...data: unknown[]): void {
        if (this.level === 'debug') console.debug(...data);
    }

    public error(...data: unknown[]): void {
        console.error(...data);
    }
}

export default new Logger(import.meta.env.DEV ? 'debug' : 'info');

// WebSocket server with player connections

// tile-based map rendering engine

// collision detection for entities and terrain

// inventory system with item management

// equipment and stats calculations

// packet serialization optimization

// skill tree and level progression system

// bank and storage system

// world map and minimap rendering

// party system for group play
