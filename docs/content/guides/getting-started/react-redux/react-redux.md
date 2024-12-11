---
id: kbk0pm8t
title: 与 Redux 集成
metaTitle: Integration with Redux - JavaScript Data Grid | Handsontable
description: Maintain the data and configuration options of your grid by using the Redux state container.
permalink: /redux
canonicalUrl: /redux
react:
  metaTitle: Integration with Redux - React Data Grid | Handsontable
  tags:
    - state manager
    - react redux
    - connect component
    - immutable data
    - redux
    - state management
searchCategory: Guides
onlyFor: react
category: Getting started
---

# 与 Redux 集成

使用 Redux 状态容器维护网格的数据和配置选项.

[[toc]]

## 与 Redux 集成

::: tip

在使用任何状态管理库之前,请确保您了解 Handsontable 如何处理数据:请参阅[绑定到数据](@/guides/getting-started/binding-to-data/binding-to-data.md#understand-binding-作为参考)页面.

:::

以下示例使用[`readOnly`](@/api/options.md#readonly)切换开关和 Redux 状态管理器实现 `@handsontable/react-wrapper` 组件.

## 简单的例子

::: example #example1 :react-redux --js 1 --ts 2

@[code](@/content/guides/getting-started/react-redux/react/example1.jsx)
@[code](@/content/guides/getting-started/react-redux/react/example1.tsx)

:::

## 高级示例

这个例子显示:
- [自定义编辑器](@/guides/cell-functions/cell-editor/cell-editor.md#component-based-editors) 组件(使用外部依赖项`HexColorPicker`构建).该组件既充当编辑器又充当渲染器.
- 一个[自定义渲染器](@/guides/cell-functions/cell-renderer/cell-renderer.md#declare-a-custom-renderer-as-a-component)组件,使用外部依赖项(`StarRatingComponent`)构建.

编辑器组件通过 Redux(以及`react-redux`的`connect()`方法)传递信息来更改渲染器组件的行为.

::: example #example6 :react-advanced --js 1 --ts 2

@[code](@/content/guides/getting-started/react-redux/react/example6.jsx)
@[code](@/content/guides/getting-started/react-redux/react/example6.tsx)

:::
