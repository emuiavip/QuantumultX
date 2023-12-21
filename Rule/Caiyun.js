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


var tmxios = JSON.parse($response.body);
const urls = ['/vip_info', '/activity', 'user'];

urls.forEach(url => {
  if ($request.url.includes(url)){
    switch(url) {
      case '/vip_info':
        tmxios = {
          ...tmxios, 
          vip: {
            "expires_time" : "4092599349",
            "is_auto_renewal" : true
          },
          svip: {
            "expires_time" : "4092599349",
            "is_auto_renewal" : true
          }
        }
        break;
      case '/activity':
        tmxios.activities = [];
        break;
      case 'user':
        tmxios.result = {
          ...tmxios.result,
          ranking_above: 99,
          is_vip: true,
          vip_expired_at: 4092599349,
          svip_given: 9999,
          is_xy_vip: true,
          xy_svip_expire: 4092599349,
          wt: {
            ...tmxios.result.wt,
            vip: {
              "auto_renewal_type" : "",
              "expired_at" : 0,
              "enabled" : true,
              "svip_apple_expired_at" : 4092599349,
              "is_auto_renewal" : true,
              "svip_expired_at" : 4092599349,
              "svip_auto_renewal_type" : ""
            },
            svip_given: 9999,
            ranking_above: 99,
          },
          is_phone_verified: true,
          phone_num: "13145200000",
          vip_take_effect: 1,
          is_primary: true,
          xy_vip_expire: 4092599349,
          svip_expired_at: 4092599349,
          svip_take_effect: 1,
          vip_type: "s",
          name: "枭木iOS大本营",
          avatar: "https://pan.tmxios.top/d/%E8%BD%AF%E4%BB%B6%E6%BA%90/%E5%8D%9A%E5%AE%A2%E5%9B%BE/logo.png",
          token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXJzaW9uIjoxLCJ1c2VyX2lkIjoiNWY1YmZjNTdkMmM2ODkwMDE0ZTI2YmI4Iiwic3ZpcF9leHBpcmVkX2F0IjoxNzA1MzMxMTY2LjQxNjc3MSwidmlwX2V4cGlyZWRfYXQiOjB9.h_Cem89QarTXxVX9Z_Wt-Mak6ZHAjAJqgv3hEY6wpps"
        }
        break;
    }
  }
})

$done({ body: JSON.stringify(tmxios)});
