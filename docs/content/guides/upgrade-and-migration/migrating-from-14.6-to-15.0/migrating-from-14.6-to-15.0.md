---
id: migrating-14.6-to-15.0
title: 从 14.6 迁移到 15.0
metaTitle: Migrating from 14.6 to 15.0 - JavaScript Data Grid | Handsontable
description: Migrate from Handsontable 14.6 to Handsontable 15.0, released on [].
permalink: /migration-from-14.6-to-15.0
canonicalUrl: /migration-from-14.6-to-15.0
pageClass: migration-guide
react:
  id: migrating-14.6-to-15.0-react
  metaTitle: Migrate from 14.6 to 15.0 - React Data Grid | Handsontable
searchCategory: Guides
category: Upgrade and migration
---

# 从 14.6 迁移到 15.0

从 Handsontable 14.6 迁移到 Handsontable 15.0（于 [...] 发布）。

[[toc]]

### 对 React 包装器的更改。

Handsontable 15.0 对其 React 包装器进行了重大改进，重点关注类型安全、惯用的 React 使用和开发人员体验。
这就是为什么我们要引入一个名为`@handsontable/react-wrapper`的新 React 包装器。

本指南将帮助您将现有的`@handsontable/react`组件迁移到`@handsontable/react-wrapper`。

##### 主要变化
- 删除`settings`道具以支持直接道具传递
- 更新了定义自定义渲染器和编辑器的语法
- 引入`useHotEditor`挂钩，用于创建基于函数的自定义编辑器

::: tip
值得注意的是，如果您希望继续使用基于类的编辑器和渲染器组件，则`@handsontable/react`仍然可用。
:::

## 警告消息

为了帮助您完成迁移过程，`@handsontable/react-wrapper`提供了警告消息来帮助识别和更新已弃用的做法：

```txt
过时的渲染器警告：
不再支持使用`hot-renderer`注释组件提供基于组件的渲染器。 
使用`HotTable`或`HotColumn`组件的`renderer`属性传递您的组件。

过时的编辑器警告：
不再支持使用带`hot-editor`注释的组件提供基于组件的编辑器。 
使用`HotTable`或`HotColumn`组件的`editor`属性传递您的组件。
```

### 迁移步骤

#### 1. 删除 `settings` 属性

`设置`属性已被删除。现在必须将配置选项直接传递到`HotTable`组件。

**`@handsontable/react`:**
```jsx
const settings = { rowHeaders: true, colHeaders: true };

<HotTable settings={settings} />
```

**`@handsontable/react-wrapper`:**
```jsx
<HotTable 
  rowHeaders={true} 
  colHeaders={true}
  // 所有其他 Handsontable 选项均可作为道具使用
/>
```

#### 2. 自定义渲染器更改

现在应该使用 HotTable 或 HotColumn 的`renderer`属性提供自定义渲染器。

**`@handsontable/react`:**
```jsx
<HotColumn width={250}>
  <RendererComponent hot-renderer />
</HotColumn>
```

**`@handsontable/react-wrapper`:**
```jsx
<HotColumn width={250} renderer={RendererComponent} />
```

此外，自定义渲染器现在接收具有正确 TypeScript 定义的 props：

```tsx
import { HotRendererProps } from '@handsontable/react-wrapper';

const MyRenderer = (props: HotRendererProps) => {
  const { value, row, col, cellProperties } = props;
  return (
    <div style={{ backgroundColor: cellProperties.readOnly ? '#f0f0f0' : '#fff' }}>
      {`${value.name}: ${value.value} at (${row}, ${col})`}
    </div>
  );
};
```

::: tip
如果您当前正在使用`渲染器`选项来提供基于 javascript 函数的渲染器，您仍然可以使用它们。不要在`renderer`键下定义它们，而是在`hotRenderer`下进行定义。
:::

#### 3. 自定义编辑器更改

自定义编辑器发生了重大变化，使用新的`useHotEditor`挂钩从基于类的组件过渡到基于函数的组件。

##### 3.1. 将类声明替换为函数：
**`@handsontable/react`:**
```jsx
class EditorComponent extends BaseEditorComponent {
  // ...
}
```

**`@handsontable/react-wrapper`:**
```
const EditorComponent = () => {
  // ...
};
```

##### 3.2. 实现`useHotEditor`钩子
将 `BaseEditorComponent` 方法替换为 `useHotEditor` 钩子：
```jsx
import { useHotEditor } from '@handsontable/react-wrapper';

const EditorComponent = () => {
  const { value, setValue, finishEditing } = useHotEditor({
    onOpen: () => {
      // 开放逻辑
    },
    onClose: () => {
      // 关闭逻辑
    },
  });

  // 组件逻辑在这里
};
```

##### 3.3。更新组件结构
将 `render` 方法替换为函数组件的 return 语句：
```jsx
return (
  <div>
    <button onClick={finishEditing}>Apply</button>
  </div>
);
```

##### 3.4。更新 HotColumn 使用情况
与渲染器类似，现在应该使用`HotTable`或`HotColumn`的`editor`属性来提供自定义编辑器。

**`@handsontable/react`:**
```jsx
<HotColumn width={250}>
  <EditorComponent hot-editor />
</HotColumn>
```
**`@handsontable/react-wrapper`:**
```jsx
<HotColumn width={250} editor={EditorComponent} />
```

::: tip
如果您当前正在使用`editor`选项来提供基于 javascript 类的编辑器，您仍然可以使用它们。不要在`editor`键下定义它们，而是在`hotEditor`下定义它们。
:::
