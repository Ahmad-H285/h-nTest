/* these variables are used to check for the validty of form items  */
var emailCheck = false;
var passCheck  = false;
/*****Valdiation variables end******/

/*Valid and Invalid Indicators*/
/*
 these variables will hold icons that indicate 
 either a valid or invalid data where required
*/
var invalid = '<span id="invalidField" style="margin-left: 10px;"><img style="margin-bottom: -5px;" src="../../resources/media/images/invalid.png" width="20" height="20"></span>';
var valid   = '<span id="validField" style="margin-left: 10px;"><img style="margin-bottom: -5px;" src="../../resources/media/images/valid.png" width="20" height="20"></span>';

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
	the following function will check the password 
	fields to confirm that both hold the same password to enable submission
*/

function passMatchCheck(){ 
	var password_1 = $(".passField:first").val();
	var password_2 = $(".passField:last").val();

	if (password_1 === password_2){
		console.log("Passwords match");
		passCheck = true;
		//enableFormButton();
	}
	else{
		console.log("Passwords do not match");
		passCheck = false;
		//enableFormButton();
	}
}

/*
 * the following function is used to check the email address after the user has finished typing it 
 */

$("input[name='reg-email']").blur(function(){
	var re_email = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/igm;


	if ($(this).val() == "" || !re_email.test($(this).val())){
		// check to see if there is a message already displayed before adding another one
		if($("#validField").length > 0){
			$("#validField").remove();
		}
		else if ($("#invalidField").length > 0){
			$("#invalidField").remove();
		}

		$(this).after(invalid,$(this));
		emailCheck = false;
	}
	else{
		// check to see if there is a message already displayed before adding another one
		if($("#validField").length > 0){
			$("#validField").remove();
		}
		else if ($("#invalidField").length > 0){
			$("#invalidField").remove();
		}

		//$(this).after(valid,$(this)); // indicate that the email entered is valid
		emailCheck = true;
	}

	enableFormButton();
});


/*
 * the following function is used to monitor the password as the user is typing 
 * to enable/disable the submit button
 */
$(".passField").keyup(function(){

	var re_password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
	if ($(this).val() == "" || !re_password.test($(this).val())){
		console.log("Please enter a password that contains at least 8 characters with one capital, small letter and a number");
		console.log($(this).val() +" its length is:  "+ $(this).val().length);
		passCheck = false;
	}
	else{
		console.log("Password entered is good enough");
		passCheck = true;
		passMatchCheck();
	}
	enableFormButton();
});