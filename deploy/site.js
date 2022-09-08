const ghpages = require('gh-pages')

ghpages.publish('site', {
    remote: 'gitee',
    message: 'Updates',
    repo: 'https://gitee.com/wellfrog16/thu-xyj.git'
}, (err) => {
    console.log(err)
    console.log('finished')
})
