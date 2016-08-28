# browser-sync 项目模板

`browser-sync` 是一款 `省时的浏览器同步测试工具`，`browsersync-pure-boilerplate` 是一个纯的前端静态资源项目搭载`browser-sync` 使我们快速启动一个简单的前端项目，实现文件实时刷新

- [x] [browser-sync](https://www.browsersync.io/)
- [ ] less
- [ ] babel

## 文件结构说明

```
.
├── README.MD   说明文档
├── bower.json  bower配置，默认安装jquery,es5-shime,normalize.css 
├── bower_components  管理第三方依赖
│   ├── es5-shim
│   ├── jquery
│   └── normalize-css
├── bs-config.js  browser-sync配置文件
├── bundle.js     bundle发布程序
├── copyFile.js   拷贝文件
├── dist          发布生产目录
│   ├── index.html
│   └── src
├── html          前端静态页面模板目录
│   └── index.html
├── node_modules
│   └── browser-sync
├── package.json   
└── src           静态资源目录（js,images...)发布时自动拷贝到 dist 目录下
    ├── css
    ├── fonts
    ├── images
    └── js

```

`browser-sync` 提供了实时刷新并同步多个设备，有利于我们调试移动端项目。

此项目是比较简便的传统前端开发目录架构，不需要复杂的配置。让我们轻松的上手注重开发过程。


^_^，需要更强大的构建功能，请关注 **`配置5小时开发2分钟`** 系列的其他模板。


## 安装browser-sync

```
npm install -g browser-sync
```

<del>
** 项目本地安装 **

```
npm install browser-sync --save-dev
```
</del>

## 安装browsersync-prue-boilerplate

```
git clone https://github.com/tomieric/browsersync-pure-boilerplate.git [projectName]
```

下载完成后

```
cd projectName && npm install 
```

## 启动项目

```
npm start
```

## 发布项目

```
npm run bundle
```