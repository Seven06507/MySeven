$(document).ready(function() {
   var codenum;
   function createCode(){
       codenum = '';
       var codeLength = 4;
       //设置随机字符
       var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R', 'S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','zs');
        for(var i = 0; i < codeLength; i++){ //循环codeLength 我设置的4就是循环4次   
            var index = Math.floor(Math.random()*52); //设置随机数范围,这设置为0 ~ 36  
            codenum += random[index];  //字符串拼接 将每次随机的字符 进行拼接
        }
        $("#code-num").html(codenum);
   }

   //页面开始加载验证码
   createCode();
   //验证码Div加载点击事件
   $("#code-num").bind('click',function() {
           createCode();
       });	
        
});

//手机号码验证
$("#usertel").blur(function(){
    var userTel = $("#usertel").val();
    var pattern = /^1[34578]\d{9}$/;
    if(userTel == ""){
        $("#usertelture").html("请输入手机号!").css({"color":"red"});
    }else{
        if(userTel.length != 11){
            $("#usertelture").html("手机号码格式不正确!").css({"color":"red"});
        } else {
            if(usertel = pattern){
                $("#usertelture").html("√").css({"color":"green"});
            } else{
                $("#usertelture").html("手机号码格式不正确!").css({"color":"red"});
            }
        }
    };
});
$("#input-code").blur(function(){
    var inputCode = $("#input-code").val();
    var codeNum = $("#code-num").html();
    if(inputCode ==""){
        $("#codetruth").html("请输入验证码!").css({"color":"red"});
    }else if(inputCode != codeNum){
        $("#codetruth").html("验证码错误,请输入!").css({"color":"red"})
    // createCode();
    }else{
        $("#codetruth").html("√").css({"color":"green"});
    }
});

$("#username").blur(function(){
    var userName = $("#username").val();
    var pattern = /^[a-z_$][0-9a-z_$]{5,9}$/ig;
    if(userName == ""){
        $("#usernametruth").html("请输入用户名!").css({"color":"red"});
    }else{
        if(userName.length < 5 || userName.length > 9){
            $("#usernametruth").html("用户名格式不正确!").css({"color":"red"});
        } else {
            if(usertel = pattern){
                $("#usernametruth").html("√").css({"color":"green"});
            } else{
                $("#usernametruth").html("用户名格式不正确!").css({"color":"red"});
            }
        }
    };
});
$("#userpwd").blur(function(){
    var userPwd = $("#userpwd").val();
    var pattern = /^[a-z0-9]{6,12}$/ig;
    if(userPwd == ""){
        $("#userpwdtruth").html("请输入密码!").css({"color":"red"});
    }else{
        if(userPwd.length < 6 || userPwd.length > 12){
            $("#userpwdtruth").html("密码格式不正确!").css({"color":"red"});
        } else {
            if(usertel = pattern){
                $("#userpwdtruth").html("√").css({"color":"green"});
            } else{
                $("#userpwdtruth").html("密码格式不正确!").css({"color":"red"});
            }
        }
    };
})

$("#btn").bind("click",function(){
    var username = $("#username").val();
    var userpwd = $("#userpwd").val();
    var usertel = $("#usertel").val();
    $.ajax({
        type: "get",
        url: "http://localhost/MySeven/php/asker.php",
        data:{
            username,
            userpwd,
            usertel,
        },
        dataType: "json",
        success: function(obj){
            if (obj["code"] == 1) {
                alert(obj["msg"]);
                location.href = "register.html";
            } else {
                alert(obj["msg"]);
                location.href = "asker.html";
            }
        }
    });
});