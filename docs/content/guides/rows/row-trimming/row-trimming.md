---
id: 4q2wi29j
title: 行修剪
metaTitle: Row trimming - JavaScript Data Grid | Handsontable
description: Hide individual rows from your interface and exclude them from the rendering process and DataMap. This feature is similar, but not the same, as "hiding rows".
permalink: /row-trimming
canonicalUrl: /row-trimming
react:
  id: fkcjw0q1
  metaTitle: Row trimming - React Data Grid | Handsontable
searchCategory: Guides
category: Rows
---

# 行修剪

从界面中隐藏各个行，并将它们从渲染过程和`DataMap`中排除。

[[toc]]

## 概述

行修剪类似于[行隐藏](@/guides/rows/row-hiding/row-hiding.md)，但工作方式略有不同。

[`TrimRows`](@/api/trimRows.md) 插件允许修剪表中的特定行。被修剪的行不会呈现，也不包含在`DataMap`中，可以通过调用 [`getData`](@/api/core.md#getdata) 方法来检索。

## 设置

要启用行修剪，请将 [`trimRows`](@/api/options.md#trimrows) 选项设置为 `true`。

::: only-for javascript

```js
// 启用`TrimRows`插件
trimRows: true,
```

:::

::: only-for react

```jsx
// 启用`TrimRows`插件

<HotTable
  trimRows={true}
/>
```

:::

要在 Handsontable 初始化时启用行修剪并修剪选定的行，请将 [`trimRows`](@/api/options.md#trimrows) 选项设置为物理行索引数组。

::: only-for javascript

```js
// 启用`TrimRows`插件
// 在 Handsontable 初始化时，修剪第 5、10 和 15 行
trimRows: [5, 10, 15],
```

:::

::: only-for react

```jsx
// 启用`TrimRows`插件
// 在 Handsontable 初始化时，修剪第 5、10 和 15 行

<HotTable
  trimRows={[5, 10, 15]}
/>
```

:::

## 例子

请注意，以下示例中缺少第二、第三和第六行：

::: only-for javascript

::: example #example1 --js 1 --ts 2

@[code](@/content/guides/rows/row-trimming/javascript/example1.js)
@[code](@/content/guides/rows/row-trimming/javascript/example1.ts)

:::

:::

::: only-for react

::: example #example1 :react --js 1 --ts 2

@[code](@/content/guides/rows/row-trimming/react/example1.jsx)
@[code](@/content/guides/rows/row-trimming/react/example1.tsx)

:::

:::

## API示例

::: only-for react

::: tip

要使用 Handsontable API，您需要访问 Handsontable 实例。您可以通过利用对`HotTable`组件的引用并读取其`hotIntance`属性来做到这一点。

有关更多信息，请参阅[实例方法](@/guides/getting-started/react-methods/react-methods.md)页面。

:::

:::

可以通过调用以下方式访问插件实例：

```js
const plugin = hot.getPlugin('trimRows');
```

要修剪单行，请调用插件对象的 [`trimRow()`](@/api/trimRows.md#trimrow) 方法：

```js
plugin.trimRow(4);
```
要修剪多行，请将它们作为参数传递给 [`trimRows()`](@/api/trimRows.md#trimrow) 方法，或者将物理行索引数组传递给 [`trimRows()`]( @/api/trimRows.md#trimrows) 方法：

```js
plugin.trimRow(0, 4, 6);
// 或者
plugin.trimRows([0, 4, 6]);
```

要恢复修剪的行，请使用以下方法：

```js
plugin.untrimRow(4);
```
```js
plugin.untrimRow(0, 4, 6);
```
```js
plugin.untrimRows([0, 4, 6]);
```

要查看所做的更改，请调用`hot.render();`重新渲染表。

## 相关API参考

- Options:
  - [`trimRows`](@/api/options.md#trimrows)
- Hooks:
  - [`afterTrimRow`](@/api/hooks.md#aftertrimrow)
  - [`afterUntrimRow`](@/api/hooks.md#afteruntrimrow)
  - [`beforeTrimRow`](@/api/hooks.md#beforetrimrow)
  - [`beforeUntrimRow`](@/api/hooks.md#beforeuntrimrow)
- 插件:
  - [`TrimRows`](@/api/trimRows.md)
