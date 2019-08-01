import MongoDB from './mongodb/mongodb';

import config from '@kaetram/common/config';
import log from '@kaetram/common/util/log';

import type { DatabaseTypes } from '@kaetram/common/types/database';

export type DatabaseType = MongoDB | null;

export default class Database {
    private database: DatabaseType = null;

    public constructor(databaseType: DatabaseTypes) {
        switch (databaseType) {
            case 'mongo':
            case 'mongodb': {
                this.database = new MongoDB(
                    config.mongodbHost,
                    config.mongodbPort,
                    config.mongodbUser,
                    config.mongodbPassword,
                    config.mongodbDatabase,
                    config.mongodbTls,
                    config.mongodbSrv,
                    config.mongodbAuthSource
                );
                break;
            }

            default: {
                log.error(`The database ${databaseType} could not be found.`);
                break;
            }
        }
    }

    public getDatabase(): DatabaseType {
        if (!this.database)
            log.error(
                '[Database] No database is currently present. It is advised against proceeding in this state.'
            );

        return this.database;
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

// hub server for cross-server communication
