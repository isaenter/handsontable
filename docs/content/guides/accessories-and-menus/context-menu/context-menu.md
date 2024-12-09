---
id: 3hrrxxln
title: 右键菜单
metaTitle: Context menu - JavaScript Data Grid | Handsontable
description: 通过打开右键菜单，快速访问上下文操作，例如删除行、插入列或复制数据。
permalink: /context-menu
canonicalUrl: /context-menu
tags:
  - contextual menu
  - shortcut menu
  - pop-up menu
  - right-click menu
react:
  id: r2x6mh6h
  metaTitle: 右键菜单 - React Data Grid | Handsontable
searchCategory: Guides
category: Accessories and menus
---

# 右键菜单

通过打开右键菜单，快速访问上下文操作，例如删除行、插入列或复制数据。

[[toc]]

## 带有默认选项的右键菜单

使用默认配置启用右键菜单：

```js
contextMenu: true,
```

要查看右键菜单，请右键单击单元格：

::: only-for javascript

::: example #example1 --js 1 --ts 2

@[code](@/content/guides/accessories-and-menus/context-menu/javascript/example1.js)
@[code](@/content/guides/accessories-and-menus/context-menu/javascript/example1.ts)

:::

:::

::: only-for react

::: example #example1 :react --js 1 --ts 2

@[code](@/content/guides/accessories-and-menus/context-menu/react/example1.jsx)
@[code](@/content/guides/accessories-and-menus/context-menu/react/example1.tsx)

:::

:::


## 带有选定选项的右键菜单

您可以通过将 [`contextMenu`](@/api/options.md#contextmenu) 选项作为键数组传递来定义菜单中的项目：

| 键                                                      | 操作和所需插件                                                                                                                                  |
| -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`row_above`](@/api/contextMenu.md)                      | 在上面插入一行                                                                                                                                        |
| [`row_below`](@/api/contextMenu.md)                      | 在下面插入一行                                                                                                                                      |
| [`col_left`](@/api/contextMenu.md)                       | 在左侧插入一列                                                                       |
| [`col_right`](@/api/contextMenu.md)                      | 在右侧插入一列                                                                        |
| [`---------`](@/api/contextMenu.md)                      | 为菜单中的项目添加分隔符                                                                         |
| [`remove_row`](@/api/contextMenu.md)                     | 删除选定的行  
| [`remove_col`](@/api/contextMenu.md)                     | 删除选定的列                                                                                                                                |
| [`clear_column`](@/api/contextMenu.md)                   | 删除选定列的数据                                                               |
| [`undo`](@/api/contextMenu.md)                           | 撤消上一个操作。需要：[`UndoRedo`](@/api/undoRedo.md)                                                                                                      |
| [`redo`](@/api/contextMenu.md)                           | 重做最后一个动作。需要：[`UndoRedo`](@/api/undoRedo.md)                                                                                                      |
| [`make_read_only`](@/api/contextMenu.md)                 | 将选定的单元格设置为只读                                                                           |
| [`alignment`](@/api/contextMenu.md)                      | 对齐单元格中的文本                                                                                       |
| [`cut`](@/api/contextMenu.md)                            | 将所选单元格的内容剪切到系统剪贴板。需要：[`复制粘贴`](@/api/copyPaste.md) |
| [`copy`](@/api/contextMenu.md)                           | 将所选单元格的内容复制到系统剪贴板。需要：[`复制粘贴`](@/api/copyPaste.md) |
| [`copy_with_column_headers`](@/api/contextMenu.md)       | 复制所选单元格的内容及其最近的列标题。需要：[`CopyPaste`](@/api/copyPaste.md)，并将`copyColumnHeaders`设置为`true`                        |
| [`copy_with_column_group_headers`](@/api/contextMenu.md) | 复制所选单元格的内容及其所有相关的列标题。需要：[`NestedHeaders`](@/api/nestedHeaders.md) 和 [`CopyPaste`](@/api/copyPaste.md)，并将 `copyColumnGroupHeaders` 设置为 `true`    | 
| [`copy_column_headers_only`](@/api/contextMenu.md)       | 复制最接近所选单元格的列标题的内容。需要：[`CopyPaste`](@/api/copyPaste.md)，并将`copyColumnHeadersOnly`设置为`true`                                          |
| [`freeze_column`](@/api/contextMenu.md)                  | 冻结选定的列。需要：[`ManualColumnFreeze`](@/api/manualColumnFreeze.md)                     |
| [`unfreeze_column`](@/api/contextMenu.md)                | 解冻选定的列。需要：[`ManualColumnFreeze`](@/api/manualColumnFreeze.md)                   |
| [`borders`](@/api/contextMenu.md)                        | 在选定单元格周围添加边框。需要：[`CustomBorders`](@/api/customBorders.md)                  |
| [`commentsAddEdit`](@/api/contextMenu.md)                | 添加或编辑评论。需要：[`评论`](@/api/comments.md)                                                                                                     |
| [`commentsRemove`](@/api/contextMenu.md)                 | 删除评论。需要：[`评论`](@/api/comments.md)                                                                                                        |
| [`commentsReadOnly`](@/api/contextMenu.md)               | 将评论设置为只读。需要：[`评论`](@/api/comments.md)                                                                                                |
| [`mergeCells`](@/api/contextMenu.md)                     | 合并或取消合并选定的单元格。需要：[`MergeCells`](@/api/mergeCells.md)                        |
| [`add_child`](@/api/contextMenu.md)                      | 插入子行。需要：[`NestedRows`](@/api/nestedRows.md)                                                                                                    |
| [`detach_from_parent`](@/api/contextMenu.md)             | 将所选行与其父行分离。需要：[`NestedRows`](@/api/nestedRows.md)                     |
| [`hidden_columns_hide`](@/api/contextMenu.md)            | 隐藏选定的列。需要：[`HiddenColumns`](@/api/hiddenColumns.md)                                  |
| [`hidden_columns_show`](@/api/contextMenu.md)            | 显示隐藏的列。需要：[`HiddenColumns`](@/api/hiddenColumns.md)                                        |
| [`hidden_rows_hide`](@/api/contextMenu.md)               | 隐藏选定的行。需要：[`HiddenRows`](@/api/hiddenRows.md)                                        |
| [`hidden_rows_show`](@/api/contextMenu.md)               | 显示隐藏的行。需要：[`HiddenRows`](@/api/hiddenRows.md)                                                                                                      |
| [`filter_by_condition`](@/api/contextMenu.md)            | 添加第一个过滤条件。需要：[`过滤器`](@/api/filters.md)                                                                                                |
| [`filter_by_condition2`](@/api/contextMenu.md)           | 添加第二个过滤条件。需要：[`过滤器`](@/api/filters.md)                                                                                               |
| [`filter_operators`](@/api/contextMenu.md)               | 选择过滤器参数。需要：[`过滤器`](@/api/filters.md)                                                                                                   |
| [`filter_by_value`](@/api/contextMenu.md)                | 添加过滤值。需要：[`过滤器`](@/api/filters.md)                                                                                                          |
| [`filter_action_bar`](@/api/contextMenu.md)              | 应用配置的过滤器。需要：[`过滤器`](@/api/filters.md)                                                                                                 |

要查看右键菜单，请右键单击单元格：

::: only-for javascript

::: example #example2 --js 1 --ts 2

@[code](@/content/guides/accessories-and-menus/context-menu/javascript/example2.js)
@[code](@/content/guides/accessories-and-menus/context-menu/javascript/example2.ts)

:::

:::

::: only-for react

::: example #example2 :react --js 1 --ts 2

@[code](@/content/guides/accessories-and-menus/context-menu/react/example2.jsx)
@[code](@/content/guides/accessories-and-menus/context-menu/react/example2.tsx)

:::

:::

::: only-for react

## 带有自定义选项的右键菜单

除了内置选项之外，您还可以为右键菜单配备自定义选项。

要查看右键菜单，请右键单击单元格：

::: example #example4 :react --js 1 --ts 2

@[code](@/content/guides/accessories-and-menus/context-menu/react/example4.jsx)
@[code](@/content/guides/accessories-and-menus/context-menu/react/example4.tsx)

:::

:::

## 具有完全自定义配置的右键菜单

此示例演示如何：

- 为所有选项添加公共回调
- 动态禁用选项
- 为预定义选项设置自定义文本
- 添加自己的自定义选项
- 添加特定选项的回调

要查看右键菜单，请右键单击单元格：

::: only-for javascript

::: example #example3 --js 1 --ts 2

@[code](@/content/guides/accessories-and-menus/context-menu/javascript/example3.js)
@[code](@/content/guides/accessories-and-menus/context-menu/javascript/example3.ts)

:::

:::

::: only-for react

::: example #example3 :react --js 1 --ts 2

@[code](@/content/guides/accessories-and-menus/context-menu/react/example3.jsx)
@[code](@/content/guides/accessories-and-menus/context-menu/react/example3.tsx)

:::

:::

## 相关键盘快捷键

| Windows                                                                                               | macOS                                                                                                | Action                                                        |  Excel  | Sheets  |
| ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- | :-----: | :-----: |
| <kbd>**Ctrl**</kbd>+<kbd>**Shift**</kbd>+<kbd>**\\**</kbd> 或 <kbd>**Shift**</kbd>+<kbd>**F10**</kbd> | <kbd>**Cmd**</kbd>+<kbd>**Shift**</kbd>+<kbd>**\\**</kbd> 或 <kbd>**Shift**</kbd>+<kbd>**F10**</kbd> | 打开右键菜单                                         | &cross; | &check; |
| 方向键                                                                                            | 方向键                                                                                           | 向上、向下、向左或向右移动一个可用的菜单项         | &check; | &check; |
| <kbd>**Page Up**</kbd>                                                                                | <kbd>**Page Up**</kbd>                                                                               | 移至右键菜单或子菜单的第一个可见项目 | &check; | &cross; |
| <kbd>**Page Down**</kbd>                                                                              | <kbd>**Page Down**</kbd>                                                                             | 移至右键菜单或子菜单的最后一个可见项目  | &check; | &cross; |
| <kbd>**Escape**</kbd>                                                                                 | <kbd>**Escape**</kbd>                                                                                | 关闭右键菜单或子菜单                             | &check; | &check; |
| <kbd>**Enter**</kbd>                                                                                  | <kbd>**Enter**</kbd>                                                                                 | 运行所选菜单项的操作                      | &check; | &cross; |

## 相关文章

### 相关指南

<div class="boxes-list gray">
 
- [通过右键菜单添加评论](@/guides/cell-features/comments/comments.md#add-comments-via-the-context-menu)
- [剪贴板：右键菜单](@/guides/cell-features/clipboard/clipboard.md#context-menu)
- [图标包](@/guides/accessories-and-menus/icon-pack/icon-pack.md)
::: only-for javascript
- [React 中的自定义右键菜单](@/react/guides/accessories-and-menus/context-menu/context-menu.md)
- [Angular 中的自定义右键菜单](@/guides/integrate-with-angular/angular-custom-context-menu-example/angular-custom-context-menu-example.md)
- [Vue 2 中的自定义右键菜单](@/guides/integrate-with-vue/vue-custom-context-menu-example/vue-custom-context-menu-example.md)
- [Vue 3 中的自定义右键菜单](@/guides/integrate-with-vue3/vue3-custom-context-menu-example/vue3-custom-context-menu-example.md)
:::

</div>

### 相关博客文章

<div class="boxes-list">

- [自定义 Handsontable 右键菜单](https://handsontable.com/blog/customize-handsontable-context-menu)

</div>

### 相关API参考

- 配置选项：
  - [`allowInsertColumn`](@/api/options.md#allowinsertcolumn)
  - [`allowInsertRow`](@/api/options.md#allowinsertrow)
  - [`allowRemoveColumn`](@/api/options.md#allowremovecolumn)
  - [`allowRemoveRow`](@/api/options.md#allowremoverow)
  - [`contextMenu`](@/api/options.md#contextmenu)
  - [`dropdownMenu`](@/api/options.md#dropdownmenu)
- Hooks:
  - [`afterContextMenuDefaultOptions`](@/api/hooks.md#aftercontextmenudefaultoptions)
  - [`afterContextMenuHide`](@/api/hooks.md#aftercontextmenuhide)
  - [`afterContextMenuShow`](@/api/hooks.md#aftercontextmenushow)
  - [`afterDropdownMenuDefaultOptions`](@/api/hooks.md#afterdropdownmenudefaultoptions)
  - [`afterDropdownMenuHide`](@/api/hooks.md#afterdropdownmenuhide)
  - [`afterDropdownMenuShow`](@/api/hooks.md#afterdropdownmenushow)
  - [`afterOnCellContextMenu`](@/api/hooks.md#afteroncellcontextmenu)
  - [`beforeContextMenuSetItems`](@/api/hooks.md#beforecontextmenusetitems)
  - [`beforeContextMenuShow`](@/api/hooks.md#beforecontextmenushow)
  - [`beforeDropdownMenuSetItems`](@/api/hooks.md#beforedropdownmenusetitems)
  - [`beforeDropdownMenuShow`](@/api/hooks.md#beforedropdownmenushow)
  - [`beforeOnCellContextMenu`](@/api/hooks.md#beforeoncellcontextmenu)
- 插件：
  - [`ContextMenu`](@/api/contextMenu.md)
