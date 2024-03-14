<?php
session_start();
include('connection.php');

$user_id=$_SESSION['user_id'];
$title = $_POST['title'];
$description = $_POST['description'];


$query = $mysqli->prepare('INSERT INTO todolists (user_id,title, description) VALUES (?,?, ?)');
$query->bind_param('sss', $user_id, $title, $description);
$query->execute();

if ($query->affected_rows > 0) {
    echo json_encode(array("message" => "Todo created successfully"));
} else {
    echo json_encode(array("message" => "Failed to create todo"));
}
?>
