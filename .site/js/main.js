// Main JavaScript Document

$(function(){
	$('.iepngfix').supersleight({
		shim: 'images/site-design/clear.gif'
	});
	$('.clearField').clearField().blur();
	$('#bgImage').maxImage({
		isBackground: true,
		overflow: 'auto'
	});
	$(window).resize(function() {
		if ($('#home_center').length) {
			if (($('#home_center').offset().top < $('#menu_space').height()) && $('#home_center').hasClass('home_vertical_center')) {
				$('#home_center').removeClass('home_vertical_center').addClass('home_center');
			}
			if ($('#home_center').hasClass('home_center') && (($('#footer_space').offset().top + $('#footer_space').height())  < $(window).height())) {
				$('#home_center').removeClass('home_center').addClass('home_vertical_center');
			}
		}
		if ($('#footer').is(':visible') && ($('#content_wrap').height() > ($('#footer').offset().top + $('#footer').height()))) {
			$('#footer').hide();
			$('#footer2').show();
		} else {
			$('#footer2').hide();
			$('#footer').show();
		}
	});
	$(window).resize();
	
	$('#menu_catalogue_search').click(function() {
		if ($('#dropdown').is(':visible')) {
			$('#dropdown_content').load('ajax/search.php');
		} else {
			$('#dropdown').slideDown('fast',function() {
				$('#dropdown_content').fadeIn('fast').load('ajax/search.php');
			});
		}
	});
	
	$('#search_form').submit(function() {
		$('#dropdown').slideDown('fast',function() {
			$('#dropdown_content').show().empty();
			$.post("ajax/search.php", $('#search_form').serialize(), function(data) {	
				$('#dropdown_content').html(data);
			});
		});
		return false;
	});
	
	$(document).bind('click', function(e) {
		var $clicked = $(e.target);
		if (!$clicked.is("#dropdown")&&!$clicked.parents().is("#dropdown_content")&&!$clicked.is("#dropdown_content")&&!$clicked.parents().is("#menu")) {
			$('#dropdown_content').fadeOut('fast',function() {
				$('#dropdown:visible').slideUp('fast');
			});
		}
	});
	
	$('#menu_catalogue_search, #menu_search').hover(function() {
		var src = $('#menu_search_icon').attr('src');
		src = src.replace('icon.png','icon_over.png');
		$('#menu_search_icon').attr('src',src);
		$('#menu_catalogue_search a').addClass('hover');
	}, function() {
		var src = $('#menu_search_icon').attr('src');
		src = src.replace('icon_over.png','icon.png');
		$('#menu_search_icon').attr('src',src);
		$('#menu_catalogue_search a').removeClass('hover');
	});
	
	$('.catalog_thumb').each(function() {
		var $thumbDiv = $(this);
		var $thumb = $('img.thumb',$thumbDiv);
		var $firstIcon = $('.page_icon:first',$thumbDiv);
		$('.page_icon',$thumbDiv).hover(function() {
			var image = $(this).attr('rel');
			$thumb.attr('src', image);
			$('.page_icon',$thumbDiv).removeClass('selected');
			$(this).addClass('selected');
		}, function() {
			var image = $firstIcon.attr('rel');
			$thumb.attr('src', image);
			$('.page_icon',$thumbDiv).removeClass('selected');
			$firstIcon.addClass('selected');
		});
	});
	
	$("body select.quantity").msDropDown({mainCSS:'dd2 ddQuantity',visibleRows:20});
	$('.ddQuantity .ddChild').width(112);
	
	$('body select.select_dropdown').msDropDown({mainCSS:'dd2 ddLong',visibleRows:10}).data("dd");
	$('.ddLong .ddChild').width(239);
	
	$('input[name=same_address]').change(function() {
		if ($(this).is(':checked')) {
			$('input[name=shipping_name]').val($('input[name=billing_name]').val());
			$('input[name=shipping_phone1]').val($('input[name=billing_phone1]').val());
			$('input[name=shipping_phone2]').val($('input[name=billing_phone2]').val());
			$('input[name=shipping_phone3]').val($('input[name=billing_phone3]').val());
			$('input[name=shipping_address]').val($('input[name=billing_address]').val());
			$('input[name=shipping_city]').val($('input[name=billing_city]').val());
			$('input[name=shipping_zip]').val($('input[name=billing_zip]').val());
			var index = $('select[name=billing_state]').attr("selectedIndex");
			$('.ddLong .ddChild a',$('select[name=shipping_state]').closest('td')).eq(index).click();
		} else {
			$('input[name=shipping_name]').val('');
			$('input[name=shipping_phone1]').val('');
			$('input[name=shipping_phone2]').val('');
			$('input[name=shipping_phone3]').val('');
			$('input[name=shipping_address]').val('');
			$('input[name=shipping_city]').val('');
			$('input[name=shipping_zip]').val('');
			$('.ddLong .ddChild a',$('select[name=shipping_state]').closest('td')).eq(0).click();
		}
	});
	
	$('#update_quantities').hide();
	$('.cart_quantity').keydown(function (event) { 
		 // Allow only backspace and delete
        if ( event.keyCode == 46 || event.keyCode == 8 ) {
            // let it happen, don't do anything
        }
        else {
            // Ensure that it is a number and stop the keypress
            if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
                event.preventDefault(); 
            }   
        }
	}).click(function() {
		$(this).focus();
		$(this).select();
	}).blur(function() {
		if ($(this).val() == "" || $(this).val() == 0) {
			$(this).val($(this).attr('rel'));
		}
	});
	$('.quantityDiv .cart_quantity').keydown(function (event) { 
		 // Allow only backspace and delete
        if ( event.keyCode == 46 || event.keyCode == 8 ) {
            // let it happen, don't do anything
        }
        else {
            // Ensure that it is a number and stop the keypress
            if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
                event.preventDefault(); 
            }   
        }
	});
	$('.cart_comments').keyup(function() {
		$('#update_quantities').show();
	});
	
	$('#cart_form').submit(function() {
		if ($('input:radio[name=holes]:checked').val() == 0 || $('input:radio[name=holes]:checked').val() == 1) {
			return true;
		} else {
			alert('Please select Side Holes or Top Holes.');
			return false;
		}
	});
	
	$('#master_holes').each(function() {
		$(this).append('<a href="javascript:" class="top"></a><a href="javascript:" class="side"></a>');
		if ($('.radios #holes_0',this).is(':checked')) {
			$('#master_holes a.side').addClass('selected');
		} else if ($('.radios #holes_1',this).is(':checked')) {
			$('#master_holes a.top').addClass('selected');
		}
		$('.radios',this).hide();
	});
	$('#master_holes a.side').click(function(e) {
		e.preventDefault();
		$('#master_holes a').removeClass('selected');
		$(this).addClass('selected');
		$('#master_holes .radios #holes_0').attr('checked', 'checked');
		$('#update_quantities').show();
	});
	$('#master_holes a.top').click(function(e) {
		e.preventDefault();
		$('#master_holes a').removeClass('selected');
		$(this).addClass('selected');
		$('#master_holes .radios #holes_1').attr('checked', 'checked');
		$('#update_quantities').show();
	});
	
	$('.master_quantity').focus(function() {
		if ($(this).val() == 0 || $(this).val() == "") {
			$(this).val('');
		}
	}).click(function() {
		$(this).focus();
		if ($(this).val() == 0 || $(this).val() == "") {
			$(this).val('');
		}
		$(this).select();
	}).blur(function() {
		if ($(this).val() == "") {
			$(this).val(0);
		}
	}).keydown(function (event) { 
		 // Allow only backspace and delete
        if ( event.keyCode == 46 || event.keyCode == 8 ) {
            // let it happen, don't do anything
        }
        else {
            // Ensure that it is a number and stop the keypress
            if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
                event.preventDefault(); 
            }   
        }
	});
	
	$('#master_form').submit(function(e) {
		var error = true;
		$('input.master_quantity').each(function() {
			if ($(this).val() != 0 && $(this).val() != "") {
				error = false;
			}
		});
		if (error == true) {
			alert('Please select an item quantity.');
			return false;
		} else if ($('input:radio[name=holes]:checked').val() == 0 || $('input:radio[name=holes]:checked').val() == 1) {
			return true;
		} else {
			alert('Please select Side Holes or Top Holes.');
			return false;
		}
	});
});