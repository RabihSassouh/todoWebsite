<?php
session_start();
include('connection.php');

$user_id = $_SESSION['user_id'];
$todo_id = $_POST['id'];


$delete_query = $mysqli->prepare('DELETE FROM todolists WHERE user_id = ? AND id = ?');
$delete_query->bind_param('ii', $user_id, $todo_id);
$delete_query->execute();

if ($delete_query->affected_rows > 0) {
    echo json_encode(array("message" => "Todo deleted successfully"));
} else {
    echo json_encode(array("message" => "Failed to delete todo"));
}

?>
