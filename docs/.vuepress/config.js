module.exports = {
    themeConfig: {
      logo: '/assets/img/hapyteam.png',
      nav: [
        { text: '首页', link: '/' },
        { text: '用户手册', link: '/pages/' },
        {
          text: '语言',
          items: [
            { text: '简体中文', link: '/' },
            { text: 'English', link: '/pages/' }
            ]
        },
        { text: '试用环境', link: 'http://192.168.1.88/#/home' },
      ],
      sidebar: [
        {
          title: '介绍',   
          path: '/pages/',
          collapsable: true,
          sidebarDepth: 3,
          children: [
            '/pages/'
          ]
        },

        {
          title: '产品主界面功能概述',
          children: [
            '/pages/login',
            '/pages/mainpage'
          ],
          initialOpenGroupIndex: -1
        }
      ]
    }
  }