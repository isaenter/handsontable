---
id: svu0391b
title: 网格尺寸
metaTitle: Grid size - JavaScript Data Grid | Handsontable
description: Set the width and height of the grid, using either absolute values or values relative to the parent container.
permalink: /grid-size
canonicalUrl: /grid-size
tags:
  - grid sizing
  - width
  - height
  - dimensions
react:
  id: cifepxzs
  metaTitle: Grid size - React Data Grid | Handsontable
searchCategory: Guides
category: Getting started
---

# 网格尺寸

使用绝对值或相对于父容器的值设置网格的宽度和高度.

[[toc]]

## 设置网格的大小

您需要将网格的容器定义为初始化它的起点.通常,`div`元素成为此容器.该容器应该具有定义的尺寸以及布局的其余部分. Handsontable 支持相对单位,例如`%`、`rem`、`em`、`vh`、`vw`和`px`.

### 在 CSS 中定义尺寸

`width`和`height`都可以定义为内联样式或 CSS 类属性.在这种情况下,正确定义什么应该是`溢出`父级非常重要. Handsontable 使用`overflow: auto`或`overflow:hidden`查找最接近的元素,将其用作可滚动容器.如果没有找到这样的元素,将使用一个窗口.

::: tip

Handsontable 不会观察开箱即用的容器的 CSS 更改.
如果您想观察它,您可以在配置对象中定义维度或创建您自己的观察者.
:::

### 在配置中传递尺寸

您可以将宽度和高度值作为数字或`宽度`/`高度`属性的可能 CSS 值传递给 Handsontable:

::: only-for javascript

```js
{
  width: '100px',
  height: '100px',
}
```

or

```js
{
  width: '75%',
  height: '75%',
}
```
or
```js
{
  width: 100,
  height: 100,
}
```

:::

::: only-for react

```jsx
  <HotTable height={100} width={100} />
```
or
```jsx
  <HotTable height="75%" width="75%" />
```
or
```jsx
  <HotTable height="100px" width="100px" />
```

:::

这些尺寸将在容器元素中设置为内联样式,并且会自动添加`overflow:hidden`.

如果容器是块元素,则其父元素必须定义`高度`.默认情况下,块元素的高度为`0px`,因此`0px`的`100%`仍然是`0px`.

[`updateSettings()`](@/api/core.md#updatesettings) 中调用的更改将使用新属性重新渲染网格.

## 如果没有设置尺寸怎么办

如果您没有定义任何维度,Handsontable 会根据需要生成尽可能多的行和列来填充可用空间.

如果网格的内容不适合视口,则将使用浏览器的本机滚动条进行滚动.为了使其正常工作,Handsontable的[布局方向](@/guides/internationalization/layout-direction/layout-direction.md)(例如,[`layoutDirection: 'rtl'`](@/api/options.md#layoutdirection )) 必须与 HTML 文档的布局方向 (`<html dir='rtl'>`) 相同.否则,水平滚动不起作用.

## 自动调整大小

Handsontable 观察窗口大小的调整.如果窗口的尺寸发生了变化,那么我们检查 Handsontable 是否也应该调整自身大小.由于性能问题,我们使用 debounce 方法来响应窗口大小调整.

您可以通过在 [`beforeRefreshDimensions`](@/api/hooks.md#beforerefreshdimensions) 挂钩中返回 `false` 轻松覆盖此行为.

::: only-for javascript

```js
{
  beforeRefreshDimensions() { return false; }
}
```

:::

::: only-for react

```jsx
  <HotTable beforeRefreshDimensions={() => false} />
```

:::

## 手动调整大小

Handsontable 实例公开了 [`refreshDimensions()`](@/api/core.md#refreshdimensions) 方法,该方法可以帮助您正确调整网格元素的大小.

::: only-for react

::: tip

要使用 Handsontable API,您需要访问 Handsontable 实例.您可以通过利用对`HotTable`组件的引用并读取其`hotInstance`属性来做到这一点.

有关更多信息,请参阅[实例方法](@/guides/getting-started/react-methods/react-methods.md)页面.

:::

:::

```js
hot.refreshDimensions();
```

您可以侦听两个挂钩,[`beforeRefreshDimensions`](@/api/hooks.md#beforerefreshdimensions) 和 [`afterRefreshDimensions`](@/api/hooks.md#afterrefreshdimensions).

::: only-for javascript

::: example #example --html 1 --css 2 --js 3 --ts 4

@[code](@/content/guides/getting-started/grid-size/javascript/example.html)
@[code](@/content/guides/getting-started/grid-size/javascript/example.css)
@[code](@/content/guides/getting-started/grid-size/javascript/example.js)
@[code](@/content/guides/getting-started/grid-size/javascript/example.ts)

:::

:::

::: only-for react

::: example #example :react --css 1 --js 2 --ts 3

@[code](@/content/guides/getting-started/grid-size/react/example.css)
@[code](@/content/guides/getting-started/grid-size/react/example.jsx)
@[code](@/content/guides/getting-started/grid-size/react/example.tsx)

:::

:::

## 相关文章

<div class="boxes-list gray">

- [列宽](@/guides/columns/column-width/column-width.md)
- [行高](@/guides/rows/row-height/row-height.md)

</div>

**相关API参考**

- 配置选项:
  - [`height`](@/api/options.md#height)
  - [`layoutDirection`](@/api/options.md#layoutdirection)
  - [`preventOverflow`](@/api/options.md#preventoverflow)
  - [`width`](@/api/options.md#width)
- 核心方法:
  - [`refreshDimensions()`](@/api/core.md#refreshdimensions)
  - [`updateSettings()`](@/api/core.md#updatesettings)
- Hooks:
  - [`afterCellMetaReset`](@/api/hooks.md#aftercellmetareset)
  - [`afterRefreshDimensions`](@/api/hooks.md#afterrefreshdimensions)
  - [`afterUpdateSettings`](@/api/hooks.md#afterupdatesettings)
  - [`beforeRefreshDimensions`](@/api/hooks.md#beforerefreshdimensions)
