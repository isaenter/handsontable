---
id: 42px61id
title: 行预填充
metaTitle: Row pre-populating - JavaScript Data Grid | Handsontable
description: Populate newly-added rows with predefined template values, using cell renderers.
permalink: /row-prepopulating
canonicalUrl: /row-prepopulating
tags:
  - spare rows
  - extra rows
  - bottom rows
  - placeholder
react:
  id: kmqhr00y
  metaTitle: Row pre-populating - React Data Grid | Handsontable
searchCategory: Guides
category: Rows
---

# 行预填充

使用单元格渲染器用预定义的模板值填充新添加的行.

[[toc]]

## 例子

下面的示例显示了如何使用单元格渲染器来填充空行中的模板值.当编辑空行中的单元格时，[`beforeChange`](@/api/hooks.md#beforechange) 回调会使用模板值填充该行.

::: only-for javascript

::: example #example1 --js 1 --ts 2

@[code](@/content/guides/rows/row-prepopulating/javascript/example1.js)
@[code](@/content/guides/rows/row-prepopulating/javascript/example1.ts)

:::

:::

::: only-for react

::: example #example1 :react --js 1 --ts 2

@[code](@/content/guides/rows/row-prepopulating/react/example1.jsx)
@[code](@/content/guides/rows/row-prepopulating/react/example1.tsx)

:::

:::

## 相关API参考

- Hooks:
  - [`beforeChange`](@/api/hooks.md#beforechange)
