(function(win) {
	var global = win;
	var doc = global.document;

	// jQuery 처럼 $ 기호를 사용하기로 결정
	var $ = function(params, context){
		return new GetOrMakeDom(params, context);
	};

	var regXContainsTag = /^\s*<(\w+|!)[^>]*>/;

	// GetOrMakeDom으로 부터 생성되는 객체를 '$'를 통해 반환
	var GetOrMakeDom = function(params, context) {
		var currentContext = doc;

		if(context){
			if (context.nodeType){
				// 문서 노드 혹은 element 노드 중 하나
				currentContext = context;
			} else {
				// 문자열 선택자인 경우, 노드를 선택하는 데 사용. 조건절이 undefined 되므로
				currentContext = doc.querySelector(context);
			}
		}

		/*
		 * params가 없으면 빈 객체를 반환
		 */
		if ( !params || params === '' || typeof params === 'string' && params.trim() === '') {
			// 함수도 객체므로, 공통 속성인 length 할당
			this.length = 0;
			return this;
		}

		/*
		 * HTML 문자열일 경우, documentFragment를 생성 하고 개체를 채워 반환
		 */ 
		if(typeof params == 'string' && regXContainsTag.test(params)){
			// documentFragment에는 innerHTML 속성이 없으므로 div를 생성하여 붙인다
			var divElm = currentContext.createElement('div');
			divElm.className = 'hippo-doc-frag-wrapper';

			var docFrag = currentContext.createDocumentFragment();
			docFrag.appendChild(divElm);

			var queryDiv = docFrag.querySelector('div');
			queryDiv.innerHTML = params
			var numberOfChildren = queryDiv.children.length;

			// html문자열이 자식들과 함께 전달될 수 있으므로 nodelist에서 루프를 돌며 개체를 채움
			for (var x = 0; x < numberOfChildren; x++){
				this[x] = queryDiv.children[x]
			}

			// 개체에 length값 부여
			this.length = numberOfChildren;
			return this;
		}

		/*
		 * 단일 노드 참조가 params인 경우, 개체를 채워 반환 
		 */ 
		if (typeof params === 'object' && params.nodeName){
			this.length = 1;
			this[0] = params;
			return this;
		}

		/*
		 개체이지만 노드가 이닌 경우, 노드 리스트나 배열로 가정한다. 그렇지 않은 경우
		 문자열 선택자이므로 노드 리스트를 만든다
		*/
		var nodes;
		if (typeof params !== 'string'){
			//node 리스트나 배열
			nodes = params;
		} else {
			// 문자열일경우
			nodes = currentContext.querySelectorAll(params.trim());
		}
		// 위에서 생성된 벼열이나 노드 리스트에 대해 루프를 돌며 개체를 채움
		var nodeLength = nodes.length;
		for (var y = 0; y < nodeLength; y++){
			this[y] = nodes[y]
		}
		// 개체에 Length값 부여
		this.length = nodeLength;
		return this;
	};

	// 전역 범위로 노출. 이로써 jQuery처럼 사용할 수 있게 된다
	global.$ = $;

	// prototype의 단축 경로
	// jQuery 처럼 $.fn에 연결되는 것은 실제로 GetOrMakeDom.prototype의 속성이 되고,
	// GetOrMakeDom 새성자로부터 만들어지는 모든 개체 인스턴스에 상속된다
	$.fn = GetOrMakeDom.prototype;

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
})(window);