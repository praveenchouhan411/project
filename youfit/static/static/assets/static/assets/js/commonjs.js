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

	/*$('.select-city').click( function() {
	   $(this).find(":selected").each(function () {
	            console.log( $(this).val() );
		    url = window.location.href+$(this).val();
		    alert(url);
		    //popitup(url+value);
		    $(location).attr('href') = url;
		    alert($(location).attr('href'));
		    
	    });
	 });*/

	//$('.login').modal('show');			


});


function popitup(url,windowName) {
       newwindow=window.open(url,windowName,'height=200,width=150');
       if (window.focus) {newwindow.focus()}
       return false;
     }

/*
function popupFunction()
{
	alert('function is calling');
	$('#wrapper').show();
}
*/
