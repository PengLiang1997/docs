module.exports = {
    title: "HapyTeam用户手册",
    head: [
        ['link', { rel: 'icon', href: '/home.ico' }]
      ],
    themeConfig: {
      logo: '/assets/img/home.png',
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
          path: '/pages/',
          collapsable: true,
          sidebarDepth: 3,
          children: [
            '/pages/login',
            '/pages/mainpage'
          ],
          initialOpenGroupIndex: -1
        },
        {
            title: '快速上手',
            path: '/pages/gostart/',
            collapsable: true,
            sidebarDepth: 3,
            children: [
                {
                    title: '项目首页',
                    path: '/pages/gostart/project management/',
                    collapsable: true,
                    sidebarDepth: 3,
                    children: [
                        '/pages/gostart/project management/',
                        {
                            title: '项目模板',
                            path: '/pages/gostart/project management/Create project template',
                            collapsable: true,
                            sidebarDepth: 3,
                            children: [
                              '/pages/gostart/project management/Create project template',
                              '/pages/gostart/project management/Project template management'
                            ],
                          },
                        '/pages/gostart/project management/delete project',
                        {
                            title: '项目成员管理',
                            path: '/pages/gostart/project management/Invite members',
                            collapsable: true,
                            sidebarDepth: 3,
                            children: [
                              '/pages/gostart/project management/Invite members',
                              '/pages/gostart/project management/remove members'
                            ],
                          },
                        {
                            title: '项目设置',
                            path: '/pages/gostart/project management/jurisdiction',
                            collapsable: true,
                            sidebarDepth: 3,
                            children: [
                              '/pages/gostart/project management/Basic attribute settings',
                              '/pages/gostart/project management/jurisdiction',
                              '/pages/gostart/project management/project attribute',
                              '/pages/gostart/project management/life cycle',
                              '/pages/gostart/project management/Edition',
                            ],
                          },
                        '/pages/gostart/project management/Project label',
                        '/pages/gostart/project management/Project status',
                        '/pages/gostart/project management/Project dynamics',
                        '/pages/gostart/project management/Project display',
                    ],
                  },
                {
                    title: '项目文件管理',
                    path: '/pages/gostart/project',
                    collapsable: true,
                    sidebarDepth: 3,
                    children: [
                      '/pages/gostart/project',
                      '/pages/gostart/project/upload file',
                      '/pages/gostart/project/view file',
                      '/pages/gostart/project/checkin file',
                      '/pages/gostart/projectcheckout file',
                      '/pages/gostart/project/undo checkout file',
                      '/pages/gostart/project/Change file status',
                      '/pages/gostart/project/attach files',
                      '/pages/gostart/project/delete file',
                      '/pages/gostart/project/package file',
                      '/pages/gostart/project/share file',
                      '/pages/gostart/project/download file',
                      '/pages/gostart/project/search for file',
                      '/pages/gostart/project/File list settings',
                      '/pages/gostart/project/Collection file'
                    ],
                  },
                
            ],
            initialOpenGroupIndex: -1
          }
      ]
    }
  }

  