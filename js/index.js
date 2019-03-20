
//选项卡的设置
$(".items").eq(0).hide();
$(".pic .w ul li").on("mouseover", function () {
    $(".items").eq(0).show();
    var index = $(this).index();
    $(".pic .w ul li").eq(index).css({"color":"red"}).siblings().css({"color":"black"});
    $(".pic .w dl dd").eq(index).show().siblings().hide();
    $(this).on("mouseout",function(){
        $(".items").eq(0).hide();
    });
});
//轮播图
$(".pic .w .point dt").on("mouseover", function () {
    var index = $(this).index();
    $(".pic .w .point dt").eq(index).css({"background-color":"white"}).siblings().css({"background-color":"rgba(0,0,0,.7)"});
    $(".pic .w ol li").eq(index).show().siblings().hide();
});

//图片亮度问题
$(".list .w ul li").on("mouseover",function(){
    $(this).fadeTo("fast", 0.7);
});
$(".list .w ul li").on("mouseout",function(){
    $(".list .w ul li").on("mouseover").stop(true);
    $(this).fadeTo("fast", 1);
});

//商品阴影问题

$(".mouse .w ul li").on("mouseover",function(){
    $(this).css({"box-shadow":"0 0 5px 1px gray"})
});
$(".mouse .w ul li").on("mouseout",function(){
    $(".mouse .w ul li").on("mouseover").stop();
    $(this).css({"box-shadow": "none"});
});

var username = getCookie("loginName");
if(username){
    $("#username").html(username).css({"color":"red"}).attr({href:""});
    $("#asker").hide();
}
//品牌循环



//点击进入商品详情
$(".mouse .w ul li").on("click",function(){
    var goodsid = $(this).children("i").children("img").attr("secret");
    window.location.href="goodsinfo.html?goodid="+goodsid;
});
