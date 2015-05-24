<?php

require_once('functions.php');

$avalability = new Functions();

$avalability -> check_avail($_POST['reg-email']);
