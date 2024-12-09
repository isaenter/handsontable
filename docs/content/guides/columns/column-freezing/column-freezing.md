---
id: 2anhuqf7
title: 列冻结
metaTitle: Column freezing - JavaScript Data Grid | Handsontable
description: Lock (freeze) the position of specified columns, keeping them visible while scrolling to another area of the grid.
permalink: /column-freezing
canonicalUrl: /column-freezing
tags:
  - fixing columns
  - snapping columns
  - pinning columns
  - fixedColumns
react:
  id: otumcpty
  metaTitle: Column freezing - React Data Grid | Handsontable
searchCategory: Guides
category: Columns
---

# 列冻结

锁定指定列的位置，使它们在滚动时保持可见。

[[toc]]

## 概述

列冻结将网格的特定列锁定在适当的位置，使它们在滚动到时保持可见
网格的另一个区域。我们将冻结列称为`固定`。

您可以在初始化期间或由用户冻结列。

## 在初始化时冻结列

要在初始化时冻结列，请使用 [`fixedColumnsStart`](@/api/options.md#fixedcolumnsstart) 选项。然后，使用以下 CSS 属性配置网格容器：`width`和
`溢出：隐藏`。

如果您的[布局方向](@/guides/internationalization/layout-direction/layout-direction.md) 是`ltr`，则列将从表格左侧冻结。如果您的布局方向是`rtl`，则列将从表格的右侧冻结。

::: only-for javascript

::: example #example1 --js 1 --ts 2

@[code](@/content/guides/columns/column-freezing/javascript/example1.js)
@[code](@/content/guides/columns/column-freezing/javascript/example1.ts)

:::

:::

::: only-for react

::: example #example1 :react --js 1 --ts 2

@[code](@/content/guides/columns/column-freezing/react/example1.jsx)
@[code](@/content/guides/columns/column-freezing/react/example1.tsx)

:::

:::

## 用户触发的冻结

要启用手动列冻结，请将 [`manualColumnFreeze`](@/api/options.md#manualcolumnfreeze) 设置为 `true`。这使您可以使用网格的[上下文菜单](@/guides/accessories-and-menus/context-menu/context-menu.md) 冻结和解冻列。

请注意，当您解冻冻结的列时，它不会返回到原始位置。

::: only-for javascript

::: example #example2 --js 1 --ts 2

@[code](@/content/guides/columns/column-freezing/javascript/example2.js)
@[code](@/content/guides/columns/column-freezing/javascript/example2.ts)

:::

:::

::: only-for react

::: example #example2 :react --js 1 --ts 2

@[code](@/content/guides/columns/column-freezing/react/example2.jsx)
@[code](@/content/guides/columns/column-freezing/react/example2.tsx)

:::

:::

## 相关API参考

- 配置选项:
  - [`fixedColumnsStart`](@/api/options.md#fixedcolumnsstart)
  - [`manualColumnFreeze`](@/api/options.md#manualcolumnfreeze)
- 插件:
  - [`ManualColumnFreeze`](@/api/manualColumnFreeze.md)
