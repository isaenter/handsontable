---
id: ivtc0o9b
title: 嵌套行
metaTitle: Row parent-child - JavaScript Data Grid | Handsontable
description:
  Reflect the parent-child relationship of your data, using Handsontable's interactive UI elements such as expand and collapse buttons or an extended context
  menu.
permalink: /row-parent-child
canonicalUrl: /row-parent-child
tags:
  - nested rows
  - nestedRows
  - parent child
  - tree grid
  - grouping rows
  - master detail
react:
  id: vo8uukt2
  metaTitle: Row parent-child - React Data Grid | Handsontable
searchCategory: Guides
category: Rows
---

# 嵌套行

使用 [`NestedRows`](@/api/nestedRows.md) 插件的交互式 UI 元素（例如展开和折叠）反映数据的父子关系
按钮或扩展上下文菜单。

[[toc]]

## 快速设置

要启用 [`NestedRows`](@/api/nestedRows.md) 插件，请将 [`nestedRows`](@/api/options.md#nestedrows) 选项设置为 `true`。

::: only-for javascript

```js
const hot = new Handsontable(container, {
  nestedRows: true,
});
```

:::

::: only-for react

```jsx
<HotTable nestedRows={true} />
```

:::

请注意，使用插件提供的所有功能需要启用行标题和 Handsontable 上下文菜单。要做这组
[`rowHeaders`](@/api/options.md#rowheaders) 和 [`contextMenu`](@/api/options.md#contextmenu) 为 `true`。 _collapse_ /_expand_ 按钮位于
行标题和行修改选项_添加行_、_插入子项_等位于上下文菜单中。

## 准备数据源

数据源必须具有与 _Nested Rows_ 插件一起使用的特定结构。

该插件要求数据源是对象数组。数组中的每个对象代表一个 _0-level_ 条目。 _0-level_ 指的是一个条目，其中
不是任何其他条目的子项。如果一个条目有任何子条目，则需要将它们再次声明为_对象数组_。要将它们分配到一行，请创建一个
父元素中的`__children`属性。

这是一个例子：

::: only-for javascript

::: example #example1 --js 1 --ts 2

@[code](@/content/guides/rows/row-parent-child/javascript/example1.js)
@[code](@/content/guides/rows/row-parent-child/javascript/example1.ts)

:::

:::

::: only-for react

::: example #example1 :react --js 1 --ts 2

@[code](@/content/guides/rows/row-parent-child/react/example1.jsx)
@[code](@/content/guides/rows/row-parent-child/react/example1.tsx)

:::

:::

在上面的示例中，我们创建了一个由 2016 年`摇滚`类型格莱美提名者组成的数据对象。每个_0-level_条目声明一个类别，而
他们的孩子声明被提名者 -在`__children`属性下分配。

请注意，数组中的第一个 0 级对象需要定义所有列才能正确显示表格。它们可以声明为`null`或空的
字符串`''`，但需要定义它们。对于其他对象来说，这是可选的。

## 用户界面

_Nested Rows_ 插件的用户界面位于行标题和 Handsontable 的上下文菜单中。

### 行标题

每个 _parent_ 行标题都包含一个`+`/`-`按钮。它用于折叠或展开其子行。

子行标题有更大的缩进，使用户能够清楚地识别子元素和父元素。

### 上下文菜单

上下文菜单已扩展为一些与嵌套行相关的选项，例如：

- 插入子行
- 与父母分离

修改了`在上方插入行`和`在下方插入行`选项，以便与嵌套数据结构正常工作。

## 已知限制

当您使用父子行结构时，不支持以下 Handsontable 功能：

- [数据源作为数组的数组](@/guides/getting-started/binding-to-data/binding-to-data.md#array-of-arrays)
- [列过滤器](@/guides/columns/column-filter/column-filter.md)
- [行排序](@/guides/rows/rows-sorting/rows-sorting.md)

## 相关键盘快捷键

| Windows              | macOS                | Action         |  Excel  | Sheets  |
| -------------------- | -------------------- | -------------- | :-----: | :-----: |
| <kbd>**Enter**</kbd> | <kbd>**Enter**</kbd> | 折叠或展开行组 | &cross; | &cross; |

## 相关文章

### 相关指南

<div class="boxes-list gray">

- [行标题](@/guides/rows/row-header/row-header.md)

</div>

### 相关API参考

- 配置选项:
  - [`bindRowsWithHeaders`](@/api/options.md#bindrowswithheaders)
  - [`contextMenu`](@/api/options.md#contextmenu)
  - [`nestedRows`](@/api/options.md#nestedrows)
  - [`rowHeaders`](@/api/options.md#rowheaders)
- 核心方法:
  - [`getRowHeader()`](@/api/core.md#getrowheader)
- Hooks:
  - [`afterAddChild`](@/api/hooks.md#afteraddchild)
  - [`afterDetachChild`](@/api/hooks.md#afterdetachchild)
  - [`beforeAddChild`](@/api/hooks.md#beforeaddchild)
  - [`beforeDetachChild`](@/api/hooks.md#beforedetachchild)
- 插件:
  - [`BindRowsWithHeaders`](@/api/bindRowsWithHeaders.md)
  - [`ContextMenu`](@/api/contextMenu.md)
  - [`NestedRows`](@/api/nestedRows.md)
