---
id: 1g89qnhe
title: 语言
metaTitle: Language - JavaScript Data Grid | Handsontable
description: Set Handsontable's UI language to one of the built-in translations, or create your own language set using our templates.
permalink: /language
canonicalUrl: /language
tags:
  - internationalization
  - localization
  - translation
  - L10n
  - i18n
react:
  id: qz0qgi9f
  metaTitle: Language - React Data Grid | Handsontable
searchCategory: Guides
category: Internationalization
---

# 语言

将 Handsontable 的 UI 语言设置为内置翻译之一,或使用我们的模板创建您自己的语言集.

[[toc]]

## 概述

您可以轻松更改 UI 文本,以便将其翻译为特定语言.我们为开发人员提供预定义的语言,可以通过加载语言集并仅更改一项设置来应用这些语言,并能够使用他们自己的语言集(使用现有语言文件的模板创建).

::: tip

要正确显示RTL语言,请配置Handsontable的[布局方向](@/guides/internationalization/layout-direction/layout-direction.md).

:::

## 加载准备好的语言文件

为了正确使用国际化功能,您需要加载语言集.将它们包含在 Handsontable 文件之后很重要.您可以通过获取使用 UMD 标准创建的必要文件来完成此操作:

::: only-for javascript

1. **ES modules (ESM)**
  ```js
  import Handsontable from 'handsontable/base';
  import { registerLanguageDictionary, deDE } from 'handsontable/i18n';

  registerLanguageDictionary(deDE);

  const hot = new Handsontable(container, {
    language: deDE.languageCode,
  });
  ```

2. **CommonJS (CJS)**
  ```js
  const Handsontable = require('handsontable/base').default;
  const { registerLanguageDictionary, deDE } = require('handsontable/i18n');

  registerLanguageDictionary(deDE);

  const hot = new Handsontable(container, {
    language: deDE.languageCode,
  });
  ```

3. **Universal Module Definition (UMD)**

  通过这种方式包含的语言在加载文件后即可立即使用.每个文件都包含一个 UMD 加载器,用于在全局/外部上下文中查找`Handsontable`.如果`Handsontable`可用,那么它会在适当的上下文中注册自己.
  ```html
  <script type="text/javascript" src="dist/handsontable.full.js"></script>
  <script type="text/javascript" src="dist/languages/de-DE.js"></script>
  <script>
    const hot = new Handsontable(container, {
      language: 'de-DE',
    });
  </script>
  ```

:::

::: only-for react

1. **ES modules (ESM)**
  ```js
  import Handsontable from 'handsontable/base';
  import { HotTable } from '@handsontable/react-wrapper';
  import { registerLanguageDictionary, deDE } from 'handsontable/i18n';

  registerLanguageDictionary(deDE);

  const App = () => {
    return (
      <HotTable
        language={deDE.languageCode}
      />
    );
  };
  ```

2. **CommonJS (CJS)**
  ```js
  const Handsontable = require('handsontable/base').default;
  const { registerLanguageDictionary, deDE } = require('handsontable/i18n');

  registerLanguageDictionary(deDE);

  const App = () => {
    return (
      <HotTable
        language={deDE.languageCode}
      />
    );
  };
  ```

:::

### 演示

要查看翻译后的上下文菜单,请右键单击单元格.

加载 Handsontable 后加载语言文件.

::: only-for javascript

::: example #example1 :hot-lang --js 1 --ts 2

@[code](@/content/guides/internationalization/language/javascript/example1.js)
@[code](@/content/guides/internationalization/language/javascript/example1.ts)

:::

:::

::: only-for react

::: example #example1 :react-languages --js 1 --ts 2

@[code](@/content/guides/internationalization/language/react/example1.jsx)
@[code](@/content/guides/internationalization/language/react/example1.tsx)

:::

:::

::: only-for react

::: example #example2 :react-languages

@[code](@/content/guides/internationalization/language/react/example2.jsx)

:::

:::

## 可翻译功能列表

以下是可翻译的功能列表:

- Dropdown menu
- Filtering
- Hiding columns
- Hiding rows
- Nesting rows
- Comments
- Context menu
- Custom borders
- Freezing
- Merge cells
- Read-only

## 可用语言列表

默认情况下,Handsontable 使用**英语 -美国**语言国家/地区集(`en-US`代码)来创建 UI 元素的文本.然而,它可以像每个额外的`非标准`语言文件一样使用,因此`en-US.js`文件可以在`/dist/languages`、`/languages`和`/src/languages`中找到文件夹.目前,我们还分发额外的语言国家/地区文件:

- **阿拉伯语-全球**的 `ar-AR.js` (`ar-AR` 代码).要按预期渲染此语言,请将[布局方向](@/guides/internationalization/language/language.md) 设置为 RTL.
- `cs-CZ.js` 代表**捷克语**(`cs-CZ` 代码).
- `de-CH.js` 代表**德语-瑞士**(`de-CH` 代码).
- `de-DE.js` 代表**德语-德国**(`de-DE` 代码).
- `es-MX.js` 代表 **西班牙语-墨西哥**(`es-MX` 代码).
- `fr-FR.js` 代表**法语-法国**(`fr-FR` 代码).
- `hr-HR.js` 代表**克罗地亚语-克罗地亚**(`hr-HR` 代码).
- `it-IT.js` 代表 **意大利语-意大利**(`it-IT` 代码).
- `ja-JP.js` 代表 **日语-日本**(`ja-JP` 代码).
- `ko-KR.js` 代表 **韩语-韩国**(`ko-KR` 代码).
- `lv-LV.js` 代表**拉脱维亚语-拉脱维亚**(`lv-LV` 代码).
- `nb-NO.js` 代表**挪威语(博克马尔-挪威**(`nb-NO` 代码).
- `nl-NL.js` 代表**荷兰语-荷兰**(`nl-NL` 代码).
- `pl-PL.js` 代表 **波兰语-波兰**(`pl-PL` 代码).
- `pt-BR.js` 代表**葡萄牙语-巴西**(`pt-BR` 代码).
- `ru-RU.js` 代表**俄语-俄罗斯**(`ru-RU` 代码).
- `sr-SP.js` 代表**塞尔维亚语(拉丁语-塞尔维亚**(`sr-SP` 代码).
- `zh-CN.js` 代表**中文-中国**(`zh-CN` 代码).
- `zh-TW.js` 代表**中文-台湾**(`zh-TW` 代码).

### 创建自定义语言

您可以为您的实现创建自定义语言集,或共享它们,因为它们可以轻松应用于任何 Handsontable 实现.

## 语言文件

对我们来说非常重要的是,社区是我们图书馆发展的重要组成部分.我们鼓励您创建并分享您的翻译！


其他语言文件应放置在 Handsontable 存储库的`src/i18n/languages`文件夹中,其名称与所选语言代码相对应(如下所述,例如:`es-VE.js`).您可以通过向我们发送 [拉取请求](@/guides/tools-and-building/custom-builds/custom-builds.md) 将您的翻译合并到 Handsontable 库中.重要的是,您的更改不会对`/languages`和`/dist /languages`目录进行！我们将生成要放置在那里的最终文件.之后,您将能够使用 Handsontable 中的语言.

您可以在本段底部看到示例语言的完整模板.我们基于我们的[默认语言包](https://github.com/handsontable/handsontable/blob/master/handsontable/src/i18n/languages/en-US.js).文件创建过程的部分内容如下所述.

1. 文件应以包含翻译 **作者**的注释开头(以逗号分隔,例如:_作者:Chris Wick、John Kyle_)、**`上次更新`日期**(格式:_mmm dd、 yyyy_,例如:_最后更新:2017 年 1 月 1 日_)和 **说明.**

    ```js
    /**
    * @preserve
    * Authors: Chris Wick, John Kyle
    * Last updated: Nov 15, 2017
    *
    * Description: Definition file for Spanish - Venezuela language-country.
    */
    ```

2. 现在,导入要在翻译中使用的字典键.

    ```js
    import * as C from '../constants';
    ```

3. 语言字典对象应包含一个 `languageCode` 键(格式:两个小写字母,连字符,两个大写字母,例如:_languageCode: 'es-PY'_),它将确定要在`Handsontable` 设置中的语言属性和字典键及其相应的翻译.

    ```js
    const dictionary = {
      languageCode: 'es-VE',
      [C.CONTEXTMENU_ITEMS_ROW_ABOVE]: 'Insertar fila arriba',
      ...
    }
    ```

4. 最后,放置创建的字典的默认导出.

    ```js
    export default dictionary;
    ```

5. 一个简单的示例语言词典可能类似于下面的代码片段.构建过程将生成`/languages`和`/dist /languages`文件夹.可以包含这些本地化的文件,如[本节](#load-the-prepared-language-files)所示.加载它们后,您将能够使用该语言.您可以通过将`Handsontable`的语言设置更改为`es-VE`来实现.

    ```js
    /**
    * @preserve
    * Authors: Chris Wick, John Kyle
    * Last updated: Nov 15, 2017
    *
    * Description: Definition file for Spanish - Venezuela language-country.
    */
    import * as C from '../constants';

    const dictionary = {
      languageCode: 'es-VE',
      [C.CONTEXTMENU_ITEMS_ROW_ABOVE]: 'Insertar fila arriba',
    };

    export default dictionary;
    ```

6. 导入`src/i18n/languages/index.js` 文件中已创建的文件并将其导出,如下面的代码片段所示(按键按字母顺序排列).

    ```js {4,11}
    import deCH from './de-CH';
    import deDE from './de-DE';
    import enUS from './en-US';
    import esVE from './es-VE';
    import plPL from './pl-PL';

    export {
      deCH,
      deDE,
      enUS,
      esVE,
      plPL
    };
    ```

7. 瞧！您创建了一种只能由您使用或与其他人共享的语言.我们等待用户至少 5 个积极反馈才能接受创建的 [拉取请求](@/guides/tools-and-building/custom-builds/custom-builds.md).

### 当地语言

您可以注册不属于`Handsontable`包的语言词典.为此,请使用静态`Handsontable.languages.registerLanguageDictionary`方法和静态常量`Handsontable.languages.dictionaryKeys`,下一节将简要介绍它们.

```js
const C = Handsontable.languages.dictionaryKeys;

Handsontable.languages.registerLanguageDictionary({
  languageCode: 'morse',
  // 您的摩尔斯电码翻译
  [C.FILTERS_BUTTONS_OK]: '--- -•-'
});
```

## 在翻译中使用自定义键

您可以注册包含自定义键的语言词典.这些条目可以像任何其他键一样使用,因此您不限于使用我们预定义的常量(这些常量存在于 `src/i18n/constants.js` 文件中,并且可以通过 `Handsontable.languages 访问. DictionaryKeys` 别名).

```js
const enUSDictionary = Handsontable.languages.getLanguageDictionary('en-US');

enUSDictionary.customKey = 'Hello world';

Handsontable.languages.registerLanguageDictionary(enUSDictionary); // 重新注册
Handsontable.languages.getTranslatedPhrase('en-US', 'customKey'); // 'Hello world'
```

## 静态 Handsontable 方法和属性

Handsontable 有一些与语言相关的静态方法和属性.它们存储在全局`Handsontable`变量的` languages`键中.下面对所有这些进行了描述.

### 获取特定语言代码的语言词典

Handsontable.languages.getLanguageDictionary(languageCode: `String`)

Returns: `Object`

### 获取注册的语言词典

Handsontable.languages.getLanguagesDictionaries()

Returns: `Array`

### 获取指定字典键的短语

Handsontable.languages.getTranslatedPhrase(languageCode: `String`, dictionaryKey: `String`, extraArguments: `Mixed`)

Returns: `Object`

### 注册特定语言代码的语言词典

Handsontable.languages.registerLanguageDictionary(languageCodeOrDictionary: `Mixed`, dictionary: `Object`)

Returns: `Object`

### 字典常量

Handsontable.languages.dictionaryKeys

Contains: `Object`

## 相关文章

### 相关指南

<div class="boxes-list gray">

- [Layout direction](@/guides/internationalization/layout-direction/layout-direction.md)
- [Locale](@/guides/internationalization/locale/locale.md)
- [IME support](@/guides/internationalization/ime-support/ime-support.md)

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
