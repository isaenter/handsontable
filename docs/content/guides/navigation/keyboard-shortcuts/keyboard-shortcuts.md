---
id: 5w6juytv
title: 键盘快捷键
metaTitle: Keyboard shortcuts - JavaScript Data Grid | Handsontable
description: Access all Handsontable features using just your keyboard. Use shortcuts you know from Google Sheets or Microsoft Excel.
permalink: /keyboard-shortcuts
canonicalUrl: /keyboard-shortcuts
tags:
  - key bindings
  - keymap
  - key mapping
  - keyboard navigation
  - hotkey
  - accessibility
  - function key
  - commands
  - shortcut keys
react:
  id: ddjw4zt88
  metaTitle: Keyboard shortcuts - React Data Grid | Handsontable
searchCategory: Guides
category: Navigation
---

# 键盘快捷键

只需使用键盘即可访问 Handsontable 的所有功能.使用您从 Google Sheets 或 Microsoft Excel 中知道的快捷方式.

## 概述

[[toc]]

此页面列出了 Handsontable 的所有默认键盘快捷键.

## 导航键盘快捷键

这些键盘快捷键在您浏览网格时起作用.它们来自 Handsontable 的 [`Core`](@/api/core.md),因此它们开箱即用,不需要额外的插件.

| Windows                                                       | macOS                                                        | Action                                                               |  Excel  | Sheets  |
| ------------------------------------------------------------- | ------------------------------------------------------------ | -------------------------------------------------------------------- | :-----: | :-----: |
| 方向键                                                        | 方向键                                                       | M向上、向下、向左或向右移动一个单元格                                | &check; | &check; |
| <kbd>**Ctrl**</kbd>+<kbd>**Backspace**</kbd>                  | <kbd>**Cmd**</kbd>+<kbd>**Backspace**</kbd>                  | 滚动视口以显示聚焦的单元格                                           | &cross; | &check; |
| <kbd>**Ctrl**</kbd>+<kbd>**↑**</kbd>                          | <kbd>**Cmd**</kbd>+<kbd>**↑**</kbd>                          | 移至当前列的第一个单元格                                             | &check; | &check; |
| <kbd>**Ctrl**</kbd>+<kbd>**↓**</kbd>                          | <kbd>**Cmd**</kbd>+<kbd>**↓**</kbd>                          | 移至当前列的最后一个单元格                                           | &check; | &check; |
| <kbd>**Ctrl**</kbd>+<kbd>**←**</kbd>                          | <kbd>**Cmd**</kbd>+<kbd>**←**</kbd>                          | 移动到当前行最左边的单元格                                           | &check; | &check; |
| <kbd>**Ctrl**</kbd>+<kbd>**→**</kbd>                          | <kbd>**Cmd**</kbd>+<kbd>**→**</kbd>                          | 移动到当前行最右边的单元格                                           | &check; | &check; |
| <kbd>**F2**</kbd>                                             | <kbd>**F2**</kbd>                                            | 进入活动单元格的编辑模式                                             | &check; | &check; |
| <kbd>**Enter**</kbd>                                          | <kbd>**Enter**</kbd>                                         | 进入活动单元格的编辑模式                                             | &cross; | &check; |
| <kbd>**Shift**</kbd>+<kbd>**Enter**</kbd>                     | <kbd>**Shift**</kbd>+<kbd>**Enter**</kbd>                    | 进入活动单元格的编辑模式                                             | &cross; | &check; |
| <kbd>**Ctrl**</kbd>+<kbd>**Shift**</kbd>+<kbd>**Enter**</kbd> | <kbd>**Cmd**</kbd>+<kbd>**Shift**</kbd>+<kbd>**Enter**</kbd> | 保存并关闭编辑器                                                     | &check; | &check; |
| 字母数字键                                                    | 字母数字键                                                   | 进入活动单元格的编辑模式并将按键的值输入到单元格中                   | &check; | &check; |
| <kbd>**Tab**</kbd>                                            | <kbd>**Tab**</kbd>                                           | 移至下一个单元格<sup>\*</sup>(如果只有一列可用,则向下移动一个单元格) | &check; | &check; |
| <kbd>**Shift**</kbd>+<kbd>**Tab**</kbd>                       | <kbd>**Shift**</kbd>+<kbd>**Tab**</kbd>                      | 移至上一个单元格<sup>\*</sup>(如果只有一列可用,则向上移动一个单元格) | &check; | &check; |
| <kbd>**Home**</kbd>                                           | <kbd>**Home**</kbd>                                          | 移至当前行第一个非冻结单元格<sup>\*</sup>                            | &check; | &check; |
| <kbd>**Ctrl**</kbd>+<kbd>**Home**</kbd>                       | <kbd>**Cmd**</kbd>+<kbd>**Home**</kbd>                       | 移动到网格的第一个非冻结单元格<sup>\*</sup>                          | &cross; | &check; |
| <kbd>**End**</kbd>                                            | <kbd>**End**</kbd>                                           | 移动到当前行的最后一个非冻结单元格<sup>\*</sup>                      | &cross; | &check; |
| <kbd>**Ctrl**</kbd>+<kbd>**End**</kbd>                        | <kbd>**Cmd**</kbd>+<kbd>**End**</kbd>                        | 移动到网格的最后一个非冻结单元格<sup>\*</sup>                        | &cross; | &check; |
| <kbd>**Page Up**</kbd>                                        | <kbd>**Page Up**</kbd>                                       | 向上移动一屏                                                         | &check; | &check; |
| <kbd>**Page Down**</kbd>                                      | <kbd>**Page Down**</kbd>                                     | 向下移动一屏                                                         | &check; | &check; |

<sup>\*</sup> 此操作取决于您的布局方向.

## 组合快捷键

这些键盘快捷键可帮助您选择单元格.它们来自 Handsontable 的 [`Core`](@/api/core.md),因此它们开箱即用,不需要额外的插件.

| Windows                                                       | macOS                                                        | Action                                                    |  Excel  | Sheets  |
| ------------------------------------------------------------- | ------------------------------------------------------------ | --------------------------------------------------------- | :-----: | :-----: |
| <kbd>**Ctrl**</kbd>+<kbd>**A**</kbd>                          | <kbd>**Cmd**</kbd>+<kbd>**A**</kbd>                          | 选择所有单元格                                            | &check; | &check; |
| <kbd>**Ctrl**</kbd>+<kbd>**Shift**</kbd>+<kbd>**Space**</kbd> | <kbd>**Cmd**</kbd>+<kbd>**Shift**</kbd>+<kbd>**Space**</kbd> | 选择所有单元格和标题                                      | &check; | &check; |
| <kbd>**Ctrl**</kbd>+<kbd>**Space**</kbd>                      | <kbd>**Ctrl**</kbd>+<kbd>**Space**</kbd>                     | 选择整个列                                                | &check; | &check; |
| <kbd>**Shift**</kbd>+<kbd>**Space**</kbd>                     | <kbd>**Shift**</kbd>+<kbd>**Space**</kbd>                    | 选择整行                                                  | &check; | &check; |
| <kbd>**Ctrl**</kbd>+<kbd>**Shift**</kbd>+<kbd>**↑**</kbd>     | <kbd>**Cmd**</kbd>+<kbd>**Shift**</kbd>+<kbd>**↑**</kbd>     | 将选择范围扩展到当前列的第一个单元格<sup>\*\*</sup>       | &check; | &check; |
| <kbd>**Ctrl**</kbd>+<kbd>**Shift**</kbd>+<kbd>**↓**</kbd>     | <kbd>**Cmd**</kbd>+<kbd>**Shift**</kbd>+<kbd>**↓**</kbd>     | 将选择范围扩展到当前列的最后一个单元格<sup>\*\*</sup>     | &check; | &check; |
| <kbd>**Ctrl**</kbd>+<kbd>**Shift**</kbd>+<kbd>**←**</kbd>     | <kbd>**Cmd**</kbd>+<kbd>**Shift**</kbd>+<kbd>**←**</kbd>     | 将选择范围扩展到当前行的最左侧单元格<sup>\*\*</sup>       | &check; | &check; |
| <kbd>**Ctrl**</kbd>+<kbd>**Shift**</kbd>+<kbd>**→**</kbd>     | <kbd>**Cmd**</kbd>+<kbd>**Shift**</kbd>+<kbd>**→**</kbd>     | 将选择范围扩展到当前行的最右侧单元格<sup>\*\*</sup>       | &check; | &check; |
| <kbd>**Shift**</kbd> + 方向键                                 | <kbd>**Shift**</kbd> + 方向键                                | 将选择范围扩大一个单元格                                  | &check; | &check; |
| <kbd>**Shift**</kbd>+<kbd>**Home**</kbd>                      | <kbd>**Shift**</kbd>+<kbd>**Home**</kbd>                     | 将选择范围扩展到当前行的第一个非冻结单元格<sup>\*</sup>   | &check; | &cross; |
| <kbd>**Shift**</kbd>+<kbd>**End**</kbd>                       | <kbd>**Shift**</kbd>+<kbd>**End**</kbd>                      | 将选择范围扩展到当前行的最后一个非冻结单元格<sup>\*</sup> | &cross; | &cross; |
| <kbd>**Shift**</kbd>+<kbd>**Page Up**</kbd>                   | <kbd>**Shift**</kbd>+<kbd>**Page Up**</kbd>                  | 将选择范围向上扩展一屏                                    | &check; | &check; |
| <kbd>**Shift**</kbd>+<kbd>**Page Down**</kbd>                 | <kbd>**Shift**</kbd>+<kbd>**Page Down**</kbd>                | 将选择范围向下扩展一屏                                    | &check; | &check; |
| <kbd>**Ctrl**</kbd>+<kbd>**Enter**</kbd>                      | <kbd>**Cmd**</kbd>+<kbd>**Enter**</kbd>                      | 使用活动单元格的值填充选定的单元格范围                    | &cross; | &check; |
| <kbd>**Delete**</kbd>                                         | <kbd>**Delete**</kbd>                                        | 清除所选单元格的内容                                      | &check; | &check; |
| <kbd>**Backspace**</kbd>                                      | <kbd>**Backspace**</kbd>                                     | 清除所选单元格的内容                                      | &check; | &check; |

<sup>\*</sup> 此操作取决于您的布局方向.<br> <sup>\*\*</sup> 如果有多个选择层,则仅扩展最后一个选择层.

## 版本键盘快捷键

这些键盘快捷键在您编辑单元格内容时起作用.它们来自 Handsontable 的 [`Core`](@/api/core.md),因此它们开箱即用,不需要额外的插件.

| Windows                                           | macOS                                                       | Action                                        |  Excel  | Sheets  |
| ------------------------------------------------- | ----------------------------------------------------------- | --------------------------------------------- | :-----: | :-----: |
| 方向键                                            | 方向键                                                      | 将光标移动到文本中                            | &check; | &check; |
| 字母数字键                                        | 字母数字键                                                  | 将按下的键的值输入到单元格中                  | &check; | &check; |
| <kbd>**Enter**</kbd>                              | <kbd>**Enter**</kbd>                                        | 完成单元格输入并移至下面的单元格              | &check; | &check; |
| <kbd>**Shift**</kbd>+<kbd>**Enter**</kbd>         | <kbd>**Shift**</kbd>+<kbd>**Enter**</kbd>                   | 完成单元格输入并移动到上面的单元格            | &check; | &check; |
| <kbd>**Tab**</kbd>                                | <kbd>**Tab**</kbd>                                          | 完成单元格输入并移至下一个单元格<sup>\*</sup> | &check; | &check; |
| <kbd>**Shift**</kbd>+<kbd>**Tab**</kbd>           | <kbd>**Shift**</kbd>+<kbd>**Tab**</kbd>                     | 完成单元格输入并移至上一个单元格<sup>\*</sup> | &check; | &check; |
| <kbd>**Delete**</kbd>                             | <kbd>**Delete**</kbd>                                       | 删除光标后一个字符<sup>\*</sup>               | &check; | &check; |
| <kbd>**Backspace**</kbd>                          | <kbd>**Backspace**</kbd>                                    | 删除光标前一个字符<sup>\*</sup>               | &check; | &check; |
| <kbd>**Home**</kbd>                               | <kbd>**Home**</kbd>                                         | 将光标移至文本开头<sup>\*</sup>               | &check; | &check; |
| <kbd>**End**</kbd>                                | <kbd>**End**</kbd>                                          | 将光标移至文本末尾<sup>\*</sup>               | &check; | &check; |
| <kbd>**Ctrl**</kbd> + Arrow keys                  | <kbd>**Cmd**</kbd> + Arrow keys                             | 将光标移动到文本的开头或结尾                  | &check; | &check; |
| <kbd>**Ctrl**</kbd>+<kbd>**Shift**</kbd> + 方向键 | <kbd>**Cmd**</kbd>+<kbd>**Shift**</kbd> + 方向键            | 将选择范围扩展到文本的开头或结尾              | &check; | &check; |
| <kbd>**Page Up**</kbd>                            | <kbd>**Page Up**</kbd>                                      | 完成单元格输入并向上移动一屏                  | &check; | &check; |
| <kbd>**Page Down**</kbd>                          | <kbd>**Page Down**</kbd>                                    | 完成单元格输入并向下移动一屏                  | &check; | &check; |
| <kbd>**Alt**</kbd>+<kbd>**Enter**</kbd>           | <kbd>**Option**</kbd>+<kbd>**Enter**</kbd>                  | 插入换行符                                    | &cross; | &check; |
| <kbd>**Ctrl**</kbd>+<kbd>**Enter**</kbd>          | <kbd>**Ctrl**</kbd>/<kbd>**Cmd**</kbd>+<kbd>**Enter**</kbd> | 插入换行符                                    | &cross; | &check; |
| <kbd>**Escape**</kbd>                             | <kbd>**Escape**</kbd>                                       | 取消单元格输入并退出编辑模式                  | &check; | &check; |

<sup>\*</sup> 此操作取决于您的布局方向.

### 复选框编辑器键盘快捷键

这些键盘快捷键适用于 [`checkbox`](@/guides/cell-types/checkbox-cell-type/checkbox-cell-type.md) 单元格编辑器.

| Windows                  | macOS                    | Action               |  Excel  | Sheets  |
| ------------------------ | ------------------------ | -------------------- | :-----: | :-----: |
| <kbd>**Space**</kbd>     | <kbd>**Space**</kbd>     | 选中或取消选中复选框 | &cross; | &check; |
| <kbd>**Enter**</kbd>     | <kbd>**Enter**</kbd>     | 选中或取消选中复选框 | &cross; | &check; |
| <kbd>**Delete**</kbd>    | <kbd>**Delete**</kbd>    | 取消选中复选框       | &cross; | &check; |
| <kbd>**Backspace**</kbd> | <kbd>**Backspace**</kbd> | 取消选中复选框       | &cross; | &check; |

### `handsontable` 编辑器键盘快捷键

这些键盘快捷键适用于 [`handsontable`](@/guides/cell-types/handsontable-cell-type/handsontable-cell-type.md) 单元格编辑器.

| Windows          | macOS            | Action                     |  Excel  | Sheets  |
| ---------------- | ---------------- | -------------------------- | :-----: | :-----: |
| <kbd>**↑**</kbd> | <kbd>**↑**</kbd> | 移至活动单元格上方的单元格 | &cross; | &cross; |
| <kbd>**↓**</kbd> | <kbd>**↓**</kbd> | 移至活动单元格下方的单元格 | &cross; | &cross; |

## 插件键盘快捷键

这些键盘快捷键适用于特定插件.

### 剪贴板键盘快捷键

这些键盘快捷键在 [`CopyPaste`](@/api/copyPaste.md) 插件启用时起作用.

| Windows                              | macOS                               | Action                             |  Excel  | Sheets  |
| ------------------------------------ | ----------------------------------- | ---------------------------------- | :-----: | :-----: |
| <kbd>**Ctrl**</kbd>+<kbd>**X**</kbd> | <kbd>**Cmd**</kbd>+<kbd>**X**</kbd> | 将选定单元格的内容剪切到系统剪贴板 | &check; | &check; |
| <kbd>**Ctrl**</kbd>+<kbd>**C**</kbd> | <kbd>**Cmd**</kbd>+<kbd>**C**</kbd> | 将所选单元格的内容复制到系统剪贴板 | &check; | &check; |
| <kbd>**Ctrl**</kbd>+<kbd>**V**</kbd> | <kbd>**Cmd**</kbd>+<kbd>**V**</kbd> | 从系统剪贴板粘贴                   | &check; | &check; |

### 单元格合并键盘快捷键

当启用 [`MergeCells`](@/api/mergeCells.md) 插件时,这些键盘快捷键将起作用.

| Windows                              | macOS                                | Action                     |  Excel  | Sheets  |
| ------------------------------------ | ------------------------------------ | -------------------------- | :-----: | :-----: |
| <kbd>**Ctrl**</kbd>+<kbd>**M**</kbd> | <kbd>**Ctrl**</kbd>+<kbd>**M**</kbd> | 合并或取消合并选定的单元格 | &cross; | &cross; |

### 撤消和重做键盘快捷键

当启用 [`UndoRedo`](@/api/undoRedo.md) 插件时,这些键盘快捷键将起作用.

| Windows                                                   | macOS                                                    | Action           |  Excel  | Sheets  |
| --------------------------------------------------------- | -------------------------------------------------------- | ---------------- | :-----: | :-----: |
| <kbd>**Ctrl**</kbd>+<kbd>**Z**</kbd>                      | <kbd>**Cmd**</kbd>+<kbd>**Z**</kbd>                      | 撤消上一个操作   | &check; | &check; |
| <kbd>**Ctrl**</kbd>+<kbd>**Y**</kbd>                      | <kbd>**Cmd**</kbd>+<kbd>**Y**</kbd>                      | 重做最后一个动作 | &check; | &check; |
| <kbd>**Ctrl**</kbd>+<kbd>**Shift**</kbd>+<kbd>**Z**</kbd> | <kbd>**Cmd**</kbd>+<kbd>**Shift**</kbd>+<kbd>**Z**</kbd> | 重做最后一个动作 | &check; | &check; |

### 上下文菜单键盘快捷键

这些键盘快捷键可在上下文菜单中使用.要激活它们,请启用 [`ContextMenu`](@/api/contextMenu.md) 插件.

| Windows                                                                                               | macOS                                                                                                | Action                                     |  Excel  | Sheets  |
| ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------ | :-----: | :-----: |
| <kbd>**Ctrl**</kbd>+<kbd>**Shift**</kbd>+<kbd>**\\**</kbd> or <kbd>**Shift**</kbd>+<kbd>**F10**</kbd> | <kbd>**Cmd**</kbd>+<kbd>**Shift**</kbd>+<kbd>**\\**</kbd> or <kbd>**Shift**</kbd>+<kbd>**F10**</kbd> | 打开上下文菜单                             | &cross; | &check; |
| 方向键                                                                                                | 方向键                                                                                               | 向上、向下、向左或向右移动一个可用的菜单项 | &check; | &check; |
| <kbd>**Page Up**</kbd>                                                                                | <kbd>**Page Up**</kbd>                                                                               | 移至上下文菜单或子菜单的第一个可见项目     | &check; | &cross; |
| <kbd>**Page Down**</kbd>                                                                              | <kbd>**Page Down**</kbd>                                                                             | 移至上下文菜单或子菜单的最后一个可见项目   | &check; | &cross; |
| <kbd>**Escape**</kbd>                                                                                 | <kbd>**Escape**</kbd>                                                                                | 关闭上下文菜单或子菜单                     | &check; | &check; |
| <kbd>**Enter**</kbd>                                                                                  | <kbd>**Enter**</kbd>                                                                                 | 运行所选菜单项的操作                       | &check; | &cross; |

### 列组键盘快捷键

这些键盘快捷键适用于[列组](@/guides/columns/column-groups/column-groups.md),也称为`嵌套标题`.要激活它们,请启用 [`NestedHeaders`](@/api/nestedHeaders.md) 插件.

| Windows              | macOS                | Action         |  Excel  | Sheets  |
| -------------------- | -------------------- | -------------- | :-----: | :-----: |
| <kbd>**Enter**</kbd> | <kbd>**Enter**</kbd> | 折叠或展开列组 | &cross; | &cross; |

### 行父子键盘快捷键

这些键盘快捷键适用于[行组](@/guides/rows/row-parent-child/row-parent-child.md),也称为`嵌套行`.要激活它们,请启用 [`NestedRows`](@/api/nestedRows.md) 插件.

| Windows              | macOS                | Action         |  Excel  | Sheets  |
| -------------------- | -------------------- | -------------- | :-----: | :-----: |
| <kbd>**Enter**</kbd> | <kbd>**Enter**</kbd> | 折叠或展开行组 | &cross; | &cross; |

### 行排序键盘快捷键

这些键盘快捷键适用于[行排序](@/guides/rows/rows-sorting/rows-sorting.md).要激活它们,请启用 [`ColumnSorting`](@/api/columnSorting.md) 或 [`MultiColumnSorting`](@/api/multiColumnSorting.md) 插件.

| Windows                                   | macOS                                     | Action                                                                                                  |  Excel  | Sheets  |
| ----------------------------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------- | :-----: | :-----: |
| <kbd>**Enter**</kbd>                      | <kbd>**Enter**</kbd>                      | 按所选列以升序、降序或原始顺序对数据进行排序                                                            | &cross; | &cross; |
| <kbd>**Shift**</kbd>+<kbd>**Enter**</kbd> | <kbd>**Shift**</kbd>+<kbd>**Enter**</kbd> | 按多列对数据进行升序、降序或原始顺序排序.需要 [`MultiColumnSorting`](@/api/multiColumnSorting.md) 插件. | &cross; | &cross; |

### 列菜单键盘快捷键

这些键盘快捷键与[列菜单](@/guides/columns/column-menu/column-menu.md) 一起使用.要激活它们,请启用 [`DropdownMenu`](@/api/dropdownMenu.md) 插件.

| Windows                                                  | macOS                                                       | Action                                                      |  Excel  | Sheets  |
| -------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | :-----: | :-----: |
| <kbd>**Shift**</kbd>+<kbd>**Alt**</kbd>+<kbd>**↓**</kbd> | <kbd>**Shift**</kbd>+<kbd>**Option**</kbd>+<kbd>**↓**</kbd> | 打开列菜单.如果相应的列标题显示菜单按钮,则适用于任何单元格. | &cross; | &cross; |
| <kbd>**Ctrl**</kbd>+<kbd>**Enter**</kbd>                 | <kbd>**Cmd**</kbd>+<kbd>**Enter**</kbd>                     | 打开列菜单.仅当您选择显示列菜单按钮的列标题时才有效.        | &cross; | &cross; |

### 列过滤器键盘快捷键

这些键盘快捷键与[列过滤器](@/guides/columns/column-filter/column-filter.md) 一起使用.要激活它们,请启用 [`Filters`](@/api/filters.md) 插件和 [`DropdownMenu`](@/api/dropdownMenu.md) 插件.

| Windows                             | macOS                                  | Action         |  Excel  | Sheets  |
| ----------------------------------- | -------------------------------------- | -------------- | :-----: | :-----: |
| <kbd>**Alt**</kbd>+<kbd>**A**</kbd> | <kbd>**Option**</kbd>+<kbd>**A**</kbd> | 清除所有过滤器 | &cross; | &cross; |

### 评论键盘快捷键

这些键盘快捷键可与 [comments](@/guides/cell-features/comments/comments.md) 配合使用.要激活它们,请启用 [`Comments`](@/api/comments.md) 插件.

| Windows                                                 | macOS                                                      | Action               |  Excel  | Sheets  |
| ------------------------------------------------------- | ---------------------------------------------------------- | -------------------- | :-----: | :-----: |
| <kbd>**Ctrl**</kbd>+<kbd>**Alt**</kbd>+<kbd>**M**</kbd> | <kbd>**Ctrl**</kbd>+<kbd>**Option**</kbd>+<kbd>**M**</kbd> | 添加或编辑评论       | &cross; | &check; |
| <kbd>**Ctrl**</kbd>+<kbd>**Enter**</kbd>                | <kbd>**Cmd**</kbd>+<kbd>**Enter**</kbd>                    | 保存并退出当前评论   | &cross; | &check; |
| <kbd>**Escape**</kbd>                                   | <kbd>**Escape**</kbd>                                      | 退出当前评论而不保存 | &cross; | &cross; |


## API 参考

有关[选项](@/guides/getting-started/configuration-options/configuration-options.md)、方法和[Handsontable hooks](@/guides/getting-started/events-and-hooks/events)的列表-and-hooks.md) 与键盘导航相关,请参阅以下 API 参考页:

- APIs:
  - [`ShortcutContext`](@/api/shortcutContext.md)
  - [`ShortcutManager`](@/api/shortcutManager.md)
- 配置选项:
  - [`enterBeginsEditing`](@/api/options.md#enterbeginsediting)
  - [`enterMoves`](@/api/options.md#entermoves)
  - [`tabMoves`](@/api/options.md#tabmoves)
- 核心方法:
  - [`getShortcutManager()`](@/api/core.md#getshortcutmanager)
  - [`isListening()`](@/api/core.md#islistening)
  - [`listen()`](@/api/core.md#listen)
  - [`unlisten()`](@/api/core.md#unlisten)
- Hooks:
  - [`afterDocumentKeyDown`](@/api/hooks.md#afterdocumentkeydown)
  - [`beforeKeyDown`](@/api/hooks.md#beforekeydown)

## 故障排除

没有找到您需要的东西？试试这个:

<div class="boxes-list gray">

- GitHub 上的[查看相关主题](https://github.com/handsontable/handsontable/issues)
- GitHub 上的[报告问题](https://github.com/handsontable/handsontable/issues/new/choose)
- Stack Overflow 上的[提问](https://stackoverflow.com/questions/tagged/handsontable)
- 在 Handsontable 论坛上[开始讨论](https://forum.handsontable.com/c/getting-help/questions)
- [联系我们的技术支持](https://handsontable.com/contact?category=technical_support) 获取帮助

</div>