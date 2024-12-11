---
id: k41dcpud
title: 禁用单元格
metaTitle: Disabled cells - JavaScript Data Grid | Handsontable
description: Make specified cells read-only to protect them from unwanted changes but still allow navigation and copying of data.
permalink: /disabled-cells
canonicalUrl: /disabled-cells
tags:
  - read-only
  - readonly
  - non-editable
  - noneditable
  - locked
react:
  id: zhv7fs29
  metaTitle: Disabled cells - React Data Grid | Handsontable
searchCategory: Guides
category: Cell features
---

# 禁用单元格

将指定的单元格设置为只读以保护它们免受不必要的更改,但仍允许导航和复制数据.

[[toc]]

## 概述

禁用单元格会使该单元格变为只读或不可编辑.两者都有相似的结果,但有以下区别:

| 只读单元格<br>`readOnly: true`                                    | 不可编辑单元格<br>`editor: false`                                             |
| ----------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| 有一个额外的 CSS 类 (`htDimmed`)                                  | 没有额外的 CSS 类                                                             |
| 复制有效,粘贴无效                                                 | 复制粘贴有效                                                                  |
| 拖动填充不起作用                                                  | 拖动填充有效                                                                  |
| 无法更改 [`populateFromArray()`](@/api/core.md#populatefromarray) | 可以通过以下方式更改 [`populateFromArray()`](@/api/core.md#populatefromarray) |

## 只读网格

您可以通过将 [`readOnly`](@/api/options.md#readonly) 设置为 `true` 作为 [顶级网格选项](@/guides/getting-started/configuration-options/configuration-options.md#set-grid-options).

::: only-for javascript

::: example #exampleReadOnlyGrid --js 1 --ts 2

@[code](@/content/guides/cell-features/disabled-cells/javascript/exampleReadOnlyGrid.js)
@[code](@/content/guides/cell-features/disabled-cells/javascript/exampleReadOnlyGrid.ts)

:::

:::

::: only-for react

::: example #exampleReadOnlyGrid :react --js 1 --ts 2

@[code](@/content/guides/cell-features/disabled-cells/react/exampleReadOnlyGrid.jsx)
@[code](@/content/guides/cell-features/disabled-cells/react/exampleReadOnlyGrid.tsx)

:::

:::

## 只读列

在许多用例中,您需要将特定列配置为只读.此列可用于键盘导航和复制数据 (<kbd>**Ctrl**</kbd>/<kbd>**Cmd**</kbd>+<kbd>**C**</kbd> ).将禁用编辑和粘贴数据.

要将列设为只读,请在 [`columns`](@/api/options.md#columns) 配置选项中声明它.您还可以定义一个特殊的渲染器函数,该函数将使只读值变暗,为用户提供单元格只读的视觉提示.

::: only-for javascript

::: example #example1 --js 1 --ts 2

@[code](@/content/guides/cell-features/disabled-cells/javascript/example1.js)
@[code](@/content/guides/cell-features/disabled-cells/javascript/example1.ts)

:::

:::

::: only-for react

::: example #example1 :react --js 1 --ts 2

@[code](@/content/guides/cell-features/disabled-cells/react/example1.jsx)
@[code](@/content/guides/cell-features/disabled-cells/react/example1.tsx)

:::

:::

## 只读特定单元格

此示例使包含单词`Nissan`的单元格变为只读.它强制所有单元格由 [`cells`](@/api/options.md#cells) 函数处理,该函数将决定单元格的元数据是否应具有 [`readOnly`](@/api/options.md#只读)属性集.

::: only-for javascript

::: example #example2 --js 1 --ts 2

@[code](@/content/guides/cell-features/disabled-cells/javascript/example2.js)
@[code](@/content/guides/cell-features/disabled-cells/javascript/example2.ts)

:::

:::

::: only-for react

::: example #example2 :react --js 1 --ts 2

@[code](@/content/guides/cell-features/disabled-cells/react/example2.jsx)
@[code](@/content/guides/cell-features/disabled-cells/react/example2.tsx)

:::

:::

不可编辑单元格的行为与任何其他单元格类似,除了阻止您手动更改其值之外.

## 不可编辑的列

在许多情况下,您需要将特定列配置为不可编辑.除了编辑之外,这样做不会改变其基本行为.这意味着您仍然可以使用键盘导航 <kbd>**Ctrl**</kbd>/<kbd>**Cmd**</kbd>+<kbd>**C**</kbd>,并且<kbd>**Ctrl**</kbd>/<kbd>**Cmd**</kbd>+<kbd>**V**</kbd> 功能以及拖拽填充等.

要使列不可编辑,请在 [`columns`](@/api/options.md#columns) 配置选项中声明它.您还可以定义一个特殊的渲染器函数来使`editor`值变暗.这将为用户提供该单元格不可编辑的视觉提示.

::: only-for javascript

::: example #example3 --js 1 --ts 2

@[code](@/content/guides/cell-features/disabled-cells/javascript/example3.js)
@[code](@/content/guides/cell-features/disabled-cells/javascript/example3.ts)

:::

:::

::: only-for react

::: example #example3 :react --js 1 --ts 2

@[code](@/content/guides/cell-features/disabled-cells/react/example3.jsx)
@[code](@/content/guides/cell-features/disabled-cells/react/example3.tsx)

:::

:::

## 不可编辑的特定单元格

以下示例显示包含包含单词`Nissan`的不可编辑单元格的表格.此单元格属性是可选的,您可以在 Handsontable 配置中轻松设置它.

::: only-for javascript

::: example #example4 --js 1 --ts 2

@[code](@/content/guides/cell-features/disabled-cells/javascript/example4.js)
@[code](@/content/guides/cell-features/disabled-cells/javascript/example4.ts)

:::

:::

::: only-for react

::: example #example4 :react --js 1 --ts 2

@[code](@/content/guides/cell-features/disabled-cells/react/example4.jsx)
@[code](@/content/guides/cell-features/disabled-cells/react/example4.tsx)

:::

:::

## 相关API参考

- 配置选项:
  - [`readOnly`](@/api/options.md#readonly)
  - [`readOnlyCellClassName`](@/api/options.md#readonlycellclassname)
