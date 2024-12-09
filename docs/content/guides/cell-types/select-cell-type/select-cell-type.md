---
id: pqe1xozj
title: 选择单元格类型
metaTitle: Select cell type - JavaScript Data Grid | Handsontable
description: Use the select cell type to collect user input with an HTML <select> element that creates a multi-item dropdown list.
permalink: /select-cell-type
canonicalUrl: /select-cell-type
react:
  id: xmdreeu3
  metaTitle: Select cell type - React Data Grid | Handsontable
searchCategory: Guides
category: Cell types
---

# 选择单元格类型

使用选择单元格类型通过 HTML `<select>` 元素收集用户输入，该元素创建多项目下拉列表。

[[toc]]

## 概述

选择单元格类型是 [dropdown](@/guides/cell-types/dropdown-cell-type/dropdown-cell-type.md) 单元格类型的更简单形式。

## 用法

选择编辑器应被视为如何编写编辑器的示例，而不是用作功能齐全的编辑器。它是[下拉编辑器](@/guides/cell-types/dropdown-cell-type/dropdown-cell-type.md) 的更简单的形式。我们建议您在项目中使用后者。

::: only-for javascript

::: example #example1 --js 1 --ts 2

@[code](@/content/guides/cell-types/select-cell-type/javascript/example1.js)
@[code](@/content/guides/cell-types/select-cell-type/javascript/example1.ts)

:::

:::

::: only-for react

::: example #example1 :react --js 1 --ts 2

@[code](@/content/guides/cell-types/select-cell-type/react/example1.jsx)
@[code](@/content/guides/cell-types/select-cell-type/react/example1.tsx)

:::

:::

## 相关文章

### 相关指南

<div class="boxes-list gray">

- [自动完成单元格类型](@/guides/cell-types/autocomplete-cell-type/autocomplete-cell-type.md)
- [细胞类型](@/guides/cell-types/cell-type/cell-type.md)
- [下拉单元格类型](@/guides/cell-types/dropdown-cell-type/dropdown-cell-type.md)

</div>

### 相关API参考

- 配置选项:
  - [`selectOptions`](@/api/options.md#selectoptions)
  - [`type`](@/api/options.md#type)
- 核心方法:
  - [`getCellMeta()`](@/api/core.md#getcellmeta)
  - [`getCellMetaAtRow()`](@/api/core.md#getcellmetaatrow)
  - [`getCellsMeta()`](@/api/core.md#getcellsmeta)
  - [`getDataType()`](@/api/core.md#getdatatype)
  - [`setCellMeta()`](@/api/core.md#setcellmeta)
  - [`setCellMetaObject()`](@/api/core.md#setcellmetaobject)
  - [`removeCellMeta()`](@/api/core.md#removecellmeta)
- Hooks:
  - [`afterGetCellMeta`](@/api/hooks.md#aftergetcellmeta)
  - [`afterSetCellMeta`](@/api/hooks.md#aftersetcellmeta)
  - [`beforeGetCellMeta`](@/api/hooks.md#beforegetcellmeta)
  - [`beforeSetCellMeta`](@/api/hooks.md#beforesetcellmeta)
