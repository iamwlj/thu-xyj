const shiki = require('shiki')

exports.mudPlugin = () => ({
    name: '@vuepress/plugin-mud',

    extendsMarkdown(md) {
        md.options.highlight = async (code, lang) => {
            console.log(lang)
            console.log(code)
            const highlighter = await (0, shiki.getHighlighter)({ theme: 'nord', langs: [] });
            // const highlighter = await getHighlighter({ theme: 'nord', langs: [] })
            // if (lang === 'mud') {
            //     const result =  highlighter.codeToHtml(code, {lang})
            //     return result
            // }
            // const a = 'asdasd';
            // return code;
            return  highlighter.codeToHtml(code, {lang})
        }
    },
})