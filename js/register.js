
$("#btn").on("click",function(){
    var username = $("#username").val();
    var userpwd = $("#userpwd").val();
    $.ajax({
        type: "get",
        url:"../php/register.php",
        data: {
            username,
            userpwd
        },
        dataType: "json",
        success: function(obj){
            if(obj["code"] == 0 ){
                alert(obj["msg"]);
                location.href="register.html"
            } else if(obj["code"]== 1){
                setCookie("loginName",username,7);
                setCookie("loginId",obj["id"],7);
                location.href="index.html";
            }
        }
    })
});