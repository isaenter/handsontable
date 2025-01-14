import { HotTable } from '@handsontable/react-wrapper';
import { registerAllModules } from 'handsontable/registry';
import 'handsontable/styles/handsontable.css';
import 'handsontable/styles/ht-theme-main.css';

// 注册 Handsontable 的模块
registerAllModules();

// 生成带有虚拟数据的多维数组
const data = new Array(100) // 行数
  .fill(null)
  .map((_, row) =>
    new Array(50) // 列数
      .fill(null)
      .map((_, column) => `${row}, ${column}`)
  );

const ExampleComponent = () => {
  return (
    <HotTable
      data={data}
      height={320}
      colWidths={50}
      rowHeaders={true}
      colHeaders={true}
      contextMenu={true}
      mergeCells={[
        { row: 1, col: 1, rowspan: 3, colspan: 3 },
        { row: 3, col: 4, rowspan: 2, colspan: 2 },
        { row: 5, col: 6, rowspan: 3, colspan: 3 },
      ]}
      autoWrapRow={true}
      autoWrapCol={true}
      licenseKey="non-commercial-and-evaluation"
    />
  );
};

export default ExampleComponent;
