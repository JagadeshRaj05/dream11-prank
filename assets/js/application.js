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

var prankContent = `<div class="special-prank-modal-content">
						<div class="gif-sec">
							<img src="assets/gifs/e4.gif">
						</div>
						<div class="prant-content-sec">
							<p class="prank-text">Still Confused?? You are pranked (:P)</p>
							<p class="prank-share">Don't spoil the fun. Share and do prank everyone.</p>
							<p class="prank-hint">Anyone asked about result, tell them server is busy</p>
							<p class="developer-content">@Morattu developers</p>
						</div>
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

	setTimeout(function() {
		var instance = getModal();
		setModalValues(prankContent, 'SHOW ME');
		setPrankCssForModal();
		$('.modal-footer').show();
		instance.open();
	}, 7000)
}

function setPrankCssForModal() {
	$('.modal-content').css('padding','24px').css('background-color', '#E24534');
	$('.modal-footer').css('background-color', '#E24534');
	$('#modal-close').css('background-color', 'white').css('color', '#E24534')
}
