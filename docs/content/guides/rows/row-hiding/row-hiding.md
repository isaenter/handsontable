---
id: 37786931
title: 行隐藏
metaTitle: Row hiding - JavaScript Data Grid | Handsontable
description: Hide individual rows to avoid rendering them as DOM elements. It helps you reduce screen clutter and improve the grid's performance.
permalink: /row-hiding
canonicalUrl: /row-hiding
react:
  id: al1djb6l
  metaTitle: Row hiding - React Data Grid | Handsontable
searchCategory: Guides
category: Rows
---

# 行隐藏

隐藏各个行以避免将它们呈现为 DOM 元素.它可以帮助您减少屏幕混乱并提高网格的性能.

[[toc]]

## 概述

`隐藏行`意味着隐藏的行不会呈现为 DOM 元素.

当您隐藏一行时:
- 源数据不会被修改.
- [`HiddenRows`](@/api/hiddenRows.md) 插件不参与数据转换<br>([`getData*()` 方法返回的数据的形状](@/api/core.md#getdata)保持不变).

## 启用行隐藏

要启用行隐藏,请使用 [`hiddenRows`](@/api/options.md#hiddenrows) 选项.

::: only-for javascript

::: example #example1 --js 1 --ts 2

@[code](@/content/guides/rows/row-hiding/javascript/example1.js)
@[code](@/content/guides/rows/row-hiding/javascript/example1.ts)

:::

:::

::: only-for react

::: example #example1 :react --js 1 --ts 2

@[code](@/content/guides/rows/row-hiding/react/example1.jsx)
@[code](@/content/guides/rows/row-hiding/react/example1.tsx)

:::

:::

## 设置行隐藏

要设置行隐藏配置,请按照以下步骤操作.

### 第 1 步:指定默认隐藏的行

要启用行隐藏并指定默认隐藏的行,请将 [`hiddenRows`](@/api/options.md#hiddenrows) 配置选项设置为对象.

在该对象中,添加`rows`属性,并将其设置为行索引数组.

现在,这些行默认隐藏:

::: only-for javascript

::: example #example2 --js 1 --ts 2

@[code](@/content/guides/rows/row-hiding/javascript/example2.js)
@[code](@/content/guides/rows/row-hiding/javascript/example2.ts)

:::

:::

::: only-for react

::: example #example2 :react --js 1 --ts 2

@[code](@/content/guides/rows/row-hiding/react/example2.jsx)
@[code](@/content/guides/rows/row-hiding/react/example2.tsx)

:::

:::

### 第 2 步:显示 UI 指示器

要轻松查看当前隐藏的行,请显示 UI 指示器.

要启用 UI 指示器,请在`hiddenRows`对象中将`indicators`属性设置为`true`:

::: only-for javascript

::: example #example3 --js 1 --ts 2

@[code](@/content/guides/rows/row-hiding/javascript/example3.js)
@[code](@/content/guides/rows/row-hiding/javascript/example3.ts)

:::

:::

::: only-for react

::: example #example3 :react --js 1 --ts 2

@[code](@/content/guides/rows/row-hiding/react/example3.jsx)
@[code](@/content/guides/rows/row-hiding/react/example3.tsx)

:::

:::

### 第 3 步:设置上下文菜单项

要轻松隐藏和取消隐藏行,请将行隐藏项添加到 Handsontable 的[上下文菜单](@/guides/accessories-and-menus/context-menu/context-menu.md).

启用 [`ContextMenu`](@/api/contextMenu.md) 插件和 [`HiddenRows`](@/api/hiddenRows.md) 插件.现在,[上下文菜单](@/guides/accessories-and-menus/context-menu/context-menu.md) 自动显示用于隐藏和取消隐藏行的附加项目.

::: only-for javascript

::: example #example4 --js 1 --ts 2

@[code](@/content/guides/rows/row-hiding/javascript/example4.js)
@[code](@/content/guides/rows/row-hiding/javascript/example4.ts)

:::

:::

::: only-for react

::: example #example4 :react --js 1 --ts 2

@[code](@/content/guides/rows/row-hiding/react/example4.jsx)
@[code](@/content/guides/rows/row-hiding/react/example4.tsx)

:::

:::

您还可以通过添加 [`hidden_​​rows_show`](@/guides/accessories-and-menus/context-menu/context-menu.md#context-menu-with-specific-options) 单独添加行隐藏菜单项和[`hidden_​​rows_hide`](@/guides/accessories-and-menus/context-menu/context-menu.md#context-menu-with-specific-options) 字符串到 `contextMenu` 参数:

::: only-for javascript

::: example #example5 --js 1 --ts 2

@[code](@/content/guides/rows/row-hiding/javascript/example5.js)
@[code](@/content/guides/rows/row-hiding/javascript/example5.ts)

:::

:::

::: only-for react

::: example #example5 :react --js 1 --ts 2

@[code](@/content/guides/rows/row-hiding/react/example5.jsx)
@[code](@/content/guides/rows/row-hiding/react/example5.tsx)

:::

:::

### 步骤 4:设置复制和粘贴行为

默认情况下,复制和粘贴时会包含隐藏行.

要从复制和粘贴中排除隐藏行,请在`hiddenRows`对象中,将`copyPasteEnabled`属性设置为`false`:

::: only-for javascript

::: example #example6 --js 1 --ts 2

@[code](@/content/guides/rows/row-hiding/javascript/example6.js)
@[code](@/content/guides/rows/row-hiding/javascript/example6.ts)

:::

:::

::: only-for react

::: example #example6 :react --js 1 --ts 2

@[code](@/content/guides/rows/row-hiding/react/example6.jsx)
@[code](@/content/guides/rows/row-hiding/react/example6.tsx)

:::

:::

## 行隐藏API方法

::: only-for react

::: tip

要使用 Handsontable API,您需要访问 Handsontable 实例.您可以通过利用对`HotTable`组件的引用并读取其`hotInstance`属性来做到这一点.

有关更多信息,请参阅[实例方法](@/guides/getting-started/react-methods/react-methods.md)页面.

:::

:::

对于最流行的行隐藏任务,请使用以下 API 方法.

要查看更改,请使用 [`render()`](@/api/core.md#render) 方法重新渲染 Handsontable 实例.

### 访问 `HiddenRows` 插件实例

要访问 [`HiddenRows`](@/api/hiddenRows.md) 插件实例,请使用 [`getPlugin()`](@/api/core.md#getplugin) 方法:

```js
const plugin = hot.getPlugin('hiddenRows');
```

### 隐藏单行

要隐藏单行,请使用 [`hideRow()`](@/api/hiddenRows.md#hiderow) 方法:

```js
const plugin = hot.getPlugin('hiddenRows');

plugin.hideRow(4);
```

### 隐藏多行

隐藏多行:
- 将行索引作为参数传递给`hideRow()`方法
- 或者将行索引数组传递给`hideRows()`方法

```js
const plugin = hot.getPlugin('hiddenRows');

plugin.hideRow(0, 4, 6);
// 或者
plugin.hideRows([0, 4, 6]);
```

### 取消隐藏单行

要取消隐藏单行,请使用`showRow()`方法:

```js
const plugin = hot.getPlugin('hiddenRows');

plugin.showRow(4);
```

### 取消隐藏多行

要取消隐藏多行:
- 将行索引作为参数传递给`showRow()`方法
- 或者将行索引数组传递给`showRows()`方法

```js
const plugin = hot.getPlugin('hiddenRows');

plugin.showRow(0, 4, 6);
// 或者
plugin.showRows([0, 4, 6]);
```

## 相关API参考

- 配置选项:
  - [`hiddenRows`](@/api/options.md#hiddenrows)
- Hooks:
  - [`afterHideRows`](@/api/hooks.md#afterhiderows)
  - [`afterUnhideRows`](@/api/hooks.md#afterunhiderows)
  - [`beforeHideRows`](@/api/hooks.md#beforehiderows)
  - [`beforeUnhideRows`](@/api/hooks.md#beforeunhiderows)
- 插件:
  - [`HiddenRows`](@/api/hiddenRows.md)
