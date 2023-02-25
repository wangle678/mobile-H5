import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import legacy from '@vitejs/plugin-legacy'
import { resolve } from 'node:path'
import { KNOWN_ASSET_TYPES } from './src/utils/resourceExpansion'   // 资源扩展名

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    plugins: [
      vue(),
      Components({
        resolvers: [VantResolver()]
      }),
      legacy({
        targets: ['defaults', 'not IE 11']
      }),
      vueJsx()
    ],
    define: {
      'process.env': {}
    },
    resolve: {
      alias: [{
        find: "@",
        replacement: resolve(__dirname, "./src")
      }, {
        find: "@components",
        replacement: resolve(__dirname, "./src/components")
      }]
    },
    // assetsInclude: ['**/*.gltf'],
    assetsInclude: KNOWN_ASSET_TYPES,
    server: {
      open: true,
      proxy: {
        '/api': {
          target: "https://xxxx.com/",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },
    build: {
      //指定输出路径
      outDir: "dist",
      //生成静态资源的存放路径
      assetsDir: "assets",
      //小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 0 可以完全禁用此项
      assetsInlineLimit: 4096,
      //启用/禁用 CSS 代码拆分
      cssCodeSplit: true,
      //构建后是否生成 source map 文件
      sourcemap: false,
      //自定义底层的 Rollup 打包配置
      rollupOptions: {
        input: {//可以配置多个，表示多入口
          index: resolve(__dirname, "index.html"),
          // project:resolve(__dirname,"project.html")
        },
        output: {
          // chunkFileNames:'static/js/[name]-[hash].js',
          // entryFileNames:"static/js/[name]-[hash].js",
          // assetFileNames:"static/[ext]/name-[hash].[ext]"
        }
      },
      //默认情况下，若 outDir 在 root 目录下，则 Vite 会在构建时清空该目录。
      emptyOutDir: true,
      //chunk 大小警告的限制
      chunkSizeWarningLimit: 500
    }
  }
})