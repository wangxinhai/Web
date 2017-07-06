// 设置不同屏幕下的rem
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            var clientHeight = docEl.clientHeight;
            if (!clientWidth) return;
            docEl.style.fontSize =20 * (clientWidth / 320) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);


/*rem值设定*/
// (function(){
//     var dpr,rem,docE1,fontEl;
//     docEl = document.documentElement; 
//     fontEl = document.createElement('style');
//     rem=docEl.clientWidth;
//     docEl.firstElementChild.appendChild(fontEl); 
//     fontEl.innerHTML = 'html{font-size:' + rem + 'px!important;}';
// })();

/*
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 6.4 + 'px';
    console.log(document.documentElement.style.fontSize);
    var deviceWidth = document.documentElement.clientWidth;
    if(deviceWidth > 640) deviceWidth = 640;
    document.documentElement.style.fontSize = deviceWidth / 6.4 + 'px';
*/