---
id: faa5ylt6
title: Custom editor in Vue 2
metaTitle: Custom cell editor - Vue 2 Data Grid | Handsontable
description: Create a custom cell editor, and use it in your Vue 2 data grid by declaring it as a class.
permalink: /vue-custom-editor-example
canonicalUrl: /vue-custom-editor-example
react:
  id: 54b3cgid
  metaTitle: Custom cell editor - Vue 2 Data Grid | Handsontable
searchCategory: Guides
category: Integrate with Vue 2
---

# Custom editor in Vue 2

Create a custom cell editor, and use it in your Vue 2 data grid by declaring it as a class.

[[toc]]

## 概述

You can declare a custom editor for the `HotTable` component by declaring it as a class and passing it to the Handsontable options or creating an editor component. You can use it many times and with different properties. To differentiate between editor instances, pass a `key` attribute.

## Example - Declaring an editor as a class

The following example implements the `@handsontable/vue` component with a custom editor added, utilizing the `placeholder` attribute in the editor's `input` element.

::: example #example1 :vue --html 1 --js 2

@[code](@/content/guides/integrate-with-vue/vue-custom-editor-example/vue/example1.html)
@[code](@/content/guides/integrate-with-vue/vue-custom-editor-example/vue/example1.js)

:::

## 相关文章

### 相关指南

<div class="boxes-list gray">

- [Cell editor](@/guides/cell-functions/cell-editor/cell-editor.md)

</div>

### 相关API参考

- APIs:
  - [`BasePlugin`](@/api/basePlugin.md)
- 配置选项:
  - [`editor`](@/api/options.md#editor)
  - [`enterBeginsEditing`](@/api/options.md#enterbeginsediting)
- 核心方法:
  - [`destroyEditor()`](@/api/core.md#destroyeditor)
  - [`getActiveEditor()`](@/api/core.md#getactiveeditor)
  - [`getCellEditor()`](@/api/core.md#getcelleditor)
  - [`getCellMeta()`](@/api/core.md#getcellmeta)
  - [`getCellMetaAtRow()`](@/api/core.md#getcellmetaatrow)
  - [`getCellsMeta()`](@/api/core.md#getcellsmeta)
  - [`setCellMeta()`](@/api/core.md#setcellmeta)
  - [`setCellMetaObject()`](@/api/core.md#setcellmetaobject)
  - [`removeCellMeta()`](@/api/core.md#removecellmeta)
- Hooks:
  - [`afterBeginEditing`](@/api/hooks.md#afterbeginediting)
  - [`afterGetCellMeta`](@/api/hooks.md#aftergetcellmeta)
  - [`beforeGetCellMeta`](@/api/hooks.md#beforegetcellmeta)
