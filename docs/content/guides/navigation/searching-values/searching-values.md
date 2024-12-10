---
id: ct5f32ig
title: 搜索值
metaTitle: Searching values - JavaScript Data Grid | Handsontable
description: Search data across Handsontable, using built-in API methods and implementing your own search UI.
permalink: /searching-values
canonicalUrl: /searching-values
tags:
  - find values
  - highlight values
  - search values
react:
  id: 48lhnrbd
  metaTitle: Searching values - React Data Grid | Handsontable
searchCategory: Guides
category: Navigation
---

# 搜索值

使用 [`Search`](@/api/search.md) 插件的内置 API 方法在 Handsontable 中搜索数据，并实现您自己的搜索 UI。

[[toc]]

## 概述

::: only-for react

::: tip

要使用 Handsontable API，您需要访问 Handsontable 实例。您可以通过利用对`HotTable`组件的引用并读取其`hotInstance`属性来做到这一点。

有关更多信息，请参阅[实例方法](@/guides/getting-started/react-methods/react-methods.md)页面。

:::

:::

[`Search`](@/api/search.md) 插件提供了一个简单的 API 来在 Handsontable 中搜索数据。

您应该首先通过将 [`search`](@/api/options.md#search) 选项设置为 `true` 来启用该插件。启用后，[`Search`](@/api/search.md) 插件会公开一个新方法 [`query(queryStr)`](@/api/search.md#query)，其中 [`queryStr`]( @/api/search.md#query) 是要在表中查找的字符串。默认情况下，搜索不区分大小写。

[`query(queryStr, [callback], [queryMethod])`](@/api/search.md#query) 方法做了两件事。首先，它返回一个搜索结果数组。每个元素都是一个包含 3 个属性的对象：

- `row` – 找到值的行的索引
- `col` – 找到值的列的索引
- `data` – 已找到的值

[`query()`](@/api/search.md#query) 方法执行的第二件事是为每个单元格设置 `isSearchResult` 属性。如果某个单元格位于搜索结果中，则其`isSearchResult`设置为`true`，否则该属性设置为`false`。

您现在所要做的就是在搜索输入侦听器中使用 [`query()`](@/api/search.md#query) 方法，然后就完成了。

## 搜索结果类

默认情况下，[Search`](@/api/search.md) 插件将 `htSearchResult` 类添加到 `isSearchResult` 属性为 `true` 的每个单元格。您可以使用 [`searchResultClass`](@/api/options.md#search) 配置选项更改此类。

要更改结果类，请使用 [`var searchPlugin = hot.getPlugin('search'); searchPlugin.setSearchResultClass(className);`](@/api/search.md#setsearchresultclass) 方法。

## 自定义`queryMethod`

[`queryMethod()`](@/api/search.md#query) 函数负责确定 `queryStr` 是否与存储在单元格中的值匹配。它需要 2 个参数：`queryStr`和`cellData`。第一个是传递给 [`query()`](@/api/search.md#query) 方法的字符串。第二个是 [`getDataAtCell()`](@/api/core.md#getdataatcell) 返回的值。如果存在匹配，则 [`queryMethod()`](@/api/options.md#search) 函数应返回 `true`。

默认的 [`queryMethod`](@/api/options.md#search) 函数非常简单：

```js
const DEFAULT_QUERY_METHOD = function(query, value) {
  if (isUndefined(query) || query === null || !query.toLowerCase || query.length === 0) {
    return false;
  }
  if (isUndefined(value) || value === null) {
    return false;
  }

  return value.toString().toLowerCase().indexOf(query.toLowerCase()) !== -1;
};
```

如果要更改 [`queryMethod`](@/api/search.md#query)，请使用 [`queryMethod`](@/api/options.md#search) 选项。您还可以将 [`queryMethod`](@/api/options.md#search) 作为 [`query()`](@/api/search.md#query) 方法的第三个参数传递。要更改 [`queryMethod`](@/api/options.md#search)，请使用 [`var searchPlugin = hot.getPlugin('search'); searchPlugin.setQueryMethod(myNewQueryMethod);`](@/api/search.md#setquerymethod).

## 自定义结果回调

调用 [`queryMethod`](@/api/options.md#search) 后，[`Search`](@/api/search.md) 插件调用 `callback(instance, rowIndex, colIndex, cellData, testResult)`每个细胞。

就像 [`queryMethod`](@/api/options.md#search) 一样，您可以使用 [`var searchPlugin = hot.getPlugin('search'); 覆盖此回调。 searchPlugin.setCallback(myNewCallbackFunction);`](@/api/search.md#setcallback)，或将回调作为 [`query()`](@/api/search.md#query) 方法的第二个参数传递。

默认的`callback`负责设置`isSearchResult`属性。

```js
const DEFAULT_CALLBACK = function(instance, row, col, data, testResult) {
  instance.getCellMeta(row, col).isSearchResult = testResult;
};
```

## 最简单的用例

下面的例子：
- 启用 [`Search`](@/api/search.md) 插件（通过将 [`search`](@/api/options.md#search) 配置选项设置为 `true`）
- 添加搜索输入监听器
- 在搜索输入侦听器中，获取 [`Search`](@/api/search.md) 插件的实例
- 使用 [`Search`](@/api/search.md) 插件的 [`query()`](@/api/search.md#query) 方法
  
::: only-for javascript

::: example #example1 --html 1 --js 2 --ts 3

@[code](@/content/guides/navigation/searching-values/javascript/example1.html)
@[code](@/content/guides/navigation/searching-values/javascript/example1.js)
@[code](@/content/guides/navigation/searching-values/javascript/example1.ts)

:::

:::

::: only-for react

::: example #example1 :react --js 1 --ts 2

@[code](@/content/guides/navigation/searching-values/react/example1.jsx)
@[code](@/content/guides/navigation/searching-values/react/example1.tsx)

:::

:::

## 自定义搜索结果类

您可以使用 [`Search`](@/api/search.md) 插件的 [`searchResultClass`](@/api/options.md#search) 选项，使用自定义 CSS 类来设置搜索结果的样式。

下面的示例以粗体红色突出显示其搜索结果。为此，它：
- 定义一个名为`my-custom-search-result-class`的自定义 CSS 类
- 启用 [`Search`](@/api/search.md) 插件（通过将 [`search`](@/api/options.md#search) 配置选项设置为对象）
- 将 [`Search`](@/api/search.md) 插件的 [`searchResultClass`](@/api/options.md#search) 选项设置为 `'my-custom-search-result-class'`

::: only-for javascript

::: example #example2 --css 1 --html 2 --js 3 --ts 4

@[code](@/content/guides/navigation/searching-values/javascript/example2.css)
@[code](@/content/guides/navigation/searching-values/javascript/example2.html)
@[code](@/content/guides/navigation/searching-values/javascript/example2.js)
@[code](@/content/guides/navigation/searching-values/javascript/example2.ts)

:::

:::

::: only-for react

::: example #example2 :react --css 1 --js 2 --ts 3

@[code](@/content/guides/navigation/searching-values/react/example2.css)
@[code](@/content/guides/navigation/searching-values/react/example2.jsx)
@[code](@/content/guides/navigation/searching-values/react/example2.tsx)

:::

:::

## 自定义查询方法

您可以使用 [`Search`](@/api/search.md) 插件的 [`queryMethod`](@/api/search.md#query) 添加自定义查询方法。

下面的示例仅搜索精确的搜索查询匹配。为此，它：
- 定义一个名为`onlyExactMatch`的自定义查询方法
- 启用 [`Search`](@/api/search.md) 插件（通过将 [`search`](@/api/options.md#search) 配置选项设置为对象）
- 将 [`Search`](@/api/search.md) 插件的 [`queryMethod`](@/api/options.md#search) 选项设置为 `onlyExactMatch`

::: only-for javascript

::: example #example3 --html 1 --js 2 --ts 3

@[code](@/content/guides/navigation/searching-values/javascript/example3.html)
@[code](@/content/guides/navigation/searching-values/javascript/example3.js)
@[code](@/content/guides/navigation/searching-values/javascript/example3.ts)

:::

:::

::: only-for react

::: example #example3 :react --js 1 --ts 2

@[code](@/content/guides/navigation/searching-values/react/example3.jsx)
@[code](@/content/guides/navigation/searching-values/react/example3.tsx)

:::

:::

## 自定义回调

您可以使用 [`Search`](@/api/search.md) 插件的 [`callback`](@/api/search.md) 选项添加自定义回调函数。

下面的示例显示匹配搜索结果的数量。为此，它：
- 定义一个名为`searchResultCounter`的自定义回调函数
- 启用 [`Search`](@/api/search.md) 插件（通过将 [`search`](@/api/options.md#search) 配置选项设置为对象）
- 将 [`Search`](@/api/search.md) 插件的 [`callback`](@/api/search.md) 选项设置为 `searchResultCounter`

::: only-for javascript

::: example #example4 --html 1 --js 2 --ts 3

@[code](@/content/guides/navigation/searching-values/javascript/example4.html)
@[code](@/content/guides/navigation/searching-values/javascript/example4.js)
@[code](@/content/guides/navigation/searching-values/javascript/example4.ts)

:::

:::

::: only-for react

::: example #example4 :react --js 1 --ts 2

@[code](@/content/guides/navigation/searching-values/react/example4.jsx)
@[code](@/content/guides/navigation/searching-values/react/example4.tsx)

:::

:::

## 相关API参考

- 配置选项:
  - [`search`](@/api/options.md#search)
- 插件:
  - [`Search`](@/api/search.md)
