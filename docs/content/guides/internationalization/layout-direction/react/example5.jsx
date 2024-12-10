import { HotTable } from '@handsontable/react-wrapper';
import { registerAllModules } from 'handsontable/registry';
import 'handsontable/styles/handsontable.css';
import 'handsontable/styles/ht-theme-main.css';

// 注册 Handsontable 的模块
registerAllModules();

const ExampleComponent = () => {
  return (
    <HotTable
      autoWrapRow={true}
      autoWrapCol={true}
      licenseKey="non-commercial-and-evaluation"
      data={[
        ['', 'Tesla', 'Volvo', 'Toyota', 'Ford'],
        ['2019', 10, 11, 12, 13],
        ['2020', 20, 11, 14, 13],
        ['2021', 30, 15, 12, 13],
      ]}
      colHeaders={true}
      rowHeaders={true}
      height="auto"
      layoutDirection="rtl"
      columns={[
        {},
        // 将此列的文本左对齐
        { className: 'htLeft' },
        // 将此列的文本居中对齐
        { className: 'htCenter' },
        // 将此列的文本右对齐
        { className: 'htRight' },
        {},
      ]}
    />
  );
};

export default ExampleComponent;
