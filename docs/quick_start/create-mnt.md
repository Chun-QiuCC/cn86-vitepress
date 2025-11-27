---
title: 创建身份验证文件
---
# 创建身份验证信息
mntner 仓库中的 mnt 文件用于存储身份验证信息。

## 方案一  

 1. 在新建的仓库网页中点击  **新建文件**  
 2. 命名文件 输入框 填写 **mnt**  
 3. 在文件编写框输入符合以下格式的内容  
```
mntner: bakacq
auth: SHA256:kK4qkVIc1bP3eL9TyDuitYrh7Tpa2Zr7g4cNvxCTujw
mail: 86herodain@gmail.com
note: 这里是注释信息
```
> [!NOTE] 注意
> 目前auth项目仅支持SSH keys SHA256  
> note与auth是非必选项
 4. 点击最底部的 **提交变更**  
## 方案二 <Badge type="tip" text="推荐" />  

 1. 使用git 命令行拉取这个仓库  
 2. 在仓库目录下创建一个文件，并命名为 **mnt**  
 3. 在文件中输入符合以下格式的内容
```
mntner: bakacq
auth: SHA256:kK4qkVIc1bP3eL9TyDuitYrh7Tpa2Zr7g4cNvxCTujw
mail: 86herodain@gmail.com
note: 这里是注释信息
```
 4. 提交并推送

## 完成注册

> [!WARNING]
> bot还在开发，如要申请，请手动@bakacq/QQ群管理员进行手动验证

至此，注册完成。  

**一般来说**，会有一个BOT自动检测到你的mntner仓库，无论通过与否都会给你的mntner仓库创建一个issue(工单)，用来提示你的信息修改是否成功。  
如果未能通过BOT的检测，请检查mnt格式是否符合要求，并进行修改。    
  
![img](/quick_start/2a5a9251-f2ee-450a-a90f-f40ffa633f8a.webp)
  
