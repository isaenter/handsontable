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
          id: 1,
          name: { first: 'Chris', last: 'Right' },
          password: 'plainTextPassword',
        },
        { id: 2, name: { first: 'John', last: 'Honest' }, password: 'txt' },
        { id: 3, name: { first: 'Greg', last: 'Well' }, password: 'longer' },
      ]}
      colHeaders={['ID', 'First name', 'Last name', 'Password']}
      height="auto"
      autoWrapRow={true}
      autoWrapCol={true}
      licenseKey="non-commercial-and-evaluation"
      columns={[
        { data: 'id' },
        { data: 'name.first' },
        { data: 'name.last' },
        { data: 'password', type: 'password', hashLength: 10 },
      ]}
    />
  );
};

export default ExampleComponent;
