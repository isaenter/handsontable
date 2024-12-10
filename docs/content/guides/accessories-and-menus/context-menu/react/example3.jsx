import { HotTable } from '@handsontable/react-wrapper';
import { registerAllModules } from 'handsontable/registry';
import 'handsontable/styles/handsontable.css';
import 'handsontable/styles/ht-theme-main.css';

// 注册 Handsontable 的模块
registerAllModules();

const contextMenuSettings = {
  callback(key, selection, clickEvent) {
    // 所有选项的公共回调
    console.log(key, selection, clickEvent);
  },
  items: {
    row_above: {
      disabled() {
        //`disabled` 可以是布尔值或函数
        //单击第一行时禁用选项
        return this.getSelectedLast()?.[0] === 0; // `this` === hot
      },
    },
    //也可以像这样添加分隔线：
    //'sp1': { 名称: '--------' }
    //并且键必须是唯一的
    sp1: '---------',
    row_below: {
      name: 'Click to add row below',
    },
    about: {
      // 自己的定制选项
      name() {
        // `name` 可以是字符串或函数
        return '<b>Custom option</b>'; // 名称可以包含 HTML
      },
      hidden() {
        //`hidden` 可以是布尔值或函数
        //单击第一列时隐藏选项
        return this.getSelectedLast()?.[1] == 0; // `this` === hot
      },
      callback() {
        // 特定选项的回调
        setTimeout(() => {
          alert('Hello world!'); // 菜单关闭后发出弹窗警报(超时`)
        }, 0);
      },
    },
    colors: {
      // 自己的定制选项
      name: 'Colors...',
      submenu: {
        // 带有项目子菜单的自定义选项
        items: [
          {
            // Key必须采用`parent_key:child_key”格式
            key: 'colors:red',
            name: 'Red',
            callback() {
              setTimeout(() => {
                alert('You clicked red!');
              }, 0);
            },
          },
          { key: 'colors:green', name: 'Green' },
          { key: 'colors:blue', name: 'Blue' },
        ],
      },
    },
    credits: {
      // 自己的自定义属性
      // 右键菜单中的自定义渲染元素
      renderer() {
        const elem = document.createElement('marquee');

        elem.style.cssText = 'background: lightgray;';
        elem.textContent = 'Brought to you by...';

        return elem;
      },
      disableSelection: true,
      isCommand: false,
    },
  },
};

const ExampleComponent = () => {
  return (
    <HotTable
      data={[
        ['', 'Tesla', 'Nissan', 'Toyota', 'Honda', 'Mazda', 'Ford'],
        ['2017', 10, 11, 12, 13, 15, 16],
        ['2018', 10, 11, 12, 13, 15, 16],
        ['2019', 10, 11, 12, 13, 15, 16],
        ['2020', 10, 11, 12, 13, 15, 16],
        ['2021', 10, 11, 12, 13, 15, 16],
      ]}
      rowHeaders={true}
      colHeaders={true}
      autoWrapRow={true}
      autoWrapCol={true}
      licenseKey="non-commercial-and-evaluation"
      height="auto"
      contextMenu={contextMenuSettings}
    />
  );
};

export default ExampleComponent;
