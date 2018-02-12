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
	<div class="row">
	<div class="col-md-6"></div>xSDds
	      
	<div class="col-md-6">
	<div class="row">
		<div class="col-4">
		<select id="group_name" class="form-control" multiple="multiple">
					<option value=""></option>
					<option value="North">North</option>
					<option value="South">South</option>
					<option value="East">East</option>
					<option value="West">West</option>
				</select>
		</div>
		<div class="col-4">
		<select id="group_name1" class="form-control" multiple="multiple">
					<option value=""></option>
					<option value="">NorthNorth</option>
					
				</select>
		</div>
		<div class="col-4">
		<button type="button" class="btn btn-danger">Create</button>
		</div>
	</div>
	</div>
		
		</div>
	<div class="row">
	<% 
	GroupCards groupCards = new GroupCards();
	
	 %>
	<%=groupCards.getGroupCards() %>
		</div>
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