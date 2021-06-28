var closes = document.getElementById('close');
var search = document.getElementById('search');



// 关闭函数 fork代表叉叉按钮
function closed (fork){
    fork.onclick = function(){
        this.parentNode.style.display = 'none';
    }
}


function appear(param){
    window.onscroll = function(){
        var y = window.scrollY;
        if (y >= 666) {
            param.style.display = 'block';
        }else{
            param.style.display = 'none';
        }
    }

}

// openClose.onclick = function(){
//     this.parentNode.style.display = 'none';
// }
closed(closes);
appear(search);