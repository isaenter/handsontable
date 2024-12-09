---
id: k5920uow
title: 合并单元格
metaTitle: Merge cells - JavaScript Data Grid | Handsontable
description: Merge adjacent cells, using the "Ctrl + M" shortcut or the context menu. Control merged cells, using Handsontable's API.
permalink: /merge-cells
canonicalUrl: /merge-cells
react:
  id: ulndkavi
  metaTitle: Merge cells - React Data Grid | Handsontable
searchCategory: Guides
category: Cell features
---

# 合并单元格

使用 <kbd>**Ctrl**</kbd>+<kbd>**M**</kbd> 快捷方式或上下文菜单合并相邻单元格。使用 Handsontable 的 API 控制合并的单元格。

[[toc]]

## 概述

通过合并，您可以将两个或多个相邻单元格合并为跨多行或多列的单个单元格。

Handsontable 合并单元格的方式与 Microsoft Excel 相同：仅保留所选范围的左上角值并清除其他值。

单元格合并发生在 Handsontable 的可视层上，不会影响您的源数据结构。

## 如何合并单元格

要启用合并单元格功能，请将 [`mergeCells`](@/api/options.md#mergecells) 选项设置为 `true` 或数组。
要使用预定义的合并单元格初始化 Handsontable，请以数组的形式提供合并单元格的详细信息：

::: only-for javascript

`mergeCells: [{ row: 1, col: 1, rowspan: 2, colspan: 2 }]`

:::

::: only-for react

`mergeCells={[{ row: 1, col: 1, rowspan: 2, colspan: 2 }]}`

:::

::: only-for javascript

::: example #example1 --js 1 --ts 2

@[code](@/content/guides/cell-features/merge-cells/javascript/example1.js)
@[code](@/content/guides/cell-features/merge-cells/javascript/example1.ts)

:::

:::

::: only-for react

::: example #example1 :react --js 1 --ts 2

@[code](@/content/guides/cell-features/merge-cells/react/example1.jsx)
@[code](@/content/guides/cell-features/merge-cells/react/example1.tsx)

:::

:::

## 优化宽/高合并单元格的渲染

当单元格跨越数千行或数千列时，与未合并的单元格相比，滚动可能会感觉更慢。为了提高性能，请考虑启用合并单元的专用虚拟化功能，该功能默认情况下处于禁用状态。

要启用合并单元虚拟化模式，请启用`virtualized`选项：

::: only-for javascript

```js
mergeCells: {
  virtualized: true,
  cells: [{ row: 1, col: 1, rowspan: 200, colspan: 2 }]
}
```

:::

::: only-for react

```jsx
mergeCells={{
  virtualized: true,
  cells: [{ row: 1, col: 1, rowspan: 200, colspan: 2 }]
}}
```

:::

下面的示例使用虚拟化合并单元。还建议增加渲染行/列的缓冲区以最大程度地减少闪烁效果。

::: only-for javascript

::: example #example2 --js 1 --ts 2

@[code](@/content/guides/cell-features/merge-cells/javascript/example2.js)
@[code](@/content/guides/cell-features/merge-cells/javascript/example2.ts)

:::

:::

::: only-for react

::: example #example2 :react --js 1 --ts 2

@[code](@/content/guides/cell-features/merge-cells/react/example2.jsx)
@[code](@/content/guides/cell-features/merge-cells/react/example2.tsx)

:::

:::

## 相关键盘快捷键

| Windows                              | macOS                                | Action                     |  Excel  | Sheets  |
| ------------------------------------ | ------------------------------------ | -------------------------- | :-----: | :-----: |
| <kbd>**Ctrl**</kbd>+<kbd>**M**</kbd> | <kbd>**Ctrl**</kbd>+<kbd>**M**</kbd> | 合并或取消合并选定的单元格 | &cross; | &cross; |

## 相关API参考

- 配置选项:
  - [`mergeCells`](@/api/options.md#mergecells)
  - [`viewportColumnRenderingThreshold`](@/api/options.md#viewportcolumnrenderingthreshold)
  - [`viewportRowRenderingThreshold`](@/api/options.md#viewportrowrenderingthreshold)
  - [`viewportColumnRenderingOffset`](@/api/options.md#viewportcolumnrenderingoffset)
  - [`viewportRowRenderingOffset`](@/api/options.md#viewportrowrenderingoffset)
- Hooks:
  - [`afterMergeCells`](@/api/hooks.md#aftermergecells)
  - [`afterUnmergeCells`](@/api/hooks.md#afterunmergecells)
  - [`beforeMergeCells`](@/api/hooks.md#beforemergecells)
  - [`beforeUnmergeCells`](@/api/hooks.md#beforeunmergecells)
- 插件:
  - [`MergeCells`](@/api/mergeCells.md)
