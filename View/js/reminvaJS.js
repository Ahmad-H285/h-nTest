/* these variables are used to check for the validty of form items  */
var emailCheck = false;
var passCheck  = false;
/*****Valdiation variables end******/

/*  the following function is used to check the validity of the fields to either enable or disable the submit 
 *  button in the login and registration forms
 */
function enableFormButton(){
	if (emailCheck && passCheck){ // all of the form fields are valid
		$("#log-reg-button").removeAttr("disabled");
	}
	else{
		$("#log-reg-button").attr("disabled","true");
	}
}

/*
 * the following function is used to check the email address after the user has finished typing it 
 */

$("input[name='login_email']").blur(function(){
	var re_email = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/igm;
	var invalidEmail = '<span id="invalidEmail" style="color: red;">Invalid Email Address</span>';
	var validEmail   = '<span id="validEmail" style="color: green;">Valid Email Address</span>';

	if ($(this).val() == "" || !re_email.test($(this).val())){
		// check to see if there is a message already displayed before adding another one
		if($("#validEmail").length > 0){
			$("#validEmail").remove();
		}
		else if ($("#invalidEmail").length > 0){
			$("#invalidEmail").remove();
		}

		$(this).after(invalidEmail,$(this));
		emailCheck = false;
	}
	else{
		// check to see if there is a message already displayed before adding another one
		if($("#validEmail").length > 0){
			$("#validEmail").remove();
		}
		else if ($("#invalidEmail").length > 0){
			$("#invalidEmail").remove();
		}

		//$(this).after(validEmail,$(this)); // indicate that the email entered is valid
		emailCheck = true;
	}

	enableFormButton();
});


/*
 * the following function is used to monitor the password as the user is typing 
 * to enable/disable the submit button
 */
$("#pass-field").keyup(function(){

	var re_password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
	if ($(this).val() == "" || !re_password.test($(this).val())){
		console.log("Please enter a password that contains at least 8 characters with one capital, small letter and a number");
		console.log($(this).val() +" its length is:  "+ $(this).val().length);
		passCheck = false;
	}
	else{
		console.log("Password entered is good enough");
		passCheck = true;
	}

	enableFormButton();
});