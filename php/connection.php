<?php

header("Access-Control-Allow-Origin: *"); // Allow requests from any origin
header("Access-Control-Allow-Methods: POST, GET, OPTIONS"); // Allow POST, GET, OPTIONS requests
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$host = "localhost";
$db_user = "root";
$db_pass = null;
$db_name = "todolist-db";

$mysqli = new mysqli($host, $db_user, $db_pass, $db_name);

if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}
?>