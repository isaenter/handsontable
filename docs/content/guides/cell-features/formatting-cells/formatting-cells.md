---
id: epmvqw9m
title: 设置单元格格式
metaTitle: Formatting cells - JavaScript Data Grid | Handsontable
description: Change the appearance of cells, using custom CSS classes, inline styles, or custom cell borders.
permalink: /formatting-cells
canonicalUrl: /formatting-cells
react:
  id: qywqgovy
  metaTitle: Formatting cells - React Data Grid | Handsontable
searchCategory: Guides
category: Cell features
---

# 设置单元格格式

使用自定义 CSS 类、内联样式或自定义单元格边框更改单元格的外观。

[[toc]]

## 概述

Handsontable 使用 HTML `table` 结构，因此自定义要么基于引用现有元素，例如 `TR`/`TD`，要么通过应用
您自己的 CSS 类到 HTML 元素。

您可以使用`CSS`类或直接应用于 DOM 元素的样式来格式化单元格。

## 应用自定义 CSS 类样式

在此示例中，我们将自定义类`custom-cell`添加到左上角的单元格，并添加一个`custom-table`CSS 类来突出显示表格标题。
::: only-for javascript

::: example #example1 --css 1 --js 2 --ts 3

@[code](@/content/guides/cell-features/formatting-cells/javascript/example1.css)
@[code](@/content/guides/cell-features/formatting-cells/javascript/example1.js)
@[code](@/content/guides/cell-features/formatting-cells/javascript/example1.ts)

:::

:::

::: only-for react

::: example #example1 :react --css 1 --js 2 --ts 3

@[code](@/content/guides/cell-features/formatting-cells/react/example1.css)
@[code](@/content/guides/cell-features/formatting-cells/react/example1.jsx)
@[code](@/content/guides/cell-features/formatting-cells/react/example1.tsx)

:::

:::

## 应用内联样式

您可以使用`style`属性将内联样式直接应用于 DOM 元素。您可以使用 [`renderer`](@/api/options.md#renderer) 选项来执行此操作。

::: only-for javascript

::: example #example2 --js 1 --ts 2

@[code](@/content/guides/cell-features/formatting-cells/javascript/example2.js)
@[code](@/content/guides/cell-features/formatting-cells/javascript/example2.ts)

:::

:::

::: only-for react

::: example #example2 :react --js 1 --ts 2

@[code](@/content/guides/cell-features/formatting-cells/react/example2.jsx)
@[code](@/content/guides/cell-features/formatting-cells/react/example2.tsx)

:::

:::

## 自定义单元格边框

要启用自定义边框功能，请设置 [`customBorders`](@/api/options.md#customborders) 选项。这可以设置为`true`或初始化为
具有预定义设置的数组。有关可用设置和方法的列表，请访问 [API 参考](@/api/customBorders.md)。

在 API 属性的名称中，单词`start`和`end`指的是对象的起始边缘和结束边缘。
[布局方向](@/guides/internationalization/layout-direction/layout-direction.md)。

::: only-for javascript

::: example #example3 --js 1 --ts 2

@[code](@/content/guides/cell-features/formatting-cells/javascript/example3.js)
@[code](@/content/guides/cell-features/formatting-cells/javascript/example3.ts)

:::

:::

::: only-for react

::: example #example3 :react --js 1 --ts 2

@[code](@/content/guides/cell-features/formatting-cells/react/example3.jsx)
@[code](@/content/guides/cell-features/formatting-cells/react/example3.tsx)

:::

:::

## 相关文章

### 相关指南

- [条件格式](@/guides/cell-features/conditional-formatting/conditional-formatting.md)

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
