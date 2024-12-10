import { HotTable } from '@handsontable/react-wrapper';
import { registerAllModules } from 'handsontable/registry';
import 'handsontable/styles/handsontable.css';
import 'handsontable/styles/ht-theme-main.css';

// 注册 Handsontable 的模块
registerAllModules();

const ExampleComponent = () => {
  //  使用虚拟数据生成多维数组
  const generateData = (rows = 3, columns = 7, additionalRows = true) => {
    let counter = 0;
    const array2d = [...new Array(rows)].map((_) =>
      [...new Array(columns)].map((_) => counter++)
    );

    if (additionalRows) {
      array2d.push([]);
      array2d.push([]);
    }

    return array2d;
  };

  return (
    <HotTable
      data={generateData()}
      colHeaders={true}
      rowHeaders={true}
      height="auto"
      contextMenu={true}
      manualRowMove={true}
      bindRowsWithHeaders="strict"
      autoWrapRow={true}
      autoWrapCol={true}
      licenseKey="non-commercial-and-evaluation"
    />
  );
};

export default ExampleComponent;
