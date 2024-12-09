import { FC } from 'react';
import { HotTable } from '@handsontable/react-wrapper';
import { registerAllModules } from 'handsontable/registry';
import 'handsontable/styles/handsontable.css';
import 'handsontable/styles/ht-theme-main.css';

// 注册 Handsontable 的模块
registerAllModules();

const ExampleComponent: FC = () => (
  <HotTable
    autoWrapRow={true}
    autoWrapCol={true}
    height="auto"
    licenseKey="non-commercial-and-evaluation"
  />
);

export default ExampleComponent;
