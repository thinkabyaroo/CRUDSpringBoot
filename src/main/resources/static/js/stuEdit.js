$(document).ready(function() {

	var url = window.location.href;
	console.log('url:' + url);
	var lastChar = url.charAt(url.length - 1);
	console.log('Last Char:' + lastChar);

	$.ajax({
		type: "POST",
		cache: false,
		//data:JSON.stringify(student),
		url: "/studentById/" + lastChar,
		contentType: "application/json; charset=utf-8",
		success: function(response) {
			$("#id").val(response.id)
			$("#stuName").val(response.name)
			$("#grade").val(response.grade)

			console.log(response.name);//JSON.parse();
		},
		error: function(response) {

		}
	});

	//edit action
	$("#edit").click(function() {
		let student = {};
		student.id = $("#id").val()
		student.name = $("#stuName").val()
		student.grade = $("#grade").val()
		
		$.ajax({
			type: "POST",
			cache: false,
			data: JSON.stringify(student),
			url: "/studentResult",
			contentType: "application/json; charset=utf-8" ,
			success: function(response) {
				window.location.replace("http://localhost:8080/studentMainPage");
				console.log(response);//JSON.parse();
			},
			error: function(response) {

			}
		});
	});

});