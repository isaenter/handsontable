---
id: 7js3d370
title: 保存数据
metaTitle: Saving data - JavaScript Data Grid | Handsontable
description: Saving data after each change to the data set, using Handsontable's API hooks. Preserve the table's state by saving data to the local storage.
permalink: /saving-data
canonicalUrl: /saving-data
tags:
  - load and save
  - server
  - ajax
react:
  id: rib1rhmf
  metaTitle: Saving data - React Data Grid | Handsontable
searchCategory: Guides
category: Getting started
---

# 保存数据

每次更改数据集后,使用 Handsontable 的 API 挂钩保存数据.通过将数据保存到本地存储来保留表的状态.

[[toc]]

## 使用回调保存更改

要跟踪数据网格中所做的更改,请使用 Handsontable 的 [`afterChange`](@/api/hooks.md#afterchange) 挂钩.

下面的示例使用`fetch`处理数据.请注意,这只是一个模型,实际上没有保存任何内容.服务器端部分需要你自己实现.

::: only-for javascript

::: example #example1 --html 1 --js 2 --ts 3

@[code](@/content/guides/getting-started/saving-data/javascript/example1.html)
@[code](@/content/guides/getting-started/saving-data/javascript/example1.js)
@[code](@/content/guides/getting-started/saving-data/javascript/example1.ts)

:::

:::

::: only-for react

::: example #example1 :react --js 1 --ts 2

@[code](@/content/guides/getting-started/saving-data/react/example1.jsx)
@[code](@/content/guides/getting-started/saving-data/react/example1.tsx)

:::

:::

## 将数据保存到本地

您可以将任何类型的数据保存在本地存储中,以在页面重新加载后保留表状态. [`persistentState`](@/api/options.md#persistentstate) 选项必须设置为 `true` 才能启用数据存储机制.您可以在 Handsontable 初始化期间或使用 [`updateSettings()`](@/api/core.md#updatesettings) 方法来设置它.

当在一页上运行 Handsontable 的多个实例时,持久状态存储特别有用,因为它允许每个实例的数据分离.

当启用 [`persistentState`](@/api/options.md#persistentstate) 选项时,[`PersistentState`](@/api/persistentState.md) 插件会公开下面列出的钩子:

- [`persistentStateSave`](@/api/hooks.md#persistentstatesave)
- [`persistentStateLoad`](@/api/hooks.md#persistentstateload)
- [`persistentStateReset`](@/api/hooks.md#persistentstatereset)

## [`PersistentState`](@/api/persistentState.md) 与 `localStorage`

使用 [`PersistentState`](@/api/persistentState.md) 插件挂钩而不是常规的 `localStorage` API 的主要好处是,它可以确保多个 Handsontable 实例存储的数据分离.例如,如果一页上有两个或多个 Handsontable 实例,则第二个实例将无法访问一个实例保存的数据.这两个实例可以在同一密钥下存储数据,并且不会覆盖任何数据.

为了使数据分离正常工作,请确保 Handsontable 的每个实例都有一个唯一的`id`.

## 相关API参考

- 配置选项:
  - [`persistentState`](@/api/options.md#persistentstate)
- 核心方法:
  - [`updateSettings()`](@/api/core.md#updatesettings)
- Hooks:
  - [`afterCellMetaReset`](@/api/hooks.md#aftercellmetareset)
  - [`afterChange`](@/api/hooks.md#afterchange)
  - [`persistentStateLoad`](@/api/hooks.md#persistentstateload)
  - [`persistentStateReset`](@/api/hooks.md#persistentstatereset)
  - [`persistentStateSave`](@/api/hooks.md#persistentstatesave)
- 插件:
  - [`PersistentState`](@/api/persistentState.md)
