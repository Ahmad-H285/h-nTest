<?php

//echo $_POST['first-name'];

require_once 'functions.php';

$register = new Functions();

$register -> register($_POST['username'], $_POST['first-name'], $_POST['last-name'], $_POST['reg-email'], $_POST['reg-pass'], $_POST['pass-conf']);

//var_dump($register);