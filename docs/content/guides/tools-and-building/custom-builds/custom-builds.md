---
id: 7a5vawwl
title: 定制构建
metaTitle: Custom builds - JavaScript Data Grid | Handsontable
description: Handsontable's building process transforms the source files located in the code repository into dedicated packages.
permalink: /custom-builds
canonicalUrl: /custom-builds
tags:
  - building
  - bundling
  - contributing
react:
  id: pcflnieu
  metaTitle: Custom builds - React Data Grid | Handsontable
searchCategory: Guides
category: Tools and building
---

# 定制构建

Handsontable 的构建过程将位于代码存储库中的源文件转换为专用包。

[[toc]]

## 概述

### 莫诺雷波

Handsontable 存储库是一个单一存储库，包含以下项目：

| Project                       | Location                  | Description                                                                                                |
| ----------------------------- | ------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `handsontable`                | `/handsontable`           | Main Handsontable project                                                                                  |
| `@handsontable/react`         | `/wrappers/react`         | [React wrapper](@/react/guides/getting-started/introduction/introduction.md)                               |
| `@handsontable/react-wrapper` | `/wrappers/react-wrapper` | [React wrapper (functional components)](@/react/guides/getting-started/introduction/introduction.md)       |
| `@handsontable/angular`       | `/wrappers/angular`       | [Angular wrapper](@/javascript/guides/integrate-with-angular/angular-installation/angular-installation.md) |
| `@handsontable/vue`           | `/wrappers/vue`           | [Vue 2 wrapper](@/javascript/guides/integrate-with-vue/vue-installation/vue-installation.md)               |
| `@handsontable/vue3`          | `/wrappers/vue3`          | [Vue 3 wrapper](@/javascript/guides/integrate-with-vue3/vue3-installation/vue3-installation.md)            |

所有项目都以相同的版本号一起发布。
但每个项目都有自己的[构建](#build-processes)和[测试](@/guides/tools-and-building/testing/testing.md)流程。

### 构建流程

构建过程将位于`/handsontable/src/`目录中的源文件转换为以下输出文件：

- `/handsontable/dist/handsontable.js`
- `/handsontable/dist/handsontable.css`
- `/handsontable/dist/handsontable.full.js`
- `/handsontable/dist/handsontable.full.css`
- `/handsontable/dist/handsontable.full.min.js`
- `/handsontable/dist/handsontable.full.min.css`
- `/handsontable/dist/languages/*`

::: tip

不要修改上面提到的输出文件。相反，在 `/handsontable/src/` 目录中进行更改，然后运行选定的 [build](#build-the-packages)。如果您想通过拉取请求将更改贡献回 Handsontable，这一点尤其重要。

有关分发包的更多信息，请参阅[此文件](https://github.com/handsontable/handsontable/blob/master/handsontable/dist/README.md)。

:::

### 构建要求

Handsontable building processes require:
- [Node.js](https://nodejs.org/) (version **20.x**+)
- [npm](https://www.npmjs.com/) (version **9.x**+)
- Node modules installed through `npm install` (e.g. [webpack](https://webpack.js.org/) and [Babel](https://babeljs.io/))

### `package.json` files

每个 Handsontable [项目](#monorepo) 都有自己的构建过程，在其自己的`package.json`文件中定义。除此之外，根目录还有自己的`package.json`文件：

| File                             | Holds tasks for building:                           |
| -------------------------------- | --------------------------------------------------- |
| `/package.json`                  | - All the packages at once<br>- Individual packages |
| `/handsontable/package.json`     | The JavaScript package                              |
| `/wrappers/react/package.json`   | The React package                                   |
| `/wrappers/angular/package.json` | The Angular package                                 |
| `/wrappers/vue/package.json`     | The Vue 2 package                                   |
| `/wrappers/vue3/package.json`    | The Vue 3 package                                   |

## 运行你的第一个构建

要运行您的第一个构建：
1. 安装[Node.js](https://nodejs.org/)（版本**20.x**+）。
2. 安装[npm](https://www.npmjs.com/)（版本**9.x**+）。
3. 克隆[Handsontable存储库](https://github.com/handsontable/handsontable)。
4. 从根目录运行`npm install`。<br>所有必需的依赖项都会安装。
5. 从根目录运行`npm run build`。<br>所有 Handsontable 包都已构建。
   
## 构建包

您可以一次构建所有包，也可以单独构建每个包。

### 构建所有包

要一次构建所有包：
1. 确保满足[构建要求](#build-requirements)。
2. 进入根目录。
3. 运行 `npm run build`。<br>该脚本构建以下包：
     - The JavaScript package
     - The React package
     - The Angular package
     - The Vue 2 package
     - The Vue 3 package
     - 代码示例包

### 构建 JavaScript 包

要构建 JavaScript 包：
1. 确保满足[构建要求](#build-requirements)。
2. 转到`/handsontable`。
3. 运行 `npm run build`。<br>仅构建 JavaScript 包。

要从根目录构建 JavaScript 包：
1. 确保满足[构建要求](#build-requirements)。
2. 进入根目录。
3. 运行 `npm run in handsontable build`。<br>仅构建 JavaScript 包。

#### JavaScript 构建任务

在`/handsontable`目录中，您还可以运行单独的 JavaScript`build`任务：

::: details JavaScript build tasks

`npm run build:commonjs`
  - 将文件转换为 CommonJS 格式。

`npm run build:es`
  - 将文件转换为 ESM 格式。

`npm run build:umd`
  - 创建与通用模块定义兼容的以下捆绑包：
    - `/handsontable/dist/handsontable.js`
    - `/handsontable/dist/handsontable.css`
    - `/handsontable/dist/handsontable.full.js`
    - `/handsontable/dist/handsontable.full.css`

`npm run build:umd.min`
  - 创建与通用模块定义兼容的缩小包：
    - `/handsontable/dist/handsontable.min.js`
    - `/handsontable/dist/handsontable.min.css`
    - `/handsontable/dist/handsontable.min.full.js`
    - `/handsontable/dist/handsontable.min.full.css`

`npm run build:walkontable`
  - 构建 Walkontable，它是 Handsontable 的重要组成部分，负责渲染过程。

`npm run build:languages`
  - 创建与通用模块定义兼容的[语言](@/guides/internationalization/language/language.md)包，例如：
    - `/handsontable/dist/languages/de-DE.js`
    - `/handsontable/dist/languages/all.js`

`build:languages.es`
  - 创建与 ESM 格式兼容的 [语言](@/guides/internationalization/language/language.md) 捆绑包，例如：
    - `languages/en-US.mjs`

`npm run build:languages.min`
   - 创建与通用模块定义兼容的缩小的[语言](@/guides/internationalization/language/language.md)包，例如：
     - `/handsontable/dist/languages/de-DE.min.js`
     - `/handsontable/dist/languages/all.min.js`

:::

### 构建 React 包

构建 React 包：
1. 确保满足[构建要求](#build-requirements)。
2. 转到`/wrappers/react`。
3. 运行 `npm run build`。<br>仅构建 React 包。

要从根目录构建 React 包：
1. 确保满足[构建要求](#build-requirements)。
2. 进入根目录。
3. 运行 `npm run in react build`。<br>仅构建 React 包。

#### React 构建任务

从 `/wrappers/react` 目录中，您还可以运行单独的 React `build` 任务：

::: details React build tasks

`npm run build:commonjs`
  - 将文件转换为 CommonJS 格式。
  - 将输出放置在 `/wrappers/react/commonjs/react-handsontable.js` 中

`npm run build:umd`
  - 创建与通用模块定义兼容的以下捆绑包：
    - `/wrappers/react/dist/react-handsontable.js`
    - `/wrappers/react/dist/react-handsontable.js.map`

`npm run build:es`
  - 将文件转换为 ESM 格式。
  - 将输出放置在 `/wrappers/react/es/react-handsontable.mjs` 中

`npm run build:min`
  - 创建缩小的捆绑包：
    - `/wrappers/react/dist/react-handsontable.min.js`
    - `/wrappers/react/dist/react-handsontable.min.js.map`

:::

::: only-for javascript

### 构建 Angular 包

构建 Angular 包：
1. 确保满足[构建要求](#build-requirements)。
3. 转到`/wrappers/angular`。
4. 运行 `npm run build`。<br>仅构建 Angular 包。

要从根目录构建 Angular 包：
1. 确保满足[构建要求](#build-requirements)。
2. 进入根目录。
3. 运行 `npm run in Angular build`。<br>仅构建 Angular 包。

#### Angular 构建任务

在`/wrappers/angular`目录中，您还可以运行单独的 Angular`build`任务：

::: details Angular build tasks

`npm run build`
  - 为多模块系统构建`@handsontable/angular`包。
  - 将输出放置在 `/wrappers/angular/dist/hot-table/` 目录中。

:::

:::

::: only-for javascript

### 构建 Vue 2 包

构建 Vue 2 包：
1. 确保满足[构建要求](#build-requirements)。
2. 转到`/wrappers/vue`。
3. 运行 `npm run build`。<br>仅构建 Vue 2 包。
   
要从根目录构建 Vue 2 包：
1. 确保满足[构建要求](#build-requirements)。
2. 进入根目录。
3. 运行 `npm run in vue build`。<br>仅构建 Vue 2 包。

#### Vue 2 构建任务

从 `/wrappers/vue` 目录中，您还可以运行单独的 Vue 2 `build` 任务：

::: details Vue 2 build tasks

`npm run build:commonjs`
  - 将文件转换为 CommonJS 格式。
  - 将输出放置在 `/wrappers/vue/commonjs/vue-handsontable.js` 中

`npm run build:umd`
  - 创建与通用模块定义兼容的以下捆绑包：
    - `/wrappers/vue/dist/vue-handsontable.js`
    - `/wrappers/vue/dist/vue-handsontable.js.map`

`npm run build:es`
  - 将文件转换为 ESM 格式。
  - 将输出放置在 `/wrappers/vue/es/vue-handsontable.mjs` 中
  
`npm run build:min`
  - 创建缩小的捆绑包：
    - `/wrappers/vue/dist/vue-handsontable.min.js`
    - `/wrappers/vue/dist/vue-handsontable.min.js.map`

:::

:::

::: only-for javascript

### 构建 Vue 3 包

构建 Vue 3 包：
1. 确保满足[构建要求](#build-requirements)。
2. 转到`/wrappers/vue3`。
3. 运行 `npm run build`。<br>仅构建 Vue 3 包。

要从根目录构建 Vue 3 包：
1. 确保满足[构建要求](#build-requirements)。
2. 进入根目录。
3. 运行 `npm run in vue3 build`。<br>仅构建 Vue 3 包。

#### Vue 3 构建任务

从 `/wrappers/vue3` 目录中，您还可以运行单独的 Vue 3 `build` 任务：

::: details Vue 3 build tasks

`npm run build:commonjs`
  - 将文件转换为 CommonJS 格式。
  - 将输出放置在 `/wrappers/vue3/commonjs/vue-handsontable.js` 中

`npm run build:umd`
  - 创建与通用模块定义兼容的以下捆绑包：
    - `/wrappers/vue3/dist/vue-handsontable.js`
    - `/wrappers/vue3/dist/vue-handsontable.js.map`

`npm run build:es`
  - 将文件转换为 ESM 格式。
  - 将输出放置在 `/wrappers/vue3/es/vue-handsontable.mjs` 中

`npm run build:min`
  - 创建缩小的捆绑包：
    - `/wrappers/vue3/dist/vue-handsontable.min.js`
    - `/wrappers/vue3/dist/vue-handsontable.min.js.map`

:::

:::

## 相关指南

<div class="boxes-list gray">

::: only-for javascript

- [Packages](@/guides/tools-and-building/packages/packages.md)

:::

- [Testing](@/guides/tools-and-building/testing/testing.md)

</div>
