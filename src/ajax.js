// XML은 지원하지 않음
$.ajax = function(ajax_params){
	var request = new XMLHttpRequest();
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
	if ( !ajax_params.async ) {
		async = false;
	} else {
		async = ajax_params.async
	}

	request.open(method, url, async);
	request.send();
	console.log(request.responseText);
}