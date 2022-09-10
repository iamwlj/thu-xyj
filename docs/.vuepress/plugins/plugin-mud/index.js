const shiki = require('shiki')
// import { shikiPlugin } from '@vuepress/plugin-shiki'

exports.mudPlugin = () => ({
    name: '@vuepress/plugin-mud',

    extendsMarkdown: async (md) => {
        const highlighter = await shiki.getHighlighter({ theme: 'nord', langs: [] })
        md.options.highlight = (code, lang) => {
            if (lang === 'mud') {
                const result =  highlighter.codeToHtml(code, {lang: 'html'})
                return result;
            }

            if (lang === 'content') {
                return code;
            }
            return highlighter.codeToHtml(code, {lang});
        }
    },
})