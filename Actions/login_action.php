<?php 

require_once 'functions.php';

$connect = new Functions();

$connect -> login($_POST['login_email'], $_POST['login_pass']);

