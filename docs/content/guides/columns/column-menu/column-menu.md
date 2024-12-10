---
id: 25b7vhfs
title: 列菜单
metaTitle: Column menu - JavaScript Data Grid | Handsontable
description: Display a configurable dropdown menu, triggered by clicking on a button in a column header.
permalink: /column-menu
canonicalUrl: /column-menu
tags:
  - dropdown menu
react:
  id: uc7w8gu1
  metaTitle: Column menu - React Data Grid | Handsontable
searchCategory: Guides
category: Columns
---

# 列菜单

显示可配置的下拉菜单，通过单击列标题中的按钮触发。

[[toc]]

## 概述

[`DropdownMenu`](@/api/dropdownMenu.md) 插件使您能够向表的列标题添加可配置的下拉菜单。
下拉菜单的作用类似于[上下文菜单](@/guides/accessories-and-menus/context-menu/context-menu.md)，但通过单击标题中的按钮来触发。

## 快速设置

要启用该插件，请在初始化 Handsontable 时将 [`dropdownMenu`](@/api/options.md#dropdownmenu) 配置选项设置为 `true`。

::: only-for javascript

::: example #example1 --js 1 --ts 2

@[code](@/content/guides/columns/column-menu/javascript/example1.js)
@[code](@/content/guides/columns/column-menu/javascript/example1.ts)

:::

:::

::: only-for react

::: example #example1 :react --js 1 --ts 2

@[code](@/content/guides/columns/column-menu/react/example1.jsx)
@[code](@/content/guides/columns/column-menu/react/example1.tsx)

:::

:::

## 插件配置

要使用默认下拉内容，请将其设置为`true`，或通过将其设置为使用自定义操作列表来自定义它。有关可用的条目选项参考，请参阅[上下文菜单演示](@/guides/accessories-and-menus/context-menu/context-menu.md#page-specific)。

::: only-for javascript

::: example #example2 --js 1 --ts 2

@[code](@/content/guides/columns/column-menu/javascript/example2.js)
@[code](@/content/guides/columns/column-menu/javascript/example2.ts)

:::

:::

::: only-for react

::: example #example2 :react --js 1 --ts 2

@[code](@/content/guides/columns/column-menu/react/example2.jsx)
@[code](@/content/guides/columns/column-menu/react/example2.tsx)

:::

:::

## 相关键盘快捷键

| Windows                                                  | macOS                                                       | Action                                                         |  Excel  | Sheets  |
| -------------------------------------------------------- | ----------------------------------------------------------- | -------------------------------------------------------------- | :-----: | :-----: |
| <kbd>**Shift**</kbd>+<kbd>**Alt**</kbd>+<kbd>**↓**</kbd> | <kbd>**Shift**</kbd>+<kbd>**Option**</kbd>+<kbd>**↓**</kbd> | 打开列菜单。如果相应的列标题显示菜单按钮，则适用于任何单元格。 | &cross; | &cross; |
| <kbd>**Shift**</kbd>+<kbd>**Enter**</kbd>                | <kbd>**Shift**</kbd>+<kbd>**Enter**</kbd>                   | 打开列菜单。仅当您选择显示列菜单按钮的列标题时才有效。         | &cross; | &cross; |

## 相关文章

### 相关指南

- [上下文菜单](@/guides/accessories-and-menus/context-menu/context-menu.md)

### 相关API参考

- 配置选项:
  - [`dropdownMenu`](@/api/options.md#dropdownmenu)
- Hooks:
  - [`afterDropdownMenuDefaultOptions`](@/api/hooks.md#afterdropdownmenudefaultoptions)
  - [`afterDropdownMenuHide`](@/api/hooks.md#afterdropdownmenuhide)
  - [`afterDropdownMenuShow`](@/api/hooks.md#afterdropdownmenushow)
  - [`beforeDropdownMenuSetItems`](@/api/hooks.md#beforedropdownmenusetitems)
  - [`beforeDropdownMenuShow`](@/api/hooks.md#beforedropdownmenushow)
- 插件:
  - [`DropdownMenu`](@/api/dropdownMenu.md)
