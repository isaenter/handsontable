---
id: bpcuomaq
title: 列宽
metaTitle: Column widths - JavaScript Data Grid | Handsontable
description: Configure column widths, using an array or a function. Let your users manually change column widths using Handsontable's interface.
permalink: /column-width
canonicalUrl: /column-width
tags:
  - resizing columns
  - stretching columns
  - column size
  - width
  - max-width
  - min-width
  - column dimensions
  - manual resize
react:
  id: gr6w8qsy
  metaTitle: Column widths - React Data Grid | Handsontable
searchCategory: Guides
category: Columns
---

# 列宽

使用数组或函数配置列宽。让您的用户使用 Handsontable 的界面手动更改列宽。

[[toc]]

## 概述

默认情况下，列宽会根据内容的宽度进行调整。但是，如果内容的宽度小于`50px`（包括侧面边框的`1px`），则列宽将保持恒定为`50px`。您可以将列大小作为常量、数组或函数传递。

如果单元格内的内容不适合单元格的宽度，则单元格内的内容将被换行。

## 将列宽设置为常量

在此示例中，我们为整个网格中的所有列设置相同的`100px`宽度。

::: only-for javascript

::: example #example1 --js 1 --ts 2

@[code](@/content/guides/columns/column-width/javascript/example1.js)
@[code](@/content/guides/columns/column-width/javascript/example1.ts)

:::

:::

::: only-for react

::: example #example1 :react --js 1 --ts 2

@[code](@/content/guides/columns/column-width/react/example1.jsx)
@[code](@/content/guides/columns/column-width/react/example1.tsx)

:::

:::

## 设置数组的列宽

在此示例中，仅设置前四列的宽度。每个附加列都会自动调整以适应内容。

::: only-for javascript

::: example #example2 --js 1 --ts 2

@[code](@/content/guides/columns/column-width/javascript/example2.js)
@[code](@/content/guides/columns/column-width/javascript/example2.ts)

:::

:::

::: only-for react

::: example #example2 :react --js 1 --ts 2

@[code](@/content/guides/columns/column-width/react/example2.jsx)
@[code](@/content/guides/columns/column-width/react/example2.tsx)

:::

:::

## 使用函数设置列宽

在此示例中，所有列的大小是使用函数设置的，方法是采用列`索引`(1, 2 ...) 并将其乘以每个连续列的`40px`。

::: only-for javascript

::: example #example3 --js 1 --ts 2

@[code](@/content/guides/columns/column-width/javascript/example3.js)
@[code](@/content/guides/columns/column-width/javascript/example3.ts)

:::

:::

::: only-for react

::: example #example3 :react --js 1 --ts 2

@[code](@/content/guides/columns/column-width/react/example3.jsx)
@[code](@/content/guides/columns/column-width/react/example3.tsx)

:::

:::

## 手动调整列宽

将选项 [`manualColumnResize`](@/api/options.md#manualcolumnresize) 设置为 `true` 以允许用户通过拖动相邻列标题之间的手柄来手动调整列宽。如果双击该手柄，宽度将立即调整为列中最长值的大小。不要忘记通过将 [`colHeaders`](@/api/options.md#colheaders) 设置为 `true` 来启用列标题。

您可以同时调整一列或多列的大小，即使选定的列不是彼此相邻放置的。

::: only-for javascript

::: example #example4 --js 1 --ts 2

@[code](@/content/guides/columns/column-width/javascript/example4.js)
@[code](@/content/guides/columns/column-width/javascript/example4.ts)

:::

:::

::: only-for react

::: example #example4 :react --js 1 --ts 2

@[code](@/content/guides/columns/column-width/react/example4.jsx)
@[code](@/content/guides/columns/column-width/react/example4.tsx)

:::

:::

## 列拉伸

您可以调整列的宽度，使它们自动适合表格的宽度。特定列的宽度将根据网格中其他列的大小和数量来计算。仅当数据集中至少有一列且列数少于启用水平滚动条所需的列数时，此选项才有意义。

::: tip

Use the [context menu](@/guides/accessories-and-menus/context-menu/context-menu.md) to insert or remove columns. This will help you understand how the grid reacts to changes.

:::

### 同等地拟合所有列

此示例通过设置选项 [`stretchH: 'all'`](@/api/options.md#stretchh) 使所有列均等地适合容器的宽度。

::: only-for javascript

::: example #example5 --js 1 --ts 2

@[code](@/content/guides/columns/column-width/javascript/example5.js)
@[code](@/content/guides/columns/column-width/javascript/example5.ts)

:::

:::

::: only-for react

::: example #example5 :react --js 1 --ts 2

@[code](@/content/guides/columns/column-width/react/example5.jsx)
@[code](@/content/guides/columns/column-width/react/example5.tsx)

:::

:::

### 仅拉伸最后一列

在此示例中，前三列设置为 80px 宽，最后一列自动填充剩余空间。这是通过设置选项 [`stretchH: 'last'`](@/api/options.md#stretchh) 来实现的。

::: only-for javascript

::: example #example6 --js 1 --ts 2

@[code](@/content/guides/columns/column-width/javascript/example6.js)
@[code](@/content/guides/columns/column-width/javascript/example6.ts)

:::

:::

::: only-for react

::: example #example6 :react --js 1 --ts 2

@[code](@/content/guides/columns/column-width/react/example6.jsx)
@[code](@/content/guides/columns/column-width/react/example6.tsx)

:::

:::

## 关于性能的说明

如上所述，列的默认宽度基于列内任何单元格中的最宽值。您可能想知道如何处理包含数十万条记录的数据集。

此功能的实现得益于 [`AutoColumnSize`](@/api/autoColumnSize.md) 插件，该插件默认启用。在内部，它将数据集划分为更小的集合，并仅渲染其中的一些集合来测量它们的大小。然后根据最宽的找到值的宽度将该大小应用于整个列。

为了提高性能，您可以通过为指定列或所有列定义固定大小来关闭此功能。

## 容器的大小

设置容纳 Handsontable 的容器的尺寸在[网格大小](@/guides/getting-started/grid-size/grid-size.md)页面上有详细描述。

## 相关API参考

- 配置选项:
  - [`autoColumnSize`](@/api/options.md#autocolumnsize)
  - [`colWidths`](@/api/options.md#colwidths)
  - [`manualColumnResize`](@/api/options.md#manualcolumnresize)
  - [`stretchH`](@/api/options.md#stretchh)
- 核心方法:
  - [`getColWidth()`](@/api/core.md#getcolwidth)
- Hooks:
  - [`afterColumnResize`](@/api/hooks.md#aftercolumnresize)
  - [`beforeColumnResize`](@/api/hooks.md#beforecolumnresize)
  - [`beforeStretchingColumnWidth`](@/api/hooks.md#beforestretchingcolumnwidth)
  - [`modifyAutoColumnSizeSeed`](@/api/hooks.md#modifyautocolumnsizeseed)
  - [`modifyColWidth`](@/api/hooks.md#modifycolwidth)
- 插件:
  - [`AutoColumnSize`](@/api/autoColumnSize.md)
  - [`ManualColumnResize`](@/api/manualColumnResize.md)
