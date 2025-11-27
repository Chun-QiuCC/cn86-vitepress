---
title: 申请IP地址
---
# 申请IP地址
账号注册完成后，可以开始申请IP地址了。
需要注意的是，申请的地址应当在 ```10.86.0.0/16``` 范围中。
每次申请范围不得超过 **/24** 。
## 仓库&文件名称格式
同 [创建身份验证文件](/docs/quick_start/create-repo) 一样，我们需要创建一个新的仓库。
 - 仓库名称：```ip-apply```
 - 仓库文件名称格式：
 ```
 10-86-0-0-24.yaml
       ↑   ↑
     网段 子网掩码
 ```

## 文件内容格式
```yaml
mntby: bakacq
ip: 10.86.0.0/24
whois:
    - mnyby: bakacq
    - inetnum: 10.86.0.0 - 10.86.0.255
    - region: HK
    - e-mail: 86herodain@gmail.com
    - source: CN86
    - note: 备注信息
```
说明：
 - mntby：仓库管理员
 - ip：申请IP地址
 - whois：Whois信息
 - mnyby：Whois信息中的管理员  
 - inetnum：Whois信息中的IP起始地址到最后一个可用地址
 - region：Whois信息中的地区（需遵循ISO 3166-1标准）
 - e-mail：Whois信息中联系邮箱
 - source：Whois信息中的源（固定为CN86）
 - note：Whois信息中的备注信息

## 补充
在后续的操作中，如果需要申请新的IP地址，请向此仓库提交新的申请文件。

## 完成申请

> [!WARNING]
> bot还在开发，如要申请，请手动@bakacq/QQ群管理员进行手动验证

提交文件后，申请完成。  
**一般来说**，会有一个BOT自动检测到你的ip-apply仓库，无论通过与否都会给你的ip-apply仓库创建一个issue(工单)，用来提示你的信息修改是否成功。  
如果未能通过BOT的检测，请检查文件格式/名称是否符合要求，并进行修改。    
  