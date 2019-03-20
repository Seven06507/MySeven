<?php
@require_once("config.php");
//接受参数
$goodsid = $_GET["goodsid"];

$str = "select * from goodslist where id = $goodsid";

$result = mysql_query($str);

$list = array();

while($item = mysql_fetch_array($result)){
    $temp = array();
    $temp["goodsname"]=$item["goodsname"];
    $temp["goodsimg"]= $item["goodsimg"];
    $temp["goodsprice"]=$item["goodsprice"];
    $list[] = $temp;
}
echo json_encode($list);

?>