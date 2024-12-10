---
id: jn1po47i
title: 主题
metaTitle: Themes - JavaScript Data Grid | Handsontable
description: Use one of the built-in themes - light and dark - or the auto version, which switches between light and dark modes automatically.
permalink: /themes
canonicalUrl: /themes
tags:
  - styling
  - themes
  - figma
  - UI kit
  - CSS variables
  - light theme
  - dark theme
  - colors
  - appearance
  - look and feel
  - visual tokens
  - design system
react:
  id: jn2po47i
  metaTitle: Themes - React Data Grid | Handsontable
searchCategory: Guides
category: Styling
---

# 主题

[[toc]]

使用 Handsontable 的内置主题或通过调整可用的 CSS 变量来自定义其外观。

## 概述

可操作的主题管理设计的大多数视觉元素，并且易于定制。默认情况下，有两个内置主题可用：`main`和`horizo​​n`。这两个主题都具有深色和浅色模式，可以自动调整为您的应用程序的首选配色方案。

主题使您可以控制网格元素和组件，允许您自定义颜色和大小等属性。

## 主题演示

下面是一个演示，其中包含两个内置主题和一个受道格拉斯·亚当斯 (Douglas Adams) 的《银河系漫游指南》一书启发的自定义主题。使用网格上方的下拉菜单探索不同网格元素如何随每个主题变化。

<div :class="['theme-examples', $parent.$parent.themeName]">
<div class="theme-examples-controls">
  <div class="example-container">
    <label class="color-select">
      <select v-model="$parent.$parent.themeName">
        <option value="ht-theme-main">Main Light</option>
        <option value="ht-theme-horizon">Horizon Light</option>
        <option value="ht-theme-main-dark">Main Dark</option>
        <option value="ht-theme-horizon-dark">Horizon Dark</option>
        <option value="ht-no-theme">No theme</option>
      </select>
      <div class="color-box">
        <span class="color" style="background: var(--ht-foreground-color);"></span>
        <span class="color" style="background: var(--ht-background-color);"></span>
        <span class="color" style="background: var(--ht-accent-color);"></span>
      </div>
    </label>
  </div>
</div>

::: only-for javascript

::: example #exampleTheme .disable-auto-theme --js 1 --ts 2
@[code](@/content/guides/styling/themes/javascript/exampleTheme.js)
@[code](@/content/guides/styling/themes/javascript/exampleTheme.ts)
:::

:::

::: only-for react

::: example #exampleTheme .disable-auto-theme :react --js 1 --ts 2
@[code](@/content/guides/styling/themes/react/exampleTheme.jsx)
@[code](@/content/guides/styling/themes/react/exampleTheme.tsx)
:::

:::

</div>

## 内置主题

Handsontable 包括两个内置主题。 `main`主题提供了类似电子表格的界面，非常适合批量编辑任务，并为用户提供熟悉的体验，类似于市场上其他流行的电子表格软件。

另一方面，`地平线`主题更适合数据显示和分析。它隐藏了列之间的垂直线，给人一种更干净、更轻盈的感觉。

## 浅色和深色模式
每个主题都具有三种模式：

- Light mode
- Dark mode
- Auto-dark mode

浅色和深色模式忽略父容器的配色方案，并保持浅色或深色，无论`prefers-color-scheme`媒体查询值如何。自动变暗模式会自动遵循父容器的首选颜色。

以下是每个可用主题、模式及其相应文件名的摘要。

<div class="table-small">

| File name                                        | Root CSS class                                                                       | 描述                                                                                                           |
| ------------------------------------------------ | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| ht-theme-main.css<br>ht-theme-main.min.css       | <span>ht-theme-main<br>ht-theme-main-dark<br>ht-theme-main-dark-auto</span>          | 主题类似于电子表格软件，具有主要来自白色和灰色调色板的柔和颜色，并带有蓝色口音。                               |
| ht-theme-horizon.css<br>ht-theme-horizon.min.css | <span>ht-theme-horizon<br>ht-theme-horizon-dark<br>ht-theme-horizon-dark-auto</span> | 时尚优雅的主题，旨在感觉像企业数据网格，并针对提高内部应用程序中的数据可读性进行了优化。                       |
| handsontable.css<br>handsontable.min.css         | Not required                                                                         | 经典主题，仅在浅色模式下可用。虽然它将在未来的 Handsontable 版本中继续受到支持和测试，但不建议在新项目中使用。 |

</div>

##加载CSS文件

为了确保 Handsontable 正常工作，必须加载基础 CSS 文件和主题 CSS 文件。基本文件包含结构样式，而主题文件包含颜色、大小和网格所需的其他关键变量。

### 导入 CSS 文件（推荐）

```js
// 导入压缩后的基础样式
import "handsontable/styles/handsontable.min.css";
// 导入压缩后的主题样式
import "handsontable/styles/ht-theme-main.min.css";
```

### 从 CDN 加载 CSS

从推荐的 CDN（例如 [JSDelivr](https://www.jsdelivr.com/package/npm/handsontable) 或 [cdnjs](https://cdnjs.com/libraries/handsontable)）加载必要的文件。

```js
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/handsontable/styles/handsontable.min.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/handsontable/styles/ht-theme-main.min.css" />
```

### 与捆绑器一起使用

如果您使用 Vite、Webpack、Parcel 或任何其他捆绑器，您可以像这样导入 CSS 文件：

```js
// ESM (ECMAScript modules)
import "handsontable/styles/handsontable.css";
import "handsontable/styles/ht-theme-main.min.css";

// CommonJS
require("handsontable/styles/handsontable.css");
require("handsontable/styles/ht-theme-main.min.css");
```

## 使用主题

要在应用程序中使用主题，您需要将特定的类名称添加到保存 Handsontable 的 div 容器中。对于`main`主题，您可以从以下 CSS 类中进行选择：

- `ht-theme-main`
- `ht-theme-main-dark`
- `ht-theme-main-dark-auto (recommended)`

```html
<div id="handsontable-example" class="ht-theme-main-dark-auto"></div>
```

或者，您可以在数据网格的全局设置对象中指定主题名称。此方法将自动为您注入类名，覆盖`div`构造函数中传递的任何类名。

使用此方法或`div`中的类名，但不能同时使用两者。

```js
const container = document.querySelector("#handsontable-example");

const hot = new Handsontable(container, {
  // 带有强制性`ht-theme`前缀的主题名称
  themeName: "ht-theme-main-dark-auto",
  // 其他一些选择
});
```

## 创建自定义主题

为了创造

## 已知限制

在某些情况下，浏览器或操作系统强制执行的全局样式可能会影响 Handsontable 的外观。

- 大多数情况下，网格及其子元素的大小不能仅用 CSS 设置。我们正在努力在 2024 年底之前实现这一目标。
- Microsoft Windows 中的高对比度模式。要处理此问题，请使用`forced-colors`媒体查询。
- Google Chrome 中的自动深色主题。要检测自动黑暗主题，请遵循官方 [Chrome 指南](https://developer.chrome.com/blog/auto-dark-theme)。

## 故障排除

没有找到您需要的东西？试试这个：

- GitHub 上的[查看相关主题](https://github.com/handsontable/handsontable/issues/)
- GitHub 上的[报告问题](https://github.com/handsontable/handsontable/issues/new/choose)
- Stack Overflow 上的[提问](https://stackoverflow.com/questions/tagged/handsontable)
- 在 Handsontable 论坛上[开始讨论](https://forum.handsontable.com/c/getting-help/questions)
- [联系我们的技术支持](https://handsontable.com/contact?category=technical_support) 获取帮助
