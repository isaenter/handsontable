---
id: 51aacis1
title: 导出为 CSV
metaTitle: 导出为 CSV - JavaScript Data Grid | Handsontable
description: 将网格的原始数据导出为 CSV 格式，作为可下载文件、blob 或字符串.使用 Handsontable 的配置选项自定义您的导出.
permalink: /export-to-csv
canonicalUrl: /export-to-csv
tags:
  - export to file
  - save file
react:
  id: sfxo3g54
  metaTitle: 导出为 CSV - React Data Grid | Handsontable
searchCategory: Guides
category: Accessories and menus
---

# 导出为 CSV

将网格的原始数据导出为 CSV 格式，作为可下载文件、blob 或字符串.使用 Handsontable 的配置选项自定义您的导出.

[[toc]]

## 示例

请注意，CSV 导出仅包含原始数据，不包含公式、样式或格式信息.

### 导出到文件

::: only-for javascript

::: example #example1 --html 1 --js 2 --ts 3

@[code](@/content/guides/accessories-and-menus/export-to-csv/javascript/example1.html)
@[code](@/content/guides/accessories-and-menus/export-to-csv/javascript/example1.js)
@[code](@/content/guides/accessories-and-menus/export-to-csv/javascript/example1.ts)

:::

:::

::: only-for react

::: example #example1 :react --js 1 --ts 2

@[code](@/content/guides/accessories-and-menus/export-to-csv/react/example1.jsx)
@[code](@/content/guides/accessories-and-menus/export-to-csv/react/example1.tsx)

:::

:::


### 导出为 JavaScript Blob 对象

在浏览器开发人员工具中打开控制台以查看以下示例的结果.

::: only-for javascript

::: example #example2 --html 1 --js 2 --ts 3

@[code](@/content/guides/accessories-and-menus/export-to-csv/javascript/example2.html)
@[code](@/content/guides/accessories-and-menus/export-to-csv/javascript/example2.js)
@[code](@/content/guides/accessories-and-menus/export-to-csv/javascript/example2.ts)

:::

:::

::: only-for react

::: example #example2 :react --js 1 --ts 2

@[code](@/content/guides/accessories-and-menus/export-to-csv/react/example2.jsx)
@[code](@/content/guides/accessories-and-menus/export-to-csv/react/example2.tsx)

:::

:::

### 导出为字符串

在浏览器开发人员工具中打开控制台以查看以下示例的结果.

::: only-for javascript

::: example #example3 --html 1 --js 2 --ts 3

@[code](@/content/guides/accessories-and-menus/export-to-csv/javascript/example3.html)
@[code](@/content/guides/accessories-and-menus/export-to-csv/javascript/example3.js)
@[code](@/content/guides/accessories-and-menus/export-to-csv/javascript/example3.ts)

:::

:::

::: only-for react

::: example #example3 :react --js 1 --ts 2

@[code](@/content/guides/accessories-and-menus/export-to-csv/react/example3.jsx)
@[code](@/content/guides/accessories-and-menus/export-to-csv/react/example3.tsx)

:::

:::

## 可用方法

::: only-for react

::: tip

要使用 Handsontable API，您需要访问 Handsontable 实例.您可以通过利用对`HotTable`组件的引用并读取其`hotInstance`属性来做到这一点.

有关更多信息，请参阅[实例方法](@/guides/getting-started/react-methods/react-methods.md)页面.

:::

:::

该插件公开了以下方法来导出数据.

- [`downloadFile(format, options)`](@/api/exportFile.md#downloadfile) - 允许您直接在浏览器中生成可下载的文件.
- [`exportAsBlob(format, options)`](@/api/exportFile.md#exportasblob) - 允许您导出 JavaScript Blob 对象.
- [`exportAsString(format, options)`](@/api/exportFile.md#exportasstring) - 允许您将数据导出为字符串.

他们都接受相同的论点:

### 格式 `String`

这是准备预定义设置对象所必需的.目前我们仅允许使用`csv`.

### 选项 `Object`

这是一个可选参数.它包含一组受支持的选项并扩展了预定义的 CSV 配置.有关可以使用的选项的完整列表，请参阅[可用选项](#available-options-in-the-export-configuration).

## 导出配置中的可用选项

您可以在下面找到所有支持的选项:

### bom `Boolean`

允许您导出带有 BOM 签名的数据.

请注意，此属性将在内容前面添加 UTF-16BE BOM 签名 (_FE FF_).浏览器会自动将签名转换为UTF-8值(_EF BB BF_`).

您可以在所有[可用方法](#available-methods)中使用此属性.

默认值:`true`

### 列分隔符 `String`

允许您定义列分隔符.

您可以在所有[可用方法](#available-methods)中使用此属性.

默认值:`','`

### 列标题 `Boolean`

设置为`true`时，在导出的数据中包含列标题.

您可以在所有[可用方法](#available-methods)中使用此属性.

`columnHeaders` 选项不支持 [`NestedHeaders` 插件](@/api/nestedHeaders.md).

默认值:`false`

### 导出隐藏列 `Boolean`

允许您从隐藏列导出数据.

您可以在所有[可用方法](#available-methods)中使用此属性.

默认值:`false`

### 导出隐藏行 `Boolean`

允许您从隐藏行导出数据.

您可以在所有[可用方法](#available-methods)中使用此属性.

默认值:`false`

### 文件扩展名 `String`

允许您定义文件扩展名.

您可以在`downloadFile()`方法中使用此属性.

默认值:`'csv'`

### 文件名 `String`

允许您定义文件名.

您可以使用预定义的占位符，该占位符将被日期替换.

您可以在`downloadFile()`方法中使用此属性.

默认值:`'Handsontable [YYYY]-[MM]-[DD]'`

### mime类型 `String`

允许您定义 MIME 类型.

您可以在`downloadFile()`和`exportAsBlob()`方法中使用此属性.

默认值:`'text/csv'`

### 范围 `Array`

允许您定义要导出的数据集范围.它由数字、视觉索引`[startRow、startColumn、endRow、endColumn]`数组表示.

您可以在所有[可用方法](#available-methods)中使用此属性.

默认值:`'text/csv'`

### 行分隔符 `String`

允许您定义行分隔符.

您可以在所有[可用方法](#available-methods)中使用此属性.

默认值:`'\r\n'`

### 行标题 `Boolean`

允许您导出数据及其行标题.

您可以在所有[可用方法](#available-methods)中使用此属性.

默认值:`false`

## 相关API参考

- 插件:
  - [`ExportFile`](@/api/exportFile.md)
