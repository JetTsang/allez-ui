import {defineConfig} from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vue from '@vitejs/plugin-vue'

import { presetUno, presetAttributify, presetIcons } from "unocss";
import Unocss from "unocss/vite";

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
        Unocss({
            presets: [presetUno(), presetAttributify(), presetIcons()],
        })
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