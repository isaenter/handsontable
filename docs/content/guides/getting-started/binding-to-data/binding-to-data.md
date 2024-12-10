---
id: 66g0jo36
title: 绑定到数据
metaTitle: Binding to data - JavaScript Data Grid | Handsontable
description: Use Handsontable's configuration options or API methods to fill your data grid with various data structures, including an array of arrays or an array of objects.
permalink: /binding-to-data
canonicalUrl: /binding-to-data
tags:
  - data binding
  - data connect
  - data sources
react:
  id: umdq9b9j
  metaTitle: Binding to data - React Data Grid | Handsontable
searchCategory: Guides
category: Getting started
---

# 绑定到数据

使用各种数据结构填充数据网格，包括数组的数组或对象的数组。

[[toc]]

## 兼容的数据类型

### 数组的数组

对于更多类似网格的场景，数组的数组是一个不错的选择，在这些场景中，您需要向最终用户提供操作网格的权限，例如插入列、删除行、装饰单元格等。

::: only-for javascript

::: example #example1 --js 1 --ts 2

@[code](@/content/guides/getting-started/binding-to-data/javascript/example1.js)
@[code](@/content/guides/getting-started/binding-to-data/javascript/example1.ts)

:::

:::

::: only-for react

::: example #example1 :react --js 1 --ts 2

@[code](@/content/guides/getting-started/binding-to-data/react/example1.jsx)
@[code](@/content/guides/getting-started/binding-to-data/react/example1.tsx)

:::

:::

### 具有选择性显示列的数组数组

以下示例显示如何使用数组的数组来选择性显示列。此场景使用与上一个示例相同的数据源，这次省略了网格中的`Tesla`列。

::: only-for javascript

::: example #example2 --js 1 --ts 2

@[code](@/content/guides/getting-started/binding-to-data/javascript/example2.js)
@[code](@/content/guides/getting-started/binding-to-data/javascript/example2.ts)

:::

:::

::: only-for react

::: example #example2 :react --js 1 --ts 2

@[code](@/content/guides/getting-started/binding-to-data/react/example2.jsx)
@[code](@/content/guides/getting-started/binding-to-data/react/example2.tsx)

:::

:::

### 对象数组

对象数组可以用作数据源，如下所示：

::: only-for javascript

::: example #example3 --js 1 --ts 2

@[code](@/content/guides/getting-started/binding-to-data/javascript/example3.js)
@[code](@/content/guides/getting-started/binding-to-data/javascript/example3.ts)

:::

:::

::: only-for react

::: example #example3 :react --js 1 --ts 2

@[code](@/content/guides/getting-started/binding-to-data/react/example3.jsx)
@[code](@/content/guides/getting-started/binding-to-data/react/example3.tsx)

:::

:::

### 以列作为函数的对象数组

您可以将 [`columns`](@/api/options.md#columns) 配置选项设置为函数。当您想要更动态地绑定数据时，这是一个很好的做法。

::: only-for javascript

::: example #example4 .custom-class --js 1 --ts 2

@[code](@/content/guides/getting-started/binding-to-data/javascript/example4.js)
@[code](@/content/guides/getting-started/binding-to-data/javascript/example4.ts)

:::

:::

::: only-for react

::: example #example4 .custom-class :react --js 1 --ts 2

@[code](@/content/guides/getting-started/binding-to-data/react/example4.jsx)
@[code](@/content/guides/getting-started/binding-to-data/react/example4.tsx)

:::

:::

### 具有列映射的对象数组

在具有嵌套对象的场景中，您可以通过使用 [`columns`](@/api/options.md#columns) 选项映射列，将它们用作数据源。

::: only-for javascript

::: example #example5 --js 1 --ts 2

@[code](@/content/guides/getting-started/binding-to-data/javascript/example5.js)
@[code](@/content/guides/getting-started/binding-to-data/javascript/example5.ts)

:::

:::

::: only-for react

::: example #example5 :react --js 1 --ts 2

@[code](@/content/guides/getting-started/binding-to-data/react/example5.jsx)
@[code](@/content/guides/getting-started/binding-to-data/react/example5.tsx)

:::

:::

### 具有自定义数据模式的对象数组

当使用对象数据绑定时，Handsontable 需要知道添加新行时要创建什么数据结构。如果您的数据源至少包含一行，Handsontable 将根据第一行计算出数据结构。

在从空数据源开始的情况下，您需要提供 [`dataSchema`](@/api/options.md#dataschema) 选项，其中包含添加到网格的任何新行的数据结构。下面的示例显示了具有空数据源的自定义数据架构：

::: only-for javascript

::: example #example6 --js 1 --ts 2

@[code](@/content/guides/getting-started/binding-to-data/javascript/example6.js)
@[code](@/content/guides/getting-started/binding-to-data/javascript/example6.ts)

:::

:::

::: only-for react

::: example #example6 :react --js 1 --ts 2

@[code](@/content/guides/getting-started/binding-to-data/react/example6.jsx)
@[code](@/content/guides/getting-started/binding-to-data/react/example6.tsx)

:::

:::

### 函数数据源和架构

如果您的 [`dataSchema`](@/api/options.md#dataschema) 是一个不直接公开其成员的对象的构造函数，您可以为 [`data`](@/api/options.md#data) 每个 [`columns`](@/api/options.md#columns) 项的成员。

下面的示例展示了如何使用此类对象：

::: only-for javascript

::: example #example7 --js 1 --ts 2

@[code](@/content/guides/getting-started/binding-to-data/javascript/example7.js)
@[code](@/content/guides/getting-started/binding-to-data/javascript/example7.ts)

:::

:::

::: only-for react

::: example #example7 :react --js 1 --ts 2

@[code](@/content/guides/getting-started/binding-to-data/react/example7.jsx)
@[code](@/content/guides/getting-started/binding-to-data/react/example7.tsx)

:::

:::

### 没有数据

默认情况下，如果您不提供任何数据，Handsontable 会呈现为空的 5x5 网格。

::: only-for javascript

::: example #example9 --js 1 --ts 2

@[code](@/content/guides/getting-started/binding-to-data/javascript/example9.js)
@[code](@/content/guides/getting-started/binding-to-data/javascript/example9.ts)

:::

:::

::: only-for react

::: example #example9 :react --js 1 --ts 2

@[code](@/content/guides/getting-started/binding-to-data/react/example9.jsx)
@[code](@/content/guides/getting-started/binding-to-data/react/example9.tsx)

:::

:::

要更改默认呈现的行数或列数，请使用 [`startRows`](@/api/options.md#startrows) 和 [`startCols`](@/api/options.md#startcols) 选项。

## 数据操作 API 方法

### 理解绑定作为参考

Handsontable 通过引用而不是值绑定到您的数据源。我们不复制输入数据集，我们依赖
JavaScript 来处理对象。输入到网格中的任何数据都会改变原始数据源。

::: tip

Handsontable 使用引用初始化表的源数据，但您不应该依赖它。为了
例如，您不应使用对输入数据集的引用来更改源数据中的值。一些机制
处理数据没有为以这种方式进行的外部更改做好准备。

:::

为了避免这种情况，请在将数据传递到网格之前复制数据。要从 Handsontable 外部更改数据，您
可以使用我们的API方法。例如，调用后，所做的更改将立即显示在屏幕上
[`setDataAtCell()`](@/api/core.md#setdataatcell) 方法。

::: only-for javascript

::: example #example10 --js 1 --ts 2

@[code](@/content/guides/getting-started/binding-to-data/javascript/example10.js)
@[code](@/content/guides/getting-started/binding-to-data/javascript/example10.ts)

:::

:::

::: only-for react

::: example #example10 :react --js 1 --ts 2

@[code](@/content/guides/getting-started/binding-to-data/react/example10.jsx)
@[code](@/content/guides/getting-started/binding-to-data/react/example10.tsx)

:::

:::

您可以通过多种方式将数据插入 Handsontable。让我们来看看最有用的：

### [`data`](@/api/options.md#data) 配置选项

::: only-for javascript

您可能希望使用一些数据初始化表格（如果不这样做，表格将为您呈现一个空的 5x5 网格）。最简单的方法是将数据数组作为初始配置对象中的 [`data`](@/api/options.md#data) 选项传递：
```js
const hot = new Handsontable(container, {
  data: newDataset,
  // ...其他配置选项
});
```

:::

::: only-for react

您可能想要用一些数据初始化表格（如果不这样做，表格将呈现一个空的 5x5 网格
你）。最简单的方法是将数据数组作为 `HotTable` 的 [`data`](@/api/options.md#data) 属性的值传递：
```jsx
<HotTable data={newDataset} />
```

:::

### 数据加载API方法

::: only-for react

::: tip

要使用 Handsontable API，您需要访问 Handsontable 实例。您可以通过使用参考来做到这一点
到`HotTable`组件，并读取其`hotInstance`属性。

有关更多信息，请参阅[实例方法](@/guides/getting-started/react-methods/react-methods.md)页面。
:::

:::

要替换已初始化的 Handsontable 实例中的整个数据，您可以使用其中一种数据加载 API 方法：
- [`loadData()`](@/api/core.md#loaddata)<br>
  将 Handsontable 中使用的数据替换为作为方法参数提供的数据集。 <br> **注意：**从版本 `12.0.0` 开始，此方法会导致表重置其配置选项和索引映射器信息，因此自初始化以来在表上完成的一些工作可能会丢失。
  ```js
  hot.loadData(newDataset);
  ```
- [`updateData()`](@/api/core.md#updatedata)<br>
  将 Handsontable 中使用的数据替换为作为方法参数提供的数据集。与 [`loadData()`](@/api/core.md#loaddata) 不同，[`updateData()`](@/api/core.md#updatedata) 不会重置配置选项和/或索引映射器信息，因此可以安全地使用它来仅替换数据，而使表的其余部分保持不变。
  ```js
  hot.updateData(newDataset);
  ```
- [`updateSettings()`](@/api/core.md#updatesettings)<br>
  更新表的配置，[`updateSettings()`](@/api/core.md#updatesettings)也可以用来替换正在使用的数据。从版本 `12.0.0` 开始，它在底层使用 [`updateData()`](@/api/core.md#updatedata) 方法来执行数据替换（除了在初始化期间完成的一个自动调用之外，它使用 [`loadData()`](@/api/core.md#loaddata))。
  ```js
  hot.updateSettings({
    data: newDataset,
    // ... 其他配置选项
  });
  ```

### 数据修改API方法

要仅修改传递给 Handsontable 的数据子集，您可能需要查看以下方法：

- [`setDataAtCell()`](@/api/core.md#setdataatcell)<br>
  替换单个单元格中的数据或执行一系列单单元格数据替换：
  ```js
  // 将 (0, 2) 视觉坐标处的单元格内容（0 是视觉行索引，2 -视觉列索引）替换为提供的值。
  hot.setDataAtCell(0, 2, 'New Value');

  // 将`(0,2)`、`(1,2)`和`(2,2)`处的单元格替换为提供的值。
  const changes = [
    [0, 2, 'New Value'],
    [1, 2, 'Different Value'],
    [2, 2, 'Third Replaced Value'],
  ];
  hot.setDataAtCell(changes);
  ```

- [`setDataAtRowProp()`](@/api/core.md#setdataatrowprop)<br>
  替换单个单元格中的数据或执行一系列单单元格数据替换，类似于`setDataAtCell()`，但允许通过可视行索引和数据行*属性*来定位单元格。对于[对象数组数据类型](#array-of-objects) 很有用。
  ```js
  // 将 (0, 'title') 坐标处的单元格内容（0 是可视行索引，'title' -数据行对象属性）替换为提供的值。
  hot.setDataAtRowProp(0, 'title', 'New Value');

  // 将第一行中具有 'id'、'firstName' 和 'lastName' 属性的单元格替换为提供的值。
  const changes = [
    [0, 'id', '22'],
    [0, 'firstName', 'John'],
    [0, 'lastName', 'Doe'],
  ];
  hot.setDataAtRowProp(changes);
  ```

- [`setSourceDataAtCell()`](@/api/core.md#setsourcedataatcell)<br>
  由于显示的数据坐标可能与其内部存储的方式不同，有时您可能需要更直接地定位单元格 -这时候 [`setSourceDataAtCell()`](@/api/core.md#setsourcedataatcell) 就派上用场了。 `row` 和 `columns`/`prop` 参数代表*物理*索引。
  ```js
  // 将 (0, 2) 坐标处的单元格内容（0 是物理行索引，2 -物理列索引）替换为提供的值。
  hot.setSourceDataAtCell(0, 2, 'New Value');

  // 将 (0, 'title') 坐标处的单元格内容（0 是物理行索引，'title' -数据行属性）替换为提供的值。
  hot.setSourceDataAtCell(0, 'title', 'New Value');

  // 将第一个物理行中的单元格替换为具有提供的值的 'id'、'firstName' 和 'lastName' 属性。
  const changes = [
    [0, 'id', '22'],
    [0, 'firstName', 'John'],
    [0, 'lastName', 'Doe'],
  ];
  hot.setSourceDataAtCell(changes);
  ```
- [`populateFromArray()`](@/api/core.md#populatefromarray)<br>
  通过提供起始（和可选的结束）坐标和新值的二维数据数组来替换数据集的一部分。

  ::: tip

  [`populateFromArray()`](@/api/core.md#populatefromarray) 方法无法更改[只读](@/guides/cell-features/disabled-cells/disabled-cells.md) 单元格。

  :::

  ```js
  const newValues = [
    ['A', 'B', 'C'],
    ['D', 'E', 'F']
  ];

  // 将 (1, 1) 到 (2, 3) 视觉单元坐标中的值替换为`newValues`数组中的值。
  hot.populateFromArray(1, 1, newValues);

  // 将 (1, 1) 到 (2, 2) 视觉单元坐标中的值替换为`newValues`数组中的值，忽略超出定义范围的值。
  hot.populateFromArray(1, 1, newValues, 2, 2);
  ```

## 使用数据副本

使用 Handsontable 的数据副本时，最佳做法是在将数据源加载到 Handsontable 之前克隆数据源。这可以使用 JSON.parse(JSON.stringify(data)) 或其他深度克隆函数来完成。

::: only-for javascript

::: example #example11 --js 1 --ts 2

@[code](@/content/guides/getting-started/binding-to-data/javascript/example11.js)
@[code](@/content/guides/getting-started/binding-to-data/javascript/example11.ts)

:::

:::

::: only-for react
::: example #example11 :react --js 1 --ts 2

@[code](@/content/guides/getting-started/binding-to-data/react/example11.jsx)
@[code](@/content/guides/getting-started/binding-to-data/react/example11.tsx)

:::

:::


## 相关API参考

- 配置选项:
  - [`data`](@/api/options.md#data)
  - [`dataSchema`](@/api/options.md#dataschema)
- 核心方法:
  - [`alter()`](@/api/core.md#alter)
  - [`clear()`](@/api/core.md#clear)
  - [`getData()`](@/api/core.md#getdata)
  - [`getDataAtCell()`](@/api/core.md#getdataatcell)
  - [`getDataAtCol()`](@/api/core.md#getdataatcol)
  - [`getDataAtProp()`](@/api/core.md#getdataatprop)
  - [`getDataAtRow()`](@/api/core.md#getdataatrow)
  - [`getDataAtRowProp()`](@/api/core.md#getdataatrowprop)
  - [`getSchema()`](@/api/core.md#getschema)
  - [`getSourceData()`](@/api/core.md#getsourcedata)
  - [`getSourceDataArray()`](@/api/core.md#getsourcedataarray)
  - [`getSourceDataAtCell()`](@/api/core.md#getsourcedataatcell)
  - [`getSourceDataAtCol()`](@/api/core.md#getsourcedataatcol)
  - [`getSourceDataAtRow()`](@/api/core.md#getsourcedataatrow)
  - [`loadData()`](@/api/core.md#loaddata)
  - [`populateFromArray()`](@/api/core.md#populatefromarray)
  - [`setDataAtCell()`](@/api/core.md#setdataatcell)
  - [`setDataAtRowProp()`](@/api/core.md#setdataatrowprop)
  - [`setSourceDataAtCell()`](@/api/core.md#setsourcedataatcell)
  - [`updateData()`](@/api/core.md#updatedata)
  - [`updateSettings()`](@/api/core.md#updatesettings)
- Hooks:
  - [`afterCellMetaReset`](@/api/hooks.md#aftercellmetareset)
  - [`afterChange`](@/api/hooks.md#afterchange)
  - [`afterLoadData`](@/api/hooks.md#afterloaddata)
  - [`afterSetDataAtCell`](@/api/hooks.md#aftersetdataatcell)
  - [`afterSetDataAtRowProp`](@/api/hooks.md#aftersetdataatrowprop)
  - [`afterSetSourceDataAtCell`](@/api/hooks.md#aftersetsourcedataatcell)
  - [`afterUpdateData`](@/api/hooks.md#afterupdatedata)
  - [`afterUpdateSettings`](@/api/hooks.md#afterupdatesettings)
  - [`beforeLoadData`](@/api/hooks.md#beforeloaddata)
  - [`beforeUpdateData`](@/api/hooks.md#beforeupdatedata)
  - [`modifyData`](@/api/hooks.md#modifydata)
  - [`modifyRowData`](@/api/hooks.md#modifyrowdata)
  - [`modifySourceData`](@/api/hooks.md#modifysourcedata)
