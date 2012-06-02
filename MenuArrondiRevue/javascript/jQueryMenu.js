(function($){
	$.fn.toggleMenuDeroulant=function(options)
	{
		//parametres par défauts
		var defauts = {
			'button' : '.title',
			'menu' : '.menu',
			'deroulable' : '.deroulable',
			'delta' : 0,
			'toTop' : true,
			'css' : {
						'height': '0px',
						'top': '0px',
						'border': '0px solid white'
					},
			'cssli': {
						'display': 'list-item'
			},
			'listButtonMenu' : {},
			'duration' : 600
		}
		
		//délégation à jQuery pour fusionner les paramètres par défauts avec les options de l'utilisateur du plug-in
		var parametres = $.extend(defauts, options);
		
		//pour garder une référence sur l'objet courant
		var theMenu = $(this);
		var classMenu = $(this).find(parametres['menu']);
		
		//mise des propriétés si besoin
		//si besoin d'une marge
		if (parametres['delta'] != 0)
			parametres['css']['top'] = parametres['toTop'] === true ? - parametres['delta'] : parametres['delta']; 
		//si besoin de changer le positionnement
		if (!parametres['toTop'])
			parametres['css']['top'] = 'auto';
		
		//attribution du css
		$.data($(classMenu)[0], 'cssBordureMenu', $(classMenu).css('border'));
		
		$(theMenu).find(parametres['menu']).css(parametres['css']);
		$(theMenu).find(parametres['deroulable']).css('margin', '0px');
		$(theMenu).find(parametres['deroulable'] + ' li').css(parametres['cssli']);
		
		//lors d'un clic on demande un comportement toggle pour plier et deplier le menu
		$(theMenu).find(parametres['button']).toggle(function(event) {
			//calcul de la taille à allouer lors du déroulement
			var taille = 0;
			$(theMenu).find(parametres['deroulable']).first().children().each(function(index, item)
			{
				taille += $(item).outerHeight(true);
			});
			
			var vtop = parametres['toTop'] ? -parametres['delta'] - taille : parametres['delta'] + taille ;
			
			$(classMenu).css('border', $.data($(classMenu)[0], 'cssBordureMenu'));
			if (vtop > 0) //déroulage vers le bas
				$(classMenu).stop().animate({
					height : taille,
					bottom: -taille
				}, {
					queue : false,
					duration : parametres['duration'],
					complete: function() {
						
					}
				});
			else //déroulage vers le haut
				$(classMenu).stop().animate({
					height : taille,
					top : vtop
				}, {
					queue : false,
					duration : parametres['duration'], 
					complete: function(){
						
					}
				});
			
			$.each(parametres['listButtonMenu'], function(index, item) {
				if ($(item).text() != $(theMenu).text() && $(item).find(parametres['menu']).toggleMenuIsOpen())
					$(item).find(parametres['button']).click();
			});
		},
		function(event) {
			if (parametres['toTop'])
				$(classMenu).stop().animate({
					height : "0px",
					top : -parametres['delta']
				}, {
					queue : false,
					duration : parametres['duration'], 
					complete: function() {
						$(classMenu).css('border', '0px');
					}
				});
			else
				$(classMenu).stop().animate({
					height : "0px", 
					bottom: -taille
				}, {
					queue : false,
					duration : parametres['duration'], 
					complete: function() {
						$(classMenu).css('border', '0px');
					}
				});
		});
		
		return this;
	}
	
	$.fn.toggleMenuIsOpen=function()
	{
		return $(this).height() != 0;
	}
})(jQuery);