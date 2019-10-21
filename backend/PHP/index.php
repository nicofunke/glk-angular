<?php

session_start();
// Activate this line for debugging 
// $_SESSION["username"] = "glk";

//  error output
// ini_set('display_errors', 1);
// ini_set('display_startup_errors', 1);
// error_reporting(E_ALL);

// CORS-Header
header('Access-Control-Allow-Origin: http://localhost:4200');
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

if ( ! isset($_SERVER['REQUEST_URI']) ){
    require __DIR__ . '/views/404.php';
    exit();
}

switch ( $_SERVER['REQUEST_URI'] ) {
    case '/backend/getNextConcerts' :
        require __DIR__ . '/routes/getNextConcerts.php';
        break;
    case '/backend/getConcert' :
        require __DIR__ . '/routes/getConcert.php';
        break;
    case '/backend/getLastConcerts' :
        require __DIR__ . '/routes/getLastConcerts.php';
        break;
    case '/backend/login' :
        require __DIR__ . '/routes/login.php';
        break;
    case '/backend/authenticate' :
        require __DIR__ . '/routes/authenticate.php';
        break;
    case '/backend/saveConcert' :
        require __DIR__ . '/routes/saveConcert.php';
        break;
    case '/backend/deleteConcert' :
        require __DIR__ . '/routes/deleteConcert.php';
        break;
    case '/backend/logout' :
        require __DIR__ . '/routes/logout.php';
        break;
    default: 
        require __DIR__ . '/views/404.php';
        break;
}