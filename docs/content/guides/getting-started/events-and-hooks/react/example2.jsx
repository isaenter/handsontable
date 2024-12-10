import { useEffect, useRef } from 'react';
import { HotTable } from '@handsontable/react-wrapper';
import { registerAllModules } from 'handsontable/registry';
import 'handsontable/styles/handsontable.css';
import 'handsontable/styles/ht-theme-main.css';

// 注册 Handsontable 的模块
registerAllModules();

const ExampleComponent = () => {
  const hotRef = useRef(null);
  let lastChange = null;

  useEffect(() => {
    const hot = hotRef.current?.hotInstance;

    hot?.updateSettings({
      beforeKeyDown(e) {
        const selection = hot?.getSelected()?.[0];

        if (!selection) return;
        console.log(selection);

        // 退格键或删除
        if (e.keyCode === 8 || e.keyCode === 46) {
          e.stopImmediatePropagation();
          // 删除单元格中的数据，向上移动
          hot.spliceCol(selection[1], selection[0], 1);
          e.preventDefault();
        }
        // ENTER
        else if (e.keyCode === 13) {
          // 如果最后的更改影响了单个单元格并且没有更改其值
          if (
            lastChange &&
            lastChange.length === 1 &&
            lastChange[0][2] == lastChange[0][3]
          ) {
            e.stopImmediatePropagation();
            hot.spliceCol(selection[1], selection[0], 0, '');
            // 添加新单元格
            hot.selectCell(selection[0], selection[1]);
            // 选择新单元格
          }
        }

        lastChange = null;
      },
    });
  });

  return (
    <HotTable
      data={[
        ['Tesla', 2017, 'black', 'black'],
        ['Nissan', 2018, 'blue', 'blue'],
        ['Chrysler', 2019, 'yellow', 'black'],
        ['Volvo', 2020, 'yellow', 'gray'],
      ]}
      colHeaders={true}
      rowHeaders={true}
      height="auto"
      minSpareRows={1}
      beforeChange={(changes, source) => {
        lastChange = changes;
      }}
      autoWrapRow={true}
      autoWrapCol={true}
      licenseKey="non-commercial-and-evaluation"
      ref={hotRef}
    />
  );
};

export default ExampleComponent;
