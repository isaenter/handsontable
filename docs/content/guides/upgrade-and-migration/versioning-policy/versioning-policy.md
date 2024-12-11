---
id: fwrhn9ys
title: 版本控制政策
metaTitle: Versioning policy - JavaScript Data Grid | Handsontable
description: Handsontable follows the principles of Semantic Versioning (SemVer). Each version is numbered in the X.Y.Z (Major.Minor.Patch) format.
permalink: /versioning-policy
canonicalUrl: /versioning-policy
react:
  id: avrihx7w
  metaTitle: Versioning policy - React Data Grid | Handsontable
searchCategory: Guides
category: Upgrade and migration
---

# 版本控制政策

Handsontable 遵循[语义版本控制](https://semver.org/) (SemVer) 的原则.

[[toc]]

## 概述

我们使用 X.Y.Z(Major.Minor.Patch)的版本格式,当代码发生某种类型的更改时递增它们.

下表概述了主要版本、次要版本或补丁版本发生时会更改的数字:

| 类型   | 版本号    | 描述                                                                               |
| ------ | --------- | ---------------------------------------------------------------------------------- |
| 主要的 | X (X.y.z) | 任何向后不兼容的更改都会引入公共 API.                                              |
| 次要的 | Y (x.Y.z) | 公共 API 中引入了新的向后兼容功能,或者任何公共 API 功能被标记为已弃用.             |
| 修补   | Z (x.y.Z) | 引入了向后兼容的错误修复.我们将错误修复定义为修复 Handsontable 错误行为的内部更改. |

::: only-for javascript

## 框架变体的版本控制

直到 Handsontable 8.3.2,Handsontable 的每个框架变体都是单独版本控制的:

<div class="boxes-list gray">

- [普通 JavaScript](@/guides/getting-started/introduction/introduction.md)
- [React wrapper](@/react/guides/getting-started/introduction/introduction.md)
- [Angular wrapper](@/guides/integrate-with-angular/angular-installation/angular-installation.md)
- [Vue 2 wrapper](@/guides/integrate-with-vue/vue-installation/vue-installation.md)
- [Vue 3 wrapper](@/guides/integrate-with-vue3/vue3-installation/vue3-installation.md)


</div>
从版本 8.4.0(2021 年 5 月发布)开始,Handsontable 的所有框架变体都具有相同的版本号.

:::

::: only-for react

## 框架变体的版本控制

到 Handsontable 8.3.2 为止,Handsontable 的 JavaScript 变体和 React 变体分别进行了版本控制:
- [Vanilla JavaScript](@/javascript/guides/getting-started/introduction/introduction.md)
- [React wrapper](@/guides/getting-started/introduction/introduction.md)

从版本 8.4.0(2021 年 5 月发布)开始,Handsontable 的 JavaScript 变体和 React 变体都具有相同的版本号.

:::
