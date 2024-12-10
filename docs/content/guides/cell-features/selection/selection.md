---
id: a52om5wr
title: 选择
metaTitle: Selection - JavaScript Data Grid | Handsontable
description: Select a single cell, a range of adjacent cells, or multiple non-adjacent ranges of cells.
permalink: /selection
canonicalUrl: /selection
tags:
  - selecting ranges
  - cell selection
react:
  id: k88lznt8
  metaTitle: Selection - React Data Grid | Handsontable
searchCategory: Guides
category: Cell features
---

# 选择

选择单个单元格、一系列相邻单元格或多个不相邻单元格范围。

[[toc]]

## 概述

选择使您能够在 Handsontable 中选择单个单元格或单元格区域。选择后，您可以从单元格中检索数据、编辑单元格的内容或更改单元格的样式。

## 基本配置

使用此功能，您可以选择网格中的单个单元格或单元格范围。轻松检索所选单元格的坐标以清除或更改单元格的内容。

在 Mac 上使用 <kbd>**Cmd**</kbd> 或在 Windows 上使用 <kbd>**Ctrl**</kbd> 选择不相邻的单元格区域。
## 选择范围

您可以在不同的模式下使用此插件。在选择单个单元格、一系列相邻单元格和多个不相邻单元格范围之间进行选择。

[`selectionMode`](@/api/options.md#selectionmode) 的可能值：

- [`single`](@/api/options.md#selectionmode) -您可以选择单个单元格。
- [`range`](@/api/options.md#selectionmode) -您可以在选定的单个范围内选择多个单元格。
- [`multiple`](@/api/options.md#selectionmode) -您可以选择多个不相邻的单元格范围。

::: only-for javascript

::: example #example1 --html 1 --js 2 --ts 3

@[code](@/content/guides/cell-features/selection/javascript/example1.html)
@[code](@/content/guides/cell-features/selection/javascript/example1.js)
@[code](@/content/guides/cell-features/selection/javascript/example1.ts)

:::

:::

::: only-for react

::: example #example1 :react --js 1 --ts 2

@[code](@/content/guides/cell-features/selection/react/example1.jsx)
@[code](@/content/guides/cell-features/selection/react/example1.tsx)

:::

:::

## 获取选定范围内的数据

要将选定的单元格作为数组的数组检索，请使用 [`getSelected()`](@/api/core.md#getselected) 或 [`getSelectedRange()`](@/api/core.md#getselectedrange) ) 方法。

::: only-for javascript

::: example #example2 --html 1 --js 2 --ts 3

@[code](@/content/guides/cell-features/selection/javascript/example2.html)
@[code](@/content/guides/cell-features/selection/javascript/example2.js)
@[code](@/content/guides/cell-features/selection/javascript/example2.ts)

:::

:::

::: only-for react

::: example #example2 :react --js 1 --ts 2

@[code](@/content/guides/cell-features/selection/react/example2.jsx)
@[code](@/content/guides/cell-features/selection/react/example2.tsx)

:::

:::

## 修改选中的单元格

您可能想要删除、格式化或以其他方式更改选定的单元格。例如，您可以使用下面的演示更改值或将 CSS 类添加到选定的单元格。

::: only-for javascript

::: example #example3 --html 1 --css 2 --js 3 --ts 4

@[code](@/content/guides/cell-features/selection/javascript/example3.html)
@[code](@/content/guides/cell-features/selection/javascript/example3.css)
@[code](@/content/guides/cell-features/selection/javascript/example3.js)
@[code](@/content/guides/cell-features/selection/javascript/example3.ts)

:::

:::

::: only-for react

::: example #example3 :react --css 1 --js 2 --ts 3

@[code](@/content/guides/cell-features/selection/react/example3.css)
@[code](@/content/guides/cell-features/selection/react/example3.jsx)
@[code](@/content/guides/cell-features/selection/react/example3.tsx)

:::

:::

## 设置选择区域的样式

您可以使用 CSS 样式轻松更改背景颜色。主要的浅蓝色背景颜色在`.area`类中定义。

对于非相邻选择，多个类别会使每个级别变得更暗。这些类称为`area-1`、`area-2`等。

不幸的是，没有简单的方法来更改选区的边框颜色。

## 跳过网格的边缘

当您使用键盘导航跨越网格边缘时，您可以将单元格选择设置为跳转到相反的边缘。

#### 跳过垂直边缘

要启用跨越左右边缘的跳跃：
-将 [`autoWrapRow`](@/api/options.md#autowraprow) 配置选项设置为 `true`。

要跳过垂直边缘：
-当单元格选择位于行的第一个单元格时，按向左箭头键。
-当单元格选择位于行的最后一个单元格时，按向右箭头键，或按 <kbd>**Tab**</kbd>。

#### 跳过水平边缘

要启用跨越顶部和底部边缘的跳跃：
-将 [`autoWrapCol`](@/api/options.md#autowrapcol) 配置选项设置为 `true`。

要跳过水平边缘：
-当单元格选择位于列的第一个单元格时，按向上箭头键。
-当单元格选择位于列的最后一个单元格时，按向下箭头键，或按 <kbd>**Enter**</kbd>。

## 相关键盘快捷键

| Windows                                                       | macOS                                                        | Action                                                   |  Excel  | Sheets  |
| ------------------------------------------------------------- | ------------------------------------------------------------ | -------------------------------------------------------- | :-----: | :-----: |
| <kbd>**Ctrl**</kbd>+<kbd>**A**</kbd>                          | <kbd>**Cmd**</kbd>+<kbd>**A**</kbd>                          | 选择所有单元格                                           | &check; | &check; |
| <kbd>**Ctrl**</kbd>+<kbd>**Shift**</kbd>+<kbd>**Space**</kbd> | <kbd>**Cmd**</kbd>+<kbd>**Shift**</kbd>+<kbd>**Space**</kbd> | 选择所有单元格和标题                                     | &check; | &check; |
| <kbd>**Ctrl**</kbd>+<kbd>**Space**</kbd>                      | <kbd>**Ctrl**</kbd>+<kbd>**Space**</kbd>                     | 选择整个列                                               | &check; | &check; |
| <kbd>**Shift**</kbd>+<kbd>**Space**</kbd>                     | <kbd>**Shift**</kbd>+<kbd>**Space**</kbd>                    | 选择整行                                                 | &check; | &check; |
| <kbd>**Ctrl**</kbd>+<kbd>**Shift**</kbd>+<kbd>**↑**</kbd>     | <kbd>**Cmd**</kbd>+<kbd>**Shift**</kbd>+<kbd>**↑**</kbd>     | 将选择范围扩展到当前列的第一个单元格<sup>**</sup>        | &check; | &check; |
| <kbd>**Ctrl**</kbd>+<kbd>**Shift**</kbd>+<kbd>**↓**</kbd>     | <kbd>**Cmd**</kbd>+<kbd>**Shift**</kbd>+<kbd>**↓**</kbd>     | 将选择范围扩展到当前列的最后一个单元格<sup>**</sup>      | &check; | &check; |
| <kbd>**Ctrl**</kbd>+<kbd>**Shift**</kbd>+<kbd>**←**</kbd>     | <kbd>**Cmd**</kbd>+<kbd>**Shift**</kbd>+<kbd>**←**</kbd>     | 将选择范围扩展到当前行的最左侧单元格<sup>**</sup>        | &check; | &check; |
| <kbd>**Ctrl**</kbd>+<kbd>**Shift**</kbd>+<kbd>**→**</kbd>     | <kbd>**Cmd**</kbd>+<kbd>**Shift**</kbd>+<kbd>**→**</kbd>     | 将选择范围扩展到当前行的最右侧单元格<sup>**</sup>        | &check; | &check; |
| <kbd>**Shift**</kbd> + Arrow keys                             | <kbd>**Shift**</kbd> + Arrow keys                            | 将选择范围扩大一个单元格                                 | &check; | &check; |
| <kbd>**Shift**</kbd>+<kbd>**Home**</kbd>                      | <kbd>**Shift**</kbd>+<kbd>**Home**</kbd>                     | 将选择范围扩展到当前行的第一个非冻结单元格<sup>*</sup>   | &check; | &cross; |
| <kbd>**Shift**</kbd>+<kbd>**End**</kbd>                       | <kbd>**Shift**</kbd>+<kbd>**End**</kbd>                      | 将选择范围扩展到当前行的最后一个非冻结单元格<sup>*</sup> | &cross; | &cross; |
| <kbd>**Shift**</kbd>+<kbd>**Page Up**</kbd>                   | <kbd>**Shift**</kbd>+<kbd>**Page Up**</kbd>                  | 将选择范围向上扩展一屏                                   | &check; | &check; |
| <kbd>**Shift**</kbd>+<kbd>**Page Down**</kbd>                 | <kbd>**Shift**</kbd>+<kbd>**Page Down**</kbd>                | 将选择范围向下扩展一屏                                   | &check; | &check; |
| <kbd>**Ctrl**</kbd>+<kbd>**Enter**</kbd>                      | <kbd>**Cmd**</kbd>+<kbd>**Enter**</kbd>                      | 使用活动单元格的值填充选定的单元格范围                   | &cross; | &check; |
| <kbd>**Delete**</kbd>                                         | <kbd>**Delete**</kbd>                                        | 清除所选单元格的内容                                     | &check; | &check; |
| <kbd>**Backspace**</kbd>                                      | <kbd>**Backspace**</kbd>                                     | 清除所选单元格的内容                                     | &check; | &check; |

<sup>*</sup> 此操作取决于您的[布局方向](@/guides/internationalization/layout-direction/layout-direction.md)。<br>
<sup>**</sup> 如果有多个选择层，则仅扩展最后一个选择层。

## 相关API参考

- 配置选项:
  - [`autoWrapCol`](@/api/options.md#autowrapcol)
  - [`autoWrapRow`](@/api/options.md#autowraprow)
  - [`fragmentSelection`](@/api/options.md#fragmentselection)
  - [`disableVisualSelection`](@/api/options.md#disablevisualselection)
  - [`dragToScroll`](@/api/options.md#dragtoscroll)
  - [`selectionMode`](@/api/options.md#selectionmode)
  - [`outsideClickDeselects`](@/api/options.md#outsideclickdeselects)
- 核心方法:
  - [`deselectCell()`](@/api/core.md#deselectcell)
  - [`getSelected()`](@/api/core.md#getselected)
  - [`getSelectedLast()`](@/api/core.md#getselectedlast)
  - [`getSelectedRange()`](@/api/core.md#getselectedrange)
  - [`getSelectedRangeLast()`](@/api/core.md#getselectedrangelast)
  - [`selectAll()`](@/api/core.md#selectall)
  - [`selectCell()`](@/api/core.md#selectcell)
  - [`selectCells()`](@/api/core.md#selectcells)
  - [`selectColumns()`](@/api/core.md#selectcolumns)
  - [`selectRows()`](@/api/core.md#selectrows)
- Hooks:
  - [`afterDeselect`](@/api/hooks.md#afterdeselect)
  - [`afterDrawSelection`](@/api/hooks.md#afterdrawselection)
  - [`afterModifyTransformEnd`](@/api/hooks.md#aftermodifytransformend)
  - [`afterModifyTransformStart`](@/api/hooks.md#aftermodifytransformstart)
  - [`afterSelection`](@/api/hooks.md#afterselection)
  - [`afterSelectionByProp`](@/api/hooks.md#afterselectionbyprop)
  - [`afterSelectionEnd`](@/api/hooks.md#afterselectionend)
  - [`afterSelectionEndByProp`](@/api/hooks.md#afterselectionendbyprop)
  - [`modifyTransformStart`](@/api/hooks.md#modifytransformstart)
- 插件:
  - [`DragToScroll`](@/api/dragToScroll.md)
