---
id: chduupye
title: 文本对齐
metaTitle: Text alignment - JavaScript Data Grid | Handsontable
description: "Align values within cells: horizontally (to the right, left, center, or by justifying them), and vertically (to the top, middle, or bottom of the cell)."
permalink: /text-alignment
canonicalUrl: /text-alignment
react:
  id: 959g5cbf
  metaTitle: Text alignment - React Data Grid | Handsontable
searchCategory: Guides
category: Cell features
---

# 文本对齐

单元格内的值对齐：水平对齐（向右、向左、居中或通过对齐）和垂直对齐（向单元格的顶部、中间或底部）。

[[toc]]

## 水平和垂直对齐

要使用全局预定义的水平和垂直对齐方式初始化 Handsontable，请在 [`className`](@/api/options.md#classname) 选项中提供对齐详细信息，例如：

::: only-for javascript

```js
className: 'htCenter'
```

:::

::: only-for react

```jsx
className="htCenter"
```

:::

您还可以通过设置 [`cells`](@/api/options.md#cells) 选项来单独配置单元格。有关示例，请参阅下面的代码示例。

可用的类名：

- 水平：`htLeft`、`htCenter`、`htRight`、`htJustify`、
- 垂直：`htTop`、`htMiddle`、`htBottom`。

您可以使用 [`afterSetCellMeta`](@/api/hooks.md#aftersetcellmeta) 挂钩跟踪对齐更改。

## 基本示例
以下代码示例将网格配置为使用`htCenter`，并将各个单元格配置为使用不同的对齐方式。

::: only-for javascript

::: example #example1 --js 1 --ts 2

@[code](@/content/guides/cell-features/text-alignment/javascript/example1.js)
@[code](@/content/guides/cell-features/text-alignment/javascript/example1.ts)

:::

:::

::: only-for react

::: example #example1 :react --js 1 --ts 2

@[code](@/content/guides/cell-features/text-alignment/react/example1.jsx)
@[code](@/content/guides/cell-features/text-alignment/react/example1.tsx)

:::

:::

## 相关API参考

- 配置选项:
  - [`className`](@/api/options.md#classname)
- Hooks:
  - [`afterSetCellMeta`](@/api/hooks.md#aftersetcellmeta)
  - [`beforeCellAlignment`](@/api/hooks.md#beforecellalignment)
