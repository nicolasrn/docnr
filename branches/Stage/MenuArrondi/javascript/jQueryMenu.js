(function($){
	$.fn.toggleMenuDeroulant=function(options)
	{	
		//pour garder une r�f�rence sur l'objet courant
		var theMenu = $(this);
		
		//parametres par d�fauts
		var defauts = {
			'button' : '.title',
			'menu' : '.menu',
			'deroulable' : '.deroulable',
			'delta' : 0,
			'toTop' : true,
			'css' : {
						'position': 'absolute',
						'overflow': 'hidden',
						'height': '0px',
						'top': '0px',
						'background-color' : 'pink'
					},
			'cssli': {
						'display': 'list-item'
			},
			'listButtonMenu' : {},
			'duration' : 600
		}
		
		//d�l�gation � jQuery pour fusionner les param�tres par d�fauts avec les options de l'utilisateur du plug-in
		var parametres = $.extend(defauts, options);
		
		//mise des propri�t�s si besoin
		//si besoin d'une marge
		if (parametres['delta'] != 0)
			parametres['css']['top'] = parametres['toTop'] === true ? - parametres['delta'] : parametres['delta']; 
		//si besoin de changer le positionnement
		if (!parametres['toTop'])
			parametres['css']['top'] = 'auto';
		
		//attribution du css
		$(theMenu).find(parametres['menu']).css(parametres['css']);
		$(theMenu).find(parametres['deroulable']).css('margin', '0px');
		$(theMenu).find(parametres['deroulable'] + ' li').css(parametres['cssli']);
		
		//lors d'un clic on demande un comportement toggle pour plier et deplier le menu
		$(theMenu).find(parametres['button']).toggle(function(event) {
			//calcul de la taille � allouer lors du d�roulement
			var taille = 0;
			$(theMenu).find(parametres['deroulable']).first().children().each(function(index, item)
			{
				taille += $(item).outerHeight();
			});
			
			var vtop = parametres['toTop'] ? -parametres['delta'] - taille : parametres['delta'] + taille ;
			
			if (vtop > 0) //d�roulage vers le bas
				$(theMenu).find(parametres['menu']).stop().animate({height : taille, bottom: -taille}, {queue : false,duration : parametres['duration']});
			else //d�roulage vers le haut
				$(theMenu).find(parametres['menu']).stop().animate({height : taille, top : vtop}, {queue : false,duration : parametres['duration']});
			
			$.each(parametres['listButtonMenu'], function(index, item) {
				if ($(item).text() != $(theMenu).text() && $(item).find(parametres['menu']).toggleMenuIsOpen())
					$(item).find(parametres['button']).click();
			});
		},
		function(event) {
			if (parametres['toTop'])
				$(theMenu).find(parametres['menu']).stop().animate({height : "0px", top : -parametres['delta']}, {queue : false,duration : parametres['duration']});
			else
				$(theMenu).find(parametres['menu']).stop().animate({height : "0px", bottom: -taille}, {queue : false,duration : parametres['duration']});
		});
		
		return this;
	}
	
	$.fn.toggleMenuIsOpen=function()
	{
		return $(this).height() != 0;
	}
})(jQuery);