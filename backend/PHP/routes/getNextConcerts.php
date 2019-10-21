<?php

// Set Content-Type
header("Content-Type: application/json; charset=UTF-8");

  
// create connection
require_once __DIR__ . '/../classes/connection.php';
$connection = new Connection();

// Get specific group
if( isset($_POST['group']) && $_POST['group'] != "" ) {
    $group = $_POST['group'];

// No group defined -> All groups
} else {
    $group = "*";
}

$concerts = $connection->getUpcomingConcerts($group);

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
