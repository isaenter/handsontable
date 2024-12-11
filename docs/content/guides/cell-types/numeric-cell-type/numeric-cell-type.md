---
id: l5a447bl
title: 数字单元格类型
metaTitle: Numeric cell type - JavaScript Data Grid | Handsontable
description: Display, format, sort, and filter numbers correctly by using the numeric cell type.
permalink: /numeric-cell-type
canonicalUrl: /numeric-cell-type
react:
  id: e6zmmawj
  metaTitle: Numeric cell type - React Data Grid | Handsontable
searchCategory: Guides
category: Cell types
---

# 数字单元格类型

使用数字单元格类型正确显示、格式化、排序和过滤数字.

[[toc]]

## 概述

Handsontable 中的默认单元格类型是文本.文本单元格的数据被处理为`字符串`
与文本编辑器内部`<textarea>`元素的值相对应的类型.然而，
在很多情况下，您需要将单元格值视为`数字`类型.数字单元格
type 允许您很好地格式化显示的数字并正确排序.

## 数字单元格类型演示

在以下演示中，列**年份**、**价格 ($)**和 **价格 (€)**使用数字单元格类型.
单击列名称对其进行排序.

::: only-for javascript

::: example #example1 :hot-numbro --js 1 --ts 2

@[code](@/content/guides/cell-types/numeric-cell-type/javascript/example1.js)
@[code](@/content/guides/cell-types/numeric-cell-type/javascript/example1.ts)

:::

:::

::: only-for react

::: example #example1 :react-numbro --js 1 --ts 2

@[code](@/content/guides/cell-types/numeric-cell-type/react/example1.jsx)
@[code](@/content/guides/cell-types/numeric-cell-type/react/example1.tsx)

:::

:::

## 使用数字单元格类型

要使用数字单元格类型，请将 [`type`](@/api/options.md#type) 选项设置为 `'numeric'`:

::: only-for javascript

```js
// 为整个网格的每个单元格设置数字单元格类型
type: 'numeric',

// 为单列的每个单元格设置数字单元格类型
columns: [
  {
    type: 'numeric',
  },
]

// 设置单个单元格的数字单元格类型
cell: [
  {
    row: 0,
    col: 0,
    type: 'numeric',
  }
],
```

:::

::: only-for react

```jsx
// 为整个网格的每个单元格设置数字单元格类型
type={'numeric'},

// 为单列的每个单元格设置数字单元格类型
columns={[{
  type: 'numeric',
}]}

// 设置单个单元格的数字单元格类型
cell={[{
  row: 0,
  col: 0,
  type: 'numeric',
}]}
```

:::

请注意，Handsontable 不会将字符串解析为数字.在您的数据源中，确保存储
数字单元格值为数字，而不是字符串.

所有大小不大于 253 (+/-9007199254740991) 的正整数和负整数
可以用`Number`类型表示，即作为安全整数.执行的任何计算
由于 JavaScript 的限制，更大的数字将无法精确计算.

## 格式化数字

要格式化[单元格渲染器](@/guides/cell-functions/cell-renderer/cell-renderer.md)中数值的外观，
使用 [`numericFormat`](@/api/options.md#numericformat) 选项.

在以下演示中，列 **日本价格**和 **土耳其价格**使用两种不同的
[`numericFormat`](@/api/options.md#numericformat) 配置.

::: only-for javascript

::: example #example3 :hot-numbro --js 1 --ts 2

@[code](@/content/guides/cell-types/numeric-cell-type/javascript/example3.js)
@[code](@/content/guides/cell-types/numeric-cell-type/javascript/example3.ts)

:::

:::

::: only-for react

::: example #example3 :react-numbro --js 1 --ts 2

@[code](@/content/guides/cell-types/numeric-cell-type/react/example3.jsx)
@[code](@/content/guides/cell-types/numeric-cell-type/react/example3.tsx)

:::

:::

请注意 [`numericFormat`](@/api/options.md#numericformat) 选项不会改变方式
数字由[单元格编辑器](@/guides/cell-functions/cell-editor/cell-editor.md) 呈现或解析.什么时候
您编辑数字单元格:

- 无论 [`numericFormat`](@/api/options.md#numericformat) 配置如何，数字
  正在编辑的文件将其小数点分隔符显示为句点 (`.`)，并且没有千位
分隔符或货币符号.<br>例如，在编辑`$7,000.02`期间，数字显示为
  `7000.02`.
- 您可以使用句点 (`.`) 或逗号 (`,`) 输入小数点分隔符.
- 您不能输入千位分隔符.完成单元格编辑后，数千个
  根据您的 [`numericFormat`](@/api/options.md#numericformat) 自动添加分隔符
  配置.

## 相关文章

### 相关指南

- [单元格类型](@/guides/cell-types/cell-type/cell-type.md)

### 相关API参考

- 配置选项:
  - [`numericFormat`](@/api/options.md#numericformat)
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
