---
id: cjib1mhw
title: 自动完成单元格类型
metaTitle: Autocomplete cell type - JavaScript Data Grid | Handsontable
description: Collect user input with a list of choices, by using the autocomplete cell type.
permalink: /autocomplete-cell-type
canonicalUrl: /autocomplete-cell-type
react:
  id: vnnvp396
  metaTitle: Autocomplete cell type - React Data Grid | Handsontable
searchCategory: Guides
category: Cell types
---

# 自动完成单元格类型

使用自动完成单元格类型收集用户输入的选项列表。

[[toc]]

## 概述

您可以通过三种不同的方式完成自动完成单元格类型：

- 灵活的模式
- 严格模式
- 使用 Ajax 的严格模式

## 自动完成灵活模式

此示例在默认灵活模式下使用`自动完成`功能。在此模式下，用户可以在键入时选择建议选项之一，或输入建议中未包含的自定义值。

::: only-for javascript

::: example #example1 --js 1 --css 2 --ts 3

@[code](@/content/guides/cell-types/autocomplete-cell-type/javascript/example1.js)
@[code](@/content/guides/cell-types/autocomplete-cell-type/javascript/example1.css)
@[code](@/content/guides/cell-types/autocomplete-cell-type/javascript/example1.ts)

:::

:::

::: only-for react

::: example #example1 :react --js 1 --css 2 --ts 3

@[code](@/content/guides/cell-types/autocomplete-cell-type/react/example1.jsx)
@[code](@/content/guides/cell-types/autocomplete-cell-type/react/example1.css)
@[code](@/content/guides/cell-types/autocomplete-cell-type/react/example1.tsx)

:::

:::

## 自动完成严格模式

这与上面的示例相同，不同之处在于`自动完成`现在在严格模式下运行。在此模式下，自动完成单元格将仅接受源数组中定义的值。鼠标和键盘绑定与`Handsontable`单元类型相同，但有以下差异：

-如果至少有一个选项可见，则总有一个选项位于 HOT-in-HOT 中
-当选择第一行时，按 <kbd>**向上箭头**</kbd> 不会取消选择 HOT-in-HOT。相反，它的行为类似于 <kbd>**Enter**</kbd> 键，但向上移动主 HOT 中的选择

在严格模式下， [`allowInvalid`](@/api/options.md#allowinvalid) 选项决定手动用户输入情况下的行为：

- [`allowInvalid: true`](@/api/options.md#allowinvalid) 可选 -允许手动输入`source`中不存在的值，字段背景以红色突出显示，选择前进到下一个单元格
- [`allowInvalid: false`](@/api/options.md#allowinvalid) -不允许手动输入`source`中不存在的值，<kbd>**Enter**</kbd > 键被忽略，编辑器字段保持打开状态

::: only-for javascript

::: example #example2 --js 1 --css 2 --ts 3

@[code](@/content/guides/cell-types/autocomplete-cell-type/javascript/example2.js)
@[code](@/content/guides/cell-types/autocomplete-cell-type/javascript/example2.css)
@[code](@/content/guides/cell-types/autocomplete-cell-type/javascript/example2.ts)

:::

:::

::: only-for react

::: example #example2 :react --js 1 --css 2 --ts 3

@[code](@/content/guides/cell-types/autocomplete-cell-type/react/example2.jsx)
@[code](@/content/guides/cell-types/autocomplete-cell-type/react/example2.css)
@[code](@/content/guides/cell-types/autocomplete-cell-type/react/example2.tsx)

:::

:::

## 自动完成严格模式（Ajax）

自动完成功能还可以与 Ajax 数据源一起使用。在下面的示例中，`汽车`列的建议是从服务器加载的。要从远程*异步*源加载数据，请将函数分配给`source`属性。该函数应执行服务器端请求并在结果可用时调用回调函数。

::: only-for javascript

::: example #example3 --js 1 --css 2 --ts 3

@[code](@/content/guides/cell-types/autocomplete-cell-type/javascript/example3.js)
@[code](@/content/guides/cell-types/autocomplete-cell-type/javascript/example3.css)
@[code](@/content/guides/cell-types/autocomplete-cell-type/javascript/example3.ts)

:::

:::

::: only-for react

::: example #example3 :react --js 1 --css 2 --ts 3

@[code](@/content/guides/cell-types/autocomplete-cell-type/react/example3.jsx)
@[code](@/content/guides/cell-types/autocomplete-cell-type/react/example3.css)
@[code](@/content/guides/cell-types/autocomplete-cell-type/react/example3.tsx)

:::

:::

## 相关文章

### 相关指南

- [单元格类型](@/guides/cell-types/cell-type/cell-type.md)
- [下拉单元格类型](@/guides/cell-types/dropdown-cell-type/dropdown-cell-type.md)
- [选择单元格类型](@/guides/cell-types/select-cell-type/select-cell-type.md)

### 相关API参考

- 配置选项:
  - [`allowHtml`](@/api/options.md#allowhtml)
  - [`filteringCaseSensitive`](@/api/options.md#filteringcasesensitive)
  - [`sortByRelevance`](@/api/options.md#sortbyrelevance)
  - [`source`](@/api/options.md#source)
  - [`strict`](@/api/options.md#strict)
  - [`trimDropdown`](@/api/options.md#trimdropdown)
  - [`type`](@/api/options.md#type)
  - [`visibleRows`](@/api/options.md#visiblerows)
- 核心方法:
  - [`getCellMeta()`](@/api/core.md#getcellmeta)
  - [`getCellMetaAtRow()`](@/api/core.md#getcellmetaatrow)
  - [`getCellsMeta()`](@/api/core.md#getcellsmeta)
  - [`getDataType()`](@/api/core.md#getdatatype)
  - [`setCellMeta()`](@/api/core.md#setcellmeta)
  - [`setCellMetaObject()`](@/api/core.md#setcellmetaobject)
  - [`removeCellMeta()`](@/api/core.md#removecellmeta)
- Hooks:
  - [`afterGetCellMeta`](@/api/hooks.md#aftergetcellmeta)
  - [`afterSetCellMeta`](@/api/hooks.md#aftersetcellmeta)
  - [`beforeGetCellMeta`](@/api/hooks.md#beforegetcellmeta)
  - [`beforeSetCellMeta`](@/api/hooks.md#beforesetcellmeta)
