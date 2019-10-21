<?php

// Set Content-Type
header("Content-Type: application/json; charset=UTF-8");


// create connection
require __DIR__ . "/../classes/connection.php";
$connection = new Connection();

// Check if the user has permissions
if( ! isset($_SESSION["username"]) || $_SESSION["username"] != "glk" ){
    http_response_code(401);
    echo '{ "message": "Missing permission to edit concerts"}';
    exit();
}

// extract json post data and check for error
$post_data = json_decode(file_get_contents('php://input'), true);
if( !isset($post_data) || !isset($post_data['id'])){
    http_response_code(400);
    echo '{ "message": "Missing post data."}';
    exit();
}

// Execute and check for error
if ( !$connection->deleteConcert($post_data['id'])){
    http_response_code(500);
    echo '{ "message": "Error while accessing database."}';
    exit();
}

http_response_code(200);
