$(document).ready(function() {

	$("#register").click(function() {
		let student = {};
		student.name = $("#stuName").val()
		student.grade = $("#grade").val()

		$.ajax({
			type: "POST",
			cache: false,
			data: JSON.stringify(student),
			url: "/studentResult",
			contentType: "application/json; charset=utf-8",
			success: function(response) {
				window.location.replace("http://localhost:8080/studentMainPage");
				console.log(response);//JSON.parse();
			},
			error: function(response) {

			}
		});
	});


});
