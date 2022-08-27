const { mixTheme  } = require('vuepress-theme-mix')
const path = require('path')

module.exports = {
    base: '/',
    lang: 'zh-CN',
    title: '清华西游记',
    description: '一款内容丰富的 mud 游戏，这里是它的小百科',
    theme: mixTheme({
        title: '清华西游记',
        navbar: [
            {
                text: '首页',
                link: '/',
            },
            {
                text: '入门指南',
                link: '/guide/',
            },
            {
                text: '基础知识',
                children: [
                    '/guild/', // 门派
                    '/items/', // 道具系统
                ],
            },
            {
                text: '游戏系统',
                children: [
                    '/mission/', // 任务系统
                    '/qujing/', // 取经之路
                    '/danaotiangong/', // 大闹天宫
                    '/features/', // 站点特色
                ],
            },
            {
                text: '玩家心得',
                link: '/experience/',
            },
            {
                text: '其他',
                children: [
                    '/system/changelog/',
                    // {
                    //     text: '更新日志',
                    //     link: 'https://github.com/gavinliu6/vuepress-theme-mix/blob/main/CHANGELOG.md',
                    // },
                ],
            },
        ],
        sidebar: {
            '/guild/': [
                {
                    type: 'link-group',
                    text: '门派总览',
                    link: '',
                    children: [
                        'baixing',
                        'beiming',
                        'fangcun',
                        'hell',
                        'huoyun',
                        'jjf',
                        'longgong',
                        'meishan',
                        'mingwang',
                        'mizong',
                        'moon',
                        'pansidong',
                        'putuo',
                        'wudidong',
                        'wzg',
                        'xueshan',
                    ],
                },
            ],
            '/mission/': [
                {
                    type: 'link-group',
                    text: '任务总览',
                    link: '',
                    children: [
                        'yuantiangang',
                        'lijing',
                        'rulai',
                        'city-defense',
                    ],
                },
            ],
            '/items/': [
                {
                    type: 'link-group',
                    text: '道具系统',
                    link: '',
                    children: [
                        'food',
                        'medicine',
                        'equipment',
                        'book',
                    ],
                },
            ],
            '/features/': [
                {
                    type: 'link-group',
                    text: '游戏特色',
                    link: '',
                    children: [
                        'fabao',
                    ],
                },
            ],
            '/qujing/': [
                {
                    type: 'link-group',
                    text: '取经之路',
                    link: '',
                    children: [
                        'fabao',
                    ],
                },
            ],
            '/experience/': [
                {
                    type: 'link-group',
                    text: '玩家心得',
                    link: '',
                    children: [
                        'zhangsan',
                        'lisi',
                    ],
                },
            ],
        },
    }),
}