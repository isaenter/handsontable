import { useRef, useCallback } from 'react';
import { HotTable } from '@handsontable/react-wrapper';
import { registerAllModules } from 'handsontable/registry';
import 'handsontable/styles/handsontable.css';
import 'handsontable/styles/ht-theme-main.css';

// 注册 Handsontable 的模块
registerAllModules();

const ExampleComponent = () => {
  const hotRef = useRef(null);
  const data = [
    ['Tesla', 2017, 'black', 'black'],
    ['Nissan', 2018, 'blue', 'blue'],
    ['Chrysler', 2019, 'yellow', 'black'],
    ['Volvo', 2020, 'yellow', 'gray'],
  ];

  const searchFieldKeyupCallback = useCallback(
    (event) => {
      const hot = hotRef.current?.hotInstance;
      // 获取`Search`插件的实例
      const search = hot?.getPlugin('search');
      // 使用`Search`插件的`query()`方法
      const queryResult = search?.query(event.currentTarget.value);

      console.log(queryResult);
      hot?.render();
    },
    [hotRef.current]
  );

  return (
    <>
      <div className="example-controls-container">
        <div className="controls">
          <input
            id="search_field"
            type="search"
            placeholder="Search"
            onKeyUp={(event) => searchFieldKeyupCallback(event)}
          />
        </div>
      </div>
      <HotTable
        ref={hotRef}
        data={data}
        colHeaders={true}
        search={true}
        height="auto"
        autoWrapRow={true}
        autoWrapCol={true}
        licenseKey="non-commercial-and-evaluation"
      />
    </>
  );
};

export default ExampleComponent;
