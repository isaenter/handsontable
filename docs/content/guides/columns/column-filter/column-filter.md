---
id: 3xxlonuv
title: 列过滤器
metaTitle: Column filter - JavaScript Data Grid | Handsontable
description: Filter your data by values or by a set of conditions.
permalink: /column-filter
canonicalUrl: /column-filter
tags:
  - filter
  - filtering
  - data filtering
  - dynamic filter
  - operator
  - criteria
  - conditions
  - expression
  - subset of data
  - excel filter
  - advanced filter
  - dropdown
react:
  id: vz7ct2bv
  metaTitle: Column filter - React Data Grid | Handsontable
searchCategory: Guides
category: Columns
---

# 列过滤器

使用 Handsontable 直观的用户界面或按值或一组条件过滤数据
灵活的API。

[[toc]]

## 概述

过滤可让您根据特定条件快速找到所需的信息。
这使得数据分析变得更容易、更快，尤其是对于大型数据集。

Handsontable 的内置过滤界面类似于 Excel 的界面，因此即使是
非技术用户。如果你想实现自己的接口，你可以轻松过滤数据
使用 Handsontable 的 API 以编程方式进行。

您可以按值过滤数据，或使用内置条件，每个条件的条件都不同
可用的列类型。

## 过滤演示

单击列菜单按钮之一 (▼)，然后通过选择值或进行过滤
基于条件的标准。

过滤后，该列将其宽度重新调整为屏幕上显示的最长值。禁用
这种行为，设置
[固定列宽](@/guides/columns/column-width/column-width.md#set-the-column-width-as-a-constant).

::: only-for javascript

::: example #exampleFilterBasicDemo --html 1 --js 2 --ts 3

@[code](@/content/guides/columns/column-filter/javascript/exampleFilterBasicDemo.html)
@[code](@/content/guides/columns/column-filter/javascript/exampleFilterBasicDemo.js)
@[code](@/content/guides/columns/column-filter/javascript/exampleFilterBasicDemo.ts)

:::

:::

::: only-for react

::: example #exampleFilterBasicDemo :react --js 1 --ts 2

@[code](@/content/guides/columns/column-filter/react/exampleFilterBasicDemo.jsx)
@[code](@/content/guides/columns/column-filter/react/exampleFilterBasicDemo.tsx)

:::

:::

## 启用过滤

要为所有列启用过滤接口，您需要做两件事：

1. 将`filters`选项设置为`true`。
2. 通过将`dropdownMenu`选项设置为`true`来启用该界面。

如果您打算创建自己的过滤器，则在没有界面的情况下启用`过滤器`选项可能会很有用
使用 API 进行过滤的自定义接口。

::: only-for javascript

```js
const configurationOptions = {
  // 启用过滤
  filters: true,
  // 启用列菜单
  dropdownMenu: true,
};
```

:::

::: only-for react

```jsx
<HotTable
  // 启用过滤
  filters={true}
  // 启用列菜单
  dropdownMenu={true}
/>
```

:::

<span style="display: none;"></span>

默认情况下，列菜单显示过滤界面以及其他默认项目，例如
**向左插入列**。如果只显示过滤界面，则传入一个过滤项数组
配置。

::: only-for javascript

::: example #exampleShowFilterItemsOnly --html 1 --js 2 --ts 3

@[code](@/content/guides/columns/column-filter/javascript/exampleShowFilterItemsOnly.html)
@[code](@/content/guides/columns/column-filter/javascript/exampleShowFilterItemsOnly.js)
@[code](@/content/guides/columns/column-filter/javascript/exampleShowFilterItemsOnly.ts)

:::

:::

::: only-for react

::: example #exampleShowFilterItemsOnly :react --js 1 --ts 2

@[code](@/content/guides/columns/column-filter/react/exampleShowFilterItemsOnly.jsx)
@[code](@/content/guides/columns/column-filter/react/exampleShowFilterItemsOnly.tsx)

:::

:::

### 启用单个列的过滤

您可以控制哪些列是可过滤的以及为哪些列启用列菜单。
在下面的演示中，只有 **Brand**列是可过滤的，而其他列则不可过滤。
但是，**模型**列仍然具有可用的列菜单，以防您想要一些
菜单中的有用项目，例如**清除列**。

::: only-for javascript

::: example #exampleEnableFilterInColumns --html 1 --js 2 --ts 3

@[code](@/content/guides/columns/column-filter/javascript/exampleEnableFilterInColumns.html)
@[code](@/content/guides/columns/column-filter/javascript/exampleEnableFilterInColumns.js)
@[code](@/content/guides/columns/column-filter/javascript/exampleEnableFilterInColumns.ts)

:::

:::

::: only-for react

::: example #exampleEnableFilterInColumns :react --js 1 --ts 2

@[code](@/content/guides/columns/column-filter/react/exampleEnableFilterInColumns.jsx)
@[code](@/content/guides/columns/column-filter/react/exampleEnableFilterInColumns.tsx)

:::

:::

## 过滤不同类型的数据

凭借其内置的单元格类型，Handsontable 可以轻松处理常见的数据类型，例如文本、
通过提供大量配置选项来获取数字和日期。另外，还有过滤功能
旨在理解底层数据并提供适合的自适应接口
每种数据类型。

::: only-for javascript

::: example #exampleFilterDifferentTypes --html 1 --js 2 --ts 3

@[code](@/content/guides/columns/column-filter/javascript/exampleFilterDifferentTypes.html)
@[code](@/content/guides/columns/column-filter/javascript/exampleFilterDifferentTypes.js)
@[code](@/content/guides/columns/column-filter/javascript/exampleFilterDifferentTypes.ts)

:::

:::

::: only-for react

::: example #exampleFilterDifferentTypes :react --js 1 --ts 2

@[code](@/content/guides/columns/column-filter/react/exampleFilterDifferentTypes.jsx)
@[code](@/content/guides/columns/column-filter/react/exampleFilterDifferentTypes.tsx)

:::

:::

下表包含每个内置数据类型的所有可用过滤器运算符。

| 单元格类型                                                       | 可用的过滤器运算符                                                                       |
| ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| 所有单元格类型                                                   | 默认运算符：<br><br>无<br>为空<br>不为空<br>等于<br>不等于                               |
| text<br>time<br>checkbox<br>dropdown<br>autocomplete<br>password | 默认运算符加：<br><br>开头为<br>结尾为<br>包含<br>不包含                                 |
| numeric                                                          | 默认运算符加：<br><br>大于<br>大于或等于<br>小于<br>小于或等于<br>介于之间<br>不介于之间 |
| date                                                             | 默认运算符加：<br><br>之前<br>之后<br>介于<br>明天<br>今天<br>昨天                       |

## 初始化时过滤数据

您可以过滤 Handsontable 初始化的数据。这使您可以应用预定义的过滤器
启动网格的时间。

::: only-for javascript

为此，您可以使用 Handsontable 的 [`afterInit()`](@/api/hooks.md#afterinit) 钩子，以及
Filters 插件提供的 API。例如，下面的演示演示了如何开始
带有预先应用的过滤器，仅显示价格低于 200 美元的商品。

::: example #exampleFilterOnInitialization --html 1 --js 2 --ts 3

@[code](@/content/guides/columns/column-filter/javascript/exampleFilterOnInitialization.html)
@[code](@/content/guides/columns/column-filter/javascript/exampleFilterOnInitialization.js)
@[code](@/content/guides/columns/column-filter/javascript/exampleFilterOnInitialization.ts)

:::

:::

::: only-for react

为此，请使用 [`Filters`](@/api/filters.md) 插件提供的 API。例如，演示
下面演示了如何从预应用的过滤器开始仅显示价格较低的商品
超过 200 美元。

::: example #exampleFilterOnInitialization :react --js 1 --ts 2

@[code](@/content/guides/columns/column-filter/react/exampleFilterOnInitialization.jsx)
@[code](@/content/guides/columns/column-filter/react/exampleFilterOnInitialization.tsx)

:::

:::

## 外部快速过滤器

Handsontable 的快速过滤功能可让您在特定列中搜索特定短语。到
实现这一点，使用方法 [`filters.addCondition()`](@/api/filters.md#addcondition) 和
[`filters.filter()`](@/api/filters.md#filter)。

::: only-for javascript

::: example #exampleQuickFilter --html 1 --js 2 --ts 3 --css 4

@[code](@/content/guides/columns/column-filter/javascript/exampleQuickFilter.html)
@[code](@/content/guides/columns/column-filter/javascript/exampleQuickFilter.js)
@[code](@/content/guides/columns/column-filter/javascript/exampleQuickFilter.ts)
@[code](@/content/guides/columns/column-filter/javascript/exampleQuickFilter.css)

:::

:::

::: only-for react

::: example #exampleQuickFilter :react --js 1 --css 2 --ts 3

@[code](@/content/guides/columns/column-filter/react/exampleQuickFilter.jsx)
@[code](@/content/guides/columns/column-filter/react/exampleQuickFilter.css)
@[code](@/content/guides/columns/column-filter/react/exampleQuickFilter.tsx)

:::

:::

## 自定义过滤按钮

打开列菜单的默认按钮可以通过修改 CSS 来设置样式
`button.changeType` 变量及其包含显示箭头的 svg mask-image 的 `::before` 伪类
向下图标。

::: only-for javascript

::: example #exampleCustomFilterButton --html 1 --js 2 --ts 3 --css 4

@[code](@/content/guides/columns/column-filter/javascript/exampleCustomFilterButton.html)
@[code](@/content/guides/columns/column-filter/javascript/exampleCustomFilterButton.js)
@[code](@/content/guides/columns/column-filter/javascript/exampleCustomFilterButton.ts)
@[code](@/content/guides/columns/column-filter/javascript/exampleCustomFilterButton.css)

:::

:::

::: only-for react

::: example #exampleCustomFilterButton :react --js 1 --css 2 --ts 3

@[code](@/content/guides/columns/column-filter/react/exampleCustomFilterButton.jsx)
@[code](@/content/guides/columns/column-filter/react/exampleCustomFilterButton.css)
@[code](@/content/guides/columns/column-filter/react/exampleCustomFilterButton.tsx)

:::

:::

列菜单按钮始终可见，但如果您希望它仅在鼠标光标移动时出现
在标题上，对`th .relative:hover .changeType`应用附加样式。

::: only-for javascript

::: example #exampleCustomFilterButton2 --html 1 --js 2 --ts 3 --css 4

@[code](@/content/guides/columns/column-filter/javascript/exampleCustomFilterButton2.html)
@[code](@/content/guides/columns/column-filter/javascript/exampleCustomFilterButton2.js)
@[code](@/content/guides/columns/column-filter/javascript/exampleCustomFilterButton2.ts)
@[code](@/content/guides/columns/column-filter/javascript/exampleCustomFilterButton2.css)

:::

:::

::: only-for react

::: example #exampleCustomFilterButton2 :react --js 1 --css 2 --ts 3

@[code](@/content/guides/columns/column-filter/react/exampleCustomFilterButton2.jsx)
@[code](@/content/guides/columns/column-filter/react/exampleCustomFilterButton2.css)
@[code](@/content/guides/columns/column-filter/react/exampleCustomFilterButton2.tsx)

:::

:::

## 更改过滤菜单的宽度

如果列中的文本数据太长而无法放入过滤器容器，您可以调整
列菜单的宽度以获得更好的用户体验。您可以通过样式来实现这一点
`.htDropdownMenu 表.htCore`。

```css
.handsontable .htDropdownMenu table.htCore {
  width: 300px !important;
}
```

## 从过滤中排除行

您可以从过滤中排除任意数量的顶行或底行。

在下面的演示中，第一行和最后一行是[冻结](@/guides/rows/row-freezing/row-freezing.md)，并且
过滤不会影响它们。

::: only-for javascript

::: example #exampleExcludeRowsFromFiltering --html 1 --js 2 --ts 3

@[code](@/content/guides/columns/column-filter/javascript/exampleExcludeRowsFromFiltering.html)
@[code](@/content/guides/columns/column-filter/javascript/exampleExcludeRowsFromFiltering.js)
@[code](@/content/guides/columns/column-filter/javascript/exampleExcludeRowsFromFiltering.ts)

:::

:::

::: only-for react

::: example #exampleExcludeRowsFromFiltering :react --js 1 --ts 2

@[code](@/content/guides/columns/column-filter/react/exampleExcludeRowsFromFiltering.jsx)
@[code](@/content/guides/columns/column-filter/react/exampleExcludeRowsFromFiltering.tsx)

:::

:::

## 服务器端过滤

您可以决定使用 Handsontable 作为直观的过滤界面，但执行实际的
在服务器上进行过滤。

为了帮助您，Handsontable 的 [`beforeFilter()`](@/api/hooks.md#beforefilter) 钩子允许
你：

-收集有关用户想要应用的过滤器的信息，并将其发送到服务器。
-禁用前端过滤，这样就不会干扰服务器上的过滤。

在下面的演示中，单击列菜单按钮之一 (▼) 并尝试按以下条件进行过滤
选择值或基于条件的标准。单击**确定**后，▼按钮变为绿色
表示过滤，但数据未过滤。相反，有关指定的信息
过滤器记录到控制台。

::: only-for javascript

::: example #exampleServerSideFilter --html 1 --js 2 --ts 3

@[code](@/content/guides/columns/column-filter/javascript/exampleServerSideFilter.html)
@[code](@/content/guides/columns/column-filter/javascript/exampleServerSideFilter.js)
@[code](@/content/guides/columns/column-filter/javascript/exampleServerSideFilter.ts)

:::

:::

::: only-for react

::: example #exampleServerSideFilter :react --js 1 --ts 2

@[code](@/content/guides/columns/column-filter/react/exampleServerSideFilter.jsx)
@[code](@/content/guides/columns/column-filter/react/exampleServerSideFilter.tsx)

:::

:::

## 以编程方式控制过滤

您可以使用 Handsontable 来控制网格运行时的过滤
[hooks](@/guides/getting-started/events-and-hooks/events-and-hooks.md) 和 [API 方法](@/api/filters.md#methods)。
这允许您根据特定条件启用或禁用过滤。例如，您可以
在网格之外创建一个用户界面来管理 Handsontable 的过滤行为。

### 以编程方式启用或禁用过滤

要以编程方式启用或禁用过滤，请使用
[`updateSettings()`](@/api/core.md#updatesettings) 方法。

::: only-for javascript

```js
handsontableInstance.updateSettings({
  // 启用过滤
  filters: true,
  // 启用列菜单
  dropdownMenu: true,
});

handsontableInstance.updateSettings({
  // 禁用过滤
  filters: false,
});
```

:::

::: only-for react

```jsx
const hotTableComponentRef = useRef(null);

hotTableComponentRef.current.hotInstance.updateSettings({
  // 启用过滤
  filters: true,
  // 启用列菜单
  dropdownMenu: true,
});

hotTableComponentRef.current.hotInstance.updateSettings({
  // 禁用过滤
  filters: false,
});
```

:::

您还可以启用或禁用特定列的过滤。例如，仅启用过滤
对于第一列：

::: only-for javascript

```js
handsontableInstance.updateSettings({
  // 为所有列启用过滤
  filters: true,
  // 为所有列启用列菜单
  // 但仅显示`按值过滤`列表以及`确定`和`取消`按钮
  dropdownMenu: {
    items: {
      filter_by_value: {
        // 隐藏除第一列之外的所有列中的`按值过滤`列表
        hidden() {
          return this.getSelectedRangeLast().to.col > 0;
        },
      },
      filter_action_bar: {
        // 隐藏除第一列之外的所有列中的`确定`和`取消`按钮
        hidden() {
          return this.getSelectedRangeLast().to.col > 0;
        },
      },
    },
  },
});
```

:::

::: only-for react

```jsx
const hotTableComponentRef = useRef(null);

hotTableComponentRef.current.hotInstance.updateSettings({
  // 对所有列启用过滤
  filters: true,
  // 启用所有列的列菜单
  // 但仅显示`按值过滤`列表以及`确定`和`取消`按钮
  dropdownMenu: {
    items: {
      filter_by_value: {
        // 隐藏除第一列之外的所有列中的`按值过滤`列表
        hidden() {
          return this.getSelectedRangeLast().to.col > 0;
        },
      },
      filter_action_bar: {
        // 隐藏除第一列之外的所有列中的`确定`和`取消`按钮
        hidden() {
          return this.getSelectedRangeLast().to.col > 0;
        },
      },
    },
  },
});
```

:::

### 以编程方式过滤数据

要以编程方式过滤数据，请使用 [`Filters`](@/api/filters.md) 插件的 API。记得
首先[启用过滤](#enable-filtering)。

请注意，在应用新的过滤条件之前，您需要使用以下命令清除以前的过滤条件：
[`filters.clearConditions()`](@/api/filters.md#clearconditions)。

::: only-for javascript

::: example #exampleFilterThroughAPI1 --html 1 --js 2 --ts 3

@[code](@/content/guides/columns/column-filter/javascript/exampleFilterThroughAPI1.html)
@[code](@/content/guides/columns/column-filter/javascript/exampleFilterThroughAPI1.js)
@[code](@/content/guides/columns/column-filter/javascript/exampleFilterThroughAPI1.ts)

:::

:::

::: only-for react

::: example #exampleFilterThroughAPI1 :react --js 1 --ts 2

@[code](@/content/guides/columns/column-filter/react/exampleFilterThroughAPI1.jsx)
@[code](@/content/guides/columns/column-filter/react/exampleFilterThroughAPI1.tsx)

:::

:::

## 导入过滤模块

您可以通过仅导入和注册来减小捆绑包的大小
您需要的[模块](@/guides/tools-and-building/modules/modules.md)。

要使用过滤，您只需要以下模块：

- [基本模块](@/guides/tools-and-building/modules/modules.md#import-the-base-module)
- [`Filters`](@/api/filters.md) 模块
- `DropdownMenu`](@/api/dropdownMenu.md) 模块

```js
// 导入基础模块
import Handsontable from 'handsontable/base';

// 导入 Handsontable 的 CSS
import 'handsontable/styles/handsontable.css';
import 'handsontable/styles/ht-theme-main.css';

// 导入过滤插件
import { registerPlugin, Filters, DropdownMenu } from 'handsontable/plugins';

// 注册过滤插件
registerPlugin(Filters);
registerPlugin(DropdownMenu);
```

## 已知的限制

目前，过滤具有以下限制：

- 没有简单的方法可以将自定义过滤器运算符添加到用户界面。
- 您可以过滤的值列表是自动生成的，并且没有受支持的方式修改它。

## 相关键盘快捷键

| Windows                             | macOS                                  | Action         |  Excel  | Sheets  |
| ----------------------------------- | -------------------------------------- | -------------- | :-----: | :-----: |
| <kbd>**Alt**</kbd>+<kbd>**A**</kbd> | <kbd>**Option**</kbd>+<kbd>**A**</kbd> | 清除所有过滤器 | &cross; | &cross; |

## API 参考

有关[选项](@/guides/getting-started/configuration-options/configuration-options.md)、方法和
[Handsontable hooks](@/guides/getting-started/events-and-hooks/events-and-hooks.md) 与过滤相关，请参阅
以下 API 参考页面：

- [`过滤器`](@/api/filters.md)
- [`DropdownMenu`](@/api/dropdownMenu.md)

## 故障排除

没有找到您需要的东西？试试这个：
- GitHub 上的[查看相关主题](https://github.com/handsontable/handsontable/labels/Filtering)
- GitHub 上的[报告问题](https://github.com/handsontable/handsontable/issues/new/choose)
- Stack Overflow 上的[提问](https://stackoverflow.com/questions/tagged/handsontable)
- 在 Handsontable 上 [开始讨论](https://forum.handsontable.com/c/getting-help/questions)论坛
- [联系我们的技术支持](https://handsontable.com/contact?category=technical_support)寻求帮助
