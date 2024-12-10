---
id: 97k6p9p7
title: 本地化
metaTitle: Locale - JavaScript Data Grid | Handsontable
description: Configure Handsontable's locale settings, to properly handle locale-related data and actions such as filtering, searching, or sorting.
permalink: /locale
canonicalUrl: /locale
tags:
  - internationalization
  - localization
  - L10n
  - i18n
react:
  id: 1ueuuazs
  metaTitle: Locale - React Data Grid | Handsontable
searchCategory: Guides
category: Internationalization
---

# 本地化

配置 Handsontable 的区域设置，以正确处理与区域设置相关的数据和操作，例如过滤、搜索或排序。

[[toc]]

## 概述

Handsontable 的区域设置会影响对数据执行的某些操作，例如：
- [过滤](@/guides/columns/column-filter/column-filter.md)
- [搜索](@/guides/navigation/searching-values/searching-values.md)
- 比较基于区域设置的数据

如果没有正确设置区域设置，上述操作可能无法正常工作。

您可以使用 [`locale`](@/api/options.md#locale) 配置选项来配置您的区域设置。

您可以将 [`locale`](@/api/options.md#locale) 选项设置为任何有效且规范化的 Unicode BCP 47 区域设置标记。默认情况下，Handsontable 的区域设置是`en-US`。

您可以配置区域设置：
- [本地化](#本地化)
  - [概述](#概述)
  - [设置网格的区域设置](#设置网格的区域设置)
  - [设置列的区域设置](#设置列的区域设置)
  - [相关文章](#相关文章)
    - [相关指南](#相关指南)
    - [相关API参考](#相关api参考)

## 设置网格的区域设置

要配置整个网格的区域设置，请将 [`locale`](@/api/options.md#locale) 配置选项设置为顶级网格选项：

::: only-for javascript

```js
const hot = new Handsontable(container, {
  // 将整个网格的区域设置设置为波兰语
  locale: 'pl-PL',
});
```

:::

::: only-for react

```jsx
<HotTable
  // 将整个网格的区域设置设置为波兰语
  locale="pl-PL"
/>
```

:::

您可以将 [`locale`](@/api/options.md#locale) 选项设置为任何有效且规范化的 Unicode BCP 47 区域设置标记。

## 设置列的区域设置

要配置单个列的区域设置，请将 [`locale`](@/api/options.md#locale) 配置选项设置为中级列选项：

::: only-for javascript

```js
const hot = new Handsontable(container, {
  columns: [
    {
      // 将第一列的区域设置设置为波兰语
      locale: 'pl-PL',
    },
    {
      // 将第二列的区域设置设置为德语
      locale: 'de-DE',
    },
    {
      // 将第三列的区域设置设置为日语
      locale: 'ja-JP',
    },
  ],
});
```

:::

::: only-for react

```jsx
<HotTable
  columns={[{
      // 将第一列的区域设置设置为波兰语
      locale: 'pl-PL',
    }, {
      // 将第二列的区域设置设置为德语
      locale: 'de-DE',
    }, {
      // 将第三列的区域设置设置为日语
      locale: 'ja-JP',
    },
  ]}
/>
```

:::

## 相关文章

### 相关指南

<div class="boxes-list gray">

- [语言](@/guides/internationalization/language/language.md)
- [布局方向](@/guides/internationalization/layout-direction/layout-direction.md)
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
