---
id: vasj6t6t
title: 行虚拟化
metaTitle: Row virtualization - JavaScript Data Grid | Handsontable
description: Render thousands of rows without freezing the browser, using row virtualization.
permalink: /row-virtualization
canonicalUrl: /row-virtualization
tags:
  - dom
  - render all rows
  - offset
react:
  id: kjsl63sh
  metaTitle: Row virtualization - React Data Grid | Handsontable
searchCategory: Guides
category: Rows
---

# 行虚拟化

使用行虚拟化在不冻结浏览器的情况下渲染数千行。

[[toc]]

## 概述

虚拟化允许 Handsontable 处理数十万条记录，而不会导致浏览器挂起。此功能仅绘制网格的可见部分，显示 DOM 中物理渲染的最少项目。当您滚动网格时，将渲染视口之外的元素。根据您的配置，在视口之外渲染的列或行可能会有少量偏移，以使滚动性能更平滑。

此功能默认启用，可以通过将 [`renderAllRows`](@/api/options.md#renderallrows) 选项设置为 `true` 来关闭。

## 配置行虚拟化

您可以尝试使用 [`viewportRowRenderingOffset`](@/api/options.md#viewportrowrenderingoffset) 配置选项，该选项确定可见视口之外显示的行数。如果传递给该选项的数字大于数据集中的总列数，则虚拟化实际上将被关闭。

要使网格可滚动，请将恒定宽度和高度设置为与包含 Handsontable 的容器相同，并将容器样式表中的`overflow`属性设置为`hidden`。如果表格包含足够的行或列，它将是可滚动的。

滚动性能主要取决于四个因素：

- 单元格数量 -行数乘以列数
- 单元格中自定义渲染器的数量和复杂性
- 配置中启用的选项数量
- 设置的性能 -物理机和浏览器

下面的示例展示了一个显示 100 万个单元格的数据网格（1000 行 x 1000 列）：

::: only-for javascript

::: example #example1 --js 1 --ts 2

@[code](@/content/guides/rows/row-virtualization/javascript/example1.js)
@[code](@/content/guides/rows/row-virtualization/javascript/example1.ts)

:::

:::

::: only-for react

::: example #example1 :react --js 1 --ts 2

@[code](@/content/guides/rows/row-virtualization/react/example1.jsx)
@[code](@/content/guides/rows/row-virtualization/react/example1.tsx)

:::

:::

## 已知限制

使用行虚拟化有以下副作用：

- 浏览器的本机搜索仅适用于网格的可见部分。
- 屏幕阅读器可能会报出错误的总行数。阅读更多内容
  [辅助功能](@/guides/accessibility/accessibility/accessibility.md#disabling-dom-virtualization-for-improved-accessibility) 指南。

## 相关文章

### 相关指南

- [列虚拟化](@/guides/columns/column-virtualization/column-virtualization.md)
- [优化](@/guides/optimization/performance/performance.md)

### 相关API参考

- 配置选项:
  - [`renderAllRows`](@/api/options.md#renderallrows)
  - [`viewportRowRenderingOffset`](@/api/options.md#viewportrowrenderingoffset)
