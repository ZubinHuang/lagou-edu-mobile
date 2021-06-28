    /*
        需求：
            1.把所有图片挪到右侧候场区。除了第一张
            2.图片可以自动轮播。
            3.焦点跟随。
            4.左右按钮点击可以切换图片。
            5.点击焦点可以跳转到对应那张图。
    */

    var carouselbox = document.getElementById('carouselbox');          
    var lis = carouselbox.getElementsByTagName('li');//集合
    var spans = carouselbox.getElementsByTagName('span');//集合
    var now = 0;//当前在可视区图片的下标
    var timer = null;

    //1.把所有图片挪到右侧候场区。除了第一张
    var iw = lis[0].offsetWidth;
    for(var i = 0; i < lis.length; i++) {
        lis[i].style.left = iw + 'px';
    }
    lis[0].style.left = 0;

    //3.焦点跟随。
    function spanMove() {
        //清除所有高亮
        for(var i = 0; i < spans.length; i++) {
            spans[i].className = '';
        }
        spans[now].className = 'active';
    }
    //2.图片可以自动轮播。
    function next() {
        console.log(iw);
        //旧图离场
        startMove(lis[now], {'left' : -iw});
        //新图候场
        // now++;
        now = ++now > lis.length - 1 ? 0 : now;
        lis[now].style.left = iw + 'px';
        //新图进场
        startMove(lis[now], {'left' : 0});
        spanMove();
    }

    timer = setInterval(next, 4000);//每隔两秒切换一个图片

    







