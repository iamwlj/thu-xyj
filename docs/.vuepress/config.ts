const { mixTheme } = require('vuepress-theme-mix')
// import { getDirname, path } from '@vuepress/utils'
// import { defaultTheme } from '@vuepress/theme-default'
const path = require('path')
const { mudPlugin } = require('./plugins/plugin-mud')

const { registerComponentsPlugin  } = require('@vuepress/plugin-register-components')
const theme = require('./theme')

// const __dirname = getDirname(import.meta.url)

// - https://docs.layer0.co/guides/vuepress
// - https://app.layer0.co/

const getBase = () => {
    const deploy = process?.env?.deploy
    if (deploy === 'gh') return '/thu-xyj/' // github
    return '/'  // default, layer0
}

module.exports = {
    base: getBase(),
    lang: 'zh-CN',
    title: '清华西游记',
    description: '一款内容丰富的 mud 游戏，这里是它的小百科',
    theme: mixTheme(theme),
    // layouts: path.resolve(__dirname, './theme-mix/client/layouts'),
    templateDev: path.resolve(__dirname, './templates/dev.html'),
    templateBuild: path.resolve(__dirname, './templates/build.html'),
    markdown: {
        code: {
            lineNumbers: false,
        }
    },
    plugins: [
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, './components')
        }),
        mudPlugin(),
    ]
}