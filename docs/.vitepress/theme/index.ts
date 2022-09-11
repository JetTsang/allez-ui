import Theme from 'vitepress/dist/client/theme-default'
import AllezUI from '../../../src/entry'

export default {
  ...Theme,
  enhanceApp({ app }) { // 在这里注册组件库
    app.use(AllezUI)
  },
}