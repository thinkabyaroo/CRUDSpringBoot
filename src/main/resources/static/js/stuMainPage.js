$(document).ready(function() {

	$.ajax({
		type: "POST",
		cache: false,
		//data:JSON.stringify(student),
		url: "/stuRetrieve",
		contentType: "application/json; charset=utf-8",
		success: function(response) {
			//JSON.parse();
			var tr = [];
			for (var i = 0; i < response.length; i++) {
				tr.push('<tr>');

				tr.push('<td>' + response[i].id + '</td>');
				tr.push('<td>' + response[i].name + '</td>');
				tr.push('<td>' + response[i].grade + '</td>');
				tr.push('<td> <a href=studentEdit/' + response[i].id + '>edit</a></td>');
				tr.push('<td> <button class=\'delete\' id=' + response[i].id + '>Delete</button></td>');
				tr.push('/<tr>');
                //response[i].name

				console.log(response[i].id);
				console.log(response[i].name);
				console.log(response[i].grade);
			}
			$('table').append($(tr.join('')));

		},
		error: function(response) {
			console.log("show error message")

		}
	});

	$(document).delegate('.delete', 'click', function() {
		var id = $(this).attr('id');
		//alert(id)
		$.ajax({
			type: "POST",
			cache: false,
			//data:JSON.stringify(student),
			url: "/studentDeleteById/" +id,
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