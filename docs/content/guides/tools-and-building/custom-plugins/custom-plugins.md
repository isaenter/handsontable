---
id: 39o3uw0q
title: 自定义插件
metaTitle: Custom plugins - JavaScript Data Grid | Handsontable
description: Extend Handsontable's functionality by writing your custom plugin. Use the BasePlugin for a quick start.
permalink: /custom-plugins
canonicalUrl: /custom-plugins
tags:
  - plugin development
  - skeleton
  - extend
react:
  id: y66k6b2h
  metaTitle: Custom plugins - React Data Grid | Handsontable
searchCategory: Guides
category: Tools and building
---

# 自定义插件

通过编写自定义插件来扩展 Handsontable 的功能.使用 BasePlugin 快速启动.

[[toc]]

## 概述

插件是扩展 Handsontable 功能的好方法.事实上,大多数 Handsontable 功能都是由插件提供的.

::: only-for react

您可以在 JavaScript 中创建自定义插件,然后从 React 应用程序中引用它.

:::

### 1. 先决条件

导入以下内容:
- [`BasePlugin`](@/api/basePlugin.md) - 一个内置界面,可让您在 Handsontable 的生命周期内工作,
- `registerPlugin` - 用于在 Handsontable 插件注册表中注册插件的实用程序.


```js
import { BasePlugin, registerPlugin } from 'handsontable/plugins';
```

### 2. 扩展 [`BasePlugin`](@/api/basePlugin.md)
开始创建自己的插件的最佳方法是扩展 [`BasePlugin`](@/api/basePlugin.md).

[`BasePlugin`](@/api/basePlugin.md) 接口负责:
- 向后兼容性
- 内存泄漏预防
- 将插件实例正确绑定到 Handsontable

```js
export class CustomPlugin extends BasePlugin {
 /**
  * 为您的插件定义一个唯一的键(字符串).
  * 键成为插件的别名.
  * Handsontable 在该别名下注册插件.
  * 当 `updateSettings()` 调用包含插件的别名时,
  * 你的插件的状态得到更新.
  * 您还可以使用别名来识别插件的
  * Handsontable 初始化时通过Setting 对象传递的选项.
  *
  * @returns {string}
  */
  static get PLUGIN_KEY() {
    return 'customPlugin';
  }

 /**
  * 为您的插件定义附加设置键(字符串数组).
  * 当`updateSettings()`调用至少包含这些设置键之一时,
  * 你的插件的状态得到更新.
  * 如果您将 SETTING_KEYS() 设置为返回`true`,则您的插件会在每次`updateSettings()`调用时更新.
  * 如果您将 SETTING_KEYS() 设置为返回`false`,则您的插件永远不会在任何`updateSettings()`调用上更新.
  *
  * @returns {Array|boolean}
  */
  static get SETTING_KEYS() {
    return true;
  }

  /**
   * 扩展默认构造函数并定义插件的内部属性.
   *
   * @param {Handsontable} hotInstance
   */
  constructor(hotInstance) {
     /**
     * [`BasePlugin`](@/api/basePlugin.md) 的构造函数向您的插件添加一个 `this.hot` 属性.
     * `this.hot` 属性:
     * - 是对 Handsontable 实例的引用.
     * - 不能被覆盖.
     * - 使您可以访问列和行的索引映射器.
     */
    super(hotInstance);

    // 在类的构造函数中初始化所有公共属性.
    this.configuration = {
      enabled: false,
      msg: ''
    };
  }

  /**
   * 统一传递给设置对象的配置.
   *
   * @returns {object}
   * @throws {Error}
   */
  getUnifiedConfig() {
    const pluginSettings = this.hot.getSettings()[CustomPlugin.PLUGIN_KEY];

    if (pluginSettings === true) {
      return {
        enabled: true,
        msg: 'default msg boolean'
      };
    }
    if (Object.prototype.toString.call(pluginSettings) === '[object Object]') {
      return {
        enabled: true,
        msg: 'default msg obj',
        ...pluginSettings
      };
    }
    if (pluginSettings === false) {
      return {
        enabled: false,
        msg: ''
      };
    }

    throw new Error(
      `${CustomPlugin.PLUGIN_KEY} - incorrect plugins configuration.
      Passed:
        - type: ${typeof pluginSettings}
        - value: ${JSON.stringify(pluginSettings, null, ' ')}

      Expected:
        - boolean
        - object
      `
    );
  }

  /**
   * 检查设置中是否启用了该插件.
   */
  isEnabled() {
    const pluginSettings = this.getUnifiedConfig();

    return pluginSettings.enabled;
  }

  /**
   * `enablePlugin` 方法在 `beforeInit` 钩子上触发.
   * 它应该包含您的插件的初始设置和挂钩连接.
   * 仅当`isEnabled`方法返回`true`时,此方法才会运行.
   */
  enablePlugin() {
    // 从初始化对象获取插件的配置.
    this.configuration = this.getUnifiedConfig();

    // 在这里添加所有插件挂钩.使用箭头函数将插件保留为上下文是一个好主意.
    this.addHook('afterChange', (changes, source) => this.onAfterChange(changes, source));

    // `super` 方法将 `this.enabled` 属性设置为 `true`.
    // 这是正确更新插件设置的必要步骤.
    super.enablePlugin();
  }

  /**
   * `disablePlugin` 方法禁用插件.
   */
  disablePlugin() {
    // 在此处将所有插件类属性重置为其默认值.
    this.configuration = null;

    // `BasePlugin.disablePlugin` 方法负责清除钩子连接
    // 并将`false`值分配给`this.enabled`属性.
    super.disablePlugin();
  }

  /**
   * 在 `afterUpdateSettings` 钩子上调用 `updatePlugin` 方法
   * (除非`updateSettings`方法关闭了插件),
   * 但前提是配置对象传递给 `updateSettings` 方法
   * 包含与该特定插件相关的条目.
   * 
   * `updatePlugin` 方法应该包含您的插件正常工作所需的任何内容
   * 更新 Handsontable 实例设置后.
   */
  updatePlugin() {
    // `updatePlugin` 方法需要包含正确重新启用插件所需的所有代码.
    // 在大多数情况下,只需禁用和启用插件就可以解决问题.
    const { enabled, msg } = this.getUnifiedConfig();

    // 您可以决定更新设置是否触发禁用->启用例程.
    if (enabled === false && this.enabled === true) {
      this.disablePlugin();

    } else if (enabled === true && this.enabled === false) {
      this.enablePlugin();
    }

    // 如果您只需要更新一个选项.
    if (this.configuration !== null && msg && this.configuration.msg !== msg) {
      this.configuration.msg = msg;
    }

    super.updatePlugin();
  }

  /**
   * 定义您的外部方法.
   */
  externalMethodExample() {
    // 方法定义.
  }

  /**
   * afterChange 钩子回调.
   *
   * @param {CellChange[]} changes 一系列的变化.
   * @param {string} source 描述变化的来源.
   */
  onAfterChange(changes, source) {
    // afterChange 回调位于此处.
    console.log(
      `${CustomPlugin.PLUGIN_KEY}.onAfterChange - ${this.configuration.msg}`,
      changes,
      source
    );
  }

  /**
   * `destroy` 方法是清理任何实例的最佳位置,
   * 在插件生命周期期间创建的对象或索引映射器.
   */
  destroy() {
    // `super`方法清理插件的事件回调、挂钩连接和属性.
    super.destroy();
  }
}
```

### 3.注册自定义插件
现在,注册您的插件.

注册插件有两种方法:

- **选项 1**:定义一个名为`PLUGIN_KEY`的静态 getter,`registerPlugin`实用程序将其用作插件的别名.检查上面代码片段中的示例.
  ```js
  // 您需要注册您的插件才能在 Handsontable 中使用它.
  registerPlugin(CustomPlugin);
  ```
- **选项 2**:使用自定义别名.将字符串放入第一个参数中.注册器使用该字符串作为别名,而不是`CustomPlugin`中的`PLUGIN_KEY` getter.
  ```js
  registerPlugin('CustomAlias', CustomPlugin);
  ```

### 4. 在 Handsontable 中使用您的插件
要控制插件的选项,请在插件初始化时传递布尔值或对象:

::: only-for javascript

```js
import Handsontable from 'handsontable';
import { CustomPlugin } from './customPlugin';

const hotInstance = new Handsontable(container, {
  // 传递`true`以使用默认选项启用插件.
  [CustomPlugin.PLUGIN_KEY]: true,
  // 您还可以通过传递带有选项的对象来启用该插件.
  [CustomPlugin.PLUGIN_KEY]: {
    msg: 'user-defined message',
  },
  // 您还可以初始化插件而不在一开始就启用它.
  [CustomPlugin.PLUGIN_KEY]: false,
});
```

:::

::: only-for react

```jsx
import Handsontable from 'handsontable';
import { CustomPlugin } from './customPlugin';

<HotTable
  // 传递`true`以使用默认选项启用插件.
  customPlugin={true}
  // 您还可以通过传递带有选项的对象来启用该插件.
  customPlugin={{
    msg: 'user-defined message',
  }}
  // 您还可以初始化插件而不在一开始就启用它.
  customPlugin={false}
/>
```

:::

### 5. 获取插件实例的引用
要使用插件的 API,请调用 [`getPlugin`](@/api/core.md#getplugin) 方法来获取对插件实例的引用.

::: only-for javascript

```js
const pluginInstance = hotInstance.getPlugin(CustomPlugin.PLUGIN_KEY);

pluginInstance.externalMethodExample();
```

:::

::: only-for react

::: tip

要使用 Handsontable API,请创建对`HotTable`组件的引用,并读取其`hotInstance`属性.

有关更多信息,请参阅[实例方法](@/guides/getting-started/react-methods/react-methods.md)页面.

:::

```jsx
const hotTableComponentRef = useRef(null);

const pluginInstance = hotTableComponentRef.current.hotInstance.getPlugin(CustomPlugin.PLUGIN_KEY);
```

:::

## 相关API参考

- APIs:
  - [`BasePlugin`](@/api/basePlugin.md)
- 核心方法:
  - [`getPlugin()`](@/api/core.md#getplugin)
- Hooks:
  - [`afterPluginsInitialized`](@/api/hooks.md#afterpluginsinitialized)
