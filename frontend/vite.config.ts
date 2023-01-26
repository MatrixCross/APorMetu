import { defineConfig } from 'vite';
import path from 'path';
import presets from './presets/presets';

const resolve = (dir) => path.resolve(__dirname, dir);

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [...presets],
    resolve: {
        alias: [
            {
                find: '@',
                replacement: resolve('./src'),
            },
        ],
    },
    server: {
        host: '127.0.0.1',
        port: 3010,
    },
});
