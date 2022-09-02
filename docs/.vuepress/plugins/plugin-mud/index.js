const shiki = require('shiki')
// import { shikiPlugin } from '@vuepress/plugin-shiki'

exports.mudPlugin = () => ({
    name: '@vuepress/plugin-mud',

    extendsMarkdown: async (md) => {
        const highlighter = await shiki.getHighlighter({ theme: 'nord', langs: [] })
        md.options.highlight = (code, lang) => {
            console.log(lang)
            // console.log(code)
            // const highlighter = await (0, shiki.getHighlighter)({ theme: 'nord', langs: [] });
            // if (lang === 'mud') {
            //     const result =  highlighter.codeToHtml(code, {lang})
            //     return result
            // }
            // const a = 'asdasd';
            // return code;
            const cc =  highlighter.codeToHtml(code, {lang})
            // return cc.replace('已有小成', '<a href="#">已有小成</a>')
            return cc
        }
    },
})