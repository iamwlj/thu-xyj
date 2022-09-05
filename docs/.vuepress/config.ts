const { mixTheme } = require('vuepress-theme-mix')
// import { mixTheme  }  from './theme-mix/node'
// import { getDirname, path } from '@vuepress/utils'
// import { defaultTheme } from '@vuepress/theme-default'
const path = require('path')
const { mudPlugin } = require('./plugins/plugin-mud')

// import { registerComponentsPlugin  } from '@vuepress/plugin-register-components'
const { registerComponentsPlugin  } = require('@vuepress/plugin-register-components')
const theme = require('./theme')

// const __dirname = getDirname(import.meta.url)

module.exports = {
    base: '/',
    // base: '/thu-xyj/',
    lang: 'zh-CN',
    title: '清华西游记',
    description: '一款内容丰富的 mud 游戏，这里是它的小百科',
    theme: mixTheme(theme),
    // layouts: path.resolve(__dirname, './theme-mix/client/layouts'),
    templateDev: path.resolve(__dirname, './templates/dev.html'),
    templateBuild: path.resolve(__dirname, './templates/build.html'),
    plugins: [
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, './components')
        }),
        // mudPlugin(),
    ]
}