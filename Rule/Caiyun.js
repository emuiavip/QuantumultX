/*************************************

项目名称：彩云天气-净化/SVIP
下载地址：https://t.me/Tmxios
脚本作者：枭木
电报频道：https://t.me/Tmxios
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/(biz|wrapper)\.cyapi\.cn\/(.+\/(user.+|visitors|activity)|p\/v\d\/vip_info) url script-response-body https://raw.githubusercontent.com/emuiavip/QuantumultX/main/Rule/Caiyun.js
^http:\/\/adx\.sogaha\.cn\/sdk\/ad\/get url reject-200

[mitm]
hostname = *.cyapi.cn, adx.sogaha.cn

*************************************/


var chxm1023 = JSON.parse($response.body);
const vip = '/vip_info';
const adhf = '/activity';
const user = '(user|visitors)';

if ($request.url.indexOf(vip) != -1){
    chxm1023.vip = {
        "expires_time" : "4092599349",
        "is_auto_renewal" : true
      };
    chxm1023.svip = {
        "expires_time" : "4092599349",
        "is_auto_renewal" : true
      };
}

if ($request.url.indexOf(adhf) != -1){
    chxm1023.activities = [];
}

if ($request.url.indexOf('user') != -1){
    chxm1023.result.ranking_above = 99;
    chxm1023.result.is_vip = true;
    chxm1023.result.vip_expired_at = 4092599349;
    chxm1023.result.svip_given = 9999;
    chxm1023.result.is_xy_vip = true;
    chxm1023.result.xy_svip_expire = 4092599349; 
    chxm1023.result.wt.vip = {
        "auto_renewal_type" : "",
        "expired_at" : 0,
        "enabled" : true,
        "svip_apple_expired_at" : 4092599349,
        "is_auto_renewal" : true,
        "svip_expired_at" : 4092599349,
        "svip_auto_renewal_type" : ""
      };
    chxm1023.result.wt.svip_given = 9999;
    chxm1023.result.wt.ranking_above = 99;
    chxm1023.result.is_phone_verified = true;
    chxm1023.result.name = "枭木iOS大本营";
    chxm1023.result.avatar = "https://pan.tmxios.top/d/%E8%BD%AF%E4%BB%B6%E6%BA%90/%E5%8D%9A%E5%AE%A2%E5%9B%BE/logo.png";
    chxm1023.result.phone_num = "13800000000";
    chxm1023.result.vip_take_effect = 1;
    chxm1023.result.is_primary = true;
    chxm1023.result.xy_vip_expire = 4092599349;
    chxm1023.result.svip_expired_at = 4092599349;
    chxm1023.result.svip_take_effect = 1;
    chxm1023.result.vip_type = "s";
    chxm1023.result.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXJzaW9uIjoxLCJ1c2VyX2lkIjoiNWY1YmZjNTdkMmM2ODkwMDE0ZTI2YmI4Iiwic3ZpcF9leHBpcmVkX2F0IjoxNzA1MzMxMTY2LjQxNjc3MSwidmlwX2V4cGlyZWRfYXQiOjB9.h_Cem89QarTXxVX9Z_Wt-Mak6ZHAjAJqgv3hEY6wpps";
    chxm1023.result.bound_status.qq.username = "https://t.me/Tmxios";
    chxm1023.result.bound_status.weixin.username = "https://t.me/Tmxios";
    chxm1023.result.bound_status.caiyun.username = "https://t.me/Tmxios";
    chxm1023.result.bound_status.twitter.username = "https://t.me/Tmxios";
    chxm1023.result.bound_status.facebook.username = "https://t.me/Tmxios";
    chxm1023.result.bound_status.apple.username = "https://t.me/Tmxios";
    chxm1023.result.bound_status.weibo.username = "https://t.me/Tmxios";
}

$done({ body: JSON.stringify(chxm1023)});
