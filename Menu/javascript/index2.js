$(function() {
	menuClic = false;
	$(".title").first().click(function() {
		if (menuClic === false)
			$(".contentMenu").stop().animate({height : "100px",top : "-100px"}, {queue : false,duration : 600});
		else
			$(".contentMenu").stop().animate({height : "0px",top : "0px"}, {queue : false,duration : 600});
		menuClic = !menuClic;
	});
});