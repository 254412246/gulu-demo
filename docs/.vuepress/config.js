module.exports = {
    base: '/Huaji-UI/',
    // theme: 'vuepress-theme-reco',
    title: '滑稽UI',
    // dest: 'public',
    plugins: [
        '@vuepress-reco/extract-code'
    ],
    description: '一个好用的UI框架',
    themeConfig: {
        logo: '/assets/huaji.svg',
        lastUpdated: 'Last Updated',//最后更新时间
        smoothScroll: true,//页面滚动
        noFoundPageByTencent: false,//404 腾讯公益
        nav: [
            {text: '主页', link: '/', icon: 'reco-home'},
            {text: '文档', link: 'docs/startup/', icon: 'reco-document'},
            {text: '交流', link: 'https://github.com/254412246', icon: 'reco-github'},
        ],
        sidebar: {
            '/docs/': [
                {
                    title: '入门',
                    children: [
                        'introduce/',
                        'startup/'
                    ],
                    collapsable: false,
                }, {
                    title: '组件',
                    children: [
                        'components/button',
                        'components/input',
                        'components/grid',
                        'components/tabs',
                        'components/toast',
                    ],
                    collapsable: false,
                }
            ]
        }
    }
}