// https://umijs.org/config/
export default {
  // add for transfer to umi
  base: 'pages/',
  publicPath: './',
  exportStatic: {
    htmlSuffix: true,
  },
  targets: {
    ie: 9,
  },
  chainWebpack(config, { webpack }) {
    return config;
  },
  webpack5: {},
  //workerLoader: {},
  lessLoader: {
    javascriptEnabled: true,
  },
  cssnano: {
    mergeRules: false,
  },
  //fastRefresh: {},
  antd: {},
  dva: {
    hmr: true,
    skipModelValidate: true,
  },
  locale: {
    default: 'zh-CN', // default zh-CN
    baseNavigator: true, // default true, when it is true, will use `navigator.language` overwrite default
  },
  dynamicImport: {
    loading: '/src/components/PageLoading/index',
  },
  //本地(开发)环境下的全局变量
  define: {
    current: 'test',
  },
};
