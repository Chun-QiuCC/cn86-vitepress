---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "CN86 Networks"
  # 使用更贴切的 text 和 tagline
  #text: "CN86实验网络"
  tagline: 为网络爱好者打造的私有学习与测试网络，一个迷你的互联网沙盒。
  # 添加主图，让它更生动。图片建议放在 public 目录下
  image:
    src: /LOGO.svg
    alt: CN86 Networks Logo
  actions:
    - theme: brand
      text: 了解CN86
      link:  /#项目介绍 # 建议创建一个 /getting-started.md 文件
    - theme: alt
      text: 查看项目文档
      link: /docs/quick_start/index # 假设你的核心文档在 /docs 目录下
    - theme: alt
      text: 访问 Gitea
      link: https://git.cn86.dev 

features:
  - icon: 🌐 
    title: 全功能网络实验
    details: 使用OSPF、BGP、DNS 等真实网络技术。你的服务器可以与网络中任何其他成员互联互通，构建复杂网络架构。
  - icon: 🧪 
    title: 安全隔离的沙盒环境
    details: 在完全独立的私有网络中自由折腾，无需担心影响公网或生产环境。这是一个可以放心试错、大胆创新的技术训练场。
  - icon: ❤ 
    title: 社区与生态
    details: 感谢社区，感谢每一位参与者，分享你的网络实验成果，共同探索网络技术的无穷魅力。

---
<br>  

## 
<center><h1>网络架构</h1></center>
<center><p>这是CN86网络的拓扑概念图</p></center>  
 
 ![img1](/无标题-2025-11-24-2226.webp)
  
## 项目介绍
 **CN86 Networks** 是一个专为网络技术爱好者和学习者打造的私有实验网络。  
 它提供了一个真实隔离的生产级网络环境，让成员能够安全、低成本地实践和探索各种网络技术。  
 我们的核心目标是为网络爱好者提供一个“网络技术的实践沙盘”，在这里，理论得以验证，想法得以实现。
## 项目参数
 - 在网内，我们使用 **OSPF** 作为标准的路由协议。
 - 玩家可以通过 **Wireguard** 或其他受广泛支持的 **VPN隧道** 协议进行接入。
 - 我们的IP段： 10.86.0.0/16 ，您在注册时可以自由选择其中的IP段  （单次注册不应当超过/24）
 - 我们的内网顶级域：**.cn86**，您可以自由进行注册
   

## 如何开始
 - 我们使用 Gitea 进行管理，请前往 [Gitea](https://git.cn86.dev) 创建账号。
 - 后续步骤见 [快速开始]()