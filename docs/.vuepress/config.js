module.exports = {
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'HapyTeam'
    },
    '/home/': {
      lang: 'en-US',
      title: 'HapyTeam'
    }
  },
  title: "HapyTeam用户手册",
  head: [
      ['link', { rel: 'icon', href: '/home.ico' }]
    ],
  themeConfig: {
    logo: '/assets/img/home.png',
    themeConfig: {
      search: false,
      searchMaxSuggestions: 10
    },
    locales: {
      '/': {
        selectText: '语言',
        label: '简体中文',
        ariaLabel: '语言',
        editLinkText: 'Edit this page on GitHub',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        algolia: {},
        nav: [
          { text: '首页', link: '/' },
          { text: '用户手册', link: '/pages/' },
          { text: '简体中文', link: '/' },
          { text: '试用环境', link: 'https://hapyteam.com/' },
            ],
          sidebar: {
            '/': [
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
                  path: '/pages/gostart/project management/',
                  collapsable: true,
                  sidebarDepth: 99,
                  children: [
                      {
                          title: '项目首页',
                          path: '/pages/gostart/project management/',
                          collapsable: true,
                          sidebarDepth: 10,
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
                                  path: '/pages/gostart/project management/Basic attribute settings',
                                  collapsable: true,
                                  sidebarDepth: 10,
                                  children: [
                                    '/pages/gostart/project management/Basic attribute settings',
                                    '/pages/gostart/project management/jurisdiction',
                                    '/pages/gostart/project management/life cycle'
                                  ],
                                },
                              '/pages/gostart/project management/Project label',
                              '/pages/gostart/project management/Project status',
                              '/pages/gostart/project management/Project dynamics',
                              '/pages/gostart/project management/Project display',
                          ],
                          initialOpenGroupIndex: -1
                        },
                      {
                          title: '项目文件管理',
                          path: '/pages/gostart/project/',
                          collapsable: true,
                          sidebarDepth: 20,
                          children: [
                              '/pages/gostart/project/',
                              '/pages/gostart/project/upload file',
                              '/pages/gostart/project/view file',
                              '/pages/gostart/project/checkin file',
                              '/pages/gostart/project/checkout file',
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
                          initialOpenGroupIndex: -1
                        },
                      {
                          title: '生命周期管理',
                          path: '/pages/gostart/setup/',
                          collapsable: true,
                          sidebarDepth: 20,
                          children: [
                              '/pages/gostart/setup/',
                              '/pages/gostart/setup/edit lifecycle',
                              '/pages/gostart/setup/copy lifecycle',
                              '/pages/gostart/setup/Lifecycle node management',
                              '/pages/gostart/setup/delete lifecycle'
                          ],
                          initialOpenGroupIndex: -1
                        },
                      {
                          title: '版次管理',
                          path: '/pages/gostart/setup/create Revision',
                          collapsable: true,
                          sidebarDepth: 20,
                          children: [
                              '/pages/gostart/setup/create Revision',
                              '/pages/gostart/setup/edit Revision',
                              '/pages/gostart/setup/Version node management',
                              '/pages/gostart/setup/delete Revision'
                          ],
                          initialOpenGroupIndex: -1
                        },
                      {
                          title: '属性模板管理',
                          path: '/pages/gostart/setup/create attribute',
                          collapsable: true,
                          sidebarDepth: 20,
                          children: [
                              '/pages/gostart/setup/create attribute',
                              '/pages/gostart/setup/edit attribute',
                              '/pages/gostart/setup/Attribute management',
                              '/pages/gostart/setup/delete attribute'
                          ],
                          initialOpenGroupIndex: -1
                        },
                  ],
                  initialOpenGroupIndex: -1
                }
          ],
          }
      },
      '/home/': {
        selectText: 'language',
        label: 'English',
        ariaLabel: 'language',
        editLinkText: 'Edit this page on GitHub',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        algolia: {},
        nav: [
          { text: 'Home', link: '/home/' },
          { text: 'instructions', link: '/pages_en/' },
          { text: 'English', link: '/home/' },
          { text: 'Trial products', link: 'https://hapyteam.com/' },
            ],
          sidebar: {
          '/home/': [
              {
                title: 'introduce',   
                path: '/pages_en/',
                collapsable: true,
                sidebarDepth: 3,
                children: [
                  '/pages_en/'
                ]
              },
      
              {
                title: 'Interface Overview',
                path: '/pages_en/',
                collapsable: true,
                sidebarDepth: 3,
                children: [
                  '/pages_en/login',
                  '/pages_en/mainpage'
                ],
                initialOpenGroupIndex: -1
              },
              {
                  title: 'Get Started',
                  path: '/pages_en/gostart/project management/',
                  collapsable: true,
                  sidebarDepth: 99,
                  children: [
                      {
                          title: 'Home',
                          path: '/pages_en/gostart/project management/',
                          collapsable: true,
                          sidebarDepth: 10,
                          children: [
                              '/pages_en/gostart/project management/',
                              {
                                  title: 'Project template',
                                  path: '/pages_en/gostart/project management/Create project template',
                                  collapsable: true,
                                  sidebarDepth: 3,
                                  children: [
                                    '/pages_en/gostart/project management/Create project template',
                                    '/pages_en/gostart/project management/Project template management'
                                  ],
                                },
                              '/pages_en/gostart/project management/delete project',
                              {
                                  title: 'Project member management',
                                  path: '/pages_en/gostart/project management/Invite members',
                                  collapsable: true,
                                  sidebarDepth: 3,
                                  children: [
                                    '/pages_en/gostart/project management/Invite members',
                                    '/pages_en/gostart/project management/remove members'
                                  ],
                                },
                              {
                                  title: 'Basic attribute settings',
                                  path: '/pages_en/gostart/project management/Basic attribute settings',
                                  collapsable: true,
                                  sidebarDepth: 10,
                                  children: [
                                    '/pages_en/gostart/project management/Basic attribute settings',
                                    '/pages_en/gostart/project management/jurisdiction',
                                    '/pages_en/gostart/project management/life cycle'
                                  ],
                                },
                              '/pages_en/gostart/project management/Project label',
                              '/pages_en/gostart/project management/Project status',
                              '/pages_en/gostart/project management/Project dynamics',
                              '/pages_en/gostart/project management/Project display',
                          ],
                          initialOpenGroupIndex: -1
                        },
                      {
                          title: 'Project document management',
                          path: '/pages/gostart/project/',
                          collapsable: true,
                          sidebarDepth: 20,
                          children: [
                              '/pages_en/gostart/project/',
                              '/pages_en/gostart/project/upload file',
                              '/pages_en/gostart/project/view file',
                              '/pages_en/gostart/project/checkin file',
                              '/pages_en/gostart/project/checkout file',
                              '/pages_en/gostart/project/undo checkout file',
                              '/pages_en/gostart/project/Change file status',
                              '/pages_en/gostart/project/attach files',
                              '/pages_en/gostart/project/delete file',
                              '/pages_en/gostart/project/package file',
                              '/pages_en/gostart/project/share file',
                              '/pages_en/gostart/project/download file',
                              '/pages_en/gostart/project/search for file',
                              '/pages_en/gostart/project/File list settings',
                              '/pages_en/gostart/project/Collection file'
                          ],
                          initialOpenGroupIndex: -1
                        },
                      {
                          title: 'Life cycle management',
                          path: '/pages/gostart/setup/',
                          collapsable: true,
                          sidebarDepth: 20,
                          children: [
                              '/pages_en/gostart/setup/',
                              '/pages_en/gostart/setup/edit lifecycle',
                              '/pages_en/gostart/setup/copy lifecycle',
                              '/pages_en/gostart/setup/delete lifecycle'
                          ],
                          initialOpenGroupIndex: -1
                        },
                      {
                          title: 'Revision management',
                          path: '/pages_en/gostart/setup/create Revision',
                          collapsable: true,
                          sidebarDepth: 20,
                          children: [
                              '/pages_en/gostart/setup/create Revision',
                              '/pages_en/gostart/setup/edit Revision',
                              '/pages_en/gostart/setup/delete Revision'
                          ],
                          initialOpenGroupIndex: -1
                        },
                      {
                          title: 'Attribute management',
                          path: '/pages_en/gostart/setup/create attribute',
                          collapsable: true,
                          sidebarDepth: 20,
                          children: [
                              '/pages_en/gostart/setup/create attribute',
                              '/pages_en/gostart/setup/edit attribute',
                              '/pages_en/gostart/setup/delete attribute'
                          ],
                          initialOpenGroupIndex: -1
                        },
                  ],
                  initialOpenGroupIndex: -1
                }
          ]
          }
      }
  }
}
}

