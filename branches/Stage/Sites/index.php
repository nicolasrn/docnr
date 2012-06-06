<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="content-type" content="text/html;charset=utf-8" />
		<meta name="generator" content="Adobe GoLive" />
		<title>Navigation intranet</title>
		
		<?php include('lib/php/function.inc.php'); ?>
		
		<link type="text/css" media="screen" rel="stylesheet" href="lib/css/style.css"/>
		
		<script type="text/javascript" src="lib/javascript/jquery-1.7.2.min.js"></script>
		<script type="text/javascript">
			$(function() {
				$('#caption ul li a').each(function(index, item){
					$(item).mouseover(function(){
						$('#frame').attr('src', $(this).attr('href'));
					});
				});
			});
		</script>
	</head>
	
	<body>
		<div id="outline">
			<div id="title">
				<h1>Outil de navigation à travers l'intranet</h1>
			</div>
			<div id="caption">
				<h2>Liens</h2>
					<ul>
					<?php 
						foreach ($data = ScanDirectory('.') as $value) {
					?>		
						<li>
							<?php echo "<a href='./$value'>$value</a>"; ?>
						</li>
					<?php
						}
					?>
					</ul>
			</div>
			<div id="text">
				<h2>Aperçu</h2>
				<div>
					<iframe id="frame"></iframe>
				</div>
			</div>
		</div>
	</body>
</html>