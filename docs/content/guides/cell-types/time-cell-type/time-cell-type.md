---
id: q63yhvq5
title: 时间单元类型
metaTitle: Time cell type - JavaScript Data Grid | Handsontable
description: Use the time cell type to display, format, and validate values as times. The time cell type uses Moment.js as a time formatter.
permalink: /time-cell-type
canonicalUrl: /time-cell-type
react:
  id: 34n5nwja
  metaTitle: Time cell type - React Data Grid | Handsontable
searchCategory: Guides
category: Cell types
---

# 时间单元类型

使用时间单元格类型将值显示为时间、设置格式并验证值.时间单元格类型使用 Moment.js 作为时间格式化程序.

[[toc]]

## 用法
要使用时间单元格类型，请在 [`columns`](@/api/options.md#columns) 数组或 [`cells`](@/api/options.md#columns) 数组中设置 `type: 'time'` 选项. md#cells) 函数.
时间单元使用 [Moment.js](https://github.com/moment/moment) 作为时间格式化程序，因此您必须添加以下必需的依赖项:

```html
<script src="https://cdn.jsdelivr.net/npm/moment@2.29.4/moment.min.js"></script>
```

输入到时间类型单元格中的所有数据最终都会根据默认时间格式`h:mm:ss a`进行验证，该格式会转换为`9:30:00 am`，除非提供了另一种格式作为“时间格式`.
如果启用 [` CorrectFormat`](@/api/options.md# Correctformat) 配置选项，这些值将自动格式化以匹配所需的时间格式.

::: tip

默认情况下，输入到时间类型列中的值不会被验证，因此如果您希望它们以正确的格式显示，请记住调用 [`hot.validateCells()`](@/api/core.md#validatecells )在表初始化之后.

:::

## 基本示例

::: only-for javascript

::: example #example1 --js 1 --ts 2

@[code](@/content/guides/cell-types/time-cell-type/javascript/example1.js)
@[code](@/content/guides/cell-types/time-cell-type/javascript/example1.ts)

:::

:::

::: only-for react

::: example #example1 :react --js 1 --ts 2

@[code](@/content/guides/cell-types/time-cell-type/react/example1.jsx)
@[code](@/content/guides/cell-types/time-cell-type/react/example1.tsx)

:::

:::

## 相关文章

### 相关指南

<div class="boxes-list gray">

- [单元格类型](@/guides/cell-types/cell-type/cell-type.md)

</div>

### 相关API参考

- 配置选项:
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
