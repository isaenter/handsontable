import { HotTable } from '@handsontable/react-wrapper';
import { registerAllModules } from 'handsontable/registry';
import 'handsontable/styles/handsontable.css';
import 'handsontable/styles/ht-theme-main.css';

// 注册 Handsontable 的模块
registerAllModules();

const ExampleComponent = () => {
  //  生成具有虚拟数值数据的二维数组
  const generateData = (rows = 3, columns = 7, additionalRows = true) => {
    let counter = 0;
    const array2d = [...new Array(rows)].map((_) =>
      [...new Array(columns)].map((_) => counter++)
    );

    // 在底部添加一个空行，以显示列摘要
    if (additionalRows) {
      array2d.push([]);
    }

    return array2d;
  };

  return (
    <HotTable
      autoWrapRow={true}
      autoWrapCol={true}
      licenseKey="non-commercial-and-evaluation"
      data={generateData(5, 5, true)}
      height="auto"
      rowHeaders={true}
      colHeaders={['sum', 'min', 'max', 'count', 'average']}
      columnSummary={function () {
        const configArray = [];
        const summaryTypes = ['sum', 'min', 'max', 'count', 'average'];

        for (let i = 0; i < this.hot.countCols(); i++) {
          // 迭代可见列
          // 对于每个可见列，添加带有配置的列摘要
          configArray.push({
            sourceColumn: i,
            type: summaryTypes[i],
            // 向后计数行坐标
            reversedRowCoords: true,
            // 在底行显示列摘要（因为行坐标反转）
            destinationRow: 0,
            destinationColumn: i,
            forceNumeric: true,
          });
        }

        return configArray;
      }}
    />
  );
};

export default ExampleComponent;
