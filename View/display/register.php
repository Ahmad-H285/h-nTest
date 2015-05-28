<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Registeration Page</title>
</head>
<body>

<form method="POST" action="">
	<table>
		
		<tr>
			<td><label for="username">Username (Nickname)</label></td>
			<td><input type="text" name="username"></td>
		</tr>

		<tr>
			<td><label for="first-name">First Name <font color="red">*</font></label></td>
			<td><input type="text" name="first-name"></td>
		</tr>

		<tr>
			<td><label for="last-name">Last Name <font color="red">*</font></label></td>
			<td><input type="text" name="last-name"></td>
		</tr>

		<tr>
			<td><label for="reg-email">Email <font color="red">*</font></label></td>

			<td><input type="text" name="reg-email" id="reg_email" maxlength="256"></td>
			<td><div id="email-result"></div></td>

		</tr>

		<tr>
			<td><label for="reg-pass">Password <font color="red">*</font></label></td>
			<td><input type="password" name="reg-pass" maxlength="20" class="passField"></td>
		</tr>

		<tr>
			<td><label for="pass-conf">Password Confirmation <font color="red">*</font></label></td>
			<td><input type="password" name="pass-conf" maxlength="20" class="passField"></td>
		</tr>

		<tr>
			<td><button type="submit" name="reg-submit" disabled id="log-reg-button">Register</button></td>
		</tr>

	</table>
</form>


<?php 

	if (isset($_POST['reg-pass']) && isset($_POST['pass-conf']) && isset($_POST['reg-email'])) 
	{
		if($_POST['reg-pass'] != $_POST['pass-conf'])
		{
			echo "Password Does Not Match Password Confirmation";
		}

		else
		{
			require_once '../../Actions/functions.php';
			
			$register = new Functions();

			$register -> register($_POST['username'], $_POST['first-name'], $_POST['last-name'], $_POST['reg-email'], $_POST['reg-pass'], $_POST['pass-conf']);

		}
	}
?>

	<script type="text/javascript" src="../../resources/lib/JS/jquery-2.1.4.js"></script>
	<script type="text/javascript" src="../js/reminvaJS.js"></script>
</body>
</html>