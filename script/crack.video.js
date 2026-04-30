// ==UserScript==
// @name         全网VIP视频破解去广告
// @namespace    https://github.com/cyao2q/files
// @version      1.0.1
// @description  一键破解[优酷|腾讯|乐视|爱奇艺]等会员视频
// @author       漠星曜
// @icon         data:image/png;base64,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
// @match        *://*.youku.com/*
// @match        *://*.iqiyi.com/*
// @match        *://*.iq.com/*
// @match        *://*.le.com/*
// @match        *://v.qq.com/*
// @match        *://m.v.qq.com/*
// @match        *://3g.v.qq.com/*
// @match        *://*.tudou.com/*
// @match        *://*.mgtv.com/*
// @match        *://tv.sohu.com/*
// @match        *://*.1905.com/*
// @match        *://film.sohu.com/*
// @match        *://*.bilibili.com/*
// @match        *://*.pptv.com/*
// @exclude      *://*.bilibili.com/appeal*
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @grant        GM_download
// @grant        GM_xmlhttpRequest
// @grant        GM_setClipboard
// @connect      api.typechrome.com
// @connect      gitlab.com
// @downloadURL  https://cyao2q.github.io/files/script/crack.video.js
// ==/UserScript==

(function () {
    'use strict';

    var domHead = document.getElementsByTagName('head')[0];

    var domStyle = document.createElement('style');

    domStyle.type = 'text/css';

    domStyle.rel = 'stylesheet';

    var Config = {

        couponUrl: window.location.href,

        couponHost: window.location.host,

        webUrl: 'http://music.liuzhijin.cn/',

        iconVipTop: 360,

        iconVipPosition: 'left',

        iconVipWidth: 40,

        couponTimerNum: 100,

        couponWaitTime: 100,

        iconWaitTime: 100,

        iconVipOpacity: 100,

        selectedLeft: 'selected',

        selectedRight: '',

        videoPlayLineAdd: GM_getValue('videoPlayLineAdd', 0),

    }

    var {
        couponUrl,
        couponHost,
        webUrl,
        iconVipTop,
        iconVipPosition,
        iconVipWidth,
        iconVipOpacity,
        couponTimerNum,
        couponWaitTime,
        iconWaitTime,
        selectedLeft,
        selectedRight,
        videoPlayLineAdd,
    } = Config;

    var jxVideo = [

        {funcName: "playVideo", match: /https?:\/\/v\.qq\.com/, name: 'qqPC'},
        {funcName: "playVideo", match: /https?:\/\/m\.v\.qq\.com/, name: 'qqMobile'},

        {funcName: "playVideo", match: /^https?:\/\/www\.iqiyi\.com/, name: 'iqiyiPc'},
        {funcName: "playVideo", match: /^https?:\/\/www\.iq\.com/},
        {funcName: "playVideo", node: ".m-video-player-wrap", match: /^https?:\/\/m.iqiyi\.com/, areaClassName: 'm-sliding-list'},

        {funcName: "playVideo", node: "#player", nodeType: 'id', match: /m\.youku\.com\/alipay_video\/id_/},
        {funcName: "playVideo", node: "#player", nodeType: 'id', match: /m\.youku\.com\/video\/id_/},
        {funcName: "playVideo", match: /^https?:\/\/.*youku\.com/},

        {funcName: "playVideo", match: /^https?:\/\/www\.bilibili\.com/},
        {funcName: "playVideo", match: /^https?:\/\/m\.bilibili\.com/},

        {funcName: "playVideo", node: ".video-area", nodeType: 'class', match: /m\.mgtv\.com\/b/},
        {funcName: "playVideo", match: /mgtv\.com/, areaClassName: 'episode-items clearfix'},
        {funcName: "playVideo", node: ".x-cover-playbtn-wrap", nodeType: 'class', match: /.tv\.sohu\.com/},
        {funcName: "playVideo", node: ".x-cover-playbtn-wrap", nodeType: 'class', match: /m\.tv\.sohu\.com/},
        {funcName: "playVideo", node: "#playerWrap", nodeType: 'id', match: /film\.sohu\.com/},

        {funcName: "playVideo", match: /^https?:\/\/(.+\.)?tudou\.com/},

        {funcName: "playVideo", match: /^https?:\/\/(.+\.)?le\.com/},

        {funcName: "playVideo", match: /^https?:\/\/(.+\.)?pptv\.com/},

        {funcName: "playVideo", match: /^https?:\/\/(.+\.)?1905\.com/},

    ];

    var playLine = [
        {"name": "纯净1", "url": "https://im1907.top/?jx=", "mobile": 1},
        {"name": "虾米", "url": "https://jx.xmflv.com/?url=", "mobile": 0},
        {"name": "虾米2", "url": "https://jx.xmflv.cc/?url=", "mobile": 0},
        {"name": "剖云", "url": "https://www.pouyun.com/?url=", "mobile": 0},
        {"name": "七哥", "url": "https://jx.nnxv.cn/tv.php?url=", "mobile": 0},
        {"name": "夜幕", "url": "https://www.yemu.xyz/?url=", "mobile": 0},
        {"name": "云析", "url": "https://jx.yparse.com/index.php?url=", "mobile": 0},
        {"name": "IK9", "url": "https://yparse.ik9.cc/index.php?url=", "mobile": 0},
        {"name": "JY", "url": "https://jx.playerjy.com/?url=", "mobile": 0},
        {"name": "M3U8", "url": "https://jx.m3u8.tv/jiexi/?url=", "mobile": 0},
        {"name": "PM", "url": "https://www.playm3u8.cn/jiexi.php?url=", "mobile": 0},
        {"name": "8090", "url": "https://www.8090g.cn/?url=", "mobile": 0}
    ]

    var keyCode = [
        {code: 48, isShift: false, value: '0'},
        {code: 48, isShift: true, value: ')'},
        {code: 49, isShift: false, value: '1'},
        {code: 49, isShift: true, value: '!'},
        {code: 50, isShift: false, value: '2'},
        {code: 50, isShift: true, value: '@'},
        {code: 51, isShift: false, value: '3'},
        {code: 51, isShift: true, value: '#'},
        {code: 52, isShift: false, value: '4'},
        {code: 52, isShift: true, value: '$'},
        {code: 53, isShift: false, value: '5'},
        {code: 53, isShift: true, value: '%'},
        {code: 54, isShift: false, value: '6'},
        {code: 54, isShift: true, value: '^'},
        {code: 55, isShift: false, value: '7'},
        {code: 55, isShift: true, value: '&'},
        {code: 56, isShift: false, value: '8'},
        {code: 56, isShift: true, value: '*'},
        {code: 57, isShift: false, value: '9'},
        {code: 57, isShift: true, value: '('},
        {code: 70, isShift: false, value: 'f'},
        {code: 70, isShift: true, value: 'F'},
        {code: 74, isShift: false, value: 'j'},
        {code: 74, isShift: true, value: 'J'},
        {code: 75, isShift: false, value: 'k'},
        {code: 75, isShift: true, value: 'K'},
        {code: 76, isShift: false, value: 'l'},
        {code: 76, isShift: true, value: 'L'},
    ]

    class BaseClass {

        constructor() {
            this.setStyle();

            this.className = this.getClassName();
        }

        setStyle() {
            let menuSetStyle = `
                        .zhmMask{
                            z-index:999999999;
                            background-color:#000;
                            position: fixed;top: 0;right: 0;bottom: 0;left: 0;
                            opacity:0.8;
                        }
                        .wrap-box{
                            z-index:1000000000;
                            position:fixed;;top: 50%;left: 50%;transform: translate(-50%, -200px);
                            width: 300px;
                            color: #555;
                            background-color: #fff;
                            border-radius: 5px;
                            overflow:hidden;
                            font:16px numFont,PingFangSC-Regular,Tahoma,Microsoft Yahei,sans-serif !important;
                            font-weight:400 !important;
                        }
                        .setWrapHead{
                            background-color:#f24443;height:40px;color:#fff;text-align:center;line-height:40px;
                        }
                        .setWrapLi{
                            margin:0px;padding:0px;
                        }
                        .setWrapLi li{
                            background-color: #fff;
                            border-bottom:1px solid #eee;
                            margin:0px !important;
                            padding:12px 20px;
                            display: flex;
                            justify-content: space-between;align-items: center;
                            list-style: none;
                        }

                        .setWrapLiContent{
                            display: flex;justify-content: space-between;align-items: center;
                        }
                        .setWrapSave{
                            position:absolute;top:-2px;right:10px;font-size:24px;cursor:pointer
                        }
                        .iconSetFoot{
                            position:absolute;bottom:0px;padding:10px 20px;width:100%;
                        z-index:1000000009;background:#fef9ef;
                        }
                        .iconSetFootLi{
                            margin:0px;padding:0px;
                        }

                        .iconSetFootLi li{
                            display: inline-flex;
                            padding:0px 2px;
                            justify-content: space-between;align-items: center;
                            font-size: 12px;
                        }
                        .iconSetFootLi li a{
                            color:#555;
                        }
                        .iconSetFootLi a:hover {
                            color:#fe6d73;
                        }
                        .iconSetPage{
                            z-index:1000000001;
                            position:absolute;top:0px;left:300px;
                            background:#fff;
                            width:300px;
                            height:100%;
                        }
                        .iconSetUlHead{
                        padding:0px;
                        margin:0px;
                        }
                        .iconSetPageHead{
                            border-bottom:1px solid #ccc;
                            height:40px;
                            line-height:40px;
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            background-color:#fe6d73;
                            color:#fff;
                            font-size: 15px;
                        }
                        .iconSetPageLi{
                            margin:0px;padding:0px;
                        }
                        .iconSetPageLi li{
                            list-style: none;
                            padding:8px 20px;
                            border-bottom:1px solid #eee;
                        }
                        .zhihuSetPage{
                            z-index:1000000002;position:absolute;top:0px;left:300px;background:#fff;width:300px;height:100%;
                        }
                        .iconSetPageInput{
                            display: flex !important;justify-content: space-between;align-items: center;
                        }
                        .zhihuSetPageLi{
                            margin:0px;padding:0px;
                            height:258px;
                            overflow-y: scroll;
                        }

                        .zhihuSetPageContent{
                            display: flex !important;justify-content: space-between;align-items: center;
                        }

                        .zhm_circular{
                            width: 40px;height: 20px;border-radius: 16px;transition: .3s;cursor: pointer;box-shadow: 0 0 3px #999 inset;
                        }
                        .round-button{
                            width: 20px;height: 20px;;border-radius: 50%;box-shadow: 0 1px 5px rgba(0,0,0,.5);transition: .3s;position: relative;
                        }
                        .zhm_back{
                            border: solid #FFF; border-width: 0 3px 3px 0; display: inline-block; padding: 3px;transform: rotate(135deg);  -webkit-transform: rotate(135deg);margin-left:10px;cursor:pointer;
                        }
                        .to-right{
                            margin-left:20px; display: inline-block; padding: 3px;transform: rotate(-45deg); -webkit-transform: rotate(-45deg);cursor:pointer;

                        }
                        .iconSetSave{
                            font-size:24px;cursor:pointer;margin-right:5px;margin-bottom:4px;color:#FFF;
                        }
                        .zhm_set_page{
                            z-index:1000000003;
                            position:absolute;
                            top:0px;left:300px;
                            background:#fff;
                            width:300px;
                            height:100%;
                        }
                        .zhm_set_page_header{
                            border-bottom:1px solid #ccc;
                            height:40px;
                            line-height:40px;
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            background-color:#fe6d73;
                            color:#fff;
                            font-size: 15px;
                        }
                        .zhm_set_page_content{
                            display: flex !important;justify-content: space-between;align-items: center;
                        }
                        .zhm_set_page_list{
                            margin:0px;padding:0px;
                            height: 220px;
                            overflow-y: scroll;
                        }

                        .zhm_set_page_list::-webkit-scrollbar {
                            /*滚动条整体样式*/
                            width : 0px;  /*高宽分别对应横竖滚动条的尺寸*/
                            height: 1px;
                        }
                        .zhm_set_page_list::-webkit-scrollbar-thumb {
                            /*滚动条里面小方块*/
                            border-radius   : 2px;
                            background-color: #fe6d73;
                        }
                        .zhm_set_page_list::-webkit-scrollbar-track {
                            /*滚动条里面轨道*/
                            box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
                            background   : #ededed;
                            border-radius: 10px;
                        }
                        .zhm_set_page_list li{
                            /*border-bottom:1px solid #ccc;*/
                            padding:12px 20px;
                            display:block;
                            border-bottom:1px solid #eee;
                        }
                        li:last-child{
                            border-bottom:none;
                        }
                        .zhm_scroll{
                        overflow-y: scroll !important;
                        }
                        .zhm_scroll::-webkit-scrollbar {
                            /*滚动条整体样式*/
                            width : 0px;  /*高宽分别对应横竖滚动条的尺寸*/
                            height: 1px;
                        }
                        .zhm_scroll::-webkit-scrollbar-thumb {
                            /*滚动条里面小方块*/
                            border-radius   : 2px;
                            background-color: #fe6d73;
                        }
                        .zhm_scroll::-webkit-scrollbar-track {
                            /*滚动条里面轨道*/
                            box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
                            background   : #ededed;
                            border-radius: 10px;
                        }
                        /*-form-*/
                        :root {
                            --base-color: #434a56;
                            --white-color-primary: #f7f8f8;
                            --white-color-secondary: #fefefe;
                            --gray-color-primary: #c2c2c2;
                            --gray-color-secondary: #c2c2c2;
                            --gray-color-tertiary: #676f79;
                            --active-color: #227c9d;
                            --valid-color: #c2c2c2;
                            --invalid-color: #f72f47;
                            --invalid-icon: url("data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%3E%20%3Cpath%20d%3D%22M13.41%2012l4.3-4.29a1%201%200%201%200-1.42-1.42L12%2010.59l-4.29-4.3a1%201%200%200%200-1.42%201.42l4.3%204.29-4.3%204.29a1%201%200%200%200%200%201.42%201%201%200%200%200%201.42%200l4.29-4.3%204.29%204.3a1%201%200%200%200%201.42%200%201%201%200%200%200%200-1.42z%22%20fill%3D%22%23f72f47%22%20%2F%3E%3C%2Fsvg%3E");
                        }
                        .text-input {
                            font-size: 16px;
                            position: relative;
                            right:0px;
                            z-index: 0;
                        }
                        .text-input__body {
                            -webkit-appearance: none;
                            -moz-appearance: none;
                            appearance: none;
                            background-color: transparent;
                            border: 1px solid var(--gray-color-primary);
                            border-radius: 3px;
                            height: 1.7em;
                            line-height: 1.7;
                            overflow: hidden;
                            padding: 2px 1em;
                            text-overflow: ellipsis;
                            transition: background-color 0.3s;
                            width:55%;
                            font-size:14px;
                            box-sizing: initial;
                        }
                        .text-input__body:-ms-input-placeholder {
                            color: var(--gray-color-secondary);
                        }
                        .text-input__body::-moz-placeholder {
                            color: var(--gray-color-secondary);
                        }
                        .text-input__body::placeholder {
                            color: var(--gray-color-secondary);
                        }

                        .text-input__body[data-is-valid] {
                            padding-right: 1em;

                        }
                        .text-input__body[data-is-valid=true] {
                            border-color: var(--valid-color);
                        }
                        .text-input__body[data-is-valid=false] {
                            border-color: var(--invalid-color);
                            box-shadow: inset 0 0 0 1px var(--invalid-color);
                        }
                        .text-input__body:focus {
                            border-color: var(--active-color);
                            box-shadow: inset 0 0 0 1px var(--active-color);
                            outline: none;
                        }
                        .text-input__body:-webkit-autofill {
                            transition-delay: 9999s;
                            -webkit-transition-property: background-color;
                            transition-property: background-color;
                        }
                        .text-input__validator {
                            background-position: right 0.5em center;
                            background-repeat: no-repeat;
                            background-size: 1.5em;
                            display: inline-block;
                            height: 100%;
                            left: 0;
                            position: absolute;
                            top: 0;
                            width: 100%;
                            z-index: -1;
                        }
                        .text-input__body[data-is-valid=false] + .text-input__validator {
                            background-image: var(--invalid-icon);
                        }
                        .select-box {
                            box-sizing: inherit;
                            font-size: 16px;
                            position: relative;
                            transition: background-color 0.5s ease-out;
                            width:90px;
                        }
                        .select-box::after {
                            border-color: var(--gray-color-secondary) transparent transparent transparent;
                            border-style: solid;
                            border-width: 6px 4px 0;
                            bottom: 0;
                            content: "";
                            display: inline-block;
                            height: 0;
                            margin: auto 0;
                            pointer-events: none;
                            position: absolute;
                            right: -72px;
                            top: 0;
                            width: 0;
                            z-index: 1;
                        }
                        .select-box__body {
                            box-sizing: initial;
                            -webkit-appearance: none;
                            -moz-appearance: none;
                            appearance: none;
                            background-color: transparent;
                            border: 1px solid var(--gray-color-primary);
                            border-radius: 3px;
                            cursor: pointer;
                            height: 1.7em;
                            line-height: 1.7;
                            padding-left: 1em;
                            padding-right: calc(1em + 16px);
                            width: 140%;
                            font-size:14px;
                            padding-top:2px;
                            padding-bottom:2px;
                        }
                        .select-box__body[data-is-valid=true] {
                            border-color: var(--valid-color);
                            box-shadow: inset 0 0 0 1px var(--valid-color);
                        }
                        .select-box__body[data-is-valid=false] {
                            border-color: var(--invalid-color);
                            box-shadow: inset 0 0 0 1px var(--invalid-color);
                        }
                        .select-box__body.focus-visible {
                            border-color: var(--active-color);
                            box-shadow: inset 0 0 0 1px var(--active-color);
                            outline: none;
                        }
                        .select-box__body:-webkit-autofill {
                            transition-delay: 9999s;
                            -webkit-transition-property: background-color;
                            transition-property: background-color;
                        }
                        .textarea__body {
                            -webkit-appearance: none;
                            -moz-appearance: none;
                            appearance: none;
                            background-color: transparent;
                            border: 1px solid var(--gray-color-primary);
                            border-radius: 0;
                            box-sizing: initial;
                            font: inherit;
                            left: 0;
                            letter-spacing: inherit;
                            overflow: hidden;
                            padding: 1em;
                            position: absolute;
                            resize: none;
                            top: 0;
                            transition: background-color 0.5s ease-out;
                            width: 100%;
                            }
                        .textarea__body:only-child {
                            position: relative;
                            resize: vertical;
                        }
                        .textarea__body:focus {
                            border-color: var(--active-color);
                            box-shadow: inset 0 0 0 1px var(--active-color);
                            outline: none;
                        }
                        .textarea__body[data-is-valid=true] {
                            border-color: var(--valid-color);
                            box-shadow: inset 0 0 0 1px var(--valid-color);
                        }
                        .textarea__body[data-is-valid=false] {
                            border-color: var(--invalid-color);
                            box-shadow: inset 0 0 0 1px var(--invalid-color);
                        }

                        .textarea ._dummy-box {
                            border: 1px solid;
                            box-sizing: border-box;
                            min-height: 240px;
                            overflow: hidden;
                            overflow-wrap: break-word;
                            padding: 1em;
                            visibility: hidden;
                            white-space: pre-wrap;
                            word-wrap: break-word;
                        }
                        .toLeftMove{
                            nimation:moveToLeft 0.5s infinite;
                            -webkit-animation:moveToLeft 0.5s infinite; /*Safari and Chrome*/
                            animation-iteration-count:1;
                            animation-fill-mode: forwards;
                        }

                        @keyframes moveToLeft{
                            from {left:200px;}
                            to {left:0px;}
                        }

                        @-webkit-keyframes moveToLeft /*Safari and Chrome*/{
                            from {left:200px;}
                            to {left:0px;}
                        }

                        .toRightMove{
                            nimation:moveToRight 2s infinite;
                            -webkit-animation:moveToRight 2s infinite; /*Safari and Chrome*/
                            animation-iteration-count:1;
                            animation-fill-mode: forwards;
                        }
                        @keyframes moveToRight{
                            from {left:0px;}
                            to {left:2000px;}
                        }

                        @-webkit-keyframes moveToRight /*Safari and Chrome*/{
                            from {left:0px;}
                            to {left:200px;}
                        }

                    `;

            domStyle.appendChild(document.createTextNode(menuSetStyle));

            domHead.appendChild(domStyle);
        }

        createElement(dom, domId) {

            var rootElement = document.body;

            var newElement = document.createElement(dom);

            newElement.id = domId;

            var newElementHtmlContent = document.createTextNode('');

            rootElement.appendChild(newElement);

            newElement.appendChild(newElementHtmlContent);

        }

        request(method, url, data, isCookie = '') {

            let request = new XMLHttpRequest();

            return new Promise((resolve, reject) => {

                request.onreadystatechange = function () {

                    if (request.readyState == 4) {

                        if (request.status == 200) {

                            resolve(request.responseText);

                        } else {

                            reject(request.status);
                        }

                    }
                }

                request.open(method, url);
                if (isCookie) {
                    request.withCredentials = true;
                }
                request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                request.send(data);

            })

        }

        setCookie(cname, cvalue, exdays) {

            var d = new Date();

            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));

            var expires = "expires=" + d.toGMTString();

            document.cookie = cname + "=" + cvalue + "; " + expires;
        }

        getCookie(cname) {
            var name = cname + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i].trim();
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        }

        getQueryString(e) {
            var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)");
            var a = window.location.search.substr(1).match(t);
            if (a != null) return a[2];
            return "";
        }

        getUrlParams(url) {
            let reg = /([^?&+#]+)=([^?&+#]+)/g;
            let obj = {};
            url.replace(reg, (res, $1, $2) => {
                obj[$1] = $2
            });
            return obj;
        }

        getLine(text) {

            let textArr = text.split('\n');

            if (textArr.length > 0) {

                let lineObj = [];

                let match = /^(.+)(https?:\/\/.+)$/;

                textArr.forEach(function (item) {

                    item = item.replace(/\s*,*/g, '');

                    if (!item) return true;

                    let lineMatch = item.match(match);

                    if (lineMatch) {

                        lineObj.push({'name': lineMatch[1].substring(0, 4), 'url': lineMatch[2]});

                    } else {

                        lineObj = [];

                        return false;
                    }

                })
                return lineObj;

            }
        }

        static getElement(css, all = '') {

            return new Promise((resolve, reject) => {

                let num = 0;

                let timer = setInterval(function () {

                    num++

                    let dom;

                    if (all == false) {

                        dom = document.querySelector(css);

                        if (dom) {

                            clearInterval(timer);

                            resolve(dom);

                        }

                    } else {

                        dom = document.querySelectorAll(css);

                        if (dom.length > 0) {

                            clearInterval(timer);

                            resolve(dom);

                        }
                    }

                    if (num == 20) {
                        clearInterval(timer);
                        resolve(false);
                    }

                }, 300)

            })


        }

        static toast(msg, duration) {

            duration = isNaN(duration) ? 3000 : duration;

            let toastDom = document.createElement('div');

            toastDom.innerHTML = msg;

            toastDom.style.cssText = 'padding:2px 15px;min-height: 36px;line-height: 36px;text-align: center;transform: translate(-50%);border-radius: 4px;color: rgb(255, 255, 255);position: fixed;top: 50%;left: 50%;z-index: 9999999;background: rgb(0, 0, 0);font-size: 16px;'

            document.body.appendChild(toastDom);

            setTimeout(function () {

                var d = 0.5;

                toastDom.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';

                toastDom.style.opacity = '0';

                setTimeout(function () {
                    document.body.removeChild(toastDom)
                }, d * 1000);

            }, duration);

        }

        zhmLogo() {

            var _this = this;

            let sortDiv = iconVipPosition == 'left' ? 'row' : 'row-reverse';

            let playVideoStyle = `
               .${this.className.zhm_play_vidoe_icon}{
                  padding-top:2px;
                  cursor:pointer;
                  z-index:999999;
                  position:fixed;${iconVipPosition}:5px;top:${iconVipTop}px;
                  text-align:center;
                  overflow:visible;
                  display:flex;
                  flex-direction:${sortDiv};
                  width:auto;
               }
               .${this.className.zhm_play_video_wrap}{
                  z-index:9999999;
                  overflow: hidden;
                  width:300px;
               }
               .${this.className.iconLogo}{
               opacity:${iconVipOpacity / 100};
               }
               .${this.className.zhm_play_video_line}{
                  width:320px;
                  height:316px;
                  overflow-y:scroll;
                  overflow-x:hidden;
               }
               .${this.className.zhm_play_vide_line_ul}{
                  width:300px;
                  display: flex;
                  justify-content: flex-start;
                  flex-flow: row wrap;
                  list-style: none;
                  padding:0px;
                  margin:0px;

               }
               .${this.className.zhm_play_video_line_ul_li}{
                  padding:4px 0px;
                  margin:2px;
                  width:30%;
                  color:#FFF;
                  text-align:center;
                  background-color:#f24443;
                  box-shadow:0px 0px 10px #fff;
                  font-size:14px;
               }
               .${this.className.zhm_play_video_line_ul_li}:hover{
                  color:#260033;
                  background-color:#fcc0c0
               }
               .${this.className.zhm_line_selected}{
                  color:#260033;
                  background-color:#fcc0c0
               }

               .${this.className.zhm_play_video_jx}{
                  width:100%;
                  height:100%;
                  z-index:999999;
                  position: absolute;top:0px;padding:0px;
               }
               `;

            domStyle.appendChild(document.createTextNode(playVideoStyle));

            domHead.appendChild(domStyle);

            let playWrapHtml = `<div href='javascript:void(0)' target='_blank' style='' class='${this.className.playButton} ${this.className.zhm_play_vidoe_icon}' id='${this.className.zhmlogo}'>`;

            playWrapHtml += `<img class='${this.className.iconLogo}' style='width:${iconVipWidth}px;height:${iconVipWidth * 1.5}px' src='data:image/gif;base64,R0lGODlhZACWAPcAAPJEQ/v7+fnLyPjCwfRnZfnT0PJKSfjGxPv29PnY1/NbWvv18/aUk/rl4/rw7vnKyPaJiPrr6faamPRycfaLivv59/JJSPrv7fNVVPne3frt6/NQT/v6+PelpPagnvR3dvi6uPvz8fexr/nOzPegnvrk4vR1c/JGRfrq6PnQzvjCwPnS0PnZ1/vw7vna2feop/empfrc2vNUU/ixr/R4dvWJh/esqvJHRvvx7/ry8fNSUfNWVPjBwPV6efaMivnf3fi8uvWDgvv49vrp6Pry8PJPTvaYl/nT0fnW1PerqfRsa/RvbvWAf/V9fPnk4vi2tfRjYfRhX/vu7PNYV/JFRPnk4faHhfaXlvv39frh3/i7uvnNy/nOy/rs6verqvRgXvnd2/aGhPWRkPV/ffri4Prj4PiwrfnLyfaUkvRfXfJNTPjFw/eysfRlY/RxcPvv7fezsvi0svv28/abmveqqPepqPJMS/eysPWOjfNdXPRzcvv08vRubfro5veiofelo/NZWPnZ2PNpaPnU0vRfXvnHxfiurPjAv/nQzfrn5fnc2/e0svadnPe4t/aSkfNXVvRmZPetqvnY1vi8u/eioPitq/i/vfRwb/R1dPne3Paenfacmve3tvnRz/rj4faXlfV+fPWFhPJLSvaNi/WMjPR0c/aVk/WPj/adm/rp5/nIxvRoZvRiYfjDwvaVlPJOTfe2tfNqafJRUPekovaamfNaWfV8evnd3PnNzPnV1Pesq/jEw/V6ePR3d/ng3vrw7faWlPenpfafnfWPjviwrvNWVfnMyvi6ufV/fvV9e/nb2vru6/RkYvjAvvnIxfRiYPi9vPegn/V7efejofe1tPWCgfrm5PJIR/nc2vNcW/JQT/jFxPvy8PWDgfWBf/RsbPV5d/NpafNcXPnf3vaIhvRvb/ivrfnX1vNRUfaKifRtbPaZl/NeXPe5uPWCgPRravaIh/NoZ/nJx/WFg/i9u/R2dfjHxvjIxvNTUvi/vve1s/NeXQAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQElgAAACwAAAAAZACWAAAI/gABCBxIsKDBgwgTKlzIsKHDhxAjSpxIsaLFixgzatzIsaPHjyBDilxIYESAACMIjFxpUIWDAA5UeFjI4uTJBCxzCsxhk8iQhTZt6sypwaaGDAsHBOUxlOULJCWQvKixcAODAQMYbGi6UkGPGj0UGOBKtqzZs2jTql3LtqMCE01MiK1KYsQIEls7fmFCa9EWF4kQhCiTQoUITUzSfOyQgkWKDkGSLtWoA9iuZUEzaw4gBZqVIhtR2ESBU6FmjDQOCdnMejMCLRMyLrC54ALNoKUpjnHRunfrTvUunpm94MEfkgMcXBigcuIl3r6jsz6joKIJCR4kmNgxEkMj3yXo/mkCJaiWBTVf9FiZM6lEbwSoTrQ9yEsK6wqqSOVxKMNWkjesudDcfABcQwdrfVwhA0UWhIHIZkL0QqAaK2zmiQ83ZATFEZoVMh8GymiGACUWcETFFQgE9UBEBmCgAAZjMUQACSQMqJAMZWjmgmIffZHASQuUEhEEIjwhAgQ2HmRDUDYspAZ0Qd1RYkgniMFAFBLFYFMMQCz0kk22JXTCg5mhQZYdVpBjx0Jy0BZmQk4EVYVCdWTGQTpkEVJUAC6AltAPNmWiwkIQfHkBBAn1YqcVZfkRpUI+xAFEHD4o0RABSRakA4BBjWJWB5nFhpABU0QxRYwY3ZGZLmflsZpN/mVMuVIbHASVhaxlMZLZKTmlEBQHsaR1Qog29SHfSKVkZsZa6mRGgUYTiGpQAUG94edCOpgUghevgLRFUC4ctAQDHjCwBHcKFXqSA4gSxEeZDukT1DKOHMuRHkFpcJBLMMm0UJw2zUkQHEF1gepCe2jmSzIeNWNTOwfxdJJPXgb1JgAWhBAUMA+1lgIzHJ1QxxabrGnQngEctdCSNiVBkDdBVXAtQ7WyxgEnj+T0VFRTycgAA0kSbFMrEFXg2x6UmCySV2DNRVEWQTH6kNHRpTIKFQQahEFmGBQdVCG5tAaGGxj9sUAFjHyETFBlRPTqSS8AEEYfrRVCSEVuBMWH/kebBAWC20HVIZAowmi8WQUi4DNRnTb54dF3NqUNERZB0UHQI5zUrBkOc+DaUN82HUPQW0zQ4HRCBCgVAHMDDRKUOxGlaJPlBcXDIWsNhAFRKEENQhBj2BwB2W025Qa1TZZCJPtJLh9UjTWtSfKOQ+/a1ABBop1EGlCZDRRBUKzEHpQXCVkwh+GbHVLdQlEEJQVBEgdAsUKqn8SUQLPZVEtE+Z9EvkIYWITmMoOFDmAtIYCIGUHuQRx7zEQhVsGKVgZCtZMsCCIJswmrGAIJX7EmEjf6FUGuk53tUAQHQclGRNAXABA6BBnu0UwIFJKHoODAI9k7SRtWGBQXNqQJ/mTYTAQUQoCgJMIjighKOXhok0o0BApcaM2zEoKJoIDBI2uIWkSSaBNaLEQGd6hgZshAg4WIISiq8EglgkKCiDjCJiEoRvmMgMLN4MAIGVqIIYLixIG06EUHQ4hV7DJBgZwiKESLSCgsYYi7IWQMMdRMBdigA4d8yyZiIAiRjIQkydjkfgAQRFC4cUCNdLA1XIDCQ06wvABICwBaOgmXuBeUgdyAcjYRRES6YQlzqJIgMoDDAINChjFE5BJBQQCu2gSkix2kJsUjyCVP0saH4MEmCJAjxiTAQhviUSKOsok8ChLLAMySiKpj3UA+gRuISCIowgAAEyKZmUlWciJ0/rPJFQqyySNl6iHtCwqWHIKyABjDg5tJZUUm8KucEeSPMLoIlAKwLId0QTrFvMghgsIFkVwTjtqwqG/umMeKQCIzPhCJKFj4P4Z87z6UzEgWbWKwkYDKJhUIn0tZo9CM0CAzRsjIjGp0EB30LwApaEiOxmhMjVigAUFpQSAFMoEreOAKE0BXQlh2kiYZZBaZ+QRD2ODNkmYkGJnJ5EHWwJMcrOGBCfnSSZwpEAMkIpk7VIgadhGABcDhnhtRwgBvYa+CxG9+cJITQqoYlBLMbCiy8ERm9oaQHG4vXYZq10HIGpRtkKUIgcgMMRTSgSP8QHiRYUi0FmKBcWSGF00p/kLYgqIIzxVEATQIgummWhFmZAYPQ5HBLTITAh5xJRaZYYdO0nA8nOrBLAeyyTl0woRuBkB3ZslhANbBEnTAQjMcmOJHVqsQZAYFEAMRByykEAEGmNUiJ6AAp4KCBYY5BLe6PR1C1AUTzRrEDL0TyA3m0EpfNOEiFhgGVDXThVcy5AWmPULPFAKwkwjMICewj01cAQAlgIE1K8CDLCTyDTNoWDOIuOBDUKYyhcg1AHQVCGNt8gViDFOSAmCAG9QgpmfAgxOpaA0CNFHKhxz2JwrhagCaZ5BFRPWl0jkJB7LgjEnMoAPBoMYaAoHL3lCHIvz6hb9IQqN/AuAGdexN/jMyEOU288kWFhmXB9BwLoxIwzeeeC4AaGAMN/cmBT0gEAiETKKCEGAWH/bzSTSQhC9kzQAZ1MwI9pOQNHxiEmAQo2YW4IJjiGEVhZ0PKDaDAuw6xALhAMc8hoEKCZCCCW5Ab9YOgoZ6mqFbsy4IRHlr6HRmqg0VDMQqcn0QHxRJBJUi3k0O4gghCMEVRSb2QAB1EkHRUijSjggz+xpjgtQvAKDMtkPKec6EDHIEhRS3Q/rZSXV/ZNfujre8503vek/k3Om2d0FIqB2tIuTb4db3QIbTVwEcxzTdM4gAHsDwB4hXIRRo+AMGIJBoaOHiWghqQWAgcYmroAMgl0j//mqj7ADkhiBQXl1Dvo0UAFDLJgdQuHQi0ImHK8SyJz9I6k6izoJ8+3o7tcnfXB6UmBdEAG7uxAcYwhjHDO8iFMjM0hXyAakL5OUnMTpBkO7mCEw9IW+Ji34r0gK/LWTQNmk50WEucz8PsSkViqZCfiT0gWA9AFofCNdPIoCCUGAGCWhlAIauEwkkcyGt/Prd8y6QvQeg7wf5QCvfPpSy2wQGCYFBUCi/9qy3ne8JMXxQvo6RoZpZIHE/yQoSknqV273on3+8QlqJeYQwLSy8HoiSvXoQzdukBQmx/EkevvjYQx4hCz5J7Q+yM6lQxcUWm31QbC6QqNuE853Hu/EV/pL8ACz/ZEZRO0IqHIALH4TuPD/ItylOkOIfPSjHPwjtE3JkQmVWITMICtALwmabSKAg7rd18Bd6zpIQYTZmC0FeiDd6BVF1vzctsPd+NhF/BZFy2FcQckZn/oYR6Dd4BZF/NrF6ABiBAjiBBzED9CR7ZAGCy0YQHfh/I8h2EngSJSBxklACwodNpDcUDngSCFAQywN8ECiDJehmMFgW/ad8AyF6LRiDnjeD0oEAMzBeDpYQaKd6A9F6UziET1iEvoEAK7CDo1Iqp8IQ/MUuDNGDAUB5UPaDBxGAehdVDTCHdJgBAvB9DBEpk5JsFKZYDJGEAfAs1teETqh9UEiB/hRBbQFgbdAHJg1xhSoHiVvIhYbohYg4EdtGckkWFEwGcUGBFICYEHDYeAOIEeTWJWRGVA6RcgCwPOJXiIwHAI53iRLBbqdnEd/WeoRHibE4ixkBbx8xiJohhq9HhHFoguqWcmmnEKMoi6Uobo5Xd6JIgscIeurGhNPHjNRIisg4FKnzEj3XEDm4hgvRjL6IEfxmQgoBTYTIEK3netNojNxojcJBHAZ3bScBERJAh3NIfQXRCAkQkAlgCAYBAvy4ixUxct02EAAncAaBc1XBAISUFw45ENOACyyAC36QWhU5EVMwAU0wAWXYkSRZkiZ5kh4RQVlBkR25D03QNLknPBANWZJewAI883wJcRolyWKvaBDsaHImWX/oxHO3SG/5UBQaYAlwhZIMYQqA8gOmUJRMOZVUWZVWaZUBAQAh+QQBlgAAACwGAAYAWQCLAIcyzTLx0UXxpUTyX0PySEPyVkPyeUTygkTwyETzTUPxykXyikTwx0TxtkXyUUPxt0TxrkXxxkXwv0TymETyi0PxuUTyakPxyEXxxEXyaEPxu0TxzEXxzUXykUTxlETyUkPyj0TxhkTxpETybkTxtEXxw0XynETxgkTyVEPye0TyZUPxoETxsETyeUPybEPxskTxu0XydETxrETycEPyZ0Pxv0XxeUTxzUTymkTxj0Txk0PyY0PxrkTyjUTxp0TyWkPyaUPxhETxo0TxdUPyoUTyWEPyckPxqUTxq0TxqkTyk0QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI/gAHQAgQAMIAAAgTKlzIsKHDhxAjRhRwIcAFAQseECTYQKLHjyBDNlSwUUGJjRtFqlzJMmGEjRFgCEApoqXNmxE7kKhBokOLBAcECDiQAKfRowgLjLAxogABpFCjSp1KtarVq1izat0KsYCFGRacJqAAAQKFolyxgmDxgAWIGDM31kx7FcNGDA1QEqR7lcPGDRc0buzIt6oMvxuQ5BggAAEDAQcLU7UQYkEIIB8ka97MubPnz6A/E3BQwMFTAAMoUIgc+qaBCSYmGBjgAaWH1jcrbKywAgFKBrht3vjLQAJKCcFbatioQYAB3wEYGEjOMgUOIjhS7EA4gDV1lQRQ/vxAcfq7+fPo04POkEE9SBUnFpxQ8eE5QQTT3U+seHGB8Y3I6QcRSQSZBB1BwAn40EsExVTbRjoo+JBOPPmE2gEHeCfhQkox5dSGIIYo4ogkKuSVES44xRhBkJUIwFoVvPCWYBy5aBdBeOkVgIsEBmBSXATNRWISiB2xAFBCEeUiZZZh5uKTUEYpZWGjlfYUUGUpWeJrsc0GZABCjqgbQbzp6OJwBG3AAI0BEEbimAHwtmIALW4Jm2waPlmlaVP26eefOKW22pM0BLFAEDR88CBBt5XoA0kK+LDAgdHxWFIJ/xEUIIk3BoCXfdHlRyIIL2ggYwwIsQdlAS4MkWJ5/oDGKuusC6n6JKuuOgUqfi52UOoLPmUawKYjMhhATJQmSGKPJi0aQIQlUmQRRqiplmeI8MlHH63cduutiHs+NWedJKZwp3ZsujnicgQ1Z2aJaAag5pdhiggnb1hCoCWJXOLZZ7jfBixwiPnuOyKTIVjwAb0uHhYABzLk8C6JfqUZGErqitgpXuNeu+Fabb3Vp1dgfTjwySijJ6jHG3bYFAHONkoihT21kKyLxsYkLLEiMlsCqNK5KG1/qbb3ZLbzZZby0ky3ZquL4Y331K6ijmgddtrt7CK7ATR3M7zEOQvtm7utUO2gLvY727+k8dn023AXxphv5B5cWcIfpNuwUV8QS6yXixXLexFNNt7VQMFokdgDDw/w0AOqU6JAwww0kBf35ZhfheRQiY9YxAweEsBwiUo8UGELExcLEwx6l+hzxy4K8VIEQizQ5wHLaZBhQAAh/hVNYWRlIHdpdGggU2NyZWVuVG9HaWYAOw=='>`

            playWrapHtml += `<div>`;


            _this.createElement('div', _this.className.zhmIcon);

            let zhmPlay = document.getElementById(_this.className.zhmIcon);

            zhmPlay.innerHTML = playWrapHtml;

        }

        zhmLogoDrag(type, web) {

            var _this = this;

            var zhmLogoDrag = document.querySelector("#" + this.className.zhmlogo);

            var zhmLogoIcon = document.querySelector("." + this.className.iconLogo);

            if (!zhmLogoDrag || !zhmLogoIcon) return;

            zhmLogoDrag.onmousedown = function (event) {

                if (event.which == 3) return false;

                let sedownTop = zhmLogoDrag.offsetTop;

                let zhmLogoIconHeight = zhmLogoIcon.offsetHeight;

                let bottomSpace = 10;

                if (event.target.className != _this.className.iconLogo) return;

                let shiftx = 5;

                let shiftY = event.clientY - zhmLogoDrag.getBoundingClientRect().top;

                zhmLogoDrag.style.position = 'fixed';

                zhmLogoDrag.style.zIndex = 9999999;

                document.body.append(zhmLogoDrag);

                function onMouseMove(event) {

                    zhmLogoDrag.style.left = '5px';

                    let height = window.innerHeight - zhmLogoIconHeight - bottomSpace;

                    let y = event.pageY - shiftY;

                    y = Math.min(Math.max(0, y), height);

                    zhmLogoDrag.style.top = y + 'px';

                }

                document.addEventListener('mousemove', onMouseMove);

                document.onmouseup = function (e) {

                    GM_setValue('iconTop', zhmLogoDrag.offsetTop);

                    document.removeEventListener('mousemove', onMouseMove);

                    zhmLogoDrag.onmouseup = null;

                    let height = zhmLogoDrag.offsetTop + zhmLogoIconHeight + bottomSpace;

                    if (zhmLogoDrag.offsetTop < 0) {

                        zhmLogoDrag.style.top = '0px';
                    }

                    if (window.innerHeight < height) {

                        zhmLogoDrag.style.top = window.innerHeight - zhmLogoIconHeight - bottomSpace + 'px';

                    }
                    switch (type) {

                        case 'video':

                            if (zhmLogoDrag.offsetTop == sedownTop && web.length == 0 && zhmLogoDrag.offsetTop > 0 && window.innerHeight > height) {

                                BaseClass.toast('请在视频播放页点击图标');
                            }

                            break;

                        case 'youtube':


                            break;

                    }
                };
            };

            zhmLogoDrag.ondragstart = function () {
                return false;
            };
        }

        randomString(e) {

            e = e || 32;

            var t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz", a = t.length, n = "";

            for (let i = 0; i < e; i++) {

                n += t.charAt(Math.floor(Math.random() * a));

            }
            ;

            return n;
        }

        getClassName() {

            let className = [
                'zhmIcon',
                'zhm_play_vidoe_icon',
                'zhm_play_video_wrap',
                'iconLogo',
                'zhm_play_video_line',
                'zhm_play_vide_line_ul',
                'zhm_play_video_line_ul_li',
                'zhm_line_selected',
                'zhm_play_video_jx',
                'playButton',
                'zhmlogo',
                'playLineTd',
                'playLineDiv',
            ];

            let objClassName = {};

            for (let i = 0; i < className.length; i++) {
                let randomLength = Math.floor(Math.random() * (16 - 8 + 1) + 8);
                objClassName[className[i]] = this.randomString(randomLength);
            }

            return objClassName;

        }

    }

    class PlayVideoClass extends BaseClass {
        constructor() {
            super();
        }

    }

    var nowWeb = [];

    jxVideo.forEach(function (item) {

        let result = location.href.match(item.match);

        if (result) {

            nowWeb.push(item);

        }

    })

    if (nowWeb.length == 0) {
        console.log('没有匹配该网站或该模块已关闭');
        return;
    }

    function playVideoFunc() {

        var playVideoClass = new PlayVideoClass();

        if (GM_getValue('movieList', '22') == 0) {
            return false;
        }

        playVideoClass.zhmLogo();

        if (GM_getValue('playVideoLineText')) {

            let lineObj = playVideoClass.getLine(GM_getValue('playVideoLineText'));

            if (lineObj) {

                playLine = lineObj

            }
        }


        let playWrapHtml = `<div class='${playVideoClass.className.zhm_play_video_line}'>`;

        playWrapHtml += `<div><ul class='${playVideoClass.className.zhm_play_vide_line_ul}'>`;

        playLine.forEach(function (item) {

            let selected = '';

            if (playVideoClass.getCookie('playLineAction') == item.url) {

                selected = playVideoClass.className.zhm_line_selected;

            }

            playWrapHtml += `<li class='${playVideoClass.className.playLineTd} ${playVideoClass.className.zhm_play_video_line_ul_li} ${selected}' url='${item.url}' >${item.name}</li>`;

        })

        playWrapHtml += "</div>";

        let zhmPlay = document.getElementById(playVideoClass.className.zhmlogo);

        let playLineDom = document.createElement('div');

        playLineDom.className = `${playVideoClass.className.playLineDiv} ${playVideoClass.className.zhm_play_video_wrap}`;

        playLineDom.style.display = 'none';

        playLineDom.innerHTML = playWrapHtml;

        zhmPlay.appendChild(playLineDom);


        let playJxHtml = `<div class='${playVideoClass.className.zhm_play_video_jx}'>`;

        playJxHtml += "<iframe allowtransparency=true frameborder='0' scrolling='no' allowfullscreen=true allowtransparency=true name='jx_play' style='height:100%;width:100%' id='playIframe'></iframe></div>";

        let jxVideoData = [
            {
                funcName: "playVideo",
                node: ".player__container",
                match: /https:\/\/v.qq.com\/x\/cover\/[a-zA-Z0-9]+.html/,
                areaClassName: 'playlist-list',
                name: 'qqPC'
            },
            {
                funcName: "playVideo",
                node: "#player-container",
                match: /https:\/\/v.qq.com\/x\/cover\/[a-zA-Z0-9]+\/[a-zA-Z0-9]+.html/,
                areaClassName: 'playlist-list',
                name: 'qqPC'
            },
            {funcName: "playVideo", node: ".container-player", match: /v\.qq\.com\/x\/page/, areaClassName: 'mod_episode'},

            {funcName: "playVideo", node: "#video,.iqp-player", match: /^https:\/\/www\.iqiyi\.com\/[vwa]\_/, areaClassName: 'qy-episode-num', name: 'iqiyiPc'},
            {funcName: "playVideo", node: ".m-video-player-wrap", match: /^https:\/\/m.iqiyi\.com\/[vwa]\_/, areaClassName: 'm-sliding-list'},
            {funcName: "playVideo", node: ".intl-video-wrap", match: /^https:\/\/www\.iq\.com\/play\//, areaClassName: 'm-sliding-list'},

            {funcName: "playVideo", node: "#player", match: /v\.youku\.com\/v_show\/id_/, areaClassName: 'new-box-anthology-items'},
            {funcName: "playVideo", node: "#player", match: /v\.youku\.com\/v_play\/id_/},

            {
                funcName: "playVideo",
                node: "#bilibili-player",
                nodeType: 'id',
                match: /www\.bilibili\.com\/video/,
                name: 'biliPc',
                areaClassName: 'video-episode-card'
            },
            {
                funcName: "playVideo",
                node: ".bpx-player-primary-area",
                nodeType: 'id',
                match: /www\.bilibili\.com\/bangumi/,
                areaClassName: 'eplist_ep_list_wrapper__PzLHa'
            },
            {funcName: "playVideo", node: "#mgtv-player-wrap", nodeType: 'id', match: /^https?:\/\/www.mgtv\.com\/b|l\/[0-9]/, areaClassName: 'episode-items'},

            {funcName: "playVideo", node: ".x-player", nodeType: 'class', match: /tv\.sohu\.com\/v/, areaClassName: 'series-tab_pane'},
            {funcName: "playVideo", node: "#playerWrap", nodeType: 'id', match: /film\.sohu\.com\/album\//},

            {funcName: "playVideo", node: "#le_playbox", nodeType: 'id', match: /le\.com\/ptv\/vplay\//, areaClassName: 'juji_grid'},

            {funcName: "playVideo", node: "#player", nodeType: 'id', match: /play\.tudou\.com\/v_show\/id_/},

            {funcName: "playVideo", node: "#pptv_playpage_box", nodeType: 'id', match: /v\.pptv\.com\/show\//},

            {funcName: "playVideo", node: "#player", nodeType: 'id', match: /vip\.1905.com\/play\//},

            {funcName: "playVideo", node: "#vodPlayer", nodeType: 'id', match: /www\.1905.com\/vod\/play\//},
        ];

        let jxVideoWeb = jxVideoData.filter(function (item) {

            return location.href.match(item.match);

        })

        playVideoClass.zhmLogoDrag('video', jxVideoWeb);

        if (jxVideoWeb.length > 0) {

            var {funcName, match: nowMatch, node: nowNode, name: nowName} = jxVideoWeb[0];

            document.querySelector('.' + playVideoClass.className.playButton).onmouseover = () => {

                document.querySelector('.' + playVideoClass.className.playLineDiv).style.display = 'block';

            }

            document.querySelector('.' + playVideoClass.className.playButton).onmouseout = () => {

                document.querySelector('.' + playVideoClass.className.playLineDiv).style.display = 'none';

            }


            var playLineTd = document.querySelectorAll('.' + playVideoClass.className.playLineTd);

            playLineTd.forEach(function (item) {

                item.addEventListener('click', function () {

                    playLineTd.forEach(function (e) {

                        e.setAttribute('class', `${playVideoClass.className.playLineTd} ${playVideoClass.className.zhm_play_video_line_ul_li}`);
                    })

                    this.setAttribute('class', `${playVideoClass.className.playLineTd} ${playVideoClass.className.zhm_play_video_line_ul_li} ${playVideoClass.className.zhm_line_selected}`);

                    playVideoClass.setCookie('playLineAction', this.getAttribute('url'), 30);

                    if (GM_getValue('videoPlayLineAdd') != 22) {

                        let arrNowNode = nowNode.split(',');

                        let nowWebNode;

                        for (let i = 0; i < arrNowNode.length; i++) {

                            if (document.querySelector(arrNowNode[i])) {

                                nowWebNode = document.querySelector(nowNode);

                                break;
                            }

                        }

                        if (nowWebNode) {

                            nowWebNode.innerHTML = playJxHtml;

                            let playIframe = document.querySelector('#playIframe');

                            playIframe.src = item.getAttribute('url') + location.href;

                        } else {

                            console.log('视频网站结点不存在');
                        }

                    } else {

                        window.open(item.getAttribute('url') + location.href);

                    }

                })

            })

            if (nowNode == "#player") {

                setTimeout(function () {

                    let youkuAd = document.querySelector('.advertise-layer');

                    let ykAd = youkuAd.lastChild;

                    ykAd.parentNode.removeChild(ykAd);

                    document.querySelector('.kui-dashboard-0').style = 'display:flex';

                    let playVideo = document.querySelector('.video-layer video');

                    playVideo.play();

                    let n = 0;

                    document.querySelector('.kui-play-icon-0').addEventListener('click', function () {

                        let video = document.querySelector('.video-layer video');

                        if (n++ % 2 == 0) {

                            video.pause();

                        } else {

                            video.play();
                        }

                    });

                    playVideo.addEventListener('timeupdate', function () {

                        let youkuAd = document.querySelector('.advertise-layer');

                        let ykAd = youkuAd.lastChild;


                        if (ykAd) {

                            ykAd.parentNode.removeChild(ykAd);
                        }

                        document.querySelector('.kui-dashboard-0').style = 'display:flex';
                    });

                    document.onkeydown = function (event) {
                        let video = document.querySelector('.video-layer video');

                        if (event.keyCode == 39) {

                            video.currentTime = video.currentTime + 5;

                        }
                        if (event.keyCode == 37) {

                            video.currentTime = video.currentTime - 5;

                        }

                        if (event.keyCode == 32) {

                            if (n++ % 2 == 0) {

                                video.pause();

                            } else {

                                video.play();
                            }
                        }
                    }

                }, 3000)
            }
            if (nowNode == "#flashbox") {

                setTimeout(function () {

                    let dom = document.querySelector('.skippable-after');

                    if (dom) {

                        dom.click();

                    }

                }, 3000)

            }

            if (nowNode == "#player-container") {

                let n = 0;

                let timer = setInterval(function () {

                    if (n++ < 100) {

                        let panelTipVip = document.querySelector('.panel-overlay');

                        if (panelTipVip) {

                            panelTipVip.style.display = 'none';

                            clearInterval(timer);
                        }

                        let panelTipVip2 = document.querySelector('.panel-tip-pay');

                        if (panelTipVip2) {

                            panelTipVip2.style.display = 'none';

                            clearInterval(timer);

                        }

                    } else {

                        clearInterval(timer);

                    }

                }, 100)


            }
            if (nowNode == "#le_playbox") {

                setTimeout(function () {

                    let jBlock = document.querySelectorAll('.j_block');

                    if (!jBlock) return;

                    for (let i = 0; i < jBlock.length; i++) {

                        let videoId = jBlock[i].getAttribute('data-vid');

                        let link = `https://www.le.com/ptv/vplay/${videoId}.html`;

                        jBlock[i].firstChild.setAttribute('href', link);
                    }
                }, 3000)
            }

            if (nowNode == ".player-container") {

                setTimeout(function () {

                    if (!document.querySelector('.player-container') && !document.querySelector('.bpx-player-container')) {

                        nowNode = '.player-mask';

                    } else {

                        nowNode = '.bpx-player-container';
                    }

                }, 3000)
            }

            if (nowName == 'qqPC') {

                let figure = document.querySelectorAll('.figure');

                let figureDetail = document.querySelectorAll('.figure_detail');

                let listItem = [...figure, ...figureDetail];

                if (listItem.length > 0) {

                    listItem.forEach(function (item) {

                        item.addEventListener('click', function () {

                            let link = this.getAttribute('href');

                            if (link) {

                                location.href = link;

                                return;
                            }

                        })

                    });

                }

            }
            setTimeout(function () {

                let videoSelect = document.querySelectorAll('.' + jxVideoWeb[0].areaClassName);

                if (videoSelect.length == 0) {
                    console.log('该网站播放区类名改变');
                    return;
                }

                videoSelect.forEach(function (item) {

                    item.addEventListener('click', function (e) {


                        setTimeout(function () {

                            location.href = location.href;

                        }, 1000)

                    });

                });

            }, 2000);
        }

    }

    playVideoFunc();
})
();