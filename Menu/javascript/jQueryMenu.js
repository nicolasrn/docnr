(function($){
	$.fn.toggleMenuDeroulant=function(options)
	{	
		//pour garder une référence sur l'objet courant
		var theMenu = $(this);
		//mémorise l'ouverture du menu
		
		//parametres par défauts
		var defauts = {
			'button' : '.title',
			'delta' : 0,
			'toTop' : true,
			'css' : {
						'position': 'absolute',
						'overflow': 'hidden',
						'height': '0px',
						'top': '0px',
						'background-color' : 'gray'
					},
			'listButtonMenu' : {},
			'duration' : 600
		}
		
		//délégation à jQuery pour fusionner les paramètres par défauts avec les options de l'utilisateur du plug-in
		var parametres = $.extend(defauts, options);
		
		//mise des propriétés si besoin
		if (parametres['delta'] != 0)
			parametres['css']['top'] = parametres['toTop'] ? - parametres['delta'] : parametres['delta']; 
		
		//attribution du css
		$(this).css(parametres['css']);
		$(this).find('.deroulable').css('margin', '0px');
		
		//calcul de la taille à allouer lors du déroulement
		var taille = 0;
		$(this).find('.deroulable').first().children().each(function(index, item)
		{
			taille += $(item).outerHeight();
		});
		
		//lors d'un clic on demande un comportement toggle pour plier et deplier le menu
		$(parametres['button']).toggle(function(event) {
			$(theMenu).stop().animate({height : taille,top : -parametres['delta'] - taille}, {queue : false,duration : parametres['duration']});
			$.each(parametres['listButtonMenu'], function(index, item){
				//alert(item + " != " + parametres['button'] + " = " + (item != parametres['button']));
				if (item[0] != parametres['button'])
				{
					if($(item[1]).toggleMenuIsOpen())
						$(item[0]).click();
				}
			});
		},
		function(event) {
			$(theMenu).stop().animate({height : "0px",top : -parametres['delta']}, {queue : false,duration : parametres['duration']});
		});
			
		return this;
	}
	
	$.fn.toggleMenuIsOpen=function()
	{
		return $(this).height() != 0;
	}
})(jQuery);