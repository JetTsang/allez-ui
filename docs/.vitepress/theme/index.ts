import Theme from 'vitepress/dist/client/theme-default'
import AllezUI from '../../../src/entry'
import 'vitepress-theme-demoblock/theme/styles/index.css'
// 插件的组件，主要是demo组件
import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'
export default {
  ...Theme,
  enhanceApp({ app }) { // 在这里注册组件库
    app.use(AllezUI)
    app.component('Demo', Demo)
    app.component('DemoBlock', DemoBlock)
  },
}