---
id: nb36sme6
title: 安全
metaTitle: Security - JavaScript Data Grid | Handsontable
description: Learn about the security measures we take to make sure you can safely implement Handsontable in your client-side application.
permalink: /security
canonicalUrl: /security
react:
  id: h8zg4ign
  metaTitle: Security - React Data Grid | Handsontable
searchCategory: Guides
category: Security
---

# 安全

了解我们为确保您可以在客户端应用程序中安全地实施 Handsontable 而采取的安全措施.

[[toc]]

## 概述

在 Handsontable,我们非常重视安全性.我们与安全工具和策略集成以提供安全的数据网格.本文档提供有关我们的安全认证、审核和政策的信息.

## 安全数据传输

Handsontable 的软件是基于浏览器的,不与服务器通信.我们不提供特定于应用程序的后端解决方案或提供建议.

您需要确保您在后端和前端使用的数据传输方法是安全的.

## 内容安全策略 (CSP)

内容安全策略 (CSP) 是一个附加的安全层,应用程序供应商使用它来检测和减少某些类型的攻击,例如跨站点脚本 (XSS) 或数据盗窃.

Handsontable 不使用外部字体、图像或脚本.

如果您在应用程序中使用 CSP,则可能需要为 Handsontable 运行添加的唯一规则是`script-src`和`style-src`:

- `script-src` 加载 Handsontable 的脚本文件.将其指向您放置 Handsontable 资产的源(域).
- `style-src ... 'unsafe-inline'` 加载 Handsontable 的样式表文件.将其指向您放置 Handsontable 资产的源(域). Handsontable 的 XSS 预防逻辑 (DOMPurify) 需要`不安全内联`源表达式来实现某些功能(例如复制和粘贴).

托管在同一应用程序源上的 Handsontable 的 CSP 规则示例:

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'self'; style-src 'self' 'unsafe-inline'">
```
CDN (cdn.jsdelivr.net) 上托管的 Handsontable 的 CSP 规则示例:

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'self' cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' cdn.jsdelivr.net">
```

## 第三方软件

我们以第三方软件的形式使用依赖项,并有责任使其保持最新且安全.我们还使用第三方软件 [Fossa](https://fossa.com) 来遵守第三方许可条款.

## 内容清理

我们使用 [dompurify](https://www.npmjs.com/package/dompurify) 来清理放入数据网格中的内容.但我们强烈建议额外的服务器端验证来保护您的数据.

## 高质量代码承诺

我们承诺提供高质量的代码.您可以在[此处](https://lgtm.com/projects/g/handsontable/handsontable/context:javascript)查看我们的高质量代码分数.

我们的政策是在问题出现时尽快解决问题,并使库保持最新状态.这要求您(该软件的用户)及时更新您的 Handsontable 软件副本.

## 安全证书

我们定期下令对整个 Handsontable 代码库进行安全审计,由独立的网络安全专家进行.

最新安全审核:

| Handsontable 版本 | 公司      | 结束于       | 证书                                                    |
| ----------------- | --------- | ------------ | ------------------------------------------------------- |
| 8.2.0             | Securitum | Nov 30, 2020 | [Download]({{$basePath}}/securitum-certificate.pdf)     |
| 11.1.0            | Seqred    | Feb 21, 2022 | [Download]({{$basePath}}/seqred-certificate.pdf)        |
| 12.3.3            | TestArmy  | Apr 28, 2023 | [Download]({{$basePath}}/testarmy-certificate.pdf)      |
| 14.3.0            | TestArmy  | Apr 19, 2024 | [Download]({{$basePath}}/testarmy-certificate-2024.pdf) |  |

安全审核是根据行业标准方法进行的,包括:
- OWASP 前 10 名
- OWASP 应用程序安全验证标准 (ASVS)

如需详细的安全报告,请联系我们的[技术支持团队](https://handsontable.com/contact?category=technical_support).

## 代码审计

我们使用 [Snyk](https://snyk.io/test/github/handsontable/handsontable?targetFile=package.json) 来审核我们的代码. Snyk 无缝集成到我们的开发工作流程中,检查源代码和任何依赖项(包括开源依赖项)中的漏洞.

Snyk 通过电子邮件或 Slack 提供安全状态通知,以便:
 - 在不到一分钟的时间内监控handsontable/handsontable:package.json
 - 使用 Snyk 市场领先的数据库查找漏洞

## 保险

我们由伦敦劳合社承保.我们的政策保护 Handsontable 和我们的客户:

| 我们的客户         | Handsoncode (Us)               |
| ------------------ | ------------------------------ |
| 网络媒体责任       | 被保险人的数据或网络丢失或损坏 |
| 隐私责任和文件丢失 | 业务中断                       |
| 违反保密责任       | 网络盗窃                       |
| 网络安全责任       | 网络勒索                       |
| 缓解成本           | 窃听被保险人电话线的电话       |
| 监管行动和罚款     | 通知费用                       |
| 被保险人声誉受损   | 被保险人名誉受损               |

## 代码托管

**此服务需额外付费. [向我们的销售团队询问](https://handsontable.com/contact?category=request_for_quotation) 有关定价的信息.**

代码托管可确保软件得到维护、保护且不会被废弃.

我们将代码托管在 GitHub 上,这是一个由 Microsoft 托管的值得信赖的安全平台.万一我们在 GitHub 上的代码发生问题,我们的代码副本仍然受到源代码托管公司 [Codekeeper](https://codekeeper.co/) 的保护和管理.

我们将所有代码版本自动存入 CodeKeeper.如果发生发布事件,Codekeeper 可以提供 24/7/365 的快速恢复.

## 报告安全漏洞

我们的软件及其在客户系统中的应用的安全性是我们的首要任务.请将任何可疑活动或证据报告给 [security@handsontable.com](mailto:security@handsontable.com),我们将及时回复.

## 漏洞赏金

我们不提供错误赏金计划,但我们真诚地感谢安全研究人员和独立开发人员所做的工作.
