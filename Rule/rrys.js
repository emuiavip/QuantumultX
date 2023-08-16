/******************************
> 规则名称：阿里云盘净化+解锁本地会员功能[倍速、码率]
> QQ群：681835088
> 公众号：枭木iOS大本营
> TG交流群：https://t.me/Tmxios 
> TG频道：https://t.me/Msskymu
> 枭木官方站：https://tmxios.top
> 手机卡申请：https://10.tmxios.top
> 软件源地址：https://app.tmxios.top/appstore
> 游戏源地址：https://game.tmxios.top/appstore
> 证书购买或定制：https://p12.tmxios.top
> 购买卡密地址：https://pay.tmxios.top
> 更新时间：2023-08-05
> 转载说明：如需引用请注明出处，谢谢合作！
***********************************/


[rewrite_local]
^http[s]?:\/\/api.hujuvod.com\/user\/personal\/information url script-response-body https://raw.githubusercontent.com/emuiavip/QuantumultX/main/Rule/rrys.js

[mitm]
hostname = api.hujuvod.com


var body = $response.body.replace(/expiredTime":\d+/g,'expiredTime":253392455349000')
.replace(/valid":\w+/g,'valid":true')
.replace(/endTime":".*?"/g,'endTime":"9999-11-15 11:55:06"')
$done({ body });
