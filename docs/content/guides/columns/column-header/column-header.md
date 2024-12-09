---
id: qiasr3y1
title: 列标题
metaTitle: Column headers - JavaScript Data Grid | Handsontable
description: Use default column headers (A, B, C), or set them to custom values provided by an array or a function.
permalink: /column-header
canonicalUrl: /column-header
react:
  id: 5e0tnexi
  metaTitle: Column headers - React Data Grid | Handsontable
searchCategory: Guides
category: Columns
---

# 列标题

使用默认列标题（A、B、C），或将它们设置为数组或函数提供的自定义值。

[[toc]]

## 概述

列标题是灰色行，用于标记每一列或一组列。默认情况下，这些标头按字母顺序填充字母。

要反映特定列中数据的类型或类别，请为其指定自定义名称，然后将其显示在列标题中。例如，不要将字母作为标签，如`A、B、C、...`，而是将它们命名为`ID、全名、国家/地区...`。

## 默认标头
将 [`colHeaders`](@/api/options.md#colheaders) 选项设置为 `true` 会启用默认列标题，如下例所示：

::: only-for javascript

::: example #example1 --js 1 --ts 2

@[code](@/content/guides/columns/column-header/javascript/example1.js)
@[code](@/content/guides/columns/column-header/javascript/example1.ts)

:::

:::

::: only-for react

::: example #example1 :react --js 1 --ts 2

@[code](@/content/guides/columns/column-header/react/example1.jsx)
@[code](@/content/guides/columns/column-header/react/example1.tsx)

:::

:::

## 标头标签作为数组
标签数组可用于设置 [`colHeaders`](@/api/options.md#colheaders)，如下例所示：

::: only-for javascript

::: example #example2 --js 1 --ts 2

@[code](@/content/guides/columns/column-header/javascript/example2.js)
@[code](@/content/guides/columns/column-header/javascript/example2.ts)

:::

:::

::: only-for react

::: example #example2 :react --js 1 --ts 2

@[code](@/content/guides/columns/column-header/react/example2.jsx)
@[code](@/content/guides/columns/column-header/react/example2.tsx)

:::

:::

## 标头标签作为函数
[`colHeaders`](@/api/options.md#colheaders) 也可以使用函数填充，如下例所示：

::: only-for javascript

::: example #example3 --js 1 --ts 2

@[code](@/content/guides/columns/column-header/javascript/example3.js)
@[code](@/content/guides/columns/column-header/javascript/example3.ts)

:::

:::

::: only-for react

::: example #example3 :react --js 1 --ts 2

@[code](@/content/guides/columns/column-header/react/example3.jsx)
@[code](@/content/guides/columns/column-header/react/example3.tsx)

:::

:::

## 自定义列标题

您可以将标题标签中的文本与 [`headerClassName`](@/api/options.md#headerclassname) 选项对齐。将其设置为`htLeft`、`htCenter`或`htRight`将分别将标题标签向左、居中或向右对齐。

您还可以使用 [`columns`](@/api/options.md#columns) 选项设置特定列的对齐方式。

::: only-for javascript

::: example #example4 --js 1 --ts 2

@[code](@/content/guides/columns/column-header/javascript/example4.js)
@[code](@/content/guides/columns/column-header/javascript/example4.ts)

:::

:::

::: only-for react

::: example #example4 :react --js 1 --ts 2

@[code](@/content/guides/columns/column-header/react/example4.jsx)
@[code](@/content/guides/columns/column-header/react/example4.tsx)

:::

:::

如果要设置标题标签的样式，可以将任意数量的类名（以空格分隔）传递给 [`header ClassName`](@/api/options.md#headerclassname) 选项。

::: only-for javascript

::: example #example5 --css 1 --js 2 --ts 3

@[code](@/content/guides/columns/column-header/javascript/example5.css)
@[code](@/content/guides/columns/column-header/javascript/example5.js)
@[code](@/content/guides/columns/column-header/javascript/example5.ts)

:::

:::

::: only-for react

::: example #example5 :react --css 1 --js 2 --ts 3

@[code](@/content/guides/columns/column-header/react/example5.css)
@[code](@/content/guides/columns/column-header/react/example5.jsx)
@[code](@/content/guides/columns/column-header/react/example5.tsx)

:::

:::

## 嵌套标头

更复杂的数据结构可以用多个标题来显示，每个标题代表不同的数据类别。要了解有关嵌套标题的更多信息，请参阅[列组](@/guides/columns/column-groups/column-groups.md)页面。

## 相关文章

### 相关指南

<div class="boxes-list gray">

- [列组](@/guides/columns/column-groups/column-groups.md)

</div>

### 相关API参考

- 配置选项:
  - [`activeHeaderClassName`](@/api/options.md#activeheaderclassname)
  - [`colHeaders`](@/api/options.md#colheaders)
  - [`columnHeaderHeight`](@/api/options.md#columnheaderheight)
  - [`currentHeaderClassName`](@/api/options.md#currentheaderclassname)
  - [`nestedHeaders`](@/api/options.md#nestedheaders)
  - [`title`](@/api/options.md#title)
- 核心方法:
  - [`getColHeader()`](@/api/core.md#getcolheader)
  - [`hasColHeaders()`](@/api/core.md#hascolheaders)
- Hooks:
  - [`afterGetColHeader`](@/api/hooks.md#aftergetcolheader)
  - [`afterGetColumnHeaderRenderers`](@/api/hooks.md#aftergetcolumnheaderrenderers)
  - [`beforeHighlightingColumnHeader`](@/api/hooks.md#beforehighlightingcolumnheader)
  - [`modifyColHeader`](@/api/hooks.md#modifycolheader)
  - [`modifyColumnHeaderHeight`](@/api/hooks.md#modifycolumnheaderheight)
- 插件:
  - [`NestedHeaders`](@/api/nestedHeaders.md)
