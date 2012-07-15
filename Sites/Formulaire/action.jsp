<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %> 
<%@ taglib prefix="x" uri="http://java.sun.com/jsp/jstl/xml" %> 
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %> 
<%@ taglib prefix="sql" uri="http://java.sun.com/jsp/jstl/sql" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>Affichage des données saisies</title>
	</head>
	
	<body>
		<h1>Données saisies</h1>
		
		Bonjour ${ utilisateur.prenom } ${ utilisateur.nom }, formulaire validé<br/>
		<% String path = request.getServletPath().replaceFirst("[a-z]*\\.jsp", "index.jsp"); %>
		<c:url value='<%= path %>' var="link"/>
		
		<a href="${ link }">return</a>
	</body>
</html>