import { useRef } from 'react';
import { HotTable } from '@handsontable/react-wrapper';
import { registerAllModules } from 'handsontable/registry';
import 'handsontable/styles/handsontable.css';
import 'handsontable/styles/ht-theme-main.css';

// 注册 Handsontable 的模块
registerAllModules();

const ExampleComponent = () => {
  const data = [
    ['A1', 'B1', 'C1', 'D1'],
    ['A2', 'B2', 'C2', 'D2'],
    ['A3', 'B3', 'C3', 'D3'],
    ['A4', 'B4', 'C4', 'D4'],
  ];

  const hotTableComponentRef = useRef(null);
  const selectCell = () => {
    // Handsontable 实例存储在包装器组件的`hotInstance`属性下。
    hotTableComponentRef.current?.hotInstance?.selectCell(1, 1);
  };

  return (
    <>
      <div className="controls">
        <button onClick={selectCell}>选择单元格 B2</button>
      </div>
      <HotTable
        ref={hotTableComponentRef}
        data={data}
        colHeaders={true}
        height="auto"
        autoWrapRow={true}
        autoWrapCol={true}
        licenseKey="non-commercial-and-evaluation"
      />
    </>
  );
};

export default ExampleComponent;
