<!DOCTYPE html>
<html>
<head>
	<title>Registeration Page</title>
</head>
<body>

<form method="POST" action="../../Actions/register_action.php">
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
			<td><input type="email" name="reg-email"></td>
		</tr>

		<tr>
			<td><label for="reg-pass">Password <font color="red">*</font></label></td>
			<td><input type="password" name="reg-pass"></td>
		</tr>

		<tr>
			<td><label for="pass-conf">Password Confirmation <font color="red">*</font></label></td>
			<td><input type="password" name="pass-conf"></td>
		</tr>

		<tr>
			<td><button type="submit" name="reg-submit">Register</button></td>
		</tr>

	</table>
</form>

</body>
</html>