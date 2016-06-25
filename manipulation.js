$.fn.html = function(htmlString) {
	if(htmlString){
		return this.each(function(){
			// htmlString 인자를 전달받는 다면 체이닝 가능하도록 리턴
			this.innerHTML = htmlString;
		});
	} else {
		// 인자가 없다면 첫번쨰 개체의 innerHTML 반환
		return this[0].innerHTML
	}
}