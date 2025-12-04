// .vitepress/theme/index.js

import DefaultTheme from 'vitepress/theme'
import { onMounted, watch, nextTick } from 'vue'
import { useRoute, useRouter } from 'vitepress'
// 你可以按需导入 medium-zoom，但通常直接导入即可
import mediumZoom from 'medium-zoom'
import './global.css'
import './rainbow.css'

// 用于保存动态创建的 style 元素
let homePageStyle

export default {
  extends: DefaultTheme,

  // enhanceApp 钩子在服务端和客户端初始化时都会被调用
  // 主要用于安装插件、注册全局组件等
  enhanceApp({ app }) {
    // 这里一般不需要放 medium-zoom 的逻辑
    // 它的初始化更适合放在 setup 中，以响应页面变化
  },

  // setup 钩子会在每个页面的组件实例创建时调用
  // 它能访问到响应式 API 和生命周期钩子
  setup() {
    // 获取路由实例，用于监听页面变化
    const router = useRouter()
    const route = useRoute()

    // 初始化图片缩放的核心逻辑，封装成一个函数方便复用
    const initZoom = () => {
      // 【关键点】确保只在客户端执行
      // 在构建时，这段代码不会运行，从而避免了 window is not defined 的错误
      if (import.meta.env.SSR) return

      // mediumZoom('.main img') 会为所有匹配的图片添加缩放功能
      // VitePress 默认主题的内容区域类名是 .vp-doc，但有时插件会用 .main
      // 使用 '.vp-doc img' 更具通用性。这里我们保留你的选择器 '.main img'
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' })
    }
    
    // 1. 在组件挂载后（即页面首次加载完成时）初始化
    onMounted(() => {
      initZoom()
      // 同时处理首页彩虹背景
      updateHomePageStyle(location.pathname === '/')
    })

    // 2. 监听路由变化，在切换到新页面后重新初始化
    // 因为新页面的图片是新渲染的DOM，需要重新绑定事件
    watch(
      () => route.path, // 监听完整路径更可靠
      () => {
        // 使用 nextTick 确保 DOM 完全更新后再执行
        nextTick(() => {
          initZoom()
          updateHomePageStyle(location.pathname === '/')
        })
      }
    )
  }
}

// 这个函数本身也依赖 document，所以调用它的地方也确保是在客户端
function updateHomePageStyle(isHomePage) {
  // 【关键点】同样，确保只在客户端执行
  if (import.meta.env.SSR) return

  if (isHomePage) {
    if (homePageStyle) return
    homePageStyle = document.createElement('style')
    homePageStyle.innerHTML = `
      :root {
        animation: rainbow 12s linear infinite;
      }`
    document.head.appendChild(homePageStyle) // 建议将 style 添加到 head 中
  } else {
    if (!homePageStyle) return
    homePageStyle.remove()
    homePageStyle = undefined
  }
}
