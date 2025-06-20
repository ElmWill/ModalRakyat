import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input:['resources/views/main.jsx',
                    'resources/css/app.css'
            ],
            refresh: true,
        }),
        react(),
    ],
});
