---
id: if13we5c
title: 自动填充值
metaTitle: Autofill values - JavaScript Data Grid | Handsontable
description: Copy a cell's value into multiple other cells, using the "fill handle" UI element. Configure the direction of copying, and more, through Handsontable's API.
permalink: /autofill-values
canonicalUrl: /autofill-values
tags:
  - fill handle
  - smart fill
  - populate data
  - drag down
  - square
  - auto-fill
  - auto fill
react:
  id: m4x3zpiw
  metaTitle: Autofill values - React Data Grid | Handsontable
searchCategory: Guides
category: Cell features
---

# 自动填充值

使用`填充句柄`UI 元素将单元格的值复制到多个其他单元格中。通过 Handsontable 的 API 配置复制方向等。

[[toc]]

## 全方位自动填充

使用所选单元格角落中称为`填充手柄`的小方块，您可以拖动它(向下拖动`)以重复单元格中的值。双击`单元格 B4`中值为`30`的填充手柄，将所选内容填充到相邻列中的最后一个值，就像在 Excel 或 Google Sheets 中一样。

::: only-for javascript

::: example #example1 --js 1 --ts 2

@[code](@/content/guides/cell-features/autofill-values/javascript/example1.js)
@[code](@/content/guides/cell-features/autofill-values/javascript/example1.ts)

:::

:::

::: only-for react

::: example #example1 :react --js 1 --ts 2

@[code](@/content/guides/cell-features/autofill-values/react/example1.jsx)
@[code](@/content/guides/cell-features/autofill-values/react/example1.tsx)

:::

:::

## 仅在垂直方向自动填充并创建新行

在此配置中，填充手柄仅限于垂直移动。通过将 [`autoInsertRow`](@/api/options.md#fillhandle) 更改为 `true`，新行会自动添加到表格底部。

::: only-for javascript

::: example #example2 --js 1 --ts 2

@[code](@/content/guides/cell-features/autofill-values/javascript/example2.js)
@[code](@/content/guides/cell-features/autofill-values/javascript/example2.ts)

:::

:::

::: only-for react

::: example #example2 :react --js 1 --ts 2

@[code](@/content/guides/cell-features/autofill-values/react/example2.jsx)
@[code](@/content/guides/cell-features/autofill-values/react/example2.tsx)

:::

:::

## 相关API参考

- 配置选项：
  - [`fillHandle`](@/api/options.md#fillhandle)
- Hooks:
  - [`afterAutofill`](@/api/hooks.md#afterautofill)
  - [`beforeAutofill`](@/api/hooks.md#beforeautofill)
  - [`modifyAutofillRange`](@/api/hooks.md#modifyautofillrange)
- 插件:
  - [`Autofill`](@/api/autofill.md)
