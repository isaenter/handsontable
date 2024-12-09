---
id: 6elqkmhr
title: 列隐藏
metaTitle: Column hiding - JavaScript Data Grid | Handsontable
description:
  Hide individual columns to avoid rendering them as DOM elements. It helps you reduce screen
  clutter and improve the grid's performance.
permalink: /column-hiding
canonicalUrl: /column-hiding
react:
  id: u1aw329h
  metaTitle: Column hiding - React Data Grid | Handsontable
searchCategory: Guides
category: Columns
---

# 列隐藏

隐藏各个列以减少屏幕混乱并提高网格的性能。

[[toc]]

## 概述

`隐藏列`意味着隐藏的列不会呈现为 DOM 元素。

当您隐藏列时：

- 源数据不会被修改。
- [`HiddenColumns`](@/api/hiddenColumns.md) 插件不参与数据
  转换<br>（由返回的数据的形状
  [`getData*()` 方法]（@/api/core.md#getdata）保持不变）。

## 启用列隐藏

要启用列隐藏，请使用 [`hiddenColumns`](@/api/options.md#hiddencolumns) 选项。

::: only-for javascript

::: example #example1 --js 1 --ts 2

@[code](@/content/guides/columns/column-hiding/javascript/example1.js)
@[code](@/content/guides/columns/column-hiding/javascript/example1.ts)

:::

:::

::: only-for react

::: example #example1 :react --js 1 --ts 2

@[code](@/content/guides/columns/column-hiding/react/example1.jsx)
@[code](@/content/guides/columns/column-hiding/react/example1.tsx)

:::

:::

## 设置列隐藏

要设置列隐藏配置，请按照以下步骤操作。

### 第 1 步：指定默认隐藏的列

要启用列隐藏并指定默认隐藏的列，请设置
[`hiddenColumns`](@/api/options.md#hiddencolumns) 对象的配置选项。

在对象中，添加一个 [`columns`](@/api/options.md#columns) 配置选项，并将其设置为
列索引数组。

现在，这些列默认隐藏：

::: only-for javascript

::: example #example2 --js 1 --ts 2

@[code](@/content/guides/columns/column-hiding/javascript/example2.js)
@[code](@/content/guides/columns/column-hiding/javascript/example2.ts)

:::

:::

::: only-for react

::: example #example2 :react --js 1 --ts 2

@[code](@/content/guides/columns/column-hiding/react/example2.jsx)
@[code](@/content/guides/columns/column-hiding/react/example2.tsx)

:::

:::

### 第 2 步：显示 UI 指示器

要轻松查看当前隐藏的列，请显示 UI 指示器。

要启用 UI 指示器，请在 [`hiddenColumns`](@/api/options.md#hiddencolumns) 对象中设置
将 [`indicators`](@/api/hiddenColumns.md) 属性设置为 `true`：

::: tip

如果您同时使用 [`NestedHeaders`](@/api/nestedHeaders.md) 插件和
[`HiddenColumns`](@/api/hiddenColumns.md) 插件，还需要设置
[`colHeaders`](@/api/options.md#colheaders) 属性设置为 `true`。否则，
[`indicators`](@/api/hiddenColumns.md) 不起作用。

:::

::: only-for javascript

::: example #example3 --js 1 --ts 2

@[code](@/content/guides/columns/column-hiding/javascript/example3.js)
@[code](@/content/guides/columns/column-hiding/javascript/example3.ts)

:::

:::

::: only-for react

::: example #example3 :react --js 1 --ts 2

@[code](@/content/guides/columns/column-hiding/react/example3.jsx)
@[code](@/content/guides/columns/column-hiding/react/example3.tsx)

:::

:::

### 第 3 步：设置上下文菜单项

要轻松隐藏和取消隐藏列，请将列隐藏项添加到 Handsontable 的
[上下文菜单](@/guides/accessories-and-menus/context-menu/context-menu.md)。

启用 [`ContextMenu`](@/api/contextMenu.md) 插件和
[`HiddenColumns`](@/api/hiddenColumns.md) 插件。现在，上下文菜单会自动显示
用于隐藏和取消隐藏列的附加项目。

::: only-for javascript

::: example #example4 --js 1 --ts 2

@[code](@/content/guides/columns/column-hiding/javascript/example4.js)
@[code](@/content/guides/columns/column-hiding/javascript/example4.ts)

:::

:::

::: only-for react

::: example #example4 :react --js 1 --ts 2

@[code](@/content/guides/columns/column-hiding/react/example4.jsx)
@[code](@/content/guides/columns/column-hiding/react/example4.tsx)

:::

:::

您还可以单独添加列隐藏菜单项，方法是添加
[`hidden_​​columns_show`](@/guides/accessories-and-menus/context-menu/context-menu.md#context-menu-with-specific-options)
和
[`hidden_​​columns_hide`](@/guides/accessories-and-menus/context-menu/context-menu.md#context-menu-with-specific-options)
字符串到[`contextMenu`](@/api/contextMenu.md)参数：

::: only-for javascript

::: example #example5 --js 1 --ts 2

@[code](@/content/guides/columns/column-hiding/javascript/example5.js)
@[code](@/content/guides/columns/column-hiding/javascript/example5.ts)

:::

:::

::: only-for react

::: example #example5 :react --js 1 --ts 2

@[code](@/content/guides/columns/column-hiding/react/example5.jsx)
@[code](@/content/guides/columns/column-hiding/react/example5.tsx)

:::

:::

### 步骤 4：设置复制和粘贴行为

默认情况下，复制和粘贴时包含隐藏列。

要从复制和粘贴中排除隐藏列，请在 [`hiddenColumns`](@/api/hiddenColumns.md) 中
对象，将 [`copyPasteEnabled`](@/api/hiddenColumns.md) 属性设置为 `false`：

::: only-for javascript

::: example #example6 --js 1 --ts 2

@[code](@/content/guides/columns/column-hiding/javascript/example6.js)
@[code](@/content/guides/columns/column-hiding/javascript/example6.ts)

:::

:::

::: only-for react

::: example #example6 :react --js 1 --ts 2

@[code](@/content/guides/columns/column-hiding/react/example6.jsx)
@[code](@/content/guides/columns/column-hiding/react/example6.tsx)

:::

:::

## 列隐藏API方法

对于最流行的列隐藏任务，请使用以下 API 方法。

::: only-for react

::: tip

要使用 Handsontable API，您需要访问 Handsontable 实例。你可以这样做
利用对`HotTable`组件的引用，并读取其`hotInstance`属性。

有关更多信息，请参阅[实例方法](@/guides/getting-started/react-methods/react-methods.md)页面。

:::

:::

要查看您的更改，请使用以下命令重新渲染您的 Handsontable 实例
[`render()`](@/api/core.md#render) 方法。

### 访问 [`HiddenColumns`](@/api/hiddenColumns.md) 插件实例

要访问 [`HiddenColumns`](@/api/hiddenColumns.md) 插件实例，请使用
[`getPlugin()`](@/api/core.md#getplugin) 方法：

```js
const plugin = hot.getPlugin('hiddenColumns');
```

### 隐藏单列

要隐藏单个列，请使用 [`hideColumn()`](@/api/hiddenColumns.md#hidecolumn) 方法：

```js
const plugin = hot.getPlugin('hiddenColumns');

plugin.hideColumn(4);

//重新渲染你的 Handsontable 实例
hot.render();
```

### 隐藏多列

隐藏多列：

- 将列索引作为参数传递给 [`hideColumn()`](@/api/hiddenColumns.md#hidecolumn)
  方法
- 或者将列索引数组传递给 [`hideColumns()`](@/api/hiddenColumns.md#hidecolumn)
  方法

```js
const plugin = hot.getPlugin('hiddenColumns');

plugin.hideColumn(0, 4, 6);
// 或者
plugin.hideColumns([0, 4, 6]);

//重新渲染你的 Handsontable 实例
hot.render();
```

### 取消隐藏单列

要取消隐藏单个列，请使用 [`showColumn()`](@/api/hiddenColumns.md#showcolumn) 方法：

```js
const plugin = hot.getPlugin('hiddenColumns');

plugin.showColumn(4);

//重新渲染你的 Handsontable 实例
hot.render();
```

### 取消隐藏多列

要取消隐藏多列：

- 将列索引作为参数传递给 [`showColumn()`](@/api/hiddenColumns.md#showcolumn)
  方法
- 或者将列索引数组传递给 [`showColumns()`](@/api/hiddenColumns.md#showcolumns)
  方法

```js
const plugin = hot.getPlugin('hiddenColumns');

plugin.showColumn(0, 4, 6);
// 或者
plugin.showColumns([0, 4, 6]);

//重新渲染你的 Handsontable 实例
hot.render();
```

## 相关API参考

- 配置选项:
  - [`hiddenColumns`](@/api/options.md#hiddencolumns)
- Hooks:
  - [`afterHideColumns`](@/api/hooks.md#afterhidecolumns)
  - [`afterUnhideColumns`](@/api/hooks.md#afterunhidecolumns)
  - [`beforeHideColumns`](@/api/hooks.md#beforehidecolumns)
  - [`beforeUnhideColumns`](@/api/hooks.md#beforeunhidecolumns)
- 插件:
  - [`HiddenColumns`](@/api/hiddenColumns.md)
