---
id: h840od8r
title: 单元格验证器
metaTitle: Cell validator - JavaScript Data Grid | Handsontable
description: Validate data added or changed by the user, with predefined or custom rules. Validation helps you make sure that the data matches the expected format.
permalink: /cell-validator
canonicalUrl: /cell-validator
react:
  id: fvou30a5
  metaTitle: Cell validator - React Data Grid | Handsontable
searchCategory: Guides
category: Cell functions
---

# 单元格验证器

使用预定义或自定义规则验证用户添加或更改的数据。验证可帮助您确保数据与预期格式匹配。

[[toc]]

## 概述

创建验证器时，一个好主意是将其指定为引用此特定验证器函数的别名。 Handsontable默认定义了5个别名：

- `autocomplete` 对应 `Handsontable.validators.AutocompleteValidator`
- `date` 对应 `Handsontable.validators.DateValidator`
- `dropdown` 对应 `Handsontable.validators.DropdownValidator`
- `numeric` 对应 `Handsontable.validators.NumericValidator`
- `time` 对应 `Handsontable.validators.TimeValidator`

它为用户提供了一种方便的方法来定义触发表验证时应使用哪个验证器。用户不需要知道哪个验证器函数负责检查单元格值，他甚至不需要知道有任何函数。此外，您可以更改与别名关联的验证器函数，而无需更改定义表的代码。

## 注册自定义单元格验证器

要注册您自己的别名，请使用 Handsontable.validators.registerValidator() 函数。它需要两个参数：

-`validatorName` -表示验证器函数的字符串
-`validator` -将由 `validatorName` 表示的验证器函数

如果您想在别名`credit-card`下注册`creditCardValidator`，您必须调用：

```js
Handsontable.validators.registerValidator('credit-card', creditCardValidator);
```

明智地选择别名。如果您使用已注册的名称注册验证器，则目标函数将被覆盖：

```js
Handsontable.validators.registerValidator('date', creditCardValidator);
```
现在`date`别名指向`creditCardValidator`函数，而不是`Handsontable.validators.DateValidator`。

因此，除非您有意要覆盖现有别名，否则请尝试选择一个唯一的名称。一个好的做法是在别名前添加一些自定义名称(例如您的 GitHub 用户名`)，以最大程度地减少名称冲突的可能性。如果您想发布验证器，这一点尤其重要，因为您永远不知道使用您的验证器的用户已经注册了别名。

```js
Handsontable.validators.registerValidator('credit-card', creditCardValidator);
```

有人可能已经注册了这样的别名。

```js
Handsontable.validators.registerValidator('my.credit-card', creditCardValidator);
```

这样更好。

## 使用别名

最后一步是使用注册的别名，以便用户可以轻松引用它，而无需现在实际的验证器函数。

总而言之，一个准备好的验证器函数应该如下所示：

```js
(Handsontable => {
  function customValidator(query, callback) {
    // ...您的验证器的自定义逻辑

    callback(/* 根据您的逻辑传递`true`或`false`*/);
  }

  // 注册别名
  Handsontable.validators.registerValidator('my.custom', customValidator);

})(Handsontable);
```

从现在开始，您可以像这样使用`customValidator`：

::: only-for javascript

```js
const container = document.querySelector('#container')
const hot = new Handsontable(container, {
  columns: [{
    validator: 'my.custom'
  }]
});
```

:::

::: only-for react

```jsx
<HotTable
  columns={[{
    validator: 'my.custom'
  }]}
/>
```

:::

## 全功能示例

使用验证器方法可以轻松验证对单元格的同步或异步更改。如果您需要更多控制，可以使用 [`beforeValidate`](@/api/hooks.md#beforevalidate) 和 [`afterValidate`](@/api/hooks.md#aftervalidate) 挂钩。在下面的示例中，`email_validator_fn`是一个异步验证器，在 1000 毫秒后解析。

使用 [`allowInvalid`](@/api/options.md#allowinvalid) 选项定义网格是否应接受未验证的输入。如果您需要修改输入(例如，审查不良单词、大写首字母`)，请使用插件钩子 [`beforeChange`](@/api/hooks.md#beforechange)。

默认情况下，所有无效单元格都由`htInvalid`CSS 类标记。如果你想将类更改为另一个类，你基本上可以将 `invalidCellClassName` 选项添加到 Handsontable 设置中。例如：
对于整个表

::: only-for javascript

```js
invalidCellClassName: 'myInvalidClass'
```

:::

::: only-for react

```jsx
invalidCellClassName="myInvalidClass"
```

对于特定列

::: only-for javascript

```js
columns: [
  { data: 'firstName', invalidCellClassName: 'myInvalidClass' },
  { data: 'lastName', invalidCellClassName: 'myInvalidSecondClass' },
  { data: 'address' }
]
```


::: only-for react

```jsx
columns={[
  { data: 'firstName', invalidCellClassName: 'myInvalidClass' },
  { data: 'lastName', invalidCellClassName: 'myInvalidSecondClass' },
  { data: 'address' }
]}
```

:::

回调控制台日志：

::: only-for javascript

::: example #example1 --js 2 --ts 3 --html 1

@[code](@/content/guides/cell-functions/cell-validator/javascript/example1.html)
@[code](@/content/guides/cell-functions/cell-validator/javascript/example1.js)
@[code](@/content/guides/cell-functions/cell-validator/javascript/example1.ts)

:::

:::

::: only-for react

::: example #example1 :react --js 1 --ts 2

@[code](@/content/guides/cell-functions/cell-validator/react/example1.jsx)
@[code](@/content/guides/cell-functions/cell-validator/react/example1.tsx)

:::

:::

编辑上面的网格以查看回调中的`changes`参数。

请注意，在从每个更改的单元格运行所有验证器(同步和异步`)后，将应用表中的更改。

## 相关API参考

- APIs:
  - [`BasePlugin`](@/api/basePlugin.md)
- 配置选项:
  - [`allowEmpty`](@/api/options.md#allowempty)
  - [`allowInvalid`](@/api/options.md#allowinvalid)
  - [`invalidCellClassName`](@/api/options.md#invalidcellclassname)
  - [`validator`](@/api/options.md#validator)
- 核心方法:
  - [`getCellMeta()`](@/api/core.md#getcellmeta)
  - [`getCellMetaAtRow()`](@/api/core.md#getcellmetaatrow)
  - [`getCellsMeta()`](@/api/core.md#getcellsmeta)
  - [`getCellValidator()`](@/api/core.md#getcellvalidator)
  - [`setCellMeta()`](@/api/core.md#setcellmeta)
  - [`setCellMetaObject()`](@/api/core.md#setcellmetaobject)
  - [`removeCellMeta()`](@/api/core.md#removecellmeta)
  - [`validateCell()`](@/api/core.md#validatecell)
  - [`validateCells()`](@/api/core.md#validatecells)
  - [`validateColumns()`](@/api/core.md#validatecolumns)
  - [`validateRows()`](@/api/core.md#validaterows)
- Hooks:
  - [`afterGetCellMeta`](@/api/hooks.md#aftergetcellmeta)
  - [`afterValidate`](@/api/hooks.md#aftervalidate)
  - [`beforeGetCellMeta`](@/api/hooks.md#beforegetcellmeta)
  - [`beforeValidate`](@/api/hooks.md#beforevalidate)
