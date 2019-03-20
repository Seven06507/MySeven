//ajax自动生成放大镜框架
$.ajax({
    type: "get",
    url: "../php/goodsinfo.php",
    data:{
        goodsid
    },
    dataType: "json",
    success: function(list){
        var html = "";
        list.forEach(function(item){
            var {
                goodsname,
                goodsimg,
                goodsprice,
            } = item;
            html += 
                    `
                    <div class="w">
                        <i id="smallimg">
                            <img src="${goodsimg}" alt="">
                            <div id="shadow"></div>
                        </i>
                        <div id="bigimg">
                            <img src="${goodsimg}">
                        </div>
                        <ul>
                            <li>
                                <h3>${goodsname}</h3>
                            </li>
                            <li>
                                <p>Hello,world!</p>
                            </li>
                            <li class="third">
                                <strong>&yen;${goodsprice}</strong><span>元</span>
                            </li>
                            <li>
                                <dl>
                                    <dd>aaa1</dd>
                                    <dd>aaa2</dd>
                                    <dd>aaa3</dd>
                                    <dd>aaa4</dd>
                                </dl>
                            </li>
                            <li>烧友服务:满99包邮</li>
                            <li>
                                <span class="sum">数量:</span>
                                <input type="text" value="1" id="thingnum">
                                <div id="btnsum">
                                    <button id="add">+</button>
                                    <button id="reduce">-</button>
                                </div>
                            </li>
                            <li>
                                <button id="add-car">加入购物车</button>
                            </li>
                        </ul>
                    </div>
                    `;
        })
        $("#father_1").html(html);
    }
})