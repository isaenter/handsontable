---
id: p25m5sco
title: 日期单元格类型
metaTitle: Date cell type - JavaScript Data Grid | Handsontable
description: Use the date cell type to display, format, and validate date values. Pick a date using an interactive pop-up editor.
permalink: /date-cell-type
canonicalUrl: /date-cell-type
react:
  id: u7t2rn0n
  metaTitle: Date cell type - React Data Grid | Handsontable
searchCategory: Guides
category: Cell types
---

# 日期单元格类型

使用日期单元格类型来显示、格式化和验证日期值.使用交互式弹出编辑器选择日期.

[[toc]]

## 用法

要设置日期单元格类型，请在 [`columns`](@/api/options.md#columns) 数组或 [`cells`](@/api/options.md) 中使用选项 `type: 'date'` #cells)功能.日期单元格使用 [Pikaday datepicker](https://github.com/dbushell/Pikaday) 作为 UI 控件. Pikaday 使用 [Moment.js](https://github.com/moment/moment) 作为日期格式化程序.

请注意，日期单元格需要额外的模块:

```html
<script src="https://cdn.jsdelivr.net/npm/moment@2.29.4/moment.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@handsontable/pikaday@1.0.0/pikaday.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@handsontable/pikaday@1.0.0/css/pikaday.min.css">
```

## 日期格式

`date`单元格接受格式符合 [`dateFormat`](@/api/options.md#dateformat) 设置的字符串.

默认日期格式为`DD/MM/YYYY`.

Handsontable 不支持 JavaScript 的`Date`对象.

### 更改日期格式

要更改`date`单元格接受的日期格式，请将 [`dateFormat`](@/api/options.md#dateformat) 配置选项设置为具有您首选格式的字符串.例如:

::: only-for javascript

```js
dateFormat: 'YYYY-MM-DD',
```

:::

::: only-for react

```jsx
dateFormat={'YYYY-MM-DD'}
```

:::

### 自动更正无效日期

默认情况下，当用户输入的日期格式与 [`dateFormat`](@/api/options.md#dateformat) 设置不匹配时，该日期将被视为无效.

您可以让 Handsontable 自动更正此类日期，使它们符合所需的格式.为此，请将 [` CorrectFormat`](@/api/options.md# Correctformat) 选项设置为 `true`.
例如:

::: only-for javascript

```js
dateFormat: 'YYYY-MM-DD',

// 默认行为
// 输入的日期为`30/12/2022`将无效
correctFormat: false,

// 输入的日期`30/12/2022`将更正为`2022/12/30`
correctFormat: true,
```

:::

::: only-for react

```jsx
dateFormat={'YYYY-MM-DD'}

// 默认行为
// 输入的日期为`30/12/2022`将无效
correctFormat={false}

// 输入的日期`30/12/2022`将更正为`2022/12/30`
correctFormat={true}
```

:::

## 基本示例

单击 ▼ 图标之一打开交互式日期编辑器.

::: only-for javascript

::: example #example1 --js 1 --ts 2

@[code](@/content/guides/cell-types/date-cell-type/javascript/example1.js)
@[code](@/content/guides/cell-types/date-cell-type/javascript/example1.ts)

:::

:::

::: only-for react

::: example #example1 :react --js 1 --ts 2

@[code](@/content/guides/cell-types/date-cell-type/react/example1.jsx)
@[code](@/content/guides/cell-types/date-cell-type/react/example1.tsx)

:::

:::

## 相关文章

### 相关指南

<div class="boxes-list gray">

- [Cell type](@/guides/cell-types/cell-type/cell-type.md)

</div>

### 相关API参考

- 配置选项:
  - [`correctFormat`](@/api/options.md#correctformat)
  - [`dateFormat`](@/api/options.md#dateformat)
  - [`datePickerConfig`](@/api/options.md#datepickerconfig)
  - [`defaultDate`](@/api/options.md#defaultdate)
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
