<?php
session_start();
include('connection.php');


$user_id = $_SESSION['user_id'];
$title = $_POST['title'];
$description = $_POST['description'];


$query = $mysqli->prepare('insert into todolists (`user_id`,title, description) VALUES (?,?, ?)');
$query->bind_param('iss', $user_id, $title, $description);
$query->execute();
$response['title'] = $title;
$response['description'] = $description;
echo json_encode($response);
?>
