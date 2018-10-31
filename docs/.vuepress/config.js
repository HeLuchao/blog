module.exports = {
    title: 'HeLuchao Blog',
    description: 'HeLuchao Blog',
    head: [// 注入到当前页面的 HTML <head> 中的标签
        ['link', {rel: 'icon', href: '/favicon.ico'}]
    ],
    base: '/blog/', // 这是部署到github相关的配置
    themeConfig: {
        nav: [
            {text: '学习文档', link: '/blog/'},
            {text: '前端相关', link: '/frontEnd/'},
            {text: '前端框架', link: '/frame/'},
            {text: 'GitHub', link: 'https://github.com/HeLuchao'}, // 内部链接 以docs为根目录
            {text: '博客', link: 'https://github.com/HeLuchao/blog'}, // 外部链接
            // 下拉列表
            {
                text: '框架',
                items: [
                    {text: 'Vue', link: 'https://cn.vuejs.org/v2/guide/'},
                    {text: 'Angular', link: 'https://www.angular.cn/guide/'},
                    {text: 'React', link: 'https://reactjs.org/docs/getting-started.html'},
                    {text: 'ReactNative', link: 'https://reactnative.cn/docs/tutorial.html'},
                    {text: '微信小程序', link: 'https://developers.weixin.qq.com/miniprogram/dev/'}
                ]
            }
        ],
        sidebar: {
            '/frontEnd/': [
                ['/frontEnd/前端性能优化', '前端性能优化'],
                ['/frontEnd/前端规范', '前端规范']
            ],
            '/blog/': [
                {
                    title: 'JavaScript',
                    collapsable: false,
                    children: [
                        ['/blog/JavaScript/学会了ES6，就不会写出那样的代码', '学会了ES6，就不会写出那样的代码']
                    ]
                },
                {
                    title: 'CSS',
                    collapsable: false,
                    children: [
                        ['/blog/CSS/CSS常见布局', 'CSS常见布局'],
                    ]
                },
                {
                    title: 'HTTP',
                    collapsable: false,
                    children: [
                        ['/blog/HTTP/认识HTTP-Cookie和Session篇', '认识HTTP-Cookie和Session篇'],
                    ]
                },
            ],
            '/frame/':[
                {
                    title: 'Angular',
                    collapsable: false,
                    children: [
                        ['/frame/Angular/', 'Angular.js']
                    ]
                },
                {
                    title: 'React',
                    collapsable: false,
                    children: [
                        ['/frame/React/', 'React.js']
                    ]
                },
                {
                    title: 'ReactNative',
                    collapsable: false,
                    children: [
                        ['/frame/ReactNative/', 'ReactNative']
                    ]
                },
                {
                    title: 'Vue',
                    collapsable: false,
                    children: [
                        ['/frame/Vue/', 'Vue.js']
                    ]
                },
                {
                    title: '微信小程序',
                    collapsable: false,
                    children: [
                        ['/frame/WxApp/', '微信小程序']
                    ]
                },
            ]
        },
        sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: 'Last Updated',// 文档更新时间：每个文件git最后提交的时间
        displayAllHeaders: true, // 默认值：false
    }
}
