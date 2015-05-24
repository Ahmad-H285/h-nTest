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
			mysqli_close($this->con);

		}

		echo "Your Registration has been completed successfull";
	}

	function login($email, $pass)
	{
		mysqli_select_db($this->con,'reminva2827');

		if(!$email or !$pass )
		{
			die('Please Enter your Email and Password');
		}

		$sql = 'SELECT email,password FROM rev5285_users';

		$result = mysqli_query($this->con, $sql);

		while($row = mysqli_fetch_array($result)) 
		{

			if(($row['email'] == $email) && ($row['password'] == md5($pass,false)))
			{
				die('You have successfully signed in');
			}

		}

		echo "Either your email or password is invalid";
	}

	function check_avail($reg_email)
	{
		mysqli_select_db($this->con,'reminva2827');

		if($reg_email)
		{
			$sql = 'SELECT email FROM rev5285_users';

			$result = mysqli_query($this->con, $sql);

			while($row = mysqli_fetch_array($result))
			{
				if($row['email'] == $reg_email)
				{
					die('This email already exists');
				}
			}

			echo "Email Available";
		}
	}	

}

?>