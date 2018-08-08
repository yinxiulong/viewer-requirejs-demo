/**
 * Create by YINXIULONG ON 2018/8/6
 *
 *['viewer','jqueryViewer'
 */
requirejs(['../comm/app.js'], function () {
    require([], function () {
        $(function () {
            'use strict';
            var console = window.console || { log: function () {} };
            var $images = $('.docs-pictures');
            var $toggles = $('.docs-toggles');
            var $buttons = $('.docs-buttons');
            var options = {
                // inline: true,
                // url: 'test',
                ready: function (e) {
                    console.log(e.type);
                },
                show: function (e) {
                    console.log(e.type);
                },
                shown: function (e) {
                    console.log(e.type);
                },
                hide: function (e) {
                    console.log(e.type);
                },
                hidden: function (e) {
                    console.log(e.type);
                },
                view: function (e) {
                    console.log(e.type);
                },
                viewed: function (e) {
                    console.log(e.type);
                }
            };
            function toggleButtons(mode) {
                if (/modal|inline|none/.test(mode)) {
                    // $buttons.find('button[data-enable]').prop('disabled', true).filter('[data-enable*="' + mode + '"]').prop('disabled', false);
                }
            }
            $images.on({
                ready:  function (e) {
                    console.log(e.type);
                },
                show:  function (e) {
                    console.log(e.type);
                },
                shown:  function (e) {
                    console.log(e.type);
                },
                hide:  function (e) {
                    console.log(e.type);
                },
                hidden: function (e) {
                    console.log(e.type);
                },
                view:  function (e) {
                    console.log(e.type);
                },
                viewed: function (e) {
                    console.log(e.type);
                }
            }).viewer( );
            toggleButtons(options.inline ? 'inline' : 'modal');
            /**
             * 优化日期：2018/8/6
             * 功能描述：选项区 按钮事件绑定
             */
            $toggles.on('change', 'input', function () {
                var $input = $(this);
                var name = $input.attr('name');

                options[name] = name === 'inline' ? $input.data('value') : $input.prop('checked');
                $images.viewer('destroy').viewer(options);
                toggleButtons(options.inline ? 'inline' : 'modal');
            });
            // 测试内联
            $("#test").bind('click', function () {
                var name = $(this).attr('name');

                options.inline =true;
                // options.url = 'body';
                // options.exit = 'exit';
                let  $body= parent.$('#xxx');

                $($body).viewer('destroy').viewer(options);
            });
            /**
             * 优化日期：2018/8/6
             * 功能描述：按钮事件绑定
             */
            $buttons.on('click', 'button', function () {
                var data = $(this).data();
                var args = data.arguments || [];
                if (data.method) {
                    if (data.target) {
                        $images.viewer(data.method, $(data.target).val());
                    } else {
                        $images.viewer(data.method, args[0], args[1]);
                    }
                    switch (data.method) {
                        case 'scaleX':
                        case 'scaleY':
                            args[0] = -args[0];
                            break;
                        case 'destroy':
                            toggleButtons('none');
                            break;
                    }
                }
            });
            // $('[data-toggle="tooltip"]').tooltip();
        });
    });
});
