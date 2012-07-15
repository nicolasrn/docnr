<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %> 
<%@ taglib prefix="x" uri="http://java.sun.com/jsp/jstl/xml" %> 
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %> 
<%@ taglib prefix="sql" uri="http://java.sun.com/jsp/jstl/sql" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>Test formulaire</title>
		
		<script type="text/javascript">
			function valider(form){
				form.submit();
			}
		</script>
		
		<style type="text/css">
			html {
				font-size: 100%;
			}
			
			body {
				font-size: 0.8em;
			}
			
			fieldset {
				width: 45%;
				float: left;
				margin: 0% 1% 0% 1%;
				padding: 1%;
			}
			
			fieldset legend {
				font-size: 1.2em;
				font-weight: bold;
			}
			
			label, input {
				display: block;
				float: left;
				width: 49%;
			}
			
			div.clear {
				clear: both;
			}
			
			div#mainwrapper {
				width: 50%;
				margin: auto;
				height: 100px;
			}
			
			div.erreur {
				color: red;
			}
			
			br {
				clear: left;
			}
			
			h1 {
				text-align: center;
			}
		</style>
	</head>
	
	<body>
		<div id="mainwrapper">
			<h1>Exemple d'utilisation d'un formulaire</h1>
			<form action="/Sites/traitementformulaire.do" method="post">
				<fieldset>
					<legend>Formulaire de test javascript non intrusif</legend>
					<label for="idNom">Nom</label><input type="text" id="idNom" name="nom"><br />
					<c:if test="${ not empty erreurs['nom']}">
						<div class="erreur">${ erreurs['nom'] }</div>
					</c:if>
					<label for="idPrenom">Pr&eacute;nom</label><input type="text" id="idPrenom" name="prenom"><br />
					<c:if test="${ not empty erreurs['prenom']}">
						<div class="erreur">${ erreurs['prenom'] }</div>
					</c:if>
					<input type="submit">
				</fieldset>
			</form>
			
			<form action="/Sites/traitementformulaire.do" method="post">
				<fieldset>
					<legend>Formulaire de test javascript intrusif</legend>
					<label for="idNom2">Nom</label><input type="text" id="idNom2" name="nom"><br />
					<c:if test="${ not empty erreurs['nom']}">
						<div class="erreur">${ erreurs['nom'] }</div>
					</c:if>
					<label for="idPrenom2">Pr&eacute;nom</label><input type="text" id="idPrenom2" name="prenom"><br />
					<c:if test="${ not empty erreurs['prenom']}">
						<div class="erreur">${ erreurs['prenom'] }</div>
					</c:if>
					<input type="button" onclick="valider(this.form);" value="Envoyer">
				</fieldset>
			</form>
		</div>
	</body>
</html>