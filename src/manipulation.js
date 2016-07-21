$.fn.html = function(htmlString) {
	if(htmlString){
		return this.each(function(){
			// htmlString 인자를 전달받는 다면 체이닝 가능하도록 리턴
			this.innerHTML = htmlString;
		});
	} else {
		// 인자가 없다면 첫번쨰 개체의 innerHTML 반환, getter
		return this[0].innerHTML
	}
}

// html()과 유사
$.fn.text = function(textString){
	if(textString){
		return this.each(function(){
			this.textContent = textString;
		});
	} else {
		return this[0].textContent.trim();
	}
}

$.fn.append = function(stringOrObject){
	return this.each(function(){
		if(typeof stringOrObject === 'string') {
			// 문자열이므로 요소 끝나기 전에 삽입
			this.insertAdjacentHTML('beforeend', stringOrObject)
		} else {
			// 인자가 객체일 경우 this를 that으로 할당하여 고정(아래 코드에서 this가 바뀌므로)
			var that = this;
			// key, obj 전달
			$(stringOrObject).each(function(key, obj){
				that.insertAdjacentHTML('beforeend', obj.outerHTML);
			});
		}
	})
}

// 자기 자신을 삭제할 때
$.fn.remove = function() {
	if (this.length === 1) {
		this[0].parentNode.removeChild(this[0]);
	} else {
	return this.each(function(key, obj) {
		obj.parentNode.removeChild(obj);
	});
	}
}

// 모든 자식 Node를 삭제할 때
$.fn.empty = function() {
	this.each(function(key, obj){
		var children = obj.children;

		// for문을 0부터 돌리면 배열이 라이브상태로 줄어들게 되어
		// 인덱스(i)와 삭제하려는 타겟이 실제로 매칭되지 않음
		for (var i = children.length; i > 0; i--){
			obj.removeChild(children[i-1]);
		}
	});
}


