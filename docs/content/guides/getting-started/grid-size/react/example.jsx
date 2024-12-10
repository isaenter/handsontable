import { useRef, useState, useEffect } from 'react';
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
  const [isContainerExpanded, setIsContainerExpanded] = useState(false);
  const hotRef = useRef(null);
  const triggerBtnClickCallback = () => {
    setIsContainerExpanded(!isContainerExpanded);
  };

  useEffect(() => {
    // 模拟 React 生命周期之外的布局变化
    // @ts-ignore
    document.getElementById('exampleParent').style.height = isContainerExpanded
      ? '410px'
      : '157px';
    hotRef.current?.hotInstance?.refreshDimensions();
  });

  return (
    <>
      <div className="controls">
        <button
          id="triggerBtn"
          className="button button--primary"
          onClick={() => triggerBtnClickCallback()}
        >
          {isContainerExpanded ? '折叠容器' : '展开容器'}
        </button>
      </div>
      <div id="exampleParent" className="exampleParent">
        <HotTable
          data={data}
          rowHeaders={true}
          colHeaders={true}
          width="100%"
          height="100%"
          rowHeights={23}
          colWidths={100}
          autoWrapRow={true}
          autoWrapCol={true}
          licenseKey="non-commercial-and-evaluation"
          ref={hotRef}
        />
      </div>
    </>
  );
};

export default ExampleComponent;
