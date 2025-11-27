---
title: 申请域名
---
# 申请域名
在CN86中，我们拥有内网顶级域：```.cn86```  
二级域的字数应当大于等于3字符  
域名注册不应当造成任何歧义，如gov、edu、mil等

## 申请方式
同 [创建身份验证文件](/docs/quick_start/create-repo) 一样，我们需要创建一个新的仓库。
 - 仓库名称：```domain-apply```
 - 仓库文件名称格式：
 ```
 example-cn86.yaml
    ↑     ↑
  二级域 顶级域
 ```
## 文件内容格式
```yaml
mntby: bakacq
domain: example.cn86
whois:
    - domain_name: example.cn86
    - creation_date: 2025-11-27
    - e-mail: 86herodain@gmail.com
    - name_server: ['ns1.dns.cn86','ns2.dns.cn86']
    - note: 备注信息
```
说明：
 - mntby：仓库管理员
 - domain：申请域名
 - whois：Whois信息
 - domain_name：Whois信息中的域名
 - creation_date：Whois信息中的创建时间
 - e-mail：Whois信息中联系邮箱
 - name_server：Whois信息中的DNS服务器 (请确保至少有两个DNS服务器)
 - note：Whois信息中的备注信息

## 补充
在后续的操作中，如果需要申请新的域名，请向此仓库提交新的申请文件。

## 完成申请

> [!WARNING]
> bot还在开发，如要申请，请手动@bakacq/QQ群管理员进行手动验证

提交文件后，申请完成。

**一般来说**，会有一个BOT自动检测到你的domain-apply仓库，无论通过与否都会给你的domain-apply仓库创建一个issue(工单)，用来提示你的信息修改是否成功。  

如果未能通过BOT的检测，请检查文件格式/名称是否符合要求，并进行修改。    