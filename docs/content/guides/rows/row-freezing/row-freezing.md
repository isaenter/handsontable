---
id: jgrtvjxx
title: 行冻结
metaTitle: Row freezing - JavaScript Data Grid | Handsontable
description: Lock (freeze) the position of specified rows, keeping them visible while scrolling to another area of the grid. This feature is sometimes called "pinned rows".
permalink: /row-freezing
canonicalUrl: /row-freezing
tags:
  - fixing rows
  - pinning rows
  - fixedRows
react:
  id: y5wx1mrk
  metaTitle: Row freezing - React Data Grid | Handsontable
searchCategory: Guides
category: Rows
---

# 行冻结

锁定指定行的位置，使它们在滚动时保持可见.

[[toc]]

## 概述

行冻结将网格的特定行锁定在适当的位置，使它们在滚动到网格的另一个区域时保持可见.

此功能有时称为`固定行`.

## 例子

以下示例使用`fixedRowsTop: 2`指定两个固定行.需要水平滚动条，所以在CSS中设置容器`width`和`overflow:hidden`.

::: only-for javascript

::: example #example1 --js 1 --ts 2

@[code](@/content/guides/rows/row-freezing/javascript/example1.js)
@[code](@/content/guides/rows/row-freezing/javascript/example1.ts)

:::

:::

::: only-for react

::: example #example1 :react --js 1 --ts 2

@[code](@/content/guides/rows/row-freezing/react/example1.jsx)
@[code](@/content/guides/rows/row-freezing/react/example1.tsx)

:::

:::

## 相关API参考

- 配置选项:
  - [`fixedRowsBottom`](@/api/options.md#fixedrowsbottom)
  - [`fixedRowsTop`](@/api/options.md#fixedrowstop)
