---
id: o4qhm1bg
title: 无障碍设施Accessibility
metaTitle: 无障碍设施Accessibility - JavaScript Data Grid | Handsontable
description: Learn about Handsontable's accessibility features.
permalink: /accessibility
canonicalUrl: /accessibility
tags:
  - accessibility
  - a11y
  - aria
  - jaws
  - nvda
  - voiceover
  - wcag
  - section 508
  - ada
  - compliance
  - vpat
react:
  id: x82phf34
  metaTitle: 无障碍设施Accessibility - React Data Grid | Handsontable
searchCategory: Guides
category: 无障碍设施Accessibility
---

# 无障碍设施Accessibility

Handsontable 的设计符合全球标准，易于访问.我们优先考虑包容性，确保残障人士也能使用网络应用程序.<br>Handsontable is designed to be accessible, aligning with global standards. We prioritize inclusivity, ensuring web applications are usable by people with disabilities.

[[toc]]

## 概述

Handsontable 的辅助功能包括:<br>Accessibility features of Handsontable include:

- 键盘导航让您无需鼠标即可使用网格.<br>Keyboard navigation that lets you use the grid without a mouse.
- 支持最流行的屏幕阅读器.<br>Support for the most popular screen readers.
- 灵活的 API 来配置键盘快捷键和导航方法.<br>Flexible API to configure keyboard shortcuts and navigation methods.

## 符合标准

大多数全球标准和法规都是根据 WCAG(Web 内容可访问性指南`)制定的.Handsontable 符合[WCAG 2.1 AA](https://www.w3.org/WAI/WCAG21/quickref/)中概述的要求 (打开新窗口`)指南，使其与大多数本地标准兼容，例如:

### 地区

#### 美国USA
- [Section 508 of the US Rehabilitation Act](https://www.section508.gov/)
- [Americans with Disabilities Act (ADA)](https://www.ada.gov/resources/web-guidance/) 

#### 欧洲Europe
- [European Accessibility Act (EAA)](https://ec.europa.eu/social/main.jsp?catId=1202)
- [Web Accessibility Directive (WAD)](https://eur-lex.europa.eu/legal-content/EN/LSU/?uri=CELEX:32016L2102)

#### 加拿大anada
- [Standard on Web Accessibility](https://www.tbs-sct.canada.ca/pol/doc-eng.aspx?id=23601) 

## 键盘导航

Handsontable 不需要鼠标即可在网格元素间导航.对于暂时或永久性运动障碍的用户来说，这是一项重要功能，因为他们很难跟踪鼠标光标.键盘导航也是提高生产力的好方法，这就是为什么许多用户无论对可访问性有何需求，都选择使用键盘而不是鼠标.

我们对数百个实施的经验表明，Handsontable 倾向于用作电子表格应用程序或数据网格组件.虽然乍一看差异似乎很小，但它会显著影响用户对导航的期望.

在典型的电子表格应用程序(例如 Microsoft Excel 或 Google Sheets`)中，您无法将焦点移到标题上.如果不了解复杂的[键盘快捷键](@/guides/navigation/keyboard-shortcuts/keyboard-shortcuts.md)，就很难对数据进行排序或过滤.此外，打开[列菜单](@/guides/columns/column-menu/column-menu.md)并非易事.Handsontable 在这方面提供了灵活性，允许用户在数据网格和电子表格`模式`之间切换.要进行这种切换，您可以使用两个选项的组合:[`navigableHeaders`](@/api/options.md#navigableheaders)启用或禁用将焦点移到标题上，并[`tabNavigation`](@/api/options.md#tabnavigation)决定是否<kbd>**Tab**</kbd>可以使用该键在单元格和标题之间导航.

下表提供了有关这两种情况的更多详细信息:
 
| 方面         | 数据网格模式                                                                                                                                                                        | 电子表格模式(默认`)                                                                                                                                                |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 配置         | [`navigableHeaders: true`](@/api/options.md#navigableheaders) <br>  [`tabNavigation: false`](@/api/options.md#tabnavigation)                                                        | [`navigableHeaders: false`](@/api/options.md#navigableheaders) <br> [`tabNavigation: true`](@/api/options.md#tabnavigation)                                        |
| 主要导航方式 | 箭头键 keys                                                                                                                                                                         | <kbd>**Tab**</kbd> / <kbd>**Shift**</kbd>+<kbd>**Tab**</kbd>                                                                                                       |
| 可导航的标题 | 是                                                                                                                                                                                  | 否                                                                                                                                                                 |
| 导航         | 使用箭头键在网格中导航.使用简单的快捷键(例如<kbd>**Enter**</kbd>或 `)<kbd>**Space**</kbd>打开菜单或与标题、单元格或单元格编辑器交互.<br><br>您不能使用<kbd>**Tab**</kbd>键进行导航. | 使用 <kbd>**Tab**</kbd> /<kbd>**Shift**</kbd>+<kbd>**Tab**</kbd> 在网格中导航.<br>此行为类似于 Excel 或 Google Sheets. <br><br>要打开菜单，请使用更复​​杂的快捷键. |
| 焦点行为     | 一个制表位.网格仅包含在页面选项卡序列中一次.                                                                                                                                        | 多个制表位.网格的所有可选项卡元素(例如单元格`)都包含在页面选项卡序列中.                                                                                            |

## 导航快捷方式

Handsontable 提供了广泛的[键盘快捷键](@/guides/navigation/keyboard-shortcuts/keyboard-shortcuts.md)，但其中一些对于仅使用键盘导航网格的用户特别重要.例如，跨标题导航时触发的操作涉及简单的组合键，使其直观且有用.对于更复杂的场景，您可以通过API[自定义快捷键](@/guides/navigation/custom-shortcuts/custom-shortcuts.md).

| Windows                                                                                                 | macOS                                                                                                  | 动作           | 聚焦元素   |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | -------------- | ---------- |
| <kbd>**Shift**</kbd>+<kbd>**Alt**</kbd>+<kbd>**↓**</kbd>                                                | <kbd>**Shift**</kbd>+<kbd>**Option**</kbd>+<kbd>**↓**</kbd>                                            | 打开列菜单     | 任何单元格 |
| <kbd>**Ctrl**</kbd>+<kbd>**Enter**</kbd>                                                                | <kbd>**Cmd**</kbd>+<kbd>**Enter**</kbd>                                                                | 打开列菜单     | 列标题     |
| <kbd>**Enter**</kbd>                                                                                    | <kbd>**Enter**</kbd>                                                                                   | 对数据进行排序 | 列标题     |
| <kbd>**Alt**</kbd>+<kbd>**A**</kbd>                                                                     | <kbd>**Option**</kbd>+<kbd>**A**</kbd>                                                                 | 清除过滤器     | 任何单元格 |
| <kbd>**Ctrl**</kbd>+<kbd>**Space**</kbd>                                                                | <kbd>**Ctrl**</kbd>+<kbd>**Space**</kbd>*                                                              | 选择一列       | 任何单元格 |
| <kbd>**Shift**</kbd>+<kbd>**Space**</kbd>                                                               | <kbd>**Shift**</kbd>+<kbd>**Space**</kbd>                                                              | 选择一行       | 任何单元格 |
| <kbd>**Ctrl**</kbd>+<kbd>**Shift**</kbd>+<kbd>**\\**</kbd> <br> <kbd>**Shift**</kbd>+<kbd>**F10**</kbd> | <kbd>**Cmd**</kbd>+<kbd>**Shift**</kbd>+<kbd>**\\**</kbd> <br> <kbd>**Shift**</kbd>+<kbd>**F10**</kbd> | 打开右键菜单   | 任何单元格 |

*要使用此快捷方式，请在 **系统设置**> **下禁用 <kbd>**Ctrl**</kbd>+<kbd>**Space**</kbd> 组合键的默认 macOS 行为键盘**> **键盘快捷键**> **输入源**.

## 支持屏幕阅读器

尽管语义 HTML 不需要任何附加属性即可由辅助技术正确解释，但 HTML 规范并未完全涵盖 Handsontable 的一些复杂功能.这就是为什么 Handsontable 为屏幕阅读器提供支持，并将 ARIA 属性(可访问的富互联网应用程序`)应用于其 HTML 标记.

Handsontable 的每个新版本都通过以下屏幕阅读器进行了全面的可访问性测试:

- NVDA (Windows)
- JAWS (Windows)
- VoiceOver (macOS)

## 可访问的数据网格演示

查看下面的交互式演示，了解各种 Handsontable 设置如何影响其可访问性级别和用户体验.

::: only-for javascript angular vue

::: example #example1 --html 1 --css 2 --js 3 --ts 4

@[code](@/content/guides/accessibility/accessibility/javascript/example1.html)
@[code](@/content/guides/accessibility/accessibility/javascript/example1.css)
@[code](@/content/guides/accessibility/accessibility/javascript/example1.js)
@[code](@/content/guides/accessibility/accessibility/javascript/example1.ts)

:::

:::

::: only-for react

::: example #example2 :react --css 1 --js 2 --ts 3

@[code](@/content/guides/accessibility/accessibility/react/example2.css)
@[code](@/content/guides/accessibility/accessibility/react/example2.jsx)
@[code](@/content/guides/accessibility/accessibility/react/example2.tsx)

:::

:::

## 禁用 DOM 虚拟化以提高可访问性

默认情况下，Handsontable使用DOM虚拟化仅显示[行](@/guides/rows/row-virtualization/row-virtualization.md)
和当前在屏幕上可见的[列](@/guides/columns/column-virtualization/column-virtualization.md)，
加上可见区域之外的一些额外单元格，以确保无缝滚动体验.

然而，辅助技术依赖于 DOM 中的元素以正确的顺序出现.
否则，它们需要使用[附加 ARIA 属性](https://www.w3.org/WAI/ARIA/apg/practices/grid-and-table-properties)，
例如`row-colindex`或`aria-rowindex`，以了解网格的结构并准确地向用户宣布(读取`)它.

我们已经使用 ARIA 属性来描述数据排序、隐藏列或行以及合并单元格.
不幸的是，我们的测试发现屏幕阅读器要么宣布不正确的索引，要么完全忽略 ARIA 属性.
为了解决这个问题，我们建议禁用 DOM 虚拟化，这需要将所有网格元素加载到浏览器中.
此操作创建一个完整的[辅助功能树](https://developer.mozilla.org/en-US/docs/Glossary/Accessibility_tree)，可以轻松解析
并通过辅助技术进行解释.
::: only-for javascript

```js
const hot = new Handsontable(container, {
  // 禁用列虚拟化
  renderAllColumns: true,
  // 禁用行虚拟化
  renderAllRows: true,
});
```

:::

::: only-for react

```js
<HotTable
  // 禁用列虚拟化
  renderAllColumns={true}
  // 禁用行虚拟化
  renderAllRows={true}
/>
```

:::

## 高对比度主题

建议文本与图像或背景的[最小对比度](https://www.w3.org/WAI/WCAG21/quickref/#contrast-minimum) 为 4.5:1.要与 Handsontable 的默认主题实现这种程度的对比，您可以:

- 用您自己的样式覆盖网格的 CSS.
- 使用第三方软件，例如 Google 支持的 Chrome 的 [高对比度](https://chrome.google.com/webstore/detail/high-contrast/djcfdncoelnlbldjfhinnjlhdjlikmph) 扩展程序.

## 对开发者的要求

当您自定义 Handsontable 时，您有责任确保解决方案的可访问性.特别是当您创建[自定义单元类型](@/guides/cell-types/cell-type/cell-type.md) 或[自定义插件](@/guides/tools-and-building/custom-plugins/custom-plugins.md)，请记住让每个人都可以访问它们.

我们对定制开发的建议:

- 经常根据 WCAG 2.1 要求测试您的代码.
- 使用适当的颜色对比度、字体大小和语义 HTML.
- 如果需要，实施附加 WAI-ARIA 属性.
- 避免闪烁或闪烁的内容.
- 与具有不同类型残疾的真实用户一起测试您的自定义设置.如果您无法接触到真实用户，请尝试 [Funkify](https://www.funkify.org/)，这是一个残障模拟器，它可以帮助您从不同残障用户的角度来看待您的应用程序.

::: tip

自定义 Handsontable 修改的质量可能会影响应用程序的可访问性级别.确保使用 [Lighthouse](https://developers.google.com/web/tools/lighthouse) 等工具主动检查您的更改如何影响应用程序的整体可访问性.

:::

## 保持可访问性

我们通过采取以下措施确保我们的数据网格保持可访问性:

- 我们使用一系列辅助功能测试工具检查 Handsontable 的辅助功能得分.
- 我们使用自动视觉回归测试.
- 我们使用最流行的屏幕阅读器手动测试 Handsontable 的所有功能.
- 我们使用自动化单元和端到端测试.

## 已知限制

- 当[冻结行](@/guides/rows/row-freezing/row-freezing.md)、[冻结列](@/guides/columns/column-freezing/column-freezing.md)或两者同时存在时启用后，某些屏幕阅读器可能会错误地读取总行数和总列数.
- 当您选择属于​​冻结行、冻结列或两者的单元格时，NVDA 和 JAWS 可能会错误地宣告该单元格的列标题名称.
- 屏幕阅读器有时会忽略动态 ARIA 属性.
- `aria-rowcount` 属性故意设置为 `-1`，因为大多数屏幕阅读器要么忽略或误解它.此配置可确保 VoiceOver 等屏幕阅读器的准确性.一旦屏幕阅读器始终正确地处理`aria-rowcount属性，我们计划修改此方法.

## API 参考

有关[选项](@/guides/getting-started/configuration-options/configuration-options.md)、方法和[Handsontable hooks](@/guides/getting-started/events-and-hooks/events)的列表-and-hooks.md) 与可访问性相关，请参阅以下 API 参考页:

- [`autoWrapCol`](@/api/options.md#autowrapcol)
- [`autoWrapRow`](@/api/options.md#autowraprow)
- [`tabNavigation`](@/api/options.md#tabnavigation)
- [`enterBeginsEditing`](@/api/options.md#enterbeginsediting)
- [`enterMoves`](@/api/options.md#entermoves)
- [`navigableHeaders`](@/api/options.md#navigableheaders)
- [`renderAllColumns`](@/api/options.md#renderallcolumns)
- [`renderAllRows`](@/api/options.md#renderallrows)
- [`viewportColumnRenderingOffset`](@/api/options.md#viewportcolumnrenderingoffset)
- [`viewportRowRenderingOffset`](@/api/options.md#viewportrowrenderingoffset)

## 故障排除

如果您没有找到您需要的内容，请尝试以下链接:

- GitHub 上的[查看相关主题](https://github.com/handsontable/handsontable/labels/Accessibility)
- GitHub 上的[报告问题](https://github.com/handsontable/handsontable/issues/new/choose)
- Stack Overflow 上的[提问](https://stackoverflow.com/questions/tagged/handsontable)
- 在 Handsontable 论坛上[开始讨论](https://forum.handsontable.com/c/getting-help/questions)
- [联系我们的技术支持](https://handsontable.com/contact?category=technical_support) 获取帮助
