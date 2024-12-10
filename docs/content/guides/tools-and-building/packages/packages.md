---
id: xt5zuczu
title: 包
metaTitle: Packages - JavaScript Data Grid | Handsontable
description: Instantly add Handsontable to your web app, using pre-built UMD packages of JavaScript and CSS.
permalink: /packages
canonicalUrl: /packages
searchCategory: Guides
category: Tools and building
---

# 包

使用预构建的 JavaScript 和 CSS UMD 包立即将 Handsontable 添加到您的 Web 应用程序中。

[[toc]]

## 完整分发（推荐)

完整的发行版允许您通过仅包含 2 个文件来使用 Handsontable：
```html
<script src="dist/handsontable.full.js"></script>
<link href="dist/handsontable.full.css" rel="stylesheet">
```
您还可以使用缩小的文件：
```html
<script src="dist/handsontable.full.min.js"></script>
<link href="dist/handsontable.full.min.css" rel="stylesheet">
```

**handsontable.full.js**和 **handsontable.full.css**使用 ___all___ 所需的依赖项进行编译。

## Bare distribution

如果您是`Bob the Builder`类型的黑客，您将需要加载 Handsontable JS、CSS 及其依赖项：
```html
<!-- 所需的依赖项（作为外部脚本） -->
<link href="https://cdn.jsdelivr.net/npm/@handsontable/pikaday@1.0.0/css/pikaday.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/moment@2.29.4/moment.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@handsontable/pikaday@1.0.0/pikaday.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/numbro@2.1.2/dist/numbro.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/dompurify@2.4.5/dist/purify.js"></script>

<!-- Handsontable bare files -->
<script src="dist/handsontable.js"></script>
<link href="dist/handsontable.css" rel="stylesheet">
```

**handsontable.js**和 **handsontable.css**编译时没有 ___ 所需的依赖项。您必须在自己的 ie 上包含 `pikaday.js`、`moment.js`、`numbro.js` 和 `dompurify`。来自 JSDelivr CDN。

## 国际化
可以包含将注册语言词典的文件。它们允许翻译 Handsontable UI 的部分内容。您可以仅使用特定语言文件，也可以将所有语言文件一次性包含为单个文件。

有关 API 和其他选项的所有信息都可以在我们的[官方文档](@/guides/internationalization/language/language.md) 中找到。

```html
<!--国际化，波兰语 -波兰语言国家文件 -->
<script src="dist/languages/pl-PL.js"></script>

<!--国际化，所有可用语言文件在一个文件中 -->
<script src="dist/languages/all.js"></script>
```

## 自定义分发

如果您想构建自己的自定义 Handsontable 包发行版，请查看我们的[指南](@/guides/tools-and-building/custom-builds/custom-builds.md)，其中涵盖了所有详细信息。

## 相关指南

<div class="boxes-list gray">

- [Building](@/guides/tools-and-building/custom-builds/custom-builds.md)
- [Testing](@/guides/tools-and-building/testing/testing.md)

</div>
