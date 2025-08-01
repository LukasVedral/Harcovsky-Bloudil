import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    root: 'src',
    publicDir: '../public',
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/index.html'),
                about: resolve(__dirname, 'src/about.html'),
                contact: resolve(__dirname, 'src/contact.html'),
                applications: resolve(__dirname, 'src/applications.html'),
                gallery: resolve(__dirname, 'src/gallery.html'),
                proposition: resolve(__dirname, 'src/proposition.html'),
                years: resolve(__dirname, 'src/years.html'),
                admin: resolve(__dirname, 'src/admin/index.html'),
            }
        }
    }
})