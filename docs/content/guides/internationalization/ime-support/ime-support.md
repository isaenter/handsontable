---
id: bhst4cl4
title: 输入法支持
metaTitle: IME support - JavaScript Data Grid | Handsontable
description: Convert keystrokes to characters not available on the keyboard, using the Input Method Editor. This feature is always enabled and available for cell editors.
permalink: /ime-support
canonicalUrl: /ime-support
tags:
  - input method editor
  - korean
  - japanese
  - chinese
  - latin
react:
  id: 8pqhhu5r
  metaTitle: IME support - React Data Grid | Handsontable
searchCategory: Guides
category: Internationalization
---

# 输入法支持

使用输入法编辑器将击键转换为键盘上不可用的字符。此功能始终启用并可供单元格编辑器使用。

[[toc]]

## 什么是输入法

输入法编辑器 (IME) 是操作系统 (OS) 的一部分，它使用户能够通过击键或鼠标移动的输入序列来生成键盘上本来不可用的字符。一个示例场景是使用拉丁键盘添加中文字符； IME 支持将使您能够生成所需的字符。

## Handsontable 中的 IME 支持

IME 支持内置于操作系统中，因此无需或无法启用/禁用它。它始终处于打开状态，并在用户切换到三种受支持语言之一时激活。激活后，IME 将出现在文本编辑器下方（取决于操作系统中的正确配置）。将 IME 与 Handsontable 一起使用时，它始终适用于整个网格。

## 测试 IME 支持

要测试 IME 支持，您需要更改操作系统中键盘的语言首选项。接下来，将输入源设置为韩语、日语或中文，然后开始在 Handsontable 中编辑任何单元格编辑器。

## 观看 IME 实际操作

<video controls loop v-bind:src="'/docs/'+ $page.currentVersion + '/img/pages/ime-support/ime-support-in-handsontable.mp4'" width="100%"></video>

## 相关API参考

- 配置选项:
  - [`language`](@/api/options.md#language)
  - [`layoutDirection`](@/api/options.md#layoutdirection)
  - [`locale`](@/api/options.md#locale)
  - [`imeFastEdit`](@/api/options.md#imefastedit)
- 核心方法:
  - [`getDirectionFactor()`](@/api/core.md#getdirectionfactor)
  - [`getTranslatedPhrase()`](@/api/core.md#gettranslatedphrase)
  - [`isLtr()`](@/api/core.md#isltr)
  - [`isRtl()`](@/api/core.md#isrtl)
- Hooks:
  - [`afterLanguageChange`](@/api/hooks.md#afterlanguagechange)
  - [`beforeLanguageChange`](@/api/hooks.md#beforelanguagechange)
