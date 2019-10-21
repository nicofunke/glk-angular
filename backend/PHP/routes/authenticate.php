<?php

// Set Content-Type
header("Content-Type: application/json; charset=UTF-8");


// Check for session
$response = [];
if ( isset($_SESSION['username']) && $_SESSION['username'] != "" ) {
    // authentication found
    $response['username'] = $_SESSION['username'];
    http_response_code(200);
} else {
    // no authentication
    $response['message'] = "No authentication found";
    http_response_code(401);
}

$json = json_encode($response, JSON_UNESCAPED_UNICODE);
header('Content-Type: application/json');
echo $json;
