---
id: kgegbmgz
title: 批量操作
metaTitle: Batch operations - JavaScript Data Grid | Handsontable
description: Batch CRUD operations, to avoid unnecessary rendering cycles and boost your grid's performance.
permalink: /batch-operations
canonicalUrl: /batch-operations
tags:
  - suspend rendering
  - batching
  - performance
react:
  id: 3xqdvk3u
  metaTitle: Batch operations - React Data Grid | Handsontable
searchCategory: Guides
category: Optimization
---

# 批量操作

批量 CRUD 操作,以避免不必要的渲染周期并提高网格的性能.

[[toc]]

<style>
.handsontable .green-bg {
  color: #fff;
  background-color: #37BC6C;
}

.handsontable .red-bg {
  color: #fff;
  background-color: #FF5A12;
}

#logOutput {
  max-height: 150px;
  overflow-y: auto;
  line-height: 2;
}

#logOutput div:first-child {
  font-weight: bold;
}

</style>

## 概述

在 Handsontable 中,每个 CRUD 操作都以 [`render()`](@/api/core.md#render) 结束.在大多数情况下,这被认为是预期行为.该表必须反映在某个时刻所请求的更改.然而,有时你可能会发现这个机制有点多余.

例如,如果您编写了一个使用多个 CRUD 操作的自定义函数,这些 CRUD 操作将为每个 API 方法调用一个 [`render()`](@/api/core.md#render).最后只需要一次渲染,就足以反映所有更改.您可以将这些组合操作视为单个操作,并让渲染等待它们完成.为此,请使用暂停渲染来批处理操作.

这可以提高应用程序的整体性能.批处理多个操作可以减少渲染次数,因此任何以渲染结束的 API 调用都将从这一改进中受益.它可以减少布局垃圾、减少冻结并提高响应速度.

您可以使用多种 API 方法来暂停,但 [`batch()`](@/api/core.md#batch) 是最通用的方法.它是一个回调函数,在主体内部提供的所有操作完成后执行 [`render()`](@/api/core.md#render).最佳做法是使用此方法,因为它更安全且更易于使用.您只需将要批处理的所有操作放入闭包内即可. Handsontable 负责暂停并在最后执行单个 [`render()`](@/api/core.md#render).

以下代码片段显示了一些批处理操作的简单示例.三个API操作依次被调用.如果不将它们放在批处理回调中,每个操作都会以 [`render()`](@/api/core.md#render) 结束.借助批处理功能,您可以跳过两次渲染,并在最后以一次渲染结束整个操作.这是更优化的,并且增益随着 [`batch()`](@/api/core.md#batch) 内放置的操作数量的增加而增加.

::: only-for react

::: tip

要使用 Handsontable API,您需要访问 Handsontable 实例.您可以通过利用对`HotTable`组件的引用并读取其`hotInstance`属性来做到这一点.

有关更多信息,请参阅[实例方法](@/guides/getting-started/react-methods/react-methods.md)页面.

:::

:::

```js
// 在实例上调用批处理方法
hot.batch(() => {
  // 根据需要运行操作
  hot.alter('insert_row_above', 5, 45);
  hot.setDataAtCell(1, 1, 'x');
  hot.selectCell(0, 0);
  // 所有操作完成后立即执行渲染
});
```

暂停渲染可以带来更好的性能,这在批处理大量操作时尤其明显.该图显示了使用批次(深蓝色柱)和不使用批次(浅蓝色柱)执行相同操作的比较.执行速度的提高随着批处理操作数量的增加而增加.

<span class="img-invert">

![batch_operations_comparison]({{$basePath}}/img/batch_operations_comparison.png)

</span>

::: tip

请注意,其他方法也可用于批量操作,但它们稍微高级一些,应谨慎使用.当您在多次暂停渲染后忘记`恢复`渲染时,可能会发生闪烁、故障或其他视觉失真.将渲染类型的方法与专注于操作的方法混合也可能会导致一些意外的行为.最重要的是,[`batch()`](@/api/core.md#batch) 在大多数用例中应该足够了,并且使用起来是安全的.

:::

## API 方法

以下 API 方法允许暂停:

- [`batch()`](@/api/core.md#batch)
- [`batchRender()`](@/api/core.md#batchrender)
- [`batchExecution()`](@/api/core.md#batchexecution)
- [`suspendRender()`](@/api/core.md#suspendrender) and [`resumeRender()`](@/api/core.md#resumerender)
- [`suspendExecution()`](@/api/core.md#suspendexecution) and [`resumeExecution()`](@/api/core.md#resumeexecution)

通过使用这些方法,您可以暂停:

- 渲染
- 执行
- 渲染和执行.

术语`渲染`直接指DOM渲染,术语`执行`指与DOM渲染不同的所有操作.目前,只有索引重新计算允许您推迟该过程.

以`batch\*`为前缀的方法名称,即 [`batch()`](@/api/core.md#batch)、[`batchRender()`](@/api/core.md#batchrender ) 和 [`batchExecution()`](@/api/core.md#batchexecution) 如果不需要批量异步操作,建议首选.
以 `suspend\*` 为前缀的方法名称,即 [`suspendRender()`](@/api/core.md#suspendrender) 和 [`suspendExecution()`](@/api/core.md#suspendexecution) ),是第二选择.当您需要批处理异步操作时,这些非常有用.本质上它们的工作方式与`batch\*`方法相同,但渲染必须手动恢复.

### 批处理*方法

#### 批

此方法会暂停渲染和其他操作.它是通用的,如果您想在应用程序中批量处理多个 API 调用,它尤其有用.

```js
hot.batch(() => {
  hot.alter('insert_row_above', 5, 45);
  hot.setDataAtCell(1, 1, 'x');

  const filters = hot.getPlugin('filters');

  filters.addCondition(2, 'contains', ['3']);
  filters.filter();
  hot.getPlugin('columnSorting').sort({ column: 1, sortOrder: 'desc' });
  // 执行回调后会重新计算table cache,并调用一次table render
});
```

#### 批量渲染

[`batchRender()`](@/api/core.md#batchrender) 方法是一个回调函数.通过将 API 调用放入其中,可以跳过过多的渲染.该表将在执行回调后呈现.它不太容易出错,因为您不必记住恢复渲染.此方法的唯一缺点是它不支持异步操作.

```js
hot.batchRender(() => {
  hot.alter('insert_row_above', 5, 45);
  hot.setDataAtCell(1, 1, 'x');
  // 执行回调后,表格将渲染一次
});
```

#### 批量执行

[`batchExecution()`](@/api/core.md#batchexecution) 是一个回调函数.通过将 API 调用放在其中,可以跳过过多的渲染.该表将在执行回调后呈现.它不太容易出错,因为您不必记住恢复操作.此方法的唯一缺点是它不支持异步操作.

```js
hot.batchExecution(() => {
  const filters = hot.getPlugin('filters');

  filters.addCondition(2, 'contains', ['3']);
  filters.filter();
  hot.getPlugin('columnSorting').sort({ column: 1, sortOrder: 'desc' });
  // 执行回调后,表缓存会重新计算一次
});
```

### 挂起*和恢复*方法

#### [`suspendRender()`](@/api/core.md#suspendrender) and [`resumeRender()`](@/api/core.md#resumerender)

要暂停渲染过程,请在要批处理的操作之前调用 [`suspendRender()`](@/api/core.md#suspendrender) 方法.这是一种手动方法.

挂起后,使用 [`resumeRender()`](@/api/core.md#resumerender) 方法恢复进程.每个 [`suspendRender()`](@/api/core.md#suspendrender) 调用都需要与一个 [`resumeRender()`](@/api/core.md#resumerender) 调用相对应.例如,如果调用 [`suspendRender()`](@/api/core.md#suspendrender) 5 次,则需要调用 [`resumeRender()`](@/api/core.md#resumerender) 5次也是如此.

```js
hot.suspendRender(); // 暂停渲染
hot.alter('insert_row_above', 5, 45);
hot.setDataAtCell(1, 1, 'x');
hot.resumeRender(); // 记得恢复渲染
```

#### 暂停执行和恢复执行

要暂停渲染过程,您可以在要批处理的操作之前调用 [`suspendExecution()`](@/api/core.md#suspendexecution) 方法.这是一种手动方法.挂起后,您必须记住使用 [`resumeExecution()`](@/api/core.md#resumeexecution) 方法恢复进程.

```js
hot.suspendExecution();
const filters = hot.getPlugin('filters');

filters.addCondition(2, 'contains', ['3']);
filters.filter();
hot.getPlugin('columnSorting').sort({ column: 1, sortOrder: 'desc' });
hot.resumeExecution(); // 它在内部更新缓存
```

## 暂停功能的现场演示

以下示例显示了 [`batch()`](@/api/core.md#batch) 方法可以在多大程度上减少渲染时间.这两个示例共享相同的数据集和操作.第一个显示使用 [`batch()`](@/api/core.md#batch) 方法时经过的时间.运行第二个示例来检查在不使用 [`batch()`](@/api/core.md#batch) 方法的情况下渲染需要多长时间.

::: only-for javascript

::: example #example1 --html 1 --js 2 --ts 3

@[code](@/content/guides/optimization/batch-operations/javascript/example1.html)
@[code](@/content/guides/optimization/batch-operations/javascript/example1.js)
@[code](@/content/guides/optimization/batch-operations/javascript/example1.ts)

:::

:::

::: only-for react

::: example #example1 :react --js 1 --ts 2

@[code](@/content/guides/optimization/batch-operations/react/example1.jsx)
@[code](@/content/guides/optimization/batch-operations/react/example1.tsx)

:::

:::

## 相关文章

### 相关指南

<div class="boxes-list gray">

- [Performance](@/guides/optimization/performance/performance.md)

</div>

### 相关博客文章

<div class="boxes-list">

- [Handsontable 8.3.0 has been released](https://handsontable.com/blog/handsontable-8.3.0-has-been-released)

</div>

### 相关API参考

- 配置选项:
  - [`maxCols`](@/api/options.md#maxcols)
  - [`maxRows`](@/api/options.md#maxrows)
  - [`observeDOMVisibility`](@/api/options.md#observedomvisibility)
  - [`renderAllColumns`](@/api/options.md#renderallcolumns)
  - [`renderAllRows`](@/api/options.md#renderallrows)
- 核心方法:
  - [`batch()`](@/api/core.md#batch)
  - [`batchExecution()`](@/api/core.md#batchexecution)
  - [`batchRender()`](@/api/core.md#batchrender)
  - [`isExecutionSuspended()`](@/api/core.md#isexecutionsuspended)
  - [`suspendExecution()`](@/api/core.md#suspendexecution)
  - [`isRenderSuspended()`](@/api/core.md#isrendersuspended)
  - [`render()`](@/api/core.md#render)
  - [`resumeExecution()`](@/api/core.md#resumeexecution)
  - [`resumeRender()`](@/api/core.md#render)
  - [`suspendRender()`](@/api/core.md#suspendrender)
- Hooks:
  - [`afterRender`](@/api/hooks.md#afterrender)
  - [`afterViewRender`](@/api/hooks.md#afterviewrender)
  - [`beforeChangeRender`](@/api/hooks.md#beforechangerender)
  - [`beforeRender`](@/api/hooks.md#beforerender)
  - [`beforeViewRender`](@/api/hooks.md#beforeviewrender)
