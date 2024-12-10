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

    if (additionalRows) {
      array2d.push([]);
      array2d.push([]);
    }

    return array2d;
  };

  return (
    <HotTable
      autoWrapRow={true}
      autoWrapCol={true}
      licenseKey="non-commercial-and-evaluation"
      data={generateData(5, 7)}
      height="auto"
      colHeaders={true}
      rowHeaders={true}
      columnSummary={[
        // 配置列摘要
        {
          // 将`类型`选项设置为`自定义`
          type: 'custom',
          destinationRow: 0,
          destinationColumn: 5,
          reversedRowCoords: true,
          // 添加您的自定义摘要函数
          customFunction(endpoint) {
            // 实现一个计算列中偶数值数量的函数
            const hotInstance = this.hot;
            let evenCount = 0;
            // 辅助函数
            const checkRange = (rowRange) => {
              let i = rowRange[1] || rowRange[0];
              let counter = 0;

              do {
                if (
                  parseInt(
                    hotInstance.getDataAtCell(i, endpoint.sourceColumn),
                    10
                  ) %
                    2 ===
                  0
                ) {
                  counter++;
                }

                i--;
              } while (i >= rowRange[0]);

              return counter;
            };

            // 遍历所有声明的范围
            for (const r in endpoint.ranges) {
              if (endpoint.ranges.hasOwnProperty(r)) {
                evenCount += checkRange(endpoint.ranges[r]);
              }
            }

            return evenCount;
          },
          forceNumeric: true,
        },
      ]}
    />
  );
};

export default ExampleComponent;
