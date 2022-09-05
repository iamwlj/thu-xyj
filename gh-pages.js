const ghpages = require('gh-pages')

ghpages.publish('docs/.vuepress/dist', {
    // remote: 'origin',
    message: 'Updates',
}, () => {
    console.log('finished')
})
