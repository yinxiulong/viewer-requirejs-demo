(function () {
    var data = {
        meta: [
            "<meta name=\'renderer\' content=\'webkit\'/>",
            "<meta name=\'viewport\' content=\'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no\'>",
            "<meta name=\'mobile-web-app-capable\' content=\'yes\'>",
            "<meta name=\'apple-mobile-web-app-capable\' content=\'yes\'>",
            "<meta name=\'apple-mobile-web-app-status-bar-style\' content=\'black-translucent\'>"
        ],
        css: [
            "<link rel=\'stylesheet\' href='../../../../public/bootstarp/css/bootstrap.min.css\'/>",
            "<link rel=\'stylesheet\' href='../../../../public/viewer/css/viewer.css\'/>"
        ],
        elements: [
            "<div id=\'_loading\' class='csshub-loading-layer'><div class=\'csshub-loading csshub-loading-box\'><div></div><div></div><div></div><div></div><div></div></div></div>"
        ]
    }

    var htmlStr = data.meta.concat(data.css, data.elements).join("");
    document.writeln(htmlStr);
}());