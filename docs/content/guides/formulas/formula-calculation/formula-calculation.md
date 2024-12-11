---
id: g7i1xok4
title: 公式计算
metaTitle: Formula calculation - JavaScript Data Grid | Handsontable
description: Perform calculations on cells' values, using a powerful calculation engine that handles nearly 400 functions, custom functions, named expressions, and more.
permalink: /formula-calculation
canonicalUrl: /formula-calculation
tags:
  - formulas
  - formula
  - excel
  - spreadsheet
  - worksheet
  - workbook
  - sheet
  - function
  - hyperformula
react:
  id: 05z3cjez
  metaTitle: Formula calculation - React Data Grid | Handsontable
searchCategory: Guides
category: Formulas
---

# 公式计算

使用强大的计算引擎对单元格的值进行计算,可处理近 400
函数、自定义函数、命名表达式等等.

[[toc]]

## 概述

_Formulas_ 插件为您提供基于使用以下公式的广泛计算功能
电子表格符号.在引擎盖下,它使用一个名为
[HyperFormula](https://hyperformula.handsontable.com/) 由 Handsontable 团队创建,作为
独立的库帮助开发人员构建复杂的数据管理应用程序.

该插件附带了一个包含 386 个函数的库,这些函数按类别分组,例如数学和
三角学、工程、统计、金融和逻辑.使用这些,您可以创建复杂的
商业应用程序等中的数据输入规则.以下是一些关于您可以用它做什么的想法:

- 功能齐全的电子表格应用程序
- 智能文档
- 教育应用程序
- 业务逻辑构建者
- 表格和表格生成器
- 在线计算器
- 低连接应用程序

## 基本的多表示例

您可以在单表模式下或在多个 Handsontable 实例中使用公式
跨表参考.

双击单元格打开编辑器并预览公式.

::: only-for javascript

::: example #example1 --html 1 --css 2 --js 3 --ts 4

@[code](@/content/guides/formulas/formula-calculation/javascript/example1.html)
@[code](@/content/guides/formulas/formula-calculation/javascript/example1.css)
@[code](@/content/guides/formulas/formula-calculation/javascript/example1.js)
@[code](@/content/guides/formulas/formula-calculation/javascript/example1.ts)

:::

:::

::: only-for react

::: example #example1 :react --css 1 --js 2 --ts 3

@[code](@/content/guides/formulas/formula-calculation/react/example1.css)
@[code](@/content/guides/formulas/formula-calculation/react/example1.jsx)
@[code](@/content/guides/formulas/formula-calculation/react/example1.tsx)

:::

:::

## 数据网格示例

此示例更典型的是数据网格而不是电子表格.计算存在于两个地方
– 在`到期总额(fx)`列和底部的摘要行中.

::: only-for javascript

::: example #example-data-grid --js 1 --ts 2

@[code](@/content/guides/formulas/formula-calculation/javascript/example-data-grid.js)
@[code](@/content/guides/formulas/formula-calculation/javascript/example-data-grid.ts)

:::

:::

::: only-for react

::: example #example-data-grid :react --js 1 --ts 2

@[code](@/content/guides/formulas/formula-calculation/react/example-data-grid.jsx)
@[code](@/content/guides/formulas/formula-calculation/react/example-data-grid.tsx)

:::

:::

## 初始化方法

有多种方法可以初始化公式插件.您可以选择最方便的一个
取决于您的用例.

在所有情况下,都需要传入 `HyperFormula` 对象或 HyperFormula 实例:

```js
import { HyperFormula } from 'hyperformula';
```

还有其他可用的安装方法.查看
[HyperFormula 的安装文档](https://handsontable.github.io/hyperformula/guide/client-side-installation.html).

::: tip HyperFormula instance

要将 [`Formulas`](@/api/formulas.md) 插件与外部 HyperFormula 实例结合使用,请初始化
带有`internal-use-in-handsontable`许可证密钥的 HyperFormula:

:::

```js
// 创建外部 HyperFormula 实例
const hyperformulaInstance = HyperFormula.buildEmpty({
  // 使用`internal-use-in-handsontable`许可证密钥对其进行初始化
  licenseKey: 'internal-use-in-handsontable',
});
```

### 将 HyperFormula 类/实例传递给 Handsontable

::: only-for javascript

```js
{
  formulas: {
    engine: HyperFormula,
    // [插件配置]
  }
}
```

:::

::: only-for react

```jsx
<HotTable
  formulas={{
    engine: HyperFormula,
    // [插件配置]
  }}
/>
```

:::

or

::: only-for javascript

```js
{
  formulas: {
    engine: {
      hyperformula: HyperFormula, // 或 `engine: hyperformulaInstance`
      leapYear1900: false,
      // ...以及更多引擎配置选项.
      // 请参阅https://handsontable.github.io/hyperformula/api/interfaces/configparams.html#number
    },
    // [插件配置]
  }
}
```

:::

::: only-for react

```jsx
<HotTable
  formulas={{
    engine: {
      hyperformula: HyperFormula, // 或 `engine: hyperformulaInstance`
      leapYear1900: false,
      // ...以及更多引擎配置选项.
      // 请参阅https://handsontable.github.io/hyperformula/api/interfaces/configparams.html#number
    },
    // [插件配置]
  }}
/>
```

:::

### 具有外部 HyperFormula 实例的单个 Handsontable 实例

::: only-for javascript

```js
const hyperformulaInstance = HyperFormula.buildEmpty({
  // 要使用外部 HyperFormula 实例,
  // 使用`internal-use-in-handsontable`许可证密钥对其进行初始化
  licenseKey: 'internal-use-in-handsontable',
});

{
  formulas: {
    engine: hyperformulaInstance;
  }
}
```

:::

::: only-for react

```jsx
const ExampleComponent = () => {
  const hyperformulaInstance = HyperFormula.buildEmpty({
    // 要使用外部 HyperFormula 实例,
    // 使用`internal-use-in-handsontable`许可证密钥对其进行初始化
    licenseKey: 'internal-use-in-handsontable',
  });

  return (
    <HotTable
      formulas={{
        engine: hyperformulaInstance,
      }}
    />
  );
};
```

:::

### 多个独立的 Handsontable 实例

::: only-for javascript

```js
// 实例1
{
  formulas: {
    engine: HyperFormula,
    // [插件配置]
  }
}

// 实例2
{
  formulas: {
    engine: HyperFormula,
    // [插件配置]
  }
}
```

:::

::: only-for react

```jsx
const ExampleComponent = () => {
  return (
    <>
      <HotTable
        formulas={{
          engine: HyperFormula,
          // [插件配置]
        }}
      />
      <HotTable
        formulas={{
          engine: HyperFormula,
          // [插件配置]
        }}
      />
    </>
  );
};
```

:::

::: only-for javascript

### 具有共享 HyperFormula 实例的多个 Handsontable 实例

```js
// 实例1
{
  formulas: {
    engine: HyperFormula,
    sheetName: 'Sheet1'
    // [插件配置]
  }
}

// 实例2
{
  formulas: {
    engine: hot1.getPlugin('formulas').engine,
    sheetName: 'Sheet2'
    // [插件配置]
  }
}
```

:::

### 具有外部共享 HyperFormula 实例的多个 Handsontable 实例

::: only-for javascript

```js
const hyperformulaInstance = HyperFormula.buildEmpty({
  // 要使用外部 HyperFormula 实例,
  // 使用`internal-use-in-handsontable`许可证密钥对其进行初始化
  licenseKey: 'internal-use-in-handsontable',
});

// 实例1
{
  formulas: {
    engine: hyperformulaInstance,
    sheetName: 'Sheet1'
    // [插件配置]
  }
}

// 实例2
{
  formulas: {
    engine: hyperformulaInstance,
    sheetName: 'Sheet2'
    // [插件配置]
  }
}
```

:::

::: only-for react

```jsx
const ExampleComponent = () => {
  const hyperformulaInstance = HyperFormula.buildEmpty({
    // 要使用外部 HyperFormula 实例,
    // 使用`internal-use-in-handsontable`许可证密钥对其进行初始化
    licenseKey: 'internal-use-in-handsontable',
  });

  return (
    <>
      <HotTable
        formulas={{
          engine: hyperformulaInstance,
          sheetName: 'Sheet1',
          // [插件配置]
        }}
      />
      <HotTable
        formulas={{
          engine: hyperformulaInstance,
          sheetName: 'Sheet2',
          // [插件配置]
        }}
      />
    </>
  );
};
```

:::

## 可用选项和方法

有关可用设置和方法的列表,请访问 [API 参考](@/api/formulas.md).

## 可用功能

该插件继承了_HyperFormula_的计算能力.完整功能参考
可以在
[HyperFormula 文档](https://handsontable.github.io/hyperformula/guide/built-in-functions.html).

## [`afterFormulasValuesUpdate`](@/api/hooks.md#afterformulasvaluesupdate) 钩子

该钩子侦听计算引擎中单元格的任何更改,包括依赖单元格
含有公式.

::: only-for javascript

```js
const afterFormulasValuesUpdate = (changes) => {
  changes.forEach((change) => {
    console.log('change', change.address, change.newValue);
  });
};

new Handsontable(element, {
  formulas: {
    engine: HyperFormula,
  },
  afterFormulasValuesUpdate,
});
```

:::

::: only-for react

```jsx
const ExampleComponent = () => {
  const afterFormulasValuesUpdate = (changes) => {
    changes.forEach((change) => {
      console.log('change', change.address, change.newValue);
    });
  };

  return (
    <HotTable
      formulas={{
        engine: HyperFormula,
      }}
      afterFormulasValuesUpdate={afterFormulasValuesUpdate}
    />
  );
};
```

:::

## 命名表达式

您可以在公式表达式中使用自定义命名的表达式.命名表达式可以是
引用绝对单元格地址的纯值或公式.要注册命名表达式,
将带有`名称`和`表达式`的数组传递给`公式`配置对象:

::: only-for javascript

::: example #example-named-expressions1 --html 1 --js 2 --ts 3

@[code](@/content/guides/formulas/formula-calculation/javascript/example-named-expressions1.html)
@[code](@/content/guides/formulas/formula-calculation/javascript/example-named-expressions1.js)
@[code](@/content/guides/formulas/formula-calculation/javascript/example-named-expressions1.ts)

:::

:::

[//]: # 'TODO: [react-docs] 需要重写输入提交逻辑'

::: only-for react

::: example #example-named-expressions1 :react --js 1 --ts 2

@[code](@/content/guides/formulas/formula-calculation/react/example-named-expressions1.jsx)
@[code](@/content/guides/formulas/formula-calculation/react/example-named-expressions1.tsx)

:::

:::

有关命名表达式的更多信息,请参阅
[HyperFormula 文档](https://hyperformula.handsontable.com/guide/cell-references.html#relative-references).

## 查看讲解视频

<iframe width="100%" height="425px" src="https://www.youtube.com/embed/JJXUmACTDdk"></iframe>

## 已知限制

- 使用 [`IndexMapper`](@/api/indexMapper.md) API 以编程方式[移动行](@/guides/rows/row-moving/row-moving.md) 或 [列](@/guides/columns/column-moving/column-moving.md).请改用 [`ManualRowMove`](@/api/manualRowMove.md) 或 [`ManualColumnMove`](@/api/manualColumnMove.md) API.
- 公式不支持 [`getSourceData()`](@/api/core.md#getsourcedata),因为此方法对源数据进行操作(使用 [物理索引](@/api/indexMapper.md)),而公式对视觉数据进行运算(使用视觉索引).
- 公式不支持嵌套数据,即,当 Handsontable 的 [`data`](@/api/options.md#data) 设置为 [嵌套对象数组](@/guides/getting-started/binding-to-data/binding-to-data.md#array-of-objects).

### HyperFormula 版本支持

不同版本的 Handsontable 支持不同版本的 HyperFormula.

要了解要使用的 HyperFormula 版本,请参阅下表:

| Handsontable 版本                                                                     | HyperFormula 版本                                                           |
| ------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| [`8.x.x`](https://github.com/handsontable/handsontable/releases/tag/8.0.0)和更低      | 不支持 HyperFormula                                                         |
| [`9.x.x`](https://github.com/handsontable/handsontable/releases/tag/9.0.0)            | [`0.6.2`](https://github.com/handsontable/hyperformula/releases/tag/0.6.2)  |
| [`10.x.x`](https://github.com/handsontable/handsontable/releases/tag/10.0.0)          | [`^1.2.0`](https://github.com/handsontable/hyperformula/releases/tag/1.2.0) |
| [`11.x.x`](https://github.com/handsontable/handsontable/releases/tag/11.0.0)          | [`^1.2.0`](https://github.com/handsontable/hyperformula/releases/tag/1.2.0) |
| [`12.x.x`](https://github.com/handsontable/handsontable/releases/tag/12.0.0)          | [`^2.0.0`](https://github.com/handsontable/hyperformula/releases/tag/2.0.0) |
| [`13.x.x`](https://github.com/handsontable/handsontable/releases/tag/13.0.0)          | [`^2.4.0`](https://github.com/handsontable/hyperformula/releases/tag/2.4.0) |
| [`14.x.x`](https://github.com/handsontable/handsontable/releases/tag/14.0.0)          | [`^2.4.0`](https://github.com/handsontable/hyperformula/releases/tag/2.4.0) |
| [`14.3.x - 14.6.x`](https://github.com/handsontable/handsontable/releases/tag/14.3.0) | [`^2.6.2`](https://github.com/handsontable/hyperformula/releases/tag/2.6.2) |
| [`15.x.x`](https://github.com/handsontable/handsontable/releases/tag/15.0.0) 及更高   | [`^2.6.2`](https://github.com/handsontable/hyperformula/releases/tag/2.6.2) |

::: tip

您只能在这些 HyperFormula 实例中使用`internal-use-in-handsontable`许可证密钥
连接到 Handsontable 实例.

要在 Handsontable 实例之外(例如,在服务器上)使用 HyperFormula,您需要一个专用的
[HyperFormula 许可证密钥](https://hyperformula.handsontable.com/guide/license-key.html).为了
详细信息,[联系我们的销售团队](https://handsontable.com/get-a-quote).

:::

## 相关文章

### HyperFormula 文档

<div class="boxes-list gray">

- [HyperFormula 指南](https://handsontable.github.io/hyperformula/)
- [HyperFormula API 参考](https://handsontable.github.io/hyperformula/api/)

</div>

### 相关博客文章

<div class="boxes-list gray">

- [Handsontable 9.0.0:新公式插件](https://handsontable.com/blog/handsontable-9.0.0-new-formula-plugin)
- [HyperFormula 中 8 个有用的 Excel 函数示例](https://handsontable.com/blog/8-examples-of-useful-excel-functions-in-hyperformula)

</div>

### 相关API参考

- 配置选项:
  - [`formulas`](@/api/options.md#formulas)
- Hooks:
  - [`afterFormulasValuesUpdate`](@/api/hooks.md#afterformulasvaluesupdate)
  - [`afterNamedExpressionAdded`](@/api/hooks.md#afternamedexpressionadded)
  - [`afterNamedExpressionRemoved`](@/api/hooks.md#afternamedexpressionremoved)
  - [`afterSheetAdded`](@/api/hooks.md#aftersheetadded)
  - [`afterSheetRemoved`](@/api/hooks.md#aftersheetremoved)
  - [`afterSheetRenamed`](@/api/hooks.md#aftersheetrenamed)
- 插件:
  - [`Formulas`](@/api/formulas.md)
