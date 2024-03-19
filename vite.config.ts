import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	base: '/test-task-app/',
	plugins: [react()],
	server: {
		proxy: {
			'/api': {
				target: 'https://mockapi.io/projects/65c953efa4fbc162e112c722', // путь
				changeOrigin: true,
			},
		},
	},
	assetsInclude: ['**/*.docx', '**/*.doc', '**/*.pptx', '**/*.pdf'],
})
