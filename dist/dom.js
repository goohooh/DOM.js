!function(win){var global=win,doc=global.document,$=function(params,context){return new GetOrMakeDom(params,context)},regXContainsTag=/^\s*<(\w+|!)[^>]*>/,GetOrMakeDom=function(params,context){var currentContext=doc;if(context&&(currentContext=context.nodeType?context:doc.querySelector(context)),!params||""===params||"string"==typeof params&&""===params.trim())return this.length=0,this;if("string"==typeof params&&regXContainsTag.test(params)){var divElm=currentContext.createElement("div");divElm.className="hippo-doc-frag-wrapper";var docFrag=currentContext.createDocumentFragment();docFrag.appendChild(divElm);var queryDiv=docFrag.querySelector("div");queryDiv.innerHTML=params;for(var numberOfChildren=queryDiv.children.length,x=0;x<numberOfChildren;x++)this[x]=queryDiv.children[x];return this.length=numberOfChildren,this}if("object"==typeof params&&params.nodeName)return this.length=1,this[0]=params,this;var nodes;nodes="string"!=typeof params?params:currentContext.querySelectorAll(params.trim());for(var nodeLength=nodes.length,y=0;y<nodeLength;y++)this[y]=nodes[y];return this.length=nodeLength,this};global.$=$,$.fn=GetOrMakeDom.prototype}(window),$.fn.each=function(callback){for(var len=this.length,i=0;i<len;i++)callback.call(this[i],i,this[i]);return this},$.fn.html=function(htmlString){return htmlString?this.each(function(){this.innerHTML=htmlString}):this[0].innerHTML},$.fn.text=function(textString){return textString?this.each(function(){this.textContent=textString}):this[0].textContent.trim()},$.fn.append=function(stringOrObject){return this.each(function(){if("string"==typeof stringOrObject)this.insertAdjacentHTML("beforeend",stringOrObject);else{var that=this;$(stringOrObject).each(function(key,obj){that.insertAdjacentHTML("beforeend",obj.outerHTML)})}})},$.fn.remove=function(){return 1!==this.length?this.each(function(key,obj){obj.parentNode.removeChild(obj)}):void this[0].parentNode.removeChild(this[0])},$.fn.empty=function(){this.each(function(key,obj){for(var children=obj.children,i=children.length;i>0;i--)obj.removeChild(children[i-1])})};