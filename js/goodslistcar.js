//数量
$("#add").on("click",function(){
    var num = $("#thingnum").val();
    num++;
    $("#thingnum").val(num);

});
$("#reduce").on("click",function(){
    var num = $("#thingnum").val();
    if(num>1){
        num--;
    } else {
        num = 1;
    }
    $("#thingnum").val(num);
})
