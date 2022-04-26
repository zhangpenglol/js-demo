(function () {
    // console.log('2222')
    // let docEle = document.documentElement

    // function setHtmlFontSize() {
    //     var screenRatio = docEle.clientWidth / docEle.clientHeight;
    //     var fontSize = (
    //         screenRatio > 16 / 9
    //             ? (16 / 9 / screenRatio)
    //             : 1
    //     ) * docEle.clientWidth / 10;

    //     docEle.style.fontSize = fontSize.toFixed(3) + "px";
    // }

    // setHtmlFontSize()

    // window.addEventListener('resize', setHtmlFontSize)

    // console.log('111')


    function refreshRem() {
        var width = docEl.getBoundingClientRect().width;
        // if (width / dpr > 540) {
        //     width = 540 * dpr;
        // }
        // var rem = width / 10;
 
        // 最小1366px，最大适配2560px
        if (width / dpr < 1366) {
            width = 1366 * dpr;
        } else if (width / dpr > 2560) {
            width = 2560 * dpr;
        }
        // 设置成24等份，设计稿时1920px的，这样1rem就是80px
        var rem = width / 24;
        docEl.style.fontSize = rem + 'px';
        flexible.rem = win.rem = rem;
        console.log(rem,'11111')
    }

    window.addEventListener('resize', refreshRem)
})()

