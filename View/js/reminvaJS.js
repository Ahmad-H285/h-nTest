// jQuery.validator.setDefaults({
//   debug: true,
//   success: "valid"
// });
// $( "#login_form" ).validate({
//   rules: {
//     field: {
//       required: true,
//       email: true
//     }
//   }
// });

// my own code to validate email address: 

$("input[name='login_email']").blur(function(){
	var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/igm;

	var invalidEmail = '<span id="invalidEmail" style="color: red;">Invalid Email Address</span>';
	var validEmail   = '<span id="validEmail" style="color: green;">Valid Email Address</span>';

	if ($(this).val() == "" || !re.test($(this).val())){
		// check to see if there is a message already displayed before adding another one
		if($("#validEmail").length > 0){
			$("#validEmail").remove();
		}
		else if ($("#invalidEmail").length > 0){
			$("#invalidEmail").remove();
		}

		$(this).after(invalidEmail,$(this));
	}
	else{
		// check to see if there is a message already displayed before adding another one
		if($("#validEmail").length > 0){
			$("#validEmail").remove();
		}
		else if ($("#invalidEmail").length > 0){
			$("#invalidEmail").remove();
		}

		$(this).after(validEmail,$(this));

	}
	// debugging

	console.log($(this).val());
});


// Checking email availability in registeration page


// $(document).ready(function(){
// 	$("#reg-email").blur(function(){
		
// 		var reg_email = $("#reg_email").val();

// 		$.post("../../Actions/aval.php", reg_email, function(result){
// 			$("#email-result").innerhtml(result);
//		});
//	});
//});

$(document).ready(function() {
	$("#reg-email").blur(function() {
		var remail = $("#reg_email").val();
		$.ajax({
		type: 'POST',
		url: '../../Actions/aval.php',
		data: remail,
		dataType: 'text',
		success: function(response) {
			$("#email-result").innerHTML(response);
		}
	});
	});
	
});

