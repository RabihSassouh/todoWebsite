<?php
include('connection.php');

$email_username = $_POST['email_username'];
$password = $_POST['password'];

$query = $mysqli->prepare('select *
from users
where email=? or username=?');
$query->bind_param('ss', $email_username,$email_username);
$query->execute();
$query->store_result();
$query->bind_result($id,$name,$username, $email, $hashed_password,$score );
$query->fetch();
$num_rows = $query->num_rows();

if ($num_rows == 0) {
    $response['status'] = "user not found";
} else {
    if (password_verify($password, $hashed_password)) {
        $response['status'] = "logged in";
        $response['user_id'] = $id;
        $response['name'] = $name;
        $response['username'] = $username;
        $response['email'] = $email;
        $response['score'] = $score;
    } else {
        $response['status'] = "incorrect credentials";
    }
}
echo json_encode($response);
