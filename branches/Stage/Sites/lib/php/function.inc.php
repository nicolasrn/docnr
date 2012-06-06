<?php
	function ScanDirectory($Directory){
		$data = array();
		$MyDirectory = opendir($Directory) or die('Erreur');
		while($Entry = @readdir($MyDirectory)) {
			/*if(is_dir($Directory.'/'.$Entry)&& $Entry != '.' && $Entry != '..') {
				echo '<ul>'.$Directory;
				ScanDirectory($Directory.'/'.$Entry);
				echo '</ul>';
			}
			else {
				echo '<li>'.$Entry.'</li>';
			}*/
			if (strpos($Entry, '.') === false && strpos($Entry, 'lib') === false && strpos($Entry, 'jahia') === false)
				array_push($data, $Entry);
		}
		return $data;
	}
?>
