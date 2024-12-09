import { HotTable } from '@handsontable/react-wrapper';
import { registerAllModules } from 'handsontable/registry';
import 'handsontable/styles/handsontable.css';
import 'handsontable/styles/ht-theme-main.css';

// 注册 Handsontable 的模块
registerAllModules();

const ExampleComponent = () => {
  // 从`品牌`、`价格`和`日期`列中删除列菜单按钮
  const removeColumnMenuButton = (col, TH) => {
    if (col > 1) {
      const button = TH.querySelector('.changeType');

      if (!button) {
        return;
      }

      button.parentElement.removeChild(button);
    }
  };

  return (
    <HotTable
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
      // 对所有列启用过滤
      filters={true}
      // 启用所有列的列菜单
      // 但仅显示`按值过滤`列表以及`确定`和`取消`按钮
      dropdownMenu={{
        items: {
          filter_by_value: {
            // 隐藏除第一列之外的所有列中的`按值过滤`列表
            hidden() {
              return this.getSelectedRangeLast().to.col > 0;
            },
          },
          filter_action_bar: {
            // 隐藏除第一列之外的所有列中的`确定`和`取消`按钮
            hidden() {
              return this.getSelectedRangeLast().to.col > 0;
            },
          },
          clear_column: {
            // 隐藏第一列中的`清除列`菜单项
            hidden() {
              return this.getSelectedRangeLast().to.col < 1;
            },
          },
        },
      }}
      // `afterGetColHeader()` 是一个 Handsontable 钩子
      // 它在 Handsontable 将有关列标题的信息附加到表标题后触发
      afterGetColHeader={removeColumnMenuButton}
      height="auto"
      autoWrapRow={true}
      autoWrapCol={true}
      licenseKey="non-commercial-and-evaluation"
    />
  );
};

export default ExampleComponent;
