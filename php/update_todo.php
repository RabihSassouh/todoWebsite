<?php
session_start();
include('connection.php');

$user_id = $_SESSION['user_id'];
$todo_id=$_POST['id'];
$title=$_POST['title'];
$description=$_POST['description'];


$update_query = $mysqli->prepare('UPDATE todolists SET title = ?, description = ? WHERE user_id=? and id = ?');
$update_query->bind_param('ssii', $title, $description, $user_id, $todo_id);
$update_query->execute();

if ($update_query->affected_rows > 0) {
    echo json_encode(array("message" => "Todo updated successfully"));
} else {
    echo json_encode(array("message" => "Failed to update todo"));
}

?>
