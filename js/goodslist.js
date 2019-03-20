
$(document).delegate(".goodslist .w ul li","mouseover",function(){
    $(this).css({"box-shadow":"0 0 5px 1px gray"})
});
$(document).delegate(".goodslist .w ul li","mouseout",function(){
    $(".goodslist .w ul li").on("mouseover").stop();
    $(this).css({"box-shadow": "none"});
});

{/* <li>
    <i>
        <img src="../images/49.jpg">
    </i>
    <p>雷蛇Razer&nbsp;炼狱蝰蛇</p>
    <p class="second">幻彩电竞有线鼠标</p>
    <p class="third">&yen;&nbsp;559.00</p>
</li> */}
// $.ajax({
//     type:"get",
//     url:"../php/goodslist.php",
//     dataType: "json",
//     success: function(list){
//         var html = "";
//         list.forEach(function(item){
//             var {
//                 id,
//                 goodsname,
//                 goodsimg,
//                 goodsprice
//             } = item;
//             html += 
//                 `
//                 <li>
//                     <i>
//                         <img src="${goodsimg}">
//                     </i>
//                     <p>${goodsname}</p>
//                     <p class="second">幻彩电竞有线鼠标</p>
//                     <p class="third">&yen;&nbsp;${goodsprice}</p>
//                 </li>
//                 `;
//         })
//         $("#father_1").append(html);
//     }
// });
//分页
function getShownum(){
    $.ajax({
        type: "get",
        url: "../php/countgoodslist.php",
        dataType: "json",
        success: function(obj){
            shownum = $("#shownum").val();
            $(".zxf_pagediv").createPage({
                pageNum: Math.ceil(obj["total"]/shownum),
                current: 1,
                backfun: function(e) {
                    // console.log(e);//回调
                }
            });
        }
    });
};
getShownum();

shownum = $("#shownum").val();
pageIndex = 0;
getPage();

function getPage(){
    $(document).delegate(".nextbtn","click",function(){
        pageIndex++;
        getData(shownum * pageIndex, shownum);
    });

    $(document).delegate(".prebtn","click",function(){
        pageIndex--;
        getData(shownum * pageIndex, shownum);
    });
}

$("#shownum").on("change",function(){
    getShownum();
    shownum = $("#shownum").val();
    pageIndex = 0;
    getData(shownum * pageIndex, shownum);
    // getPage();
});
getData(shownum * pageIndex, shownum);
function getData(skipnum, shownum){
    $.ajax({
        type:"get",
        url:"../php/goodslist.php",
        data: {
            skipnum,
            shownum
        },
        dataType: "json",
        success: function(list){
            var html = "";
            list.forEach(function(item){
                var {
                    id,
                    goodsname,
                    goodsimg,
                    goodsprice
                } = item;
                html += 
                    `
                    <li>
                        <i>
                            <img src="${goodsimg}">
                        </i>
                        <p>${goodsname}</p>
                        <p class="second">幻彩电竞有线鼠标</p>
                        <p class="third">&yen;&nbsp;${goodsprice}</p>
                    </li>
                    `;
            })
            $("#father_1").html(html);
        }
    });
}
