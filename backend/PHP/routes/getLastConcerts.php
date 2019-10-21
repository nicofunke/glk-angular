<?php

// Set Content-Type
header("Content-Type: application/json; charset=UTF-8");

// create connection
require_once __DIR__ . "/../classes/connection.php";
$connection = new Connection();

// Get specific group
if( isset($_GET['group']) && $_GET['group'] != "" ) {
    $group = $_GET['group'];

// No group defined -> All groups
} else {
    $group = "*";
}

// with limit of concerts
if( isset($_GET['limit']) && $_GET['limit'] != "" ) {
    $limit = $_GET['limit'];

// Without limit -> 10,000 concerts
// todo: no limit
} else {
    $limit = 10000;
}

$concerts = $connection->getLastConcerts($limit, $group);

// wrong parameters
if( !$concerts ) {
  http_response_code(404);
  echo '{ "message": "No concerts found."}';
  exit();
}

// success
$json = json_encode($concerts, JSON_UNESCAPED_UNICODE);
header('Content-Type: application/json');
http_response_code(200);
echo $json;
