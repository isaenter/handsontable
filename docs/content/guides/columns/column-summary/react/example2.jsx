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
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        // 添加一个空行
        [null],
      ]}
      colHeaders={true}
      rowHeaders={true}
      columnSummary={[
        {
          sourceColumn: 0,
          type: 'sum',
          // 对于此列摘要，向后计算行坐标
          reversedRowCoords: true,
          // 现在，要始终在底行显示此列摘要，
          // 将 `destinationRow` 设置为 `0` （即最后可能的行）
          destinationRow: 0,
          destinationColumn: 0,
        },
        {
          sourceColumn: 1,
          type: 'min',
          // 对于此列摘要，向后计算行坐标
          reversedRowCoords: true,
          // 现在，要始终在底行显示此列摘要，
          // 将 `destinationRow` 设置为 `0` （即最后可能的行）
          destinationRow: 0,
          destinationColumn: 1,
        },
      ]}
      height="auto"
    />
  );
};

export default ExampleComponent;
