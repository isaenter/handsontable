---
id: d2in9k81
title: 行移动
metaTitle: Row moving - JavaScript Data Grid | Handsontable
description: Change the order of rows, either manually (dragging them to another location), or programmatically (using Handsontable's API methods).
permalink: /row-moving
canonicalUrl: /row-moving
react:
  id: g5mksyu1
  metaTitle: Row moving - React Data Grid | Handsontable
searchCategory: Guides
category: Rows
---

# 行移动

手动（将它们拖到另一个位置）或以编程方式（使用 Handsontable 的 API 方法）更改行的顺序。

[[toc]]

## 启用`ManualRowMove`插件

要启用行移动，请将 [`manualRowMove`](@/api/options.md#manualrowmove) 选项设置为 `true`。

可拖动的移动手柄出现在所选行标题上方。您可以单击并将其拖动到行标题正文中的任何位置。

::: only-for javascript

::: example #example1 --js 1 --ts 2

@[code](@/content/guides/rows/row-moving/javascript/example1.js)
@[code](@/content/guides/rows/row-moving/javascript/example1.ts)

:::

:::

::: only-for react

::: example #example1 :react --js 1 --ts 2

@[code](@/content/guides/rows/row-moving/react/example1.jsx)
@[code](@/content/guides/rows/row-moving/react/example1.tsx)

:::

:::

## `manualRowMove` 插件的拖动和移动动作

该插件的 [`dragRows`](@/api/manualRowMove.md#dragrows) 和 [`moveRows`](@/api/manualRowMove.md#moverows) API 函数之间存在显着差异。它们都改变行的顺序，但它们依赖于不同类型的索引。它们之间的差异如下图所示。

这两个方法都会触发 [`beforeRowMove`](@/api/hooks.md#beforerowmove) 和 [`afterRowMove`](@/api/hooks.md#afterrowmove) 挂钩，但只会触发 [`dragRows`](@ /api/manualRowMove.md#dragrows) 将 `dropIndex` 参数传递给它们。

[`dragRows`](@/api/manualRowMove.md#dragrows) 方法有一个 `dropIndex` 参数，它指向要删除元素的位置。

<span class="img-invert">

![dragRows method]({{$basePath}}/img/drag_action.svg)

</span>


[`moveRows`](@/api/manualRowMove.md#moverows) 方法有一个 `finalIndex` 参数，它指向在 _moving_ 操作之后元素将被放置的位置 -`finalIndex` 是第一个移动元素的索引。

<span class="img-invert">

![moveRows method]({{$basePath}}/img/move_action.svg)

</span>

[`moveRows`](@/api/manualRowMove.md#moverows) 函数无法执行某些操作，例如，无法将多个元素移动到最后一个位置。在这种情况下，移动将被取消。插件的 [`isMovePossible`](@/api/manualRowMove.md#ismovepossible) API 方法和 `movePossible` 参数 `beforeRowMove` 和 `afterRowMove` 挂钩有助于确定此类情况。

## 相关API参考

- Options:
  - [`manualRowMove`](@/api/options.md#manualrowmove)
- 核心方法:
  - [`toVisualRow`](@/api/core.md#tovisualrow)
- Hooks:
  - [`afterRowMove`](@/api/hooks.md#afterrowmove)
  - [`beforeRowMove`](@/api/hooks.md#beforerowmove)
- 插件:
  - [`ManualRowMove`](@/api/manualRowMove.md)
