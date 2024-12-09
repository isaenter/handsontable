---
id: neoo8dhv
title: 单元格函数
metaTitle: Cell functions - JavaScript Data Grid | Handsontable
description: Render, edit, and validate the contents of your cells, using Handsontable's cell functions. Quickly set up your cells, using cell types.
permalink: /cell-function
canonicalUrl: /cell-function
react:
  id: i2sqtwh6
  metaTitle: Cell functions - React Data Grid | Handsontable
searchCategory: Guides
category: Cell functions
---

# 单元格函数

使用 Handsontable 的单元格函数渲染、编辑和验证单元格的内容。使用细胞类型快速设置细胞。

[[toc]]

## 概述

Handsontable 中的每个单元格都有 3 个相关函数：

- [单元格函数](#单元格函数)
  - [概述](#概述)
  - [渲染器](#渲染器)
  - [编辑器](#编辑器)
  - [验证器](#验证器)
  - [细胞类型](#细胞类型)
  - [单元格函数 getter](#单元格函数-getter)
  - [相关文章](#相关文章)
    - [相关指南](#相关指南)
    - [相关API参考](#相关api参考)

这些功能中的每一个都负责不同的细胞行为。您可以单独定义它们，也可以使用[单元类型](#cell-type)同时定义所有三个。

## 渲染器

Handsontable 不直接显示数据源中存储的值。相反，每次需要在表格单元格中显示数据源中的值时，它都会与`HTMLTableCellElement`类型的表格单元格对象（DOM 节点）以及其他有用信息一起传递给单元格`renderer`函数。
`Renderer` 预计会格式化传递的值并将其放置为单元格对象的内容。 `Renderer` 还可以更改单元格类列表，即它可以添加一个 `htInvalid` 类来让用户知道显示的值无效。

## 编辑器

单元格编辑器是最复杂的单元格功能。我们准备了一个单独的页面[自定义单元格编辑器](@/guides/cell-functions/cell-editor/cell-editor.md) 解释单元格编辑如何工作以及如何编写您自己的单元格编辑器。

## 验证器
单元格验证器可以是函数或正则表达式。当验证器函数使用`true`或验证正则表达式 [`test()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test) 方法返回`true`。由于值的有效性仅由传递给`callback`的参数确定，因此`validator`函数可以是同步的或异步的。

与`渲染器`和`编辑器`函数相反，不必为每个单元格定义`验证器`函数。如果未定义`validator`函数，则单元格值始终有效。

## 细胞类型

手动为单元格或列定义这些函数会很繁琐，因此为了简化配置，Handsontable 引入了[单元格类型](@/guides/cell-types/cell-type/cell-type.md)。

## 单元格函数 getter

::: only-for react

::: tip

要使用 Handsontable API，您需要访问 Handsontable 实例。您可以通过利用对`HotTable`组件的引用并读取其`hotInstance`属性来做到这一点。

有关更多信息，请参阅[实例方法](@/guides/getting-started/react-methods/react-methods.md)页面。

:::

:::

如果由于某种原因，您需要获取特定单元格的`渲染器`、`编辑器`或`验证器`功能，
您可以使用标准的 [`getCellMeta()`](@/api/core.md#getcellmeta) 方法来获取单元格的所有属性，
然后像这样引用单元格函数：

```js
// 获取单元格 [0, 0] 的单元格属性
const cellProperties = hot.getCellMeta(0, 0);

cellProperties.renderer; //获取单元格渲染器
cellProperties.editor; //获取单元格编辑器
cellProperties.validator; //获取单元格验证器
cellProperties.type; //获取细胞类型
```

您还可以使用以下 getter 来获取特定的单元格函数：

- [`getCellRenderer(row, col)`](@/api/core.md#getcellrenderer)
- [`getCellEditor(row, col)`](@/api/core.md#getcelleditor)
- [`getCellValidator(row, col)`](@/api/core.md#getcellvalidator)

如果单元格的函数是通过[单元格类型](#cell-type)定义的，则 getter 将返回
为该单元格类型定义的`渲染器`、`编辑器`或`验证器`函数。例如：

::: only-for javascript

```js
import Handsontable from 'handsontable';
import 'handsontable/styles/handsontable.css';
import 'handsontable/styles/ht-theme-main.css';

const container = document.querySelector('#container');
const hot = new Handsontable(container, {
  columns: [{
    //设置整个网格的单元格类型
    type: 'numeric'
  }]
});

//获取单元格 [0, 0] 的单元格属性
const cellProperties = hot.getCellMeta(0, 0);

cellProperties.renderer; //数字渲染器
cellProperties.editor; //数字编辑器
cellProperties.validator; //数字验证器
cellProperties.type; //数字
```

:::

::: only-for react

```jsx
const ExampleComponent = () => {
  const hotRef = useRef(null);

  useEffect(() => {
    const hot = hotRef.current.hotInstance;

    //获取单元格 [0, 0] 的单元格属性
    const cellProperties = hot.getCellMeta(0, 0);

    cellProperties.renderer; // "numeric"
    cellProperties.editor; // "numeric"
    cellProperties.validator; // "numeric"
    cellProperties.type; // "numeric"
  });

  return (
    <HotTable
      ref={hotRef}
      //设置整个网格的单元格类型
      type="numeric"
    />
  );
};
```

:::

## 相关文章

### 相关指南

<div class="boxes-list gray">

- [单元格编辑器](@/guides/cell-functions/cell-editor/cell-editor.md)
- [单元格渲染器](@/guides/cell-functions/cell-renderer/cell-renderer.md)
- [单元格验证器](@/guides/cell-functions/cell-validator/cell-validator.md)
- [细胞类型](@/guides/cell-types/cell-type/cell-type.md)

</div>

### 相关API参考

- 配置选项:
  - [`editor`](@/api/options.md#editor)
  - [`renderer`](@/api/options.md#renderer)
  - [`type`](@/api/options.md#type)
  - [`validator`](@/api/options.md#validator)
- 核心方法:
  - [`destroyEditor()`](@/api/core.md#destroyeditor)
  - [`getActiveEditor()`](@/api/core.md#getactiveeditor)
  - [`getCellEditor()`](@/api/core.md#getcelleditor)
  - [`getCellMeta()`](@/api/core.md#getcellmeta)
  - [`getCellMetaAtRow()`](@/api/core.md#getcellmetaatrow)
  - [`getCellsMeta()`](@/api/core.md#getcellsmeta)
  - [`getCellRenderer()`](@/api/core.md#getcellrenderer)
  - [`getCellValidator()`](@/api/core.md#getcellvalidator)
  - [`setCellMeta()`](@/api/core.md#setcellmeta)
  - [`setCellMetaObject()`](@/api/core.md#setcellmetaobject)
  - [`removeCellMeta()`](@/api/core.md#removecellmeta)
- Hooks:
  - [`afterBeginEditing`](@/api/hooks.md#afterbeginediting)
  - [`afterGetCellMeta`](@/api/hooks.md#aftergetcellmeta)
  - [`afterGetColumnHeaderRenderers`](@/api/hooks.md#aftergetcolumnheaderrenderers)
  - [`afterGetRowHeaderRenderers`](@/api/hooks.md#aftergetrowheaderrenderers)
  - [`afterValidate`](@/api/hooks.md#aftervalidate)
  - [`afterRenderer`](@/api/hooks.md#afterrenderer)
  - [`beforeGetCellMeta`](@/api/hooks.md#beforegetcellmeta)
  - [`beforeRenderer`](@/api/hooks.md#beforerenderer)
  - [`beforeValidate`](@/api/hooks.md#beforevalidate)
