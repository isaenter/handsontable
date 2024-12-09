---
id: u00oul7m
title: 单元格编辑器
metaTitle: Cell editor - JavaScript Data Grid | Handsontable
description: Create a custom cell editor function, to have full control over how editing works in the cells of your data grid.
permalink: /cell-editor
canonicalUrl: /cell-editor
react:
  id: 6i8ttta0
  metaTitle: Cell editor - React Data Grid | Handsontable
searchCategory: Guides
category: Cell functions
---

# 单元格编辑器

创建自定义单元格编辑器功能，以完全控制数据网格单元格中的编辑方式。

[[toc]]

## 概述


Handsontable 将显示单元格值的过程与更改值的过程分开。渲染器负责呈现数据，编辑器负责更改数据。由于渲染器只有一个简单的任务：_获取单元格的实际值并将其表示形式返回为 HTML 代码_它们可以是单个函数。然而，编辑器需要处理用户输入（即鼠标和键盘事件）、验证数据并根据验证结果进行操作，因此将所有这些功能放入一个函数中并不是一个好主意。这就是为什么 Handsontable 编辑器由编辑器类表示。

本教程将让您全面了解单元格编辑的整个过程如何工作、Handsontable Core 如何管理编辑器、编辑器生命周期如何以及最后如何创建自己的编辑器。


::: only-for react

## 基于组件的编辑器

您可以使用 React 组件来创建自定义编辑器。为此，您需要使用`useHotEditor`挂钩创建一个功能组件。

在最简单的情况下：
```js
import { useHotEditor } from "@handsontable/react-wrapper";

const EditorComponent = () => {
  const { value, setValue, finishEditing } = useHotEditor({
    onOpen: () => {
      // 开放逻辑
    },
    onClose: () => {
      // 关闭逻辑
    },
  });

  // 这里是组件逻辑

  // 应在编辑器中呈现的任何元素
  return (
    <div>
      <button onClick={finishEditing}>应用</button>
    </div>
  );
};

// ...

<HotTable
  editor={ EditorComponent }
/>
```

还值得注意的是，默认情况下，如果启用了`outsideClickDeselects`选项，Handsontable 中的编辑器将在单击它们后关闭。
为了防止这种情况，编辑器容器上的`mousedown`事件必须调用`event.stopPropagation()`。

如果您使用的是 React 17 及更高版本，`event.stopPropagation()` 应该可以按预期为您工作。有关事件委托的详细信息，请参阅 [React 17 发行说明](https://reactjs.org/blog/2020/08/10/react-v17-rc.html#changes-to-event-delegation)。

::: example #example1 :react --js 1 --ts 2

@[code](@/content/guides/cell-functions/cell-editor/react/example1.jsx)
@[code](@/content/guides/cell-functions/cell-editor/react/example1.tsx)

:::

## 基于类的编辑器

您还可以为`HotTable`组件声明一个自定义编辑器，方法是将其声明为一个类并将其作为`hotEditor`传递给 Handsontable 选项（或者在`columns`配置数组中使用时简称为`editor`）。

以下示例利用编辑器的`input`元素中的`placeholder`属性，实现了`@handsontable/react-wrapper`组件，并添加了自定义编辑器。

::: example #example2 :react --js 1 --ts 2

@[code](@/content/guides/cell-functions/cell-editor/react/example2.jsx)
@[code](@/content/guides/cell-functions/cell-editor/react/example2.tsx)

:::

::: tip

以下所有部分描述了如何利用 Handsontable 基于类的编辑器可用的功能。
当使用非组件编辑器方法时，此信息适用于 React。

:::

::: only-for javascript

## 编辑器

:::

::: only-for react

### 编辑器

:::


[`EditorManager`](@/api/baseEditor.md) 是一个负责处理 Handsontable 中所有可用编辑器的类。如果 `Handsontable` 需要与编辑器交互，它使用 [`EditorManager`](@/api/baseEditor.md) 对象。 [`EditorManager`](@/api/baseEditor.md) 对象在调用 `Handsontable()` 构造函数后运行的 [`init()`](@/api/baseEditor.md#init) 方法中实例化首次。 [`EditorManager`](@/api/baseEditor.md) 对象的引用在 Handsontable 实例中保持私有，您无法访问它。然而，有一些方法可以改变 [`EditorManager`](@/api/baseEditor.md) 的默认行为，稍后会详细介绍。

::: only-for javascript
### 编辑器任务

:::

::: only-for react

#### 编辑器任务

:::

[`EditorManager`](@/api/baseEditor.md) 有 4 个主要任务：

- 为活动单元格选择合适的编辑器
- 准备显示编辑器
- 显示编辑器（基于用户行为）
- 关闭编辑器（基于用户行为）。

我们将详细讨论每一项任务。

::: only-for javascript

#### 为活动单元格选择合适的编辑器

:::

::: only-for react

##### 为活动单元格选择合适的编辑器

:::


当用户选择一个单元格时，[`EditorManager`](@/api/baseEditor.md) 查找分配给该单元格的编辑器类，检查 [`editor`](@/api/options.md#editor) 配置的值选项。您可以全局（针对表中的所有单元格）、每列（针对列中的所有单元格）或单独为每个单元格定义 [`editor`](@/api/options.md#editor) 配置选项。有关更多详细信息，请参阅[配置选项](@/guides/getting-started/configuration-options/configuration-options.md#cascading-configuration)指南。

[`editor`](@/api/options.md#editor) 配置选项的值可以是表示编辑器的字符串（例如 'text'、'autocomplete'、'checkbox' 等），也可以是编辑器类。 [`EditorManager`](@/api/baseEditor.md) 然后将获取编辑器类的实例，要记住的第一件非常重要的事情是：**单个表中始终有某个编辑器类的一个实例**，换句话说，每个编辑器类对象**是单个表中的单例**，这意味着每个表仅调用其构造函数一次。如果一个页面上有 3 个表格，则每个表格都有自己的编辑器类实例。这有一些重要的含义，您必须考虑创建自己的编辑器。

::: only-for javascript

#### 准备要显示的编辑器

:::

::: only-for react

##### 准备要显示的编辑器

:::

当 [`EditorManager`](@/api/baseEditor.md) 获取编辑器类实例（编辑器对象）时，它会调用其 [`prepare()`](@/api/baseEditor.md#prepare) 方法。 [`prepare()`](@/api/baseEditor.md#prepare) 方法设置与所选单元格相关的编辑器对象属性，但不显示编辑器。每次用户选择一个单元格时都会调用 [`prepare()`](@/api/baseEditor.md#prepare)。在某些情况下，可以对同一单元格多次调用它，而无需更改选择。

::: only-for javascript

#### 显示编辑器

:::

::: only-for react

##### 显示编辑器
:::

当编辑器准备好时，[`EditorManager`](@/api/baseEditor.md) 等待触发单元格编辑的用户事件。这些事件是：

- 按<kbd>**Enter**</kbd>
- 按<kbd>**Shift**</kbd>+<kbd>**Enter**</kbd>
- 双击单元格
- 按<kbd>**F2**</kbd>

如果触发任何这些事件，[`EditorManager`](@/api/baseEditor.md) 会调用编辑器的 [`beginEditing()`](@/api/baseEditor.md#beginediting) 方法，该方法应该显示编辑器。

::: only-for javascript

#### 关闭编辑器

:::

::: only-for react

##### 关闭编辑器
:::

当编辑器打开时，[`EditorManager`](@/api/baseEditor.md) 等待应结束单元格编辑的用户事件。这些事件是：

- 单击另一个单元格（保存更改）
- 按 <kbd>**Enter**</kbd>（保存更改并将选择内容向下移动一个单元格）
- 按 <kbd>**Shift**</kbd>+<kbd>**Enter**</kbd> （保存更改并将选择内容向上移动一个单元格）
- 按 <kbd>**Ctrl**</kbd>/<kbd>**Cmd**</kbd>+<kbd>**Enter**</kbd> 或 <kbd>**Alt**< /kbd>/<kbd>**Option**</kbd>+<kbd>**Enter**</kbd>（在单元格内添加新行）
- 按<kbd>**Escape**</kbd>（中止更改）
- 按 <kbd>**Tab**</kbd> （保存更改并向左或向右移动一个单元格，具体取决于您的[布局方向](@/guides/internationalization/layout-direction/layout-direction .md#受布局方向影响的元素））
- 按 <kbd>**Shift**</kbd>+<kbd>**Tab**</kbd> （保存更改并向左或向右移动一个单元格，具体取决于您的[布局方向]( @/guides/internationalization/layout-direction/layout-direction.md#elements-affected-by-layout-direction))
- 按 <kbd>**Page Up**</kbd>、<kbd>**Page Down**</kbd>（保存更改并向上/向下移动一个屏幕）
如果触发任何这些事件，[`EditorManager`](@/api/baseEditor.md) 会调用编辑器的 [`finishEditing()`](@/api/baseEditor.md#finishediting) 方法，该方法应尝试保存更改（除非已按下 ESC 键）并关闭编辑器。

::: only-for javascript

### 覆盖编辑器默认行为

:::

::: only-for react

#### 覆盖编辑器默认行为
:::


您可能想要更改导致编辑器打开或关闭的默认事件。例如，您的编辑器可能使用 <kbd>**向上箭头**</kbd> 和 <kbd>**向下箭头**</kbd> 事件来执行某些操作（例如增加或减少单元格值），并且您当用户按下这些键时，不希望 [`EditorManager`](@/api/baseEditor.md) 关闭编辑器。这就是为什么 [`EditorManager`](@/api/baseEditor.md) 在处理用户事件之前运行 [`beforeKeyDown`](@/api/hooks.md#beforekeydown) 挂钩。如果您为 [`beforeKeyDown`](@/api/hooks.md#beforekeydown) 注册一个侦听器，则在 `event` 对象 [`EditorManager`](@/api/baseEditor.md) 上调用 `stopImmediatePropagation()` 会获胜执行其默认操作。有关覆盖 [`EditorManager`](@/api/baseEditor.md) 行为的更多信息，请参阅`SelectEditor -从头开始​​创建编辑器`部分。

您现在应该更好地了解 [`EditorManager`](@/api/baseEditor.md) 的工作原理。让我们更深入地了解每个编辑器类必须实现哪些方法以及这些方法的作用。

::: only-for javascript

## [`基础编辑器`](@/api/baseEditor.md)

:::

::: only-for react

### [`基础编辑器`](@/api/baseEditor.md)
:::

`Handsontable.editors.BaseEditor` 是一个抽象类，所有编辑器类都应该继承它。它实现了一些基本的编辑器方法，并声明了每个编辑器类应实现的一些方法。在本节中，我们将研究所有这些方法。

::: only-for javascript

### 常用方法

:::

::: only-for react

#### 常用方法
:::

常用方法是由 [`BaseEditor`](@/api/baseEditor.md) 类实现的方法。它们包含每个编辑器都应该具备的一些核心逻辑。大多数时候，您不应该为这些方法烦恼。但是，如果您要创建一些更复杂的编辑器，您可能需要重写一些常用方法，在这种情况下，您应该始终调用原始方法，然后执行特定于您的编辑器的其他操作。

**示例**-重写通用方法

```js
//CustomEditor是一个类，继承自BaseEditor
class CustomEditor extends BaseEditor {
  prepare(row, col, prop, td, originalValue, cellProperties) {
    // 调用原来的方法...
    super.prepare(row, col, prop, td, originalValue, cellProperties);
    // ...然后做一些特定于您的 CustomEditor 的事情
    this.customEditorSpecificProperty = 'foo';
  }
}
```

常用的方法有7种。下面对所有这些进行了描述。

::: only-for javascript

#### prepare(row: `Number`, col: `Number`, prop: `Number|String`, td: `HTMLTableCellElement`, originalValue: `Mixed`, cellProperties: `Object`)

:::

::: only-for react

##### prepare(row: `Number`, col: `Number`, prop: `Number|String`, td: `HTMLTableCellElement`, originalValue: `Mixed`, cellProperties: `Object`)
:::

准备为给定单元格显示的编辑器。设置大多数实例属性。

返回值: `undefined`

::: only-for javascript
#### beginEditing(newInitialValue: `Mixed`, event: `Mixed`)

:::

::: only-for react

##### beginEditing(newInitialValue: `Mixed`, event: `Mixed`)

:::

将编辑器值设置为`newInitialValue`。如果`newInitialValue`未定义，则编辑器值将设置为原始单元格值。内部调用 [`open()`](@/api/baseEditor.md#open) 方法。

返回值: `undefined`

::: only-for javascript

#### finishEditing(restoreOriginalValue: 'Boolean' _\[optional\]_, ctrlDown: `Boolean` _\[optional\]_, callback: `Function`)

:::

::: only-for react

##### finishEditing(restoreOriginalValue: 'Boolean' _\[optional\]_, ctrlDown: `Boolean` _\[optional\]_, callback: `Function`)
:::

尝试完成细胞版本。内部调用 [`saveValue()`](@/api/baseEditor.md#savevalue) 和 `discardEditor()`。如果`restoreOriginalValue`设置为`true`，则单元格值将设置为其原始值（来自版本之前的值）。 `ctrlDown` 值作为第二个参数传递给 [`saveValue()`](@/api/baseEditor.md#savevalue)。

回调函数包含一个布尔参数 -如果新值有效或 [`allowInvalid`](@/api/options.md#allowinvalid) 配置选项设置为 `true`，否则参数为 `false`。

::: only-for javascript

#### discardEditor(result: `Boolean`)

:::

::: only-for react

##### discardEditor(result: `Boolean`)
:::

当单元格验证结束时调用。如果新值成功保存（`result` 设置为 `true` 或 [`allowInvalid`](@/api/options.md#allowinvalid) 属性为 `true`），它将调用 [`close()`](@ /api/baseEditor.md#close) 方法，否则调用 [`focus()`](@/api/baseEditor.md#focus) 方法并保持编辑器打开。

返回值: `undefined`

::: only-for javascript

#### saveValue(value: `Mixed`, ctrlDown: `Boolean`)

:::

::: only-for react

##### saveValue(value: `Mixed`, ctrlDown: `Boolean`)
:::

尝试将`值`保存为新的单元格值。在内部执行验证。如果`ctrlDown`设置为 true，则新值将设置为所有选定的单元格。

返回值: `undefined`

::: only-for javascript

#### isOpened()

:::

::: only-for react

##### isOpened()
:::

如果编辑器打开则返回`true`，如果编辑器关闭则返回`false`。调用 [`open()`](@/api/baseEditor.md#open) 后，编辑器被视为打开。调用方法后，编辑器被视为关闭 [`close()`](@/api/baseEditor.md#close)。

返回值: `Boolean`

::: only-for javascript

#### extend()

:::

::: only-for react

##### extend()
:::

返回： `Function` -从当前类继承的类函数。返回类的`prototype`方法可以被安全地覆盖，而不会有改变父类的`prototype`的危险。

**示例**-继承 [`BaseEditor`](@/api/baseEditor.md) 并覆盖其方法

```js
const CustomEditor = Handsontable.editors.BaseEditor.prototype.extend();

//这不会改变 BaseEditor.prototype.beginEditing()
CustomEditor.prototype.beginEditing = function() {};
```

**示例**-从另一个编辑器继承

```js
const CustomTextEditor = Handsontable.editors.TextEditor.prototype.extend();

//CustomTextEditor 使用 TextEditor 实现的所有方法。
//您可以安全地重写任何方法，而不会影响原始的 TextEditor。
```

**注意：**这是一个实用方法，与编辑单元格的过程无关。

::: only-for javascript

### Editor specific methods

:::

::: only-for react

#### Editor specific methods

:::

编辑器特定方法是 [`BaseEditor`](@/api/baseEditor.md) 中未实现的方法。为了工作，每个编辑器类都必须实现这些方法。

::: only-for javascript

#### init()

:::

::: only-for react

##### init()

:::

创建编辑器类的新实例时调用的方法。每个表实例最多发生一次，因为所有编辑器都在表实例中用作**单例**。您应该使用此方法来执行任务，其结果可以在编辑器的生命周期中重用。最常见的操作是创建编辑器的HTML结构。

方法不需要返回任何值。

::: only-for javascript

#### getValue()

:::

::: only-for react

##### getValue()

:::

方法应返回当前编辑器值，即应保存为新单元格值的值。

::: only-for javascript

#### setValue(newValue: `Mixed`)

:::

::: only-for react

##### setValue(newValue: `Mixed`)

:::

方法应将编辑器值设置为`newValue`。

**示例**假设我们正在实现一个 DateEditor，它通过显示日历来帮助选择日期。 [`getvalue()`](@/api/baseEditor.md#getvalue) 和 [`setvalue()`](@/api/baseEditor.md#setvalue) 方法可以像这样工作：

```js
class CalendarEditor extends TextEditor {
  constructor(hotInstance) {
    super(hotInstance);
  }

  getValue() {
    // 返回当前选择的日期，例如`2023/09/15`
    return calendar.getDate();
  }

  setValue(newValue) {
    // 突出显示日历上的给定日期
    calendar.highlightDate(newValue);
  }
}
```

::: only-for javascript

#### open()

:::

::: only-for react

##### open()
:::

显示编辑器。在大多数情况下，此方法可以很简单：

```js
class CustomEditor extends TextEditor {
  open() {
    this.editorDiv.style.display = '';
  }
}
```

该方法不需要返回任何值。

::: only-for javascript

#### close()

:::

::: only-for react

##### close()

:::

更改单元格值后隐藏编辑器。在大多数情况下，此方法可以很简单：

```js
class CustomEditor extends TextEditor {
  close() {
    this.editorDiv.style.display = 'none';
  }
}
```

该方法不需要返回任何值。

::: only-for javascript

#### focus()

:::

::: only-for react

##### focus()

:::

聚焦编辑器。当用户想要通过选择另一个单元格来关闭编辑器并且编辑器中的值不验证（且 [`allowInvalid`](@/api/options.md#allowinvalid) 为 `false`）时，会调用此方法。在大多数情况下，此方法可以很简单：

```js
class CustomEditor extends TextEditor {
  focus() {
    this.editorInput.focus();
  }
}
```

该方法不需要返回任何值。

::: only-for javascript

### 通用编辑器属性

:::

::: only-for react

#### 常用编辑器属性
:::

所有下面提到的属性都可以通过`this`对象（例如`this.instance`）在编辑器实例中使用。

  | 属性           | 类型                | 描述                                                                                                                           |
  | -------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
  | instance       | `Handsontable.Core` | 此编辑器对象所属的 Handsontable 实例。在类构造函数中设置，在编辑器的整个生命周期中不可变。                                     |
  | row            | `Number`            | 活动单元格行索引。对每个 [`prepare()`](@/api/baseEditor.md#prepare) 方法调用进行更新。                                         |
  | col            | `Number`            | 活跃细胞指数。对每个 [`prepare()`](@/api/baseEditor.md#prepare) 方法调用进行更新。                                             |
  | prop           | `String`            | 与活动单元格关联的属性名称（仅当数据源是对象数组时相关）。对每个 [`prepare()`](@/api/baseEditor.md#prepare) 方法调用进行更新。 |
  | TD             | `HTMLTableCellNode` | 活动单元格的节点对象。对每个 [`prepare()`](@/api/baseEditor.md#prepare) 方法调用进行更新。                                     |
  | cellProperties | `Object`            | 表示活动单元格属性的对象。对每个 [`prepare()`](@/api/baseEditor.md#prepare) 方法调用进行更新。                                 |

::: only-for javascript

## 如何创建自定义编辑器？

:::

::: only-for react

### 如何创建自定义编辑器？

:::

现在您已经了解了 Handsontable 编辑器背后的理念，并且准备好编写自己的编辑器了。基本上，您可以通过创建一个新的编辑器类从头开始构建一个新的编辑器，该类继承自 [`BaseEditor`](@/api/baseEditor.md)，或者如果您只是想增强现有的编辑器，您可以扩展它的类并只重写它的一些方法。

在本教程中，我们将研究这两种方法。我们将创建一个全新的`SelectEditor`，它使用`<select>`列表来更改单元格的值。我们还将创建一个`PasswordEditor`，其工作方式与常规`TextEditor`完全相同，只是它显示密码输入而不是文本区域。

让我们从`PasswordEditor`开始，因为它更容易一些。

::: only-for javascript

### `PasswordEditor` -扩展现有编辑器

:::

::: only-for react

#### `PasswordEditor` -扩展现有编辑器
:::

默认情况下，`TextEditor`是 Handsontable 中可用的最复杂的编辑器。它显示一个`<textarea>`，它会自动更改其大小以适应其内容。我们希望创建一个`PasswordEditor`，它保留所有这些功能，但显示`<input type="password">`字段而不是`<textarea>`。

正如您可能已经猜到的，我们需要创建一个新的编辑器类，它继承自`TextEditor`，然后重写它的一些方法以将`<textarea>`替换为`input:password`。幸运的是，文本区域和密码输入具有相同的 API，因此我们所要做的就是替换负责创建 HTML 元素的代码。如果您查看 `TextEditor` [`init()`](@/api/baseEditor.md#init) 方法，您会注意到它调用内部 `createElements()` 方法，该方法创建 `<textarea> ` 节点并在编辑器初始化期间将其附加到 DOM -BINGO！

这是代码

```js
import Handsontable from 'handsontable';

class PasswordEditor extends Handsontable.editors.TextEditor {
  createElements() {
    super.createElements();

    this.TEXTAREA = this.hot.rootDocument.createElement('input');
    this.TEXTAREA.setAttribute('type', 'password');
    this.TEXTAREA.setAttribute('data-hot-input', true); //使 HOT 可以将元素识别为其自己的组件元素。
    this.textareaStyle = this.TEXTAREA.style;
    this.textareaStyle.width = 0;
    this.textareaStyle.height = 0;

    this.TEXTAREA_PARENT.innerText = '';
    this.TEXTAREA_PARENT.appendChild(this.TEXTAREA);
  }
}
```

就是这样！您现在可以使用新编辑器：

::: only-for javascript

```js
const container = document.querySelector('#container')
const hot = new Handsontable(container, {
  columns: [
    {
      type: 'text'
    },
    {
      editor: PasswordEditor
      // 如果你想使用字符串'password'而不是传递
      // 实际的编辑器类请查看`注册编辑器`部分
    }
  ],
});
```

:::

::: only-for react

```jsx
<HotTable
  columns={[
    {
      type: 'text'
    },
    {
      editor: PasswordEditor
      // 如果你想使用字符串'password'而不是传递
      // 实际的编辑器类请查看`注册编辑器`部分
    }
  ]}
/>
```

:::

让我们尝试一些更复杂的东西：我们将从头开始构建一个新的编辑器。

::: only-for javascript

### `SelectEditor` -从头开始​​创建编辑器

:::

::: only-for react

#### `SelectEditor` -从头开始​​创建编辑器

:::

我们将构建一个功能齐全的编辑器，让用户使用标准的`<select>`输入从预定义的选项列表中选择单元格值。作为一项额外功能，我们将添加使用 <kbd>**ARROW_UP**</kbd> 和 <kbd>**ARROW_DOWN**</kbd> 键更改当前选定选项的功能。

要做的事情：

1. 创建一个继承自`Handsontable.editors.BaseEditor`的新类。
2. 添加创建 `<select>` 输入并附加到 DOM 的功能。
3. 添加使用单元格属性中传递的选项数组填充`<select>`的函数。
4. 实现方法：
    - [`getvalue()`](@/api/baseEditor.md#getvalue)
    - [`setvalue()`](@/api/baseEditor.md#setvalue)
    - [`open()`](@/api/baseEditor.md#open)
    - [`close()`](@/api/baseEditor.md#close)
    - [`focus()`](@/api/baseEditor.md#focus)
5. 覆盖默认的 [`EditorManager`](@/api/baseEditor.md) 行为，以便按 <kbd>**向上箭头**</kbd> 和 <kbd>**向下箭头**</kbd > 键不会关闭编辑器，而是更改当前选定的值。
6. 注册编辑器。

::: only-for javascript

#### 创建新编辑器

:::

::: only-for react

##### 创建新编辑器

:::

这可能是最简单的部分。我们所要做的就是调用 `BaseEditor.prototype.extend()` 函数，它将返回一个继承自 [`BaseEditor`](@/api/baseEditor.md) 的新函数类。

```js
const SelectEditor = Handsontable.editors.BaseEditor.prototype.extend();
```

任务一：**完成**

::: only-for javascript

#### 创建 `<select>` 输入并将其附加到 DOM

:::

::: only-for react

##### 创建 `<select>` 输入并将其附加到 DOM

:::

我们可以在三个潜在位置放置创建 `<select>` 元素并将其放入 DOM 的函数：

- [`init()`](@/api/baseEditor.md#init) 方法
- [`prepare()`](@/api/baseEditor.md#prepare) 方法
- [`open()`](@/api/baseEditor.md#open) 方法

选择最佳解决方案的关键是了解每个方法何时被调用。
[`init()`](@/api/baseEditor.md#init) 方法在创建编辑器类对象期间被调用。每个表实例最多发生一次，因为一旦创建了对象，每次 [`EditorManager`](@/api/baseEditor.md) 请求此编辑器类实例时都会重用该对象（请参阅 [单例模式](http:///en.wikipedia.org/wiki/Singleton_pattern）了解详细信息）。

每次用户选择将此特定编辑器类设置为 [`editor`](@/api/options.md 的单元格时，都会调用 [`prepare()`](@/api/baseEditor.md#prepare) 方法#editor) 配置选项。因此，如果我们将 SelectEditor 设置为整个列的编辑器，那么选择该列中的任何单元格都会调用 SelectEditor 的 [`prepare()`](@/api/baseEditor.md#prepare) 方法。换句话说，该方法在表生命周期内可以被调用数百次，尤其是在处理大数据时。 [`prepare()`](@/api/baseEditor.md#prepare) 的另一个重要方面是它不应该显示编辑器（这是 `open' 的工作）。显示编辑器是由用户事件触发的，例如按 ENTER、F2 或双击单元格，因此调用 [`prepare()`](@/api/baseEditor.md#prepare) 和实际显示编辑器之间有一些时间。尽管如此，[`prepare()`](@/api/baseEditor.md#prepare) 执行的操作应尽快完成，以提供最佳的用户体验。

当需要显示编辑器时，会调用 [`open()`](@/api/baseEditor.md#open) 方法。在大多数情况下，此方法应将 CSS `display` 属性更改为 `block` 或执行类似的操作。用户希望在触发事件（按适当的键或双击单元格）后立即显示编辑器，因此 [`open()`](@/api/baseEditor.md#open) 方法应该与可能的。

知道了这一切，放置负责创建 `<select>` 输入的代码的最合理位置是 [`init()`](@/api/baseEditor.md#init) 方法中的某个位置。 DOM 操作被认为是相当昂贵的（就资源消耗而言）操作，因此最好执行一次并在编辑器的整个生命周期中重用生成的 HTML 节点。

```js
import Handsontable from 'handsontable';

class SelectEditor extends Handsontable.editors.BaseEditor {
  /**
   * 初始化编辑器实例、DOM 元素和安装挂钩。
   */
  init() {
    // 创建分离节点，添加 CSS 类并确保其不可见
    this.select = this.hot.rootDocument.createElement('SELECT');
    this.select.classList.add('htSelectEditor');
    this.select.style.display = 'none';

    // 通过将节点附加到保存表的容器来将节点附加到 DOM
    this.hot.rootElement.appendChild(this.select);
  }
}
```
```css
.htSelectEditor {
  /*
   * 此 hack 可以更改 WebKit 浏览器中的 <select> 尺寸
   */
  -webkit-appearance: menulist-button !important;
  position: absolute;
  width: auto;
  z-index: 300;
}
```

任务二：**完成**

::: only-for javascript

#### 使用选项填充 `<select>`

:::

::: only-for react

##### 使用选项填充`<select>`

:::

在上一步中，我们实现了一个创建 `<select>` 输入并将其附加到 DOM 的函数。您可能注意到我们没有编写任何创建`<option>`元素的代码，因此如果我们显示列表，它将是空的。

我们希望能够定义这样的选项列表：

::: only-for javascript

```js
const container = document.querySelector('#container')
const hot = new Handsontable(container, {
  columns: [
    {
      editor: SelectEditor,
      selectOptions: ['option1', 'option2', 'option3']
    }
  ]
});
```

:::

::: only-for react

```jsx
<HotTable
  columns={[
    {
      editor: SelectEditor,
      selectOptions: ['option1', 'option2', 'option3']
    }
  ]}
/>
```

:::


没有（简单）方法可以获取 [`selectOptions`](@/api/options.md#selectoptions) 的值。即使我们可以访问这个数组，如果我们在`init`函数中执行此操作，我们也只能用选项填充列表一次。如果我们有多个使用`SelectEditor`的列，并且每一列都有自己的选项列表怎么办？同一列中的两个单元格甚至可能有不同的选项列表（级联配置 -还记得吗？）很明显，我们必须为为列表创建项目的代码找到一个更好的位置。

我们只剩下两个地方 [`prepare()`](@/api/baseEditor.md#prepare) 和 [`open()`](@/api/baseEditor.md#open)。后一种实现起来更简单，但正如我们之前所说，[`setvalue()`](@/api/baseEditor.md#setvalue) 应该尽可能快地工作并创建 `<option>` 节点并将它们附加到如果 [`selectOptions`](@/api/options.md#selectoptions) 包含很长的选项列表，DOM 可能会很耗时。因此，[`prepare()`](@/api/baseEditor.md#prepare) 似乎是进行此类工作的更安全的地方。唯一要记住的是，在重写 [`prepare()`](@/api/baseEditor.md#prepare 时，我们应该始终调用 [`BaseEditor`](@/api/baseEditor.md) 的原始方法）。 `BaseEditor.prototype.prepare()` 设置一些重要的属性，供其他编辑器方法使用。

```js
//在prepare()方法中创建选项
prepare(row, col, prop, td, originalValue, cellProperties) {
  //记得调用父类的方法
  super.prepare(row, col, prop, td, originalValue, cellProperties);

  const selectOptions = this.cellProperties.selectOptions;
  let options;

  if (typeof selectOptions === 'function') {
    options = this.prepareOptions(selectOptions(this.row, this.col, this.prop));
  } else {
    options = this.prepareOptions(selectOptions);
  }

  this.select.innerText = '';

  Object.keys(options).forEach((key) => {
    const optionElement = this.hot.rootDocument.createElement('OPTION');
    optionElement.value = key;
    optionElement.innerText = options[key];
    this.select.appendChild(optionElement);
  });
}
```

Where the `prepareOptions` is:

```js
prepareOptions(optionsToPrepare) {
  let preparedOptions = {};

  if (Array.isArray(optionsToPrepare)) {
    for (let i = 0, len = optionsToPrepare.length; i < len; i++) {
      preparedOptions[optionsToPrepare[i]] = optionsToPrepare[i];
    }

  } else if (typeof optionsToPrepare === 'object') {
    preparedOptions = optionsToPrepare;
  }

  return preparedOptions;
}
```

任务三：**完成**

::: only-for javascript

#### 实现编辑器特定方法

:::

::: only-for react

##### 实现编辑器特定方法

:::

大部分工作已经完成。现在我们只需要实现所有编辑器特定的方法。幸运的是，我们的编辑器非常简单，因此这些方法只有几行代码。

```js
getValue() {
  return this.select.value;
}

setValue(value) {
  this.select.value = value;
}

open() {
  const {
    top,
    start,
    width,
    height,
  } = this.getEditedCellRect();
  const selectStyle = this.select.style;

  this._opened = true;

  selectStyle.height = `${height}px`;
  selectStyle.minWidth = `${width}px`;
  selectStyle.top = `${top}px`;
  selectStyle[this.hot.isRtl() ? 'right' : 'left'] = `${start}px`;
  selectStyle.margin = '0px';
  selectStyle.display = '';
}

focus() {
  this.select.focus();
}

close() {
  this._opened = false;
  this.select.style.display = 'none';
}
```


[`getvalue()`](@/api/baseEditor.md#getvalue)、[`setvalue()`](@/api/baseEditor.md#setvalue) 和 [`close()`](@ /api/baseEditor.md#close) 是不言自明的，但 [`open()`](@/api/baseEditor.md#open) 需要一些注释。首先，该实现假设负责用选项填充列表的代码放置在 [`prepare()`](@/api/baseEditor.md#prepare) 中。其次，在显示列表之前，我们设置其`height`和`min-width`，使其与相应单元格的大小匹配。这是一个可选步骤，但如果没有它，编辑器将根据浏览器具有不同的大小。限制`<select>`的最大高度可能也是个好主意。最后，由于`<select>`已附加到表格容器的末尾，我们必须更改其位置，以便它可以显示在正在编辑的单元格上方。同样，这是一个可选步骤，但将编辑器放在适当的单元格旁边似乎很合理。

任务四：**完成**

此时我们应该有一个可以使用的编辑器。将代码放在页面中的某个位置，并将 `SelectEditor` 类函数作为 [`editor`](@/api/options.md#editor) 配置选项的值传递。

::: only-for javascript

```js
const container = document.querySelector('#container')
const hot = new Handsontable(container, {
  columns: [
    {},
    {
      editor: SelectEditor,
      selectOptions: ['option1', 'option2', 'option3']
    }
  ]
});
```

:::

::: only-for react

```jsx
<HotTable
  columns={[
    {},
    {
      editor: SelectEditor,
      selectOptions: ['option1', 'option2', 'option3']
    }
  ]}
/>
```

:::

::: only-for javascript

#### 使用 <kbd>**向上箭头**</kbd> 和 <kbd>**向下箭头**</kbd> 更改所选值
:::

::: only-for react

##### 使用 <kbd>**向上箭头**</kbd> 和 <kbd>**向下箭头**</kbd> 更改所选值

:::


我们知道我们的编辑器可以工作，但让我们再添加一项调整。目前，当编辑器打开并且用户按 <kbd>**向上箭头**</kbd> 或 <kbd>**向下箭头**</kbd> 时，编辑器将关闭，并且选择向上或向下移动一个单元格。如果按向上和向下箭头键可以更改当前选择的值，那不是很好吗？用户可以导航到单元格，点击 <kbd>**Enter**</kbd>，选择所需的值，然后再次点击 <kbd>**Enter**</kbd> 保存更改。甚至无需将手放在鼠标上就可以使用桌子进行操作。听起来不错，但是如何覆盖默认行为呢？毕竟，是 [`EditorManager`](@/api/baseEditor.md) 决定何时关闭编辑器。

不用担心。尽管您无法直接访问 [`EditorManager`](@/api/baseEditor.md) 实例，但您仍然可以覆盖其行为。在 [`EditorManager`](@/api/baseEditor.md) 开始处理键盘事件之前，它会触发 [`beforeKeyDown`](@/api/hooks.md#beforekeydown) 钩子。如果任何监听函数在`event`对象上调用`stopImmediatePropagation()`方法，[`EditorManager`](@/api/baseEditor.md) 将不会进一步处理该事件。因此，我们所要做的就是注册一个 [`beforeKeyDown`](@/api/hooks.md#beforekeydown) 监听器函数来检查 <kbd>**Arrow Up**</kbd> 或 <kbd>**向下箭头**</kbd> 已被按下，如果是这样，则停止事件传播并相应地更改`<select>`列表中当前选定的值。
我们需要记住的是，我们的侦听器应该仅在编辑器打开时才起作用。我们希望保留其他编辑器以及未打开编辑器时的默认行为。这就是为什么注册监听器的最合理位置是 [`open()`](@/api/baseEditor.md#open) 方法和 [`close()`](@/api/baseEditor.md# close) 方法应该包含删除监听器的代码。

监听器函数如下所示：
```js
onBeforeKeyDown() {
  const previousOptionIndex = this.select.selectedIndex - 1;
  const nextOptionIndex = this.select.selectedIndex + 1;

  switch (event.keyCode) {
    case 38: //向上箭头
      if (previousOptionIndex >= 0) {
        this.select[previousOptionIndex].selected = true;
      }

      event.stopImmediatePropagation();
      event.preventDefault();
      break;

    case 40: //向下箭头
      if (nextOptionIndex <= this.select.length - 1){
        this.select[nextOptionIndex].selected=true;
      }

      event.stopImmediatePropagation();
      event.preventDefault();
      break;

    default:
      break;
  }
}
```
活动编辑器是最近调用 [`prepare()`](@/api/baseEditor.md#prepare) 方法的编辑器。例如，如果您选择编辑器为`Handsontable.TextEditor`的单元格，则`getActiveEditor()`将返回该编辑器类的对象。如果然后选择一个编辑器为`Handsontable.DateEditor`的单元格（可能在另一列中），则活动编辑器会发生变化，现在`getActiveEditor()`将返回`DateEditor`类的对象。

代码的其余部分应该很清楚。现在我们要做的就是注册我们的监听器。

```js
open() {
  this.addHook('beforeKeyDown', () => this.onBeforeKeyDown());
}

close() {
  this.clearHooks();
}
```

来测试一下吧！

注册编辑器
---------------------

创建编辑器时，一个好主意是为其分配一个引用此特定编辑器类的别名。 Handsontable默认定义了11个别名：

- `autocomplete` for `Handsontable.editors.AutocompleteEditor`
- `base` for `Handsontable.editors.BaseEditor`
- `checkbox` for `Handsontable.editors.CheckboxEditor`
- `date` for `Handsontable.editors.DateEditor`
- `dropdown` for `Handsontable.editors.DropdownEditor`
- `handsontable` for `Handsontable.editors.HandsontableEditor`
- `numeric` for `Handsontable.editors.NumericEditor`
- `password` for `Handsontable.editors.PasswordEditor`
- `select` for `Handsontable.editors.SelectEditor`
- `text` for `Handsontable.editors.TextEditor`
- `time` for `Handsontable.editors.TimeEditor`

它为用户提供了一种方便的方法来定义在更改某些单元格的值时应使用哪个编辑器。用户不需要知道哪个类负责显示编辑器，他甚至不需要知道有任何类。此外，您可以更改与别名关联的类，而无需更改定义表的代码。

要注册您自己的别名，请使用`Handsontable.editors.registerEditor()`函数。它需要两个参数：

- `editorName` -代表编辑器的字符串
- `editorClass` -将由 `editorName` 表示的类

如果您想在别名`select`下注册`SelectEditor`，您必须调用：

```js
Handsontable.editors.registerEditor('select', SelectEditor);
```

明智地选择别名。如果您使用已注册的名称注册编辑器，则目标类将被覆盖：

```js
Handsontable.editors.registerEditor('text', MyNewTextEditor);
```

现在`text`别名指向 MyNewTextEditor 类，而不是`Handsontable.editors.TextEditor`。

因此，除非您有意要覆盖现有别名，否则请尝试选择一个唯一的名称。一个好的做法是在别名前添加一些自定义名称（例如您的 GitHub 用户名），以最大程度地减少名称冲突的可能性。如果您想发布您的编辑器，这一点尤其重要，因为您永远不知道使用您的编辑器的用户已经注册了别名。

```js
Handsontable.editors.registerEditor('select', SelectEditor);
```

有人可能已经注册了这样的别名。

```js
Handsontable.editors.registerEditor('my.select', SelectEditor);
```

这样更好。

::: only-for javascript

## 准备发布编辑器

:::

::: only-for react

### 准备发布编辑器

:::

如果您计划发布您的编辑器或者只是想让您的代码保持美观和干净（就像我们所有人一样:)，这里有 3 个简单的步骤可以帮助您组织您的代码。

::: only-for javascript

### 封装在 IIFE 中

:::

::: only-for react

#### 封装在 IIFE 中

:::

将代码放入模块中，以避免污染全局名称空间。您可以使用 AMD、CommonJS 或任何其他模块模式，但隔离代码的最简单方法是使用普通立即调用函数表达式 (IIFE)。

```js
(Handsontable => {
  const CustomEditor = Handsontable.editors.BaseEditor.prototype.extend();

  // ...编辑器代码的其余部分

})(Handsontable);
```

将`Handsontable`命名空间作为参数传递是可选的（因为它是全局定义的），但最好使用尽可能少的全局对象，以使模块化和依赖关系管理更容易。

::: only-for javascript

### 将编辑器添加到专用命名空间

:::

::: only-for react

#### 将编辑器添加到专用命名空间
:::

IIFE 中包含的代码无法从外部访问，除非故意公开。为了让事情井井有条，请使用`Handsontable.editors.registerEditor`方法将您的编辑器注册到编辑器集合中。这样，您可以在表定义期间使用编辑器，并且其他用户可以轻松访问您的编辑器，以防他们想要扩展它。

```js
(Handsontable => {
  const CustomEditor = Handsontable.editors.BaseEditor.prototype.extend();

  //...编辑器代码的其余部分

  //最后
  Handsontable.editors.registerEditor('custom', CustomEditor);

})(Handsontable);
```

从现在开始，您可以像这样使用`CustomEditor`：

::: only-for javascript

```js
const container = document.querySelector('#container');
const hot = new Handsontable(container, {
  columns: [{
    editor: Handsontable.editors.CustomEditor
  }]
});
```

:::

::: only-for react

```jsx
<HotTable
  columns={[{
    editor: Handsontable.editors.CustomEditor
  }]}
/>
```

:::

扩展您的`CustomEditor`也很容易。

```js
const AnotherEditor = Handsontable.editors.getEditor('custom').prototype.extend();
```

请记住，您选择的名称没有任何限制，但请明智地选择，并且不要覆盖现有的编辑器。尽量保持名称的唯一性。

::: only-for javascript

### 注册一个别名

:::

::: only-for react

#### 注册一个别名

:::

最后一步是在某个别名下注册您的编辑器，以便用户可以轻松引用它，而无需现在实际的类名称。有关详细信息，请参阅注册编辑器。

总而言之，一个准备充分的编辑器应该是这样的：

```js
(Handsontable => {
  const CustomEditor = Handsontable.editors.BaseEditor.prototype.extend();

  //...编辑器代码的其余部分

  //将编辑器放在专用命名空间中
  Handsontable.editors.CustomEditor = CustomEditor;

  //注册别名
  Handsontable.editors.registerEditor('theBestEditor', CustomEditor);

})(Handsontable);
```

从现在开始，您可以像这样使用`CustomEditor`：

::: only-for javascript

```js
const container = document.querySelector('#container')
const hot = new Handsontable(container, {
  columns: [{
    editor: 'theBestEditor'
  }]
});
```

:::

::: only-for react

```jsx
<HotTable
  columns={[{
    editor: 'theBestEditor'
  }]}
/>
```

:::

## 相关键盘快捷键

| Windows                                               | macOS                                                       | Action                                       |  Excel  | Sheets  |
| ----------------------------------------------------- | ----------------------------------------------------------- | -------------------------------------------- | :-----: | :-----: |
| Arrow keys                                            | Arrow keys                                                  | 将光标移动到文本中                           | &check; | &check; |
| Alphanumeric keys                                     | Alphanumeric keys                                           | 将按下的键的值输入到单元格中                 | &check; | &check; |
| <kbd>**Enter**</kbd>                                  | <kbd>**Enter**</kbd>                                        | 完成单元格输入并移至下面的单元格             | &check; | &check; |
| <kbd>**Shift**</kbd>+<kbd>**Enter**</kbd>             | <kbd>**Shift**</kbd>+<kbd>**Enter**</kbd>                   | 完成单元格输入并移动到上面的单元格           | &check; | &check; |
| <kbd>**Tab**</kbd>                                    | <kbd>**Tab**</kbd>                                          | 完成单元格输入并移至下一个单元格<sup>*</sup> | &check; | &check; |
| <kbd>**Shift**</kbd>+<kbd>**Tab**</kbd>               | <kbd>**Shift**</kbd>+<kbd>**Tab**</kbd>                     | 完成单元格输入并移至上一个单元格<sup>*</sup> | &check; | &check; |
| <kbd>**Delete**</kbd>                                 | <kbd>**Delete**</kbd>                                       | 删除光标后一个字符<sup>*</sup>               | &check; | &check; |
| <kbd>**Backspace**</kbd>                              | <kbd>**Backspace**</kbd>                                    | 删除光标前一个字符<sup>*</sup>               | &check; | &check; |
| <kbd>**Home**</kbd>                                   | <kbd>**Home**</kbd>                                         | 将光标移至文本开头<sup>*</sup>               | &check; | &check; |
| <kbd>**End**</kbd>                                    | <kbd>**End**</kbd>                                          | 将光标移至文本末尾<sup>*</sup>               | &check; | &check; |
| <kbd>**Ctrl**</kbd> + Arrow keys                      | <kbd>**Cmd**</kbd> + Arrow keys                             | 将光标移动到文本的开头或结尾                 | &check; | &check; |
| <kbd>**Ctrl**</kbd>+<kbd>**Shift**</kbd> + Arrow keys | <kbd>**Cmd**</kbd>+<kbd>**Shift**</kbd> + Arrow keys        | 将选择范围扩展到文本的开头或结尾             | &check; | &check; |
| <kbd>**Page Up**</kbd>                                | <kbd>**Page Up**</kbd>                                      | 完成单元格输入并向上移动一屏                 | &check; | &check; |
| <kbd>**Page Down**</kbd>                              | <kbd>**Page Down**</kbd>                                    | 完成单元格输入并向下移动一屏                 | &check; | &check; |
| <kbd>**Alt**</kbd>+<kbd>**Enter**</kbd>               | <kbd>**Option**</kbd>+<kbd>**Enter**</kbd>                  | 插入换行符                                   | &cross; | &check; |
| <kbd>**Ctrl**</kbd>+<kbd>**Enter**</kbd>              | <kbd>**Ctrl**</kbd>/<kbd>**Cmd**</kbd>+<kbd>**Enter**</kbd> | 插入换行符                                   | &cross; | &check; |
| <kbd>**Escape**</kbd>                                 | <kbd>**Escape**</kbd>                                       | 取消单元格输入并退出编辑模式                 | &check; | &check; |

<sup>*</sup> 此操作取决于您的[布局方向](@/guides/internationalization/layout-direction/layout-direction.md)。

::: only-for javascript

## 相关文章

### 相关指南
<div class="boxes-list gray">

- [Custom editor in React](@/react/guides/cell-functions/cell-editor/cell-editor.md)
- [Custom editor in Angular](@/guides/integrate-with-angular/angular-custom-editor-example/angular-custom-editor-example.md)
- [Custom editor in Vue 2](@/guides/integrate-with-vue/vue-custom-editor-example/vue-custom-editor-example.md)
- [Custom editor in Vue 3](@/guides/integrate-with-vue3/vue3-custom-editor-example/vue3-custom-editor-example.md)

</div>

### 相关API参考

:::

::: only-for react

## 相关API参考

:::

- APIs:
  - [`BasePlugin`](@/api/basePlugin.md)
- 配置选项:
  - [`editor`](@/api/options.md#editor)
  - [`enterBeginsEditing`](@/api/options.md#enterbeginsediting)
- 核心方法:
  - [`destroyEditor()`](@/api/core.md#destroyeditor)
  - [`getActiveEditor()`](@/api/core.md#getactiveeditor)
  - [`getCellEditor()`](@/api/core.md#getcelleditor)
  - [`getCellMeta()`](@/api/core.md#getcellmeta)
  - [`getCellMetaAtRow()`](@/api/core.md#getcellmetaatrow)
  - [`getCellsMeta()`](@/api/core.md#getcellsmeta)
  - [`setCellMeta()`](@/api/core.md#setcellmeta)
  - [`setCellMetaObject()`](@/api/core.md#setcellmetaobject)
  - [`removeCellMeta()`](@/api/core.md#removecellmeta)
- Hooks:
  - [`beforeBeginEditing`](@/api/hooks.md#beforebeginediting)
  - [`afterBeginEditing`](@/api/hooks.md#afterbeginediting)
  - [`afterGetCellMeta`](@/api/hooks.md#aftergetcellmeta)
  - [`beforeGetCellMeta`](@/api/hooks.md#beforegetcellmeta)
