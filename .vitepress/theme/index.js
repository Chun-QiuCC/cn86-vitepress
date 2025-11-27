// 导入 VitePress 默认主题、Vue 生命周期与路由工具、medium-zoom
import DefaultTheme from 'vitepress/theme'
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import mediumZoom from 'medium-zoom'
// 后续会创建全局样式文件，先提前导入（若暂时没创建，可先注释，后续补回）
import './global.css'

export default {
  // 继承默认主题的所有功能
  extends: DefaultTheme,
  setup() {
    // 获取当前路由实例（用于监听页面切换）
    const route = useRoute()

    // 定义图片缩放初始化函数
    const initZoom = () => {
      // 为所有 ".main" 容器下的图片添加缩放功能
      // background 使用 VitePress 原生背景色变量，避免风格冲突
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' })
    }

    // 页面首次加载完成后初始化缩放
    onMounted(() => {
      initZoom()
    })

    // 监听路由变化（切换页面时），延迟初始化（确保 DOM 已更新）
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    )
  }
}