---
id: 9xuz0x0c
title: 文件夹结构
metaTitle: Folder structure - JavaScript Data Grid | Handsontable
description: The folder structure of Handsontable's code repository.
permalink: /folder-structure
canonicalUrl: /folder-structure
tags:
  - directory
  - repository
  - file tree
  - file structure
  - folders
  - files
react:
  id: 29dbr0lt
  metaTitle: Folder structure - React Data Grid | Handsontable
searchCategory: Guides
category: Tools and building
---

# 文件夹结构

Handsontable 的源文件存储在 GitHub 上的 monorepo 中。

[[toc]]

```bash
├── bin                                     # 二进制文件
├── docs                                    # 文档文件
├── examples                                # 代码示例
└── handsontable                            # Handsontable项目目录
    ├── dist                                # 编译文件
    ├── languages                           # 翻译（国际化）
    ├── scripts                             # 可手动脚本
    ├── src                                 # 源文件
    ├── test                                # 自动化测试
    └── types                               # Handsontable TypeScript 定义文件
├── resources                               # README.md 的静态文件
├── scripts                                 # Monorepo 脚本
├── visual-tests                            # 自动视觉回归测试
└── wrappers                                # 包装文件
    ├── angular                             # Angular 的包装器
    ├── react                               # React 的包装器
    ├── react-wrapper                       # React 的包装器（功能组件）
    └── vue                                 # Vue 2 的包装
    └── vue3                                # Vue 3 的包装
```
