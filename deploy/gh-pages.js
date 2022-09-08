const ghpages = require('gh-pages')

ghpages.publish('docs/.vuepress/dist', {
    remote: 'origin',
    message: 'Updates',
    repo: 'https://github.com/wellfrog16/thu-xyj.git'
}, (err) => {
    console.log(err)
    console.log('finished')
})
