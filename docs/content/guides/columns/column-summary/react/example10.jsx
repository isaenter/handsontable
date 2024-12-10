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
      data={[[0, 1, 2], ['3c', '4b', 5], [], []]}
      colHeaders={true}
      rowHeaders={true}
      columnSummary={[
        {
          type: 'sum',
          destinationRow: 0,
          destinationColumn: 0,
          reversedRowCoords: true,
          // 强制此列摘要将非数字值视为数字值
          forceNumeric: true,
        },
        {
          type: 'sum',
          destinationRow: 0,
          destinationColumn: 1,
          reversedRowCoords: true,
          // 强制此列摘要将非数字值视为数字值
          forceNumeric: true,
        },
      ]}
      height="auto"
    />
  );
};

export default ExampleComponent;
