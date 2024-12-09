---
id: 4ca0c70r
title: 条件格式
metaTitle: Conditional formatting - JavaScript Data Grid | Handsontable
description: Format specified cells, based on dynamic conditions.
permalink: /conditional-formatting
canonicalUrl: /conditional-formatting
react:
  id: eyatgywe
  metaTitle: Conditional formatting - React Data Grid | Handsontable
searchCategory: Guides
category: Cell features
---

# 条件格式

根据动态条件设置指定单元格的格式。

[[toc]]

## 概述

条件格式可用于设置单元格内容的字体、颜色、字体等，也可用于设置单元格样式的格式，所有这些都基于一组预定义的条件。

## 条件格式示例

该演示展示了如何使用单元格类型渲染器功能来进行一些条件格式设置：

1. 第一行是只读的，格式为粗体绿色文本。
2. Nissan 列中的所有单元格均设置为斜体文本格式。
3. 空单元格的格式为银色背景。
4. 负数的格式为红色文本。

::: only-for javascript

::: example #example1 --css 1 --js 2 --ts 3

@[code](@/content/guides/cell-features/conditional-formatting/javascript/example1.css)
@[code](@/content/guides/cell-features/conditional-formatting/javascript/example1.js)
@[code](@/content/guides/cell-features/conditional-formatting/javascript/example1.ts)

:::

:::

::: only-for react

::: example #example1 :react --css 1 --js 2 --ts 3

@[code](@/content/guides/cell-features/conditional-formatting/react/example1.css)
@[code](@/content/guides/cell-features/conditional-formatting/react/example1.jsx)
@[code](@/content/guides/cell-features/conditional-formatting/react/example1.tsx)

:::

:::

## 相关文章

### 相关指南

- [设置单元格格式](@/guides/cell-features/formatting-cells/formatting-cells.md)

### 相关API参考

- 配置选项:
  - [`activeHeaderClassName`](@/api/options.md#activeheaderclassname)
  - [`className`](@/api/options.md#classname)
  - [`commentedCellClassName`](@/api/options.md#commentedcellclassname)
  - [`currentColClassName`](@/api/options.md#currentcolclassname)
  - [`currentHeaderClassName`](@/api/options.md#currentheaderclassname)
  - [`currentRowClassName`](@/api/options.md#currentrowclassname)
  - [`customBorders`](@/api/options.md#customborders)
  - [`invalidCellClassName`](@/api/options.md#invalidcellclassname)
  - [`noWordWrapClassName`](@/api/options.md#nowordwrapclassname)
  - [`placeholder`](@/api/options.md#placeholder)
  - [`placeholderCellClassName`](@/api/options.md#placeholdercellclassname)
  - [`readOnlyCellClassName`](@/api/options.md#readonlycellclassname)
  - [`tableClassName`](@/api/options.md#tableclassname)
- 插件:
  - [`CustomBorders`](@/api/customBorders.md)
