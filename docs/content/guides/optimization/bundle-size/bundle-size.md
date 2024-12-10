---
id: vjcvrdeh
title: 打包尺寸
metaTitle: Bundle size - JavaScript Data Grid | Handsontable
description: Reduce the size of your JavaScript bundle by getting rid of redundant Handsontable modules and Moment.js locales.
permalink: /bundle-size
canonicalUrl: /bundle-size
tags:
  - size
react:
  id: c8onyes4
  metaTitle: Bundle size - React Data Grid | Handsontable
searchCategory: Guides
category: Optimization
---

# 打包尺寸

通过摆脱冗余的 Handsontable 模块和 Moment.js 语言环境来减小 JavaScript 包的大小。

[[toc]]

## 使用模块

为了减少包的大小和 JavaScript 解析时间，请仅导入您实际使用的 Handsontable 的 [modules](@/guides/tools-and-building/modules/modules.md)，而不是导入完整的包。

以下示例展示了如何在 Handsontable 基本模块之上导入和注册 [`ContextMenu`](@/api/contextMenu.md) 插件，而不导入任何其他内容。

::: only-for javascript

```js
import Handsontable from 'handsontable/base';
import { registerPlugin, ContextMenu } from 'handsontable/plugins';

registerPlugin(ContextMenu);

new Handsontable(container, {
  contextMenu: true,
});
```

:::

::: only-for react

```js
import Handsontable from 'handsontable/base';
import { HotTable } from '@handsontable/react-wrapper';
import { registerPlugin, ContextMenu } from 'handsontable/plugins';

registerPlugin(ContextMenu);

const App = () => {
  return (
    <HotTable
      contextMenu={true}
    />
  );
};
```

:::

## 优化 Moment.js

默认情况下，[Moment.js](https://momentjs.com/)（Handsontable 的依赖项）附带所有可能的语言环境，这会增加包的大小。

要[优化 Moment.js 语言环境](https://github.com/jmblog/how-to-optimize-momentjs-with-webpack)，请使用 [webpack 的 `IgnorePlugin`](https://webpack.js.org/插件/忽略插件/):

```js
const webpack = require('webpack');

module.exports = {
  //...
  plugins: [
    // 忽略所有 Moment.js 语言环境文件
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],
};
```

然后显式加载 Moment.js，仅导入您需要的区域设置：

::: only-for javascript

```js
import Handsontable from 'handsontable/base';
import { registerCellType, DateCellType } from 'handsontable/cellTypes';

// 显式导入 Moment.js
import moment from 'moment';
// 显式导入您选择的 Moment.js 语言环境
import 'moment/locale/ja';

// 注册您选择的 Moment.js 语言环境
moment.locale('ja');
registerCellType(DateCellType);

new Handsontable(container, {
  type: 'date',
});
```

:::

::: only-for react
```js
import Handsontable from 'handsontable/base';
import { HotTable } from '@handsontable/react-wrapper';
import { registerCellType, DateCellType } from 'handsontable/cellTypes';

// 显式导入 Moment.js
import moment from 'moment';
// 显式导入您选择的 Moment.js 语言环境
import 'moment/locale/ja';

// 注册您选择的 Moment.js 语言环境
moment.locale('ja');
registerCellType(DateCellType);

const App = () => {
  return (
    <HotTable
      type="date"
    />
  );
};
```

:::

## 相关指南

- [Modules](@/guides/tools-and-building/modules/modules.md)
