---
id: kdie9yhz
title: Handsontable单元格类型
metaTitle: Handsontable cell type - JavaScript Data Grid | Handsontable
description: Add a spreadsheet editor in a popup, by using the Handsontable cell type.
permalink: /handsontable-cell-type
canonicalUrl: /handsontable-cell-type
react:
  id: fcxtj167
  metaTitle: Handsontable cell type - React Data Grid | Handsontable
searchCategory: Guides
category: Cell types
---

# Handsontable单元格类型

使用 Handsontable 单元格类型在弹出窗口中添加电子表格编辑器。

[[toc]]

## Usage

**表中表 通过以下任一方式打开:**

- 选择单元格时按下 <kbd>**F2**</kbd> 或 <kbd>**Enter**</kbd> 键
- 单击三角形图标
- 双击单元格内容

当表中表打开时，表中表上方的文本字段始终保持焦点状态。

**打开 表中表 时的键盘绑定：**

- <kbd>**Escape**</kbd> -关闭编辑器并取消更改。
- <kbd>**Enter**</kbd> -关闭编辑器并应用更改\*，向下移动主 HOT 中的选择或根据 [`enterMoves`](@/api/options.md#enterMoves)环境。
- <kbd>**Tab**</kbd> -行为与 <kbd>**Enter**</kbd> 键相同，但将主 HOT 中的选择移动到右侧或左侧(取决于您的[`layoutDirection`](@/api/options.md#layoutdirection) 设置`)或根据 [`tabMoves`](@/api/options.md#tabmoves) 设置。
- <kbd>**向下箭头**</kbd> -向下移动 HOT-in-HOT 中的选择。如果选择了最后一行，则此操作无效。
- <kbd>**向上箭头**</kbd> -向上移动 HOT-in-HOT 中的选择。如果选择了第一行，则取消选择。如果取消选择 HOT-in-HOT，则其行为与 <kbd>**Enter**</kbd> 键相同，但向上移动主 HOT 中的选择。
- <kbd>**向右箭头**</kbd> -将文本字段中的文本光标向左移动。如果文本光标位于开始位置，则其行为与 <kbd>**Enter**</kbd> 键相同，但将主 HOT 中的选择移动到左侧。
- <kbd>**向左箭头**</kbd> -将文本字段中的文本光标向右移动。如果文本光标位于结束位置，则充当 <kbd>**Tab**</kbd> 键。

## 基本示例

::: only-for javascript

::: example #example1 --js 1 --css 2 --ts 3

@[code](@/content/guides/cell-types/handsontable-cell-type/javascript/example1.js)
@[code](@/content/guides/cell-types/handsontable-cell-type/javascript/example1.css)
@[code](@/content/guides/cell-types/handsontable-cell-type/javascript/example1.ts)

:::

:::

::: only-for react

::: example #example1 :react --js 1 --css 2 --ts 3

@[code](@/content/guides/cell-types/handsontable-cell-type/react/example1.jsx)
@[code](@/content/guides/cell-types/handsontable-cell-type/react/example1.css)
@[code](@/content/guides/cell-types/handsontable-cell-type/react/example1.tsx)

:::

:::

## 相关文章

### 相关指南

- [单元格类型](@/guides/cell-types/cell-type/cell-type.md)

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
