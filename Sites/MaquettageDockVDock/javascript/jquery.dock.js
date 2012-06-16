(function($){
	$.fn.dock = function(options)
	{
		//parametres par défauts
		var defauts = {
			'proximity': 180,
			'iconSmall': 48, 
			'iconLarge': 128
		}
		
		//délégation à jQuery pour fusionner les paramètres par défauts avec les options de l'utilisateur du plug-in
		var parametres = $.extend(defauts, options);
		
		/**
		 * déclaration des variables
		 */
		var distance = function(x0, y0, x1, y1) {
			var xDiff = x1-x0;
			var yDiff = y1-y0;
			
			return Math.sqrt(xDiff*xDiff + yDiff*yDiff);
		}
		
		var registerConstantCheck = function () {
			debug("registerConstantCheck [START]");
			if (!animating) {
				animating = true;
				
				window.setTimeout(callCheck, 15);
			}
			debug("registerConstantCheck [START]");
		}
		
		var callCheck = function() {
			debug("callCheck [START]");
			sizeDockIcons();
			
			animating = false;
		
			if (redrawReady) {
				redrawReady = false;
				registerConstantCheck();
			}
			debug("callCheck [END]");
		}
		
		//do the maths and resize each icon
		var sizeDockIcons = function() {
			debug("sizeDockIcons [START]");
			dock.find("li").each(function() {
				//find the distance from the center of each icon
				var centerX = $(this).offset().left + ($(this).outerWidth()/2.0);
				var centerY = $(this).offset().top + ($(this).outerHeight()/2.0);
				
				var dist = distance(centerX, centerY, mouseX, mouseY);
				
				//determine the new sizes of the icons from the mouse distance from their centres
				var newSize =  (1 - Math.min(1, Math.max(0, dist/parametres.proximity))) * iconDiff + parametres.iconSmall;
				$(this).find("a").css({width: newSize});
			});
			debug("sizeDockIcons [END]");
		}
		
		var iconDiff = (parametres.iconLarge - parametres.iconSmall);
		var mouseX;
		var mouseY;
		var dock = $(this);
		var animating = false;
		var redrawReady = false;
		
		$(document.body).removeClass("no_js");
		
		//below are methods for maintaining a constant 60fps redraw for the dock without flushing
		$(document).bind("mousemove", function(e) {
			if (dock.is(":visible")) {
				mouseX = e.pageX;
				mouseY = e.pageY;
				
				redrawReady = true;
				registerConstantCheck();
			}
		});
		
		
		return this;
	}
})(jQuery);