// 导入 VitePress 默认主题、Vue 生命周期与路由工具、medium-zoom
import DefaultTheme from 'vitepress/theme'
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import mediumZoom from 'medium-zoom'
// 后续会创建全局样式文件，先提前导入（若暂时没创建，可先注释，后续补回）
import './global.css'
import './rainbow.css'

// 用于保存动态创建的 style 元素
let homePageStyle

export default {
  // 继承默认主题的所有功能
  extends: DefaultTheme,

  // enhanceApp 函数用于整合原本在 setup 中和 enhanceApp 中的逻辑
  enhanceApp({ app, router }) {
    // 定义图片缩放初始化函数
    const initZoom = () => {
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' })
    }

    // 监听路由变化（切换页面时）来初始化图片缩放
    watch(
      () => router.route.data.relativePath,
      () => {
        // 使用 nextTick 确保 DOM 已更新，再初始化缩放
        nextTick(initZoom)
      }
    )

    // 处理彩虹背景
    if (typeof window !== 'undefined') {
      watch(
        () => router.route.data.relativePath,
        () => updateHomePageStyle(location.pathname === '/'),
        { immediate: true }
      )
    }
  },
  setup() {
    onMounted(() => {
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' })
    })
  }
}

function updateHomePageStyle(value) {
  if (value) {
    // 如果已经是首页，且样式已存在，则无需重复添加
    if (homePageStyle) return

    homePageStyle = document.createElement('style')
    homePageStyle.innerHTML = `
    :root {
      animation: rainbow 12s linear infinite;
    }`
    document.body.appendChild(homePageStyle)
  } else {
    // 如果不是首页，且样式存在，则移除它
    if (!homePageStyle) return

    homePageStyle.remove()
    homePageStyle = undefined
  }
}
