<?php

session_start();
include('connection.php');

$user_id = $_SESSION['user_id'];
echo $user_id;
$query = $mysqli->prepare("select title,description from todolists where user_id=?");

$query->bind_param('i',$user_id);
$query->execute();
$query->store_result();
$num_rows=$query->num_rows();
$query->bind_result($title,$description);

if ($num_rows == 0) {
    $response['status']="todos not found";
    }
    else {
        $todoLists = [];
        $query->bind_result($title,$description);
        while ($query->fetch()) {
            $todoList = [
                'title' => $title,
                'description' => $description,
            ];
            $todoLists[] = $todoList;
        }
        $response['status'] = 'success';
        $response['todos'] = $todoLists;
    }
echo json_encode($response);
?>
