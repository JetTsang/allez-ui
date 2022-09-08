import {defineConfig} from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vue from '@vitejs/plugin-vue'

import Unocss from './src/config/unocss'

// rollup配置项
const rollupOptions = {
    external:['vue','vue-router'],
    output:{
        globals:{
            vue:'Vue'
        }
    }
}

export default defineConfig({
    plugins:[
        vue(),
        vueJsx({
            // options are passed on to @vue/babel-plugin-jsx
        }),
        // 添加UnoCSS插件
        Unocss()
    ],
    build:{
        rollupOptions,
        minify:false,
        lib:{
            entry:'./src/entry.ts',
            name: "AllezUI",
            fileName: "allez-ui",
            // 导出模块格式
            formats: ["esm", "umd","iife"],
        }
    }
})