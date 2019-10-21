<?php

// Set Content-Type
header("Content-Type: application/json; charset=UTF-8");


// create connection
require __DIR__ . "/../classes/connection.php";
$connection = new Connection();

// extract json post data
$post_data = json_decode(file_get_contents('php://input'), true);

// Get specific concert by id
if( isset($post_data['id']) && $post_data['id'] != "" ) {
    $id = $post_data['id'];
    $concert  = $connection->getConcert($id);

// Wrong parameters
} else {
    http_response_code(400);
    echo '{ "message": "Wrong parameters: No Id found."}';
    exit();
}

// wrong id
if( !$concert ) {
  http_response_code(404);
  echo '{ "message": "Wrong concert id."}';
  exit();

}

// success
$json = json_encode($concert, JSON_UNESCAPED_UNICODE);
header('Content-Type: application/json');
http_response_code(200);
echo $json;
