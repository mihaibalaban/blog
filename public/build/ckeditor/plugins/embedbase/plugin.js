!function(){var e={_attachScript:function(e,t){var n=new CKEDITOR.dom.element("script");return n.setAttribute("src",e),n.on("error",t),CKEDITOR.document.getBody().append(n),n},sendRequest:function(e,t,n,a){function i(){o&&(o.remove(),delete CKEDITOR._.jsonpCallbacks[r],o=null)}var s={};t=t||{};var o,r=CKEDITOR.tools.getNextNumber();return t.callback="CKEDITOR._.jsonpCallbacks["+r+"]",CKEDITOR._.jsonpCallbacks[r]=function(e){setTimeout((function(){i(),n(e)}))},o=this._attachScript(e.output(t),(function(){i(),a&&a()})),s.cancel=i,s}};CKEDITOR.plugins.add("embedbase",{lang:"ar,az,bg,ca,cs,da,de,de-ch,en,en-au,eo,es,es-mx,et,eu,fr,gl,hr,hu,id,it,ja,ko,ku,lv,nb,nl,oc,pl,pt,pt-br,ro,ru,sk,sq,sr,sr-latn,sv,tr,ug,uk,zh,zh-cn",requires:"dialog,widget,notificationaggregator",onLoad:function(){CKEDITOR._.jsonpCallbacks={}},init:function(){CKEDITOR.dialog.add("embedBase",this.path+"dialogs/embedbase.js")}}),CKEDITOR.plugins.embedBase={createWidgetBaseDefinition:function(t){var n,a=t.lang.embedbase;return{mask:!0,template:"<div></div>",pathName:a.pathName,_cache:{},urlRegExp:/^((https?:)?\/\/|www\.)/i,init:function(){this.on("sendRequest",(function(e){this._sendRequest(e.data)}),this,null,999),this.on("dialog",(function(e){e.data.widget=this}),this),this.on("handleResponse",(function(e){if(!e.data.html){var t=this._responseToHtml(e.data.url,e.data.response);null!==t?e.data.html=t:(e.data.errorMessage="unsupportedUrl",e.cancel())}}),this,null,999)},loadContent:function(e,t){function n(n){s.response=n,a.editor.widgets.instances[a.id]?a._handleResponse(s)&&(a._cacheResponse(e,n),t.callback&&t.callback()):(CKEDITOR.warn("embedbase-widget-invalid"),s.task&&s.task.done())}t=t||{};var a=this,i=this._getCachedResponse(e),s={noNotifications:t.noNotifications,url:e,callback:n,errorCallback:function(e){a._handleError(s,e),t.errorCallback&&t.errorCallback(e)}};if(!i)return t.noNotifications||(s.task=this._createTask()),this.fire("sendRequest",s),s;setTimeout((function(){n(i)}))},isUrlValid:function(e){return this.urlRegExp.test(e)&&!1!==this.fire("validateUrl",e)},getErrorMessage:function(e,n,a){return(a=t.lang.embedbase[e+(a||"")])||(a=e),new CKEDITOR.template(a).output({url:n||""})},_sendRequest:function(t){var n=this,a=e.sendRequest(this.providerUrl,{url:encodeURIComponent(t.url)},t.callback,(function(){t.errorCallback("fetchingFailed")}));t.cancel=function(){a.cancel(),n.fire("requestCanceled",t)}},_handleResponse:function(e){var t={url:e.url,html:"",response:e.response};return!1!==this.fire("handleResponse",t)?(e.task&&e.task.done(),this._setContent(e.url,t.html),!0):(e.errorCallback(t.errorMessage),!1)},_handleError:function(e,n){e.task&&(e.task.cancel(),e.noNotifications||t.showNotification(this.getErrorMessage(n,e.url),"warning"))},_responseToHtml:function(e,t){return"photo"==t.type?'<img src="'+CKEDITOR.tools.htmlEncodeAttr(t.url)+'" alt="'+CKEDITOR.tools.htmlEncodeAttr(t.title||"")+'" style="max-width:100%;height:auto" />':"video"==t.type||"rich"==t.type?(t.html=t.html.replace(/<iframe/g,'<iframe tabindex="-1"'),t.html):null},_setContent:function(e,t){this.setData("url",e),this.element.setHtml(t)},_createTask:function(){return n&&!n.isFinished()||(n=new CKEDITOR.plugins.notificationAggregator(t,a.fetchingMany,a.fetchingOne)).on("finished",(function(){n.notification.hide()})),n.createTask()},_cacheResponse:function(e,t){this._cache[e]=t},_getCachedResponse:function(e){return this._cache[e]}}},_jsonp:e}}();