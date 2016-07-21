/*
each 메서드 만들기
 */
$.fn.each = function(callback){
	var len = this.length;

	// 첫번째 인수에 this[i]로 객체 전달, 이어 인자 전달 (i, this[i]) 
	for(var i = 0; i < len; i++){
		callback.call(this[i], i, this[i]);
	}
	// 객체 반환으로 체이닝 가능
	return this;
}