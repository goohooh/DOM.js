# DOM.js
##Dom helper
Cody Lindley의 'DOM을 깨우치다' 마지막 챕터 실습

---

###Selector : $

 - `$` : `jQuery`처럼 선택. 두번째 인자로 context 값 지정 가능

**Usage**
```javascript
$('ul'); // GetOrMakeDom {0: ul, length: 1}, 선택

// 체이닝 가능
$('ul').append('<li></li>');

// 없는 요소를 찾는다면 새로운 요소를 만들어 반환
var hi = $('<h1>Hi</h1>');
$('body').append(hi);
```

-

###Iteration : each

 - `each()` : iteration 하여 callback 함수 전달

**Usage**
```javascript
// 각 li 요소에 텍스트 추가
$('li').each(function(key, object){
	$(this).append(`text-${key}`);
})
```

-

###Manipulation : html, text, append, remove, empty

 - `html()` : html 문자열 삽입, 인자가 없을경우 선택된 개체의 첫번째 element요소를 반환
 - `text()` : `html()` 메서드와 유사. 텍스트 노드를 다룬다.
 - `append()`: 인자로 `html | text | dom() | NodeList/HTMLCollection | Node | Array` 전달하여 선택 요소 마지막에 삽입
 - `remove()`: 선택된 객체 자신을 삭제
 - `empty() : 선택된 요소의 모든 자식요소 삭제