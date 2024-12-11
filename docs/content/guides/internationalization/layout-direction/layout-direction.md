---
id: gcdt3pns
title: 布局方向
metaTitle: Layout direction - JavaScript Data Grid | Handsontable
description: Set the layout direction for right-to-left languages. Automatically inherit your HTML file's "dir" property, or set the layout direction manually.
permalink: /layout-direction
canonicalUrl: /layout-direction
tags:
  - rtl
  - right-to-left
  - arabic
  - hebrew
  - persian
  - farsi
  - internationalization
  - localization
  - L10n
  - i18n
react:
  id: g4mu790t
  metaTitle: Layout direction - React Data Grid | Handsontable
searchCategory: Guides
category: Internationalization
---

# 布局方向

设置从右到左语言的布局方向.自动继承 HTML 文件的 `dir` 属性,或手动设置布局方向.

[[toc]]

## 概述

要以 LTR 语言(例如英语、中文或俄语)和 RTL 语言(例如阿拉伯语、波斯语或希伯来语)正确显示 Handsontable 的 UI 和数据,请配置网格的布局方向.

默认情况下,Handsontable 的布局方向是根据 HTML 文档的`dir`属性的值自动设置的.

你可以:
- [布局方向](#布局方向)
  - [概述](#概述)
    - [RTL 支持](#rtl-支持)
      - [RTL 演示](#rtl-演示)
    - [受布局方向影响的元素](#受布局方向影响的元素)
  - [设置布局方向](#设置布局方向)
    - [自动设置布局方向](#自动设置布局方向)
    - [设置布局方向为RTL](#设置布局方向为rtl)
    - [设置布局方向为LTR](#设置布局方向为ltr)
  - [设置文本水平对齐方式](#设置文本水平对齐方式)
  - [相关文章](#相关文章)
    - [相关指南](#相关指南)
    - [相关API参考](#相关api参考)

### RTL 支持

如果您的应用使用 RTL 语言,我们建议[将 Handsontable 的布局方向设置为 RTL](#set-the-layout-direction-to-rtl).

对于阿拉伯语,请使用 Handsontable 的内置[阿拉伯语翻译](@/guides/internationalization/language/language.md#list-of-available-languages).对于任何其他 RTL 语言,[添加您自己的翻译](@/guides/internationalization/language/language.md#create-custom-languages).

#### RTL 演示

要尝试 Handsontable 的 RTL 支持,请查看下面的演示:

::: only-for javascript

::: example #example1 :hot-lang --js 1 --ts 2

@[code](@/content/guides/internationalization/layout-direction/javascript/example1.js)
@[code](@/content/guides/internationalization/layout-direction/javascript/example1.ts)

:::

:::

::: only-for react

::: example #example1 :react-languages  --js 1 --ts 2

@[code](@/content/guides/internationalization/layout-direction/react/example1.jsx)
@[code](@/content/guides/internationalization/layout-direction/react/example1.tsx)

:::

:::

### 受布局方向影响的元素

设置不同的布局方向会影响 Handsontable 的以下区域的行为:

| 元素                                                                                                                               | LTR布局方向                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | RTL布局方向                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 起始边                                                                                                                             | 左侧边缘被视为网格的起始边缘.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | 右侧边缘被视为网格的起始边缘.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 结束边缘                                                                                                                           | 右侧边缘被视为网格的结束边缘.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | 左侧边缘被视为网格的结束边缘.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 屏幕上的列顺序                                                                                                                     | 单元格渲染从屏幕左侧流向右侧.<br><br>单元格 (0, 0) 渲染在网格的左上角.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | 单元格渲染从屏幕的右侧流向左侧.<br><br>单元格 (0, 0) 渲染在网格的右上角.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 单元格中的文本方向                                                                                                                 | 所有单元格都继承容器元素的 LTR 方向.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | 所有单元都从容器元素继承 RTL 方向.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 行标题的位置                                                                                                                       | 行标题呈现在网格的左侧边缘.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | 行标题呈现在网格的右侧边缘.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [冻结列]的位置(@/guides/columns/column-freezing/column-freezing.md)                                                                | 列被冻结在网格的左边缘.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | 列被冻结在网格的右侧边缘.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [填充句柄](@/api/options.md#fillHandle)的位置                                                                                      | 填充手柄显示在选区边框的右下角.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | 填充手柄显示在选区边框的左下角.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [选择](@/guides/cell-features/selection/selection.md) 手柄在移动设备上的位置                                                       | 在移动设备上,选择手柄显示在选择边框的左上角和右下角.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | 在移动设备上,选择手柄显示在选择边框的右上角和左下角.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [自定义边框](@/guides/cell-features/formatting-cells/formatting-cells.md#custom-cell-borders)                                      | 在 [`customBorders`](@/api/options.md#customborders) 选项中:<br><br>-左侧边框被视为起始边框.<br>-右侧边框被视为作为结束边界.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | 在 [`customBorders`](@/api/options.md#customborders) 选项中:<br><br>-右侧边框被视为起始边框.<br>-左侧边框被视为作为结束边界.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [上下文菜单](@/guides/accessories-and-menus/context-menu/context-menu.md) 和 [列菜单](@/guides/columns/column-menu/column-menu.md) | 菜单的布局方向是从左到右.<br><br>子菜单向右展开.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | 菜单的布局方向是从右到左.<br><br>子菜单向左展开.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [键盘导航](@/guides/navigation/keyboard-shortcuts/keyboard-shortcuts.md)                                                           | <kbd>**Tab**</kbd>向右移动一个单元格.<br><br><kbd>**Shift**</kbd>+<kbd>**Tab**</kbd> 向左移动一个单元格.<br><br><kbd>**Home**</kbd>移动到当前行最左边的非冻结单元格.<br><br><kbd>**Ctrl**</kbd>/<kbd>**Cmd**</kbd>+<kbd>**Home**</kbd> 移动到网格左上角的非冻结单元格.<br><br><kbd>**Shift**</kbd>+<kbd>**Home**</kbd> 将选择范围扩展到当前行最左侧的非冻结单元格.<br><br><kbd>**End**</kbd> 移动到当前行最右边的非冻结单元格.<br><br><kbd>**Ctrl**</kbd>/<kbd>**Cmd**</kbd>+<kbd>**End**</kbd> 移动到网格右下角的非冻结单元格.<br><br><kbd>**Shift**</kbd>+<kbd>**End**</kbd> 将选择范围扩展到当前行最右侧的非冻结单元格.<br><br><kbd>**Delete**</kbd> 删除光标右侧的一个字符.<br><br><kbd>**Backspace**</kbd> 删除光标左侧的一个字符. | <kbd>**Tab**</kbd> 向左移动一个单元格.<br><br><kbd>**Shift**</kbd>+<kbd>**Tab**</kbd> 向右移动一个单元格.<br><br><kbd>**Home**</kbd> 移动到当前行最右边的非冻结单元格.<br><br><kbd>**Ctrl**</kbd>/<kbd>**Cmd**</kbd>+<kbd>**Home**</kbd> 移动到网格右上角的非冻结单元格.<br><br><kbd>**Shift**</kbd>+<kbd>**Home**</kbd> 将选择范围扩展到当前行最右侧的非冻结单元格.<br><br><kbd>**End**</kbd> 移动到当前行最左边的非冻结单元格.<br><br><kbd>**Ctrl**</kbd>/<kbd>**Cmd**</kbd>+<kbd>**End**</kbd> 移动到网格左下角的非冻结单元格.<br><br><kbd>**Shift**</kbd>+<kbd>**End**</kbd> 将选择范围扩展到当前行最左侧的非冻结单元格.<br><br><kbd>**Delete**</kbd> 删除光标左侧的一个字符.<br><br><kbd>**Backspace**</kbd> 删除光标右侧的一个字符. |

上面的列表并不详尽.设置不同的布局方向可能也会影响 Handsontable 的其他区域.

## 设置布局方向

您只能在 Handsontable 初始化时设置布局方向.初始化后 [`layoutDirection`](@/api/options.md#layoutdirection) 选项的任何更改(例如使用 [`updateSettings()`](@/api/core.md#updatesettings) 方法)都会被忽略.

### 自动设置布局方向

您可以自动设置Handsontable的布局方向,
基于 HTML 文档的`dir`属性的值.
这是默认设置.

在 Handsontable 初始化时,
添加 [`layoutDirection`](@/api/options.md#layoutdirection) 作为顶级网格选项,
并将其设置为`继承`.由于这是默认设置,您也可以完全跳过设置 `layoutDirection` 选项.

在下面的示例中,RTL 布局方向继承自 DOM 树中的`dir`属性:

::: only-for javascript

::: example #example2 --html 1 --js 2 --ts 3

@[code](@/content/guides/internationalization/layout-direction/javascript/example2.html)
@[code](@/content/guides/internationalization/layout-direction/javascript/example2.js)
@[code](@/content/guides/internationalization/layout-direction/javascript/example2.ts)

:::

:::

::: only-for react

::: example #example2 :react --js 1 --ts 2

@[code](@/content/guides/internationalization/layout-direction/react/example2.jsx)
@[code](@/content/guides/internationalization/layout-direction/react/example2.tsx)

:::

:::

### 设置布局方向为RTL

无论 HTML 文档的`dir`属性如何,您都可以从右向左渲染 Handsontable.

在 Handsontable 初始化时,添加 [`layoutDirection`](@/api/options.md#layoutdirection) 作为顶级网格选项,
并将其设置为`rtl`:

::: only-for javascript

::: example #example3 --js 1 --ts 2

@[code](@/content/guides/internationalization/layout-direction/javascript/example3.js)
@[code](@/content/guides/internationalization/layout-direction/javascript/example3.ts)

:::

:::

::: only-for react

::: example #example3 :react --js 1 --ts 2

@[code](@/content/guides/internationalization/layout-direction/react/example3.jsx)
@[code](@/content/guides/internationalization/layout-direction/react/example3.tsx)

:::

:::

### 设置布局方向为LTR

无论 HTML 文档的`dir`属性如何,您都可以从左到右渲染 Handsontable.

在 Handsontable 初始化时,添加 [`layoutDirection`](@/api/options.md#layoutdirection) 作为顶级网格选项,
并将其设置为`ltr`:

::: only-for javascript

::: example #example4 --js 1 --ts 2

@[code](@/content/guides/internationalization/layout-direction/javascript/example4.js)
@[code](@/content/guides/internationalization/layout-direction/javascript/example4.ts)

:::

:::

::: only-for react

::: example #example4 :react --js 1 --ts 2

@[code](@/content/guides/internationalization/layout-direction/react/example4.jsx)
@[code](@/content/guides/internationalization/layout-direction/react/example4.tsx)

:::

:::

## 设置文本水平对齐方式

您可以应用不同的水平[文本对齐方式](@/guides/cell-features/text-alignment/text-alignment.md) 设置,覆盖由网格布局方向产生的水平文本对齐方式.

在下面的示例中,某些列明确左对齐、居中对齐或右对齐:

::: only-for javascript

::: example #example5 --js 1 --ts 2

@[code](@/content/guides/internationalization/layout-direction/javascript/example5.js)
@[code](@/content/guides/internationalization/layout-direction/javascript/example5.ts)

:::

:::

::: only-for react

::: example #example5 :react --js 1 --ts 2

@[code](@/content/guides/internationalization/layout-direction/react/example5.jsx)
@[code](@/content/guides/internationalization/layout-direction/react/example5.tsx)

:::

:::

您可以将水平文本对齐设置应用于:
- [整个网格](@/guides/getting-started/configuration-options/configuration-options.md#set-grid-options),通过设置 [`className`](@/api/options.md#classname)在全球层面
- [单个列](@/guides/getting-started/configuration-options/configuration-options.md#set-column-options),通过设置 [`className`](@/api/options.md#classname)列级别
- [单独行](@/guides/getting-started/configuration-options/configuration-options.md#set-row-options),通过设置 [`className`](@/api/options.md#classname) 使用[`cells`](@/api/options.md#cells) 选项的回调
- [单个单元格](@/guides/getting-started/configuration-options/configuration-options.md#set-cell-options),通过设置 [`className`](@/api/options.md#classname)细胞水平
- [单独的网格元素,基于您实现的任何逻辑](@/guides/getting-started/configuration-options/configuration-options.md#implement-custom-logic),通过设置 [`className`](@/api/options.md#classname) 使用 [`cells`](@/api/options.md#cells) 选项的回调

## 相关文章

### 相关指南

<div class="boxes-list gray">

- [语言](@/guides/internationalization/language/language.md)
- [当地化](@/guides/internationalization/locale/locale.md)
- [输入法支持](@/guides/internationalization/ime-support/ime-support.md)

</div>

### 相关API参考

- 配置选项:
  - [`language`](@/api/options.md#language)
  - [`layoutDirection`](@/api/options.md#layoutdirection)
  - [`locale`](@/api/options.md#locale)
- 核心方法:
  - [`getDirectionFactor()`](@/api/core.md#getdirectionfactor)
  - [`getTranslatedPhrase()`](@/api/core.md#gettranslatedphrase)
  - [`isLtr()`](@/api/core.md#isltr)
  - [`isRtl()`](@/api/core.md#isrtl)
- Hooks:
  - [`afterLanguageChange`](@/api/hooks.md#afterlanguagechange)
  - [`beforeLanguageChange`](@/api/hooks.md#beforelanguagechange)
