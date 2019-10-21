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
if(! isset($post_data)){
    http_response_code(400);
    echo '{ "message": "Missing post data."}';
    exit();
}

// If no id is set create new concert
if(!isset($post_data["id"])){
    $success = $connection->createConcert($post_data);

// Edit existing concert
} else {
    $success = $connection->updateConcert($post_data);
}

// Check for errors
if( !$success ){
    http_response_code(500);
    echo '{ "message": "Error while accessing database."}';
    exit();
}

// Success
http_response_code(200);
