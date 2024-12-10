---
id: de2hxgso
title: 细胞类型
metaTitle: Cell type - JavaScript Data Grid | Handsontable
description: Use Handsontable's built-in cell types such as autocomplete, date, time, and more, for consistent UI across cell renderer, editor, and validator.
permalink: /cell-type
canonicalUrl: /cell-type
react:
  id: m60w87tn
  metaTitle: Cell type - React Data Grid | Handsontable
searchCategory: Guides
category: Cell types
---

# 细胞类型

使用 Handsontable 的内置单元格类型(例如自动完成、日期、时间等`)，在单元格渲染器、编辑器和验证器之间实现一致的 UI。

[[toc]]

## 概述

每个表格单元格关联三个函数：[`renderer`](@/api/options.md#renderer)、[`editor`](@/api/options.md#editor) 和可选的 [`validator` ](@/api/options.md#validator)。这些函数大多一起使用，因为它们紧密相连。

示例场景 -要将日期存储在单元格中，您可以：

- 使用 [`renderer`](@/api/options.md#renderer) 使用适当的格式`dd/mm/yyyy`、`yyyy-mm-dd`等显示日期。
- 使用显示日历而不是默认文本输入的[`编辑器`](@/api/options.md#editor)，允许用户轻松选择正确的日期。
- 使用 [`validator`](@/api/options.md#validator) 检查用户输入的值是否有效。

单元格类型由字符串表示，即`文本`、`数字`、`日期`。每个字符串在内部映射到与该类型关联的函数，例如`numeric`类型与以下函数关联：

- `Handsontable.renderers.NumericRenderer`
- `Handsontable.editors.TextEditor`
- `Handsontable.validators.NumericValidator`


当 Handsontable 遇到定义了 [`type`](@/api/options.md#type) 选项的单元格时，它会检查该类型引用了哪些单元格函数并使用它们。例如，将列类型设置为`密码`时：

::: only-for javascript

```js
columns: [{
  type: 'password'
}]
```

:::

::: only-for react

```jsx
columns={[{
  type: 'password'
}]}
```

:::

函数 [`editor`](@/api/options.md#editor)、[`renderer`](@/api/options.md#renderer) 和 [`copyable`](@/api/options.md #copyable) 自动设置如下：

::: only-for javascript

```js
columns: [{
  editor: Handsontable.editors.PasswordEditor
  renderer: Handsontable.renderers.PasswordRenderer,
  copyable: false,
}]
```

:::

::: only-for react

```jsx
columns={[{
  editor: Handsontable.editors.PasswordEditor
  renderer: Handsontable.renderers.PasswordRenderer,
  copyable: false,
}]}
```

:::

## 可用的细胞类型

Handsontable 有九种类型：

- ["autocomplete"](@/guides/cell-types/autocomplete-cell-type/autocomplete-cell-type.md) 或 `Handsontable.cellTypes.autocomplete`
- ["checkbox"](@/guides/cell-types/checkbox-cell-type/checkbox-cell-type.md) 或 `Handsontable.cellTypes.checkbox`
- ["date"](@/guides/cell-types/date-cell-type/date-cell-type.md) 或 `Handsontable.cellTypes.date`
- ["dropdown"](@/guides/cell-types/dropdown-cell-type/dropdown-cell-type.md) 或 `Handsontable.cellTypes.dropdown`
- ["handsontable"](@/guides/cell-types/handsontable-cell-type/handsontable-cell-type.md) 或 `Handsontable.cellTypes.handsontable`
- ["numeric"](@/guides/cell-types/numeric-cell-type/numeric-cell-type.md) 或 `Handsontable.cellTypes.numeric`
- ["password"](@/guides/cell-types/password-cell-type/password-cell-type.md) 或 `Handsontable.cellTypes.password`
- ["select"](@/guides/cell-types/select-cell-type/select-cell-type.md) 或 `Handsontable.cellTypes.select`
- ["time"](@/guides/cell-types/time-cell-type/time-cell-type.md) 或 `Handsontable.cellTypes.time`
- "text" 或 `Handsontable.cellTypes.text`

`文本`单元格类型是默认类型。

## 细胞类型的解剖

单元格类型是一组预定义的单元格属性。单元格类型定义了 [`renderer`](@/api/options.md#renderer)、[`editor`](@/api/options.md#editor) 或 [`validator`](@/api/options. md#validator) 应该用于单元格。他们还可以定义每个匹配单元格假定的任何不同的单元格属性：

```js
Handsontable.cellTypes.registerCellType('custom', {
  renderer: Handsontable.renderers.TextRenderer,
  className: 'my-cell',
  readOnly: true,
  myCustomProperty: 'foo'
});
```

在 Handsontable 设置中使用时：

::: only-for javascript

```js
columns: [{
  type: 'custom'
}]
```

:::

::: only-for react

```jsx
columns={[{
  type: 'custom'
}]}
```

:::

相当于定义它们全部：

::: only-for javascript

```js
columns: [{
  editor: false,
  renderer: Handsontable.renderers.TextRenderer,
  className: 'my-cell',
  readOnly: true,
  myCustomProperty: 'foo'
}]
```

:::

::: only-for react

```jsx
columns={[{
  editor: false,
  renderer: Handsontable.renderers.TextRenderer,
  className: 'my-cell',
  readOnly: true,
  myCustomProperty: 'foo',
}]}
```

:::

## 注册自定义单元格类型

创建自定义单元格类型时，最佳做法是将其指定为引用此特定类型定义的别名。

这为用户提供了一种方便的方法来定义应使用哪种细胞类型来描述细胞属性。用户不需要知道代码的哪一部分负责呈现、验证或编辑单元格值。他们甚至不需要知道有任何功能。您可以更改与别名关联的单元格行为，而无需更改定义单元格属性的代码。

要注册您自己的别名，请使用`Handsontable.cellTypes.registerCellType()`函数。它需要两个参数：

- `cellTypeName` -表示细胞类型对象的字符串
- [`type`](@/api/options.md#type) -带有键的对象 [`editor`](@/api/options.md#editor), [`renderer`](@/api/options.md#renderer) 和 [`validator`](@/api/options.md#validator) 将由 `cellTypeName` 表示
  
如果您想在别名`copyable-password`下注册`copyablePasswordType`，您需要调用：

```js
Handsontable.cellTypes.registerCellType('copyable-password', {
  editor: copyablePasswordEditor,
  renderer: copyablePasswordRenderer,
});
```

明智地选择别名。如果您使用已注册的名称注册单元格类型，则目标函数将被覆盖：

```js
Handsontable.cellTypes.registerCellType('password', {
  editor: copyablePasswordEditor,
  renderer: copyablePasswordRenderer,
});

// 现在`密码`别名指向新创建的
// 对象，而不是 Handsontable.cellTypes.password
```

除非您故意要覆盖现有别名，否则请尝试选择一个唯一的名称。最佳做法是为别名添加自定义名称前缀，以最大程度地减少名称冲突的可能性。如果您想要发布您的单元格类型，这一点尤其重要，因为您永远不知道使用您的单元格类型的用户注册了哪些别名。

```js
Handsontable.cellTypes.registerCellType('copyable-password', {
  editor: copyablePasswordEditor,
  renderer: copyablePasswordRenderer,
});
```
有人可能已经注册了这样的别名。最好使用唯一的前缀：

```js
Handsontable.cellTypes.registerCellType('my.copyable-password', {
  editor: copyablePasswordEditor,
  renderer: copyablePasswordRenderer,
});
```

总而言之，一个准备好的单元格类型对象应该是这样的：

```js
class MyEditor extends Handsontable.editors.TextEditor {}

function customRenderer(instance, td, row, column, prop, value, cellProperties) {
  // ...渲染器逻辑
}

function customValidator(query, callback) {
  // ...验证器逻辑
  callback(/* 传递 `true` 或 `false` */);
}

// 注册别名
Handsontable.cellTypes.registerCellType('my.custom', {
  editor: MyEditor,
  renderer: customRenderer,
  validator: customValidator,
  // 您可以向单元格类型添加其他选项
  // 基于 Handsontable 设置
  className: 'my-cell',
  allowInvalid: true,
  // 或者您可以添加自定义属性
  // 可以在 `cellProperties` 中访问
  myCustomCellState: 'complete',
});
```

## 使用别名

下一步是使用注册的别名，使用户能够轻松引用它们，而无需知道实际的单元类型对象是什么。以下是如何使用单元格定义的示例：

::: only-for javascript

```js
const hot = new Handsontable(container, {
  columns: [{
    type: 'my.custom'
  }]
});
```

:::

::: only-for react

```jsx
<HotTable
  columns={[{
    type: 'my.custom'
  }]}
/>
```

:::

## 优先级

可以将 [`type`](@/api/options.md#type) 选项与 [`renderer`](@/api/options.md#renderer)、[`editor`] 等选项一起定义(@/api/options.md#editor) 或 [`validator`](@/api/options.md#validator)。例如：

::: only-for javascript

```js
const hot = new Handsontable(container, {
  columns: [{
    type: 'numeric',
    // 其他地方定义的验证器函数
    validator: customValidator
  }]
});
```

:::

::: only-for react

```jsx
<HotTable
  columns={[{
    type: 'numeric',
    // 其他地方定义的验证器函数
    validator: customValidator
  }]}
/>
```

:::

我们将列中所有单元格的[`type`](@/api/options.md#type)定义为`numeric`。我们还直接定义了一个验证器函数。在 Handsontable 中，直接定义的单元格函数始终优先于与单元格类型关联的函数，因此上述配置等效于：

::: only-for javascript

```js
const hot = new Handsontable(container, {
  columns: [{
    renderer: Handsontable.renderers.TextRenderer,
    editor: Handsontable.editors.TextEditor,
    validator: customValidator
  }]
});
```

:::

::: only-for react

```jsx
<HotTable
  columns={[{
    renderer: Handsontable.renderers.TextRenderer,
    editor: Handsontable.editors.TextEditor,
    validator: customValidator
  }]}
/>
```

:::

您还可以通过另一种方式使用类型定义配置：

::: only-for javascript

```js
const hot = new Handsontable(container, {
  // 其他地方定义的验证器函数
  validator: customValidator,
  columns: [{
    type: 'my.custom'
  }]
});
```

:::

::: only-for react

```jsx
<HotTable
  validator={customValidator}
  columns={[{
    type: 'my.custom'
  }]}
/>
```

:::

使用[级联配置](@/guides/getting-started/configuration-options/configuration-options.md#cascading-configuration)我们定义一个包含两列的表，并使用[`validator`](@/api/options.md #validator) 设置为 `customValidator` 函数。第一列的 s[`type`](@/api/options.md#type) 设置为 `password`。 `Password` 单元格类型没有定义验证器函数：

```js
{
  renderer: Handsontable.renderers.PasswordRenderer,
  editor: Handsontable.editors.PasswordEditor,
  validator: undefined
}
```

由于`type: 'password'`对于第一列中的单元格来说是比`validator: customValidator`更具体的配置，因此与`password`类型关联的单元格函数优先于在更高配置级别上定义的函数。因此，等效配置为：

::: only-for javascript

```js
function customValidator(query, callback) {
  // ...验证器逻辑
  callback(/*传递`true`或`false`*/);
}

const hot = new Handsontable(container, {
  columns: [{
    renderer: Handsontable.renderers.PasswordRenderer,
    editor: Handsontable.editors.PasswordEditor,
    validator: undefined
  }, {
    renderer: Handsontable.renderers.TextRenderer,
    editor: Handsontable.editors.TextEditor,
    validator: customValidator
  }]
});
```

:::

::: only-for react

```jsx
function customValidator(query, callback) {
  // ...验证器逻辑
  callback(/* 传递 `true`或`false` */);
}

<HotTable
  columns={[{
    renderer: Handsontable.renderers.PasswordRenderer,
    editor: Handsontable.editors.PasswordEditor,
    validator: undefined
  }, {
    renderer: Handsontable.renderers.TextRenderer,
    editor: Handsontable.editors.TextEditor,
    validator: customValidator
  },
  ]}
/>
```

:::

## 内置单元格类型示例

下面的示例显示了一些内置单元格类型，即 Handsontable 中可用的单元格渲染器和编辑器的组合。该示例还显示了自定义单元格渲染器的声明，即`yellowRenderer`和`greenRenderer`。

::: only-for javascript

::: example #example1 --js 1 --ts 2

@[code](@/content/guides/cell-types/cell-type/javascript/example1.js)
@[code](@/content/guides/cell-types/cell-type/javascript/example1.ts)

:::

:::

::: only-for react

::: example #example1 :react --js 1 --ts 2

@[code](@/content/guides/cell-types/cell-type/react/example1.jsx)
@[code](@/content/guides/cell-types/cell-type/react/example1.tsx)

:::

:::


## 空单元格

值得一提的是，`''`(空字符串`)、`null`和`undefined`等值被视为空值。对于大多数数据类型，具有空值的单元格以类似的方式显示(见下文`)。

::: tip

请记住，打开带有`undefined`和`null`值的单元格会导致用空字符串覆盖原始值。此外，复制并粘贴该值将导致粘贴空字符串。

:::

::: only-for javascript

::: example #example2 --js 1 --ts 2

@[code](@/content/guides/cell-types/cell-type/javascript/example2.js)
@[code](@/content/guides/cell-types/cell-type/javascript/example2.ts)

:::

:::

::: only-for react

::: example #example2 :react --js 1 --ts 2

@[code](@/content/guides/cell-types/cell-type/react/example2.jsx)
@[code](@/content/guides/cell-types/cell-type/react/example2.tsx)

:::

:::

在不同的上下文中，空单元格可能会受到不同的处理，例如，[`ColumnSorting`](@/api/columnSorting.md) 插件有 `sortEmptyCells` 选项，它负责确定空单元格是否应该像非空单元格一样排序。

## 相关文章

### 相关指南

<div class="boxes-list gray">

- [细胞功能](@/guides/cell-functions/cell-function/cell-function.md)
- [单元格编辑器](@/guides/cell-functions/cell-editor/cell-editor.md)
- [单元格渲染器](@/guides/cell-functions/cell-renderer/cell-renderer.md)
- [单元格验证器](@/guides/cell-functions/cell-validator/cell-validator.md)

</div>

### 相关API参考

- 配置选项:
  - [`editor`](@/api/options.md#editor)
  - [`renderer`](@/api/options.md#renderer)
  - [`type`](@/api/options.md#type)
  - [`validator`](@/api/options.md#validator)
- 核心方法:
  - [`getCellEditor()`](@/api/core.md#getcelleditor)
  - [`getCellMeta()`](@/api/core.md#getcellmeta)
  - [`getCellMetaAtRow()`](@/api/core.md#getcellmetaatrow)
  - [`getCellsMeta()`](@/api/core.md#getcellsmeta)
  - [`getCellRenderer()`](@/api/core.md#getcellrenderer)
  - [`getCellValidator()`](@/api/core.md#getcellvalidator)
  - [`getDataType()`](@/api/core.md#getdatatype)
  - [`setCellMeta()`](@/api/core.md#setcellmeta)
  - [`setCellMetaObject()`](@/api/core.md#setcellmetaobject)
  - [`removeCellMeta()`](@/api/core.md#removecellmeta)
- Hooks:
  - [`afterBeginEditing`](@/api/hooks.md#afterbeginediting)
  - [`afterGetCellMeta`](@/api/hooks.md#aftergetcellmeta)
  - [`afterGetColumnHeaderRenderers`](@/api/hooks.md#aftergetcolumnheaderrenderers)
  - [`afterGetRowHeaderRenderers`](@/api/hooks.md#aftergetrowheaderrenderers)
  - [`afterSetCellMeta`](@/api/hooks.md#aftersetcellmeta)
  - [`afterValidate`](@/api/hooks.md#aftervalidate)
  - [`afterRenderer`](@/api/hooks.md#afterrenderer)
  - [`beforeGetCellMeta`](@/api/hooks.md#beforegetcellmeta)
  - [`beforeRenderer`](@/api/hooks.md#beforerenderer)
  - [`beforeSetCellMeta`](@/api/hooks.md#beforesetcellmeta)
  - [`beforeValidate`](@/api/hooks.md#beforevalidate)
