<%@page import="templates.GroupCards"%>
<%@ page pageEncoding="UTF-8"%>
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">

<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">
<jsp:include page="inc/head.jsp"></jsp:include>
</head>
<body id="generated_page">
	<jsp:include page="inc/navbar.jsp"></jsp:include>
	<div class="loader" style="display: none"></div>
	<div class="container" id="main_container">
	<% 
	GroupCards groupCards = new GroupCards();
	 %>
	<%=groupCards.getGroupCards() %>
	</div>
	<jsp:include page="inc/foot.jsp"></jsp:include>
	<%
		long now = System.currentTimeMillis();
	%>

	<%
		System.err.println("This is the ultimat etest " + (System.currentTimeMillis() - now));
	%>


</body>
</html>