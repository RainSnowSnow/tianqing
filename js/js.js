$(document).ready(function() {
    //懒加载
    $("img.lazyload").lazyload({
       load:function(){
            $('#container').BlocksIt({
            numOfCol:4,
            offsetX:4,
            offsetY:4,
            blockElement: '.grid'
        });
       }
    });
    //滚动时加载
  $(window).scroll(function(){
       if($(document).height()-$(this).scrollTop()-$(this).height()<50){
           $('#container').append($('#test').html());
           $('#container').BlocksIt({
            numOfCol: 4,
            offsetX: 4,
            offsetY: 4,
            blockElement: '.grid'
        });
        $("img.lazyload").lazyload()
       }
  })

  //window resize
var currentWidth = 1000;
$(window).resize(function() {
    var winWidth = $(window).width();
    var conWidth;
    if (winWidth < 660) {
        conWidth = 440;
        col = 2
    } else if (winWidth < 880) {
        conWidth = 660;
        col = 2
    } else if (winWidth < 1000) {
        conWidth = 880;
        col = 3;
    } else {
        conWidth = 1000;
        col = 4;
    }
 
    if (conWidth != currentWidth) {
        currentWidth = conWidth;
        $('#container').width(conWidth);
        $('#container').BlocksIt({
            numOfCol: col,
            offsetX: 4,
            offsetY:4,
            blockElement: '.grid'
        });
    }
});
});