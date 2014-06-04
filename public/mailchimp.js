

function emailpost() {
  console.log("here")
	$.ajax({
			url: "/subscribe",
			type: "post",
			data: {
				email: $("#emailbox").val()
			},
			success: function(data) {
			console.log('ok');
			window.location.href = '/';
			}
	});
	return false;	
}
