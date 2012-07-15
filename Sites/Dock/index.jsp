<!DOCTYPE html>
<html lang="fr">
	<head>
		<meta charset="UTF-8" />
		
		<title>Mac OS X Icon Dock - APL Web Development</title>
		
		<link rel="stylesheet" href="dock.css" />
		<!--[if lte IE 7]>
		<link rel="stylesheet" href="dock-ie.css" />
		<![endif]-->
		
		<script type="text/javascript" src="./jquery.min.js"></script>
		<script type="text/javascript" src="./jquery.dock.js"></script>
		
		<script type="text/javascript">
			$(function(){
				$('#dock').dock({
					proximity: 180,
					iconSmall: 16,
					iconLarge: 32
				});
				
				$('#dock2').dock({
					proximity: 180,
					iconSmall: 16,
					iconLarge: 32
				});
			});
		</script>
	</head>
	<body>
		<!-- Note: comments are used between icons to remove white-space when display inline-block is used -->
		<div id="dock" class="dock">
			<ul>
				<li><a href="#address"><span>Address</span><img src="img/icon-address.png" alt="[address]" /></a></li><!--
				--><li><a href="#band"><span>Band</span><img src="img/icon-band.png" alt="[band]" /></a></li><!--
				--><li><a href="#calendar"><span>Calendar</span><img src="img/icon-calendar.png" alt="[calendar]" /></a></li><!--
				--><li class="active"><a href="#chat"><span>Chat</span><img src="img/icon-chat.png" alt="[chat]" /></a></li><!--
				--><li class="active"><a href="#music"><span>Music</span><img src="img/icon-music.png" alt="[music]" /></a></li><!--
				--><li><a href="#photo"><span>Photo</span><img src="img/icon-photo.png" alt="[photo]" /></a></li><!--
				--><li><a href="#text"><span>Text</span><img src="img/icon-text.png" alt="[text]" /></a></li><!--
				--><li><a href="#folder?src=/apps/"><span>Applications</span><img src="img/icon-applications.png" alt="[apps]" /></a></li><!--
				--><li><a href="#folder?src=/pictures/"><span>Pictures</span><img src="img/icon-pictures.png" alt="[pictures]" /></a></li><!--
				--><li><a href="#folder?src=/documents/"><span>Documents</span><img src="img/icon-documents.png" alt="[documents]" /></a></li><!--
				--><li><a href="#bin"><span>Bin</span><img src="img/icon-bin.png" alt="[bin]" /></a></li>
			</ul>
		</div>
		
		<div id="dock2" class="dock">
			<ul>
				<li><a href="#address"><span>Address</span><img src="img/icon-address.png" alt="[address]" /></a></li><!--
				--><li><a href="#band"><span>Band</span><img src="img/icon-band.png" alt="[band]" /></a></li><!--
				--><li><a href="#calendar"><span>Calendar</span><img src="img/icon-calendar.png" alt="[calendar]" /></a></li><!--
				--><li class="active"><a href="#chat"><span>Chat</span><img src="img/icon-chat.png" alt="[chat]" /></a></li><!--
				--><li class="active"><a href="#music"><span>Music</span><img src="img/icon-music.png" alt="[music]" /></a></li><!--
				--><li><a href="#photo"><span>Photo</span><img src="img/icon-photo.png" alt="[photo]" /></a></li><!--
				--><li><a href="#text"><span>Text</span><img src="img/icon-text.png" alt="[text]" /></a></li><!--
				--><li><a href="#folder?src=/apps/"><span>Applications</span><img src="img/icon-applications.png" alt="[apps]" /></a></li><!--
				--><li><a href="#folder?src=/pictures/"><span>Pictures</span><img src="img/icon-pictures.png" alt="[pictures]" /></a></li><!--
				--><li><a href="#folder?src=/documents/"><span>Documents</span><img src="img/icon-documents.png" alt="[documents]" /></a></li><!--
				--><li><a href="#bin"><span>Bin</span><img src="img/icon-bin.png" alt="[bin]" /></a></li>
			</ul>
		</div>
	</body>
</html>