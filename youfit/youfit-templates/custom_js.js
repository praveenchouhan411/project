jQuery(document).ready(function($) {
	$('.col_left .left_nav li.current-menu-item ul').css("display","none");
	$('.landing_uk .homemid').hide();
	$('.body_content_1').show();
	
	$('.homepage_content div.content').addClass('hide');
	$('div.banner01 div.content').addClass('see');
	$('div.col1 h3').addClass('select');
	$('div.banner_col.banner01').css("z-index","1");
	$(window).bind ('load resize', function(){
	if($(window).width() > 767){
		$('div.banner_col h3').mouseenter(function() {
			$(this).addClass('select');
			$(this).parent('div.banner_col').css("z-index","1");
			$(this).prev().fadeIn(500).parent('div.banner_col').siblings('div.banner_col').children('div.content').fadeOut(200);
			$(this).prev().parent('div.banner_col').siblings('div.banner_col').children('h3').removeClass('select');
			$(this).prev().parent('div.banner_col').siblings('div.banner_col').css("z-index","0");
		});
	}
	else if($(window).width() <= 767) {
		$('div.banner_col h3').unbind('mouseenter');
        //$('div.banner_col h3 a').unbind('mouseenter');
		$('.banner_wrap .banner_col .content').css({'display':'block'});
	}
	});
	
	$('.selectBox ul').addClass('selectOptions');
	$('.selectOptions li.selectOption').each(function(){
		$(this).children('a').attr('id', $(this).children('a').attr('href'));
		$(this).children('a').removeAttr('href');
	});
	enableSelectBoxes();
	
	/*added for left nav menu to close on mouseout*/
	$(".left_nav .accordion").mouseleave(function() {
		if($(this).children('.dcjq-parent-li').children('a.psubnav').hasClass('active')){
			$(this).children('.dcjq-parent-li').children('a.psubnav').siblings('ul.sub-menu').slideUp('slow');
			$(this).children('.dcjq-parent-li').children('a.psubnav').removeClass('active');
		}
	});
	/*added for older Ie versions table formating*/
	if ( $.browser.msie && $.browser.version <=8) {
		$( ".dark_green_theme_1 .tablecontent").each(function(){
				$( this).find('tr:odd td').addClass('changecolor');										  
		});
		$( ".dark_green_theme_1 .tablecontent td:nth-child(1), .dark_green_theme_1 .tablecontent th:nth-child(1)" ).addClass('noborder');
	}
});

jQuery(document).click(function(e) {
  	if (jQuery(e.target).is('div.selectBox, ul.selectOptions, span.selectArrow, span.selected'))  return true;
  	else jQuery('ul.selectOptions').hide();
});

function goToPage( url ) {
	window.location.href = url;
}

function showHideContent( num ) {
	(function($) {
		$('.homemid').hide();
		$('.body_content_'+num).show();
	})(jQuery);
}

function showHideMenu( num ) {
	(function($) {
		$('.tab_menu ul').hide();
		$('.tab_menu ul').removeClass('zindex');
		$('.menu_'+num+' ul').show();
		$('.menu_'+num+' ul').addClass('zindex');
	})(jQuery);
}

function enableSelectBoxes() {
	jQuery('div.selectBox div').each(function() {
		jQuery(this).siblings('span.selected').html(jQuery(this).children('ul.selectOptions').children('li.selectOption:first').children('a').html());
		jQuery(this).children('ul.selectOptions').attr('value',jQuery(this).children('ul.selectOptions').children('li.selectOption:first').attr('value'));
		jQuery(this).siblings('span.selected,span.selectArrow').click(function(){
			if(jQuery(this).parent().children('div').children('ul.selectOptions').css('display') == 'none'){
				jQuery(this).parent().children('div').children('ul.selectOptions').css('display','block');
			}
			else {
				jQuery(this).parent().children('div').children('ul.selectOptions').css('display','none');
			}
		});
		jQuery(this).find('li.selectOption').click(function(){
			jQuery(this).parent().css('display','none');
			jQuery(this).closest('div.selectBox').attr('value',jQuery(this).attr('value')); 
			var name = String(jQuery(this).children('a').html());
			if( Number(name.length) > 20 ) name = name.slice(0,18)+"...";
			jQuery(this).parent('ul.selectOptions').parent('div').siblings('span.selected').html(name);
		});
	});	
	jQuery(".selectedvalue").html(jQuery('ul.selectOptions').children('li.selectOption:first').children('a').attr('id'));
	jQuery(".selectOptions li").click(function() {
		if( $(this).children('a').attr('target') == '_blank' ) {
			target = '_blank'; 
		}
		else target = '';
		jQuery(".selectedvalue").attr('value',target);
		jQuery(".selectedvalue").html(jQuery(this).children('a').attr('id'));
	});
}

function getRedirect() {
	var ret_link = document.getElementById('selectedvalue').innerHTML; 
	var newtab = jQuery(".selectedvalue").attr('value');
	if( newtab == '' )
		window.location.href = ret_link;
	else
		window.open( ret_link, newtab );
}

function getquotetravelpopupcm(link)
{ 
	model.fn.modalBox({
        directCall: 
            {
        		data : '<div class="testclass" style="color:#3689BB;"><br/><p style="text-align:center">Thank you for visiting <a href="https://insurance.americanexpress.co.in/card-member/">https://insurance.americanexpress.co.in/card-member/</a></p><p>&nbsp;</p><p style="text-align:justify">This is to inform you that you will now be leaving American Express website and landing on the website of Bharti AXA General Insurance Company Ltd. </p><p>&nbsp;</p><p style="text-align:justify">American Express Banking Corp. (AEBC) is the Corporate Agent of Bharti AXA General Insurance Company Ltd. with Registration No. CA0066 and having its Principal office at MGF Metropolitan, Office Tower, Level 7, District Centre, Saket, New Delhi-110017.</p><p>&nbsp;</p><p style="text-align:justify">General Insurance is underwritten by Bharti AXA General Insurance Company Ltd. Dedicated claims and servicing No. 1800 103 5243  </p><p>&nbsp;</p><table style="border:1px #000 solid;padding:10px 20px;" width="92%" align="center"><tr><td><p style="text-align:center;"><strong>The American Express Advantage:</strong></p><p>&nbsp;</p><p><span style="font-size:18px;">&#10003;</span>&nbsp;&nbsp;&nbsp;Avail Doctor Consultation Service via chat anytime, anywhere </p><p><span style="font-size:18px;">&#10003;</span>&nbsp;&nbsp;&nbsp;Dedicated helpline for Claims and Servicing</p><p><span style="font-size:18px;">&#10003;</span>&nbsp;&nbsp;&nbsp;Priority claims processing</p></td></tr></table><p>&nbsp;</p><center><div class="imgsrc">&nbsp;</div></center></div>'
        	}
    	});  
	var s = setTimeout(function(){ redrecttravelQuote(link); },7000); 
	return false;
}
function getquotetravelpopupncm(link)
{ 
	model.fn.modalBox({ 
        directCall: 
            {
        		data : '<div class="testclass" style="color:#3689BB;"><br/><p style="text-align:center">Thank you for visiting <a href="https://insurance.americanexpress.co.in/">https://insurance.americanexpress.co.in/</a></p><p>&nbsp;</p><p style="text-align:justify">This is to inform you that you will now be leaving American Express website and landing on the website of Bharti AXA General Insurance Company Ltd.  </p><p>&nbsp;</p><p style="text-align:justify">American Express Services India Private Limited (AESIPL) is the Corporate Agent of Bharti AXA General Insurance Company Ltd with Registration No. CA0194 and having its Principal office at MGF Metropolitan, Office Tower, Level 7, District Centre, Saket, New Delhi-110017.  </p><p>&nbsp;</p><p style="text-align:justify">General Insurance is underwritten by Bharti AXA General Insurance Company Ltd. Dedicated claims and servicing No. 1800 103 5243  </p><p>&nbsp;</p><table style="border:1px #000 solid;padding:10px 20px;" width="92%" align="center"><tr><td><p style="text-align:center;"><strong>The American Express Advantage:</strong></p><p>&nbsp;</p><p><span style="font-size:18px;">&#10003;</span>&nbsp;&nbsp;&nbsp;Avail Doctor Consultation Service via chat anytime, anywhere </p><p><span style="font-size:18px;">&#10003;</span>&nbsp;&nbsp;&nbsp;Dedicated helpline for Claims and Servicing</p><p><span style="font-size:18px;">&#10003;</span>&nbsp;&nbsp;&nbsp;Priority claims processing</p></td></tr></table><p>&nbsp;</p><center><div class="imgsrc">&nbsp;</div></center></div>'
        	}
    	});  
	var s = setTimeout(function(){ redrecttravelQuote(link); },7000); 
	return false;
}
function getquoteCarpopupCM(link)
{ 
	model.fn.modalBox({
        directCall: 
            {
        		data : '<div class="testclass" style="color:#3689BB;"><br/><p style="text-align:center">Thank you for visiting <a href="https://insurance.americanexpress.co.in/card-member/">https://insurance.americanexpress.co.in/card-member/</a></p><p>&nbsp;</p><p style="text-align:justify">This is to inform you that you will now be leaving American Express website and landing on the website of Bharti AXA General Insurance Company Ltd. </p><p>&nbsp;</p><p style="text-align:justify">American Express Banking Corp. (AEBC) is the Corporate Agent of Bharti AXA General Insurance Company Ltd. with Registration No. CA0066 and having its Principal office at MGF Metropolitan, Office Tower, Level 7, District Centre, Saket, New Delhi-110017.</p><p>&nbsp;</p><p style="text-align:justify">General Insurance is underwritten by Bharti AXA General Insurance Company Ltd. Dedicated claims and servicing No. 1800 103 5243  </p><p>&nbsp;</p><table style="border:1px #000 solid;padding:10px 20px;" width="90%" align="center"><tr><td><p style="text-align:center;"><strong>The American Express Advantage:</strong></p><p>&nbsp;</p><p><span style="font-size:18px;">&#10003;</span>&nbsp;&nbsp;&nbsp;Get 24*7 Road Side Assistance Cover</p><p><span style="font-size:18px;">&#10003;</span>&nbsp;&nbsp;&nbsp;Dedicated helpline for Claims and Servicing</p><p><span style="font-size:18px;">&#10003;</span>&nbsp;&nbsp;&nbsp;Priority claims processing</p></td></tr></table><p>&nbsp;</p><center><div class="imgsrc">&nbsp;</div></center></div>'
        	}
    	});  
	var s = setTimeout(function(){ redrecttravelQuote(link); },7000); 
	return false;
}
function getquoteCarpopupNCM(link)
{ 
	model.fn.modalBox({ 
        directCall: 
            {
        		data : '<div class="testclass" style="color:#3689BB;"><br/><p style="text-align:center">Thank you for visiting <a href="https://insurance.americanexpress.co.in/card-member/">https://insurance.americanexpress.co.in/</a></p><p>&nbsp;</p><p style="text-align:justify">This is to inform you that you will now be leaving American Express website and landing on the website of Bharti AXA General Insurance Company Ltd. </p><p>&nbsp;</p><p style="text-align:justify">American Express Services India Private Limited (AESIPL) is the Corporate Agent of Bharti AXA General Insurance Company Ltd. with Registration No. CA0194 and having its Principal office at MGF Metropolitan, Office Tower, Level 7, District Centre, Saket, New Delhi-110017. </p><p>&nbsp;</p><p style="text-align:justify">General Insurance is underwritten by Bharti AXA General Insurance Company Ltd. Dedicated claims and servicing No. 1800 103 5243  </p><p>&nbsp;</p><table style="border:1px #000 solid;padding:10px 20px;" width="90%" align="center"><tr><td><p style="text-align:center;"><strong>The American Express Advantage:</strong></p><p>&nbsp;</p><p><span style="font-size:18px;">&#10003;</span>&nbsp;&nbsp;&nbsp;Get 24*7 Road Side Assistance Cover</p><p><span style="font-size:18px;">&#10003;</span>&nbsp;&nbsp;&nbsp;Dedicated helpline for Claims and Servicing</p><p><span style="font-size:18px;">&#10003;</span>&nbsp;&nbsp;&nbsp;Priority claims processing</p></td></tr></table><p>&nbsp;</p><center><div class="imgsrc">&nbsp;</div></center></div>'
        	}
    	});  
	var s = setTimeout(function(){ redrecttravelQuote(link); },7000); 
	return false;
}
function redrecttravelQuote(link)
{
	model.fn.modalBox("close");
	window.location.href = link;
}
jQuery(document).ready(function($) 
{
	jQuery("#buynowCTA_carinsurance_cm").click(function(e) {
		var thisHRef = jQuery(this).attr('href');
		getquoteCarpopupCM(thisHRef);
		return false;
	});
	jQuery("#buynowCTA_carinsurance_ncm").click(function(e) {
		var thisHRef = jQuery(this).attr('href');
		getquoteCarpopupNCM(thisHRef);
		return false;
	});
	jQuery("#buynowCTA_travelinsurance_cm").click(function(e) {
		var thisHRef = jQuery(this).attr('href');
		getquotetravelpopupcm(thisHRef);
		return false;
	});
	jQuery("#buynowCTA_travelinsurance_ncm").click(function(e) {
		var thisHRef = jQuery(this).attr('href');
		getquotetravelpopupncm(thisHRef);
		return false;
	});
	/* IE 9 Placeholder Issue */
	
	var version=navigator.appVersion.match(/IE [\d.]+/);
	if(version=="IE 9.0"||version=="IE 8.0")
	{
		/*
		jQuery('input').placeholder();
		jQuery('input').placeholder({ customClass: 'my-placeholder' });
		jQuery('input').css('color','#000');
		jQuery('.my-placeholder').css('color','#535353');
		jQuery('.tfield.error').css('color','#535353');
		*/
		
		var nameField = "Name";
		var contentField = "Mobile Number";
		
		/* Name Placeholder for IE 8 & IE 9 */
		
		$('.tfield.username input').val(nameField);
		$('.tfield.username input').blur(function(){
			$(this).val() == '' ? $(this).val(nameField) : false;
		});
		$('.tfield.username input').focus(function(){
			$(this).val() == nameField ? $(this).val('') : false;
		});
		
		//$('').css('color','');
		/* Contactnumber Placeholder for IE 8 & IE 9 */
		
		$('.tfield.contactnumber input').val(contentField);
		$('.tfield.contactnumber input').blur(function(){
			$(this).val() == '' ? $(this).val(contentField) : false;
		});
		$('.tfield.contactnumber input').focus(function(){
			$(this).val() == contentField ? $(this).val('') : false;
		});
	}
	
	/* Sticky Widget And Apply Now Widget: Starts */
	/*
	jQuery('.sticky_widget').click(function()
	{
		$('.stickywidget_form_wrap').show();
		$('.qq_widget').fadeIn();
		jQuery('.qq_widget').removeClass('applynow_widget');
		jQuery('.qq_widget').removeClass('applynow');
		if(jQuery(this).prev('.qq_widget').css('right') == '44px')
		{
			closeStickyWidget('qq_widget','closebtn');return false;
		}
		else
		{
			jQuery('.stickywidget_thanksmessage').hide();
			jQuery(this).prev('.qq_widget').animate({'right':'44px'});
		}
		clearForm();
	});*/
	jQuery(this).prev('.qq_widget').removeClass('widget_open');
	jQuery('.sticky_widget').click(function()
	{
		$('.stickywidget_form_wrap').show();
		$('.qq_widget').fadeIn();
		jQuery('.qq_widget').removeClass('applynow_widget').addClass('QQSticky');
		jQuery('.qq_widget').removeClass('applynow');
		if(jQuery(this).prev('.qq_widget').hasClass('widget_open'))
		{
			closeStickyWidget('qq_widget','closebtn');return false;
		}
		else
		{
			jQuery('.stickywidget_thanksmessage').hide();
			var positin = jQuery(this).position();
			var wigdet_top = positin.top+44;
			//jQuery(this).prev('.qq_widget').css({'top':wigdet_top});
			jQuery(this).prev('.qq_widget').addClass('widget_open').css({'top':wigdet_top}).show('slow');
		}
		clearForm();
	});
	/* Close button */
	jQuery('span.closebutton, input.close_button').click( function(){ //alert(jQuery(this).closest('.qq_widget').attr('class'));
		if(jQuery(this).closest('.qq_widget').hasClass('applynow_widget'))
			closeStickyWidget('applynow_widget','closebtn');
		else
			closeStickyWidget('qq_widget','closebtn');	
	});	
	
	/* Click on Body */
	if(page_name != 'homepage' && page_name != 'card-member' )
	{
		jQuery(document).on('click', function (event) 
		{
			if (!jQuery(event.target).closest('.qq_widget, .sticky_widget').length)
			{
				//closeStickyWidget('qq_widget','closebtn');
				
				
			}
		});

		jQuery('body').click(function(e) 
		{
			if(!jQuery(e.target).is('.form_fill.stickywidget_wrap, .form_fill.stickywidget_wrap *, p.banner_btn, p.banner_btn *, p.applybtn, p.applybtn *,.sticky_widget'))
			{
				if(jQuery('.qq_widget').hasClass('applynow_widget'))
					closeStickyWidget('applynow_widget','closebtn');
				else
					closeStickyWidget('qq_widget','closebtn');
			}
		});

	}
	
	/* Sticky Widget And Apply Now Widget: Ends  */

});
/*function closeStickyWidget(divcls,clicksection)
{
	jQuery('.'+divcls).animate({'right':'-400px'},function(currentStep) 
	{
		jQuery('.applynow_widget').hide();
		jQuery('.stickywidget_form_wrap').fadeIn();
		jQuery('.stickywidget_thanksmessage').fadeOut();
	});
}*/
function closeStickyWidget(divcls,clicksection)
{
	if(divcls == 'applynow_widget')
	{
		jQuery('.'+divcls).css('right', '').hide('slow');
		jQuery('.qq_widget').removeClass('applynow_widget').removeClass('applynow');
	}
	else
	{
		jQuery('.'+divcls).removeClass('widget_open');
		jQuery('.'+divcls).css('top', '').hide('slow');
		jQuery('.stickywidget_form_wrap').fadeIn();
	}
	jQuery('.stickywidget_form_wrap').fadeIn();
	jQuery('.stickywidget_thanksmessage').fadeOut();
}

function customCheckbox(checkboxName)
{
    var checkBox = jQuery('input[name="'+ checkboxName +'"]');
    jQuery(checkBox).each(function(){
        jQuery(this).wrap( "<em class='custom-checkbox'></em>" );
        if(jQuery(this).is(':checked')){
            jQuery(this).parent().addClass("selected");
        }
    });
    jQuery(checkBox).click(function(){
        jQuery(this).parent().toggleClass("selected");
    });
}

jQuery(document).ready(function ()
{
    customCheckbox("checkbox[]");
    customCheckbox("checkboxpop[]");
	customCheckbox("applycheckbox[]");
})

/* Apply Now Button onclick opens Call me back Widget as popup */
function apply_now() 
{	
	clearForm();
	jQuery('.applynow_widget,.stickywidget_form_wrap').fadeIn();
	jQuery('.stickywidget_thanksmessage').fadeOut();
	jQuery('.qq_widget').addClass('applynow_widget').addClass('applynow');
	if(jQuery('.qq_widget').hasClass('widget_open')) jQuery('.qq_widget').removeClass('widget_open');
	//jQuery('.qq_widget.applynow_widget').find('form').addClass('applynow_form_widget');
	var center_Align =  ($(window).width() - $('.qq_widget').outerWidth())/2;
	jQuery('.qq_widget.applynow_widget').removeAttr("style");jQuery('.qq_widget.applynow_widget').show();
	jQuery('.qq_widget.applynow_widget').animate({'right': center_Align}, function(currentStep) {});
}

/* Form Clear Function */
function clearForm(form) 
{
	jQuery(".ajax_loading").hide();
	jQuery(":input", form).each(function()
	{
		var type = this.type;
		var tag = this.tagName.toLowerCase();
			if (type == 'text')
			{
				if ($.browser.msie && $.browser.version <= 9 ){
					var nameField = "Name";
					var contentField = "Mobile Number";
					/* Name Placeholder for IE 8 & IE 9 */
					$('.tfield.username input').val(nameField);
					/* Contactnumber Placeholder for IE 8 & IE 9 */
					$('.tfield.contactnumber input').val(contentField);
				}
				else
				  	this.value = "";
				
				jQuery(this).closest('div.error').removeClass('error');
				jQuery(this).closest('div').find('span.field_error_msg').text('');
				
			}
			if(type == 'select-one')
			{
				var formName = jQuery(this).closest('form').attr('name'); //console.log(formName);
				if(formName == 'travelForm' || formName == 'form' || formName == 'carForm')
				{
				var SelectedProduct = jQuery(this).closest('div').find('span.defaultProductPage').html();
				
				if(SelectedProduct != '' || SelectedProduct !='Renewal Month')
					jQuery(this).val(SelectedProduct).change();//.find('option[value="'+SelectedProduct+'"]').prop("selected", true);
				}
				jQuery(this).closest('div.error').removeClass('error');
				jQuery(this).closest('div').find('span.field_error_msg').text('');
			}
			
			if(type=="checkbox")
			{
				jQuery('.tfield.checkbox em.custom-checkbox.selected').removeClass('selected');
				jQuery(this).closest('div').find('span.field_error_msg').text('');
				jQuery(this).attr('checked', false); 
				/*
				jQuery('em.custom-checkbox.selected').removeClass('selected');
				jQuery('.checkbox_err').text('');
				*/
			}
			
	});
	return false;
}



