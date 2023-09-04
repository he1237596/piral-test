import * as React from 'react';
import { Link } from 'react-router-dom';
import type { PiletApi } from 'my-app';

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
