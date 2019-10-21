<?php

// Set Content-Type
header("Content-Type: application/json; charset=UTF-8");


// create connection
require __DIR__ . "/../classes/connection.php";
$connection = new Connection();

// extract json post data
$post_data = json_decode(file_get_contents('php://input'), true);

// Check for missing data
if( ! isset($post_data['user']) || $post_data['user'] == ''
    || ! isset($post_data['password']) || $post_data['password'] == '') {

    http_response_code(400);
    echo '{ "message": "Wrong parameters: Password and/or user not found."}';
    exit();
}

$username = $post_data['user'];
$password = $post_data['password'];
$response = [];

if ( $connection->checkLogin($username, $password) ) {
    // successfully logged in -> write name to session
    $response['username'] = $username;
    $_SESSION["username"] = $username;
    http_response_code(200);
} else {
    // login failed
    $response['message'] = "login failed: wrong password/username";
    http_response_code(401);
}

$json = json_encode($response, JSON_UNESCAPED_UNICODE);
header('Content-Type: application/json');

echo $json;
