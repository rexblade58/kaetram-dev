import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import config from '@kaetram/common/config';

// https://astro.build/config
export default defineConfig({
    srcDir: './',
    output: 'server',
    adapter: node({ mode: 'standalone' }),
    server: { host: config.adminHost, port: config.adminPort },
    vite: {
        server: { strictPort: true },
        define: { globalConfig: config }
    }
});

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
