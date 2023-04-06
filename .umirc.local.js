// https://umijs.org/config/
export default {
  // 在本地开发模式下，该文件会覆盖.umirc.js的部分配置
  exportStatic: {
    htmlSuffix: true /**静态化输出,配置该项后，每个路由都有自己的静态html页面 */,
    dynamicRoot: false /**部署到任意目录 */,
  },
};
