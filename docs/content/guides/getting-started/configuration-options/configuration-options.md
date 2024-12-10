---
id: p7oq0ph7
title: 配置选项
metaTitle: Configuration options - JavaScript Data Grid | Handsontable
description: Configure the data grid down to each column, row, and cell, using various built-in options that control Handsontable's behavior and user interface.
permalink: /configuration-options
canonicalUrl: /configuration-options
tags:
  - properties
  - config
  - options
react:
  id: gmpbmisy
  metaTitle: Configuration options - React Data Grid | Handsontable
searchCategory: Guides
category: Getting started
---

# 配置选项

使用控制 Handsontable 行为和用户界面的各种内置选项，将网格配置到每一列、行和单元格。

[[toc]]

## 概述

::: only-for javascript

要应用配置选项，请使用对象文字表示法将它们作为 Handsontable 构造函数的第二个参数传递：

```js
import Handsontable from 'handsontable';
import 'handsontable/styles/handsontable.css';
import 'handsontable/styles/ht-theme-main.css';

const container = document.querySelector('#example');
const hot = new Handsontable(container, {
  // 配置选项，以对象文字表示法
  licenseKey: "non-commercial-and-evaluation",
  data: [
    ['A1', 'B1', 'C1', 'D1'],
    ['A2', 'B2', 'C2', 'D2'],
    ['A3', 'B3', 'C3', 'D3'],
  ],
  width: 400,
  height: 300,
  colHeaders: true,
  rowHeaders: true,
  customBorders: true,
  dropdownMenu: true,
  multiColumnSorting: true,
  filters: true,
  manualRowMove: true,
});
```

:::

::: only-for react

要应用配置选项，请将它们作为 [`HotTable`](@/guides/getting-started/installation/installation.md#_4-use-the-hottable-component) 或 [`HotColumn`](@ /guides/columns/react-hot-column/react-hot-column.md）组件。

```jsx
<HotTable
  autoWrapRow={true}
  autoWrapCol={true}
  licenseKey="non-commercial-and-evaluation"
  data={[
    ['A1', 'B1', 'C1', 'D1'],
    ['A2', 'B2', 'C2', 'D2'],
    ['A3', 'B3', 'C3', 'D3'],
  ]}
  width={400}
  height={300}
  colHeaders={true}
  rowHeaders={true}
  customBorders={true}
  dropdownMenu={true}
  multiColumnSorting={true}
  filters={true}
  manualRowMove={true}
/>
```

:::

根据您的需要，您可以将配置选项应用于网格的不同元素，例如：
- [整个网格](#set-grid-options)
- [单个列](#set-column-options)
- [单独行](#set-row-options)
- [单个单元格](#set-cell-options)
- [单独的网格元素，基于您实现的任何逻辑](#implement-custom-logic)

有关可用配置选项的完整列表，请参阅[配置选项的 API 参考](@/api/options.md)。

### 级联配置

Handsontable的配置向下级联：
- 从顶级网格选项（[`GlobalMeta`](https://github.com/handsontable/handsontable/blob/master/handsontable/src/dataMap/metaManager/metaLayers/globalMeta.js)）
- 通过中级列选项（[`ColumnMeta`](https://github.com/handsontable/handsontable/blob/master/handsontable/src/dataMap/metaManager/metaLayers/columnMeta.js)）
- 到底层单元格选项（[`CellMeta`](https://github.com/handsontable/handsontable/blob/master/handsontable/src/dataMap/metaManager/metaLayers/cellMeta.js)）

当您修改中级列选项时（使用 [`columns`](@/api/options.md#columns) 选项）：
- 您更改的选项将覆盖顶级网格选项。
- 您更改的选项会级联到底层单元格选项。
- 任何未更改的选项均继承自顶级网格选项。

当您修改底层单元格选项时（使用 [`cell`](@/api/options.md#cell) 选项）：
- 您更改的选项将覆盖顶级网格选项。
- 您更改的选项将覆盖中级列选项。
- 任何未更改的选项均继承自中级列选项或顶级网格选项。
  
当您使用 [`cells`](@/api/options.md#cells) 函数修改任何选项时，所做的更改会覆盖所有其他选项。

::: tip

[`cells`](@/api/options.md#cells) 选项是在 Handsontable 的[渲染周期](@/guides/optimization/batch-operations/batch-operations.md) 之前调用的函数。如果实施不当，可能会降低 Handsontable 的速度。仅当 [`cell`](@/api/options.md#cell) 选项、[`columns`](@/api /options.md#columns) 选项和 [`setCellMeta()`](#change-cell-options) 方法不能满足您的需求。

:::

有关Handsontable的级联配置的更多详细信息，请参阅[MetaManager类](https://github.com/handsontable/handsontable/blob/master/handsontable/src/dataMap/metaManager/index.js)。

### 插件选项

配置选项可以来自：
- Handsontable的[核心](@/api/core.md)
- Handsontable 的 [插件](@/api/plugins.md)
- Handsontable 的 [hooks](@/api/hooks.md)

如果您通过 [modules](@/guides/tools-and-building/modules/modules.md) 使用 Handsontable：要使用来自 Handsontable 插件的选项，您需要在初始化 Handsontable 实例时导入并注册该插件。

要查明选项是否来自插件，请检查 [配置选项 API 参考](@/api/options.md) 中的`类别`标签。

## 设置网格选项



::: only-for javascript

要将配置选项应用于整个网格，请使用对象文字表示法将选项作为 Handsontable 构造函数的第二个参数传递。

:::

::: only-for react

要将配置选项应用于整个网格，请将您的选项作为 [`HotTable`](@/guides/getting-started/installation/installation.md#_4-use-the-hottable-component) 或 [` HotColumn`](@/guides/columns/react-hot-column/react-hot-column.md) 组件。

:::

例如，设置整个网格的[宽度](@/api/options.md#width)和[高度](@/api/options.md#height)：

::: only-for javascript

```js
const hot = new Handsontable(container, {
  // 适用于整个网格的顶级网格选项
  width: 400,
  height: 300
});
```

:::

::: only-for react

```jsx
<HotTable width={400} height={300} />
```

:::

#### 例子

要将网格中的每个单元格配置为只读，请将 [`readOnly`](@/api/options.md#readonly) 选项应用为顶级网格选项。

顶级网格选项向下级联：
- 到中层栏选项
- 到底层单元格选项

因此，网格中的每个单元格都是只读的：

::: only-for javascript

::: example #example1 --js 1 --ts 2

@[code](@/content/guides/getting-started/configuration-options/javascript/example1.js)
@[code](@/content/guides/getting-started/configuration-options/javascript/example1.ts)

:::

:::

::: only-for react

::: example #example1 :react --js 1 --ts 2

@[code](@/content/guides/getting-started/configuration-options/react/example1.jsx)
@[code](@/content/guides/getting-started/configuration-options/react/example1.tsx)

:::

:::

## 设置列选项

要将配置选项应用于单个列（或一系列列），请使用 [`columns`](@/api/options.md#columns) 选项。

::: only-for javascript

  ```js
  const hot = new Handsontable(container, {
    columns: [
      {},
      {},
      // 列选项，应用于第三（按物理索引）列的每个单元格
      {
        readOnly: true,
      },
    ],
  });
```

:::

::: only-for react

```jsx
<HotTable
  columns={[
    {width: 100}, // 第一列（按物理索引）的列选项
    {width: 100}, // 第二列（按物理索引）的列选项
    {width: 100}, // 第三列（按物理索引）的列选项
  ]}
/>
```
或者，您可以使用 [`HotColumn`](@/guides/columns/react-hot-column/react-hot-column.md) 组件以声明方式配置列：
```jsx
<HotTable>
  <HotColumn width={100}/>
  <HotColumn width={100}/>
  <HotColumn width={100}/>
</HotTable>
```

:::

#### 例子

在下面的示例中，[`columns`](@/api/options.md#columns) 选项设置为一个函数。

该函数将 [`readOnly: true`](@/api/options.md#readonly) 选项应用于物理索引为`2`或`8`的每个列。

修改后的中层列选项：
- 覆盖顶级网格选项
- 级联到底层单元格选项

因此，第三列和第九列中的每个单元格都是只读的：

::: only-for javascript

::: example #example2 --js 1 --ts 2

@[code](@/content/guides/getting-started/configuration-options/javascript/example2.js)
@[code](@/content/guides/getting-started/configuration-options/javascript/example2.ts)

:::

:::

::: only-for react

::: example #example2 :react --js 1 --ts 2

@[code](@/content/guides/getting-started/configuration-options/react/example2.jsx)
@[code](@/content/guides/getting-started/configuration-options/react/example2.tsx)

:::

:::

## 设置行选项

要将配置选项应用于单个行（或一系列行），请使用 [`cells`](@/api/options.md#cells) 选项。

通过 [`cells`](@/api/options.md#cells) 修改的任何选项都会覆盖所有其他选项。

::: only-for javascript

该函数可以采用三个参数：<br>
- `row`：行坐标（物理索引）
- `col`：列坐标（物理索引）
- `prop`：如果你的 [`data`](@/api/options.md#data) 是一个 [对象数组](@/guides/getting-started/binding-to-data/binding-to-data.md#array-of-objects)，`prop` 是列的数据源对象的属性名称。<br>
如果你的 [`data`](@/api/options.md#data) 是一个 [数组的数组](@/guides/getting-started/binding-to-data/binding-to-data.md#array-of-arrays），`prop` 与 `col` 相同。

```js
const hot = new Handsontable(container, {
  // `cells` 选项覆盖所有其他选项
  cells(row, col, prop) {
    if (row === 1 || row === 4) {
      return {
        // 行选项，适用于第二行的每个单元格
        // 以及第五行的每个单元格
        readOnly: true,
      };
    }
  }
});
```

:::

::: only-for react

该函数可以采用三个参数：<br>

- `row`：行坐标（物理索引）
- `col`：列坐标（物理索引）
- `prop`：如果你的 [`data`](@/api/options.md#data) 是
  一个[对象数组](@/guides/getting-started/binding-to-data/binding-to-data.md#array-of-objects)，`prop`是一个属性名称
  列的数据源对象。<br>
  如果你的 [`data`](@/api/options.md#data) 是
  一个[数组的数组](@/guides/getting-started/binding-to-data/binding-to-data.md#array-of-arrays)， `prop` 与 `col` 相同。
```jsx
<HotTable cells={(row, col, prop) => {
  if (row === 1 || row === 4) {
    return {
      // 行选项，适用于第二行的每个单元格
      // 以及第五行的每个单元格
      readOnly: true,
    };
  }
}}/>
```

:::

#### 例子

在下面的示例中， [`cells`](@/api/options.md#cells) 选项将第一行和第四行中的每个单元格设置为 [`readOnly`](@/api/options.md#readonly)。

通过 [`cells`](@/api/options.md#cells) 修改的选项将覆盖所有其他选项。

::: only-for javascript

::: example #example3 --js 1 --ts 2

@[code](@/content/guides/getting-started/configuration-options/javascript/example3.js)
@[code](@/content/guides/getting-started/configuration-options/javascript/example3.ts)

:::

:::

::: only-for react

::: example #example3 :react --js 1 --ts 2

@[code](@/content/guides/getting-started/configuration-options/react/example3.jsx)
@[code](@/content/guides/getting-started/configuration-options/react/example3.tsx)

:::

:::

## 设置单元格选项

要将配置选项应用于单个单元，请使用 [`cell`](@/api/options.md#cell) 选项。

::: only-for javascript

```js
const hot = new Handsontable(container, {
  cell: [
    {
      // 单元格选项，仅适用于坐标为 (0, 0) 的单元格
      row: 0,
      col: 0,
      readOnly: true,
    },
    {
      // 单元格选项，仅适用于坐标为 (1, 1) 的单元格
      row: 1,
      col: 1,
      readOnly: true,
    }
  ],
  autoWrapRow: true,
  autoWrapCol: true,
});
```

:::

::: only-for react

```jsx
<HotTable cell={[
  { // 底层单元格选项覆盖顶层网格选项
    // 仅适用于坐标为 (0, 0) 的单元格
    row: 0,
    col: 0,
  },
  {
    // 底层单元格选项覆盖顶层网格选项
    // 仅适用于坐标为 (1, 1) 的单元格
    row: 1,
    col: 1,
  }
]}/>
```

:::

#### 例子

在下面的示例中， [`cell`](@/api/options.md#cell) 选项将单元格 `A1`(`0, 0`) 和单元格 `B2`(`1, 1`) 设置为 [`只读`](@/api/options.md#readonly)。

修改后的 [`cell`](@/api/options.md#cell) 选项：
- 覆盖顶级网格选项
- 覆盖中级列选项

::: only-for javascript

::: example #example4 --js 1 --ts 2

@[code](@/content/guides/getting-started/configuration-options/javascript/example4.js)
@[code](@/content/guides/getting-started/configuration-options/javascript/example4.ts)

:::

:::

::: only-for react

::: example #example4 :react --js 1 --ts 2

@[code](@/content/guides/getting-started/configuration-options/react/example4.jsx)
@[code](@/content/guides/getting-started/configuration-options/react/example4.tsx)

:::

:::

### 读取单元格选项

当 Handsontable 运行时，您可以使用 [`getCellMeta()`](@/api/core.md#getcellmeta) 方法检查单元格的当前选项。

[`getCellMeta()`](@/api/core.md#getcellmeta) 方法返回一个对象，其中包含：
- 所有内置选项（存储在 [`CellMeta`](https://github.com/handsontable/handsontable/blob/master/handsontable/src/dataMap/metaManager/metaLayers/cellMeta.js) [原型]( https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes））
- 您添加的任何选项

例如：

::: only-for javascript

```js
import Handsontable from 'handsontable';
import 'handsontable/styles/handsontable.css';
import 'handsontable/styles/ht-theme-main.css';

const container = document.querySelector('#example');
const hot = new Handsontable(container, {
  // 适用于整个网格的顶级网格选项
  data: [
    ['A1', 'B1', 'C1', 'D1'],
    ['A2', 'B2', 'C2', 'D2'],
    ['A3', 'B3', 'C3', 'D3'],
  ],
  licenseKey: 'non-commercial-and-evaluation',
  width: 'auto',
  height: 'auto',
  rowHeaders: true,
  colHeaders: true,
  // 在顶级网格选项中，所有单元格都是只读的
  readOnly: false,
  cell: [
    {
      // 底层单元格选项覆盖顶层网格选项
      // 仅适用于坐标为 (1, 1) 的单元格
      row: 1,
      col: 1,
      readOnly: true,
    }
  ]
});

// 对于单元格 (0, 0)，`readOnly`选项是默认值 (`false`)
// returns `false`
hot.getCellMeta(0, 0).readOnly;

// 对于单元格 (1, 1)，`cell`选项覆盖默认的`readOnly`值
// returns `true`
hot.getCellMeta(1, 1).readOnly;
```

:::

::: only-for react

```jsx
// 考虑声明了 `cell` 选项的 HotTable 组件：
<HotTable
  cell={[
    {
      row: 1,
      col: 1,
      readOnly: true
    }
  ]}
/>

// 对于单元格 (0, 0)，`readOnly`选项是默认值 (`false`)
// returns `false`
hot.getCellMeta(0, 0).readOnly;

// 对于单元格 (1, 1)，`cell`选项覆盖默认的`readOnly`值
// returns `true`
hot.getCellMeta(1, 1).readOnly;
```

:::

### 更改单元格选项

当 Handsontable 运行时，您可以使用 [`setCellMeta()`](@/api/core.md#setcellmeta) 方法更改初始单元格选项。

例如：

::: only-for javascript

```js
import Handsontable from 'handsontable';
import 'handsontable/styles/handsontable.css';
import 'handsontable/styles/ht-theme-main.css';

const container = document.querySelector('#example');
const hot = new Handsontable(container, {
  // 适用于整个网格的顶级网格选项
  data: [
    ['A1', 'B1', 'C1', 'D1'],
    ['A2', 'B2', 'C2', 'D2'],
    ['A3', 'B3', 'C3', 'D3'],
  ],
  licenseKey: 'non-commercial-and-evaluation',
  width: 'auto',
  height: 'auto',
  rowHeaders: true,
  colHeaders: true,
  // 在顶级网格选项中，所有单元格都是只读的
  readOnly: false,
  cell: [
    {
      // 底层单元格选项覆盖顶层网格选项
      // 仅适用于坐标为 (1, 1) 的单元格
      row: 1,
      col: 1,
      readOnly: true,
    }
  ]
});

// 对于单元格 (0, 0)，`readOnly`选项是默认值 (`false`)
// returns `false`
hot.getCellMeta(0, 0).readOnly;

// 对于单元格 (1, 1)，`cell`选项覆盖默认的`readOnly`值
// returns `true`
hot.getCellMeta(1, 1).readOnly;
```

:::

::: only-for react

```jsx
// 将单元格 (1, 1) 的 `readOnly` 选项更改回 `false`
hot.setCellMeta(1, 1, 'readOnly', false);

// returns `false`
hot.getCellMeta(1, 1).readOnly;
```

:::

## 实现自定义逻辑

您可以根据您实现的任何逻辑，使用 [`cells`](@/api/options.md#cells) 选项将配置选项应用于各个网格元素（列、行、单元格）。

[`cells`](@/api/options.md#cells) 选项会覆盖所有其他选项。

::: only-for javascript

该函数可以采用三个参数：<br>
   - `row`：行坐标（物理索引）
   - `col`：列坐标（物理索引）
   - `prop`：如果你的 [`data`](@/api/options.md#data) 是一个 [对象数组](@/guides/getting-started/binding-to-data/binding-to-data.md#array-of-objects)，`prop` 是列的数据源对象的属性名称。<br>
   如果你的 [`data`](@/api/options.md#data) 是一个 [数组的数组](@/guides/getting-started/binding-to-data/binding-to-data.md#array-of-arrays），`prop` 与 `col` 相同。

```js
const hot = new Handsontable(container, {
  cells(row, col) {
    if ((row === 1 || row === 5) && col === 1) {
      return {
        readOnly: true,
      };
    }
  }
});
```

:::

::: only-for react

该函数可以采用三个参数：<br>

- `row`：行坐标（物理索引）
- `col`：列坐标（物理索引）
- `prop`：如果你的 [`data`](@/api/options.md#data) 是
  一个[对象数组](@/guides/getting-started/binding-to-data/binding-to-data.md#array-of-objects)，`prop`是一个属性名称
  列的数据源对象。<br>
  如果你的 [`data`](@/api/options.md#data) 是
  一个[数组的数组](@/guides/getting-started/binding-to-data/binding-to-data.md#array-of-arrays)， `prop` 与 `col` 相同。
```jsx
<HotTable
  cells={(row, col) => {
    if ((row === 1 || row === 5) && col === 1) {
      return {
        readOnly: true,
      };
    }
  }}
/>
```

:::
#### 例子

在下面的示例中，修改后的 [`cells`](@/api/options.md#cells) 选项将覆盖顶级网格选项。

::: only-for javascript

::: example #example5 --js 1 --ts 2

@[code](@/content/guides/getting-started/configuration-options/javascript/example5.js)
@[code](@/content/guides/getting-started/configuration-options/javascript/example5.ts)

:::

:::

::: only-for react

```jsx
// 对于单元格 (0, 0)，`readOnly`选项是默认值 (`false`)
// returns `false`
hot.getCellMeta(0, 0).readOnly;

// 对于单元格 (1, 1)，`cell`选项覆盖默认的`readOnly`值
// returns `true`
hot.getCellMeta(1, 1).readOnly;

// 将单元格 (1, 1) 的 `readOnly` 选项更改回 `false`
hot.setCellMeta(1, 1, 'readOnly', false);

// returns `false`
hot.getCellMeta(1, 1).readOnly;
```

:::

## 配置示例

在下面的示例中，某些单元格是只读的，而某些单元格是可编辑的：
- 默认情况下，所有单元格都是只读的（在顶级网格选项中设置）。
- 对于第一列，中级列选项将覆盖顶级网格选项。<br>
  因此，第一列单元格是可编辑的。
- 对于单元格`A1`（`0, 0`），底层单元格选项会覆盖中层列选项和顶层网格选项。<br>
  因此，单元格`A1`（`0, 0`）是只读的，尽管它是可编辑第一列的一部分。
- 对于单元格 `C3` (`3, 3`)，[`cells`](@/api/options.md#cells) 选项会覆盖所有其他选项。<br>
  因此，单元格`C3`(`3, 3`) 是可编辑的，尽管它不是可编辑第一列的一部分。

::: only-for javascript

::: example #example6 --js 1 --ts 2

@[code](@/content/guides/getting-started/configuration-options/javascript/example6.js)
@[code](@/content/guides/getting-started/configuration-options/javascript/example6.ts)

:::

:::

::: only-for react

::: example #example6 :react --js 1 --ts 2

@[code](@/content/guides/getting-started/configuration-options/react/example6.jsx)
@[code](@/content/guides/getting-started/configuration-options/react/example6.tsx)

:::

:::


## 相关API参考

- 配置选项:
  - [List of all options](@/api/options.md)
  - [`cell`](@/api/options.md#cell)
  - [`cells`](@/api/options.md#cells)
  - [`columns`](@/api/options.md#columns)
- 核心方法:
  - [`getCellMeta()`](@/api/core.md#getcellmeta)
  - [`getCellMetaAtRow()`](@/api/core.md#getcellmetaatrow)
  - [`getCellsMeta()`](@/api/core.md#getcellsmeta)
  - [`setCellMeta()`](@/api/core.md#setcellmeta)
  - [`setCellMetaObject()`](@/api/core.md#setcellmetaobject)
  - [`removeCellMeta()`](@/api/core.md#removecellmeta)
  - [`getSettings()`](@/api/core.md#getsettings)
  - [`removeCellMeta()`](@/api/core.md#removecellmeta)
  - [`updateSettings()`](@/api/core.md#updatesettings)
  - [`spliceCellsMeta()`](@/api/core.md#splicecellsmeta)
- Hooks:
  - [`afterCellMetaReset`](@/api/hooks.md#aftercellmetareset)
  - [`afterUpdateSettings`](@/api/hooks.md#afterupdatesettings)
