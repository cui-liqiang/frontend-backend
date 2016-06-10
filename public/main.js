$(function() {
	$.ajax({
		type: 'POST',
		url: 'http://service.app.com:8000/api/login',
		xhrFields: { 
	        withCredentials: true 
	    },
	}).then(function(data) {
		$.ajax({
			type: 'GET',
			url: 'http://service.app.com:8000/api/data',
			xhrFields: { 
		        withCredentials: true 
		    }
			dataType: 'JSON'
		}).then(function(data) {
			console.log(data)
		})
	}).fail(function(data) {
		console.log(err);
	});
});