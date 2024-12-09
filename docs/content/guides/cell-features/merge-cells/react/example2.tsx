import { HotTable } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry';
import 'handsontable/styles/handsontable.css';
import 'handsontable/styles/ht-theme-main.css';

// 注册 Handsontable 的模块
registerAllModules();

// 生成带有虚拟数据的多维数组
const data = new Array(50) // 行数
  .fill(null)
  .map((_, row) =>
    new Array(500) // 列数
      .fill(null)
      .map((_, column) => `${row}, ${column}`)
  );

const ExampleComponent = () => {
  return (
    <HotTable
      data={data}
      height={320}
      colWidths={100}
      rowHeaders={true}
      colHeaders={true}
      contextMenu={true}
      mergeCells={{
        virtualized: true,
        cells: [{ row: 1, col: 1, rowspan: 3, colspan: 498 }],
      }}
      viewportColumnRenderingOffset={15}
      viewportColumnRenderingThreshold={5}
      autoWrapRow={true}
      autoWrapCol={true}
      licenseKey="non-commercial-and-evaluation"
    />
  );
};

export default ExampleComponent;
