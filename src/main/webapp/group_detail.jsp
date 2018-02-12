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

			<div class="card" style="width: 100%">
				<div class="card-block">
					<div class="row">
						<div class="col-md-3">
						<small class="text-muted font-weight-bold">Members</small>
						<br>
						<small class="text-muted  font-weight-bold">5000</small>
						</div>
						<div class="col-md-6">
						  <small class="text-muted  font-weight-bold">Skills</small>
						    <ul class="pl-0">
						  <%for(int i=0;i<=100;i++){ %>
						
							<li class='text-muted ' style='display: inline-block;'
								style="font-size: 15px;"><i class='fa fa-circle text-muted'
								style='font-size: 10px; padding: 3px;'></i>  skillsskillsskills</li>
						
						  <% } %>
						  </ul>
						</div>
						<div class="col-md-3">
						</div>
					</div>
				</div>
			</div>


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