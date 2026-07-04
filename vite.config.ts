import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
        }),
        react({
            babel: {
                plugins: ['babel-plugin-react-compiler'],
            },
        }),
        tailwindcss(),
    ],
    server: {
        host: '0.0.0.0', // Разрешаем доступ из Docker
        port: 5173,
        strictPort: true,
        watch: {
            usePolling: true, // Нужно для Docker
        },
        hmr: {
            host: 'localhost', // или ваш IP
            port: 5173,
        },
    },
    esbuild: {
        jsx: 'automatic',
    },
});
