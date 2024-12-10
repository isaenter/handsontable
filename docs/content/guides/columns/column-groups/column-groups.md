---
id: k4mb003v
title: 列组
metaTitle: Column groups - JavaScript Data Grid | Handsontable
description: Group your columns, using multiple levels of nested column headers, to better reflect the structure of your data.
permalink: /column-groups
canonicalUrl: /column-groups
tags:
  - nested headers
  - nestedHeaders
  - collapsing columns
  - colspan
react:
  id: 2ei1omu0
  metaTitle: Column groups - React Data Grid | Handsontable
searchCategory: Guides
category: Columns
---

# 列组

使用多层嵌套列标题对列进行分组，以更好地反映数据的结构。

[[toc]]

## 嵌套列标题

[`NestedHeaders`](@/api/nestedHeaders.md) 插件允许您使用 `colspan` 属性创建嵌套标头结构。

要创建跨多列的标题，应将其相应的配置数组元素作为带有`label`和`colspan`的对象提供
特性。 `label`属性定义标题的标签，而`colspan`属性定义标题应覆盖的列数。

### 配置

::: only-for javascript

```js
nestedHeaders: [
  ['A', { label: 'B', colspan: 8 }, 'C'],
  ['D', { label: 'E', colspan: 4 }, { label: 'F', colspan: 4 }, 'G'],
  ['H', { label: 'I', colspan: 2 }, { label: 'J', colspan: 2 }, { label: 'K', colspan: 2 }, { label: 'L', colspan: 2 }, 'M'],
  ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W'],
];
```

:::

::: only-for react

```jsx
nestedHeaders={[
  ['A', { label: 'B', colspan: 8 }, 'C'],
  ['D', { label: 'E', colspan: 4 }, { label: 'F', colspan: 4 }, 'G'],
  ['H', { label: 'I', colspan: 2 }, { label: 'J', colspan: 2 }, { label: 'K', colspan: 2 }, { label: 'L', colspan: 2 }, 'M'],
  ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W']
]}
```

:::

### 例子

::: only-for javascript

::: example #example1 --js 1 --ts 2

@[code](@/content/guides/columns/column-groups/javascript/example1.js)
@[code](@/content/guides/columns/column-groups/javascript/example1.ts)

:::

:::

::: only-for react

::: example #example1 :react --js 1 --ts 2

@[code](@/content/guides/columns/column-groups/react/example1.jsx)
@[code](@/content/guides/columns/column-groups/react/example1.tsx)

:::

:::

## 可折叠标题

[`CollapsibleColumns`](@/api/collapsibleColumns.md) 插件允许折叠/展开列及其标题。

该插件添加了带有按钮的多列标题。单击这些按钮将折叠或展开所有`子`标题，使第一个标题可见。

需要启用 [`NestedHeaders`](@/api/nestedHeaders.md) 插件才能正常工作。

### 配置

要启用可折叠列插件，请将 [`collapsibleColumns`](@/api/options.md#collapsiblecolumns) 配置选项设置为：

- `true` -这将启用_all_多列标题的功能，定义了`colspan`属性的每一列都将使用
  `展开/折叠`按钮
- 包含指定哪些标题应具有`展开/折叠`按钮的信息的对象数组，例如：
- 
::: only-for javascript

```js
collapsibleColumns: [
  { row: -4, col: 1, collapsible: true }, //将按钮添加到第 1 列的第 4 级标题 -从第一个表格行向上计数。
  { row: -3, col: 5, collapsible: true }, //将按钮添加到第 5 列的第 3 级标题 -从第一个表格行向上计数。
];
```

:::

::: only-for react

```jsx
collapsibleColumns={[
  { row: -4, col: 1, collapsible: true }, //将按钮添加到第 1 列的第 4 级标题 -从第一个表格行向上计数。
  { row: -3, col: 5, collapsible: true } //将按钮添加到第 5 列的第 3 级标题 -从第一个表格行向上计数。
]}
```

:::

### 例子

::: only-for javascript

::: example #example2 --js 1 --ts 2

@[code](@/content/guides/columns/column-groups/javascript/example2.js)
@[code](@/content/guides/columns/column-groups/javascript/example2.ts)

:::

:::

::: only-for react

::: example #example2 :react --js 1 --ts 2

@[code](@/content/guides/columns/column-groups/react/example2.jsx)
@[code](@/content/guides/columns/column-groups/react/example2.tsx)

:::

:::

## 已知的限制

- 列标题最多可以跨越 1000 列，因为 [HTML 表格规范](https://html.spec.whatwg.org/multipage/tables.html#dom-tdth-colspan) 设置了
  `colspan` 的限制为 `1000`。
- 嵌套列标题不能比其父元素宽(标题不能重叠`)。

## 相关键盘快捷键

| Windows              | macOS                | Action               |  Excel  | Sheets  |
| -------------------- | -------------------- | -------------------- | :-----: | :-----: |
| <kbd>**Enter**</kbd> | <kbd>**Enter**</kbd> | 折叠或展开选定的列组 | &cross; | &cross; |

## 相关API参考

- 配置选项:
  - [`collapsibleColumns`](@/api/options.md#collapsiblecolumns)
  - [`nestedHeaders`](@/api/options.md#nestedheaders)
- 核心方法:
  - [`isColumnModificationAllowed()`](@/api/core.md#iscolumnmodificationallowed)
- Hooks:
  - [`afterColumnCollapse`](@/api/hooks.md#aftercolumncollapse)
  - [`afterColumnExpand`](@/api/hooks.md#aftercolumnexpand)
  - [`beforeColumnCollapse`](@/api/hooks.md#beforecolumncollapse)
  - [`beforeColumnExpand`](@/api/hooks.md#beforecolumnexpand)
- 插件:
  - [`CollapsibleColumns`](@/api/collapsibleColumns.md)
  - [`NestedHeaders`](@/api/nestedHeaders.md)
