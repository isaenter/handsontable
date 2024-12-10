import { useRef } from 'react';
import { HotTable } from '@handsontable/react-wrapper';
import { registerAllModules } from 'handsontable/registry';
import { textRenderer } from 'handsontable/renderers/textRenderer';
import 'handsontable/styles/handsontable.css';
import 'handsontable/styles/ht-theme-main.css';

// 注册 Handsontable 的模块
registerAllModules();

const ExampleComponent = () => {
  const hotRef = useRef(null);
  const templateValues = ['one', 'two', 'three'];
  const data = [
    ['', 'Tesla', 'Nissan', 'Toyota', 'Honda'],
    ['2017', 10, 11, 12, 13],
    ['2018', 20, 11, 14, 13],
    ['2019', 30, 15, 12, 13],
  ];

  function isEmptyRow(instance, row) {
    const rowData = instance.getDataAtRow(row);

    for (let i = 0, ilen = rowData.length; i < ilen; i++) {
      if (rowData[i] !== null) {
        return false;
      }
    }

    return true;
  }

  function defaultValueRenderer(instance, td, row, col) {
    const args = arguments;

    if (args[5] === null && isEmptyRow(instance, row)) {
      args[5] = templateValues[col];
      td.style.color = '#999';
    } else {
      td.style.color = '';
    }

    textRenderer.apply(this, args);
  }

  return (
    <>
      <HotTable
        ref={hotRef}
        data={data}
        startRows={8}
        startCols={5}
        minSpareRows={1}
        contextMenu={true}
        height="auto"
        autoWrapRow={true}
        autoWrapCol={true}
        licenseKey="non-commercial-and-evaluation"
        cells={function (row, col, prop) {
          const cellProperties = {};

          cellProperties.renderer = defaultValueRenderer;

          return cellProperties;
        }}
        beforeChange={function (changes) {
          const instance = hotRef.current?.hotInstance;
          const columns = instance?.countCols() || 0;
          const rowColumnSeen = {};
          const rowsToFill = {};

          for (let i = 0; i < changes.length; i++) {
            const cellChanges = changes;

            // 如果 oldVal 为空
            if (cellChanges[i][2] === null && cellChanges[i][3] !== null) {
              if (isEmptyRow(instance, cellChanges[i][0])) {
                // 将此行/列组合添加到缓存中，这样它就不会被模板覆盖
                rowColumnSeen[
                  `${cellChanges[i][0]}/${cellChanges[i][1]}`
                ] = true;
                rowsToFill[cellChanges[i][0]] = true;
              }
            }
          }

          for (const r in rowsToFill) {
            if (rowsToFill.hasOwnProperty(r)) {
              for (let c = 0; c < columns; c++) {
                // 如果此更改集中用户未提供，则从模板中获取值
                if (!rowColumnSeen[`${r}/${c}`]) {
                  changes.push([r, c, null, templateValues[c]]);
                }
              }
            }
          }
        }}
      />
    </>
  );
};

export default ExampleComponent;
