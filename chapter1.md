# chapter1 start here

> Node.js是一个免费、开源、跨平台的 JavaScript 运行时环境，它让开发人员能够创建服务器、Web 应用、命令行工具和脚本。

* node.js与普通js的区别:
  * Node在服务器上运行，而不是在浏览器上（后端而不是前端）
  * 控制台(console)是终端窗口(terminal)
  * 全局对象而不是window对象
    > global object instead of window object
  * 拥有Common Core modules
  * Node.js 同时支持 CommonJS 和 ES 模块系统（自 Node.js v12 起）而在浏览器中，我们开始看到 ES 模块标准正在实现。
* 模块导入语法：

    ```js
    const os = require('os')
    ```

* 模块导出语法

    ```js
    const add = (a, b) => a + b;
    module.exports = { add };
    //the codes above equals to codes below
    exports.add = (a, b) => a + b;
    ```
