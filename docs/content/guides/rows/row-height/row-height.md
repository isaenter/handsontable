---
id: fehmrn1j
title: 行高
metaTitle: Row heights - JavaScript Data Grid | Handsontable
description: Configure row heights, using a number, an array or a function. Let your users manually change row heights using Handsontable's interface.
permalink: /row-height
canonicalUrl: /row-height
tags:
  - resizing rows
  - wrap content
  - overflow
  - crop content
  - row size
  - height
  - max-height
  - min-height
  - row dimensions
  - manual resize
react:
  id: 87ulwfs2
  metaTitle: Row heights - React Data Grid | Handsontable
searchCategory: Guides
category: Rows
---

# 行高

使用数字、数组或函数配置行高。让您的用户使用 Handsontable 的界面手动更改行高。

[[toc]]

## 概述

默认（和最小）行高是根据使用的主题的填充和边框值计算的（在经典主题中，它是行底部边框的 23 px -22 px + 1 px）。除非另有配置，Handsontable 假定您的单元格内容适合此默认行高。

如果您的单元格内容需要大于默认高度（因为您使用多行文本或[自定义渲染器](@/guides/cell-functions/cell-renderer/cell-renderer.md) 或自定义样式），请使用其中一种以下配置以避免潜在的布局问题：
  - 提前配置行高：将 [`rowHeights`](@/api/options.md#rowheights) 选项设置为 [number](#set-row-heights-to-a-number) 或 [array](#set-row-heights-with-an-array)，或一个[function](#set-row-heights-with-a-function)。这要求您事先知道高度，但会带来最佳的运行时性能。
  - 将 [`manualRowResize`](@/api/options.md#manualrowresize) 选项设置为数组，以配置初始行高并让您的用户[手动调整行高](#adjust-row-heights-manually)。
  - 通过设置 `autoRowSize: true` 启用 [`AutoRowSize`](@/api/autoRowSize.md) 插件。这告诉 Handsontable 测量 DOM 中的实际行高。它会影响运行时性能，但很准确。

## 将行高设置为数字

在此示例中，我们为整个网格中的所有行设置相同的高度`40px`。

::: only-for javascript

::: example #example1 --js 1 --ts 2

@[code](@/content/guides/rows/row-height/javascript/example1.js)
@[code](@/content/guides/rows/row-height/javascript/example1.ts)

:::

:::

::: only-for react

::: example #example1 :react --js 1 --ts 2

@[code](@/content/guides/rows/row-height/react/example1.jsx)
@[code](@/content/guides/rows/row-height/react/example1.tsx)

:::

:::

## 使用数组设置行高

在此示例中，仅为第一行设置高度。每增加一行都会根据内容自动调整。

::: only-for javascript

::: example #example2 --js 1 --ts 2

@[code](@/content/guides/rows/row-height/javascript/example2.js)
@[code](@/content/guides/rows/row-height/javascript/example2.ts)

:::

:::

::: only-for react

::: example #example2 :react --js 1 --ts 2

@[code](@/content/guides/rows/row-height/react/example2.jsx)
@[code](@/content/guides/rows/row-height/react/example2.tsx)

:::

:::

## 使用函数设置行高

可以使用函数设置行高。在此示例中，所有行的大小是使用一个函数设置的，该函数采用行`索引`(1, 2 ...) 并将其乘以每个连续行的`20px`。

::: only-for javascript

::: example #example3 --js 1 --ts 2

@[code](@/content/guides/rows/row-height/javascript/example3.js)
@[code](@/content/guides/rows/row-height/javascript/example3.ts)

:::

:::

::: only-for react

::: example #example3 :react --js 1 --ts 2

@[code](@/content/guides/rows/row-height/react/example3.jsx)
@[code](@/content/guides/rows/row-height/react/example3.tsx)

:::

:::

## 手动调整行高

将选项 [`manualRowResize`](@/api/options.md#manualrowresize) 设置为 `true`，以允许用户通过拖动相邻行标题之间的手柄来手动调整行高大小。不要忘记通过将 [`rowHeaders`](@/api/options.md#rowheaders) 设置为 `true` 来启用行标题。

即使所选行没有彼此相邻放置，您也可以同时调整一行或多行的大小。

::: only-for javascript

::: example #example4 --js 1 --ts 2

@[code](@/content/guides/rows/row-height/javascript/example4.js)
@[code](@/content/guides/rows/row-height/javascript/example4.ts)

:::

:::

::: only-for react

::: example #example4 :react --js 1 --ts 2

@[code](@/content/guides/rows/row-height/react/example4.jsx)
@[code](@/content/guides/rows/row-height/react/example4.tsx)

:::

:::

## 相关API参考

- 配置选项:
  - [`autoRowSize`](@/api/options.md#autorowsize)
  - [`manualRowResize`](@/api/options.md#manualrowresize)
  - [`rowHeights`](@/api/options.md#rowheights)
- 核心方法:
  - [`getRowHeight()`](@/api/core.md#getrowheight)
- Hooks:
  - [`afterRowResize`](@/api/hooks.md#afterrowresize)
  - [`beforeRowResize`](@/api/hooks.md#beforerowresize)
  - [`modifyRowHeight`](@/api/hooks.md#modifyrowheight)
- 插件:
  - [`AutoRowSize`](@/api/autoRowSize.md)
  - [`ManualRowResize`](@/api/manualRowResize.md)
