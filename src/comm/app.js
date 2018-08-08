//require配置
var date = new Date();
var publicBase = "public/";
require.config({
    baseUrl: '../../../../',
    paths: {
        jquery: publicBase + 'jquery/jquery-1.12.4.min',
        bootstrap: publicBase + 'bootstarp/bootstrap.bundle.min',
        viewerjs: publicBase + 'viewer/viewer',
        juqeryViewer: publicBase + 'viewer/jquery-viewer',
    },
    //1. deps 表示依赖 的 js 如 boostrap 需要依赖 jquery
    //2. exports 表示当前模块的返回值
    shim: {
        bootstrap: {
            deps: ['jquery']
        },
        viewerjs: {   // 坑： 因为 jquery-viewer 需要依赖 viewerjs  ，所以 viewer.js 的名称必须 viewerjs，否则报错
            deps: ['jquery'],
            exports: 'viewerjs'
        },
        juqeryViewer: {
            deps: ['jquery', 'viewerjs'],
            exports: 'juqeryViewer'
        }
    }
});
// 初始化加载的模块
define([
        'jquery',
        'bootstrap',
        'viewerjs',
        'juqeryViewer'
    ]
);
console.log('requirejs 加载成功！'+date);