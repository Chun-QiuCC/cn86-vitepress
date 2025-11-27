---
title: 开始Peer
---
# 开始正式接入网络
你已经准备好了账号，与IP块。现在就可以开始接入网络了。

## 要求
你需要准备：
1. 一个**Linux**系统 或 支持**VPN**与**OSPF**的操作系统（如OpenWRT等）
2. **Wireguard** 或 与对端兼容的 **VPN** 软件
3. 你与对端至少有一方拥有一个**公网IP**（EasyN2N、ZeroTier等拥有中继服务器的VPN除外）
4. 智慧的大脑、勤劳的双手与足够的耐心

## 说明
在后续的演示步骤中，我们以 Ubuntu/Debian 作为操作系统，使用 WireGuard 作为VPN软件，BIRD2 作为路由软件。

## 配置 Linux 内核的相关项
<Badge type="danger" text="请严格按照说明执行，否则后期可能会出现无法连通的问题" />
 先打开Linux的数据包转发，配置项为ip_forwarding
```
echo "net.ipv4.ip_forward=1" >> /etc/sysctl.conf
echo "net.ipv6.conf.default.forwarding=1" >> /etc/sysctl.conf
echo "net.ipv6.conf.all.forwarding=1" >> /etc/sysctl.conf
sysctl -p
```
 关闭 Linux 内核 rp_filter 的严格模式
```
echo "net.ipv4.conf.default.rp_filter=0" >> /etc/sysctl.conf
echo "net.ipv4.conf.all.rp_filter=0" >> /etc/sysctl.conf
sysctl -p
```

## 鸣谢
 - 配置项对 [BingXin](https://blog.byteloid.one/) 文章的引用。