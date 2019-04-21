var validationErrorMsg = "Kindly enter valid mobile number";

var initialText = `<div class="header">
						Welcome to Dream11
			  	   </div>
			  	   <div class="header-content">
			  	   		<p>
			  	   			You have supplied with coupon code for 500 rupees and it can be used only once.<br/>
			  	   			This reward is for making Dream11 as world's No.1 sports game.
		  	   			</p>	
			  	   </div>` 

$(document).ready(function() {
	var instance = getModal();
	setModalValues(initialText, "PROCEED");
	instance.open();
})

function getAuthKey() {
	var mobile = $("#mobile-no").val()
	message = getPopupMesageByValidatingMobile(mobile);
	setModalValues(message, '');

	$('.modal-footer').hide();
	var instance = getModal();
	instance.open();
	setTimeout(function(){
	    instance.close();
	    if (!(validationErrorMsg === message)) {
			$('.first-process').hide(200);
			$('.second-process').show(100);	
		}
	}, 2000);
}

function getPopupMesageByValidatingMobile(mobile) {
	var result = mobile.match(/[0-9]{10}/i)
	var message = "Your Authkey is generating to connect server.<br/>It will take few seconds. Kindly wait ...";
	if (mobile.trim().length !== 10) {
		message = validationErrorMsg;
	} else if (result !== undefined && result[0].length !== 10) {
		message = validationErrorMsg;	
	}

	return message;
}

function getModal() {
	var elem = document.getElementById('modal');
	return M.Modal.init(elem);
}

function setModalValues(header, button) {
	$('#modal .modal-content').html(header);
	$('#modal #modal-close').html(button);
}

function showPrank() {
	$('.dream-container').hide(200);
	$('.prank-container').show(300);
}