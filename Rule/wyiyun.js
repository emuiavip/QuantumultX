/*
 *
 *
脚本功能：网易云解锁VIP
软件版本：++
下载地址：苹果商店下载
脚本作者：伟人
更新时间：2023.08.03
电报频道：https://t.me/WeiRenQAQ
问题反馈：https://t.me/WeiRenOvO
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]
# > 网易云解锁VIP
^http[s]?:\/\/.+music.+(player\/url|playlist|entrance|\/eapi\/search\/).*$ url script-request-header https://raw.githubusercontent.com/WeiRen0/Scripts/main/wyun.js

[mitm] 
hostname = *.music.163.com
*
*
*/
