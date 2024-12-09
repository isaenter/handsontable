import { HotTable } from '@handsontable/react-wrapper';
import { registerAllModules } from 'handsontable/registry';
import 'handsontable/styles/handsontable.css';
import 'handsontable/styles/ht-theme-main.css';

// 注册 Handsontable 的模块
registerAllModules();

// 生成带有虚拟数据的多维数组
const data = new Array(200) // 行数
  .fill(0)
  .map((_, row) =>
    new Array(20) // 列数
      .fill(0)
      .map((_, column) => `${row}, ${column}`)
  );

const ExampleComponent = () => {
  return (
    <HotTable
      data={data}
      width="100%"
      height={320}
      rowHeaders={true}
      colHeaders={true}
      colWidths={100}
      manualRowMove={true}
      autoWrapRow={true}
      autoWrapCol={true}
      licenseKey="non-commercial-and-evaluation"
    />
  );
};

export default ExampleComponent;
