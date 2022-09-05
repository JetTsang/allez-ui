import {defineConfig} from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vue from '@vitejs/plugin-vue'
export default defineConfig({
    plugins:[
        vue(),
        vueJsx({
            // options are passed on to @vue/babel-plugin-jsx
        })
    ]
})