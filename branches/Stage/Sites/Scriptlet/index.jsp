<%@page import="org.apache.log4j.Logger"%>
<%@page import="java.io.PrintWriter"%>
<%@page import="java.io.StringWriter"%>
<%@page import="java.io.InputStreamReader"%>
<%@page import="java.io.BufferedReader"%>
<%@page import="java.io.InputStream"%>
<%@page import="java.net.URLConnection"%>
<%@page import="java.net.URL"%>

<%!
	/**
	 * Fonction permettant de récupérer des données du page distante
	 * @param url : l'url de la page a récupérer
	 * @return String : le code html de la page distante
	 */
	String getDistantData(URL url) throws Exception {
		StringBuffer buffer = new StringBuffer("");
		URLConnection connexion = url.openConnection();
		
		InputStream stream = connexion.getInputStream();
		BufferedReader dataStream = new BufferedReader(new InputStreamReader(stream));
		
		String input = "";
		while((input = dataStream.readLine()) != null)
			buffer.append(input);
		
		dataStream.close();
		stream.close();
		
		return buffer.toString();
	}

	/**
	 * Convertie une exception en String
	 * @param e : une exception
	 * @return String : la trace de pile
	 */
	String writeException(Exception e) {
		StringWriter sw = new StringWriter();
		PrintWriter pw = new PrintWriter(sw);
		e.printStackTrace(pw);
		return sw.toString();
	}
%>

<%
	Logger logger = Logger.getLogger("scriptlet");
	String buffer = "";
	try {
		logger.info("debut try");
		URL url = new URL("http://localhost:8080/Sites");
		buffer = getDistantData(url);
		logger.info("fin try");
	} catch (Exception e) {
		logger.error(writeException(e));
	}
%>
<%= buffer %>
