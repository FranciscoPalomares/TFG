$(function() {

    $('#login-form-link').click(function(e) {
		$("#login-form").fadeIn(100);
 		$("#register-form").hide();
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	$('#register-form-link').click(function(e) {
		$("#register-form").fadeIn(100);
 		$("#login-form").hide();
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});

});
