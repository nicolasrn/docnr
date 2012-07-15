jQuery(function($){

	$('.autoEmpty').each(function(){
		var defaultValue = $(this).val();
		$(this).focus(function(){
			if ($(this).val() == defaultValue)
				$(this).val("");
		});
		$(this).blur(function(){
			if ($(this).val() == "")
				$(this).val(defaultValue);
		});
	});

	$('.placeholder').each(function(){
		var label = $(this).find('label');
		var input = $(this).find('input, textarea');

		if (input.val() != "")
			label.hide();
		
		input.focus(function(){
			if (input.val() == "")
				label.stop().fadeTo(500, 0.5);
		});
		
		input.blur(function(){
			if (input.val() == "")
				label.stop().fadeTo(500, 1);
		});

		input.keypress(function(){
			if (input.val() == "")
				label.stop().hide();
		});

		input.keyup(function(){
			if (input.val() == "")
				label.stop().fade(500, 0.5);
		});
	});

});