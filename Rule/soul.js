#!name = Soul净化,解锁广场私聊
#!author = 枭木
#!tg = https://t.me/Tmxios
#!update = 2024-06-06 13:42


const url = $request.url;
const scriptEnvironment = typeof $task !== 'undefined' ? 'Surge' : (typeof $loon !== 'undefined' ? 'Loon' : (typeof $httpClient !== 'undefined' ? 'Qx' : 'Unknown'));

if (!$response.body || scriptEnvironment === 'Unknown') {
  $done({});
}

let obj = JSON.parse($response.body);

const shouldDeleteData = (url) => {
  return url.includes("/post/homepage/guide/card") ||
         url.includes("/furion/position/content") ||
         url.includes("/hot/soul/rank") ||
         url.includes("/post/gift/list") ||
         url.includes("/mobile/app/version/queryIos") ||
         url.includes("/teenager/config") ||
         url.includes("/winterfell/v2/getIpByDomain") || 
         url.includes("/official/scene/module");
};

const shouldModifyLimitInfo = (url, obj) => {
  return url.includes("/chat/limitInfo") && obj.data && obj.data.limit !== undefined;
};

if (url.includes("/vip/meet/userInfo")) {
  if (obj.data.superStarDTO && obj.data.superStarDTO.superVIP !== undefined) {
    obj.data.superStarDTO.superVIP = true;
    obj.data.superStarDTO.validTime = 9887893999000;
    obj.data.flyPackageDTO.hasFlyPackage = true;
  }
}

if (url.includes("/privilege/supervip/status")) {
  if (obj.data.superVIP !== undefined) {
    obj.data.superVIP = true;
    obj.data.remainDay = 9887893999000;
    obj.data.hasCancelVIPSubscription = false;
    obj.data.hasCancelVIPSubOfIAP = false;
    obj.data.hasFlyPackage = true;
  }
}

if (!obj.data || shouldDeleteData(url)) {
  delete obj.data;
}

if (shouldModifyLimitInfo(url, obj)) {
  obj.data.limit = false;
}

if (url.includes("/post/recSquare/subTabs")) {
  obj.data = obj.data.filter(item => [7, 6, 2].includes(item.tabType));
}

$done({ body: JSON.stringify(obj) });



**************************************
[rewrite_local]  
^https:\/\/api-a\.soulapp\.cn\/v2\/post\/gift\/list url script-response-body https://raw.githubusercontent.com/emuiavip/QuantumultX/main/Rule/soul.js
^https:\/\/post\.soulapp\.cn\/hot\/soul\/rank url script-response-body https://raw.githubusercontent.com/emuiavip/QuantumultX/main/Rule/soul.js
^https:\/\/gateway-mobile-gray\.soulapp\.cn\/mobile\/app\/version\/queryIos url script-response-body https://raw.githubusercontent.com/emuiavip/QuantumultX/main/Rule/soul.js
^https:\/\/api-chat\.soulapp\.cn\/chat\/limitInfo url script-response-body https://raw.githubusercontent.com/emuiavip/QuantumultX/main/Rule/soul.js
^https:\/\/post\.soulapp\.cn\/v\d\/post\/homepage\/guide\/card url script-response-body https://raw.githubusercontent.com/emuiavip/QuantumultX/main/Rule/soul.js
^https:\/\/api-user\.soulapp\.cn\/furion\/position\/content url script-response-body https://raw.githubusercontent.com/emuiavip/QuantumultX/main/Rule/soul.js
^https:\/\/api-account\.soulapp\.cn\/teenager\/config url script-response-body https://raw.githubusercontent.com/emuiavip/QuantumultX/main/Rule/soul.js
^https:\/\/ssp\.soulapp\.cn\/api\/q url reject-dict
^https:\/\/47\.110\.187\.87\/winterfell\/(?:v2\/)?getIpByDomain url script-response-body https://raw.githubusercontent.com/emuiavip/QuantumultX/main/Rule/soul.js
^https:\/\/api-pay\.soulapp\.cn\/vip\/meet\/userInfo url script-response-body https://raw.githubusercontent.com/emuiavip/QuantumultX/main/Rule/soul.js
^https:\/\/api-pay\.soulapp\.cn\/privilege\/supervip\/status url script-response-body https://raw.githubusercontent.com/emuiavip/QuantumultX/main/Rule/soul.js
^https:\/\/api-a\.soulapp\.cn\/official\/scene\/module url script-response-body https://raw.githubusercontent.com/emuiavip/QuantumultX/main/Rule/soul.js
^https:\/\/post\.soulapp\.cn\/v2\/post\/recSquare\/subTabs url script-response-body https://raw.githubusercontent.com/emuiavip/QuantumultX/main/Rule/soul.js


[mitm]
hostname = api-account.soulapp.cn, api-a.soulapp.cn, api-pay.soulapp.cn, gateway-mobile-gray.soulapp.cn, api-chat.soulapp.cn, 8.210.3.170, 47.75.72.47, post.soulapp.cn, api-user.soulapp.cn,api-account.soulapp.cn,ssp.soulapp.cn,47.110.187.87
*************************************/
