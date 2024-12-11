---
id: zbx8ayzw
title: 许可证密钥
metaTitle: License key - JavaScript Data Grid | Handsontable
description: Activate Handsontable, passing your license key in the configuration object. Use a special key for non-commercial and evaluation purposes.
permalink: /license-key
canonicalUrl: /license-key
react:
  id: vyfski60
  metaTitle: License key - React Data Grid | Handsontable
searchCategory: Guides
category: Getting started
---

# 许可证密钥

激活 Handsontable,在配置对象中传递您的许可证密钥.将特殊密钥用于非商业和评估目的.

[[toc]]

## 概述

Handsontable 可在商业和免费许可证下使用,具体取决于您的使用情况.

我们要求您通过在 Handsontable 的 [`licenseKey`](@/api/options.md#licensekey) 配置选项中传递许可证密钥来指定哪些条款适用于您的使用.

## 商业许可

如果您使用付费版本的 Handsontable,请传递购买后发送给您的一串数字.请注意,许可证密钥是一个字符串,因此您需要将其用引号`''`括起来.

::: only-for javascript

```js
const settings = {
  licenseKey: '00000-00000-00000-00000-00000',
  //... 其他选择
}
```

要将其与框架一起使用,请将字符串传递给 [`licenseKey`](@/api/options.md#licensekey) 属性:

<code-group>
<code-block title="React" active>

```jsx
<HotTable settings={settings} licenseKey="00000-00000-00000-00000-00000" />
```

</code-block>
<code-block title="Angular">

```html
<hot-table [settings]="settings" licenseKey="00000-00000-00000-00000-00000"></hot-table>
```

</code-block>
<code-block title="Vue 2">

```html
<hot-table :settings="settings" licenseKey="00000-00000-00000-00000-00000" />
```

</code-block>
<code-block title="Vue 3">

```html
<hot-table :settings="settings" licenseKey="00000-00000-00000-00000-00000" />
```

</code-block>
</code-group>

:::

::: only-for react

```jsx
<HotTable licenseKey="00000-00000-00000-00000-00000" />
```

:::

## 非商业许可

如果您将 Handsontable 用于非金钱补偿的目的,例如但不限于教学、学术研究、评估、测试和实验,请传递字符串`'non-commercial-and-evaluation'`.

::: only-for javascript

```js
const settings = {
  licenseKey: 'non-commercial-and-evaluation',
  //... 其他选择
}
```

:::

::: only-for react

```jsx
<HotTable 
  autoWrapRow={true}
  autoWrapCol={true}
  licenseKey="non-commercial-and-evaluation" />
```

:::

## 验证过程

我们验证许可证密钥以确定您是否有权使用该软件.为此,我们比较两个日期之间的时间.这些日期来自两个信息来源.其中之一是 Handsontable 每个版本中提供的`构建日期`.另一个是许可证密钥附带的`创建日期`.此过程不会触发与任何服务器的任何连接.

## 通知

如果您的许可证密钥丢失、无效或过期,Handsontable 将显示相应的通知.该通知显示在两个位置:表格下方的 HTML 文本和控制台中.消息如下:

### 缺少许可证密钥

_Handsontable 的许可证密钥丢失.使用您购买的密钥来激活产品.或者,您可以通过传递密钥`non-commercial-and-evaluation`来激活 Handsontable 以用于非商业目的.  请在文档中阅读更多相关信息或通过`[电子邮件]`联系我们._

### 许可证密钥无效

_Handsontable 的许可证密钥无效.  了解有关如何正确安装的更多信息或通过`[电子邮件]`联系我们._

### 许可证密钥过期

_Handsontable 的许可证密钥已于`[expiration_date]`过期,并且对于已安装的版本`[handsontable_version]`无效.  续订您的许可证密钥或降级到`[expiration_dates]`之前发布的版本.如果您需要任何帮助,请通过`[电子邮件]`联系我们._

## 获取许可证密钥

要获取 Handsontable 副本的商业许可证密钥,请联系我们的[销售团队](https://handsontable.com/get-a-quote).

## 相关文章

### 相关指南

<div class="boxes-list gray">
 
- [软件许可](@/guides/technical-specification/software-license/software-license.md)

</div>

### 相关API参考

- 配置选项:
  - [`licenseKey`](@/api/options.md#licensekey)
