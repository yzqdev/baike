import { defineUserConfig } from '@vuepress/cli'
import { searchProPlugin } from 'vuepress-plugin-search-pro'
import theme from './themeConfig'
export default defineUserConfig({
  base: '/baike/',
  dest: './dist',
  locales: {
    '/': {
      // 设置正在使用的语言
      lang: 'zh-CN',
    },
  },
  head: [
    [
      'link',
      {
        rel: 'icon',

        href: `/baike/images/logo.svg`,
      },
    ],

    [
      'link',
      {
        rel: 'stylesheet',
        href: '//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css',
      },
    ],
    [
      'link',
      {
        //我的vscodeiconfont库
        rel: 'stylesheet',
        href: '//at.alicdn.com/t/font_3267094_1gli0nmxpsr.css',
      },
    ],
  ],

  // site-level locales config

  lang: 'zh-CN',
  title: '百科',
  description: 'A simple baike',

  theme: theme,

  plugins: [
    searchProPlugin({
      indexContent: true,
    }),
  ],
})
