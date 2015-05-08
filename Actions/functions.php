<?php

Class Functions
{
	private $con;

	function __construct()
	{
		//echo "hello";
		$this->con = mysqli_connect('localhost','root','root');

		if(!$this->con)
		{
			die('Connection to database failed');
		}

	}

	function register($username, $first_name, $last_name, $email, $pass, $pass_conf)
	{
		mysqli_select_db($this->con, 'reminva2827');

		if(!($first_name) or !($last_name) or !($email) or !($pass))
		{
			
			die("Please fill the required fields");
		}

		else 
		{
			if(!($pass == $pass_conf))
			{
				die('Password Does Not Match Password Confirmation');
			}

			$name = $first_name . $last_name;

			$password = md5($pass, false);

			$sql = "INSERT INTO `rev5285_users`(`name`, `email`, `username`, `password`) VALUES ('$name','$email','$username','$password')";

			mysqli_query($this->con,$sql);
			mysql_close($this->con);

		}

		echo "Your Registration has been completed successfull";
	}	
}

?>