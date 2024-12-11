---
id: xndxqkoc
title: 列摘要
metaTitle: Column summary - JavaScript Data Grid | Handsontable
description: Calculate sum, min, max, count, average or custom aggregates of individual columns' data, using Handsontable's aggregate functions.
permalink: /column-summary
canonicalUrl: /column-summary
tags:
  - column summaries
  - calculations
  - functions
  - suppressDataTypeErrors
  - destinationRow
  - destinationColumn
  - reversedRowCoords
react:
  id: r3x4l0gp
  metaTitle: Column summary - React Data Grid | Handsontable
searchCategory: Guides
category: Columns
---

# 列摘要

使用 Handsontable 的聚合函数计算各个列数据的总和、最小值、最大值、计数、平均值或自定义聚合.

[[toc]]

## 概述

[`ColumnSummary`](@/api/columnSummary.md) 插件可让您快速计算和显示列摘要.

要自定义列摘要,您可以:
- 决定如何计算摘要:
    - 选择[内置摘要函数](#built-in-summary-functions) 之一
    - 或实现一个[自定义摘要函数](#implement-a-custom-summary-function)
- [选择列和行范围](#step-2-select-cells-that-you-want-to-summarize) 要汇总的内容
- 在特定单元格中[显示您的摘要结果](#step-4-provide-the-destination-cell-s-coordinates)

### 列摘要示例

此示例计算并显示五个不同的列摘要:

::: only-for javascript

::: example #example1 --js 1 --ts 2

@[code](@/content/guides/columns/column-summary/javascript/example1.js)
@[code](@/content/guides/columns/column-summary/javascript/example1.ts)

:::

:::

::: only-for react

::: example #example1 :react --js 1 --ts 2

@[code](@/content/guides/columns/column-summary/react/example1.jsx)
@[code](@/content/guides/columns/column-summary/react/example1.tsx)

:::

:::

### 内置汇总函数

要决定如何计算列摘要,您可以使用以下摘要函数之一:

| Function  | Description                                                       |
| --------- | ----------------------------------------------------------------- |
| `sum`     | 返回列中所有值的总和.                                             |
| `min`     | 返回列中的最小值.                                                 |
| `max`     | 返回列中的最高值.                                                 |
| `count`   | 返回列中所有非空单元格的数量.                                     |
| `average` | 返回列中所有值的总和,<br>除以该列中非空单元格的数量.              |
| `custom`  | 允许您实现[自定义摘要函数](#implement-a-custom-summary-function). |

### 列摘要选项

您可以使用配置选项自定义每个列摘要.

有关可用选项的完整列表,请参阅 [API 参考](@/api/columnSummary.md#options).

## 设置栏目摘要

要设置列摘要,请按照以下步骤操作.

### 第 1 步:启用 [`ColumnSummary`](@/api/columnSummary.md) 插件

要启用 [`ColumnSummary`](@/api/columnSummary.md) 插件,请将 [`columnSummary`](@/api/options.md#columnsummary) 配置选项设置为对象数组.每个对象代表一个单列摘要.

::: only-for javascript

```js
import Handsontable from 'handsontable';
import 'handsontable/styles/handsontable.css';
import 'handsontable/styles/ht-theme-main.css';

const hot = new Handsontable(document.querySelector('#example'), {
  licenseKey: 'non-commercial-and-evaluation',
  data: [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15]
  ],
  colHeaders: true,
  rowHeaders: true,
  // 将 `columnSummary` 配置选项设置为对象数组
  columnSummary: [
    {},
    {}
  ],
});
```

:::

::: only-for react

```jsx
import { HotTable } from '@handsontable/react-wrapper';
import { registerAllModules } from 'handsontable/registry';
import 'handsontable/styles/handsontable.css';
import 'handsontable/styles/ht-theme-main.css';

// 注册 Handsontable 的模块
registerAllModules();

const ExampleComponent = () => {
  return (
    <HotTable
      autoWrapRow={true}
      autoWrapCol={true}
      licenseKey="non-commercial-and-evaluation"
      data={[
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15]
      ]}
      colHeaders={true}
      rowHeaders={true}
      columnSummary={[
        {},
        {}
      ]}
    />
  );
};
```

:::

您还可以将 [`columnSummary`](@/api/options.md#columnsummary) 选项设置[为函数](#set-up-column-summaries-using-a-function).

### 步骤 2:选择要汇总的单元格

默认情况下,列摘要会显示显示结果的列的所有单元格(请参阅 [步骤 4](#step-4-provide) 中的 [`destinationColumn`](@/api/columnSummary.md#options) 选项-目标单元格坐标)).

要汇总任何其他列,请使用 [`sourceColumn`](@/api/columnSummary.md#options) 选项:

::: only-for javascript

```js
columnSummary: [
  {
    // 设置此列摘要以总结第一列
    // (即物理索引为`0`的列)
    sourceColumn: 0,
  },
  {
    // 设置此列摘要以总结第二列
    // (即物理索引为`1`的列)
    sourceColumn: 1,
  }
]
```

:::

::: only-for react

```jsx
columnSummary={[
  {
    // 设置此列摘要以总结第一列
    // (即物理索引为`0`的列)
    sourceColumn: 0,
  },
  {
    // 设置此列摘要以总结第二列
    // (即物理索引为`1`的列)
    sourceColumn: 1,
  }
]}
```

:::

您还可以汇总各个行范围(而不是整列).为此,请将 [`ranges`](@/api/columnSummary.md#options) 选项设置为数组数组,其中每个数组代表一个行范围.

::: only-for javascript

```js
columnSummary: [
  {
    sourceColumn: 0,
    // 设置此列摘要以仅汇总物理索引为 0-2、4 和 6-8 的行
    ranges: [
      [0, 2], [4], [6, 8]
    ],
  },
  {
    sourceColumn: 0,
    // 设置此列摘要以仅汇总物理索引为 0-5 的行
    ranges: [
      [0, 5]
    ],
  }
]
```

:::

::: only-for react

```jsx
columnSummary={[
  {
    sourceColumn: 0,
    // 设置此列摘要以仅汇总物理索引为 0-2、4 和 6-8 的行
    ranges: [
      [0, 2], [4], [6, 8]
    ],
  },
  {
    sourceColumn: 0,
    // 设置此列摘要以仅汇总物理索引为 0-5 的行
    ranges: [
      [0, 5]
    ],
  }
]}
```

:::

### 第 3 步:计算您的摘要

现在,决定如何计算列摘要.

你可以:
- 选择[内置摘要函数](#built-in-summary-functions) 之一
- 或实现[自定义摘要函数](#implement-a-custom-summary-function)
::: only-for javascript

```js
columnSummary: [
  {
    sourceColumn: 0,
    // 设置此列摘要以返回汇总列中所有值的总和
    type: 'sum',
  },
  {
    sourceColumn: 1,
    // 设置此列摘要以返回汇总列中的最小值
    type: 'min',
  }
]
```

:::

::: only-for react

```jsx
columnSummary={[
  {
    sourceColumn: 0,
    // 设置此列摘要以返回汇总列中所有值的总和
    type: 'sum',
  },
  {
    sourceColumn: 1,
    // 设置此列摘要以返回汇总列中的最小值
    type: 'min',
  }
]}
```

:::

### 步骤 4:提供目标单元格的坐标

要在单元格中显示列摘要结果,请提供目标单元格的坐标.

将 [`destinationRow`](@/api/columnSummary.md#options) 和 [`destinationColumn`](@/api/columnSummary.md#options) 选项设置为所需单元格的物理坐标.

::: only-for javascript

```js
columnSummary: [
  {
    sourceColumn: 0,
    type: 'sum',
    // 设置此列摘要以在单元格 (4, 0) 中显示其结果
    destinationRow: 4,
    destinationColumn: 0
  },
  {
    sourceColumn: 1,
    type: 'min',
    // 设置此列摘要以在单元格 (4, 1) 中显示其结果
    destinationRow: 4,
    destinationColumn: 1
  }
]
```

:::

::: only-for react

```jsx
columnSummary={[
  {
    sourceColumn: 0,
    type: 'sum',
    // 设置此列摘要以在单元格 (4, 0) 中显示其结果
    destinationRow: 4,
    destinationColumn: 0
  },
  {
    sourceColumn: 1,
    type: 'min',
    // 设置此列摘要以在单元格 (4, 1) 中显示其结果
    destinationRow: 4,
    destinationColumn: 1
  }
]}
```

:::

::: tip

不要更改摘要行的 [`className`](@/api/options.md#classname) 元数据.

如果您需要设置摘要行的样式,请使用 [`ColumnSummary`](@/api/columnSummary.md) 插件自动分配的类名:`columnSummaryResult`.

:::

### 步骤 5:为目标单元格腾出空间

[`ColumnSummary`](@/api/columnSummary.md) 插件不会自动添加新行来显示其摘要结果.

因此,如果您始终希望在现有行下方显示列摘要结果,则需要:
1. 在网格底部添加一个空行(以避免覆盖现有行).
2. 反转列摘要的行坐标(始终在底部显示摘要结果).

::: tip

要反转列摘要的行坐标,请将 [`reversedRowCoords`](@/api/columnSummary.md#options) 选项设置为 `true`,然后调整 [`destinationRow`](@/api/columnSummary.md#选项)坐标.

:::

::: only-for javascript

::: example #example2 --js 1 --ts 2

@[code](@/content/guides/columns/column-summary/javascript/example2.js)
@[code](@/content/guides/columns/column-summary/javascript/example2.ts)

:::

:::

::: only-for react

::: example #example2 :react --js 1 --ts 2

@[code](@/content/guides/columns/column-summary/react/example2.jsx)
@[code](@/content/guides/columns/column-summary/react/example2.tsx)

:::

:::

## 使用函数设置列摘要

您可以将整个列摘要配置作为返回所需对象数组的函数提供,而不是[手动设置列摘要选项](#set-up-a-column-summary).

下面的示例设置了五个不同的列摘要.为此,它:
- 定义一个名为`generateData`的函数,它生成一个包含虚拟数字数据的数组,并允许您在网格底部添加一个空行(为显示列摘要腾出空间)
- 将 Handsontable 的 [`columnSummary`](@/api/options.md#columnsummary) 配置选项设置为以下函数:
    - 迭代可见列
    - 对于每个可见列,添加带有配置的列摘要
    - 要在 `generateData` 添加的空行中显示列摘要,请将 [`reversedRowCoords`](@/api/columnSummary.md#options) 选项设置为 `true`,并将 [`destinationRow`](@/api/columnSummary.md#options) 选项为`0`

::: only-for javascript

::: example #example7 --js 1 --ts 2

@[code](@/content/guides/columns/column-summary/javascript/example7.js)
@[code](@/content/guides/columns/column-summary/javascript/example7.ts)

:::

:::

::: only-for react

::: example #example7 :react --js 1 --ts 2

@[code](@/content/guides/columns/column-summary/react/example7.jsx)
@[code](@/content/guides/columns/column-summary/react/example7.tsx)

:::

:::

使用函数提供列摘要配置,您可以设置各种更复杂的列摘要.例如,您可以对嵌套组进行小计求和:

::: only-for javascript

::: example #example8 --js 1 --ts 2

@[code](@/content/guides/columns/column-summary/javascript/example8.js)
@[code](@/content/guides/columns/column-summary/javascript/example8.ts)

:::

:::

::: only-for react

::: example #example8 :react --js 1 --ts 2

@[code](@/content/guides/columns/column-summary/react/example8.jsx)
@[code](@/content/guides/columns/column-summary/react/example8.tsx)

:::

:::

## 实现自定义汇总函数

除了使用[内置汇总函数](#built-in-summary-functions) 之外,您还可以实现自己的自定义函数来执行您想要的任何汇总计算.

要实现自定义汇总函数:

1. [设置专栏摘要](#set-up-a-column-summary).
2. 在 [列摘要对象](#step-1-enable-the-columnsummary-plugin) 中,将 [`type`](@/api/options.md#type) 选项设置为 `'custom'`:

::: only-for javascript

```js
columnSummary: [{
  sourceColumn: 1,
  // 将`类型`选项设置为`自定义`
  type: 'custom',
  destinationRow: 0,
  destinationColumn: 5,
  reversedRowCoords: true
}]
```

:::

::: only-for react

```js
columnSummary={[{
    sourceColumn: 1,
    // 将`类型`选项设置为`自定义`
    type: 'custom',
    destinationRow: 0,
    destinationColumn: 5,
    reversedRowCoords: true
}]}
```

:::

3. 在您的列摘要对象中,添加自定义摘要函数:

::: only-for javascript

```js
columnSummary: [{
    type: 'custom',
    destinationRow: 0,
    destinationColumn: 5,
    reversedRowCoords: true,
    // 添加您的自定义摘要函数
    customFunction: function(endpoint) {
      // 在这里实现你的功能
    }
}]
```

:::

::: only-for react

```js
columnSummary={[{
    type: 'custom',
    destinationRow: 0,
    destinationColumn: 5,
    reversedRowCoords: true,
    // 添加您的自定义摘要函数
    customFunction: function(endpoint) {
      // 在这里实现你的功能
    }
}]}
```

:::

此示例实现一个计算列中偶数值数量的函数:

::: only-for javascript

::: example #example9 --js 1 --ts 2

@[code](@/content/guides/columns/column-summary/javascript/example9.js)
@[code](@/content/guides/columns/column-summary/javascript/example9.ts)

:::

:::

::: only-for react

::: example #example9 :react --js 1 --ts 2

@[code](@/content/guides/columns/column-summary/react/example9.jsx)
@[code](@/content/guides/columns/column-summary/react/example9.tsx)

:::

:::

## 对列汇总结果进行四舍五入

您可以将列摘要结果四舍五入到小数点后的特定位数.

要启用此功能,请将 [`roundFloat`](@/api/columnSummary.md) 选项设置为 0 到 100 之间的首选位数.
请参见以下示例:

::: only-for javascript

::: example #example12 --js 1 --ts 2

@[code](@/content/guides/columns/column-summary/javascript/example12.js)
@[code](@/content/guides/columns/column-summary/javascript/example12.ts)

:::

:::

::: only-for react

::: example #example12 :react --js 1 --ts 2

@[code](@/content/guides/columns/column-summary/react/example12.jsx)
@[code](@/content/guides/columns/column-summary/react/example12.tsx)

:::

:::

[`roundFloat`](@/api/columnSummary.md) 选项接受以下值:

| Value             | Behavior                         |
| ----------------- | -------------------------------- |
| `false` (default) | 不要对列摘要结果进行四舍五入.    |
| `true`            | 将结果四舍五入到小数点后 0 位.   |
| Integer 0-100 (n) | 将结果四舍五入到小数点后 n 位.   |
| Integer < 0       | 将结果四舍五入到小数点后 0 位.   |
| Integer > 100     | 将结果四舍五入到小数点后 100 位. |

如果启用 [`roundFloat`](@/api/columnSummary.md),Handsontable 的数据检索方法返回的数据类型 
(如 [`getDataAtCell()`](@/api/core.md#getdataatcell))从 `number` 更改为 `string`.

## 处理非数字值

要汇总包含非数字数据的列,您可以:

- 强制列摘要将非数字值视为数字值
- 或者每当非数字值传递到列摘要时抛出错误
- 或者让您的列摘要跳过任何非数字值

### 强制数值

您可以强制列摘要将非数字值视为数字值.

::: tip

[`forceNumeric`](@/api/columnSummary.md) 选项使用 JavaScript 的 `parseFloat()` 函数.

这意味着,例如,`3c`被视为`3`,但`c3`仍被视为`c3`.

:::

要启用此功能,请将 [`forceNumeric`](@/api/columnSummary.md) 选项设置为 `true` (默认情况下,[`forceNumeric`](@/api/columnSummary.md) 设置为 `false` ).例如:

::: only-for javascript

::: example #example10 --js 1 --ts 2

@[code](@/content/guides/columns/column-summary/javascript/example10.js)
@[code](@/content/guides/columns/column-summary/javascript/example10.ts)

:::

:::

::: only-for react

::: example #example10 :react --js 1 --ts 2

@[code](@/content/guides/columns/column-summary/react/example10.jsx)
@[code](@/content/guides/columns/column-summary/react/example10.tsx)

:::

:::

### 抛出数据类型错误

每当将非数字值传递到列摘要时,您都可以引发数据类型错误.

要引发数据类型错误,请将 [`suppressDataTypeErrors`](@/api/columnSummary.md) 选项设置为 `false`(默认情况下,[`suppressDataTypeErrors`](@/api/columnSummary.md) 设置为 `true` `).例如:

::: only-for javascript

::: example #example11 --js 1 --ts 2

@[code](@/content/guides/columns/column-summary/javascript/example11.js)
@[code](@/content/guides/columns/column-summary/javascript/example11.ts)

:::

:::

::: only-for react

::: example #example11 :react --js 1 --ts 2

@[code](@/content/guides/columns/column-summary/react/example11.jsx)
@[code](@/content/guides/columns/column-summary/react/example11.tsx)

:::

:::

## 相关API参考

- 配置选项:
  - [`columnSummary`](@/api/options.md#columnsummary)
- 插件:
  - [`ColumnSummary`](@/api/columnSummary.md)
