$(function() {
  $('#thankyou').hide();
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
  			$('#thankyou').fadeIn();
  			}
  	});
  	return false;	
  }
  
  
  
  
  


