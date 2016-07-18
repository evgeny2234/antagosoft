var res;
var data
var Name;

$(document).ready(function(){
	AddMessage();
})

function AddNewUser() {
	Name = document.getElementById('your-name').value;
	if(Name != "") {
		$('.login-popup').addClass("close-popup");
		console.log(Name);
	}
	
}

function AddMessage() {

	if(document.getElementById('message__').value == "") {
		//ничего
	}
	else {
		var text = document.getElementById('message__').value;
		res = JSON.stringify(text); 
		var text = document.getElementById('message__').value = "";
	}
	ParseMessages();
}

function ParseMessages() {

	function fillIn(data) {
		document.getElementById('dialog__space').innerHTML = '';
		console.log(data[i]);
		for(var i=0; i<data.length; i++) {
			if(i%2==0) {
				if(data[i]!=undefined) {
					$('#dialog__space').append("<div class=\"main__content__dialog__message\"><div class=\"main__content__dialog__message__name\"><span>"+data[i+1]+"</span></div><div class=\"main__content__dialog__message__date\"><span>14 января 2014</span></div><div class=\"main__content__dialog__message__msg\">"+data[i]+"</div></div>");
				}
			}
		}
	}

	$.post(
	  "php/api.php",
	  {
	    param1: res,
	    param2: Name,
	  },
	  onAjaxSuccess
	);

	function onAjaxSuccess(data) {
	  // Здесь мы получаем данные, отправленные сервером и выводим их на экран.
	    function loadJSON(callback) {
		    var request = new XMLHttpRequest();
		    request.overrideMimeType("application/json");
		    request.open('GET', 'json/mail_source.json', true);
		    request.onreadystatechange = function() {
		        if (request.readyState == 4 && request.status == "200")
		        {
		            callback(request.responseText);
		        }
		    }
		request.send(null);
		}
		loadJSON(function(response) {
			data = JSON.parse(response);
			fillIn(data);
		});
	}
}


/*var timerId = setInterval(function() {
 	ParseMessages();
}, 100);*/