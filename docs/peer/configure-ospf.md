---
title: 配置OSPF
---
# 配置OSPF
在刚刚，我们已经成功配置了Wireguard，接下来，我们需要配置OSPF。  
我们使用BIRD2作为路由软件，请确保已安装BIRD2。  

## 生成配置文件
 1. 打开配置文件夹：```/etc/bird```
 2. 编辑配置文件：```bird.conf```
## 配置文件格式
BIRD2是一个功能非常强大的路由软件，这里只给出最简单能实现OSPFv2的配置文件格式。  
```
# /etc/bird/bird.conf
log syslog all;

# 路由器ID，在整个网络上需要唯一标识，在CN86中规定使用自己的WireGuard隧道IP
router id 10.86.1.1;

# 设备协议，监控接口状态
protocol device {
    scan time 10;
}

# 内核协议，与系统路由表同步
protocol kernel {
    ipv4 {
        export all;    # 导出所有路由到内核
        import none;   # 不从内核导入路由
    };
}

# OSPF协议配置
protocol ospf v2 ospf1{  # ospf1 为实例名称
    ipv4 {
        export all;    # 导出所有路由到OSPF
        import where net ~! 10.86.1.0/24;    # 从OSPF导入所有路由，除了你自己的IP段
    };
    
    # Area 0 (骨干区域)
    area 0.0.0.0 {
        interface "wg*" {      # WireGuard接口名称
            type ptp;          # 点对点模式
            hello 10;          # Hello间隔10秒
            dead 40;           # Dead间隔40秒
            retransmit 6;      # 重传间隔6秒
            cost 10;           # 链路开销
            authentication none; # 认证方式（可选）
        };
    };
}
```
## 配置完成后，重载配置文件 
 1. 首先先检查配置文件是否正确：```bird -p```
 2. 当检查通过后，重载配置文件：```birdc configure```（不会造成中断）

## 检查是否配置成功
 1. 检查协议是否正常  
 ```birdc show protocols all```
 2. 确认 OSPF 邻居关系  
 ```birdc show ospf interface```
如果在这段输出了
```
BIRD 2.0.7 ready.
ospf1:
Router ID       Pri          State      DTime   Interface  Router IP
10.86.87.1        1     Full/PtP        30.056  wg0        10.86.87.1
     ↑                                           ↑              ↑
对方的Router ID                               你的接口名称    对方的IP
```
则说明邻居建立成功。

 3. 检查路由是否正确  
 ```birdc show route protocol [实例名称]```
 其中 ```[实例名称]``` 是```birdc show ospf interface```输出中的 ```ospf1``` ，这一项在配置文件中可以自定义。