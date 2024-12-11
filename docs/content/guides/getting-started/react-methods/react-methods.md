---
id: dceorl8m
title: 实例方法
metaTitle: Instance methods - JavaScript Data Grid | Handsontable
description: Reference a Handsontable instance from within a React component, to programmatically perform actions such as selecting cells.
permalink: /instance-methods
canonicalUrl: /instance-methods
tags:
  - referring
  - referencing
  - ref
  - instance
  - methods
react:
  metaTitle: Instance methods - React Data Grid | Handsontable
searchCategory: Guides
onlyFor: react
category: Getting started
---

# 实例方法

从 React 组件中引用 Handsontable 实例，以编程方式执行选择单元格等操作.

[[toc]]

## 使用 Handsontable 的 API

您可以通过编程方式更改 Handsontable 的内部状态，这超出了 props 所能实现的范围.为此，请调用与您的 HotTable 组件实例关联的相关 Handsontable 实例的 API 方法.

以下示例实现了 [`HotTable`](@/guides/getting-started/installation/installation.md#_4-use-the-hottable-component) 组件，展示了如何从包装器组件引用 Handsontable 实例.

::: example #example1 :react --js 1 --ts 2

@[code](@/content/guides/getting-started/react-methods/react/example1.jsx)
@[code](@/content/guides/getting-started/react-methods/react/example1.tsx)

:::
