---
id: 2vbt7ev0
title: 剪贴板
metaTitle: Clipboard - JavaScript Data Grid | Handsontable
description: Copy data from selected cells to the clipboard, using the "Ctrl/Cmd + C" shortcut or the context menu. Control the clipboard with Handsontable's API.
permalink: /basic-clipboard
canonicalUrl: /basic-clipboard
tags:
  - copy
  - cut
  - paste
react:
  id: mlctr1ri
  metaTitle: Clipboard - React Data Grid | Handsontable
searchCategory: Guides
category: Cell features
---

# 剪贴板

将数据从选定的单元格复制到系统剪贴板。

[[toc]]

## 概述

您可以手动将数据从 Handsontable 复制或剪切到系统剪贴板(使用上下文菜单或 <kbd>**Ctrl**</kbd>/<kbd>**Cmd**</kbd>+<kbd >**C**</kbd>/<kbd>**X**</kbd> 快捷方式`)或以编程方式(使用 Handsontable 的 API 方法`)。

## 复制和剪切

复制和剪切操作允许将数据从 Handsontable 导出到系统剪贴板。 [`CopyPaste`](@/api/copyPaste.md) 插件将数据复制并剪切为 `text/plain` 和 `text/html` MIME 类型。

### 最终用户使用情况

可用的键盘快捷键：

- <kbd>**Ctrl**</kbd>/<kbd>**Cmd**</kbd>+<kbd>**C**</kbd> -复制所选内容中最后一个单元格的内容范围
- <kbd>**Ctrl**</kbd>/<kbd>**Cmd**</kbd>+<kbd>**X**</kbd> -剪切所选内容中最后一个单元格的内容范围

浏览器工具栏中的可用选项：

- `编辑 > 复制` -复制选定范围中最后一个单元格的内容
- `编辑 > 剪切` -剪切所选范围内最后一个单元格的内容
要让最终用户复制列标题的内容，请参阅[带标题复制](#copy-with-headers) 部分。

### 上下文菜单

启用上下文菜单后，它包含默认项目，包括复制和剪切选项。

- 复制 -作为预定义键`复制`
- 剪切 -作为预定义的键`剪切`
您可以按照与 [上下文菜单](@/guides/accessories-and-menus/context-menu/context-menu.md#context-menu-with-specific-中的其余预定义项目相同的方式使用它们选项)。这些操作由`document.execCommand()`执行。

::: only-for javascript

::: example #example1 --js 1 --ts 2

@[code](@/content/guides/cell-features/clipboard/javascript/example1.js)
@[code](@/content/guides/cell-features/clipboard/javascript/example1.ts)

:::

:::

::: only-for react

::: example #example1 :react --js 1 --ts 2

@[code](@/content/guides/cell-features/clipboard/react/example1.jsx)
@[code](@/content/guides/cell-features/clipboard/react/example1.tsx)

:::

:::

### 以编程方式触发复制和剪切

::: only-for react

::: tip

要使用 Handsontable API，您需要访问 Handsontable 实例。您可以通过利用对`HotTable`组件的引用并读取其`hotInstance`属性来做到这一点。

有关更多信息，请参阅[实例方法](@/guides/getting-started/react-methods/react-methods.md)页面。

:::

:::

首先，选择要复制或剪切的单元格范围。

```js
hot.selectCell(1, 1);
```

然后使用以下命令之一：

* `document.execCommand('copy')`
* `document.execCommand('cut')`

[`CopyPaste`](@/api/copyPaste.md) 插件监听浏览器的 `copy` 和 `cut` 事件。如果触发，我们的实现会将所选数据复制或剪切到系统剪贴板。

::: only-for javascript

::: example #example3 --html 1 --js 2 --ts 3

@[code](@/content/guides/cell-features/clipboard/javascript/example3.html)
@[code](@/content/guides/cell-features/clipboard/javascript/example3.js)
@[code](@/content/guides/cell-features/clipboard/javascript/example3.ts)

:::

:::

::: only-for react

::: example #example3 :react --js 1 --ts 2

@[code](@/content/guides/cell-features/clipboard/react/example3.jsx)
@[code](@/content/guides/cell-features/clipboard/react/example3.tsx)

:::

:::

请注意，Handsontable 的一些与选择相关的方法不会自动将焦点设置在网格上。为了确保您的网格聚焦，请在复制、剪切或粘贴数据之前调用 [`isListening()`](@/api/core.md#islistening)。

### Hooks

[`CopyPaste`](@/api/copyPaste.md) 插件公开以下钩子以在复制或剪切操作期间操作数据：

- [`beforeCopy`](@/api/hooks.md#beforecopy)
- [`afterCopy`](@/api/hooks.md#aftercopy)
- [`beforeCut`](@/api/hooks.md#beforecut)
- [`afterCut`](@/api/hooks.md#aftercut)

它们的描述中提供了如何使用它们的示例。

### 带标题复制

您可以通过启用附加的[上下文菜单](@/guides/accessories-and-menus/context-menu/context-menu.md)项目，让最终用户复制列标题的内容：

<span class="img-invert">

|上下文菜单项 |复制区域 |
| ----------------------------------| -------------------------------------------------------------------------|
|带标题复制 | ![copy_with_headers]({{$basePath}}/img/copy_with_headers.png) |
|复制组标题 | ![copy_with_group_headers]({{$basePath}}/img/copy_with_group_headers.png) |
|仅复制标题 | ![copy_headers_only]({{$basePath}}/img/copy_headers_only.png) |
</span>

右键单击一个单元格来尝试一下：

::: only-for javascript

::: example #example2 --js 1 --ts 2

@[code](@/content/guides/cell-features/clipboard/javascript/example2.js)
@[code](@/content/guides/cell-features/clipboard/javascript/example2.ts)

:::

:::

::: only-for react

::: example #example2 :react --js 1 --ts 2

@[code](@/content/guides/cell-features/clipboard/react/example2.jsx)
@[code](@/content/guides/cell-features/clipboard/react/example2.tsx)

:::

:::

要添加上下文菜单项，请使用以下选项配置 [`CopyPaste`](@/api/copyPaste.md) 插件：
- [`copyColumnHeaders`](@/api/options.md#copypaste-additional-options)
- [`copyColumnGroupHeaders`](@/api/options.md#copypaste-additional-options)
- [`copyColumnHeadersOnly`](@/api/options.md#copypaste-additional-options)

```js
copyPaste: {
  copyColumnHeaders: true,
  copyColumnGroupHeaders: true,
  copyColumnHeadersOnly: true,
}
```

要以编程方式复制列标题，请使用以下参数调用 [`copy Paste.copy()`](@/api/copy Paste.and#copy) 方法：
- [`'with-column-headers'`](@/api/copyPaste.md#copy)
- [`'with-all-column-headers'`](@/api/copyPaste.md#copy)
- [`'column-headers-only'`](@/api/copyPaste.md#copy)

::: only-for react

::: tip

要使用 Handsontable API，您需要访问 Handsontable 实例。您可以通过利用对`HotTable`组件的引用并读取其`hotInstance`属性来做到这一点。

有关更多信息，请参阅[实例方法](@/guides/getting-started/react-methods/react-methods.md)页面。

:::

:::

```js
// 访问`CopyPaste`插件实例
const copyPastePlugin = hot.getPlugin('copyPaste');

// 选择一些单元格
hot.selectCell(1, 1);

// 复制选定的单元格及其最近的列标题
copyPastePlugin.copy('with-column-headers');

// 复制选定的单元格及其所有相关的列标题
copyPastePlugin.copy('with-all-column-headers');

// 复制最接近所选单元格的列标题
//(不复制单元格本身`)
copyPastePlugin.copy('column-headers-only');
```

## 粘贴

`粘贴`操作允许使用用户的系统剪贴板从外部源导入数据。 [`CopyPaste`](@/api/copyPaste.md) 插件首先在系统剪贴板中查找 `text/html`，然后查找 `text/plain`。

### 最终用户使用情况

可用的键盘快捷键：

-<kbd>**Ctrl**</kbd>/<kbd>**Cmd**</kbd>+<kbd>**V**</kbd> -将内容粘贴到所选内容的最后一个单元格中范围

浏览器工具栏中的可用选项：

-`编辑 > 粘贴` -将内容粘贴到所选范围的最后一个单元格中

### 上下文菜单

出于安全原因，现代浏览器不允许从系统剪贴板读取。 [了解更多](https://www.w3.org/TR/clipboard-apis/#privacy)

### 以编程方式触发粘贴
出于安全原因，现代浏览器不允许从系统剪贴板读取。 [了解更多](https://www.w3.org/TR/clipboard-apis/#privacy)

### Hooks

[`CopyPaste`](@/api/copyPaste.md) 插件公开以下钩子以在粘贴操作期间操作数据：

-[`beforePaste`](@/api/hooks.md#beforepaste)
-[`afterPaste`](@/api/hooks.md#afterpaste)

它们的描述中提供了如何使用它们的示例。

## 已知限制

1. [`CopyPaste`](@/api/copyPaste.md) 插件不会复制、剪切或粘贴单元格的外观。
2. 从 Handsontable 复制的数据将始终保持为纯文本。例如，如果复制选中的复选框，输入将保留为`true`值。
3. `document.execCommand` 只能在立即执行事件期间调用，例如 `MouseEvent` 或 `KeyboardEvent`。

## 相关键盘快捷键

| Windows                                | macOS                                 | Action                                                          |  Excel  | Sheets  |
| -------------------------------------- | ------------------------------------- | --------------------------------------------------------------- | :-----: | :-----: |
| <kbd>**Ctrl**</kbd>+<kbd>**X**</kbd> | <kbd>**Cmd**</kbd>+<kbd>**X**</kbd> | 将选定单元格的内容剪切到系统剪贴板  | &check; | &check; |
| <kbd>**Ctrl**</kbd>+<kbd>**C**</kbd> | <kbd>**Cmd**</kbd>+<kbd>**C**</kbd> | 将所选单元格的内容复制到系统剪贴板 | &check; | &check; |
| <kbd>**Ctrl**</kbd>+<kbd>**V**</kbd> | <kbd>**Cmd**</kbd>+<kbd>**V**</kbd> | 从系统剪贴板粘贴                                 | &check; | &check; |

## 相关API参考

- 配置选项:
  - [`copyPaste`](@/api/options.md#copypaste)
  - [`copyable`](@/api/options.md#copyable)
  - [`skipColumnOnPaste`](@/api/options.md#skipcolumnonpaste)
  - [`skipRowOnPaste`](@/api/options.md#skiprowonpaste)
- 核心方法:
  - [`getCopyableData()`](@/api/core.md#getcopyabledata)
  - [`getCopyableText()`](@/api/core.md#getcopyabletext)
- Hooks:
  - [`afterCopy`](@/api/hooks.md#aftercopy)
  - [`afterCopyLimit`](@/api/hooks.md#aftercopylimit)
  - [`afterCut`](@/api/hooks.md#aftercut)
  - [`afterPaste`](@/api/hooks.md#afterpaste)
  - [`beforeCopy`](@/api/hooks.md#beforecopy)
  - [`beforeCut`](@/api/hooks.md#beforecut)
  - [`beforePaste`](@/api/hooks.md#beforepaste)
  - [`modifyCopyableRange`](@/api/hooks.md#modifycopyablerange)
- 插件:
  - [`CopyPaste`](@/api/copyPaste.md)
