// ==UserScript==
// @name         蓝奏云网盘增强
// @version      1.5.8
// @author       X.I.U
// @description  文件排序、刷新不回根目录、快捷返回上一级（右键网页空白处）、后退返回上一级、右键文件显示菜单、点击直接下载文件、点击空白进入目录、自动显示更多文件、一键复制所有分享链接、自定义分享链接域名、自动打开/复制分享链接、带密码的分享链接自动输密码、拖入文件自动显示上传框、输入密码后回车确认、优化编辑框初始大小
// @match        *://lanzou.com/u
// @match        *://www.lanzou.com/u
// @match        *://www.lanzou.com/account.php*
// @match        *://up.woozooo.com/u
// @match        *://up.woozooo.com/mydisk.php*
// @match        *://pc.woozooo.com/u
// @match        *://pc.woozooo.com/mydisk.php*
// @match        *://pan.lanzou.com/*
// @match        *://*.lanzoub.com/*
// @match        *://*.lanzoue.com/*
// @match        *://*.lanzouf.com/*
// @match        *://*.lanzouh.com/*
// @match        *://*.lanzoui.com/*
// @match        *://*.lanzouj.com/*
// @match        *://*.lanzoul.com/*
// @match        *://*.lanzoum.com/*
// @match        *://*.lanzouo.com/*
// @match        *://*.lanzoup.com/*
// @match        *://*.lanzouq.com/*
// @match        *://*.lanzout.com/*
// @match        *://*.lanzouu.com/*
// @match        *://*.lanzouv.com/*
// @match        *://*.lanzouw.com/*
// @match        *://*.lanzoux.com/*
// @match        *://*.lanzouy.com/*
// @match        *://*.lanzob.com/*
// @match        *://*.lanzoe.com/*
// @match        *://*.lanzof.com/*
// @match        *://*.lanzoh.com/*
// @match        *://*.lanzoi.com/*
// @match        *://*.lanzoj.com/*
// @match        *://*.lanzol.com/*
// @match        *://*.lanzom.com/*
// @match        *://*.lanzoo.com/*
// @match        *://*.lanzop.com/*
// @match        *://*.lanzoq.com/*
// @match        *://*.lanzot.com/*
// @match        *://*.lanzov.com/*
// @match        *://*.lanzow.com/*
// @match        *://*.lanzox.com/*
// @match        *://*.lanzoy.com/*
// @match        *://*.lanzb.com/*
// @match        *://*.lanze.com/*
// @match        *://*.lanzf.com/*
// @match        *://*.lanzh.com/*
// @match        *://*.lanzi.com/*
// @match        *://*.lanzj.com/*
// @match        *://*.lanzl.com/*
// @match        *://*.lanzm.com/*
// @match        *://*.lanzn.com/*
// @match        *://*.lanzo.com/*
// @match        *://*.lanzp.com/*
// @match        *://*.lanzq.com/*
// @match        *://*.lanzt.com/*
// @match        *://*.lanzv.com/*
// @match        *://*.lanzw.com/*
// @match        *://*.lanzx.com/*
// @match        *://*.lanzy.com/*
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABZ0lEQVR4nJ2TvW4UQRCEv+q9H8wGwFlIOEQQIRmnCIcnEidkSAQYEpwQIPEoZPgliB04IiW15JRXAMkne3e6COaMZe7HiEqmpzVV01PTLR9g1kIAGNdYQgrIAmliPfkSRghFQEk46yGB8S0GN3IF9fKAWYHJJjzbx0/30P1H/yBggwKfF9h5gfa/wObDeV6LAkYQDWTWq5shml3A9hR9+AqjFrLMnVkigECzHhqgEf51Affuotef8ahF2UNc0QZ/s9UZnr/Cu+/Q8DZ8O8TDDbT1pDof1ylXu2iqSdP38OYQ2VhCj3dh9rM+LhY/rQooII3bMUw/1veVrhIU0E5WehxWQILPEjRC7QQDbga1XKk6vgIDuoRxi/bews5LvHGnFqU/DXDZjMuRnx44T49t2860nc756rSzL/P8cpAnRzUqnV36hQOlO7ezrBRQ2pYLEFigtfUuMRHAiptGcrWAfnyvk/afEr8Bt+re7W42OSoAAAAASUVORK5CYII=
// @grant        GM_xmlhttpRequest
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_openInTab
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_notification
// @grant        GM_setClipboard
// @grant        unsafeWindow
// @sandbox      JavaScript
// @noframes
// @license      GPL-3.0 License
// @run-at       document-end
// @namespace    https://github.com/XIU2/UserScript
// @supportURL   https://github.com/XIU2/UserScript
// @homepageURL  https://github.com/XIU2/UserScript
// ==/UserScript==

(function() {
    'use strict';
    var menu_ALL = [
        ['menu_customFileSha', '自定义分享链接域名', '自定义分享链接域名', ''],
        ['menu_open_fileSha', '自动打开分享链接', '自动打开分享链接', true],
        ['menu_copy_fileSha', '自动复制分享链接', '自动复制分享链接', true],
        ['menu_refreshCorrection', '刷新不返回根目录', '刷新不返回根目录', true],
        ['menu_rightClickMenu', '右键文件显示菜单', '右键文件显示菜单', true],
        ['menu_directDownload', '点击直接下载文件 (分享链接列表页)', '点击直接下载文件', true],
        ['menu_folderDescdesMenu', '优化编辑框初始大小', '优化编辑框初始大小', true],
        ['menu_fileSort', '文件排序', '文件排序', true]
    ], menu_ID = [], lastFolderID;
    for (let i=0;i<menu_ALL.length;i++){ // 如果读取到的值为 null 就写入默认值
        if (GM_getValue(menu_ALL[i][0]) == null){GM_setValue(menu_ALL[i][0], menu_ALL[i][3])};
    }
    registerMenuCommand();

    // 注册脚本菜单
    function registerMenuCommand() {
        if (menu_ID.length > menu_ALL.length){ // 如果菜单ID数组多于菜单数组，说明不是首次添加菜单，需要卸载所有脚本菜单
            for (let i=0;i<menu_ID.length;i++){
                GM_unregisterMenuCommand(menu_ID[i]);
            }
        }
        for (let i=0;i<menu_ALL.length;i++){ // 循环注册脚本菜单
            menu_ALL[i][3] = GM_getValue(menu_ALL[i][0]);
            if (menu_ALL[i][0] == 'menu_refreshCorrection') {
                menu_ID[i] = GM_registerMenuCommand(`${menu_ALL[i][3]?'✅':'❌'} ${menu_ALL[i][1]}`, function(){if(menu_value('menu_refreshCorrection')){UNrefreshCorrection();}else{refreshCorrection();};menu_switch(`${menu_ALL[i][3]}`,`${menu_ALL[i][0]}`,`${menu_ALL[i][2]}`)});
            } else if (menu_ALL[i][0] === 'menu_customFileSha') {
                menu_ID[i] = GM_registerMenuCommand(`#️⃣ ${menu_ALL[i][1]}`, function(){customFileSha()});
            } else {
                menu_ID[i] = GM_registerMenuCommand(`${menu_ALL[i][3]?'✅':'❌'} ${menu_ALL[i][1]}`, function(){menu_switch(`${menu_ALL[i][3]}`,`${menu_ALL[i][0]}`,`${menu_ALL[i][2]}`)});
            }
        }
        menu_ID[menu_ID.length] = GM_registerMenuCommand('💬 反馈 & 建议', function () {window.GM_openInTab('https://github.com/XIU2/UserScript#xiu2userscript', {active: true,insert: true,setParent: true});window.GM_openInTab('https://greasyfork.org/zh-CN/scripts/419224/feedback', {active: true,insert: true,setParent: true});});
    }

    // 菜单开关
    function menu_switch(menu_status, Name, Tips) {
        if (menu_status == 'true') {
            GM_setValue(`${Name}`, false);
            if (Name == 'menu_refreshCorrection') {
                GM_notification({text: `已关闭 [${Tips}] 功能`, timeout: 3500});
            } else {
                GM_notification({text: `已关闭 [${Tips}] 功能\n（点击刷新网页后生效）`, timeout: 3500, onclick: function(){location.reload();}});
            }
        } else {
            GM_setValue(`${Name}`, true);
            if (Name == 'menu_refreshCorrection') {
                GM_notification({text: `已开启 [${Tips}] 功能`, timeout: 3500});
            } else {
                GM_notification({text: `已开启 [${Tips}] 功能\n（点击刷新网页后生效）`, timeout: 3500, onclick: function(){location.reload();}});
            }
        }
        registerMenuCommand(); // 重新注册脚本菜单
    };

    // 返回菜单值
    function menu_value(menuName) {
        for (let menu of menu_ALL) {
            if (menu[0] == menuName) {
                return menu[3]
            }
        }
    }


    if (window.top.location.pathname === '/u' || window.top.location.pathname.indexOf('account.php') > -1 || window.top.location.pathname.indexOf('mydisk.php') > -1) { // 后台页
        if (window.top.location.href != 'https://pc.woozooo.com/mydisk.php') window.top.location.href = 'https://pc.woozooo.com/mydisk.php';
        RememberLoginStatus() // 通过延长 cookie 到期时间来一直记住登录状态
        var mainframe;
        iframe();
    } else if (window.top.location.pathname.indexOf('%') > -1) { // > 带密码的分享链接页面
        shareLinkWithPassword(); //                                 带密码的分享链接自动输密码
    } else {
        setTimeout(function() { //                                  延迟 300 毫秒（避免网页还没加载完）
            if (document.querySelector('#pwdload,#passwddiv')) { // > 分享链接输入密码页
                enterPassword(); //                                 自动输入密码（仅支持访问 带密码的分享链接 时）
                enterToPass(); //                                   输入密码后回车确认（针对手动输入密码）
            }
            if (document.getElementById('infos')) { //              > 分享链接文件列表页
                fileMoreS(); //                                     自动显示更多文件
                directDownload(); //                                点击直接下载文件（分享链接列表页）
            }
        }, 300);
        directDownload_(); //                                       点击直接下载文件（分享链接列表页）
    }


    // 获取 iframe 框架
    function iframe() {
        mainframe = document.getElementById('mainframe');
        if (mainframe) { //                              只有找到 iframe 框架时才会继续运行脚本
            mainframe = mainframe.contentWindow;
            if (menu_value('menu_refreshCorrection')) refreshCorrection(); // 刷新不返回根目录（F5）
            setTimeout(folderDescdes, 500); //           优化编辑框初始大小
            setTimeout(hideSha, 500); //                 隐藏分享链接窗口（这样自动打开/复制分享链接时，不会一闪而过）
            fobiddenBack(); //                           禁止浏览器返回（并绑定新的返回事件）
            EventXMLHttpRequest(); //                    监听 XMLHttpRequest 事件并执行 [自动显示更多文件]
            setTimeout(clickOpenDirectory, 500); //      点击空白进入目录
            setTimeout(backToTop, 2000); //              快捷返回上级（右键点击 网页右侧/下方 空白处）

            dragEnter(); //                              拖入文件自动显示上传框
            setTimeout(viewTop,1000); //                 监听并修改右键菜单 [外链分享地址] 为 [复制并打开分享链接] / [复制分享链接] / [打开分享链接] 之一
            setTimeout(copyAllfileSha, 500); //          一键复制所有分享链接

            setTimeout(filesSort, 300); //               文件排序
        }
    }


    // 带密码的分享链接自动输密码
    function shareLinkWithPassword() {
        if (location.pathname.indexOf('%E5%AF%86%E7%A0%81') > -1) {
            let shareLink = location.pathname.split('%')
            if (shareLink.length > 0) {
                shareLink = location.origin + shareLink[0]
                let password = location.pathname.replace('%E5%AF%86%E7%A0%81',':').replace(/%([A-Z]|[0-9]){2}/ig, '').split(':')
                if (password.length > 0) {
                    location.replace(shareLink + '?pwd=' + password[password.length - 1])
                }
            }
        }
    }


    // 自动输入密码（仅支持访问 带密码的分享链接 时，比如上面 [带密码的分享链接自动输密码] 功能重定向后的链接）
    function enterPassword() {
        if (location.search.indexOf('?pwd=') > -1 || location.search.indexOf('?passwd=') > -1 || location.search.indexOf('?password=') > -1) {
            let password = location.search.split('=')
            if (password.length > 0) {
                document.getElementById('pwd').value = password[password.length - 1]
                if (document.getElementById('sub')) {
                    document.getElementById('sub').click();
                } else {
                    document.querySelector('.passwddiv-btn[onclick]').click();
                }
            }
        }
    }


    // 刷新不返回根目录（F5）
    function refreshCorrection() {
        document.onkeydown = mainframe.onkeydown = function (e) {
            e = window.event || e;
            if (e.key === 'F5') {
                let folderID = /-?\d+/.exec(mainframe.document.getElementById('filemore').children[0].onclick)
                if(folderID.length > 0){
                    mainframe.folder(folderID[0]);
                    e.returnValue = false;
                    e.cancelBubble = true;
                    return false;
                }
            }
        }
    }


    // 恢复刷新机制
    function UNrefreshCorrection() {
        document.onkeydown = mainframe.onkeydown = function (e) {
            e = window.event || e;
            if (e.key === 'F5') {
                return true;
            }
        }
    }


    // 点击空白进入目录
    function clickOpenDirectory() {
        mainframe.document.getElementById('sub_folder_list').onclick = function(e){
            //console.log(e.target);
            if (e.target.className && e.target.className == 'f_tb') {
                e.target.querySelector('span.follink').click()
            }
        }
    }


    // 右键文件显示菜单
    function rightClickMenu() {
        if (!menu_value('menu_rightClickMenu')) return
        rightClickMenu_('sub_folder_list', 'fols', 'folse') // 文件夹
        rightClickMenu_('filelist', 'fs', 'fse') //            文件
    }


    // 右键文件显示菜单，参数：文件/文件夹列表 ID、菜单 ID、菜单 ID前缀
    function rightClickMenu_(list_id_name, menu_id_name_prefix, list_id_name_prefix) {
        let list_ = mainframe.document.getElementById(list_id_name);
        if (!list_) return //                                文件/文件夹列表
        list_.oncontextmenu = function(e){
            e.preventDefault(); //                           屏蔽浏览器自身右键菜单
            let left = e.pageX - 30; //                      右键菜单弹出位置
            let list_ID = e.target.id;
            if (e.target.nodeName === 'FONT') {
                list_ID = e.target.parentNode.parentNode.id
            } else if(e.target.id === '') {
                list_ID = e.target.parentNode.id
            }
            list_ID = /\d+/.exec(list_ID)
            if(list_ID.length > 0){
                mainframe.document.getElementById(menu_id_name_prefix + list_ID[0]).style.cssText='position: absolute !important; left: ' + left + 'px;' // 修改右键菜单弹出位置（X）
                mainframe.document.getElementById(list_id_name_prefix + list_ID[0]).focus();
                mainframe.document.getElementById(list_id_name_prefix + list_ID[0]).click();
            }
        }
    }


    // 自动显示更多文件（后台页）
    function fileMore() {
        let filemore = mainframe.document.getElementById('filemore'); // 寻找 [显示更多文件] 按钮
        if (filemore && filemore.style.display === 'block') { //         判断按钮是否存在且可见
            if (filemore.children[0]) { //                               判断按钮元素下第一个元素是否存在
                filemore.children[0].click(); //                         点击 [显示更多文件] 按钮
            }
        }
    }


    // 自动显示更多文件（分享链接列表页）
    function fileMoreS() {
        windowScroll(function (direction, e) {
            if (direction === 'down') { // 下滑才准备加载更多
                let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
                let scrollDelta = 500;
                if (document.documentElement.scrollHeight <= document.documentElement.clientHeight + scrollTop + scrollDelta) {
                    let filemore = document.getElementById('filemore'); // 寻找 [显示更多文件] 按钮
                    if (filemore && filemore.style.display != 'none') { // 如果正在加载，就不再点击
                        if (filemore.textContent.indexOf('更多') > -1){ // 避免已经在加载了，重复点击
                            filemore.click(); //                           点击 [显示更多文件] 按钮
                        }
                    }
                }
            }
        });
    }


    // 点击直接下载文件（分享链接列表页）
    function directDownload() {
        if (!menu_value('menu_directDownload')) return
        if (document.getElementById('infos')) {
            document.getElementById('infos').addEventListener('click', function(e) {
                if (e.target.tagName === 'A') { // 针对普通样式的分享链接列表页
                    e.preventDefault(); // 阻止默认打开链接事件
                    GM_openInTab(e.target.href + '#download', {active: false, insert: true, setParent: true}); // 后台打开
                } else { // 针对会员专属样式的分享链接列表页
                    const link = e.target.closest('a'); // 点击 <a> 元素的子元素时，寻找最近的 <a> 父元素
                    if ((link && this.contains(link))) {
                        e.preventDefault(); // 阻止默认打开链接事件
                        GM_openInTab(link.href + '#download', {active: false, insert: true, setParent: true}); // 后台打开
                    }
                }
            });
        }
    }
    // 点击下载按钮
    function directDownload_() {
        if (!menu_value('menu_directDownload')) return
        if (location.hash != '#download') return
        let iframe = document.querySelector('iframe.ifr2, iframe.n_downlink');
        if (iframe) { // 只有找到 iframe 框架时才会继续运行脚本
            iframe = iframe.contentWindow;
            let timer = setInterval(function(){
                if (iframe.document.querySelector('.load [href]')) {
                    //iframe.document.querySelector('.load a[href]').target = '_top'
                    //iframe.document.querySelector('.load a[href]').click();
                    GM_openInTab(iframe.document.querySelector('.load a[href]').href, {active: false, insert: true, setParent: false}); // 后台打开
                    clearInterval(timer);
                    // 关闭该后台标签页
                    if (GM_info.scriptHandler === 'Violentmonkey') { // Violentmonkey 需要延迟一会儿
                        setTimeout(function(){window.top.close();}, 500)
                    } else {
                        window.top.close();
                    }
                }
            }, 10);
        }
    }


    // 滚动条事件
    function windowScroll(fn1) {
        var beforeScrollTop = document.documentElement.scrollTop,
            fn = fn1 || function () {};
        setTimeout(function () { // 延时执行，避免刚载入到页面就触发翻页事件
            window.addEventListener('scroll', function (e) {
                var afterScrollTop = document.documentElement.scrollTop,
                    delta = afterScrollTop - beforeScrollTop;
                if (delta == 0) return false;
                fn(delta > 0 ? 'down' : 'up', e);
                beforeScrollTop = afterScrollTop;
            }, false);
        }, 1000)
    }


    // 优化编辑框初始大小
    function folderDescdes() {
        if (!menu_value('menu_folderDescdesMenu')) return
        mainframe.document.lastChild.appendChild(mainframe.document.createElement('style')).textContent = `#folder_descdes, #fol_credes, #file_desc {margin: 15px 0px; width: 550px; height: 125px;} input#f_ename_new {min-width: 700px; font-size: 14px;} #f_ename {z-index: 999;left: 15px;}`
    }


    // 拖入文件自动显示上传框
    function dragEnter() {
        mainframe.addEventListener('dragenter', function (e) {
            e.preventDefault();
            e.stopPropagation();
            let f_upb = mainframe.document.querySelector('.f_upb')
            if(f_upb.style.top != '-36px') {
                f_upb.style.top = '-36px';
                mainframe.f_upc();
            }
        }, false);
        mainframe.addEventListener('drop', function (e) {
            e.preventDefault();
            //e.stopPropagation();
            //console.log(e.dataTransfer.files)
        });
    }


    // 一键复制所有分享链接
    function copyAllfileSha() {
        var f_data = '', tmep_data = [];
        let f_tp = mainframe.document.getElementById('f_tp');
        //console.log(f_tp, mainframe.document.location.href)
        f_tp.insertAdjacentHTML('afterend', `<a id="f_copyAll" class="f_sela" style="float: right; width: auto; font-size: 12px !important; font: inherit; padding: 2px 10px; margin-top: -25px;" title="获取所有分享链接需要一些时间（取决于有多少文件）。&#10;因为分享链接没有显示在网页上，需要通过网页接口获取，因此为了避免太频繁被限制，所以设置了 300ms 间隔时间！">一键复制所有分享链接</a>`);
        mainframe.document.getElementById('f_copyAll').onclick = function() {
            f_data = ''; tmep_data = [];
            mainframe.document.querySelectorAll('.f_tb').forEach(function (_this) {
                //console.log(_this, _this.id.indexOf('fol') > -1)
                if (_this.id.indexOf('fol') > -1) {
                    //console.log(`task=18&folder_id=${_this.id.replace('fol','')}`)
                    tmep_data.push([`${_this.querySelector('span[id^="folname"]').textContent}`, `task=18&folder_id=${_this.id.replace('fol','')}`])
                } else {
                    //console.log(`task=22&file_id=${_this.id.replace('f','')}`)
                    tmep_data.push([`${_this.querySelector('span[id^="filename"]').textContent}`, `task=22&file_id=${_this.id.replace('f','')}`])
                }
            })
            //console.log(tmep_data)
            if (tmep_data.length > 0) {
                getUrl(0);
                GM_notification({text: '获取所有分享链接需要一些时间（取决于有多少文件），在此期间请不要关闭网页！', timeout: 5000});
            }
        };


        function getUrl(i) {
            //console.log(i)
            GM_xmlhttpRequest({
                url: 'https://pc.woozooo.com/doupload.php',
                method: 'POST',
                data: tmep_data[i][1],
                responseType: 'json',
                overrideMimeType: 'application/json; charset=utf-8',
                headers: {
                    'Referer': mainframe.document.location.href,
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                },
                timeout: 5000,
                onload: function (response) {
                    try {
                        //console.log('返回内容：',response.response)
                        if (response.response && response.response.zt === 1) {
                            //console.log(response.response)
                            if (response.response.info.f_id) {
                                //console.log('文件 1',f_data)
                                f_data += `${tmep_data[i][0]} `
                                if (menu_value('menu_customFileSha')) {
                                    f_data += `https://${menu_value('menu_customFileSha')}/${response.response.info.f_id} `
                                } else {
                                    f_data += `${response.response.info.is_newd}/${response.response.info.f_id} `
                                }
                                if (response.response.info.onof == '1') f_data += `密码:${response.response.info.pwd}`
                                f_data += `\n`
                                //console.log('文件 2',f_data)
                            } else {
                                //console.log('目录 1',f_data)
                                f_data += `${response.response.info.name} `
                                if (menu_value('menu_customFileSha')) {
                                    f_data += `${response.response.info.new_url.replace(/\/\/.+\//i, '//' + menu_value('menu_customFileSha') + '/')} `
                                } else {
                                    f_data += `${response.response.info.new_url} `
                                }
                                if (response.response.info.onof == '1') f_data += `密码:${response.response.info.pwd}`
                                f_data += `\n`
                                //console.log('目录 2',f_data)
                            }
                            if (++i < tmep_data.length) {
                                setTimeout(function(){getUrl(i);}, 300);
                            } else {
                                console.log(f_data)
                                GM_setClipboard(f_data, 'text');
                                GM_notification({text: '✅ 已复制所有文件/目录的分享链接到剪切板~', timeout: 2000});
                            }
                        } else {
                            GM_notification({text: '❌ 更新失败，请联系作者解决...', timeout: 5000});
                        }
                    } catch (e) {
                        console.log(e);
                    }
                }
            })
        }
    }

    // 分享链接相关（点击文件时）
    function fileSha() {
        var f_sha = mainframe.document.getElementById('f_sha'); //                      寻找分享链接（下载链接）信息框
        if (f_sha && f_sha.style.display === 'block') { //                              判断信息框是否存在且可见
            let f_sha1 = mainframe.document.getElementById('f_sha1'); //                获取分享链接（下载链接）
            if (f_sha1 && f_sha1.textContent != '') { //                                确保分享链接（下载链接）不是空
                // 自定义分享链接域名
                if (menu_value('menu_customFileSha')) {f_sha1.innerText = f_sha1.innerText.replace(/\/\/.+\//i, '//' + menu_value('menu_customFileSha') + '/');}
                // 打开分享链接
                if (menu_value('menu_open_fileSha')) {f_sha.style.display = 'none';GM_openInTab(f_sha1.textContent.split('非会员')[0].trim(), {active: true,insert: true,setParent: true});}
                // 复制分享链接（并已复制的提示信息）
                if (menu_value('menu_copy_fileSha')) {f_sha.style.display = 'none';GM_setClipboard(f_sha1.textContent.split('非会员')[0].trim(), 'text');GM_notification({text: '已复制分享链接~', timeout: 2000});}
                // 直接下载文件
                //if (menu_value('menu_directDownload')) {f_sha.style.display = 'none';GM_openInTab(f_sha1.textContent + '#download', {active: false,insert: true,setParent: true});}
            }
        }
    }


    // 自定义分享链接域名
    function customFileSha() {
        let newDomain = prompt('请输入 [自定义分享链接域名]，点击确定后立即生效\n蓝奏云分享链接末尾的 ID 是唯一的，而前面的域名用谁的都一样\n示例：pan.lanzoui.com 或 wwe.lanzoui.com 或 xiu.lanzoui.com', GM_getValue('menu_customFileSha'));
        if (newDomain === '') {
            GM_setValue('menu_customFileSha', '');
            registerMenuCommand(); // 重新注册脚本菜单
        } else if (newDomain != null) {
            GM_setValue('menu_customFileSha', newDomain);
            registerMenuCommand(); // 重新注册脚本菜单
        }
    }


    // 隐藏分享链接窗口（这样自动打开/复制分享链接时，不会一闪而过）
    function hideSha(){
        if (menu_value('menu_open_fileSha') || menu_value('menu_copy_fileSha')) { // [自动复制分享链接] 或 [自动打开分享链接] 任意一个功能开启时才继续
            mainframe.document.lastElementChild.appendChild(document.createElement('style')).textContent = '#f_sha {display: none !important;}';
        }
    }


    // 禁止浏览器返回（并绑定新的返回事件）
    function fobiddenBack() {
        history.pushState(null, null, document.URL);
        window.addEventListener('popstate',backEvent)
    }


    // 允许浏览器返回
    function enableBack() {
        history.go(-1);
        window.removeEventListener('popstate',backEvent)
    }


    // 浏览器后退事件函数
    function backEvent() {
        if (lastFolderID) {
            mainframe.folder(lastFolderID);
        }
        history.pushState(null, null, document.URL);
    }


    // 获取上个文件夹 ID（用于浏览器后退事件）
    function getLastFolderID() {
        lastFolderID = null
        let f_tpspan = mainframe.document.querySelectorAll('span.f_tpspan');
        if (f_tpspan.length > 1) {
            lastFolderID = /-?\d+/.exec(f_tpspan[f_tpspan.length - 2].getAttribute('onclick'))[0];
        }
    }


    // 输入密码后回车确认
    function enterToPass() {
        document.getElementById('pwd').onkeydown = function(e){
            if (e.key === 'Enter') {
                document.getElementById('sub').click();
            }
        };
    }


    // 快捷返回上级（右键点击 网页右侧/下方 空白处）
    function backToTop() {
        mainframe.document.getElementById('container').oncontextmenu = mainframe.document.body.oncontextmenu = function(e){
            if (e.target == this) {
                e.preventDefault();
                backEvent();
            }
        }
    }


    // 监听 XMLHttpRequest 事件并执行
    function EventXMLHttpRequest() {
        var _send = mainframe.XMLHttpRequest.prototype.send
        function sendReplacement(data) {
            setTimeout(fileMore, 200); // 自动显示更多文件
            setTimeout(fileSha, 200); // 自动打开分享链接（点击文件时）
            setTimeout(rightClickMenu, 500); // 右键文件显示菜单
            setTimeout(getLastFolderID, 200); // 获取上个文件夹 ID（用于浏览器后退事件）
            return _send.apply(this, arguments);
        }
        mainframe.XMLHttpRequest.prototype.send = sendReplacement;
    }


    // 监听并修改右键菜单 [外链分享地址] 为 [复制并打开分享链接] / [复制分享链接] / [打开分享链接] 之一
    function viewTop() {
        const callback = (mutationsList, observer) => {
            for (const mutation of mutationsList) {
                for (const target of mutation.addedNodes) {
                    if (target.nodeType != 1) return
                    if (target.className === 'f_view') {
                        //console.log(target)
                        let f_viewtop = target.querySelector('.f_viewtop');
                        if (f_viewtop && f_viewtop.textContent === '外链分享地址') {
                            if (menu_value('menu_open_fileSha') && menu_value('menu_copy_fileSha')) {
                                f_viewtop.textContent = '复制并打开分享链接';
                            } else if (menu_value('menu_open_fileSha')) {
                                f_viewtop.textContent = '打开分享链接';
                            } else if (menu_value('menu_copy_fileSha')) {
                                f_viewtop.textContent = '复制分享链接';
                            }
                        }
                    }
                }
            }
        };
        const observer = new MutationObserver(callback);
        observer.observe(mainframe.document, { childList: true, subtree: true });
    }

    // 通过延长 cookie 到期时间来一直记住登录状态
    function RememberLoginStatus() {
        // 获取 Cookie
        function getCookie(name) {
            if (!name) return ''
            let arr = document.cookie.split(';');
            name += '=';
            for (let i=0; i<arr.length; i++) {let now = arr[i].trim();if (now.indexOf(name) == 0) return now.substring(name.length, now.length);}
            return '';
        }

        const ylogin = getCookie('ylogin'), phpdisk_info = getCookie('phpdisk_info')
        if (ylogin !== '' && phpdisk_info !== '') { // 如果已登录(有相应 cookie)，那么就延长至浏览器支持的到期时间上限（不同浏览器对到期时间的限制不一样，一般是 1-5 年）
            document.cookie='ylogin=' + ylogin + '; domain=.woozooo.com; expires=Thu, 18 Dec 2099 12:00:00 GMT; path=/'
            document.cookie='phpdisk_info=' + phpdisk_info + '; domain=pc.woozooo.com; expires=Thu, 18 Dec 2099 12:00:00 GMT; path=/'
        }
    }

    // 文件排序
    function filesSort() {
        const frame = mainframe;
        const frameDoc = frame.document;

        const currentStatus = {
            by: 'time',
            order: 'desc',
        }

        let allButtons = undefined;

        // 文件名排序
        function sortByName(name1, name2) {
            function sort(a, b) {
                const strA = a.toLocaleLowerCase().split('');
                const strB = b.toLocaleLowerCase().split('');
                for (let i = 0; i < strA.length; i++) {
                    if (strA[i] === strB[i]) {
                        continue;
                    }
                    if (strB[i] === undefined) return 1;
                    if (notChinese(strA[i]) && notChinese(strB[i])) {
                        return strA[i] < strB[i] ? -1 : 1;
                    } else if (notChinese(strA[i])) {
                        return -1;
                    } else if (notChinese(strB[i])) {
                        return 1;
                    } else {
                        return strA[i].localeCompare(strB[i]);
                    }
                }
                if (strA.length === strB.length) {
                    return 0;
                } else if (strA.length < strB.length) {
                    return -1;
                }
                return 1;
            }
            function notChinese(char) {
                const charCode = char.charCodeAt(0)
                return charCode >= 0 && charCode <= 128
            }
            return sort(name1, name2);
        }

        // 创建排序按鈕
        function createAllButtons() {
            const tabTitle = frameDoc.querySelector('#container > div.n1 > div.f_th');
            const name = tabTitle.querySelector('div.f_name');
            const size = tabTitle.querySelector('div.f_size');
            const time = tabTitle.querySelector('div.f_time');
            const down = tabTitle.querySelector('div.f_down'); // 下载量
            return {
                name: {
                    el: createButton(name, 'name', '按 文件名称 排序'),
                    order: 'asc',
                },
                size: {
                    el: createButton(size, 'size', '按 文件大小 排序'),
                    order: 'asc',
                },
                time: {
                    el: createButton(time, 'time', '按 上传时间 排序'),
                    order: 'asc',
                },
                down: {
                    el: createButton(down, 'down', '按 下载次数 排序'),
                    order: 'asc',
                }
            };
        }
        function createButton(element, by, title) {
            // element.insertAdjacentHTML('beforeend', '<a class="col_sort_btn" href="javascript: void;" style="font-size: 16px; float: right;">⇧</a>');
            let button = frameDoc.createElement('a');
            button.className = 'col_sort_btn';
            button.href = 'javascript: void(0);';
            button.style.fontSize = '16px';
            button.style.float = 'right';
            if (by == 'name') {button.style.float = 'left';}
            button.title = title;
            button.textContent = '⇧';
            button.onclick = () => clickSortButton(by, button);
            element.appendChild(button);
            return button;
        }


        function getFiles() {
            const list = frameDoc.querySelector('#filelist');
            const files = list.childNodes;
            const filesInfo = [];
            const now = new Date();
            for (const file of files) {
                const name = file.querySelector('.f_name > span.aspanlink > .f_name_title').textContent;
                const size = parseByteSize(file.querySelector('.f_size').textContent);
                const time = file.querySelector('.f_time').textContent;
                const down = parseInt(file.querySelector('.f_down').textContent);
                filesInfo.push({
                    info: {
                        name: name,
                        size: size,
                        time: parseTime(now, time),
                        down: down
                    },
                    node: file
                })
            }
            return filesInfo;
        }

        function getFolders() {
            const list = frameDoc.querySelector('#sub_folder_list');
            const folders = list.childNodes;
            const foldersInfo = [];
            for (const folder of folders) {
                const name = folder.querySelector('.f_tb > .f_name2 > span.follink > span').textContent;
                foldersInfo.push({
                    info: {
                        name: name,
                    },
                    node: folder
                })
            }
            return foldersInfo;
        }
        // 转换文件大小
        function parseByteSize(text) {
            const unit = ['B', 'K', 'M', 'G', 'T'];
            let size = 0;
            for (let i = 0; i < unit.length; i++) {
                if (text.indexOf(unit[i]) > -1) {
                    size = parseFloat(text.replace(unit[i], '')) * Math.pow(1024, i);
                    break;
                }
            }
            return size;
        }
        // 转换时间格式
        function parseTime(now, text) {
            function parseDay(time) {
                const days = [
                    {
                        name: '前天',
                        offset: -2,
                    },
                    {
                        name: '昨天',
                        offset: -1,
                    }
                ];
                const date = new Date(now.getTime());
                let index = -1;
                for (let i = 0; i < days.length; i++) {
                    if (time.indexOf(days[i].name) > -1) {
                        index = i;
                        break;
                    }
                }
                if (index === -1) return new Date(now.getTime());
                const hourAndMinute = text.replace(days[index].name, '').split(':');
                const hour = parseInt(hourAndMinute[0]);
                const minute = parseInt(hourAndMinute[1]);
                date.setDate(date.getDate() + days[index].offset);
                date.setHours(hour);
                date.setMinutes(minute);
                // 蓝奏云显示比较奇怪，超过24小时，未满48小时，都是昨天，并不以每天0点作为分界
                if (hour * 60 + minute > now.getHours() * 60 + now.getMinutes()) {
                    date.setDate(date.getDate() - 1);
                }
                return date;
            }
            if (text.indexOf('秒前') > -1) {
                return now.getTime() - parseInt(text.replace('秒前', '')) * 1000;
            } else if (text.indexOf('分钟前') > -1) {
                return now.getTime() - parseInt(text.replace('分钟前', '')) * 60 * 1000;
            } else if (text.indexOf('小时前') > -1) {
                return now.getTime() - parseInt(text.replace('小时前', '')) * 60 * 60 * 1000;
            } else if (text.indexOf('昨天') > -1 || text.indexOf('前天') > -1) {
                return parseDay(text).getTime();
            } else if (text.indexOf('天前') > -1) {
                return now.getTime() - parseInt(text.replace('天前', '')) * 24 * 60 * 60 * 1000;
            } else if (text.indexOf('月前') > -1) { // 我不知道有没有以下几种情况，暂时先写上
                return now.getTime() - parseInt(text.replace('月前', '')) * 30 * 24 * 60 * 60 * 1000;
            } else if (text.indexOf('年前') > -1) {
                return now.getTime() - parseInt(text.replace('年前', '')) * 365 * 24 * 60 * 60 * 1000;
            }
            return Date.parse(text);
        }

        // 排序
        function sortItems(files, by, order) {
            let compareFunc;
            if (by === 'name') {
                compareFunc = (a, b) => {
                    return (order === 'asc' ? 1 : -1) * sortByName(a.info.name, b.info.name);
                }
            } else {
                compareFunc = (a, b) => {
                    const result = a.info[by] > b.info[by] ? 1 : -1;
                    return (order === 'asc' ? 1 : -1) * result;
                }
            }
            files.sort(compareFunc);
        }

        function sortFileList() {
            const files = getFiles();
            if (files.length > 0) {
                sortItems(files, currentStatus.by, currentStatus.order);
                // console.log(files)
                const fileList = frameDoc.querySelector('#filelist');
                for (let i = 0; i < files.length; i++) {
                    fileList.appendChild(files[i].node);
                }
            }
        }

        function sortFolderList() {
            const folders = getFolders();
            // console.log(folders);
            if (folders.length > 0) {
                // 文件夹只能按名称排序
                if (currentStatus.by === 'name') {
                    sortItems(folders, 'name', currentStatus.order);
                } else {
                    sortItems(folders, 'name', 'asc'); // 其他情况，皆按名称升序
                }
                const folderList = frameDoc.querySelector('#sub_folder_list');
                for (let i = 0; i < folders.length; i++) {
                    folderList.appendChild(folders[i].node);
                }
            }
        }

        function fileListCallback(records) {
            if (!menu_value('menu_fileSort')) return;
            for (const event of records) {
                // 自己修改的时候不排序
                if (event.removedNodes.length > 0) return;
            }
            sortFileList();
        }

        function folderListCallback(records) {
            if (!menu_value('menu_fileSort')) return;
            for (const event of records) {
                // 自己修改的时候不排序
                if (event.removedNodes.length > 0) return;
            }
            sortFolderList();
        }

        function clickSortButton(by, button) {
            if (currentStatus.by === by) {
                // 当前选项，点击时，反转排序
                currentStatus.order = button.textContent === '⬆' ? 'desc' : 'asc';
            } else {
                // 非当前选项，点击时，以图标所示的顺序排序
                currentStatus.order = button.textContent === '⇧' ? 'asc' : 'desc';
                // 修改非当前选项按钮的图标
                for (const key in allButtons) {
                    if (key === by) continue;
                    if (Object.hasOwnProperty.call(allButtons, key)) {
                        const btnItem = allButtons[key];
                        if (btnItem.el.textContent === '⬆') {
                            btnItem.el.textContent = '⇧';
                        } else if (btnItem.el.textContent === '⬇') {
                            btnItem.el.textContent = '⇩';
                        }
                    }
                }
            }
            button.textContent = currentStatus.order === 'asc' ? '⬆' : '⬇';
            currentStatus.by = by;
            sortFileList();
            sortFolderList();

        }

        // create buttons
        setTimeout(() => {
            if (allButtons === undefined && menu_value('menu_fileSort')) {
                allButtons = createAllButtons();
                // console.log(allButtons);
                allButtons[currentStatus.by].el.textContent = currentStatus.order === 'asc' ? '⬆' : '⬇';
            }
        }, 500);

        // sort files
        const fileList = frameDoc.querySelector('#filelist');
        const fileObserver = new MutationObserver(fileListCallback);
        fileObserver.observe(fileList, { childList: true, attributes: false });

        // sort folders
        const folderList = frameDoc.querySelector('#sub_folder_list');;
        const folderObserver = new MutationObserver(folderListCallback);
        folderObserver.observe(folderList, { childList: true, attributes: false });


    }
})();