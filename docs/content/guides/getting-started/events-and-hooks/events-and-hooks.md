---
id: own6evdy
title: 事件和hooks
metaTitle: Events and hooks - JavaScript Data Grid | Handsontable
description: Run your code before or after specific data grid actions, using Handsontable's API hooks (callbacks). For example, control what happens with the user's input.
permalink: /events-and-hooks
canonicalUrl: /events-and-hooks
tags:
- callback
- hook
- event
- middleware
- modify
- after
- before
- events
- hooks
react:
  id: d966se98
  metaTitle: Events and hooks - React Data Grid | Handsontable
searchCategory: Guides
category: Getting started
---

# 事件和hooks

使用 Handsontable 的 API hooks（回调）在特定数据网格操作之前或之后运行代码。例如，控制用户输入所发生的情况。

[[toc]]

## 概述

回调用于在操作发生之前或之后做出反应。我们将它们称为钩子。 Handsontable 的钩子与事件和中间件共享一些特征，将它们结合在一个独特的结构中。

## Events

如果您只对发出的钩子做出反应而忘记了它们的所有其他功能，则可以将 Handsontable 的钩子视为纯事件。您可能希望将范围限制为`after`前缀挂钩，以便在发生某些事情并且操作结果已经提交后发出它们。

::: only-for react

```jsx
<HotTable afterCreateRow={(row, amount) => {
  console.log(`${amount} row(s) were created, starting at index ${row}`);
}}/>
```

:::

::: only-for javascript

```js
hot.addHook('afterCreateRow', (row, amount) => {
  console.log(`${amount} row(s) were created, starting at index ${row}`);
})
```

:::

## 中间件

中间件是 JavaScript 世界中 Node.js 框架（例如 Express 或 Koa）中众所周知的概念。中间件是一个回调，可以通过管道传输到进程并允许开发人员对其进行修改。我们不再只是对发出的事件做出反应，而是可以影响组件内部发生的事情并修改流程。

::: only-for react

```jsx
<HotTable modifyColWidth={(width, column) => {
    if (column > 10) {
      return 150;
    }
}}/>
```

:::

::: only-for javascript

```js
hot.addHook('modifyColWidth', (width, column) => {
  if (column > 10) {
    return 150;
  }
})
```

:::

请注意，第一个参数是我们要修改的当前宽度。后面的参数是不可变的，并且可以使用附加信息来决定是否应该修改数据。

## Handsontable hooks

我们将所有回调称为`Handsontable hooks`，因为尽管它们与事件和中间件共享一些特征，但它们将它们组合在一个独特的结构中。您可能已经熟悉这个概念，因为我们并不是唯一使用 hooks 约定的人。

几乎所有以`before`为前缀的 Handsontable 挂钩都可以让您返回`false`，从而阻止操作的执行。它可用于验证、拒绝外部服务的操作，或阻止我们的本机算法并将其替换为自定义实现。

一个很好的例子是我们与 HyperFormula 引擎的集成，只有在引擎本身允许的情况下才能创建新行：

::: only-for react

```jsx
<HotTable
  beforeCreateRow={(row, amount) => {
    if (!hyperFormula.isItPossibleToAddRows(0, [row, amount])) {
      return false;
    }
}}/>
```

:::

::: only-for javascript

```js
hot.addHook('beforeCreateRow', (row, amount) => {
  if (!hyperFormula.isItPossibleToAddRows(0, [row, amount])) {
    return false;
  }
})
```

:::

第一个参数可以被修改并通过队列中下一个的 Handsontable 挂钩传递。这个特性在`before`和`after`钩子之间共享，但在前者中更常见。在事情发生之前，我们可以通过钩子管道运行数据，这些钩子可能会修改或拒绝操作。这为扩展默认的 Handsontable 功能并为您的应用程序自定义它提供了多种可能性。

::: only-for react

## External control

::: example #example3 :react --js 1 --ts 2 --css 3

@[code](@/content/guides/getting-started/events-and-hooks/react/example3.jsx)
@[code](@/content/guides/getting-started/events-and-hooks/react/example3.tsx)
@[code](@/content/guides/getting-started/events-and-hooks/react/example3.css)

:::

:::

## 所有可用的 Handsontable 挂钩示例

请注意，默认情况下，此页面上会检查某些回调。

::: example-without-tabs #example1

@[code](@/content/guides/getting-started/events-and-hooks/javascript/example1.html)
@[code](@/content/guides/getting-started/events-and-hooks/javascript/example1.css)
@[code](@/content/guides/getting-started/events-and-hooks/javascript/example1.js)

:::

## `source` 参数的定义


值得一提的是，一些 Handsontable 钩子是从 Handsontable 核心触发的，还有一些是从插件触发的。在某些情况下，了解触发回调的原因会很有帮助。 Handsontable 是否触发了它，或者是由外部代码或用户操作触发的？这就是为什么在关键的钩子中，Handsontable 将`source`作为参数传递，通知您谁触发了操作并提供有关源的详细信息。使用`源`中检索到的信息，您可以创建其他条件。

`source` 参数是可选的。它采用以下值：

| Value                                              | 描述                                                                                                                                                                                                     |
| -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`                                             | 由 Handsontable 触发的操作，其原因与应用于 Handsontable 的设置直接相关。例如，当 [`minSpareRows`](@/api/options.md#minsparerows) 大于 0 时，[`afterCreateRow`](@/api/hooks.md#aftercreaterow) 将被触发。 |
| `edit`                                             | 数据更改后由 Handsontable 触发的操作，例如编辑或使用`setData*`方法后。                                                                                                                                   |
| `loadData`                                         | 使用 [`data`](@/api/options.md#data) 属性调用 [`loadData`](@/api/core.md#loaddata) 方法后，由 Handsontable 触发的操作。                                                                                  |
| `updateData`                                       | 调用 [`updateData`](@/api/core.md#updatedata) 方法后由 Handsontable 触发的操作；例如，数据更改之前或之后。                                                                                               |
| `populateFromArray`                                | Handsontable 在请求填充数据后触发的操作。                                                                                                                                                                |
| `spliceCol`                                        | 列数据拼接完成后由Handsontable触发的动作。                                                                                                                                                               |
| `spliceRow`                                        | 行数据拼接完成后由 Handsontable 触发的操作。                                                                                                                                                             |
| `timeValidate`                                     | 调用时间验证器后（例如编辑后）由 Handsontable 触发的操作。                                                                                                                                               |
| `dateValidate`                                     | 调用日期验证器后（例如编辑后）由 Handsontable 触发的操作。                                                                                                                                               |
| `validateCells`                                    | 触发验证过程后由 Handsontable 触发的操作。                                                                                                                                                               |
| [`Autofill.fill`](@/api/autofill.md)               | 由自动填充插件触发的操作。                                                                                                                                                                               |
| [`ContextMenu.clearColumns`](@/api/contextMenu.md) | 单击`清除列`后由 ContextMenu 插件触发的操作。                                                                                                                                                            |
| [`ContextMenu.columnLeft`](@/api/contextMenu.md)   | 单击`向左插入列`后由 ContextMenu 插件触发的操作。                                                                                                                                                        |
| [`ContextMenu.columnRight`](@/api/contextMenu.md)  | 单击`向右插入列`后由 ContextMenu 插件触发的操作。                                                                                                                                                        |
| [`ContextMenu.removeColumn`](@/api/contextMenu.md) | 单击`删除列`后由 ContextMenu 插件触发的操作。                                                                                                                                                            |
| [`ContextMenu.removeRow`](@/api/contextMenu.md)    | 单击`删除行`后由 ContextMenu 插件触发的操作。                                                                                                                                                            |
| [`ContextMenu.rowAbove`](@/api/contextMenu.md)     | 单击`在上方插入行`后由 ContextMenu 插件触发的操作。                                                                                                                                                      |
| [`ContextMenu.rowBelow`](@/api/contextMenu.md)     | 单击`在下面插入行`后由 ContextMenu 插件触发的操作。                                                                                                                                                      |
| [`CopyPaste.paste`](@/api/copyPaste.md)            | 粘贴值后由 CopyPaste 插件触发的操作。                                                                                                                                                                    |
| `MergeCells`                                       | 清除合并单元格的底层单元格时由 MergeCells 插件触发的操作。                                                                                                                                               |
| [`UndoRedo.redo`](@/api/undoRedo.md)               | 重做更改后由 UndoRedo 插件触发的操作。                                                                                                                                                                   |
| [`UndoRedo.undo`](@/api/undoRedo.md)               | 撤消更改后由 UndoRedo 插件触发的操作。                                                                                                                                                                   |
| [`ColumnSummary.set`](@/api/columnSummary.md)      | 计算完成后由 ColumnSummary 插件触发的操作。                                                                                                                                                              |
| [`ColumnSummary.reset`](@/api/columnSummary.md)    | 重置计算后由 ColumnSummary 插件触发的操作。                                                                                                                                                              |

对`source`参数进行操作的回调列表：

- [`afterChange`](@/api/hooks.md#afterchange)
- [`afterCreateCol`](@/api/hooks.md#aftercreatecol)
- [`afterCreateRow`](@/api/hooks.md#aftercreaterow)
- [`afterLoadData`](@/api/hooks.md#afterloaddata)
- [`afterSetDataAtCell`](@/api/hooks.md#aftersetdataatcell)
- [`afterSetDataAtRowProp`](@/api/hooks.md#aftersetdataatrowprop)
- [`afterSetSourceDataAtCell`](@/api/hooks.md#aftersetsourcedataatcell)
- [`afterRemoveCol`](@/api/hooks.md#afterremovecol)
- [`afterRemoveRow`](@/api/hooks.md#aftermoverow)
- [`afterValidate`](@/api/hooks.md#aftervalidate)
- [`beforeChange`](@/api/hooks.md#beforechange)
- [`beforeChangeRender`](@/api/hooks.md#beforechangerender)
- [`beforeCreateCol`](@/api/hooks.md#beforecreatecol)
- [`beforeCreateRow`](@/api/hooks.md#beforecreaterow)
- [`beforeLoadData`](@/api/hooks.md#beforeloaddata)
- [`beforeRemoveCol`](@/api/hooks.md#beforeremovecol)
- [`beforeRemoveRow`](@/api/hooks.md#beforeremoverow)
- [`beforeValidate`](@/api/hooks.md#beforevalidate)

## [`beforeKeyDown`](@/api/hooks.md#beforekeydown) 回调

以下演示使用 [`beforeKeyDown`](@/api/hooks.md#beforekeydown) 回调来修改一些按键绑定：

- 在单元格上按 <kbd>**Delete**</kbd> 或 <kbd>**Backspace**</kbd> 会删除该单元格，并将列中其下方的所有单元格向上移动，从而导致光标移动不移动，之前在其下方的值现在位于当前单元格中。
- 在值保持不变的单元格中按 <kbd>**Enter**</kbd> 会将下方列中的所有单元格（包括当前单元格）下移一行。这会导致光标下出现一个未移动的空白单元格。

::: only-for javascript

::: example #example2 --js 1 --ts 2

@[code](@/content/guides/getting-started/events-and-hooks/javascript/example2.js)
@[code](@/content/guides/getting-started/events-and-hooks/javascript/example2.ts)

:::

:::

::: only-for react

::: example #example2 :react --js 1 --ts 2

@[code](@/content/guides/getting-started/events-and-hooks/react/example2.jsx)
@[code](@/content/guides/getting-started/events-and-hooks/react/example2.tsx)

:::

:::

## 相关API参考

- 核心方法:
  - [`addHook()`](@/api/core.md#addhook)
  - [`addHookOnce()`](@/api/core.md#addhookonce)
  - [`hasHook()`](@/api/core.md#hashook)
  - [`removeHook()`](@/api/core.md#removehook)
  - [`hasHook()`](@/api/core.md#hashook)
  - [`runHooks()`](@/api/core.md#runhooks)
- Hooks:
  - [List of all Handsontable hooks](@/api/hooks.md)
  - [`afterListen`](@/api/hooks.md#afterlisten)
  - [`afterUnlisten`](@/api/hooks.md#afterunlisten)
