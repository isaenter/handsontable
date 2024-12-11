---
id: rqtn1ajf
title: 安装
metaTitle: Installation - JavaScript Data Grid | Handsontable
description: Install Handsontable through your preferred package manager, or import Handsontable's assets directly from a CDN.
permalink: /installation
canonicalUrl: /installation
tags:
  - quick start
react:
  id: zqk2jjw3
  metaTitle: Installation - React Data Grid | Handsontable
searchCategory: Guides
category: Getting started
---

# 安装

::: only-for javascript

通过您首选的包管理器安装 Handsontable,或直接从 CDN 导入 Handsontable 的资产.

:::

::: only-for react

通过您首选的包管理器安装 Handsontable,并通过`HotTable`组件的属性控制您的网格.

:::

[[toc]]

<div class="instalationPage">

::: only-for javascript

## 概述

要开始使用 Handsontable,请按照下列步骤操作:

## 安装Handsontable

以您喜欢的方式获取 Handsontable 的文件.

### 使用包管理器

要使用包管理器在本地安装 Handsontable,请运行以下命令之一:

<code-group>
  <code-block title="npm">

  ```bash
  npm install handsontable
  ```

  </code-block>
  <code-block title="Yarn">

  ```bash
  yarn add handsontable
  ```

  </code-block>
  <code-block title="pnpm">

  ```bash
  pnpm add handsontable
  ```

  </code-block>
</code-group>

### 使用 CDN

要从 CDN 获取 Handsontable 的文件,请使用以下位置:

- [https://cdn.jsdelivr.net/npm/handsontable/dist/handsontable.full.min.js](https://cdn.jsdelivr.net/npm/handsontable/dist/handsontable.full.min.js)
- [https://cdn.jsdelivr.net/npm/handsontable/dist/handsontable.full.min.css](https://cdn.jsdelivr.net/npm/handsontable/dist/handsontable.full.min.css)

## 导入 Handsontable 的 JavaScript

将 Handsontable 的 JavaScript 导入到您的应用程序中.

::: tip
为了获得更优化的构建,请使用 [modules](@/guides/tools-and-building/modules/modules.md) 导入 Handsontable JavaScript 的各个部分.
:::

### 使用 CommonJS 或包管理器

如果您将 Handsontable 用作 CommonJS 包或 ECMAScript 模块(使用包管理器),请将 Handsontable 的完整发行版导入为 JavaScript 文件.

使用捆绑程序首选的文件导入方法.例如:

```js
import Handsontable from 'handsontable';
```

### 使用 `script` 标签

如果您将 Handsontable 用作传统的 UMD 包,请将 Handsontable 的完整发行版导入为缩小的 JavaScript 文件.

使用`script`标签.例如,如果您从 CDN 加载 Handsontable 的 JavaScript:

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/handsontable/dist/handsontable.full.min.js"></script>
```

## 导入 Handsontable 的 CSS

将 Handsontable 的 CSS 导入到您的应用程序中.

### 使用`import`

如果您的捆绑程序允许,您可以使用`import`语句导入 Handsontable 的完整分发 CSS 文件.

```js
import 'handsontable/styles/handsontable.css';
import 'handsontable/styles/ht-theme-main.css';
```

### 使用 `link` 标签

您还可以使用链接标签导入 Handsontable 的 CSS:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/handsontable/dist/handsontable.full.min.css" />
```

## 创建一个容器

在 HTML 中,添加一个空的`div`,它用作 Handsontable 实例的容器.

```html
<div id="example"></div>
```

## 初始化你的网格

现在将您的容器变成包含示例数据的数据网格.

```js
const container = document.querySelector('#example');

const hot = new Handsontable(container, {
  data: [
    ['', 'Tesla', 'Volvo', 'Toyota', 'Ford'],
    ['2019', 10, 11, 12, 13],
    ['2020', 20, 11, 14, 13],
    ['2021', 30, 15, 12, 13]
  ],
  rowHeaders: true,
  colHeaders: true,
  height: 'auto',
  autoWrapRow: true,
  autoWrapCol: true,
  licenseKey: 'non-commercial-and-evaluation' // 仅供非商业用途
});
```

### 预览结果

::: example #example --js 1 --ts 2

@[code](@/content/guides/getting-started/installation/javascript/example.js)
@[code](@/content/guides/getting-started/installation/javascript/example.ts)

:::

:::

::: only-for react

## 安装 Handsontable

要使用包管理器在本地安装 Handsontable,请运行以下命令之一:

<code-group>
  <code-block title="npm">

  ```bash
  npm install handsontable @handsontable/react-wrapper
  ```

  </code-block>
  <code-block title="Yarn">

  ```bash
  yarn add handsontable @handsontable/react-wrapper
  ```

  </code-block>
  <code-block title="pnpm">

  ```bash
  pnpm add handsontable @handsontable/react-wrapper
  ```

  </code-block>
</code-group>

## 导入 Handsontable 的 CSS

将 Handsontable 的 CSS 导入到您的应用程序中.

```jsx
import 'handsontable/styles/handsontable.css';
import 'handsontable/styles/ht-theme-main.css';
```

## 注册Handsontable的模块

通过单个函数调用导入并注册所有 Handsontable 模块:

```jsx
import Handsontable from 'handsontable/base';
import { registerAllModules } from 'handsontable/registry';

registerAllModules();
```

或者,要减少 JavaScript 包的大小,[仅导入您需要的模块](@/guides/tools-and-building/modules/modules.md).

## 使用 `HotTable` 组件

主要的 Handsontable 组件称为`HotTable`.

```jsx
import { HotTable } from '@handsontable/react-wrapper';
```

要设置 Handsontable 的[配置选项](@/guides/getting-started/configuration-options/configuration-options.md),请使用 `HotTable` 的 props.例如:

```jsx
<HotTable
  data={[
    ['', 'Tesla', 'Volvo', 'Toyota', 'Ford'],
    ['2019', 10, 11, 12, 13],
    ['2020', 20, 11, 14, 13],
    ['2021', 30, 15, 12, 13]
  ]}
  rowHeaders={true}
  colHeaders={true}
  height="auto"
  autoWrapRow={true}
  autoWrapCol={true}
  licenseKey="non-commercial-and-evaluation" // 仅供非商业用途
/>
```

::: tip

`@handsontable/react-wrapper` 至少需要 React@18,并且是在构建时考虑到功能编辑器和渲染器组件.如果您使用较低版本的 React 或者更喜欢使用基于类的组件,则可以使用`@handsontable/react` 包.

有关`@handsontable/react`的更多信息,请参阅 [14.6 文档](https://handsontable.com/docs/14.6/react-data-grid/installation/).

:::

### 预览结果

::: example #example :react --js 1 --ts 2

@[code](@/content/guides/getting-started/installation/react/example.jsx)
@[code](@/content/guides/getting-started/installation/react/example.tsx)

:::

:::

</div>

## 相关文章

### 相关指南

- [模块](@/guides/tools-and-building/modules/modules.md)

### 相关API参考

- 配置选项:
  - [`maxCols`](@/api/options.md#maxcols)
  - [`maxRows`](@/api/options.md#maxrows)
  - [`minCols`](@/api/options.md#mincols)
  - [`minRows`](@/api/options.md#minrows)
  - [`minSpareCols`](@/api/options.md#minsparecols)
  - [`minSpareRows`](@/api/options.md#minsparerows)
  - [`startCols`](@/api/options.md#startcols)
  - [`startRows`](@/api/options.md#startrows)
- Hooks:
  - [`afterInit`](@/api/hooks.md#afterinit)
  - [`beforeInit`](@/api/hooks.md#beforeinit)
  - [`beforeInitWalkontable`](@/api/hooks.md#beforeinitwalkontable)
  - [`construct`](@/api/hooks.md#construct)
