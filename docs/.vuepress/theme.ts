module.exports = {
    title: '清华西游记',
    docsRepo: 'https://gitee.com/wellfrog16/thu-xyj',
    docsBranch: 'dev',
    docsDir: 'docs',
    editLink: true,
    editLinkText: '编辑此页面',
    lastUpdated: true,
    lastUpdatedText: '最后更新时间',
    contributors: true,
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
                '/dlc/', // 剧情故事
                '/features/', // 站点特色
            ],
        },
        {
            text: '玩家心得',
            link: '/experience/',
        },
        {
            text: '我要完善百科',
            link: '/contribute/help',
        },
        {
            text: '其他',
            children: [
                '/system/tools/',
                {
                    text: '更新日志',
                    link: '/log/game/',
                },
                '/contribute/md/'
                // {
                //     text: '更新日志',
                //     link: 'https://github.com/gavinliu6/vuepress-theme-mix/blob/main/CHANGELOG.md',
                // },
            ],
        },
        {
            text: 'Gitee',
            link: 'https://gitee.com/wellfrog16/thu-xyj',
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
                    'puzzles',
                    'other',
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
                    'neidan',
                    'pet',
                    'zhuanshi',
                ],
            },
        ],
        '/dlc/': [
            {
                type: 'link-group',
                text: '剧情故事',
                link: '',
                children: [
                    '18hell', // 十八层地狱
                    'qujing', // 取经之路
                    'danaotiangong', // 大闹天宫
                    'tianjie', // 天劫
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
        '/log/': [
            'game',
            'site',
        ],
        '/contribute/': [
            'help',
            'md',
        ]
    },
}