(function($){
	$.fn.toggleMenuDeroulant=function(options)
	{	
		//pour garder une r�f�rence sur l'objet courant
		var theMenu = $(this);
		//m�morise l'ouverture du menu
		
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
						'background-color' : 'gray'
					},
			'listButtonMenu' : {},
			'duration' : 600
		}
		
		//d�l�gation � jQuery pour fusionner les param�tres par d�fauts avec les options de l'utilisateur du plug-in
		var parametres = $.extend(defauts, options);
		
		//mise des propri�t�s si besoin
		if (parametres['delta'] != 0)
			parametres['css']['top'] = parametres['toTop'] === true ? - parametres['delta'] : parametres['delta']; 
		
		//attribution du css
		$(this).find(parametres['menu']).css(parametres['css']);
		$(this).find(parametres['deroulable']).css('margin', '0px');
		
		//calcul de la taille � allouer lors du d�roulement
		var taille = 0;
		$(this).find(parametres['deroulable']).first().children().each(function(index, item)
		{
			taille += $(item).outerHeight();
		});
		
		//lors d'un clic on demande un comportement toggle pour plier et deplier le menu
		$(this).find(parametres['button']).toggle(function(event) {
			var top = parametres['toTop'] === true ? -parametres['delta'] - taille : parametres['delta'] + taille ;
			$(theMenu).find(parametres['menu']).stop().animate({height : taille,top : top}, {queue : false,duration : parametres['duration']});
			$.each(parametres['listButtonMenu'], function(index, item) {
				if ($(item).text() != $(theMenu).text() && $(item).find(parametres['menu']).toggleMenuIsOpen())
					$(item).find(parametres['button']).click();
			});
		},
		function(event) {
			$(theMenu).find(parametres['menu']).stop().animate({height : "0px",top : -parametres['delta']}, {queue : false,duration : parametres['duration']});
		});
		
		return this;
	}
	
	$.fn.toggleMenuIsOpen=function()
	{
		return $(this).height() != 0;
	}
})(jQuery);