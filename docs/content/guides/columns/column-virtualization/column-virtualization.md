---
id: xv8sf6at
title: 列虚拟化
metaTitle: Column virtualization - JavaScript Data Grid | Handsontable
description: Render hundreds of columns without freezing the browser, using column virtualization.
permalink: /column-virtualization
canonicalUrl: /column-virtualization
tags:
  - dom
  - render all columns
  - offset
react:
  id: 24n21dwi
  metaTitle: Column virtualization - React Data Grid | Handsontable
searchCategory: Guides
category: Columns
---

# 列虚拟化

使用列虚拟化在不冻结浏览器的情况下渲染数百列.

[[toc]]

## 概述

为了在浏览器中处理大量列,Handsontable 利用虚拟化过程仅显示网格的可见部分,并带有小
偏移以获得更好的滚动体验.

此功能默认启用,可以通过将 [`renderAllColumns`](@/api/options.md#renderallcolumns) 选项设置为 `true` 来关闭.

## 配置列虚拟化

您可以尝试使用 [`viewportColumnRenderingOffset`](@/api/options.md#viewportcolumnrenderingoffset) 配置选项,该选项决定了
显示在可见视口之外的列.如果传递给该选项的数字大于数据集中的总列数,则虚拟化
实际上将被关闭.

要使网格可滚动,请将恒定宽度和高度设置为与容纳 Handsontable 和高度的容器相同,并将`overflow`属性设置为
`隐藏`在容器的样式表中.如果表格包含足够的行或列,它将是可滚动的.

滚动性能主要取决于四个因素:

- 单元格数量 -行数乘以列数
- 单元格中自定义渲染器的数量和复杂性
- 配置中启用的选项数量
- 您的设置的性能 -物理机和浏览器
  
下面的演示展示了一个显示一百万个单元格的数据网格(1000 行 x 1000 列).

::: only-for javascript

::: example #example1 --js 1 --ts 2

@[code](@/content/guides/columns/column-virtualization/javascript/example1.js)
@[code](@/content/guides/columns/column-virtualization/javascript/example1.ts)

:::

:::

::: only-for react

::: example #example1 :react --js 1 --ts 2

@[code](@/content/guides/columns/column-virtualization/react/example1.jsx)
@[code](@/content/guides/columns/column-virtualization/react/example1.tsx)

:::

:::

## 已知限制

使用列虚拟化有以下副作用:

- 浏览器的本机搜索仅适用于网格的可见部分.
- 屏幕阅读器可能会报出错误的总列数.阅读更多内容
  [辅助功能](@/guides/accessibility/accessibility/accessibility.md#disabling-dom-virtualization-for-improved-accessibility) 指南.

## 相关文章

### 相关指南

- [行虚拟化](@/guides/rows/row-virtualization/row-virtualization.md)
- [表现](@/guides/optimization/performance/performance.md)

### 相关API参考

- 配置选项:
  - [`viewportColumnRenderingOffset`](@/api/options.md#viewportcolumnrenderingoffset)
  - [`renderAllColumns`](@/api/options.md#renderallcolumns)
