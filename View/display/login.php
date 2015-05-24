<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Login Page</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
	<div id="login-form-container">
		<h1>Reminva Login</h1>
	 	<form action="" method="post" id="login_form">
	 		<label for="login_email">Email: </label><br>
	 			<input name="login_email" type="email" id="login-form-field"/><br>

	 		<label for="login_email" >Password: </label><br>
	 			<input name="login_pass" type="password" id="login-form-field"/><br>
	 		<button type="submit" name="login_submit">Submit</button>
			<a href="register.php">Or Register Here</a> 	
			</form>
			
			<?php
				
				if($_POST['login_email'] or $_POST['login_pass'])
				{
					require_once '../../Actions/functions.php';

					$connect = new Functions();

					$connect -> login($_POST['login_email'], $_POST['login_pass']);

				}

			?>
	</div>

	<script type="text/javascript" src="../../resources/lib/JS/jquery-2.1.4.js"></script>
	<script type="text/javascript" src="../js/reminvaJS.js"></script>
</body>
</html>


