<?php
session_start();
include('connection.php');

if (isset($_POST['username_email'], $_POST['password'])) {
    $username_email = $_POST['username_email'];
    $password = $_POST['password'];

    $query = $mysqli->prepare('select *
from users
where email=? or username=?');
    $query->bind_param('ss', $username_email, $username_email);
    $query->execute();
    $query->store_result();
    $query->bind_result($id, $name, $username, $email, $hashed_password, $score);
    $query->fetch();
    $num_rows = $query->num_rows();

    if ($num_rows == 0) {
        $response['status'] = "user not found";
    } else {
        if (password_verify($password, $hashed_password)) {
            $response['status'] = "logged in";
            $response['user_id'] = $id;
            $_SESSION['user_id'] = $id;
            $response['name'] = $name;
            $response['username'] = $username;
            $response['email'] = $email;
            $response['score'] = $score;
        } else {
            $response['status'] = "incorrect credentials";
        }
    }
    echo json_encode($response);
}
