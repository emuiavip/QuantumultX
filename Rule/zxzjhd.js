/*************************************

项目名称：在线之家-净化/去广告
下载地址：https://t.me/Tmxios
脚本作者：枭木
电报频道：https://t.me/Tmxios
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************


[rewrite_local]
^https?:\/\/www\.zxzjhd\.com\/($|[0-9a-zA-Z=_/-]+\.html$) url script-response-body https://raw.githubusercontent.com/ddgksf2013/Scripts/master/adguard.js

[mitm]
hostname = www.zxzjhd.com




var body = $response.body.replace(
      .module-adslist, 
      .player-rm > a[target="_blank"],
      #popup,
      .container-slide,
      a[href*="/dsf88.cc"]{
        display: none !important;
      }
);
$done({ body });
