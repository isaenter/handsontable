---
id: p8sggqin
title: 复选框单元格类型
metaTitle: Checkbox cell type - JavaScript Data Grid | Handsontable
description: Create interactive elements that can be checked or unchecked, by using the checkbox cell type.
permalink: /checkbox-cell-type
canonicalUrl: /checkbox-cell-type
react:
  id: tfr1gisf
  metaTitle: Checkbox cell type - React Data Grid | Handsontable
searchCategory: Guides
category: Cell types
---

# 复选框单元格类型

使用复选框单元格类型创建可以选中或取消选中的交互式元素.

[[toc]]

## 概述

这些单元格中的数据将呈现为复选框，您可以通过选中/取消选中该复选框轻松更改它.

要选中该框，请使用鼠标或按 <kbd>**空格**</kbd> 或 <kbd>**Enter**</kbd>.

要取消选中该框，请使用鼠标或按 <kbd>**空格**</kbd>、<kbd>**Enter**</kbd>、<kbd>**Delete**</kbd> 或 < kbd>**退格键**</kbd>.

您可以通过选择要更改的单元格并按 <kbd>**空格**</kbd> 来一次更改多个单元格的状态.

## 复选框真/假值

这是默认的使用场景，其中列数据具有`true`或`false`值，并且我们只想显示复选框.

::: only-for javascript

::: example #example1 --js 1 --ts 2

@[code](@/content/guides/cell-types/checkbox-cell-type/javascript/example1.js)
@[code](@/content/guides/cell-types/checkbox-cell-type/javascript/example1.ts)

:::

:::

::: only-for react

::: example #example1 :react --js 1 --ts 2

@[code](@/content/guides/cell-types/checkbox-cell-type/react/example1.jsx)
@[code](@/content/guides/cell-types/checkbox-cell-type/react/example1.tsx)

:::

:::

## 复选框模板

如果您想使用`true`和`false`以外的值，则必须使用 [`checkedTemplate`](@/api/options.md#checkedtemplate) 和 [`uncheckedTemplate`](@/api/options.md#uncheckedtemplate).然后，Handsontable 将使用适当的模板更新您的数据.

::: only-for javascript

::: example #example2 --js 1 --ts 2

@[code](@/content/guides/cell-types/checkbox-cell-type/javascript/example2.js)
@[code](@/content/guides/cell-types/checkbox-cell-type/javascript/example2.ts)

:::

:::

::: only-for react

::: example #example2 :react --js 1 --ts 2

@[code](@/content/guides/cell-types/checkbox-cell-type/react/example2.jsx)
@[code](@/content/guides/cell-types/checkbox-cell-type/react/example2.tsx)

:::

:::

## 复选框标签

要向复选框添加标签，请使用 [`label`](@/api/options.md#label) 选项.您可以声明使用此选项注入标签的位置 -在复选框元素之前或之后.您还可以声明将从哪个数据源更新标签文本.

::: only-for javascript

::: example #example3 --js 1 --ts 2

@[code](@/content/guides/cell-types/checkbox-cell-type/javascript/example3.js)
@[code](@/content/guides/cell-types/checkbox-cell-type/javascript/example3.ts)

:::

:::

::: only-for react

::: example #example3 :react --js 1 --ts 2

@[code](@/content/guides/cell-types/checkbox-cell-type/react/example3.jsx)
@[code](@/content/guides/cell-types/checkbox-cell-type/react/example3.tsx)

:::

:::

## 相关键盘快捷键

| Windows                  | macOS                    | Action               |  Excel  | Sheets  |
| ------------------------ | ------------------------ | -------------------- | :-----: | :-----: |
| <kbd>**Space**</kbd>     | <kbd>**Space**</kbd>     | 选中或取消选中复选框 | &cross; | &check; |
| <kbd>**Enter**</kbd>     | <kbd>**Enter**</kbd>     | 选中或取消选中复选框 | &cross; | &check; |
| <kbd>**Delete**</kbd>    | <kbd>**Delete**</kbd>    | 取消选中复选框       | &cross; | &check; |
| <kbd>**Backspace**</kbd> | <kbd>**Backspace**</kbd> | 取消选中复选框       | &cross; | &check; |

## 相关文章

### 相关指南
- [单元格类型](@/guides/cell-types/cell-type/cell-type.md)

### 相关API参考

- 配置选项:
  - [`checkedTemplate`](@/api/options.md#checkedtemplate)
  - [`label`](@/api/options.md#label)
  - [`type`](@/api/options.md#type)
  - [`uncheckedTemplate`](@/api/options.md#uncheckedtemplate)
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
