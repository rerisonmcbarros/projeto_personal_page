<?php

ob_start();

require_once __DIR__."/vendor/autoload.php";

$router = new \Core\Route("/personalpage", ":");

$router->setNamespace("Controller");

$router->get("/", "Page:home");
$router->post("/", "Page:emailSend");

$router->dispatch();


?>