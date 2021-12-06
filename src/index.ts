import type { IPlugin } from 'build-scripts';
import * as address from 'address';

const defineVariables = {
  'process.env.SERVER_IP': JSON.stringify(address.ip()),
};

const plugin: IPlugin = ({ onGetWebpackConfig }) => {
  onGetWebpackConfig((config) => {
    config.plugin('DefinePlugin').tap(([args]) => {
      return [{ ...args, ...defineVariables }];
    });
  });
};

export default plugin;
