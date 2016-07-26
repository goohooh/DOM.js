// XML은 지원하지 않음
// ajax_params = {
// 	method: 'GET, POST, PUT, ...',
// 	url: URL for API,
// 	success: function(data) { ... },
// 	error: function(error) { ... }, [optional]
// 	complete: function(data) { ... } [optional]
// }
$.ajax = function(ajax_params){
	var request = new XMLHttpRequest(),
		success = ajax_params.success,
		async = true;

	if ( !ajax_params.method ) {
		return console.log("Method argument shouldn't be Null");
	} else {
		var method = ajax_params.method
	}
	if ( !ajax_params.url ) {
		return console.log("URL argument shouldn't be Null");
	} else {
		var url = ajax_params.url
	}

	request.open(method, url, async);
	request.send();

	// 비동기 통신을 위한 onreadystatechange 이벤트 등록
	request.onreadystatechange = function( event ) {
		if (request.readyState == 4) {
			if (200 <= request.status && request.status < 300) {
				success({
					status: request.status,
					statusText: request.statusText,
					responseData: request.responseText
				});
			} else {
				if (ajax_params.error) {
					ajax_params.error({
						status: request.status,
						statusText: request.statusText,
						responseData: request.responseText
					});
				}
			}

			if (ajax_params.complete) {
				ajax_params.complete({
					status: request.status,
					statusText: request.statusText,
					responseData: request.responseText
				)};
			}
		}
	}
}