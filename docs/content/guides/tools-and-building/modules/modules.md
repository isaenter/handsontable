---
id: ffimaicc
title: 模块
metaTitle: Modules - JavaScript Data Grid | Handsontable
description: Reduce the size of your JavaScript bundle, by importing only the modules that you need. The base module is mandatory, all other modules are optional.
permalink: /modules
canonicalUrl: /modules
tags:
  - tree shaking
react:
  id: weudz1vh
  metaTitle: Modules - React Data Grid | Handsontable
searchCategory: Guides
category: Tools and building
---

# 模块

通过仅导入您需要的模块来减小 JavaScript 包的大小.基本模块是强制性的,所有其他模块都是可选的.

[[toc]]

## 概述

Handsontable 是一款具有广泛功能的综合工具.如果您不使用所有这些,您可以只选择您需要的部分,并删除其余部分(例如,不必要的翻译).这种方法减少了 Handsontable 对应用程序整体大小的影响.

为了实现这一点,Handsontable 被分为多个模块.

### 使用模块

要充分利用 Handsontable 的模块:
1. 导入[基础模块](#base-module).
2. 导入您选择的[可选模块](#可选模块).
3. 删除冗余代码(所谓的tree shake).

#### 捆绑器支持

要使用 Handsontable 的模块,您的环境需要支持`import`语法,该语法通常由捆绑程序提供.

我们成功地使用以下捆绑器测试了 Handsontable:
- webpack
- Parcel
- Rollup
- Vite

如果 Handsontable 的模块无法与您的捆绑器配合使用,请将其报告为 [bug](https://github.com/handsontable/handsontable/issues/new?assignees=&labels=&template=01-handsontable.md&title=).

## 基础模块

无论您使用哪个可选模块,您始终需要导入基本模块(`handsontable/base`),其中包括:
- Handsontable的核心功能
- 默认单元格类型:[`text`](@/guides/cell-types/cell-type/cell-type.md#available-cell-types)

### 导入基础模块

::: only-for javascript

要获取基本 JavaScript 模块,请从`handsontable/base`导入 Handsontable(而不是从`handsontable`导入,后者将为您提供[完整的分发包](@/guides/tools-and-building/packages/packages.md)) :

:::

::: only-for react

要获取基本 JavaScript 模块,请从`handsontable/base`导入 Handsontable(而不是从`handsontable`导入,后者将为您提供完整的分发包):

:::

```js
import Handsontable from 'handsontable/base';
```

Handsontable 的 CSS 样式表不是模块化的.您需要单独导入它们:
- [导入 Handsontable 的 CSS](@/guides/getting-started/installation/installation.md#import-handsontable-s-css)

现在,您可以使用您选择的任何[可选模块](#可选模块).
## 可选模块

Handsontable 的可选模块分为:
- [细胞类型模块](#cell-type-modules)
- [插件模块](#plugin-modules)
- [翻译模块](#translation-modules)

### 单元类型模块

单元类型模块包含 Handsontable 的[单元类型](@/guides/cell-types/cell-type/cell-type.md).

您可以导入以下单元类型模块:

```js
import {
  registerCellType, // 细胞类型的注册功能
  AutocompleteCellType,
  CheckboxCellType,
  DateCellType,
  DropdownCellType,
  HandsontableCellType,
  NumericCellType,
  PasswordCellType,
  SelectCellType,
  TextCellType,
  TimeCellType,
} from 'handsontable/cellTypes';
```

每个细胞类型模块包含不同的细胞类型:

::: details Cell type modules

| Module                 | 细胞类型别名   |
| ---------------------- | -------------- |
| `AutocompleteCellType` | `autocomplete` |
| `CheckboxCellType`     | `checkbox`     |
| `DateCellType`         | `date`         |
| `DropdownCellType`     | `dropdown`     |
| `HandsontableCellType` | `handsontable` |
| `NumericCellType`      | `numeric`      |
| `PasswordCellType`     | `password`     |
| `SelectCellType`       | `select`       |
| `TextCellType`         | `text`         |
| `TimeCellType`         | `time`         |

:::

#### 导入单元格类型模块

1. 确保导入[基本模块](#base-module):
    ```js
    import Handsontable from 'handsontable/base';
    ```
2. 导入注册函数和您选择的单元类型模块.例如:
    ```js
    import {
      registerCellType,
      NumericCellType,
    } from 'handsontable/cellTypes';
    ```
3. 注册您的细胞类型模块,以便让 Handsontable 识别它.例如:
    ```js
    registerCellType(NumericCellType);
    ```

    一个完整的例子:

    ```js
    import Handsontable from 'handsontable/base';
    import {
      registerCellType,
      NumericCellType,
    } from 'handsontable/cellTypes';

    registerCellType(NumericCellType);
    ```

#### 渲染器、编辑器和验证器模块

每个电池类型模块由以下部分组成:
- [渲染器](@/guides/cell-functions/cell-renderer/cell-renderer.md) 模块
- [编辑器](@/guides/cell-functions/cell-editor/cell-editor.md) 模块
- [validator](@/guides/cell-functions/cell-validator/cell-validator.md) 模块(可选)

::: tip

要找出给定单元格类型由哪个渲染器、编辑器和验证器组成,
请参阅 [`type`](@/api/options.md#type) 配置选项的 API 参考.

:::

您可以单独导入渲染器、编辑器和验证器模块.
有关这些模块的完整列表,请参阅[所有模块列表](#list-of-all-modules) 部分.

例如,您可以将`numeric`单元格类型作为整体导入:

::: only-for javascript

```js
import Handsontable from 'handsontable/base';
import {
  registerCellType,
  NumericCellType,
} from 'handsontable/cellTypes';

registerCellType(NumericCellType);

const container = document.querySelector('#example1');

new Handsontable(container, {
  columns: [
    {
      type: 'numeric'
    }
  ]
});
```

:::

::: only-for react

```jsx
import Handsontable from 'handsontable/base';
import { HotTable } from '@handsontable/react-wrapper';
import {
  registerCellType,
  NumericCellType,
} from 'handsontable/cellTypes';

registerCellType(NumericCellType);

const container = document.querySelector('#example1');

<HotTable
  columns={[
    {
      type: 'numeric'
    }
  ]}
/>
```

:::

或者,您可以单独导入`numeric`单元格类型的渲染器、编辑器和验证器(效果与上面相同):

::: only-for javascript

```js
import Handsontable from 'handsontable/base';
import {
  registerRenderer,
  numericRenderer,
} from 'handsontable/renderers';
import {
  registerEditor,
  NumericEditor,
} from 'handsontable/editors';
import {
  registerValidator,
  numericValidator,
} from 'handsontable/validators';

registerRenderer(numericRenderer);
registerEditor(NumericEditor);
registerValidator(numericValidator);

new Handsontable(container, {
  columns: [
    {
      renderer: 'numeric',
      editor: 'numeric',
      validator: 'numeric',
      dataType: 'number',
      type: 'numeric',
    }
  ]
});
```

:::

::: only-for react

```jsx
import Handsontable from 'handsontable/base';
import { HotTable } from '@handsontable/react-wrapper';
import {
  registerRenderer,
  numericRenderer,
} from 'handsontable/renderers';
import {
  registerEditor,
  NumericEditor,
} from 'handsontable/editors';
import {
  registerValidator,
  numericValidator,
} from 'handsontable/validators';

registerRenderer(numericRenderer);
registerEditor(NumericEditor);
registerValidator(numericValidator);

<HotTable
  columns={[
    {
      renderer: 'numeric',
      editor: 'numeric',
      validator: 'numeric',
      dataType: 'number',
      type: 'numeric',
    }
  ]}
/>

```

:::

### 插件模块

插件模块包含 Handsontable 的 [plugins](@/api/plugins.md).

您可以导入以下插件模块:

```js
import {
  registerPlugin, // 插件注册功能
  AutoColumnSize,
  AutoRowSize,
  Autofill,
  BasePlugin,
  BindRowsWithHeaders,
  CollapsibleColumns,
  ColumnSorting,
  ColumnSummary,
  Comments,
  ContextMenu,
  CopyPaste,
  CustomBorders,
  DragToScroll,
  DropdownMenu,
  ExportFile,
  Filters,
  Formulas,
  HiddenColumns,
  HiddenRows,
  ManualColumnFreeze,
  ManualColumnMove,
  ManualColumnResize,
  ManualRowMove,
  ManualRowResize,
  MergeCells,
  MultiColumnSorting,
  MultipleSelectionHandles,
  NestedHeaders,
  NestedRows,
  PersistentState,
  Search,
  StretchColumns,
  TouchScroll,
  TrimRows,
  UndoRedo,
} from 'handsontable/plugins';
```

每个插件模块包含一个不同的插件:

::: details Plugin modules

| Module                     | Plugin                                                |
| -------------------------- | ----------------------------------------------------- |
| `AutoColumnSize`           | [`AutoColumnSize`](@/api/autoColumnSize.md)           |
| `Autofill`                 | [`Autofill`](@/api/autofill.md)                       |
| `AutoRowSize`              | [`AutoRowSize`](@/api/autoRowSize.md)                 |
| `BasePlugin`               | [`BasePlugin`](@/api/basePlugin.md)                   |
| `BindRowsWithHeaders`      | [`BindRowsWithHeaders`](@/api/bindRowsWithHeaders.md) |
| `CollapsibleColumns`       | [`CollapsibleColumns`](@/api/collapsibleColumns.md)   |
| `ColumnSorting`            | [`ColumnSorting`](@/api/columnSorting.md)             |
| `ColumnSummary`            | [`ColumnSummary`](@/api/columnSummary.md)             |
| `Comments`                 | [`Comments`](@/api/comments.md)                       |
| `ContextMenu`              | [`ContextMenu`](@/api/contextMenu.md)                 |
| `CopyPaste`                | [`CopyPaste`](@/api/copyPaste.md)                     |
| `CustomBorders`            | [`CustomBorders`](@/api/customBorders.md)             |
| `DragToScroll`             | [`DragToScroll`](@/api/dragToScroll.md)               |
| `DropdownMenu`             | [`DropdownMenu`](@/api/dropdownMenu.md)               |
| `ExportFile`               | [`ExportFile`](@/api/exportFile.md)                   |
| `Filters`                  | [`Filters`](@/api/filters.md)                         |
| `Formulas`                 | [`Formulas`](@/api/formulas.md)                       |
| `HiddenColumns`            | [`HiddenColumns`](@/api/hiddenColumns.md)             |
| `HiddenRows`               | [`HiddenRows`](@/api/hiddenRows.md)                   |
| `ManualColumnFreeze`       | [`ManualColumnFreeze`](@/api/manualColumnFreeze.md)   |
| `ManualColumnMove`         | [`ManualColumnMove`](@/api/manualColumnMove.md)       |
| `ManualColumnResize`       | [`ManualColumnResize`](@/api/manualColumnResize.md)   |
| `ManualRowMove`            | [`ManualRowMove`](@/api/manualRowMove.md)             |
| `ManualRowResize`          | [`ManualRowResize`](@/api/manualRowResize.md)         |
| `MergeCells`               | [`MergeCells`](@/api/mergeCells.md)                   |
| `MultiColumnSorting`       | [`MultiColumnSorting`](@/api/multiColumnSorting.md)   |
| `MultipleSelectionHandles` | `MultipleSelectionHandles`                            |
| `NestedHeaders`            | [`NestedHeaders`](@/api/nestedHeaders.md)             |
| `NestedRows`               | [`NestedRows`](@/api/nestedRows.md)                   |
| `PersistentState`          | [`PersistentState`](@/api/persistentState.md)         |
| `Search`                   | [`Search`](@/api/search.md)                           |
| `StretchColumns`           | [`StretchColumns`](@/api/stretchColumns.md)           |
| `TouchScroll`              | `TouchScroll`                                         |
| `TrimRows`                 | [`TrimRows`](@/api/trimRows.md)                       |
| `UndoRedo`                 | [`UndoRedo`](@/api/undoRedo.md)                       |

:::

#### 导入插件模块

1. 确保导入[基本模块](#base-module):
    ```js
    import Handsontable from 'handsontable/base';
    ```
2. 导入注册功能和您选择的插件模块.例如:
    ```js
    import {
      registerPlugin,
      ContextMenu,
    } from 'handsontable/plugins';
    ```
3. 注册您的插件模块,让 Handsontable 识别它.例如:
    ```js
    registerPlugin(ContextMenu);
    ```

    一个完整的例子:

    ```js
    import Handsontable from 'handsontable/base';
    import {
      registerPlugin,
      ContextMenu,
    } from 'handsontable/plugins';

    registerPlugin(ContextMenu);
    ```

### 翻译模块

翻译模块包含 Handsontable 的[翻译](@/guides/internationalization/language/language.md).

您可以导入以下翻译模块:

```js
import {
  registerLanguageDictionary, // 翻译注册功能
  arAR,
  csCZ,
  deCH,
  deDE,
  enUS,
  esMX,
  frFR,
  hrHR,
  itIT,
  jaJP,
  koKR,
  lvLV,
  nbNO,
  nlNL,
  plPL,
  ptBR,
  ruRU,
  srSP,
  zhCN,
  zhTW,
} from 'handsontable/i18n';
```

每个翻译模块包含不同的翻译包:

::: details Translation modules

| Module | Translation                 |
| ------ | --------------------------- |
| `arAR` | Arabic - Global             |
| `csCZ` | Czech - Czech Republic      |
| `deCH` | German - Switzerland        |
| `deDE` | German - Germany            |
| `enUS` | English - United States     |
| `esMX` | Spanish - Mexico            |
| `frFR` | French - France             |
| `hrHR` | Croatian - Croatia          |
| `itIT` | Italian - Italy             |
| `jaJP` | Japanese - Japan            |
| `koKR` | Korean - Korea              |
| `lvLV` | Latvian - Latvia            |
| `nbNO` | Norwegian (Bokmål) - Norway |
| `nlNL` | Dutch - Netherlands         |
| `plPL` | Polish - Poland             |
| `ptBR` | Portuguese - Brazil         |
| `ruRU` | Russian - Russia            |
| `srSP` | Serbian - Serbia            |
| `zhCN` | Chinese - China             |
| `zhTW` | Chinese - Taiwan            |

:::

#### 导入翻译模块

1. 确保导入[基本模块](#base-module):
    ```js
    import Handsontable from 'handsontable/base';
    ```
2. 导入注册函数和您选择的翻译模块.例如:
    ```js
    import {
      registerLanguageDictionary,
      plPL,
    } from 'handsontable/i18n';
    ```
3. 注册您的翻译模块,让 Handsontable 识别它.例如:
    ```js
    registerLanguageDictionary(plPL);
    ```

    一个完整的例子:

    ```js
    import Handsontable from 'handsontable/base';
    import {
      registerLanguageDictionary,
      plPL,
    } from 'handsontable/i18n';

    registerLanguageDictionary(plPL);
    ```

## 所有模块列表

下表列出了 Handsontable 的所有模块:

| Type                                                                        | Modules                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Required / optional |
| --------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| Core functionalities                                                        | `handsontable/base`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Required            |
| [Cell types](@/guides/cell-types/cell-type/cell-type.md)                    | `AutocompleteCellType`<br>`CheckboxCellType`<br>`DateCellType`<br>`DropdownCellType`<br>`HandsontableCellType`<br>`NumericCellType`<br>`PasswordCellType`<br>`SelectCellType`<br>`TextCellType`<br>`TimeCellType`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Optional            |
| [Cell renderers](@/guides/cell-functions/cell-renderer/cell-renderer.md)    | `baseRenderer`<br>`autocompleteRenderer`<br>`checkboxRenderer`<br>`dateRenderer`<br>`dropdownRenderer`<br>`handsontableRenderer`<br>`htmlRenderer`<br>`numericRenderer`<br>`passwordRenderer`<br>`selectRenderer`<br>`textRenderer`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Optional            |
| [Cell editors](@/guides/cell-functions/cell-editor/cell-editor.md)          | `AutocompleteEditor`<br>`BaseEditor`<br>`CheckboxEditor`<br>`DateEditor`<br>`DropdownEditor`<br>`HandsontableEditor`<br>`NumericEditor`<br>`PasswordEditor`<br>`SelectEditor`<br>`TextEditor`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Optional            |
| [Cell validators](@/guides/cell-functions/cell-validator/cell-validator.md) | `autocompleteValidator`<br>`dateValidator`<br>`dropdownValidator`<br>`numericValidator`<br>`timeValidator`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Optional            |
| [Plugins](@/api/plugins.md)                                                 | [`AutoColumnSize`](@/api/autoColumnSize.md)<br>[`Autofill`](@/api/autofill.md)<br>[`AutoRowSize`](@/api/autoRowSize.md)<br>[`BasePlugin`](@/api/basePlugin.md)<br>[`BindRowsWithHeaders`](@/api/bindRowsWithHeaders.md)<br>[`CollapsibleColumns`](@/api/collapsibleColumns.md)<br>[`ColumnSorting`](@/api/columnSorting.md)<br>[`ColumnSummary`](@/api/columnSummary.md)<br>[`Comments`](@/api/comments.md)<br>[`ContextMenu`](@/api/contextMenu.md)<br>[`CopyPaste`](@/api/copyPaste.md)<br>[`CustomBorders`](@/api/customBorders.md)<br>[`DragToScroll`](@/api/dragToScroll.md)<br>[`DropdownMenu`](@/api/dropdownMenu.md)<br>[`ExportFile`](@/api/exportFile.md)<br>[`Filters`](@/api/filters.md)<br>[`Formulas`](@/api/formulas.md)<br>[`HiddenColumns`](@/api/hiddenColumns.md)<br>[`HiddenRows`](@/api/hiddenRows.md)<br>[`ManualColumnFreeze`](@/api/manualColumnFreeze.md)<br>[`ManualColumnMove`](@/api/manualColumnMove.md)<br>[`ManualColumnResize`](@/api/manualColumnResize.md)<br>[`ManualRowMove`](@/api/manualRowMove.md)<br>[`ManualRowResize`](@/api/manualRowResize.md)<br>[`MergeCells`](@/api/mergeCells.md)<br>[`MultiColumnSorting`](@/api/multiColumnSorting.md)<br>`MultipleSelectionHandles`<br>[`NestedHeaders`](@/api/nestedHeaders.md)<br>[`NestedRows`](@/api/nestedRows.md)<br>[`PersistentState`](@/api/persistentState.md)<br>[`Search`](@/api/search.md)<br>[`StretchColumns`](@/api/stretchColumns.md)<br>`TouchScroll`<br>[`TrimRows`](@/api/trimRows.md)<br>[`UndoRedo`](@/api/undoRedo.md) | Optional            |
| [Translations](@/guides/internationalization/language/language.md)          | `arAR` `csCZ` `deCH` `deDE` `enUS` `esMX`<br>`frFR` `hrHR` `itIT` `jaJP` `koKR`<br>`lvLV` `nbNO` `nlNL` `plPL`<br>`ptBR` `ruRU` `srSP` `zhCN` `zhTW`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Optional            |

## 所有模块导入的列表

要快速批量注册所有模块,请使用以下注册函数:
- `registerAllCellTypes()`
- `registerAllRenderers()`
- `registerAllEditors()`
- `registerAllValidators()`
- `registerAllPlugins()`
- `registerAllModules()`

::: details Import and register all modules in bulk

```js
// 基本模块
import Handsontable from 'handsontable/base';

// 细胞类型模块
import {
  AutocompleteCellType,
  CheckboxCellType,
  DateCellType,
  DropdownCellType,
  HandsontableCellType,
  NumericCellType,
  PasswordCellType,
  TextCellType,
  TimeCellType,
} from 'handsontable/cellTypes';

// 渲染器模块
import {
  baseRenderer,
  autocompleteRenderer,
  checkboxRenderer,
  dropdownRenderer,
  htmlRenderer,
  numericRenderer,
  passwordRenderer,
  textRenderer,
} from 'handsontable/renderers';

// 编辑器模块
import {
  AutocompleteEditor,
  BaseEditor,
  CheckboxEditor,
  DateEditor,
  DropdownEditor,
  HandsontableEditor,
  NumericEditor,
  PasswordEditor,
  SelectEditor,
  TextEditor,
} from 'handsontable/editors';

// 验证器模块
import {
  autocompleteValidator,
  dateValidator,
  dropdownValidator,
  numericValidator,
  timeValidator,
} from 'handsontable/validators';

// 插件模块
import {
  AutoColumnSize,
  AutoRowSize,
  Autofill,
  BasePlugin,
  BindRowsWithHeaders,
  CollapsibleColumns,
  ColumnSorting,
  ColumnSummary,
  Comments,
  ContextMenu,
  CopyPaste,
  CustomBorders,
  DragToScroll,
  DropdownMenu,
  ExportFile,
  Filters,
  Formulas,
  HiddenColumns,
  HiddenRows,
  ManualColumnFreeze,
  ManualColumnMove,
  ManualColumnResize,
  ManualRowMove,
  ManualRowResize,
  MergeCells,
  MultiColumnSorting,
  MultipleSelectionHandles,
  NestedHeaders,
  NestedRows,
  PersistentState,
  Search,
  StretchColumns,
  TouchScroll,
  TrimRows,
  UndoRedo,
} from 'handsontable/plugins';

// 翻译模块
import {
  arAR,
  csCZ,
  deCH,
  deDE,
  enUS,
  esMX,
  frFR,
  hrHR,
  itIT,
  jaJP,
  koKR,
  lvLV,
  nbNO,
  nlNL,
  plPL,
  ptBR,
  ruRU,
  srSP,
  zhCN,
  zhTW,
} from 'handsontable/i18n';

// 注册功能可让您快速注册所有模块
import {
  registerAllCellTypes,
  registerAllRenderers,
  registerAllEditors,
  registerAllValidators,
  registerAllPlugins,
  registerAllModules,
} from 'handsontable/registry'

// 一次注册所有细胞类型
registerAllCellTypes();

// 一次注册所有渲染器
registerAllRenderers();

// 一次性注册所有编辑者
registerAllEditors();

// 立即注册所有验证器
registerAllValidators();

// 一次注册所有插件
registerAllPlugins();

// 注册个人翻译
registerLanguageDictionary(arAR);
registerLanguageDictionary(deCH);
registerLanguageDictionary(deDE);
registerLanguageDictionary(enUS);
registerLanguageDictionary(esMX);
registerLanguageDictionary(frFR);
registerLanguageDictionary(hrHR);
registerLanguageDictionary(itIT);
registerLanguageDictionary(jaJP);
registerLanguageDictionary(koKR);
registerLanguageDictionary(lvLV);
registerLanguageDictionary(nbNO);
registerLanguageDictionary(nlNL);
registerLanguageDictionary(plPL);
registerLanguageDictionary(ptBR);
registerLanguageDictionary(ruRU);
registerLanguageDictionary(srSP);
registerLanguageDictionary(zhCN);
registerLanguageDictionary(zhTW);

// 或者,立即注册 Handsontable 的所有模块
registerAllModules();
```

:::

要显式注册各个模块,请使用以下注册函数:
- `registerCellType()`
- `registerRenderer()`
- `registerEditor()`
- `registerValidator()`
- `registerPlugin()`
- `registerLanguageDictionary()`

::: details Import and register all modules explicitly

```js
// 基本模块
import Handsontable from 'handsontable/base';

// 细胞类型模块
import {
  registerCellType, // 细胞类型的注册功能
  AutocompleteCellType,
  CheckboxCellType,
  DateCellType,
  DropdownCellType,
  HandsontableCellType,
  NumericCellType,
  PasswordCellType,
  TextCellType,
  TimeCellType,
} from 'handsontable/cellTypes';

// 渲染器模块
import {
  registerRenderer, // 渲染器的注册函数
  baseRenderer,
  autocompleteRenderer,
  checkboxRenderer,
  dropdownRenderer,
  htmlRenderer,
  numericRenderer,
  passwordRenderer,
  textRenderer,
} from 'handsontable/renderers';

// 编辑器模块
import {
  registerEditor, // 编辑注册功能
  AutocompleteEditor,
  BaseEditor,
  CheckboxEditor,
  DateEditor,
  DropdownEditor,
  HandsontableEditor,
  NumericEditor,
  PasswordEditor,
  SelectEditor,
  TextEditor,
} from 'handsontable/editors';

// 验证器模块
import {
  registerValidator, // 验证者的注册功能
  autocompleteValidator,
  dateValidator,
  dropdownValidator,
  numericValidator,
  timeValidator,
} from 'handsontable/validators';

// 插件模块
import {
  registerPlugin, // 插件注册功能
  AutoColumnSize,
  AutoRowSize,
  Autofill,
  BasePlugin,
  BindRowsWithHeaders,
  CollapsibleColumns,
  ColumnSorting,
  ColumnSummary,
  Comments,
  ContextMenu,
  CopyPaste,
  CustomBorders,
  DragToScroll,
  DropdownMenu,
  ExportFile,
  Filters,
  Formulas,
  HiddenColumns,
  HiddenRows,
  ManualColumnFreeze,
  ManualColumnMove,
  ManualColumnResize,
  ManualRowMove,
  ManualRowResize,
  MergeCells,
  MultiColumnSorting,
  MultipleSelectionHandles,
  NestedHeaders,
  NestedRows,
  PersistentState,
  Search,
  StretchColumns,
  TouchScroll,
  TrimRows,
  UndoRedo,
} from 'handsontable/plugins';

// 翻译模块
import {
  registerLanguageDictionary, // 翻译注册功能
  arAR,
  csCZ,
  deCH,
  deDE,
  enUS,
  esMX,
  frFR,
  hrHR,
  itIT,
  jaJP,
  koKR,
  lvLV,
  nbNO,
  nlNL,
  plPL,
  ptBR,
  ruRU,
  srSP,
  zhCN,
  zhTW,
} from 'handsontable/i18n';

// 注册单个细胞类型
registerCellType(AutocompleteCellType);
registerCellType(CheckboxCellType);
registerCellType(DateCellType);
registerCellType(DropdownCellType);
registerCellType(HandsontableCellType);
registerCellType(NumericCellType);
registerCellType(PasswordCellType);
registerCellType(TimeCellType);
registerCellType(TextCellType);

// 注册单独的渲染器
registerRenderer(baseRenderer);
registerRenderer(autocompleteRenderer);
registerRenderer(checkboxRenderer);
registerRenderer(dropdownRenderer);
registerRenderer(htmlRenderer);
registerRenderer(numericRenderer);
registerRenderer(passwordRenderer);
registerRenderer(textRenderer);

// 注册个人编辑
registerEditor(BaseEditor);
registerEditor(AutocompleteEditor);
registerEditor(CheckboxEditor);
registerEditor(DateEditor);
registerEditor(DropdownEditor);
registerEditor(HandsontableEditor);
registerEditor(NumericEditor);
registerEditor(PasswordEditor);
registerEditor(SelectEditor);
registerEditor(TextEditor);

// 注册个人验证者
registerValidator(autocompleteValidator);
registerValidator(dateValidator);
registerValidator(dropdownValidator);
registerValidator(numericValidator);
registerValidator(timeValidator);

// 注册单独的插件
registerPlugin(AutoColumnSize);
registerPlugin(Autofill);
registerPlugin(AutoRowSize);
registerPlugin(BindRowsWithHeaders);
registerPlugin(CollapsibleColumns);
registerPlugin(ColumnSorting);
registerPlugin(ColumnSummary);
registerPlugin(Comments);
registerPlugin(ContextMenu);
registerPlugin(CopyPaste);
registerPlugin(CustomBorders);
registerPlugin(DragToScroll);
registerPlugin(DropdownMenu);
registerPlugin(ExportFile);
registerPlugin(Filters);
registerPlugin(Formulas);
registerPlugin(HiddenColumns);
registerPlugin(HiddenRows);
registerPlugin(ManualColumnFreeze);
registerPlugin(ManualColumnMove);
registerPlugin(ManualColumnResize);
registerPlugin(ManualRowMove);
registerPlugin(ManualRowResize);
registerPlugin(MergeCells);
registerPlugin(MultiColumnSorting);
registerPlugin(MultipleSelectionHandles);
registerPlugin(NestedHeaders);
registerPlugin(NestedRows);
registerPlugin(PersistentState);
registerPlugin(Search);
registerPlugin(StretchColumns);
registerPlugin(TouchScroll);
registerPlugin(TrimRows);
registerPlugin(UndoRedo);

// 注册个人翻译
registerLanguageDictionary(arAR);
registerLanguageDictionary(deCH);
registerLanguageDictionary(deDE);
registerLanguageDictionary(enUS);
registerLanguageDictionary(esMX);
registerLanguageDictionary(frFR);
registerLanguageDictionary(hrHR);
registerLanguageDictionary(itIT);
registerLanguageDictionary(jaJP);
registerLanguageDictionary(koKR);
registerLanguageDictionary(lvLV);
registerLanguageDictionary(nbNO);
registerLanguageDictionary(nlNL);
registerLanguageDictionary(plPL);
registerLanguageDictionary(ptBR);
registerLanguageDictionary(ruRU);
registerLanguageDictionary(srSP);
registerLanguageDictionary(zhCN);
registerLanguageDictionary(zhTW);
```

:::

::: tip

Parcel、webpack 3(及更早版本)和其他一些捆绑器要求您从各自的原始文件中一一导入模块.查看此类进口的完整列表:

:::

::: details All imports

```js
import { registerCellType } from 'handsontable/cellTypes/registry';
import { AutocompleteCellType } from 'handsontable/cellTypes/autocompleteType';
import { CheckboxCellType } from 'handsontable/cellTypes/checkboxType';
import { DateCellType } from 'handsontable/cellTypes/dateType';
import { DropdownCellType } from 'handsontable/cellTypes/dropdownType';
import { HandsontableCellType } from 'handsontable/cellTypes/handsontableType';
import { NumericCellType } from 'handsontable/cellTypes/numericType';
import { PasswordCellType } from 'handsontable/cellTypes/passwordType';
import { TextCellType } from 'handsontable/cellTypes/textType';
import { TimeCellType } from 'handsontable/cellTypes/timeType';

import { registerRenderer } from 'handsontable/renderers/registry';
import { autocompleteRenderer } from 'handsontable/renderers/autocompleteRenderer';
import { baseRenderer } from 'handsontable/renderers/baseRenderer';
import { checkboxRenderer } from 'handsontable/renderers/checkboxRenderer';
import { dropdownRenderer } from 'handsontable/renderers/dropdownRenderer';
import { htmlRenderer } from 'handsontable/renderers/htmlRenderer';
import { numericRenderer } from 'handsontable/renderers/numericRenderer';
import { passwordRenderer } from 'handsontable/renderers/passwordRenderer';
import { textRenderer } from 'handsontable/renderers/textRenderer';

import { registerEditor } from 'handsontable/editors/registry';
import { AutocompleteEditor } from 'handsontable/editors/autocompleteEditor';
import { BaseEditor } from 'handsontable/editors/baseEditor';
import { CheckboxEditor } from 'handsontable/editors/checkboxEditor';
import { DateEditor } from 'handsontable/editors/dateEditor';
import { DropdownEditor } from 'handsontable/editors/dropdownEditor';
import { HandsontableEditor } from 'handsontable/editors/handsontableEditor';
import { NumericEditor } from 'handsontable/editors/numericEditor';
import { PasswordEditor } from 'handsontable/editors/passwordEditor';
import { SelectEditor } from 'handsontable/editors/selectEditor';
import { TextEditor } from 'handsontable/editors/textEditor';

import { registerValidator } from 'handsontable/validators/registry';
import { autocompleteValidator } from 'handsontable/validators/autocompleteValidator';
import { dateValidator } from 'handsontable/validators/dateValidator';
import { dropdownValidator } from 'handsontable/validators/dropdownValidator';
import { numericValidator } from 'handsontable/validators/numericValidator';
import { timeValidator } from 'handsontable/validators/timeValidator';

import { registerPlugin } from 'handsontable/plugins/registry';
import { AutoColumnSize } from 'handsontable/plugins/autoColumnSize';
import { Autofill } from 'handsontable/plugins/autofill';
import { AutoRowSize } from 'handsontable/plugins/autoRowSize';
import { BasePlugin } from 'handsontable/plugins/base';
import { BindRowsWithHeaders } from 'handsontable/plugins/bindRowsWithHeaders';
import { CollapsibleColumns } from 'handsontable/plugins/collapsibleColumn';
import { ColumnSorting } from 'handsontable/plugins/columnSorting';
import { Comments } from 'handsontable/plugins/comments';
import { ContextMenu } from 'handsontable/plugins/contextMenu';
import { CopyPaste } from 'handsontable/plugins/copyPaste';
import { CustomBorders } from 'handsontable/plugins/customBorders';
import { DragToScroll } from 'handsontable/plugins/dragToScroll';
import { DropdownMenu } from 'handsontable/plugins/dropdownMenu';
import { ExportFile } from 'handsontable/plugins/exportFile';
import { Filters } from 'handsontable/plugins/filters';
import { HiddenColumns } from 'handsontable/plugins/hiddenColumns';
import { HiddenRows } from 'handsontable/plugins/hiddenRows';
import { ManualColumnFreeze } from 'handsontable/plugins/manualColumnFreeze';
import { ManualColumnMove } from 'handsontable/plugins/manualColumnMove';
import { ManualColumnResize } from 'handsontable/plugins/manualColumnResize';
import { ManualRowMove } from 'handsontable/plugins/manualRowMove';
import { ManualRowResize } from 'handsontable/plugins/manualRowResize';
import { MergeCells } from 'handsontable/plugins/mergeCells';
import { MultipleSelectionHandles } from 'handsontable/plugins/multipleSelectionHandles';
import { NestedHeaders } from 'handsontable/plugins/nestedHeaders';
import { NestedRows } from 'handsontable/plugins/nestedRows';
import { PersistentState } from 'handsontable/plugins/persistentState';
import { Search } from 'handsontable/plugins/search';
import { StretchColumns } from 'handsontable/plugins/stretchColumns';
import { TouchScroll } from 'handsontable/plugins/touchScroll';
import { TrimRows } from 'handsontable/plugins/trimRows';
import { UndoRedo } from 'handsontable/plugins/undoRedo';

import { registerLanguageDictionary } from 'handsontable/i18n/registry';
```

:::

::: only-for javascript

## 将模块与框架一起使用

您还可以将模块与 Handsontable 的框架包装器一起使用:

<div class="boxes-list">

- [Using modules with React](@/react/guides/tools-and-building/modules/modules.md)
- [Using modules with Angular](@/guides/integrate-with-angular/angular-modules/angular-modules.md)
- [Using modules with Vue 2](@/guides/integrate-with-vue/vue-modules/vue-modules.md)
- [Using modules with Vue 3](@/guides/integrate-with-vue3/vue3-modules/vue3-modules.md)

</div>

:::

## 相关文章

### 相关指南

<div class="boxes-list gray">

- [Bundle size](@/guides/optimization/bundle-size/bundle-size.md)
- [Installation](@/guides/getting-started/installation/installation.md)

::: only-for javascript

- [Modules in React](@/react/guides/tools-and-building/modules/modules.md)
- [Modules in Angular](@/guides/integrate-with-angular/angular-modules/angular-modules.md)
- [Modules in Vue 2](@/guides/integrate-with-vue/vue-modules/vue-modules.md)
- [Modules in Vue 3](@/guides/integrate-with-vue3/vue3-modules/vue3-modules.md)

:::

</div>

### 相关博客文章

<div class="boxes-list">

- [模块化以改善开发人员体验](https://handsontable.com/blog/modularizing-to-improve-the-developer-experience)
- [Handsontable 11.0.0:React、Angular 和 Vue 的模块化](https://handsontable.com/blog/handsontable-11.0.0-modularization-for-react-angular-and-vue)

</div>
