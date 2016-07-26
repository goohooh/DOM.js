// XML은 지원하지 않음
$.ajax = function(ajax_params){
	var request = new XMLHttpRequest(),
		async = true;

	if ( !ajax_params.method ) {
		return console.log("Method parameter shouldn't be Null");
	} else {
		var method = ajax_params.method
	}
	if ( !ajax_params.url ) {
		return console.log("URL parameter shouldn't be Null");
	} else {
		var url = ajax_params.url
	}

	request.open(method, url, async);
	request.send();

	// 비동기 통신을 위한 onreadystatechange 이벤트 등록
	request.onreadystatechange = function( event ) {
		if (request.readyState == 4) {
			console.log(request.responseText);
		}
	}


}