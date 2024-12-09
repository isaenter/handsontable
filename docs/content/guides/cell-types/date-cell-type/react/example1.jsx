import { HotTable } from '@handsontable/react-wrapper';
import { registerAllModules } from 'handsontable/registry';
import 'handsontable/styles/handsontable.css';
import 'handsontable/styles/ht-theme-main.css';

// 注册 Handsontable 的模块
registerAllModules();

const ExampleComponent = () => {
  return (
    <HotTable
      autoWrapRow={true}
      autoWrapCol={true}
      licenseKey="non-commercial-and-evaluation"
      data={[
        ['Mercedes', 'A 160', '01/14/2021', 6999.95],
        ['Citroen', 'C4 Coupe', '12/01/2022', 8330],
        ['Audi', 'A4 Avant', '11/19/2023', 33900],
        ['Opel', 'Astra', '02/02/2021', 7000],
        ['BMW', '320i Coupe', '07/24/2022', 30500],
      ]}
      colHeaders={['Car', 'Model', 'Registration date', 'Price']}
      height="auto"
      columns={[
        {
          type: 'text',
        },
        {
          // 第二个单元格是简单文本，这里没有特殊选项
        },
        {
          type: 'date',
          dateFormat: 'MM/DD/YYYY',
          correctFormat: true,
          defaultDate: '01/01/1900',
          // datePicker 附加选项
          // （参见https://github.com/dbushell/Pikaday#configuration）
          datePickerConfig: {
            // 一周的第一天（0：星期日，1：星期一等）
            firstDay: 0,
            showWeekNumber: true,
            disableDayFn(date) {
              // 周日、周六禁用
              return date.getDay() === 0 || date.getDay() === 6;
            },
          },
        },
        {
          type: 'numeric',
          numericFormat: {
            pattern: '$ 0,0.00',
          },
        },
      ]}
    />
  );
};

export default ExampleComponent;
