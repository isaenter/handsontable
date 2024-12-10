---
id: 6o0zftmc
title: 行排序
metaTitle: Rows sorting - JavaScript Data Grid | Handsontable
description: Sort rows alphabetically or numerically, in ascending, descending or a custom order, by one or multiple columns.
permalink: /rows-sorting
canonicalUrl: /rows-sorting
tags:
  - sorting
  - row sorting
  - column sorting
  - columnSorting
  - multicolumn sorting
  - multi-column sorting
  - multiColumnSorting
  - row ordering
  - order by
  - sort ascending
  - sort descending
  - highest to lowest
  - unordered data
  - sortEmptyCells
  - data sorting
  - sort data
  - sort rows
  - sort columns
react:
  id: h4jfevxj
  metaTitle: Rows sorting - React Data Grid | Handsontable
searchCategory: Guides
category: Rows
---

# 行排序

按字母或数字、升序、降序或自定义顺序、一列或多列对数据进行排序。

[[toc]]

## 概述

通过排序，您可以根据特定列中的值轻松重新排列数据行。这对于分析和组织大型
数据集，可帮助您识别模式和趋势。

您可以通过不同的方式对数据进行排序：

- 按字母顺序、数字或基于自定义排序逻辑
- 按升序、降序或自定义顺序
- 按单列或多列
- 使用 Handsontable 的 UI 或 API

Handsontable 仅以视觉方式对数据进行排序，因此源数据仍保持原始顺序。要在数据源中保存排序更改，请参阅本指南：
[保存数据](@/guides/getting-started/saving-data/saving-data.md)。

## 排序演示

单击某一列名称可按升序 (↑) 或降序 (↓) 对值进行排序，或返回到原始顺序。

::: only-for javascript

::: example #exampleSortingDemo --html 1 --js 2 --ts 3

@[code](@/content/guides/rows/rows-sorting/javascript/exampleSortingDemo.html)
@[code](@/content/guides/rows/rows-sorting/javascript/exampleSortingDemo.js)
@[code](@/content/guides/rows/rows-sorting/javascript/exampleSortingDemo.ts)

:::

:::

::: only-for react

::: example #exampleSortingDemo :react --js 1 --ts 2

@[code](@/content/guides/rows/rows-sorting/react/exampleSortingDemo.jsx)
@[code](@/content/guides/rows/rows-sorting/react/exampleSortingDemo.tsx)

:::

:::

## 启用排序

要对所有列启用排序，请将 [`columnSorting`](@/api/options.md#columnsorting) 设置为 `true`。

::: only-for javascript

```js
const configurationOptions = {
  // 对所有列启用排序
  columnSorting: true,
};
```

:::

::: only-for react

```jsx
<HotTable
  // 对所有列启用排序
  columnSorting={true}
/>
```

:::

要仅对特定列启用排序，请将您不想排序的列的 [`headerAction`](@/api/options.md#columnsorting) 设置为 `false`。在
在以下示例中，只有 **型号**、**日期**和 **库存**列可排序。

::: only-for javascript

::: example #exampleEnableSortingForColumns --html 1 --js 2 --ts 3

@[code](@/content/guides/rows/rows-sorting/javascript/exampleEnableSortingForColumns.html)
@[code](@/content/guides/rows/rows-sorting/javascript/exampleEnableSortingForColumns.js)
@[code](@/content/guides/rows/rows-sorting/javascript/exampleEnableSortingForColumns.ts)

:::

:::

::: only-for react

::: example #exampleEnableSortingForColumns :react --js 1 --ts 2

@[code](@/content/guides/rows/rows-sorting/react/exampleEnableSortingForColumns.jsx)
@[code](@/content/guides/rows/rows-sorting/react/exampleEnableSortingForColumns.tsx)

:::

:::

## 配置排序

您可以配置排序 UI，设置[初始排序顺序](#set-an-initial-sort-order)，并实现您自己的[比较器](#add-a-custom-comparator)。

默认情况下：

- 对所有列启用排序。
- 最终用户可以通过单击列对数据进行排序name.
- 排序顺序指示器可见。
- 在 Handsontable 初始化时，没有对任何行进行排序。

您可以配置以下选项：

::: only-for javascript

```js
const configurationOptions = {
  columnSorting: {
    // 让最终用户通过单击列名称（默认设置）对数据进行排序
    headerAction: true,
    // 不对空单元格进行排序 -将包含空单元格的行移动到底部（默认设置）
    sortEmptyCells: false,
    // 启用列名称旁边显示的排序顺序图标（默认设置）
    indicator: true,

    // 初始化时，按第一列对数据进行降序排序
    initialConfig: {
      column: 1,
      sortOrder: 'desc',
    },

    // 实现你自己的比较器
    compareFunctionFactory(sortOrder, columnMeta) {
      return function (value, nextValue) {
        // 在这里，添加一个比较函数
        // 返回`-1`、`0`或`1`
      };
    },
  },
};
```

:::

::: only-for react

```jsx
<HotTable
  columnSorting={{
    // let the end user sort data by clicking on the column name (set by default)
    headerAction: true,
    // don't sort empty cells – move rows that contain empty cells to the bottom (set by default)
    sortEmptyCells: false,
    // enable the sort order icon that appears next to the column name (set by default)
    indicator: true,

    // at initialization, sort data by the first column, in descending order
    initialConfig: {
      column: 1,
      sortOrder: 'desc',
    },

    // implement your own comparator
    compareFunctionFactory(sortOrder, columnMeta) {
      return function(value, nextValue) {
        // here, add a compare function
        // that returns `-1`, or `0`, or `1`
      },
    },
  }}
/>
```

:::

## Sort different types of data

Handsontable sorts different [types of data](@/guides/cell-types/cell-type/cell-type.md#available-cell-types) automatically, based on which
[`type`](@/api/options.md#type) you configure for each column.

You can configure the following types:

- [`text`](@/guides/cell-types/cell-type/cell-type.md) gets sorted by default, so you don't have to configure it.
- [`numeric`](@/guides/cell-types/numeric-cell-type/numeric-cell-type.md)
- [`date`](@/guides/cell-types/date-cell-type/date-cell-type.md)
- [`time`](@/guides/cell-types/time-cell-type/time-cell-type.md)
- [`checkbox`](@/guides/cell-types/checkbox-cell-type/checkbox-cell-type.md)
- [`dropdown`](@/guides/cell-types/dropdown-cell-type/dropdown-cell-type.md)
- [`autocomplete`](@/guides/cell-types/autocomplete-cell-type/autocomplete-cell-type.md)
- [`password`](@/guides/cell-types/password-cell-type/password-cell-type.md)

::: only-for javascript

::: example #exampleSortDifferentTypes --html 1 --js 2 --ts 3

@[code](@/content/guides/rows/rows-sorting/javascript/exampleSortDifferentTypes.html)
@[code](@/content/guides/rows/rows-sorting/javascript/exampleSortDifferentTypes.js)
@[code](@/content/guides/rows/rows-sorting/javascript/exampleSortDifferentTypes.ts)

:::

:::

::: only-for react

::: example #exampleSortDifferentTypes :react --js 1 --ts 2

@[code](@/content/guides/rows/rows-sorting/react/exampleSortDifferentTypes.jsx)
@[code](@/content/guides/rows/rows-sorting/react/exampleSortDifferentTypes.tsx)

:::

:::

You can also create a custom type. For details, see this guide: [Cell type](@/guides/cell-types/cell-type/cell-type.md).

## Sort by multiple columns

You can sort data by more than one column, which lets you apply multiple sets of sort criteria at the same time.

To try out sorting by multiple columns, see the following demo:

1. Click on the **Brand** column name. The data gets sorted by brand.
2. Hold down <kbd>**Cmd**</kbd>/<kbd>**Ctrl**</kbd> and click on the **Model** column name.<br> The data gets sorted by model, but within each brand.
3. Hold down <kbd>**Cmd**</kbd>/<kbd>**Ctrl**</kbd> and click on the **Price** column name.<br> The data gets sorted by price, but within each model.

::: only-for javascript

::: example #exampleSortByMultipleColumns --html 1 --js 2 --ts 3

@[code](@/content/guides/rows/rows-sorting/javascript/exampleSortByMultipleColumns.html)
@[code](@/content/guides/rows/rows-sorting/javascript/exampleSortByMultipleColumns.js)
@[code](@/content/guides/rows/rows-sorting/javascript/exampleSortByMultipleColumns.ts)

:::

:::

::: only-for react

::: example #exampleSortByMultipleColumns :react --js 1 --ts 2

@[code](@/content/guides/rows/rows-sorting/react/exampleSortByMultipleColumns.jsx)
@[code](@/content/guides/rows/rows-sorting/react/exampleSortByMultipleColumns.tsx)

:::

:::

To enable sorting by multiple columns, set [`multiColumnSorting`](@/api/options.md#multicolumnsorting) to `true`.

::: only-for javascript

```js
const configurationOptions = {
  // enable sorting by multiple columns, for all columns
  multiColumnSorting: true,
};
```

:::

::: only-for react

```jsx
<HotTable
  // enable sorting by multiple columns, for all columns
  multiColumnSorting={true}
/>
```

:::

To select which columns can be sorted at the same time, set [`headerAction`](@/api/options.md#columnsorting) to `false` for those columns that you don't want to
sort.

::: only-for javascript

```js
const configurationOptions = {
  // enable sorting by multiple columns, for all columns
  multiColumnSorting: true,
  columns: [
    {
      // disable sorting by multiple columns for the first column
      multiColumnSorting: {
        headerAction: false,
      },
    },
};
```

:::

::: only-for react

```jsx
<HotTable
  // enable sorting by multiple columns, for all columns
  multiColumnSorting={true}
  columns={[
    {
      // disable sorting by multiple columns for the first column
      columnSorting: {
        headerAction: false,
      },
    },
  ]}
/>
```

:::

The [`columnSorting`](@/api/options.md#columnsorting) and [`multiColumnSorting`](@/api/options.md#multicolumnsorting) options are mutually exclusive; do not enable them together. If you do, [`columnSorting`](@/api/options.md#columnsorting) will be automatically disabled as it is overridden by [`multiColumnSorting`](@/api/options.md#multicolumnsorting).

## Set an initial sort order

You can set a default sort order that's applied every time you initialize Handsontable.

In the following demo, the data is initially sorted:

- By the **Brand** column, in ascending order
- By the **Model** column, in descending order

::: only-for javascript

::: example #exampleInitialSortOrder --html 1 --js 2 --ts 3

@[code](@/content/guides/rows/rows-sorting/javascript/exampleInitialSortOrder.html)
@[code](@/content/guides/rows/rows-sorting/javascript/exampleInitialSortOrder.js)
@[code](@/content/guides/rows/rows-sorting/javascript/exampleInitialSortOrder.ts)

:::

:::

::: only-for react

::: example #exampleInitialSortOrder :react --js 1 --ts 2

@[code](@/content/guides/rows/rows-sorting/react/exampleInitialSortOrder.jsx)
@[code](@/content/guides/rows/rows-sorting/react/exampleInitialSortOrder.tsx)

:::

:::

To set an initial sort order, use the [`initialConfig`](@/api/options.md#columnsorting) option.

::: only-for javascript

```js
const configurationOptions = {
  columnSorting: {
    // at initialization, sort data by the first column, in ascending order
    initialConfig: {
      column: 0,
      sortOrder: 'asc', // for descending order, use `'desc'`
    },
};
```

:::

::: only-for react

```jsx
<HotTable
  columnSorting={{
    // at initialization, sort data by the first column, in ascending order
    initialConfig: {
      column: 0,
      sortOrder: 'asc', // for descending order, use `'desc'`
    },
  }}
/>
```

:::

To initially sort data [by multiple columns](#sort-by-multiple-columns), set [`initialConfig`](@/api/options.md#columnsorting) to an array.

::: only-for javascript

```js
const configurationOptions = {
  // enable sorting by multiple columns
  multiColumnSorting: {
    initialConfig: [
      // at initialization, sort data by the first column, in ascending order
      {
        column: 0,
        sortOrder: 'asc',
      },
      // at initialization, sort data by the second column, in descending order
      {
        column: 1,
        sortOrder: 'desc',
      },
    ]
};
```

:::

::: only-for react

```jsx
<HotTable
  // enable sorting by multiple columns
  multiColumnSorting={{
    initialConfig: [
      // at initialization, sort data by the first column, in ascending order
      {
        column: 0,
        sortOrder: 'asc',
      },
      // at initialization, sort data by the second column, in descending order
      {
        column: 1,
        sortOrder: 'desc',
      },
    ],
  }}
/>
```

:::

## Add custom sort icons

The default sort icons (↑↓) are encoded in Base64. You can replace them by changing `background-image` for the following pseudo-elements of Handsontable's CSS:

- `.columnSorting.ascending::before`
- `.columnSorting.descending::before`

::: only-for javascript

::: example #exampleCustomSortIcons --html 1 --js 2 --ts 3 --css 4

@[code](@/content/guides/rows/rows-sorting/javascript/exampleCustomSortIcons.html)
@[code](@/content/guides/rows/rows-sorting/javascript/exampleCustomSortIcons.js)
@[code](@/content/guides/rows/rows-sorting/javascript/exampleCustomSortIcons.ts)
@[code](@/content/guides/rows/rows-sorting/javascript/exampleCustomSortIcons.css)

:::

:::

::: only-for react

::: example #exampleCustomSortIcons :react --js 1 --css 2 --ts 3

@[code](@/content/guides/rows/rows-sorting/react/exampleCustomSortIcons.jsx)
@[code](@/content/guides/rows/rows-sorting/react/exampleCustomSortIcons.css)
@[code](@/content/guides/rows/rows-sorting/react/exampleCustomSortIcons.tsx)

:::

:::

You can also replace the sort icons by changing `content` for the same pseudo-elements:

::: only-for javascript

::: example #exampleCustomSortIcons2 --html 1 --js 2 --ts 3 --css 4

@[code](@/content/guides/rows/rows-sorting/javascript/exampleCustomSortIcons2.html)
@[code](@/content/guides/rows/rows-sorting/javascript/exampleCustomSortIcons2.js)
@[code](@/content/guides/rows/rows-sorting/javascript/exampleCustomSortIcons2.ts)
@[code](@/content/guides/rows/rows-sorting/javascript/exampleCustomSortIcons2.css)

:::

:::

::: only-for react

::: example #exampleCustomSortIcons2 :react --js 1 --css 2 --ts 3

@[code](@/content/guides/rows/rows-sorting/react/exampleCustomSortIcons2.jsx)
@[code](@/content/guides/rows/rows-sorting/react/exampleCustomSortIcons2.css)
@[code](@/content/guides/rows/rows-sorting/react/exampleCustomSortIcons2.tsx)

:::

:::

To replace the icons that indicate sorting [by multiple columns](#sort-by-multiple-columns)
(<sub>1</sub>, <sub>2</sub> etc.), change `content` for the `.columnSorting.sort-1::after` and
subsequent pseudo-elements:

::: only-for javascript

::: example #exampleCustomSortIcons3 --html 1 --js 2 --ts 3 --css 4

@[code](@/content/guides/rows/rows-sorting/javascript/exampleCustomSortIcons3.html)
@[code](@/content/guides/rows/rows-sorting/javascript/exampleCustomSortIcons3.js)
@[code](@/content/guides/rows/rows-sorting/javascript/exampleCustomSortIcons3.ts)
@[code](@/content/guides/rows/rows-sorting/javascript/exampleCustomSortIcons3.css)

:::

:::

::: only-for react

::: example #exampleCustomSortIcons3 :react --js 1 --css 2 --ts 3

@[code](@/content/guides/rows/rows-sorting/react/exampleCustomSortIcons3.jsx)
@[code](@/content/guides/rows/rows-sorting/react/exampleCustomSortIcons3.css)
@[code](@/content/guides/rows/rows-sorting/react/exampleCustomSortIcons3.tsx)

:::

:::

## Add a custom comparator

A comparator is a function that determines the sort order, based on specified criteria.

Adding a custom comparator lets you go beyond Handsontable's built-in sorting features. You can:

- Apply a custom sort order. For example, instead of sorting data alphabetically or numerically, you can sort it by length or by the occurrence of a specific
  character.
- Handle exceptions. For example, in a list of employees, you can exclude workers with a specific job title from sorting.
- Implement a custom sorting logic based on your own criteria.

To add a custom comparator, use the [`compareFunctionFactory`](@/api/options.md#columnsorting) option.

::: only-for javascript

```js
const configurationOptions = {
  columnSorting: {
    compareFunctionFactory: function (sortOrder, columnMeta) {
      // implement your own comparator
      return function (value, nextValue) {
        if (value < nextValue) {
          return -1;
        }
        if (value > nextValue) {
          return 1;
        }

        return 0;
      };
    },
  },
};
```

:::

::: only-for react

```jsx
<HotTable
  columnSorting={{
    compareFunctionFactory: function (sortOrder, columnMeta) {
      // implement your own comparator
      return function (value, nextValue) {
        if (value < nextValue) {
          return -1;
        }
        if (value > nextValue) {
          return 1;
        }

        return 0;
      };
    },
  }}
/>
```

:::

## Use sorting hooks

You can run your code before or after sorting, using the following [Handsontable hooks](@/guides/getting-started/events-and-hooks/events-and-hooks.md):

- [`beforeColumnSort()`](@/api/hooks.md#beforecolumnsort)
- [`afterColumnSort()`](@/api/hooks.md#aftercolumnsort)

For example, you can use [`beforeColumnSort()`](@/api/hooks.md#beforecolumnsort) for server-side sorting, or use
[`afterColumnSort()`](@/api/hooks.md#aftercolumnsort) to [exclude rows from sorting](#exclude-rows-from-sorting).

::: only-for javascript

```js
const configurationOptions = {
  beforeColumnSort() {
    // add your code here
    return false; // to block front-end sorting
  },
  afterColumnSort() {
    // add your code here
  },
};
```

:::

::: only-for react

```jsx
<HotTable
  beforeColumnSort={
    // add your code here
    return false; // to block front-end sorting
  }
  afterColumnSort={
    // add your code here
  }
/>
```

:::

## Exclude rows from sorting

You can exclude any number of top or bottom rows from sorting.

For example, if you [freeze](@/guides/rows/row-freezing/row-freezing.md) a row at the top (to display column names), and freeze a row at the bottom (to display
[column summaries](@/guides/columns/column-summary/column-summary.md)), you can prevent those frozen rows from getting sorted, so they always stay in place.

::: only-for javascript

::: example #exampleExcludeRowsFromSorting --html 1 --js 2 --ts 3

@[code](@/content/guides/rows/rows-sorting/javascript/exampleExcludeRowsFromSorting.html)
@[code](@/content/guides/rows/rows-sorting/javascript/exampleExcludeRowsFromSorting.js)
@[code](@/content/guides/rows/rows-sorting/javascript/exampleExcludeRowsFromSorting.ts)

:::

:::

::: only-for react

::: example #exampleExcludeRowsFromSorting :react --js 1 --ts 2

@[code](@/content/guides/rows/rows-sorting/react/exampleExcludeRowsFromSorting.jsx)
@[code](@/content/guides/rows/rows-sorting/react/exampleExcludeRowsFromSorting.tsx)

:::

:::

## Control sorting programmatically

You can control sorting at the grid's runtime by using Handsontable's [hooks](@/guides/getting-started/events-and-hooks/events-and-hooks.md) and
[API methods](@/api/columnSorting.md#methods).

This allows you to:

- Enable or disable sorting depending on specified conditions. For example, you can disable sorting for very large data sets.
- Trigger sorting depending on the state of another component in your application. For example, you can let the end user sort data by clicking on buttons
  outside of the grid.

::: only-for react

To learn how to access Handsontable's API methods, see this guide: [Instance methods](@/guides/getting-started/react-methods/react-methods.md).

:::

### Enable or disable sorting programmatically

To enable or disable sorting programmatically, use the [`updateSettings()`](@/api/core.md#updatesettings) method.

::: only-for javascript

```js
// enable sorting for all columns
handsontableInstance.updateSettings({
  columnSorting: true,
});

// disable sorting for all columns
handsontableInstance.updateSettings({
  columnSorting: false,
});
```

:::

::: only-for react

```jsx
const hotTableComponentRef = useRef(null);

// enable sorting for all columns
hotTableComponentRef.current.hotInstance.updateSettings({
  columnSorting: true,
});

// disable sorting for all columns
hotTableComponentRef.current.hotInstance.updateSettings({
  columnSorting: false,
});
```

:::

You can also enable or disable sorting for specific columns.

::: only-for javascript

```js
handsontableInstance.updateSettings({
  columns: [
    {
      // enable sorting for the first column
      columnSorting: {
        headerAction: true,
      },
    },
    {
      // disable sorting for the second column
      columnSorting: {
        headerAction: false,
      },
    },
  ],
});
```

:::

::: only-for react

```jsx
const hotTableComponentRef = useRef(null);

hotTableComponentRef.current.hotInstance.updateSettings({
  columns: [
    {
      // enable sorting for the first column
      columnSorting: {
        headerAction: true,
      },
    },
    {
      // disable sorting for the second column
      columnSorting: {
        headerAction: false,
      },
    },
  ],
});
```

:::

### Sort data programmatically

To sort data programmatically, use the [`columnSorting.sort()`](@/api/columnSorting.md#sort) method. Remember to [enable sorting](#enable-sorting) first.

Mind that calling [`columnSorting.sort()`](@/api/columnSorting.md#sort) overwrites any previous sort orders.

::: only-for javascript

```js
const configurationOptions = {
  // enable sorting for all columns
  columnSorting: true,
};

const columnSorting = handsontableInstance.getPlugin('columnSorting');

columnSorting.sort(
  // sort data by the first column, in ascending order
  {
    column: 0,
    sortOrder: 'asc', // for descending order, use `'desc'`
  }
);

// go back to the original order
columnSorting.clearSort();
```

:::

::: only-for react

```jsx
<HotTable
  // enable sorting for all columns
  columnSorting={true}
  ref={hotTableComponentRef}
/>;

const hotTableComponentRef = useRef(null);
// get the `ColumnSorting` plugin
const columnSorting = hotTableComponentRef.current.hotInstance.getPlugin('columnSorting');

columnSorting.sort(
  // sort data by the first column, in ascending order
  {
    column: 0,
    sortOrder: 'asc', // for descending order, use `'desc'`
  }
);

// go back to the original order
columnSorting.clearSort();
```

:::

To see how it works, try out the following demo:

::: only-for javascript

::: example #exampleSortByAPI --html 1 --js 2 --ts 3

@[code](@/content/guides/rows/rows-sorting/javascript/exampleSortByAPI.html)
@[code](@/content/guides/rows/rows-sorting/javascript/exampleSortByAPI.js)
@[code](@/content/guides/rows/rows-sorting/javascript/exampleSortByAPI.ts)

:::

:::

::: only-for react

::: example #exampleSortByAPI :react --js 1 --ts 2

@[code](@/content/guides/rows/rows-sorting/react/exampleSortByAPI.jsx)
@[code](@/content/guides/rows/rows-sorting/react/exampleSortByAPI.tsx)

:::

:::

### Sort data programmatically by multiple columns

To sort data programmatically [by multiple columns](#sort-by-multiple-columns), use the [`multiColumnSorting.sort()`](@/api/multiColumnSorting.md#sort) method.
Remember to [enable](#sort-by-multiple-columns) sorting by multiple columns first.

Mind that calling [`multiColumnSorting.sort()`](@/api/multiColumnSorting.md#sort) overwrites any previous sort orders.

::: only-for javascript

```js
const configurationOptions = {
  // enable sorting by multiple columns, for all columns
  multiColumnSorting: true,
};

// get the `MultiColumnSorting` plugin
const multiColumnSorting = handsontableInstance.getPlugin('multiColumnSorting');

multiColumnSorting.sort([
  // sort data by the first column, in ascending order
  {
    column: 0,
    sortOrder: 'asc',
  },
  // within the above sort criteria,
  // sort data by the second column, in descending order
  {
    column: 1,
    sortOrder: 'desc',
  },
]);

// go back to the original order
multiColumnSorting.clearSort();
```

:::

::: only-for react

```jsx
<HotTable
  // enable sorting by multiple columns, for all columns
  multiColumnSorting={true}
  ref={hotTableComponentRef}
/>;

const hotTableComponentRef = useRef(null);
// get the `ColumnSorting` plugin
const multiColumnSorting = hotTableComponentRef.current.hotInstance.getPlugin('multiColumnSorting');

multiColumnSorting.sort([
  // sort data by the first column, in ascending order
  {
    column: 0,
    sortOrder: 'asc',
  },
  // within the above sort criteria,
  // sort data by the second column, in descending order
  {
    column: 1,
    sortOrder: 'desc',
  },
]);

// go back to the original order
multiColumnSorting.clearSort();
```

:::

To see how it works, try out the following demo:

::: only-for javascript

::: example #exampleSortByAPIMultipleColumns --html 1 --js 2 --ts 3

@[code](@/content/guides/rows/rows-sorting/javascript/exampleSortByAPIMultipleColumns.html)
@[code](@/content/guides/rows/rows-sorting/javascript/exampleSortByAPIMultipleColumns.js)
@[code](@/content/guides/rows/rows-sorting/javascript/exampleSortByAPIMultipleColumns.ts)

:::

:::

::: only-for react

::: example #exampleSortByAPIMultipleColumns :react --js 1 --ts 2

@[code](@/content/guides/rows/rows-sorting/react/exampleSortByAPIMultipleColumns.jsx)
@[code](@/content/guides/rows/rows-sorting/react/exampleSortByAPIMultipleColumns.tsx)

:::

:::

## Import the sorting module

You can reduce the size of your bundle by importing and registering only the [modules](@/guides/tools-and-building/modules/modules.md) that you need.

To use sorting, you need only the following modules:

- The [base module](@/guides/tools-and-building/modules/modules.md#import-the-base-module)
- The [`ColumnSorting`](@/api/columnSorting.md) module or the [`MultiColumnSorting`](@/api/multiColumnSorting.md) module

```js
// import the base module
import Handsontable from 'handsontable/base';

// import Handsontable's CSS
import 'handsontable/styles/handsontable.css';
import 'handsontable/styles/ht-theme-main.css';

// import the ColumnSorting plugin (or the MultiColumnSorting plugin)
import { registerPlugin, ColumnSorting } from 'handsontable/plugins';

// register the ColumnSorting (or MultiColumnSorting plugin)
registerPlugin(ColumnSorting);
```

## 相关键盘快捷键

| Windows                                  | macOS                                   | Action                                                                                                                                                   |  Excel  | Sheets  |
| ---------------------------------------- | --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | :-----: | :-----: |
| <kbd>**Enter**</kbd>                     | <kbd>**Enter**</kbd>                    | Sort data by the selected column, in ascending, descending, or the original order                                                                        | &cross; | &cross; |
| <kbd>**Ctrl**</kbd>+<kbd>**Enter**</kbd> | <kbd>**Cmd**</kbd>+<kbd>**Enter**</kbd> | Sort data by multiple columns, in ascending, descending, or the original order. Requires the [`MultiColumnSorting`](@/api/multiColumnSorting.md) plugin. | &cross; | &cross; |

## API reference

For the list of [options](@/guides/getting-started/configuration-options/configuration-options.md), methods, and [Handsontable hooks](@/guides/getting-started/events-and-hooks/events-and-hooks.md)
related to sorting, see the following API reference pages:

- [`ColumnSorting`](@/api/columnSorting.md)
- [`MultiColumnSorting`](@/api/multiColumnSorting.md)

## Troubleshooting

Didn't find what you need? Try this:

<div class="boxes-list gray">

- [View related topics](https://github.com/handsontable/handsontable/labels/Column%20sorting) on GitHub
- [Report an issue](https://github.com/handsontable/handsontable/issues/new/choose) on GitHub
- [Ask a question](https://stackoverflow.com/questions/tagged/handsontable) on Stack Overflow
- [Start a discussion](https://forum.handsontable.com/c/getting-help/questions) on Handsontable's forum
- [Contact our technical support](https://handsontable.com/contact?category=technical_support) to get help

</div>
