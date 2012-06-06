(function($)
{
	/**
	 *@param int proximity
	 *@param int iconSmall
	 *@param int iconLarge peut nécessite de revoir le css
	 */
	$.fn.dock=function(options)
	{
		/** fonction
		 * Partie declarative des fonctions
		 * utilise des variables globales
		 */
		function distance(x0, y0, x1, y1) {
			var xDiff = x1-x0;
			var yDiff = y1-y0;
			
			return Math.sqrt(xDiff*xDiff + yDiff*yDiff);
		}

		function registerConstantCheck() {
			if (!animating) {
				animating = true;
				window.setTimeout(callCheck, 15);
			}
		}

		function callCheck() {
			sizeDockIcons();
			animating = false;
			if (redrawReady) {
				redrawReady = false;
				registerConstantCheck();
			}
		}

		//do the maths and resize each icon
		function sizeDockIcons() {
			dock.find("li").each(function() {
				//find the distance from the center of each icon
				var centerX = $(this).offset().left + ($(this).outerWidth()/2.0);
				var centerY = $(this).offset().top + ($(this).outerHeight()/2.0);
				
				var dist = distance(centerX, centerY, mouseX, mouseY);
				
				//determine the new sizes of the icons from the mouse distance from their centres
				var newSize =  (1 - Math.min(1, Math.max(0, dist/parametres.proximity))) * iconDiff + parametres.iconSmall;
				var a = $(this).find("a").css({
					width: newSize
				});
				
				/* $(a).find('span').css({
					left: -$(this).width()
				}); */
			});
		}
		
		/** parametres par defauts
		 * definition des parametres par defaut
		 */
		var defauts=
		{
			proximity: 180,
			iconSmall: 48,
			iconLarge: 128
		};  
		
		/** mise en commun
		 *fusion des parametres
		 */
		var parametres=$.extend(defauts, options);
		
		/** variable
		 *variable globale au plugin
		 */
		var iconDiff = (parametres.iconLarge - parametres.iconSmall);
		var mouseX;
		var	mouseY;
		var dock = $(this);
		var animating = false, redrawReady = false;
		
		/** Partie executive
		 *partie qui lance la gestion du plug-in
		 */
		$(document).bind("mousemove", function(e) {
			if (dock.is(":visible")) {
				mouseX = e.pageX;
				mouseY = e.pageY;
				redrawReady = true;
				registerConstantCheck();
			}
		});
	};
})(jQuery);