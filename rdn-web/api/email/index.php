<?php
require_once 'EmailsController.php';

header('Access-Control-Allow-Origin: https://localhost:4200');
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Methods: POST, GET, DELETE');
header('Content-Type: application/json');

$controller = new EmailsController();
$method = $_SERVER['REQUEST_METHOD'];
$request_uri = $_SERVER['REQUEST_URI'];

if ($method == 'POST') :
    if (stripos($request_uri, 'contacto')) :
        echo json_encode($controller->contactEmail($_POST));
    endif;
endif;
