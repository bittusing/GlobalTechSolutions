import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': '/src',
            '@components': '/src/components',
            '@pages': '/src/pages',
            '@styles': '/src/styles',
            '@assets': '/src/assets',
        },
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom', 'react-router-dom'],
                },
                assetFileNames: (assetInfo) => {
                    // Organize assets by type
                    const info = assetInfo.name?.split('.') || []
                    const ext = info[info.length - 1]
                    if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp/i.test(ext)) {
                        return `assets/images/[name]-[hash][extname]`
                    }
                    if (/mp4|webm|ogg|mp3|wav|flac|aac/i.test(ext)) {
                        return `assets/media/[name]-[hash][extname]`
                    }
                    return `assets/[name]-[hash][extname]`
                },
            },
        },
        cssCodeSplit: true,
        sourcemap: false,
        minify: 'esbuild', // Use esbuild for faster builds
        chunkSizeWarningLimit: 1000,
    },
    server: {
        port: 5173,
        open: true,
    },
    optimizeDeps: {
        include: ['react', 'react-dom', 'react-router-dom'],
    },
})
