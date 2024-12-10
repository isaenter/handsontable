---
id: g7139vli
title: 自定义快捷键
metaTitle: Custom shortcuts - JavaScript Data Grid | Handsontable
description: Customize Handsontable's keyboard shortcuts.
permalink: /custom-shortcuts
canonicalUrl: /custom-shortcuts
tags:
  - key bindings
  - keymap
  - key mapping
  - keyboard navigation
  - hotkey
  - accessibility
  - function key
  - commands
  - custom shortcuts
  - shortcut keys
react:
  id: d5ay8gj1
  metaTitle: Custom shortcuts - React Data Grid | Handsontable
searchCategory: Guides
category: Navigation
---

# 自定义快捷键

自定义 Handsontable 的键盘快捷键。

[[toc]]

## 概述

您可以使用 [`ShortcutManager`](@/api/shortcutManager.md) API 完全自定义键盘快捷键：

::: only-for react

::: tip

要使用 Handsontable API，您需要访问 Handsontable 实例。您可以通过利用对`HotTable`组件的引用并读取其`hotInstance`属性来做到这一点。

有关更多信息，请参阅[实例方法](@/guides/getting-started/react-methods/react-methods.md)页面。

:::

:::

1. 访问 [`ShortcutManager`](@/api/shortcutManager.md) API：
   ```js
   hot.getShortcutManager();
   ```
2. 选择键盘快捷键[context](#keyboard-shortcut-contexts)，例如：
   ```js
   const gridContext = hot.getShortcutManager().getContext('grid');
   ```
3. 使用所选上下文的[methods](@/api/shortcutContext.md)。例如，要使用 [`addShortcut()`](@/api/shortcutContext.md#addshortcut) 方法
   `grid`上下文：

   ```js
   const gridContext = hot.getShortcutManager().getContext('grid');

   gridContext.addShortcut({
     group: 'group_ID', // 字符串值；用户可以决定其名称。
     // 每个快捷方式都应分配给该组。
     keys: [['enter']],
     callback: () => {},
   });
   ```

## 键盘快捷键上下文

每个键盘操作都在特定上下文中注册：

| Context  | 描述                                                   | 类型     |
| -------- | ------------------------------------------------------ | -------- |
| `grid`   | 当用户导航数据网格时激活（初始上下文）                 | Built-in |
| `editor` | 当用户打开单元格编辑器时激活                           | Built-in |
| `menu`   | 当用户打开单元格的上下文菜单时激活                     | Built-in |
| Custom   | 您的[自定义上下文](#manage-keyboard-shortcut-contexts) | Custom   |

当用户与键盘交互时，仅执行为当前活动上下文注册的操作。

一次只有一个上下文处于活动状态。

### 管理键盘快捷键上下文

使用 [`ShortcutManager`](@/api/shortcutManager.md) API 方法，您可以：

- 获取当前活动上下文的名称：[`getActiveContextName()`](@/api/shortcutManager.md#getactivecontextname)
- 切换到不同的上下文：[`setActiveContextName()`](@/api/shortcutManager.md#setactivecontextname)
- 获取已注册的上下文：[`getContext()`](@/api/shortcutManager.md#getcontext)
- 创建并注册一个新上下文：[`addContext()`](@/api/shortcutManager.md#addcontext)

例如：如果您使用复杂的[自定义编辑器](@/guides/cell-functions/cell-editor/cell-editor.md#how-to-create-a-custom-editor)，您可以创建一个新的快捷方式上下文，用于使用箭头键导航编辑器的 UI（通常，箭头键将导航网格）。

## 添加自定义键盘快捷键

要添加自定义键盘快捷键：

1. 选择要在其中添加快捷方式的[上下文](#keyboard-shortcut-contexts)，例如：
   ```js
   const gridContext = hot.getShortcutManager().getContext('grid');
   ```
2. 使用所选上下文的 [`addShortcut()`](@/api/shortcutContext.md#addshortcut) 方法，添加键盘快捷键：

   ```js
   const gridContext = hot.getShortcutManager().getContext('grid');

   gridContext.addShortcut({
     group: 'group_ID', // 字符串值；用户可以决定其名称。
     // 每个快捷方式都应分配给该组。
     keys: [['enter']],
     callback: () => {},
   });
   ```

   [`keys`](@/api/shortcutContext.md#addshortcut) 参数：

   - 接受所有 [`KeyboardEvent.key`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values) 键名称。
   - 接受小写和大写的键名（例如，`Enter`和`enter`都有效）
   - 处理浏览器之间的键名差异（例如，`空格键`和``都有效）
   - 接受任意顺序的键名（例如，`[['control', 'a']]` 和 `[['a', 'control']]`）都可以）

### 添加条件键盘操作

要使键盘操作在特定条件下运行，请将 [`runOnlyIf`](@/api/shortcutContext.md#addshortcut) 参数设置为函数：

```js
const gridContext = hot.getShortcutManager().getContext('grid');

gridContext.addShortcut({
  group: 'group_ID', // 字符串值；用户可以决定其名称。
     // 每个快捷方式都应分配给该组。
  runOnlyIf: () => hot.getSelected() !== void 0,
  keys: [['enter']],
  callback: () => {},
});
```

### 设置键盘操作的顺序

您可以将多个操作分配给单个键盘快捷键。

默认情况下，当您分配新操作时，它将在之前分配的任何其他操作之后运行。要设置您自己的操作顺序，请使用 [`addShortcut( )`](@/api/shortcutContext.md#addshortcut) 方法：

```js
const gridContext = hot.getShortcutManager().getContext('grid');

gridContext.addShortcut({
  group: 'customNumericEditor',
  position: 'before',
  relativeToGroup: 'editorManager.handlingEditor',
  runOnlyIf: () => {
    hot.getSelected() !== void 0;
  },
  keys: [['F2']],
  callback: () => {
    if (hot.getActiveEditor().cellProperties.type === 'numeric') {
      return false; // `F2`快捷键不适用于`数字`单元格
    }

    // 另一个动作
  },
});
```

## 删除键盘快捷键

要删除键盘快捷键（例如，[默认](#default-custom-shortcuts) 键盘快捷键之一）：


1. 选择要删除键盘快捷键的[上下文](#keyboard-shortcut-contexts)。
2. 使用所选上下文的 [`removeShortcutsByKeys()`](@/api/shortcutContext.md#removeshortcutsbykeys) 方法。
   
```js
const gridContext = hot.getShortcutManager().getContext('grid');

gridContext.removeShortcutsByKeys(['enter']);
```

要删除某个组中注册的所有键盘快捷键：

1. 选择一个[上下文](#keyboard-shortcut-contexts)。
2. 使用所选上下文的 [`removeShortcutsByGroup()`](@/api/shortcutContext.md#removeshortcutsbygroup) 方法。

```js
const gridContext = hot.getShortcutManager().getContext('grid');

gridContext.removeShortcutsByGroup('group_ID');
```

## 替换键盘快捷键

要替换键盘快捷键：

1. 选择要替换键盘快捷键的[上下文](#keyboard-shortcut-contexts)。
2. 使用所选上下文的 [`getShortcuts()`](@/api/shortcutContext.md#getshortcuts) 方法获取旧键盘快捷键。
3. 使用所选上下文的 [`removeShortcutsByKeys()`](@/api/shortcutContext.md#removeshortcutsbykeys) 方法删除旧键盘快捷键。
4. 将旧键盘快捷键的`keys`属性替换为新的按键数组。
5. 使用所选上下文的 [`addShortcuts()`](@/api/shortcutContext.md#addshortcuts) 方法添加新的键盘快捷键。

```js
const gridContext = hot.getShortcutManager().getContext('grid');
const undoShortcut = gridContext.getShortcuts(['control/meta', 'z']);

gridContext.removeShortcutsByKeys(['control/meta', 'z']);

undoShortcut.map((shortcut) => {
  shortcut.keys = [['shift', 'control/meta', 'z']];
});

gridContext.addShortcuts(undoShortcut);
```

## 阻止键盘快捷键的操作

要阻止键盘快捷键的操作，请在 [`beforeKeyDown`](@/api/hooks.md#beforekeydown) 挂钩的回调中返回 `false`：

::: only-for javascript

```js
hot.addHook('beforeKeyDown', (event) => {
  // `Enter`快捷键不起作用
  if (event.key === 'enter') {
    return false;
  }
});
```

:::

::: only-for react

```jsx
<HotTable
  beforeKeyDown={(event) => {
    // `Enter`快捷键不起作用
    if (event.key === 'enter') {
      return false;
    }
  }}
/>
```

:::

## API 参考

有关[选项](@/guides/getting-started/configuration-options/configuration-options.md)、方法和[Handsontable hooks](@/guides/getting-started/events-and-hooks/events)的列表-and-hooks.md) 与键盘导航相关，请参阅以下 API 参考页：

- APIs:
  - [`ShortcutContext`](@/api/shortcutContext.md)
  - [`ShortcutManager`](@/api/shortcutManager.md)
- 配置选项:
  - [`enterBeginsEditing`](@/api/options.md#enterbeginsediting)
  - [`enterMoves`](@/api/options.md#entermoves)
  - [`tabMoves`](@/api/options.md#tabmoves)
- 核心方法:
  - [`getShortcutManager()`](@/api/core.md#getshortcutmanager)
  - [`isListening()`](@/api/core.md#islistening)
  - [`listen()`](@/api/core.md#listen)
  - [`unlisten()`](@/api/core.md#unlisten)
- Hooks:
  - [`afterDocumentKeyDown`](@/api/hooks.md#afterdocumentkeydown)
  - [`beforeKeyDown`](@/api/hooks.md#beforekeydown)

## 故障排除

没有找到您需要的东西？试试这个：

<div class="boxes-list gray">

- GitHub 上的[查看相关主题](https://github.com/handsontable/handsontable/issues)
- GitHub 上的[报告问题](https://github.com/handsontable/handsontable/issues/new/choose)
- Stack Overflow 上的[提问](https://stackoverflow.com/questions/tagged/handsontable)
- 在 Handsontable 论坛上[开始讨论](https://forum.handsontable.com/c/getting-help/questions)
- [联系我们的技术支持](https://handsontable.com/contact?category=technical_support) 获取帮助

</div>