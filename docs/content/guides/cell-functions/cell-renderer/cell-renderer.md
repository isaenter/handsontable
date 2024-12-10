---
id: ohjf69hj
title: 单元格渲染器
metaTitle: Cell renderer - JavaScript Data Grid | Handsontable
description: Create a custom cell renderer function, to have full control over how a cell looks.
permalink: /cell-renderer
canonicalUrl: /cell-renderer
react:
  id: 2ej30mcg
  metaTitle: Cell renderer - React Data Grid | Handsontable
searchCategory: Guides
category: Cell functions
---

# 单元格渲染器

创建自定义单元格渲染器函数，以完全控制单元格的外观。

[[toc]]

::: only-for javascript

## 概述

创建渲染器时，一个好主意是将其指定为引用此特定渲染器函数的别名。 Handsontable默认定义了10个别名：

- `autocomplete` 对应 `Handsontable.renderers.AutocompleteRenderer`
- `base` 对应 `Handsontable.renderers.BaseRenderer`
- `checkbox` 对应 `Handsontable.renderers.CheckboxRenderer`
- `date` 对应 `Handsontable.renderers.DateRenderer`
- `dropdown` 对应 `Handsontable.renderers.DropdownRenderer`
- `html` 对应 `Handsontable.renderers.HtmlRenderer`
- `numeric` 对应 `Handsontable.renderers.NumericRenderer`
- `password` 对应 `Handsontable.renderers.PasswordRenderer`
- `text` 对应 `Handsontable.renderers.TextRenderer`
- `time` 对应 `Handsontable.renderers.TimeRenderer`

它为用户提供了一种方便的方法来定义触发表渲染时应使用哪个渲染器。用户不需要知道哪个渲染器函数负责显示单元格值，他甚至不需要知道有任何函数。此外，您可以更改与别名关联的渲染函数，而无需更改定义表的代码。
:::

::: only-for react

## 概述

渲染器是决定单元格外观的函数。

设置在一起，渲染器，[编辑器](@/guides/cell-functions/cell-editor/cell-editor.md) 和 [验证器](@/guides/cell-functions/cell-validator/cell-validator.md )形成[单元格类型](@/guides/cell-types/cell-type/cell-type.md)。

## 将自定义渲染器声明为组件

Handsontable 的 React 包装器允许您使用 React 组件创建自定义单元格渲染器。
要将您的组件用作 Handsontable 渲染器，请在`HotTable`或`HotColumn`组件的`renderer`属性中将其传递，就像使用任何其他配置选项一样。

::: tip

Handsontable 的 [`autoRowSize`](@/api/options.md#autorowsize) 和 [`autoColumnSize`](@/api/options.md#autocolumnsize) 选项需要在将某些单元格渲染到之前计算它们的宽度/高度桌子。因此，目前无法将它们与基于组件的渲染器一起使用，因为它们是在表初始化后创建的。

请务必在 Handsontable 配置中关闭这些选项，因为保持启用它们可能会导致意外结果。请注意，默认情况下启用 [`autoColumnSize`](@/api/options.md#autocolumnsize)。

:::

::: example #example1 :react --js 1 --ts 2

@[code](@/content/guides/cell-functions/cell-renderer/react/example1.jsx)
@[code](@/content/guides/cell-functions/cell-renderer/react/example1.tsx)

:::

## 在 React 的 Context 中使用渲染器组件

在此示例中，React 的`Context`将主应用程序组件中可用的信息传递给渲染器。在本例中，我们仅使用渲染器，但同样的原理也适用于 [editors](@/guides/cell-functions/cell-editor/cell-editor.md)。

::: example #example2 :react --css 1 --js 2 --ts 3

@[code](@/content/guides/cell-functions/cell-renderer/react/example2.css)
@[code](@/content/guides/cell-functions/cell-renderer/react/example2.jsx)
@[code](@/content/guides/cell-functions/cell-renderer/react/example2.tsx)

:::

## 将自定义渲染器声明为函数

您还可以通过将`HotTable`组件声明为函数来声明自定义渲染器。在最简单的场景中，您可以将渲染函数作为`hotRenderer`属性传递到`HotTable`或`HotColumn`中。
如果您需要渲染器成为`columns`配置数组的一部分，请在`renderer`键下声明它。

以下示例实现了`@handsontable/react-wrapper`，并将自定义渲染器添加到其中一列。它将图像 URL 作为输入，并在编辑的单元格中呈现图像。

::: example #example3 :react --js 1 --ts 2

@[code](@/content/guides/cell-functions/cell-renderer/react/example3.jsx)
@[code](@/content/guides/cell-functions/cell-renderer/react/example3.tsx)

:::

:::

::: only-for javascript

## 使用单元格渲染器

配置列时使用您选择的渲染器名称：

:::

::: only-for react

::: tip

以下所有部分描述了如何利用 Handsontable 基于函数的渲染器可用的功能。

:::

### 概述

创建渲染器时，一个好主意是将其指定为引用此特定渲染器函数的别名。 Handsontable默认定义了10个别名：

- `autocomplete` 对应 `Handsontable.renderers.AutocompleteRenderer`
- `base` 对应 `Handsontable.renderers.BaseRenderer`
- `checkbox` 对应 `Handsontable.renderers.CheckboxRenderer`
- `date` 对应 `Handsontable.renderers.DateRenderer`
- `dropdown` 对应 `Handsontable.renderers.DropdownRenderer`
- `html` 对应 `Handsontable.renderers.HtmlRenderer`
- `numeric` 对应 `Handsontable.renderers.NumericRenderer`
- `password` 对应 `Handsontable.renderers.PasswordRenderer`
- `text` 对应 `Handsontable.renderers.TextRenderer`
- `time` 对应 `Handsontable.renderers.TimeRenderer`

它为用户提供了一种方便的方法来定义触发表渲染时应使用哪个渲染器。用户不需要知道哪个渲染器函数负责显示单元格值，他甚至不需要知道有任何函数。此外，您可以更改与别名关联的渲染函数，而无需更改定义表的代码。

::: tip

您可以设置单元格的 [`renderer`](@/api/options.md#renderer)、[`editor`](@/api/options.md#editor) 或 [`validator`](@/api/options.md#validator) 单独，但您仍然需要设置该单元格的 [`type`](@/api/options.md#type)。例如：

:::

```js
renderer: Handsontable.NumericRenderer,
editor: Handsontable.editors.NumericEditor,
validator: Handsontable.NumericValidator,
type: 'numeric',
```

### 使用单元格渲染器

可以注册您的渲染器并使用您注册时使用的名称重新使用它。

:::

::: only-for javascript

```js
const container = document.querySelector('#container');
const hot = new Handsontable(container, {
  data: someData,
  columns: [{
    renderer: 'numeric'
  }]
});
```

:::

::: only-for react

```jsx
<HotTable
  data={someData}
  columns={[{
    renderer: 'numeric'
  }]}
/>
```

:::

::: only-for javascript

## 注册自定义单元格渲染器
:::

::: only-for react

### 注册自定义单元格渲染器

:::

要注册您自己的别名，请使用`Handsontable.renderers.registerRenderer()`函数。它需要两个参数：

- `rendererName` -表示渲染器函数的字符串
- `renderer` -将由 `rendererName` 表示的渲染器函数

如果您想在别名`asterix`下注册`asterixDecoratorRenderer`，您必须调用：

```js
Handsontable.renderers.registerRenderer('asterix', asterixDecoratorRenderer);
```

明智地选择别名。如果您使用已注册的名称注册渲染器，则目标函数将被覆盖：

```js
Handsontable.renderers.registerRenderer('text', asterixDecoratorRenderer);
```

现在`text`别名指向`asterixDecoratorRenderer`函数，而不是`Handsontable.renderers.TextRenderer`。

因此，除非您有意要覆盖现有别名，否则请尝试选择一个唯一的名称。一个好的做法是在别名前添加一些自定义名称(例如您的 GitHub 用户名`)，以最大程度地减少名称冲突的可能性。如果您想发布渲染器，这一点尤其重要，因为您永远不知道使用您的渲染器的用户已注册别名。

```js
Handsontable.renderers.registerRenderer('asterix', asterixDecoratorRenderer);
```

有人可能已经注册了这样的别名

```js
Handsontable.renderers.registerRenderer('my.asterix', asterixDecoratorRenderer);
```

这样更好。

::: only-for javascript

## 使用别名

:::

::: only-for react

### 使用别名

:::

最后一步是使用注册的别名，以便用户可以轻松引用它，而无需现在实际的渲染器函数。

总而言之，一个准备好的渲染器函数应该如下所示：

```js
function customRenderer(hotInstance, td, row, column, prop, value, cellProperties) {
  // 可选地包括`BaseRenderer`，它负责
  // 在表格单元格中添加/删除 CSS 类。
  Handsontable.renderers.BaseRenderer.apply(this, arguments);

  // ...您的渲染器的自定义逻辑
}

// 注册别名
Handsontable.renderers.registerRenderer('my.custom', customRenderer);
```

从现在开始，您可以像这样使用`customRenderer`：

::: only-for javascript

```js
const container = document.querySelector('#container');
const hot = new Handsontable(container, {
  data: someData,
  columns: [{
    renderer: 'my.custom'
  }]
});
```

:::

::: only-for react

```jsx
<HotTable
  data={someData}
  columns={[{
    renderer: 'my.custom'
  }]}
/>
```

:::

::: only-for javascript

## 在单元格中渲染自定义 HTML

:::

::: only-for react

### 在单元格中渲染自定义 HTML

:::

此示例演示如何使用自定义单元格呈现器在单元格中显示 HTML 内容。这是一个非常强大的功能。请记住转义任何可用于 XSS 攻击的 HTML 代码。在下面的配置中：

- **标题**列使用允许任何 HTML 的内置 HTML 渲染器。如果您的代码来自不受信任的来源，这是不安全的。请注意，Handsontable 用户可以使用它使用单元格编辑器输入 `<script>` 或其他潜在的恶意标签！
- **描述**列也使用 HTML 渲染器(与上面相同`)
- **注释**列使用自定义渲染器(`safeHtmlRenderer``)。这对于用户输入来说应该是安全的，因为只允许某些标签
- **Cover**列接受图像 URL 作为字符串，并将其转换为渲染器中的 `<img>`

::: only-for javascript

::: example #example4 --js 1 --ts 2

@[code](@/content/guides/cell-functions/cell-renderer/javascript/example4.js)
@[code](@/content/guides/cell-functions/cell-renderer/javascript/example4.ts)

:::

:::

::: only-for react

::: example #example4 :react --js 1 --ts 2

@[code](@/content/guides/cell-functions/cell-renderer/react/example4.jsx)
@[code](@/content/guides/cell-functions/cell-renderer/react/example4.tsx)

:::

:::

::: only-for javascript

## 在标头中渲染自定义 HTML

:::

::: only-for react

### 在标头中渲染自定义 HTML

:::

您还可以将 HTML 放入行标题和列标题中。如果您需要将事件附加到 DOM 元素(如下面的复选框`)，只需记住通过类名而不是 id 来标识元素。这是因为行标题和列标题在 DOM 树中是重复的，并且 id 属性必须是唯一的。

::: only-for javascript

::: example #example5 --js 2 --ts 3 --html 1

@[code](@/content/guides/cell-functions/cell-renderer/javascript/example5.html)
@[code](@/content/guides/cell-functions/cell-renderer/javascript/example5.js)
@[code](@/content/guides/cell-functions/cell-renderer/javascript/example5.ts)

:::

:::

::: only-for react

::: example #example5 :react --js 1 --ts 2

@[code](@/content/guides/cell-functions/cell-renderer/react/example5.jsx)
@[code](@/content/guides/cell-functions/cell-renderer/react/example5.tsx)

:::

:::

::: only-for javascript

## 在单元格渲染器函数中添加事件监听器

:::

::: only-for react

### 在单元格渲染器函数中添加事件监听器

:::

如果您正在编写高级单元格渲染器，并且希望在某个用户操作之后(即用户将鼠标指针悬停在单元格上之后`)添加一些自定义行为，您可能会想将事件侦听器直接添加到传递为的表单元格节点`renderer` 函数的参数。不幸的是，这几乎总是会给您带来麻烦，并且您最终会遇到性能问题或将侦听器连接到错误的单元。

这是因为 Handsontable：

- 每个单元多次调用`渲染器`函数 -这可能导致同一事件侦听器的多个副本附加到单元
- 在表格滚动和添加/删除新行/列期间重用表格单元格节点 -这可能导致事件侦听器附加到错误的单元格
- 
在决定在单元格渲染器中附加事件侦听器之前，请确保没有适合您需求的 [Handsontable 事件](@/guides/getting-started/events-and-hooks/events-and-hooks.md)。使用_Handsontable events_系统是响应用户操作的最安全的方法。

如果您没有找到合适的 _Handsontable 事件_，请将单元格内容放入包装`<div>`中，将事件侦听器附加到包装器，然后将其放入表格单元格中。

## 性能考虑
在每个表格渲染期间，为每个显示的单元格单独调用单元格渲染器。表格在其生命周期内可以多次渲染(表格滚动后、表格排序后、单元格编辑后等`)，因此您应该使您的`渲染器`函数尽可能简单和快速，否则您可能会遇到性能下降，特别是当处理大量数据。

::: only-for javascript

## 相关文章

### 相关指南

<div class="boxes-list gray">

- [React 中的自定义渲染器](@/react/guides/cell-functions/cell-renderer/cell-renderer.md)
- [Angular 中的自定义渲染器](@/guides/integrate-with-angular/angular-custom-renderer-example/angular-custom-renderer-example.md)
- [Vue 2 中的自定义渲染器](@/guides/integrate-with-vue/vue-custom-renderer-example/vue-custom-renderer-example.md)
- [Vue 3 中的自定义渲染器](@/guides/integrate-with-vue3/vue3-custom-renderer-example/vue3-custom-renderer-example.md)

</div>

### 相关API参考

:::

::: only-for react

## 相关API参考

:::

- APIs:
  - [`BasePlugin`](@/api/basePlugin.md)
- 配置选项:
  - [`renderer`](@/api/options.md#renderer)
- 核心方法:
  - [`getCellMeta()`](@/api/core.md#getcellmeta)
  - [`getCellMetaAtRow()`](@/api/core.md#getcellmetaatrow)
  - [`getCellsMeta()`](@/api/core.md#getcellsmeta)
  - [`getCellRenderer()`](@/api/core.md#getcellrenderer)
  - [`setCellMeta()`](@/api/core.md#setcellmeta)
  - [`setCellMetaObject()`](@/api/core.md#setcellmetaobject)
  - [`removeCellMeta()`](@/api/core.md#removecellmeta)
- Hooks:
  - [`afterGetCellMeta`](@/api/hooks.md#aftergetcellmeta)
  - [`afterGetColumnHeaderRenderers`](@/api/hooks.md#aftergetcolumnheaderrenderers)
  - [`afterGetRowHeaderRenderers`](@/api/hooks.md#aftergetrowheaderrenderers)
  - [`afterRenderer`](@/api/hooks.md#afterrenderer)
  - [`beforeGetCellMeta`](@/api/hooks.md#beforegetcellmeta)
  - [`beforeRenderer`](@/api/hooks.md#beforerenderer)
