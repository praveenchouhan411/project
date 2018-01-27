//$(".submit").click(function(){alert("true");})
/*jQuery( window ).load(function() {
  
  // Run code
  alert("common.js is calling");

});
*/

jQuery(document).ready(function() 
{
	//alert("Its loading");
	console.log( "Document ready is working" );
 	/*$(".header.home-btn.popup").click(function(){
		alert("The paragraph was clicked is it...?");
	})
	*/

 	//this event will call when we click on any div of element in page after document ready

 	$('.header a').click(function(){
    	    //alert('div element function is calling');
	});
	
	$('.header a.tour-popup').hover(function () {
			$('#wrapper').show();
	})
	$('.banner').hover(function () {
			$('#wrapper').hide();
	})	

	$('#id_username').attr('placeholder', 'Username');
	$('#id_password').attr('placeholder', 'Password');

	$('.btn.btn-primary').click(function()
	{
		$('.modal-popup.login').css('display', 'block');
	});
	
	
  	$('.login-button.login_poupup').click(function() 
  	{
  		$('.modal-popup.login').fadeIn();
  		//e.preventDefault();
  		console.log("Test 1");
  		return true;
  	});

  	$('.login-button.profile_popup').click(function()
  	{
  		//alert("Test 2");
  		window.location.href  = "http://127.0.0.1:8000/youfit/profile";

  		console.log("Test M");	
		return true;
  	});

  	$('.close-x').click(function()
  	{
  		//alert("Test 2");
		$('.modal-popup.login').hide();
  	});
	

	formValidation = $( "form.login-form ul").hasClass( "errorlist");

	if(formValidation==true)
	{
		$('.modal-popup.login').css('display', 'block');
	}

	

});

function close_fun()
{
	console.log("Test N");
	$('.modal-popup.login').fadeOut(); 	
	return true; 		
}

function login_poupup()
{
	console.log("Test N");
	$('.modal-popup.login').fadeIn();
  	return true;
}

function profile_pouup()
{	
	console.log("Test M");	
	return true;
}


