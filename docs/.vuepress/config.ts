const { mixTheme } = require('vuepress-theme-mix')
// import { mixTheme  }  from './theme-mix/node'
// import { getDirname, path } from '@vuepress/utils'
// import { defaultTheme } from '@vuepress/theme-default'
const path = require('path')

// import { registerComponentsPlugin  } from '@vuepress/plugin-register-components'
const { registerComponentsPlugin  } = require('@vuepress/plugin-register-components')
const theme = require('./theme')

// const __dirname = getDirname(import.meta.url)

export default {
    base: '/',
    lang: 'zh-CN',
    title: '清华西游记',
    description: '一款内容丰富的 mud 游戏，这里是它的小百科',
    theme: mixTheme(theme),
    // layouts: path.resolve(__dirname, './theme-mix/client/layouts'),
    plugins: [
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, './components')
        })
    ]
}