// ==UserScript==
// @name           破解VIP会员视频-优化整理版
// @namespace      https://github.com/cyao2q/files
// @version        1.1.9
// @description    一键破解[优酷|腾讯|乐视|爱奇艺]等会员视频
// @author         漠星曜
// @license        MIT
// @downloadURL    https://cyao2q.github.io/files/script/crackvideo.user.js
// @require        https://code.jquery.com/jquery-latest.js
// @noframes
// @match          *://*.iqiyi.com/*
// @match          *://*.youku.com/*
// @match          *://*.le.com/*
// @match          *://*.letv.com/*
// @match          *://v.qq.com/*
// @match          *://*.tudou.com/*
// @match          *://*.mgtv.com/*
// @match          *://film.sohu.com/*
// @match          *://tv.sohu.com/*
// @match          *://*.acfun.cn/v/*
// @match          *://*.bilibili.com/*
// @match          *://vip.1905.com/play/*
// @match          *://*.pptv.com/*
// @match          *://v.yinyuetai.com/video/*
// @match          *://v.yinyuetai.com/playlist/*
// @match          *://*.fun.tv/vplay/*
// @match          *://*.wasu.cn/Play/show/*
// @match          *://*.56.com/*
// @grant          GM.getValue
// @grant          GM.setValue
// @grant          GM_getValue
// @grant          GM_setValue
// @grant          unsafeWindow
// @grant          GM_xmlhttpRequest
// @grant          GM.xmlHttpRequest
// @grant          GM_openInTab
// @grant          GM.openInTab
// ==/UserScript==

/* jshint esversion:6 */

(() => {
  'use strict';
  const YoukuIcon = '<svg width="1.2em" height="1.2em" viewbox="0 0 72 72"><defs><circle id="youkuC1" r="5.5" style="stroke:none;;fill:#0B9BFF;"></circle><path id="youkuArow" d="m0,10 a5,5 0,0,1 0,-10 h20 a5,5 0,0,1 0,10z" style="fill:#FF4242;"></path></defs><circle cx="36" cy="36" r="30.5" style="stroke:#30B4FF;stroke-width:11;fill:none;"></circle><use x="10.5" y="19" xlink:href="#youkuC1"/><use x="61.5" y="53" xlink:href="#youkuC1"/><use x="39" y="1" transform="rotate(30)" xlink:href="#youkuArow"/><use x="-1" y="52" transform="rotate(-35)" xlink:href="#youkuArow"/></svg>';
  const VQQIcon = '<svg height="1.2em" width="1.2em" viewbox="0 0 185 170"><defs><path id="vQQ" d="M7 20Q14 -10 55 7Q100 23 145 60Q170 80 145 102Q108 138 47 165Q15 175 4 146Q-5 80 7 20"></path></defs><use style="fill:#44B9FD;" transform="translate(27,0)" xlink:href="#vQQ"></use><use style="fill:#FF9F01;" transform="translate(0,18),scale(0.8,0.75)" xlink:href="#vQQ"></use><use style="fill:#97E61B;" transform="translate(23,18),scale(0.80.75)" xlink:href="#vQQ"></use><use style="fill:#fff;" transform="translate(50,45),scale(0.4)" xlink:href="#vQQ"></use></svg>';
  var tMscript = document.createElement('script');
  tMscript.innerText = `q = function(cssSelector){return document.querySelector(cssSelector);};qa = function(cssSelector){return document.querySelectorAll(cssSelector);};`;
  document.head.appendChild(tMscript);
  window.q = function(cssSelector) {return document.querySelector(cssSelector);};
  window.qa = function(cssSelector) {return document.querySelectorAll(cssSelector);};
  window.makeEl = function(tag){return document.createElement(tag);};
  
  /* 兼容 Tampermonkey | Violentmonkey | Greasymonkey 4.0+ */
  function GMaddStyle(cssText){
    let a = document.createElement('style');
    a.textContent = cssText;
    let doc = document.head || document.documentElement;
    doc.appendChild(a);
  }
  
  GMaddStyle(`
    /*TMHY:TamperMonkeyHuanYan*/
    #TMHYvideoContainer{z-index:999998;background:rgba(0,0,0,.7);position:fixed;top:7em;left:5em;height:65%;width:65%;resize:both;overflow:auto;box-shadow:2px 2px 5px 5px rgba(255,255,0,.8);}
    /*TMHYVideoContainer*/
    #TMHYvideoContainer button{top:.1em;cursor:pointer;visibility:hidden;font-size:3em;color:#fff;background:transparent;border:0;}
    #TMHYvideoContainer:hover button{visibility:visible;}
    #TMHYvideoContainer:hover button:hover{color:#ff0;}
    #TMHYiframe{height:100%;width:100%;overflow:auto;position:absolute;top:0;left:0;margin:auto;border:0;box-shadow:0 0 3em rgba(0,0,0,.4);z-index:-1;}
    /*TMHYIframe*/
    #TMHYul{position:fixed;top:5em;left:0;padding:0;z-index:999999;}
    #TMHYul li{list-style:none;}
    #TMHYul svg{float:right;}
    .TM1{opacity:0.8;position:relative;width:1.9em;cursor:pointer;}
    .TM1:hover{opacity:1;}
    .TM1 span{display:block;border-radius:0 .3em .3em 0;background-color:#ffff00;border:0;font:bold 1em "微软雅黑"!important;color:#ff0000;margin:0;padding:1em .3em;}
    .TM3{position:absolute;top:0;left:1.8em;display:none;border-radius:.3em;margin:0;padding:0;}
    .TM3 li{float:none;margin:0;font-size:1.25em;padding:.25em 1em;cursor:pointer;color:#3a3a3a!important;background:rgba(255,255,0,0.8);}
    .TM3 li:hover{color:white!important;background:rgba(0,0,0,.8);}
    .TM3 li:last-child{border-radius:0 0 .35em .35em;}
    .TM3 li:first-child{border-radius:.35em .35em 0 0;}
    .TM1:hover .TM3{display:block;}
  `);
  
  var defaultapi = {
    title: "Parwix解析",
    url: "https://jx.jsonplayer.com/player/?url="
  };
  
  var apis =[
    {title:"parwix",url:"https://jx.jsonplayer.com/player/?url="},
    {title:"xmflv",url:"https://jx.xmflv.com/?url="},
    {title:"m1907",url:"https://im1907.top/?jx="},
    {title:"bljiex",url:"https://vip.bljiex.com/?v="},
    {title:"xyflv",url:"https://jx.xyflv.com/?url="},
    {title:"aidouer",url:"https://jx.aidouer.net/?url="},
    {title:"m3u8",url:"https://jx.m3u8.tv/jiexi/?url="},
    {title:"ckmov",url:"https://www.ckmov.vip/api.php?url="},
    {title:"zui",url:"https://jx.zui.cm/?url="},
    {title:"mtosz",url:"https://www.mtosz.com/erzi.php?url="}
  ];

  /*  执行  */
  var div = makeEl("div");
  div.id = "TMHYd";
  var txt = '', i = 0;
  /*提供的接口列表*/
  for (i in apis) {
    txt += `<li data-order=${i} data-url="${apis[i].url}" title="${apis[i].title}" onclick="window.open(this.dataset.url+location.href)">${apis[i].title}</li>`;
  }
  div.innerHTML = `
    <ul id="TMHYul">
      <li class="TM1"><span id="TMList" title="${defaultapi.title}" onclick="window.open(\'${defaultapi.url}\'+window.location.href)">▶</span><ul class="TM3 TM4">${txt}</ul></li>
    </ul>
  `;
  document.body.appendChild(div);
})();