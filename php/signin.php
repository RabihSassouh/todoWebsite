<?php
session_start();
include('connection.php');

if (isset($_POST['username_email'], $_POST['password'])) {
    $username_email = $_POST['username_email'];
    $password = $_POST['password'];

    $query = $mysqli->prepare('select *
from users
where username=? or email=?');
    $query->bind_param('ss', $username_email, $username_email);
    $query->execute();
    $query->store_result();
    $query->bind_result($id, $name, $username, $email, $hashed_password, $score);
    $query->fetch();
    $num_rows = $query->num_rows();

    if ($num_rows == 0) {
        $response['status'] = "user not found";
        $response['isLogged']=false;
    } else {
        if (password_verify($password, $hashed_password)) {
            $response['status'] = "logged in";
            $_SESSION['user_id'] = $id;
            $response['name'] = $name;
            $response['username'] = $username;
            $response['email'] = $email;
            $_SESSION['score'] = $score;
            $response['isLogged']=true;
        } else {
            $response['status'] = "incorrect credentials";
            $response['isLogged']=false;
        }
    }
    echo json_encode($response);
}
?>