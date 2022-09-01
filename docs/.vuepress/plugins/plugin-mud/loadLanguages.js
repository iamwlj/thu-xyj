
const Prism = require('prismjs')
const rawLoadLanguages = require('prismjs/components/index.js')

// prevent warning messages
rawLoadLanguages.silent = true

exports.loadLanguages = (languages) => {
    const langsToLoad = languages.filter((item) => !Prism.languages[item])
    if (langsToLoad.length) {
        rawLoadLanguages(langsToLoad)
    }
}