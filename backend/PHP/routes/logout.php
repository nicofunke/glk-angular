<?php

// Set Content-Type
header("Content-Type: application/json; charset=UTF-8");


// Remove username from session
unset($_SESSION['username']);

// Response
$response = [];
$response['message'] = "Successfully logged out";
http_response_code(200);

$json = json_encode($response, JSON_UNESCAPED_UNICODE);
header('Content-Type: application/json');
echo $json;
