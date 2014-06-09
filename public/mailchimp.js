$(function() {
  $('#thankyou').hide();
  $('#error').hide();
});

 
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
  			$('#subscribe').hide();
  			$('#error').hide();
  			$('#thankyou').fadeIn();
  			},
  			error: function (xhr, ajaxOptions, thrownError) {
                $('#error').fadeIn();
              }
  	});
  	return false;	
  }
  
  
  
  
  


