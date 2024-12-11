---
id: w6bvsin5
title: 优化
metaTitle: Performance - JavaScript Data Grid | Handsontable
description: Boost your grid's performance by setting a constant column size, suspending rendering, deciding how many rows and columns are pre-rendered, and more.
permalink: /performance
canonicalUrl: /performance
tags:
  - speed
react:
  id: gbdbrlc8
  metaTitle: Performance - React Data Grid | Handsontable
searchCategory: Guides
category: Optimization
---

# 优化

通过设置恒定的列大小、暂停渲染、确定预渲染的行数和列数等来提高网格的性能.

[[toc]]

## 概述

Handsontable 执行多项计算以正确显示网格.最苛刻的操作是在加载、更改和滚动事件上执行的.每一个操作都会降低性能,但大多数操作都是不可避免的.

为了测量 Handsontable 在各种配置下的执行时间,我们使用我们自己的库,称为 [Performance Lab](https://github.com/handsontable/performance-lab).一些测试表明,有些方法可能会提高应用程序的性能.这些仅在某些情况下有效,但我们希望它们也能成功应用于您的应用程序.

## 设置行和列的大小不变

提前配置[列宽](@/guides/columns/column-width/column-width.md)和[行高](@/guides/rows/row-height/row-height.md).这样,Handsontable 就不必计算它们.

::: only-for javascript

```js
const hot = new Handsontable(obj, {
  colWidths: [50, 150, 45],
  rowHeights: [40, 40, 40, 40],
});
```

:::

::: only-for react

```js
<HotTable
  colWidths={[50, 150, 45]}
  rowHeights={[40, 40, 40, 40]}
/>
```

:::

采用这种方法时,请确保单元格的内容适合行和列的大小,或者让用户更改[列宽度](@/guides/columns/column-width/column-width.md#adjust-the -column-width-manually) 和 [row height](@/guides/rows/row-height/row-height.md#adjust-row-heights-manually) 手动.

阅读更多:
- [网格尺寸](@/guides/getting-started/grid-size/grid-size.md)
- [列宽](@/guides/columns/column-width/column-width.md)
- [行高](@/guides/rows/row-height/row-height.md)
- [`colWidths`](@/api/options.md#colwidths)
- [`rowHeights`](@/api/options.md#rowheights)

## 关闭 autoRowSize 和/或 autoColumnSize

您可以配置 [`autoRowSize`](@/api/options.md#autorowsize) 和 [`autoColumnSize`](@/api/options.md#autocolumnsize) 选项的值.这些允许您定义在表初始化期间进行的与宽度/高度相关的计算量.

有关更多信息,请参阅我们的 [行](@/api/options.md#autorowsize) 和 [列](@/api/options.md#autocolumnsize) 文档.

## 定义预渲染的行数和列数

您可以显式指定要在表的可见部分之外呈现的行数和列数.通过设置较低的数字可以获得更好的结果,因为在某些情况下渲染的元素较少.但是,有时设置较大的数字也可能有效,因为对每个滚动事件进行的操作较少.微调这些设置并找到最佳点可能会改善 Handsontable 实现的感觉.

有关更多信息,请参阅我们的 [行](@/api/options.md#viewportrowrenderingoffset) 和 [列](@/api/options.md#viewportcolumnrenderingoffset) 文档.

## 经验法则:不要使用太多样式

更改背景、字体颜色等不会降低性能.但是,添加过多的 CSS 动画、过渡和其他消耗计算的属性可能会影响性能,因此请将它们保持在合理的水平.

## 暂停渲染

默认情况下,Handsontable 将在每次 CRUD 操作后调用渲染.通常,这是预期的行为,但在某些用例中您可能会发现它有点过度.通过使用其中一种批处理方法,您可以暂停渲染并在最后调用它一次.例如:

::: only-for react

::: tip

要使用 Handsontable API,您需要访问 Handsontable 实例.您可以通过利用对`HotTable`组件的引用并读取其`hotInstance`属性来做到这一点.

有关更多信息,请参阅[实例方法](@/guides/getting-started/react-methods/react-methods.md)页面.

:::

:::

```js
hot.batch(() => {
  hot.alter('insert_row_above', 5, 45);
  hot.setDataAtCell(1, 1, 'x');

  const filters = hot.getPlugin('filters');

  filters.addCondition(2, 'contains', ['3']);
  filters.filter();
  hot.getPlugin('columnSorting').sort({ column: 1, sortOrder: 'desc' });
  // 执行回调后,将重新计算表缓存并调用一次表渲染
});
```

请参阅[批处理操作](@/guides/optimization/batch-operations/batch-operations.md)页面以查找有关如何使用批处理的更多信息.

## 相关文章

### 相关指南

- [批量操作](@/guides/optimization/batch-operations/batch-operations.md)
- [行虚拟化](@/guides/rows/row-virtualization/row-virtualization.md)
- [列虚拟化](@/guides/columns/column-virtualization/column-virtualization.md)
- [模块](@/guides/tools-and-building/modules/modules.md)
- [打包尺寸](@/guides/optimization/bundle-size/bundle-size.md)

### 相关API参考

- 配置选项:
  - [`autoColumnSize`](@/api/options.md#autocolumnsize)
  - [`autoRowSize`](@/api/options.md#autorowsize)
  - [`colWidths`](@/api/options.md#colwidths)
  - [`viewportColumnRenderingOffset`](@/api/options.md#viewportcolumnrenderingoffset)
  - [`viewportRowRenderingOffset`](@/api/options.md#viewportrowrenderingoffset)
