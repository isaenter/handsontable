---
id: aq1vywt4
title: 列移动
metaTitle: Column moving - JavaScript Data Grid | Handsontable
description: Change the order of columns, either manually (dragging them to another location), or programmatically (using Handsontable's API methods).
permalink: /column-moving
canonicalUrl: /column-moving
react:
  id: zhlikwwh
  metaTitle: Column moving - React Data Grid | Handsontable
searchCategory: Guides
category: Columns
---

# 列移动

手动（将它们拖到另一个位置）或以编程方式（使用 Handsontable 的 API 方法）更改列的顺序。

[[toc]]

## 启用插件

要启用列移动，请将 [`manualColumnMove`](@/api/options.md#manualcolumnmove) 配置选项设置为 `true`。

可拖动的移动手柄出现在所选列标题上方。您可以单击并将其拖动到网格中的任何位置。

::: only-for javascript

::: example #example1 --js 1 --ts 2

@[code](@/content/guides/columns/column-moving/javascript/example1.js)
@[code](@/content/guides/columns/column-moving/javascript/example1.ts)

:::

:::

::: only-for react

::: example #example1 :react --js 1 --ts 2

@[code](@/content/guides/columns/column-moving/react/example1.jsx)
@[code](@/content/guides/columns/column-moving/react/example1.tsx)

:::

:::

#### 移动列标题

当您移动列时，默认列标题（A、B、C）保持不变。

::: only-for javascript

::: example #example2 --js 1 --ts 2

@[code](@/content/guides/columns/column-moving/javascript/example2.js)
@[code](@/content/guides/columns/column-moving/javascript/example2.ts)

:::

:::

::: only-for react

::: example #example2 :react --js 1 --ts 2

@[code](@/content/guides/columns/column-moving/react/example2.jsx)
@[code](@/content/guides/columns/column-moving/react/example2.tsx)

:::

:::

但是，如果您使用自己的列标签（例如，一、二、三）配置 [`colHeaders`](@/api/options.md#colheaders) 选项，您的标题将随列一起移动。

::: only-for javascript

::: example #example3 --js 1 --ts 2

@[code](@/content/guides/columns/column-moving/javascript/example3.js)
@[code](@/content/guides/columns/column-moving/javascript/example3.ts)

:::

:::

::: only-for react

::: example #example3 :react --js 1 --ts 2

@[code](@/content/guides/columns/column-moving/react/example3.jsx)
@[code](@/content/guides/columns/column-moving/react/example3.tsx)

:::

:::

## [`ManualColumnMove`](@/api/manualColumnMove.md) 插件的拖动和移动操作

该插件的 [`dragColumns`](@/api/manualColumnMove.md#dragcolumns) 和 [`moveColumns`](@/api/manualColumnMove.md#movecolumns) API 函数之间存在显着差异。它们都改变了列的顺序，但它们依赖于不同类型的索引。它们之间的差异如下图所示。

这两个方法都会触发 [`beforeColumnMove`](@/api/hooks.md#beforecolumnmove) 和 [`afterColumnMove`](@/api/hooks.md#aftercolumnmove) 挂钩，但只会触发 [`dragColumns`](@ /api/manualColumnMove.md#dragcolumns) 传递[`dropIndex`](@/api/manualColumnMove.md#dragcolumns) 参数。

[`dragColumns`](@/api/manualColumnMove.md#dragcolumns) 方法有一个 [`dropIndex`](@/api/manualColumnMove.md#dragcolumns) 参数，该参数指向要删除元素的位置。

<span class="img-invert">

![dragColumns method]({{$basePath}}/img/drag_action.svg)

</span>

[`moveColumns`](@/api/manualColumnMove.md#movecolumns) 方法有一个 `finalIndex` 参数，它指向在 _moving_ 操作之后元素将被放置的位置 -`finalIndex` 是第一个移动元素的索引。

<span class="img-invert">

![moveColumns method]({{$basePath}}/img/move_action.svg)

</span>

[`moveColumns`](@/api/manualColumnMove.md#movecolumns) 函数无法执行某些操作，例如，无法将多个元素移动到最后一个位置。在这种情况下，移动将被取消。插件的 [`isMovePossible`](@/api/manualColumnMove.md#ismovepossible) API 方法和 `movePossible` 参数 [`beforeColumnMove`](@/api/hooks.md#beforecolumnmove) 和 [`afterColumnMove`](@ /api/hooks.md#aftercolumnmove) 挂钩有助于确定此类情况。

## 相关API参考

- 配置选项:
  - [`manualColumnMove`](@/api/options.md#manualcolumnmove)
- 核心方法:
  - [`colToProp()`](@/api/core.md#coltoprop)
  - [`isColumnModificationAllowed()`](@/api/core.md#iscolumnmodificationallowed)
  - [`propToCol()`](@/api/core.md#proptocol)
  - [`toPhysicalColumn()`](@/api/core.md#tophysicalcolumn)
  - [`toVisualColumn()`](@/api/core.md#tovisualcolumn)
- Hooks:
  - [`afterColumnMove`](@/api/hooks.md#aftercolumnmove)
  - [`beforeColumnMove`](@/api/hooks.md#beforecolumnmove)
- 插件:
  - [`ManualColumnMove`](@/api/manualColumnMove.md)
