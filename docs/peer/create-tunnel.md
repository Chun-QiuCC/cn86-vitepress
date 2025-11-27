---
title: 创建隧道
---
# 创建隧道
所有操作均使用 Wireguard 
 
## 生成你的密钥对
第一步需要先生成密钥对。  
密钥对是两端设备建立连接的认证条件。    
 1. 在Linux系统中安装wireguard，在CLI中运行以下命令： 
 ```sudo apt install wireguard -y```
 2. 生成密钥对：
 ```wg genkey | tee private.key | wg pubkey > public.key```
 在这步骤中，会生成两个文件：private.key和public.key，其中private.key为私钥，public.key为公钥。请务必保存好private.key。
 3. 将你的公钥 public.key 发送给对端，对端也应当给你发送他的公钥。

## 创建配置文件
 1. 编写配置文件。进入此路径：```/etc/wireguard```，创建一个文件：```wg0.conf```。*当你需要创建多条连接时，请添加多个文件，文件名不可以重复。*
 2. 配置文件格式如下：
 ```
[Interface]
PrivateKey = <PrivateKey> # 你的私钥，当截图、复制配置进行求助时，请移除此段
ListenPort = <Ports> # 此连接的监听端口
Table = off # 非常重要！关闭Wireguard自动生成的路由
PostUp = ip addr add <YourIP> peer <PeerIP> dev %i # 添加你的IP和对端的IP

[Peer]
PublicKey = <Peer_PublicKey> #对端的公钥
Endpoint = <Peer_Endpoint> #对端的公网IP和端口，当对端无公网，你拥有公网时，可移除此段
AllowedIPs = 0.0.0.0/0,::/0
PersistentKeepalive = 25
```
假设你的宣告的IP段为 **10.86.1.0/24** ，对端的IP段为 **10.86.2.0/24**   
则在 ```PostUp = ip addr add <YourIP> peer <PeerIP> dev %i``` 此处填写 YourIP为```10.86.1.X/32```，PeerIP为```10.86.2.X/32```。

 3. 保存后执行：```sudo wg-quick up wg0``` *当你需要创建多条连接时，启动指令后的wg0请替换成对应的文件名*
 4. 测试连接，```ping <对端的隧道内IP>```，例如 ping 10.86.2.1 。
> [!NOTE]  
> ```PostUp = ip addr add <YourIP> peer <PeerIP> dev %i ```   
> 为隧道添加了一个接口级的路由，指定 10.86.2.1/32 的流量走 wg0 接口。所以即使Table = off且Bird尚未配置，你仍然可以通过 10.86.2.1/32 访问对端。