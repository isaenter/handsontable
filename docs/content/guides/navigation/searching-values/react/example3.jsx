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
    ['Volvo', 2020, 'white', 'gray'],
  ];

  const searchFieldKeyupCallback = useCallback(
    (event) => {
      const hot = hotRef.current?.hotInstance;
      const search = hot?.getPlugin('search');
      // 使用`Search`的`query()`方法
      const queryResult = search?.query(event.currentTarget.value);

      console.log(queryResult);
      hot?.render();
    },
    [hotRef.current]
  );

  //  定义您的自定义查询方法
  function onlyExactMatch(queryStr, value) {
    return queryStr.toString() === value.toString();
  }

  return (
    <>
      <div className="example-controls-container">
        <div className="controls">
          <input
            id="search_field3"
            type="search"
            placeholder="Search"
            onKeyUp={(...args) => searchFieldKeyupCallback(...args)}
          />
        </div>
      </div>
      <HotTable
        ref={hotRef}
        data={data}
        colHeaders={true}
        // 启用`搜索`插件
        search={{
          // 添加您的自定义查询方法
          queryMethod: onlyExactMatch,
        }}
        height="auto"
        autoWrapRow={true}
        autoWrapCol={true}
        licenseKey="non-commercial-and-evaluation"
      />
    </>
  );
};

export default ExampleComponent;
