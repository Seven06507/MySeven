<?php

@header("content-type:text/html;charset=utf-8");
@header("Access-Control-Allow-Origin:*");

mysql_connect("localhost:3306","root","root");
mysql_select_db("project");
mysql_query("set character set 'utf8'");

?>