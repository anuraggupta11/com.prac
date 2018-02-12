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
<div class="d-flex flex-row-reverse">
<div class="m-2">
		<button type="button" class="btn btn-danger m2  ">Create</button>
		</div>
		    <div class="m-2 ">
		
<select multiple="multiple" name="somename0" class="selectbox m-3">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
    </select></div>
    <div class="m-2">
    <select multiple="multiple" name="somename0" class="selectbox m-3">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
    </select> </div>
</div>

	<!-- <div class="row">
	<div class="col-md-6"></div>      
	<div class="col-md-6">
	<div class="row">
		<div class="col-4">
		<select multiple="multiple" name="somename0" class="selectbox">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
    </select>
		</div>
		<div class="col-4">
		<select multiple="multiple" name="somename0" class="selectbox">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
    </select>
		</div>
		<div class="col-4">
		<button type="button" class="btn btn-danger">Create</button>
		</div>
	</div>
	</div>
		
		</div> -->
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