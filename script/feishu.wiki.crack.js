// ==UserScript==
// @name         放开飞书文档的复制和右键屏蔽
// @namespace    https://github.com/cyao2q/files
// @version      0.5
// @description  让飞书文档不受权限限制，可以复制任意内容，可以打开右键菜单(复制下载图片)
// @author       漠星曜
// @license      GPL License
// @downloadURL  https://cyao2q.github.io/files/script/feishu.wiki.crack.js
// @namespace    http://tampermonkey.net/
// @match        *://*.feishu.cn/*
// @icon         https://sf3-scmcdn2-cn.feishucdn.com/ccm/pc/web/resource/bear/src/common/assets/favicons/icon_file_doc_nor-32x32.8cb0fef16653221e74b9.png
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    console.log('已放开飞书文档的复制和右键屏蔽！！！！');
    document.addEventListener('DOMContentLoaded', function () {
        const rawAddEventListener = document.addEventListener;
        document.addEventListener = function (type, listener, options) {
            if(type === 'copy') {
                rawAddEventListener.call(
                    document,
                    type,
                    event => {
                        return null;
                    },
                    options,
                );
                return
            }
            rawAddEventListener.call(
                document,
                type,
                listener,
                options,
            );
        };

        const bodyAddEventListener = document.body.addEventListener;
        document.body.addEventListener = function (type, listener, options) {
            bodyAddEventListener.call(
                document.body,
                type,
                event => {
                    if (type === 'contextmenu') {
                        return true;
                    }
                    return listener(event);
                },
                options,
            );
        };
    });
})();