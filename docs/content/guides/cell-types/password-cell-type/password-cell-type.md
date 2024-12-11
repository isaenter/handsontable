---
id: a7a5mkrw
title: 密码单元格类型
metaTitle: Password cell type - JavaScript Data Grid | Handsontable
description: Use the password cell type to mask confidential values by rendering entered characters as symbols.
permalink: /password-cell-type
canonicalUrl: /password-cell-type
react:
  id: gydne13d
  metaTitle: Password cell type - React Data Grid | Handsontable
searchCategory: Guides
category: Cell types
---

# 密码单元格类型

使用密码单元格类型通过将输入的字符呈现为符号来屏蔽机密值.

[[toc]]

## 概述

密码单元格类型的行为类似于文本单元格，唯一的区别是它在单元格渲染器中使用星号掩盖其值. `<input type="password">` 字段用于单元格编辑器.数据以纯文本形式存储在数据源中.

::: only-for javascript

::: example #example1 --js 1 --ts 2

@[code](@/content/guides/cell-types/password-cell-type/javascript/example1.js)
@[code](@/content/guides/cell-types/password-cell-type/javascript/example1.ts)

:::

:::

::: only-for react

::: example #example1 :react --js 1 --ts 2

@[code](@/content/guides/cell-types/password-cell-type/react/example1.jsx)
@[code](@/content/guides/cell-types/password-cell-type/react/example1.tsx)

:::

:::

## 固定哈希长度

默认情况下，每个哈希的长度等于其对应值的长度.使用选项`hashLength`设置固定的哈希长度.

::: only-for javascript

::: example #example2 --js 1 --ts 2

@[code](@/content/guides/cell-types/password-cell-type/javascript/example2.js)
@[code](@/content/guides/cell-types/password-cell-type/javascript/example2.ts)

:::

:::

::: only-for react

::: example #example2 :react --js 1 --ts 2

@[code](@/content/guides/cell-types/password-cell-type/react/example2.jsx)
@[code](@/content/guides/cell-types/password-cell-type/react/example2.tsx)

:::

:::

## 自定义哈希符号

默认情况下，每个哈希值都由星号`*`组成.使用选项`hashSymbol`设置自定义哈希符号.您可以使用任何字符、实体，甚至 HTML.请注意，由于浏览器限制，您无法更改输入字段使用的符号.

::: only-for javascript

::: example #example3 --js 1 --ts 2

@[code](@/content/guides/cell-types/password-cell-type/javascript/example3.js)
@[code](@/content/guides/cell-types/password-cell-type/javascript/example3.ts)

:::

:::

::: only-for react

::: example #example3 :react --js 1 --ts 2

@[code](@/content/guides/cell-types/password-cell-type/react/example3.jsx)
@[code](@/content/guides/cell-types/password-cell-type/react/example3.tsx)

:::

:::

## 相关文章

### 相关指南

- [单元格类型](@/guides/cell-types/cell-type/cell-type.md)

### 相关API参考

- 配置选项:
  - [`type`](@/api/options.md#type)
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
