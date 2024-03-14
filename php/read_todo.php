<?php

session_start();
include('connection.php');

$user_id = $_SESSION['user_id'];

$query = $mysqli->prepare("select title,description from todolists where user_id=?");

$query->bind_param('i',$user_id);
$query->execute();
$query->bind_result($title,$description);

$result = $query->get_result();

$todolists = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $todolists[] = $row;
    }
}

echo json_encode($todolists);

?>