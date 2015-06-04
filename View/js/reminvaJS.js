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
	The updateValidationIcons function takes two parameters, validationResult which is either true or false and
	element which the the string refering to the object you want to add the icon next to
	The function will remove any previously added icons and add the relevant icon
 */
function updateValidationIcons(validationResult, element){

	// check to see if there is a message already displayed before adding another one
	if($("#validField").length > 0){
		$("#validField").remove();
	}
	else if ($("#invalidField").length > 0){
		$("#invalidField").remove();
	}

	if (validationResult == true){ // means put valid icon

		$(element).after(valid,$(element));
	}
	else{ // means put invalid icon

		$(element).after(invalid,$(element));
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
	var emailField = "input[name='reg-email']";

	if ($(this).val() == "" || !re_email.test($(this).val())){
		// check to see if there is a message already displayed before adding another one
		
		updateValidationIcons(false,emailField);
		$("#email-result").empty().html("Email Format is incorrect!");
		emailCheck = false;
	}
	else{ // email format is valid
		// check to see if there is a message already displayed before adding another one
		updateValidationIcons(true,emailField);
		
	var remail = $(this).val();
		
			$.ajax({
			type: 'POST',
			url: '../../Actions/aval.php',
			data: {'reg-email':remail},
			dataType: 'text',
			success: function(response) {
				$("#email-result").empty().html(response);
				if (response == "Email Available"){
					updateValidationIcons(true,emailField);
					emailCheck = true;
				}
				else{ // the email is already used
					
					updateValidationIcons(false,emailField);
					emailCheck = false;
				}  
				enableFormButton();
			}
			});
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


/*
 * For item addition validation
 */
 $("#add-new-item").submit(function(event){

 	for (var i = 0; i < $(".required-item-field").length; i++) {
 		var formField = $(".required-item-field").eq(i);
 		if(formField.val() == ""){
 			if(formField.next("#invalidField").length == 0){ // in order not to add it again if there is an icon already
 				formField.after(invalid,formField);
 			}	
 			event.preventDefault();
 		}
 		else {
 			if(formField.next("#invalidField").length >0){ // if the field is not empty, remove the invalid icon if any
 				formField.next("#invalidField").remove();
 			}
 		}
 	}
 });

 $(".required-item-field").bind("change keyup",function(){ // to remove the invalid icon if any once the fields have values
 	if(($(this).val() != "") && ($(this).next("#invalidField").length > 0)) {
 		$(this).next().remove();
 	}
 });