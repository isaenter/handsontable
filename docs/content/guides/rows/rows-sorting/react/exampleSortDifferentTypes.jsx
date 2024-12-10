import { HotTable } from '@handsontable/react-wrapper';
import { registerAllModules } from 'handsontable/registry';
import 'handsontable/styles/handsontable.css';
import 'handsontable/styles/ht-theme-main.css';

// 注册 Handsontable 的模块
registerAllModules();

const ExampleComponent = () => {
  return (
    <HotTable
      data={[
        {
          model: 'Racing Socks',
          size: 'S',
          price: 30,
          sellDate: 'Oct 11, 2023',
          sellTime: '01:23 AM',
          inStock: false,
          color: 'Black',
          email: '8576@all.xyz',
        },
        {
          model: 'HL Mountain Shirt',
          size: 'XS',
          price: 1890.9,
          sellDate: 'May 3, 2023',
          sellTime: '11:27 AM',
          inStock: false,
          color: 'White',
          email: 'tayn@all.xyz',
        },
        {
          model: 'Cycling Cap',
          size: 'L',
          price: 130.1,
          sellDate: 'Mar 27, 2023',
          sellTime: '03:17 AM',
          inStock: true,
          color: 'Green',
          email: '6lights@far.com',
        },
        {
          model: 'Ski Jacket',
          size: 'M',
          price: 59,
          sellDate: 'Aug 28, 2023',
          sellTime: '08:01 AM',
          inStock: true,
          color: 'Blue',
          email: 'raj@fq1my2c.com',
        },
        {
          model: 'HL Goggles',
          size: 'XL',
          price: 279.99,
          sellDate: 'Oct 2, 2023',
          sellTime: '13:23 AM',
          inStock: true,
          color: 'Black',
          email: 'da@pdc.ga',
        },
      ]}
      columns={[
        {
          title: 'Model<br>(text)',
          // 设置`模型`列的类型
          type: 'text',
          data: 'model',
        },
        {
          title: 'Price<br>(numeric)',
          // 设置`价格`列的类型
          type: 'numeric',
          data: 'price',
          numericFormat: {
            pattern: '$ 0,0.00',
            culture: 'en-US',
          },
        },
        {
          title: 'Sold on<br>(date)',
          // 设置`日期`列的类型
          type: 'date',
          data: 'sellDate',
          dateFormat: 'MMM D, YYYY',
          correctFormat: true,
          className: 'htRight',
        },
        {
          title: 'Time<br>(time)',
          // 设置`时间`列的类型
          type: 'time',
          data: 'sellTime',
          timeFormat: 'hh:mm A',
          correctFormat: true,
          className: 'htRight',
        },
        {
          title: 'In stock<br>(checkbox)',
          // 设置`库存`列的类型
          type: 'checkbox',
          data: 'inStock',
          className: 'htCenter',
        },
        {
          title: 'Size<br>(dropdown)',
          // 设置`大小`列的类型
          type: 'dropdown',
          data: 'size',
          source: ['XS', 'S', 'M', 'L', 'XL'],
          className: 'htCenter',
        },
        {
          title: 'Color<br>(autocomplete)',
          // 设置`大小`列的类型
          type: 'autocomplete',
          data: 'color',
          source: ['White', 'Black', 'Yellow', 'Blue', 'Green'],
          className: 'htCenter',
        },
        {
          title: 'Email<br>(password)',
          // 设置`电子邮件`列的类型
          type: 'password',
          data: 'email',
        },
      ]}
      columnSorting={true}
      height="auto"
      stretchH="all"
      autoWrapRow={true}
      autoWrapCol={true}
      licenseKey="non-commercial-and-evaluation"
    />
  );
};

export default ExampleComponent;
