module.exports = {
    dest: 'docs/.build',
    locales: {
        '/cn/': {
            lang: 'zh-CN',
            title: 'TemplateVuepress',
            lastUpdated: 'Last Updated',
        },
        '/en/': {
            lang: 'en-US',
            title: 'TemplateVuepress',
            lastUpdated: 'Last Updated',
        }
    },
    head: [
        ['link', { rel: 'shortcut icon', type: "image/x-icon", href: './favicon.png' }]
    ],
    themeConfig: {
        repo: 'GalAster/TemplateVuepress',
        editLinks: true,
        docsDir: 'docs',
        markdown: {
            lineNumbers: true
        },
        locales: {
            '/cn/': {
                selectText: '选择语言',
                label: '简体中文',
                editLinkText: '在 GitHub 上编辑此页',
                serviceWorker: {
                    updatePopup: {
                        message: "发现新内容可用.",
                        buttonText: "刷新"
                    }
                },
                sidebar: {
                    "cn/": [
                        {
                            title: '附录',
                            collapsable: true,
                            children: [
                                ['appendix', '附录'],
                            ]
                        },
                    ]
                }
            },
            '/en/': {
                selectText: 'Languages',
                label: 'English',
                ariaLabel: 'Languages',
                editLinkText: 'Edit this page on GitHub',
                serviceWorker: {
                    updatePopup: {
                        message: "New content is available.",
                        buttonText: "Refresh"
                    }
                },
                sidebar: {
                    "en/": [
                        {
                            title: 'Appendix',
                            collapsable: true,
                            children: [
                                ['appendix', 'Appendix'],
                            ]
                        },
                    ]
                }
            },
        },
    },
    serviceWorker: true,
    markdown: {
        config: md => {
        }
    },
    plugins: {
        mathjax: {
            target: 'chtml',
            presets: [],
        },
    }
};
