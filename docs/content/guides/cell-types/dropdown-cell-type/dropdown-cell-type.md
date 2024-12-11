---
id: oi78d8nv
title: 下拉单元格类型
metaTitle: Dropdown cell type - JavaScript Data Grid | Handsontable
description: Collect user input with a searchable list of choices, by using the dropdown cell type.
permalink: /dropdown-cell-type
canonicalUrl: /dropdown-cell-type
react:
  id: 5i86kjqu
  metaTitle: Dropdown cell type - React Data Grid | Handsontable
searchCategory: Guides
category: Cell types
---

# 下拉单元格类型

通过使用下拉单元格类型，通过可搜索的选项列表收集用户输入.

[[toc]]

## 概述

下拉单元格类型基于自动完成单元格类型，并且也可以搜索.

## 用法

此示例显示了下拉功能的用法.下拉菜单基于[自动完成](@/guides/cell-types/autocomplete-cell-type/autocomplete-cell-type.md) 单元格类型. `自动完成`单元格类型使用的所有选项也适用于`下拉菜单`.

::: only-for javascript

在内部，单元格`{type: 'dropdown'}`相当于单元格`{type: 'autocomplete', strict: true, filter: false}`.因此，您可以将`dropdown`视为可搜索的`<select>`.

:::

::: only-for react

在内部，单元格 `type="dropdown"` 相当于单元格 `type="autocomplete" strict={true} filter={false}`.因此，您可以将`dropdown`视为可搜索的`<select>`.

:::

::: only-for javascript

::: example #example1 --js 1 --css 2 --ts 3

@[code](@/content/guides/cell-types/dropdown-cell-type/javascript/example1.js)
@[code](@/content/guides/cell-types/dropdown-cell-type/javascript/example1.css)
@[code](@/content/guides/cell-types/dropdown-cell-type/javascript/example1.ts)

:::

:::

::: only-for react

::: example #example1 :react --js 1 --css 2 --ts 3

@[code](@/content/guides/cell-types/dropdown-cell-type/react/example1.jsx)
@[code](@/content/guides/cell-types/dropdown-cell-type/react/example1.css)
@[code](@/content/guides/cell-types/dropdown-cell-type/react/example1.tsx)

:::

:::

## 相关文章

### 相关指南

<div class="boxes-list gray">

- [自动完成单元格类型](@/guides/cell-types/autocomplete-cell-type/autocomplete-cell-type.md)
- [细胞类型](@/guides/cell-types/cell-type/cell-type.md)
- [选择单元格类型](@/guides/cell-types/select-cell-type/select-cell-type.md)

</div>

### 相关API参考

- 配置选项:
  - [`allowHtml`](@/api/options.md#allowhtml)
  - [`source`](@/api/options.md#source)
  - [`trimDropdown`](@/api/options.md#trimdropdown)
  - [`type`](@/api/options.md#type)
  - [`visibleRows`](@/api/options.md#visiblerows)
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
