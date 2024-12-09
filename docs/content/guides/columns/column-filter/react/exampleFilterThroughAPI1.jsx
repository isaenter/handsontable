import { useRef } from 'react';
import { HotTable } from '@handsontable/react-wrapper';
import { registerAllModules } from 'handsontable/registry';
import 'handsontable/styles/handsontable.css';
import 'handsontable/styles/ht-theme-main.css';

// 注册 Handsontable 的模块
registerAllModules();

const ExampleComponent = () => {
  const hotTableComponentRef = useRef(null);
  const filterBelow200 = () => {
    // 获取`Filters`插件，这样你就可以使用它的API
    const filters =
      hotTableComponentRef.current?.hotInstance?.getPlugin('filters');

    // 清除所有现有的过滤器
    filters?.clearConditions();
    // 按`价格`列（索引 2 处的列）过滤数据
    // 仅显示低于 ('lt') $200 的商品
    filters?.addCondition(2, 'lt', [200]);
    filters?.filter();
  };

  const filterAbove200 = () => {
    // 获取`Filters`插件，这样你就可以使用它的API
    const filters =
      hotTableComponentRef.current?.hotInstance?.getPlugin('filters');

    filters?.clearConditions();
    // 仅显示超过 ('gt') $200 的商品
    filters?.addCondition(2, 'gt', [200]);
    filters?.filter();
  };

  const clearAllFilters = () => {
    // 获取`Filters`插件，这样你就可以使用它的API
    const filters =
      hotTableComponentRef.current?.hotInstance?.getPlugin('filters');

    // 清除所有过滤器
    filters?.clearConditions();
    filters?.filter();
  };

  return (
    <>
      <div className="controls">
        <button onClick={filterBelow200}>Show items &lt; $200</button>
        <button onClick={filterAbove200}>Show items &gt; $200</button>
        <button onClick={clearAllFilters}>Clear filters</button>
      </div>
      <HotTable
        ref={hotTableComponentRef}
        data={[
          {
            brand: 'Jetpulse',
            model: 'Racing Socks',
            price: 30,
            sellDate: 'Oct 11, 2023',
            sellTime: '01:23 AM',
            inStock: false,
          },
          {
            brand: 'Gigabox',
            model: 'HL Mountain Frame',
            price: 1890.9,
            sellDate: 'May 3, 2023',
            sellTime: '11:27 AM',
            inStock: false,
          },
          {
            brand: 'Camido',
            model: 'Cycling Cap',
            price: 130.1,
            sellDate: 'Mar 27, 2023',
            sellTime: '03:17 AM',
            inStock: true,
          },
          {
            brand: 'Chatterpoint',
            model: 'Road Tire Tube',
            price: 59,
            sellDate: 'Aug 28, 2023',
            sellTime: '08:01 AM',
            inStock: true,
          },
          {
            brand: 'Eidel',
            model: 'HL Road Tire',
            price: 279.99,
            sellDate: 'Oct 2, 2023',
            sellTime: '01:23 AM',
            inStock: true,
          },
        ]}
        columns={[
          {
            title: 'Brand',
            type: 'text',
            data: 'brand',
          },
          {
            title: 'Model',
            type: 'text',
            data: 'model',
          },
          {
            title: 'Price',
            type: 'numeric',
            data: 'price',
            numericFormat: {
              pattern: '$ 0,0.00',
              culture: 'en-US',
            },
          },
          {
            title: 'Date',
            type: 'date',
            data: 'sellDate',
            dateFormat: 'MMM D, YYYY',
            correctFormat: true,
            className: 'htRight',
          },
          {
            title: 'Time',
            type: 'time',
            data: 'sellTime',
            timeFormat: 'hh:mm A',
            correctFormat: true,
            className: 'htRight',
          },
          {
            title: 'In stock',
            type: 'checkbox',
            data: 'inStock',
            className: 'htCenter',
          },
        ]}
        // 启用过滤
        filters={true}
        // 启用列菜单
        dropdownMenu={true}
        height="auto"
        autoWrapRow={true}
        autoWrapCol={true}
        licenseKey="non-commercial-and-evaluation"
      />
    </>
  );
};

export default ExampleComponent;
