import { hopeTheme } from 'vuepress-theme-hope'
import navbar from './navbar'
import sidebar from './sidebar'

export default hopeTheme({
  logo: '/images/logo.svg',

  repo: 'yzqdev/baike',

  docsDir: 'docs',
  iconPrefix: 'iconfont icon-',
  // theme-level locales config

  // navbar
  navbar: navbar,
  themeColor: false,
  // sidebar
  sidebar: sidebar,
  footer: `powered by <a href='https://vuepress-theme-hope.github.io/v2/'>vuepress-theme-home</a>`,

  displayFooter: true,


})
