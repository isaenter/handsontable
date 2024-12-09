---
id: deqvum60
title: 评论
metaTitle: Comments - JavaScript Data Grid | Handsontable
description: Add a comment (a note) to a cell, using the context menu, just like in Excel. Edit and delete comments. Make comments read-only.
permalink: /comments
canonicalUrl: /comments
tags:
  - notes
react:
  id: lxw2632u
  metaTitle: Comments - React Data Grid | Handsontable
searchCategory: Guides
category: Cell features
---

# 评论

使用上下文菜单向单元格添加注释（注释），就像在 Excel 中一样。编辑和删除评论。将评论设置为只读。

[[toc]]

## 启用插件

将 [`comments`](@/api/options.md#comments) 配置选项设置为 `true` 以启用该功能并添加所有需要的上下文菜单项。例如：

::: only-for javascript

```js
const hot = new Handsontable(container, {
  data: [
    ['A1', 'B1', 'C1'],
    ['A2', 'B2', 'C2'],
  ],
  comments: true,
  autoWrapRow: true,
  autoWrapCol: true
});
```

:::

::: only-for react

```jsx
<HotTable
  data={[
    ['A1', 'B1', 'C1'],
    ['A2', 'B2', 'C2'],
  ]}
  comments={true}
/>
```

:::

## 通过上下文菜单添加评论

启用插件后，[上下文菜单](@/guides/accessories-and-menus/context-menu/context-menu.md) 获得一些新项目：

- 添加/编辑评论
- 删除评论
- 只读评论

## 设置预设注释

您还可以为表格预先定义注释。注释存储在表/列/单元格的元数据对象中，您可以将其声明为相应类型的任何值。例如：

::: only-for javascript

```js
cell: [
  { row: 1, col: 1, comment: { value: 'Hello world!' } }
]
```

:::

::: only-for react

```jsx
cell={[
  { row: 1, col: 1, comment: { value: 'Hello world!' } }
]}
```

:::

在此示例中，注释`Hello world!`添加到单元格`(1,1)`处。

## 基本示例

::: only-for javascript

::: example #example1 --js 1 --ts 2

@[code](@/content/guides/cell-features/comments/javascript/example1.js)
@[code](@/content/guides/cell-features/comments/javascript/example1.ts)

:::

:::

::: only-for react

::: example #example1 :react --js 1 --ts 2

@[code](@/content/guides/cell-features/comments/react/example1.jsx)
@[code](@/content/guides/cell-features/comments/react/example1.tsx)

:::

:::

## 将评论设置为只读

默认情况下，所有评论都是可编辑的。要更改此设置，请在添加注释时将 [`readOnly`](@/api/options.md#readonly) 配置选项设置为 `true`。此示例使附加到单元格的`Tesla`注释为只读，而附加到另一个单元格的`Honda`注释是可编辑的。

::: only-for javascript

::: example #example2 --js 1 --ts 2

@[code](@/content/guides/cell-features/comments/javascript/example2.js)
@[code](@/content/guides/cell-features/comments/javascript/example2.ts)

:::

:::

::: only-for react

::: example #example2 :react --js 1 --ts 2

@[code](@/content/guides/cell-features/comments/react/example2.jsx)
@[code](@/content/guides/cell-features/comments/react/example2.tsx)

:::

:::

## 设置评论框的大小

要设置评论框的宽度和高度，请使用 [`style`](@/api/options.md#comments) 参数。

::: only-for javascript

::: example #example3 --js 1 --ts 2

@[code](@/content/guides/cell-features/comments/javascript/example3.js)
@[code](@/content/guides/cell-features/comments/javascript/example3.ts)

:::

:::

::: only-for react

::: example #example3 :react --js 1 --ts 2

@[code](@/content/guides/cell-features/comments/react/example3.jsx)
@[code](@/content/guides/cell-features/comments/react/example3.tsx)

:::

:::

## 设置显示评论的延迟

要在预先配置的时间延迟后显示评论，请使用 [`displayDelay`](@/api/options.md#comments) 参数。

::: only-for javascript

::: example #example4 --js 1 --ts 2

@[code](@/content/guides/cell-features/comments/javascript/example4.js)
@[code](@/content/guides/cell-features/comments/javascript/example4.ts)

:::

:::

::: only-for react

::: example #example4 :react --js 1 --ts 2

@[code](@/content/guides/cell-features/comments/react/example4.jsx)
@[code](@/content/guides/cell-features/comments/react/example4.tsx)

:::

:::

## 相关键盘快捷键

| Windows                                                 | macOS                                                      | Action                                  |  Excel  | Sheets  |
| ------------------------------------------------------- | ---------------------------------------------------------- | --------------------------------------- | :-----: | :-----: |
| <kbd>**Ctrl**</kbd>+<kbd>**Alt**</kbd>+<kbd>**M**</kbd> | <kbd>**Ctrl**</kbd>+<kbd>**Option**</kbd>+<kbd>**M**</kbd> | 添加或编辑评论                           | &cross; | &check; |
| <kbd>**Ctrl**</kbd>+<kbd>**Enter**</kbd>                | <kbd>**Cmd**</kbd>+<kbd>**Enter**</kbd>                    | 保存并退出当前评论                        | &cross; | &check; |
| <kbd>**Escape**</kbd>                                   | <kbd>**Escape**</kbd>                                      | 退出当前评论而不保存                      | &cross; | &cross; |

## 相关API参考

- 配置选项:
  - [`commentedCellClassName`](@/api/options.md#commentedcellclassname)
  - [`comments`](@/api/options.md#comments)
