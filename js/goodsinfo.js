//获取传来的参数
var goodsid=location.search.split("=")[1];
// 绑定鼠标移入原图窗口事件
$(document).delegate("#smallimg","mousemove",function(e){
    $("#shadow").css('display','block');
    $("#bigimg").css('display','block');
});
//绑定鼠标在原图窗口移动的事件
$(document).delegate("#smallimg","mousemove",function(e){

    // 获取鼠标当前的位置
    var x=e.clientX;
    var y=e.clientY;
    // 获取原图窗口距离文档的偏移位置
    var sX=$("#smallimg").offset().left;
    var sY=$("#smallimg").offset().top;

    // 计算鼠标的相对位置（相对于原图窗口的偏移距离）
    var mx=x-sX;
    var my=y-sY;

    // 获取小框框的宽高
    var mw=$("#shadow").width()/2;
    var mh=$("#shadow").height()/2;

    // 鼠标移动后小框框的移动距离
    $("#shadow").css({left:mx-mw+'px',top:my-mh+'px'});

    // 获取小框框的偏移位置
    var lw=$("#shadow").position().left;
    var lh=$("#shadow").position().top;


    // 判断边界（小框框只能在原图窗口范围内移动）
    var maxW=$("#smallimg").width()-$("#shadow").width()
    var maxH=$("#smallimg").height()-$("#shadow").height()
    // 左边界
    if(lw<=0){$("#shadow").css('left','0px');}
    // 右边界
    if(lw>=maxW){
        $("#shadow").css('left',maxW+'px');
    }
    // 上边界
    if(lh<=0){$("#shadow").css('top','0px');}
    // 下边界
    if(lh>=maxH){
        $("#shadow").css('top',maxH+'px');
    }

    // 获取小框框的偏移位置
    var lw=$("#shadow").position().left;
    var lh=$("#shadow").position().top;
// 计算鼠标在小图里的位置  *2.5计算大图移动的比例
    var newX=lw*2.5;
    var newY=lh*2.5;



    $("#bigimg img").css({left:-newX+'px',top:-newY+'px'});
});
//绑定鼠标离开原图窗口事件
$(document).delegate("#smallimg","mouseout",function(){
    $('#shadow').css('display','none');
    $('#bigimg').css('display','none');
});

//选项功能
$(document).delegate(".goodstotal .w ul li dl dd","click",function(){
    $(this).css({"border":"solid 1px red"}).siblings().css({"border":"0"});
});
//数量
$(document).delegate("#add","click",function(){
    var num = $("#thingnum").val();
    num++;
    $("#thingnum").val(num);

});
$(document).delegate("#reduce","click",function(){
    var num = $("#thingnum").val();
    if(num>1){
        num--;
    } else {
        num = 1;
    }
    $("#thingnum").val(num);
})

