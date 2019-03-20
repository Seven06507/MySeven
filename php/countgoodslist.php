<?php
@require_once("config.php");

$str = "select count(*) as total FROM goodslist where id";//as取名称
$result = mysql_query($str);

$item = mysql_fetch_array($result);

echo  json_encode($item);

?>