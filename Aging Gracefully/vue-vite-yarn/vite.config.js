import { defineConfig,loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import { createStyleImportPlugin } from 'vite-plugin-style-import'
import { resolve } from 'path'

import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import serverConfig from "./src/config";

export default ({command, mode}) => defineConfig({
  plugins: [
    vue(),
	AutoImport({
		resolvers: [ElementPlusResolver()],
	  }),
	  Components({
		resolvers: [ElementPlusResolver(),VantResolver()],
	  }),
	createStyleImportPlugin({
	      resolves: [{
	          libraryName: '@nutui/nutui',
	          libraryNameChangeCase: 'pascalCase',
	          resolveStyle: (name) => {
	            return `@nutui/nutui/dist/packages/${name.toLowerCase()}/index.scss`
	          },
	      }]
	}),
  ], 
  css: {
    preprocessorOptions: {
      scss: {
        // 配置 nutui 全局 scss 变量
        additionalData: `@import "@nutui/nutui/dist/styles/variables.scss";`
      }
    }
  },
    // 添加别名解析配置
  resolve: {
     alias: [
		{ find: '@', replacement: resolve(__dirname, 'src') },
		{ find: '_c', replacement: resolve(__dirname, 'src/components') },
		{ find: '_v', replacement: resolve(__dirname, 'src/views') },
	],
  },
	server: {
		// host: true,
		// hmr: true,
		proxy: {
			'/api': {
				// 根据不同运行环境加载不同的配置文件
				target: loadEnv(mode, process.cwd()).VITE_API_TARGET_URL,
				// 根据配置文件加载
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, '')
			}
		}
	},
});