<?php
header('Content-Type: application/json');
include('connection.php');


if ($_SERVER["REQUEST_METHOD"] === "POST") {
    if (isset($_POST['name'], $_POST['username'], $_POST['email'], $_POST['password'])) {
        $name = $_POST['name'];
        $username = $_POST['username'];
        $email = $_POST['email'];
        $password = $_POST['password'];

        $check_username_email = $mysqli->prepare('select username,email from users where username=? or email=?');
        $check_username_email->bind_param('ss', $username, $email);
        $check_username_email->execute();
        $check_username_email->store_result();
        $username_email_exists = $check_username_email->num_rows();


        if ($username_email_exists == 0) {
            $hashed_password = password_hash($password, PASSWORD_BCRYPT);
            $query = $mysqli->prepare('insert into users(name,username,email,password) values(?,?,?,?);');
            $query->bind_param('ssss', $name, $username, $email, $hashed_password);
            $query->execute();
            $response['status'] = "success";
            $response['message'] = "user $username was created successfully";
        } else {
            $response["status"] = "username already exists";
            $response["message"] = "user $username wasn't created";
        }
    }
} else {
    $response['status'] = "error";
    $response['message'] = "Invalid request method";
}
echo json_encode($response);

