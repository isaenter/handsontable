---
id: glh01i6q
title: 撤消和重做
metaTitle: Undo and redo - JavaScript Data Grid | Handsontable
description: Revert and restore your changes, using the undo and redo features.
permalink: /undo-redo
canonicalUrl: /undo-redo
tags:
  - history of changes
  - state history
  - stack update
  - repeat
  - reverse
  - erase last change
  - roll back changes
react:
  id: me8uxp3w
  metaTitle: Undo and redo - React Data Grid | Handsontable
searchCategory: Guides
category: Accessories and menus
---

# 撤消和重做

使用撤消和重做功能恢复和恢复您的更改。

[[toc]]

## 概述

此功能允许您恢复在数据网格中所做的更改。它在正常的日常生活中非常有用，特别是当改变是无意的时。此功能堆叠使用网格用户界面所做的更改。省略以编程方式完成的修改。
基本方法是 [`undo()`](@/api/undoRedo.md#undo) 和 [`redo()`](@/api/undoRedo.md#redo)。 [`undo()`](@/api/undoRedo.md#undo) 方法回滚上次执行的操作，[`redo()`](@/api/undoRedo.md#redo) 方法恢复它。

此功能由 [`UndoRedo`](@/api/undoRedo.md) 插件提供，默认启用。

## 基本演示

对下面的网格进行一些更改，然后使用 <kbd>**Ctrl**</kbd>/<kbd>**Cmd**</kbd>+<kbd>**Z**</kbd> 命令重做之前的状态。然后，使用 <kbd>**Ctrl**</kbd>/<kbd>**Cmd**</kbd>+<kbd>**Y**</kbd> (或 <kbd>**Ctrl**</kbd>/<kbd>**Cmd**</kbd>+<kbd>**Shift**</kbd>+<kbd>**Z**</kbd>`)来恢复它。

::: only-for javascript

::: example #example --js 1 --ts 2

@[code](@/content/guides/accessories-and-menus/undo-redo/javascript/example.js)
@[code](@/content/guides/accessories-and-menus/undo-redo/javascript/example.ts)

:::

:::


::: only-for react

::: example #example :react --js 1 --ts 2

@[code](@/content/guides/accessories-and-menus/undo-redo/react/example.jsx)
@[code](@/content/guides/accessories-and-menus/undo-redo/react/example.tsx)

:::

:::

## 已知的限制

并非所有用户触发的操作都会记录在撤消和重做历史记录中。
以下是所有不支持的功能的列表：

- [行排序](@/guides/rows/rows-sorting/rows-sorting.md)
- [列过滤器](@/guides/columns/column-filter/column-filter.md)
- [行移动](@/guides/rows/row-moving/row-moving.md)

## 相关键盘快捷键

| Windows                                                       | macOS                                                        | Action               |  Excel  | Sheets  |
| ------------------------------------------------------------- | ------------------------------------------------------------ | -------------------- | :-----: | :-----: |
| <kbd>**Ctrl**</kbd>+<kbd>**Z**</kbd>                        | <kbd>**Cmd**</kbd>+<kbd>**Z**</kbd>                        | 撤消上一个操作 | &check; | &check; |
| <kbd>**Ctrl**</kbd>+<kbd>**Y**</kbd>                        | <kbd>**Cmd**</kbd>+<kbd>**Y**</kbd>                        | 重做最后一个动作 | &check; | &check; |
| <kbd>**Ctrl**</kbd>+<kbd>**Shift**</kbd>+<kbd>**Z**</kbd> | <kbd>**Cmd**</kbd>+<kbd>**Shift**</kbd>+<kbd>**Z**</kbd> | 重做最后一个动作 | &check; | &check; |

## 相关API参考

- 配置选项：
  - [`undo`](@/api/options.md#undo)
- 核心方法：
  - [`clearUndo()`](@/api/core.md#clearundo)
  - [`isRedoAvailable()`](@/api/core.md#isredoavailable)
  - [`isUndoAvailable()`](@/api/core.md#isundoavailable)
  - [`redo()`](@/api/core.md#redo)
  - [`undo()`](@/api/core.md#undo)
- Hooks:
  - [`afterRedo`](@/api/hooks.md#afterredo)
  - [`afterRedoStackChange`](@/api/hooks.md#afterredostackchange)
  - [`afterUndo`](@/api/hooks.md#afterundo)
  - [`afterUndoStackChange`](@/api/hooks.md#afterundostackchange)
  - [`beforeRedo`](@/api/hooks.md#beforeredo)
  - [`beforeRedoStackChange`](@/api/hooks.md#beforeredostackchange)
  - [`beforeUndo`](@/api/hooks.md#beforeundo)
  - [`beforeUndoStackChange`](@/api/hooks.md#beforeundostackchange)
- 插件:
  - [`UndoRedo`](@/api/undoRedo.md)
