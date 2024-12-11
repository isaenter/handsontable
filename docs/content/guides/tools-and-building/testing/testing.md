---
id: 6fv7kuj6
title: 测试
metaTitle: Testing - JavaScript Data Grid | Handsontable
description: Run one or multiple tests, using Handsontable's ready-made commands for Jasmine and Puppeteer.
permalink: /testing
canonicalUrl: /testing
tags:
  - Jasmine
  - CLI
  - unit test
  - end to end test
  - puppeteer
  - spec
react:
  id: y3wp74jh
  metaTitle: Testing - React Data Grid | Handsontable
searchCategory: Guides
category: Tools and building
---

# 测试

使用 Handsontable 为 Jasmine 和 Puppeteer 准备的命令运行一项或多项测试.

[[toc]]

## 在浏览器中测试

要在浏览器中运行 Jasmine 测试,请转到以下页面:

- **<YOUR\_LOCALHOST\_ADDRESS>/test/E2ERunner.html** - Handsontable端到端测试套件
- **<YOUR\_LOCALHOST\_ADDRESS>/test/MobileRunner.html** - Handsontable移动测试套件
- **<YOUR\_LOCALHOST\_ADDRESS>/src/3rdparty/walkontable/test/SpecRunner.html** - Walkontable测试套件

## 使用 NPM (CLI) 进行测试

要在命令行中运行 Jasmine 测试(使用 Puppeteer),请首先通过执行`npm install`来安装所有必需的依赖项.在`NPM`完成获取所需模块后,您的工作区就可以进行测试了.

要从 monorepo 的根目录运行所有测试,请使用以下命令:
- `npm run test`

要运行单独的测试,请转到`/handsontable`目录,然后使用以下命令:
- `npm test` - 运行所有测试用例(Handsontable 和 Walkontable).
- `npm test:unit` - 运行所有单元测试.
- `npm test:walkontable` - 仅运行 Walkontable 测试.
- `npm test:e2e` - 运行所有端到端测试.
- `npm run test:e2e --testPathPattern=selection` - 仅运行与文件名`选择`匹配的端到端测试和套件.
- `npm run test:unit --testPathPattern=array` - 仅运行与文件名`array`匹配的单元测试和套件.
- `npm run test:e2e.dump` - 生成 `test/E2ERunner.html` 文件,可以在浏览器环境(Chrome、Firefox 等)中执行该文件以检查测试是否通过.
- `npm run test:e2e.dump -- --watch` - 针对测试文件中检测到的每个更改生成`E2ERunner.html`文件.它对于调试建议很有帮助.

## 测试特定于框架的包装器.

包装器包含自己的特定于框架的测试环境.您可以在包装器目录中运行`npm run test`脚本,或者利用`npm run in`/`npm run all`脚本从根目录运行测试.

请记住,运行包装器测试需要构建 Handsontable(`npm run build`).一旦构建完成,包装器就可以消耗它的主要依赖项.否则,测试将会失败.

## 环境设置

- 由于 Puppeteer 的 `setViewer` 设置,窗口浏览器的大小应至少为 1280 像素宽和 720 像素高.
- 滚动条应该是可见的.滚动条的大小会影响`clientWidth`和`clientHeight`,这会影响可见性以及列数和行数.
- 运行测试的浏览器窗口应该位于顶部.在后台运行时,某些测试将无法通过.
- 焦点应位于浏览器窗口上,并且鼠标应保持静止.移动鼠标或失去窗口焦点可能会干扰测试,导致测试无法通过.

## 视觉测试

为了避免对 Handsontable 的 UI 进行意外更改,我们使用自动化视觉回归测试.

在我们的 [GitHub](https://github.com/handsontable/handsontable/blob/develop/visual-tests/README.md) 上了解更多信息.

## 相关指南

<div class="boxes-list gray">

- [Building](@/guides/tools-and-building/custom-builds/custom-builds.md)

::: only-for javascript

- [Packages](@/guides/tools-and-building/packages/packages.md)

:::

</div>
