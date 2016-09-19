(function(global, $){
	'use strict';

	if (!Array.isArray){
		Array.isArray = function(obj){
			return Object.prototype.toString.call(obj) === '[object Array]';
		}
	}

	if (!Array.from){
		Array.from = function(arrayLike) {
			var i = 0, list = [];

			if (!arrayLike) throw new Error('argument should be iterable object');
			for (;i < arrayLike.length; i++){
				list.push(arrayLike[i]);
			}

			return list;
		}
	}

	if (!String.prototype.trim) {
		String.prototype.trim = function () {
			return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
		};
	}

	if (!Function.prototype.bind){
		Function.prototype.bind = function () {
			var fn = this, 
				// args를 array화 시키고 디큐로 객체만 빼낸 후
				// 리턴될 함수에 다시 인자를 합칠 수 있다
				args = Array.prototype.slice.call(arguments), 
				object = args.shift();

			return function () {
				return fn.apply(object, args.concat(Array.prototype.slice.call(arguments)));
			}

		}
	}

})(this, this.$);