import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CN86 Networks",
  description: "The offical stie for CN86 Networks",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/docs/quick_start/index' },
      { text: 'Gitea', link: 'https://git.cn86.dev' }
    ],

    sidebar: [
      {
        text: '基础操作',
        collapsed: false,
        items: [
          { text: '注册Gitea', link: '/docs/quick_start/index' },
          { text: '创建仓库', link: '/docs/quick_start/create-repo' },
          { text: '创建身份文件', link: '/docs/quick_start/create-mnt' },
          { text: '申请IP', link: '/docs/quick_start/apply-ip' },
          { text: '申请域名', link: '/docs/quick_start/apply-domain' }
        ]
      },
      {
        text: '开始Peer',
        collapsed: false,
        items: [
          { text: '前期准备', link: '/docs/peer/prepare' },
          { text: '寻找对端', link: '/docs/peer/find-peer' },
          { text: '创建隧道', link: '/docs/peer/create-tunnel' },
          { text: '配置OSPF', link: '/docs/peer/configure-ospf' }
        ]
      },
      {
        text: '外部连接',
        collapsed: false,
        items: [
          { text: '说明', link: '/docs/connect/index' },
          { text: 'fwnet', link: '/docs/connect/fwnet' },
          { text: 'LuocyNet', link: '/docs/connect/luocynet' },
        ]
      }
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
