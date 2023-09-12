/*
 * @Author: Chris
 * @Date: 2023-08-28 14:28:42
 * @LastEditors: Chris
 * @LastEditTime: 2023-09-09 14:55:52
 * @Descripttion: **
 */
import * as React from 'react';
import { Link } from 'react-router-dom';
import type { PiletApi } from 'my-app';
import './colorVar.less' // 全局样式，覆盖antd样式
const Page = React.lazy(() => import('./Page'));

export function setup(app: PiletApi) {
  // 两种方式使用Extension
  // https://docs.piral.io/guidelines/tutorials/09-pilet-best-practices
  const Example = () => <app.Extension name="page2-extension" />;
  app.registerPage('/page', () => <Page Example={Example} />);
  app.showNotification('Hello from Piral!', {
    autoClose: 2000,
  });
  app.registerMenu(() => <Link to="/page">Page1</Link>);
  app.registerTile(() => <div>Welcome to Piral!</div>, {
    initialColumns: 2,
    initialRows: 2,
  });
}
