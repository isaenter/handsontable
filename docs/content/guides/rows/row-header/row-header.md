---
id: j1zswn3i
title: 行标题
metaTitle: Row headers - JavaScript Data Grid | Handsontable
description: Use default row headers (1, 2, 3), or set them to custom values provided by an array or a function.
permalink: /row-header
canonicalUrl: /row-header
tags:
  - custom headers
  - bind rows with headers
  - row id
react:
  id: prlcpqk8
  metaTitle: Row headers - React Data Grid | Handsontable
searchCategory: Guides
category: Rows
---

# 行标题

使用默认行标题(1、2、3)，或将它们设置为数组或函数提供的自定义值.

[[toc]]

## 概述

行标题是灰色的列，用于标记每一行.默认情况下，这些标题填充有按升序显示的数字.

要打开标题，请将选项 [`rowHeaders`](@/api/options.md#rowheaders) 设置为 `true`.

## 将行与标题绑定

您可以将行号与行标题绑定.这主要用于区分 Handsontable 最常使用的两种业务案例.

1. 在典型的类似网格的应用程序中移动行时，行标题中的数字保持不变.仅移动内容.

2. 在数据网格中，每一行都有其唯一的ID.因此，无论何时更改其在网格中的位置，列标题都应跟随其行.

### 基本示例

要启用该插件，请将 [`bindRowsWithHeaders`](@/api/options.md#bindrowswithheaders) 属性设置为 `true`.移动下面示例中的行以查看该插件的作用.

::: only-for javascript

::: example #example1 --js 1 --ts 2

@[code](@/content/guides/rows/row-header/javascript/example1.js)
@[code](@/content/guides/rows/row-header/javascript/example1.ts)

:::

:::

::: only-for react

::: example #example1 :react --js 1 --ts 2

@[code](@/content/guides/rows/row-header/react/example1.jsx)
@[code](@/content/guides/rows/row-header/react/example1.tsx)

:::

:::

## 树形网格

树形网格使您能够表示数据网格内的嵌套数据结构.要了解有关此功能的更多信息，请参阅 [行父子](@/guides/rows/row-parent-child/row-parent-child.md) 页面.

## 相关文章

### 相关指南

<div class="boxes-list gray">

- [父子行](@/guides/rows/row-parent-child/row-parent-child.md)

</div>

### 相关API参考

- 配置选项:
  - [`activeHeaderClassName`](@/api/options.md#activeheaderclassname)
  - [`currentHeaderClassName`](@/api/options.md#currentheaderclassname)
  - [`bindRowsWithHeaders`](@/api/options.md#bindrowswithheaders)
  - [`rowHeaders`](@/api/options.md#rowheaders)
- 核心方法:
  - [`getRowHeader()`](@/api/core.md#getrowheader)
  - [`hasRowHeaders()`](@/api/core.md#hasrowheaders)
- Hooks:
  - [`afterGetRowHeader`](@/api/hooks.md#aftergetrowheader)
  - [`afterGetRowHeaderRenderers`](@/api/hooks.md#aftergetrowheaderrenderers)
  - [`beforeHighlightingRowHeader`](@/api/hooks.md#beforehighlightingrowheader)
  - [`modifyRowHeader`](@/api/hooks.md#modifyrowheader)
  - [`modifyRowHeaderWidth`](@/api/hooks.md#modifyrowheaderwidth)
- 插件:
  - [`BindRowsWithHeaders`](@/api/bindRowsWithHeaders.md)
