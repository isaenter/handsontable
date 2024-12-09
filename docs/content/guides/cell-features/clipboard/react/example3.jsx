import { useRef } from 'react';
import { HotTable } from '@handsontable/react-wrapper';
import { registerAllModules } from 'handsontable/registry';
import 'handsontable/styles/handsontable.css';
import 'handsontable/styles/ht-theme-main.css';

// 注册 Handsontable 的模块
registerAllModules();

const ExampleComponent = () => {
  const hotRef = useRef(null);
  const copyBtnClickCallback = function () {
    document.execCommand('copy');
  };

  const cutBtnClickCallback = function () {
    document.execCommand('cut');
  };

  const copyBtnMousedownCallback = () => {
    const hot = hotRef.current?.hotInstance;

    hot?.selectCell(1, 1);
  };

  const cutBtnMousedownCallback = () => {
    const hot = hotRef.current?.hotInstance;

    hot?.selectCell(1, 1);
  };

  return (
    <>
      <HotTable
        ref={hotRef}
        rowHeaders={true}
        colHeaders={true}
        data={[
          ['A1', 'B1', 'C1', 'D1', 'E1'],
          ['A2', 'B2', 'C2', 'D2', 'E2'],
          ['A3', 'B3', 'C3', 'D3', 'E3'],
          ['A4', 'B4', 'C4', 'D4', 'E4'],
          ['A5', 'B5', 'C5', 'D5', 'E5'],
        ]}
        outsideClickDeselects={false}
        height="auto"
        autoWrapRow={true}
        autoWrapCol={true}
        licenseKey="non-commercial-and-evaluation"
      />
      <div className="controls">
        <button
          id="copy"
          onMouseDown={() => copyBtnMousedownCallback()}
          onClick={() => copyBtnClickCallback()}
        >
          选择并复制单元格 B2
        </button>
        <button
          id="cut"
          onMouseDown={() => cutBtnMousedownCallback()}
          onClick={() => cutBtnClickCallback()}
        >
          选择并剪切单元格 B2
        </button>
      </div>
    </>
  );
};

export default ExampleComponent;
