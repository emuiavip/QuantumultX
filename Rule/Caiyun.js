/*************************************

项目名称：彩云天气-净化/SVIP
下载地址：https://t.me/Tmxios
脚本作者：枭木
电报频道：https://t.me/Tmxios
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************/

[rewrite_local]
^https?:\/\/(biz|wrapper)\.cyapi\.cn\/(.+\/(user.+|visitors|activity)|p\/v\d\/vip_info) url script-response-body https://raw.githubusercontent.com/emuiavip/QuantumultX/main/Rule/Caiyun.js
^http:\/\/adx\.sogaha\.cn\/sdk\/ad\/get url reject-200

[mitm]
hostname = *.cyapi.cn, adx.sogaha.cn



var tmxios = JSON.parse($response.body);
const vip = '/vip_info';
const adhf = '/activity';
const user = '(user|visitors)';

if ($request.url.indexOf(vip) != -1){
    tmxios.vip = {
        "expires_time" : "4092599349",
        "is_auto_renewal" : true
      };
    tmxios.svip = {
        "expires_time" : "4092599349",
        "is_auto_renewal" : true
      };
}

if ($request.url.indexOf(adhf) != -1){
    tmxios.activities = [];
}

if ($request.url.indexOf('user') != -1){
    tmxios.result.ranking_above = 99;
    tmxios.result.is_vip = true;
    tmxios.result.vip_expired_at = 4092599349;
    tmxios.result.svip_given = 9999;
    tmxios.result.is_xy_vip = true;
    tmxios.result.xy_svip_expire = 4092599349; 
    tmxios.result.wt.vip = {
        "auto_renewal_type" : "",
        "expired_at" : 0,
        "enabled" : true,
        "svip_apple_expired_at" : 4092599349,
        "is_auto_renewal" : true,
        "svip_expired_at" : 4092599349,
        "svip_auto_renewal_type" : ""
      };
    tmxios.result.wt.svip_given = 9999;
    tmxios.result.wt.ranking_above = 99;
    tmxios.result.is_phone_verified = true;
    tmxios.result.name = "枭木iOS大本营";
    tmxios.result.avatar = "https://pan.tmxios.top/d/%E8%BD%AF%E4%BB%B6%E6%BA%90/%E5%8D%9A%E5%AE%A2%E5%9B%BE/logo.png";
    tmxios.result.phone_num = "13145200000";
    tmxios.result.vip_take_effect = 1;
    tmxios.result.is_primary = true;
    tmxios.result.xy_vip_expire = 4092599349;
    tmxios.result.svip_expired_at = 4092599349;
    tmxios.result.svip_take_effect = 1;
    tmxios.result.vip_type = "s";
    tmxios.result.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXJzaW9uIjoxLCJ1c2VyX2lkIjoiNWY1YmZjNTdkMmM2ODkwMDE0ZTI2YmI4Iiwic3ZpcF9leHBpcmVkX2F0IjoxNzA1MzMxMTY2LjQxNjc3MSwidmlwX2V4cGlyZWRfYXQiOjB9.h_Cem89QarTXxVX9Z_Wt-Mak6ZHAjAJqgv3hEY6wpps";
    tmxios.result.bound_status.qq.username = "https://t.me/Tmxios";
    tmxios.result.bound_status.weixin.username = "https://t.me/Tmxios";
    tmxios.result.bound_status.caiyun.username = "https://t.me/Tmxios";
    tmxios.result.bound_status.twitter.username = "https://t.me/Tmxios";
    tmxios.result.bound_status.facebook.username = "https://t.me/Tmxios";
    tmxios.result.bound_status.apple.username = "https://t.me/Tmxios";
    tmxios.result.bound_status.weibo.username = "https://t.me/Tmxios";
}

$done({ body: JSON.stringify(tmxios)});
