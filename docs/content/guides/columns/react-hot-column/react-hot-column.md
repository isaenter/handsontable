---
id: h5waqmlx
title: 列组件
metaTitle: Column component - React Data Grid | Handsontable
description: Configure the React data grid's columns, using the props of the "HotColumn" component. Pass your component as a custom cell editor or a custom cell renderer.
permalink: /hot-column
canonicalUrl: /hot-column
tags:
  - hotcolumn
searchCategory: Guides
onlyFor: react
category: Columns
---

# 列组件

使用`HotColumn`组件的属性配置网格的列.将您的组件作为自定义单元格编辑器或自定义单元格渲染器传递.

[[toc]]

## 声明列设置

要声明特定于列的设置,请将设置作为`HotColumn`属性传递,就像使用`HotTable`一样.

::: example #example1 :react --js 1 --ts 2

@[code](@/content/guides/columns/react-hot-column/react/example1.jsx)
@[code](@/content/guides/columns/react-hot-column/react/example1.tsx)

:::

## 对象数据源

当您使用`<HotColumn/>`的对象数据绑定时,您需要提供有关列的数据结构的精确信息.为此,请参考 `HotColumn` 的 `data` 属性中基于对象的数据属性,例如,`<HotColumn data='id' />`:

::: example #example3 :react --js 1 --ts 2

@[code](@/content/guides/columns/react-hot-column/react/example3.jsx)
@[code](@/content/guides/columns/react-hot-column/react/example3.tsx)

:::
