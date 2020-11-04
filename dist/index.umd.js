!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e(((t="undefined"!=typeof globalThis?globalThis:t||self).google=t.google||{},t.google.maps=t.google.maps||{},t.google.maps.plugins=t.google.maps.plugins||{},t.google.maps.plugins.loader={}))}(this,(function(t){"use strict";var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(t,e){return t(e={exports:{}},e.exports),e.exports}var r=function(t){return t&&t.Math==Math&&t},o=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof e&&e)||Function("return this")(),i=function(t){try{return!!t()}catch(t){return!0}},c=!i((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),a={}.propertyIsEnumerable,u=Object.getOwnPropertyDescriptor,s={f:u&&!a.call({1:2},1)?function(t){var e=u(this,t);return!!e&&e.enumerable}:a},f=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},l={}.toString,p=function(t){return l.call(t).slice(8,-1)},h="".split,d=i((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==p(t)?h.call(t,""):Object(t)}:Object,v=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},g=function(t){return d(v(t))},y=function(t){return"object"==typeof t?null!==t:"function"==typeof t},m=function(t,e){if(!y(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!y(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!y(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!y(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")},b={}.hasOwnProperty,S=function(t,e){return b.call(t,e)},w=o.document,j=y(w)&&y(w.createElement),E=function(t){return j?w.createElement(t):{}},T=!c&&!i((function(){return 7!=Object.defineProperty(E("div"),"a",{get:function(){return 7}}).a})),L=Object.getOwnPropertyDescriptor,O={f:c?L:function(t,e){if(t=g(t),e=m(e,!0),T)try{return L(t,e)}catch(t){}if(S(t,e))return f(!s.f.call(t,e),t[e])}},k=function(t){if(!y(t))throw TypeError(String(t)+" is not an object");return t},P=Object.defineProperty,M={f:c?P:function(t,e,n){if(k(t),e=m(e,!0),k(n),T)try{return P(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},C=c?function(t,e,n){return M.f(t,e,f(1,n))}:function(t,e,n){return t[e]=n,t},x=function(t,e){try{C(o,t,e)}catch(n){o[t]=e}return e},A="__core-js_shared__",I=o[A]||x(A,{}),_=Function.toString;"function"!=typeof I.inspectSource&&(I.inspectSource=function(t){return _.call(t)});var N,D,F,G,R=I.inspectSource,K=o.WeakMap,V="function"==typeof K&&/native code/.test(R(K)),z=n((function(t){(t.exports=function(t,e){return I[t]||(I[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.5",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})})),B=0,H=Math.random(),U=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++B+H).toString(36)},q=z("keys"),W={},J=o.WeakMap;if(V){var Y=new J,Q=Y.get,X=Y.has,Z=Y.set;N=function(t,e){return Z.call(Y,t,e),e},D=function(t){return Q.call(Y,t)||{}},F=function(t){return X.call(Y,t)}}else{var $=q[G="state"]||(q[G]=U(G));W[$]=!0,N=function(t,e){return C(t,$,e),e},D=function(t){return S(t,$)?t[$]:{}},F=function(t){return S(t,$)}}var tt={set:N,get:D,has:F,enforce:function(t){return F(t)?D(t):N(t,{})},getterFor:function(t){return function(e){var n;if(!y(e)||(n=D(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}},et=n((function(t){var e=tt.get,n=tt.enforce,r=String(String).split("String");(t.exports=function(t,e,i,c){var a=!!c&&!!c.unsafe,u=!!c&&!!c.enumerable,s=!!c&&!!c.noTargetGet;"function"==typeof i&&("string"!=typeof e||S(i,"name")||C(i,"name",e),n(i).source=r.join("string"==typeof e?e:"")),t!==o?(a?!s&&t[e]&&(u=!0):delete t[e],u?t[e]=i:C(t,e,i)):u?t[e]=i:x(e,i)})(Function.prototype,"toString",(function(){return"function"==typeof this&&e(this).source||R(this)}))})),nt=o,rt=function(t){return"function"==typeof t?t:void 0},ot=function(t,e){return arguments.length<2?rt(nt[t])||rt(o[t]):nt[t]&&nt[t][e]||o[t]&&o[t][e]},it=Math.ceil,ct=Math.floor,at=function(t){return isNaN(t=+t)?0:(t>0?ct:it)(t)},ut=Math.min,st=function(t){return t>0?ut(at(t),9007199254740991):0},ft=Math.max,lt=Math.min,pt=function(t){return function(e,n,r){var o,i=g(e),c=st(i.length),a=function(t,e){var n=at(t);return n<0?ft(n+e,0):lt(n,e)}(r,c);if(t&&n!=n){for(;c>a;)if((o=i[a++])!=o)return!0}else for(;c>a;a++)if((t||a in i)&&i[a]===n)return t||a||0;return!t&&-1}},ht={includes:pt(!0),indexOf:pt(!1)}.indexOf,dt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype"),vt={f:Object.getOwnPropertyNames||function(t){return function(t,e){var n,r=g(t),o=0,i=[];for(n in r)!S(W,n)&&S(r,n)&&i.push(n);for(;e.length>o;)S(r,n=e[o++])&&(~ht(i,n)||i.push(n));return i}(t,dt)}},gt={f:Object.getOwnPropertySymbols},yt=ot("Reflect","ownKeys")||function(t){var e=vt.f(k(t)),n=gt.f;return n?e.concat(n(t)):e},mt=function(t,e){for(var n=yt(e),r=M.f,o=O.f,i=0;i<n.length;i++){var c=n[i];S(t,c)||r(t,c,o(e,c))}},bt=/#|\.prototype\./,St=function(t,e){var n=jt[wt(t)];return n==Tt||n!=Et&&("function"==typeof e?i(e):!!e)},wt=St.normalize=function(t){return String(t).replace(bt,".").toLowerCase()},jt=St.data={},Et=St.NATIVE="N",Tt=St.POLYFILL="P",Lt=St,Ot=O.f,kt=function(t,e){var n,r,i,c,a,u=t.target,s=t.global,f=t.stat;if(n=s?o:f?o[u]||x(u,{}):(o[u]||{}).prototype)for(r in e){if(c=e[r],i=t.noTargetGet?(a=Ot(n,r))&&a.value:n[r],!Lt(s?r:u+(f?".":"#")+r,t.forced)&&void 0!==i){if(typeof c==typeof i)continue;mt(c,i)}(t.sham||i&&i.sham)&&C(c,"sham",!0),et(n,r,c,t)}},Pt=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t},Mt=function(t,e,n){if(Pt(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}},Ct=Array.isArray||function(t){return"Array"==p(t)},xt=!!Object.getOwnPropertySymbols&&!i((function(){return!String(Symbol())})),At=xt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,It=z("wks"),_t=o.Symbol,Nt=At?_t:_t&&_t.withoutSetter||U,Dt=function(t){return S(It,t)||(xt&&S(_t,t)?It[t]=_t[t]:It[t]=Nt("Symbol."+t)),It[t]},Ft=Dt("species"),Gt=function(t,e){var n;return Ct(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!Ct(n.prototype)?y(n)&&null===(n=n[Ft])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)},Rt=[].push,Kt=function(t){var e=1==t,n=2==t,r=3==t,o=4==t,i=6==t,c=5==t||i;return function(a,u,s,f){for(var l,p,h=Object(v(a)),g=d(h),y=Mt(u,s,3),m=st(g.length),b=0,S=f||Gt,w=e?S(a,m):n?S(a,0):void 0;m>b;b++)if((c||b in g)&&(p=y(l=g[b],b,h),t))if(e)w[b]=p;else if(p)switch(t){case 3:return!0;case 5:return l;case 6:return b;case 2:Rt.call(w,l)}else if(o)return!1;return i?-1:r||o?o:w}},Vt={forEach:Kt(0),map:Kt(1),filter:Kt(2),some:Kt(3),every:Kt(4),find:Kt(5),findIndex:Kt(6)},zt=function(t,e){var n=[][t];return!!n&&i((function(){n.call(null,e||function(){throw 1},1)}))},Bt=Object.defineProperty,Ht={},Ut=function(t){throw t},qt=Vt.forEach,Wt=zt("forEach"),Jt=function(t,e){if(S(Ht,t))return Ht[t];e||(e={});var n=[][t],r=!!S(e,"ACCESSORS")&&e.ACCESSORS,o=S(e,0)?e[0]:Ut,a=S(e,1)?e[1]:void 0;return Ht[t]=!!n&&!i((function(){if(r&&!c)return!0;var t={length:-1};r?Bt(t,1,{enumerable:!0,get:Ut}):t[1]=1,n.call(t,o,a)}))}("forEach"),Yt=Wt&&Jt?[].forEach:function(t){return qt(this,t,arguments.length>1?arguments[1]:void 0)};kt({target:"Array",proto:!0,forced:[].forEach!=Yt},{forEach:Yt});var Qt=[].join,Xt=d!=Object,Zt=zt("join",",");kt({target:"Array",proto:!0,forced:Xt||!Zt},{join:function(t){return Qt.call(g(this),void 0===t?",":t)}});var $t={};$t[Dt("toStringTag")]="z";var te="[object z]"===String($t),ee=Dt("toStringTag"),ne="Arguments"==p(function(){return arguments}()),re=te?p:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),ee))?n:ne?p(e):"Object"==(r=p(e))&&"function"==typeof e.callee?"Arguments":r},oe=te?{}.toString:function(){return"[object "+re(this)+"]"};te||et(Object.prototype,"toString",oe,{unsafe:!0});var ie=o.Promise,ce=M.f,ae=Dt("toStringTag"),ue=Dt("species"),se={},fe=Dt("iterator"),le=Array.prototype,pe=Dt("iterator"),he=function(t,e,n,r){try{return r?e(k(n)[0],n[1]):e(n)}catch(e){var o=t.return;throw void 0!==o&&k(o.call(t)),e}},de=n((function(t){var e=function(t,e){this.stopped=t,this.result=e};(t.exports=function(t,n,r,o,i){var c,a,u,s,f,l,p,h,d=Mt(n,r,o?2:1);if(i)c=t;else{if("function"!=typeof(a=function(t){if(null!=t)return t[pe]||t["@@iterator"]||se[re(t)]}(t)))throw TypeError("Target is not iterable");if(void 0!==(h=a)&&(se.Array===h||le[fe]===h)){for(u=0,s=st(t.length);s>u;u++)if((f=o?d(k(p=t[u])[0],p[1]):d(t[u]))&&f instanceof e)return f;return new e(!1)}c=a.call(t)}for(l=c.next;!(p=l.call(c)).done;)if("object"==typeof(f=he(c,d,p.value,o))&&f&&f instanceof e)return f;return new e(!1)}).stop=function(t){return new e(!0,t)}})),ve=Dt("iterator"),ge=!1;try{var ye=0,me={next:function(){return{done:!!ye++}},return:function(){ge=!0}};me[ve]=function(){return this},Array.from(me,(function(){throw 2}))}catch(t){}var be,Se,we,je=Dt("species"),Ee=ot("document","documentElement"),Te=ot("navigator","userAgent")||"",Le=/(iphone|ipod|ipad).*applewebkit/i.test(Te),Oe=o.location,ke=o.setImmediate,Pe=o.clearImmediate,Me=o.process,Ce=o.MessageChannel,xe=o.Dispatch,Ae=0,Ie={},_e="onreadystatechange",Ne=function(t){if(Ie.hasOwnProperty(t)){var e=Ie[t];delete Ie[t],e()}},De=function(t){return function(){Ne(t)}},Fe=function(t){Ne(t.data)},Ge=function(t){o.postMessage(t+"",Oe.protocol+"//"+Oe.host)};ke&&Pe||(ke=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return Ie[++Ae]=function(){("function"==typeof t?t:Function(t)).apply(void 0,e)},be(Ae),Ae},Pe=function(t){delete Ie[t]},"process"==p(Me)?be=function(t){Me.nextTick(De(t))}:xe&&xe.now?be=function(t){xe.now(De(t))}:Ce&&!Le?(we=(Se=new Ce).port2,Se.port1.onmessage=Fe,be=Mt(we.postMessage,we,1)):!o.addEventListener||"function"!=typeof postMessage||o.importScripts||i(Ge)||"file:"===Oe.protocol?be=_e in E("script")?function(t){Ee.appendChild(E("script")).onreadystatechange=function(){Ee.removeChild(this),Ne(t)}}:function(t){setTimeout(De(t),0)}:(be=Ge,o.addEventListener("message",Fe,!1)));var Re,Ke,Ve,ze,Be,He,Ue,qe,We={set:ke,clear:Pe},Je=O.f,Ye=We.set,Qe=o.MutationObserver||o.WebKitMutationObserver,Xe=o.process,Ze=o.Promise,$e="process"==p(Xe),tn=Je(o,"queueMicrotask"),en=tn&&tn.value;en||(Re=function(){var t,e;for($e&&(t=Xe.domain)&&t.exit();Ke;){e=Ke.fn,Ke=Ke.next;try{e()}catch(t){throw Ke?ze():Ve=void 0,t}}Ve=void 0,t&&t.enter()},$e?ze=function(){Xe.nextTick(Re)}:Qe&&!Le?(Be=!0,He=document.createTextNode(""),new Qe(Re).observe(He,{characterData:!0}),ze=function(){He.data=Be=!Be}):Ze&&Ze.resolve?(Ue=Ze.resolve(void 0),qe=Ue.then,ze=function(){qe.call(Ue,Re)}):ze=function(){Ye.call(o,Re)});var nn,rn,on=en||function(t){var e={fn:t,next:void 0};Ve&&(Ve.next=e),Ke||(Ke=e,ze()),Ve=e},cn=function(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=Pt(e),this.reject=Pt(n)},an={f:function(t){return new cn(t)}},un=function(t,e){if(k(t),y(e)&&e.constructor===t)return e;var n=an.f(t);return(0,n.resolve)(e),n.promise},sn=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}},fn=o.process,ln=fn&&fn.versions,pn=ln&&ln.v8;pn?rn=(nn=pn.split("."))[0]+nn[1]:Te&&(!(nn=Te.match(/Edge\/(\d+)/))||nn[1]>=74)&&(nn=Te.match(/Chrome\/(\d+)/))&&(rn=nn[1]);var hn,dn,vn,gn,yn,mn,bn,Sn=rn&&+rn,wn=We.set,jn=Dt("species"),En="Promise",Tn=tt.get,Ln=tt.set,On=tt.getterFor(En),kn=ie,Pn=o.TypeError,Mn=o.document,Cn=o.process,xn=ot("fetch"),An=an.f,In=An,_n="process"==p(Cn),Nn=!!(Mn&&Mn.createEvent&&o.dispatchEvent),Dn="unhandledrejection",Fn=Lt(En,(function(){if(!(R(kn)!==String(kn))){if(66===Sn)return!0;if(!_n&&"function"!=typeof PromiseRejectionEvent)return!0}if(Sn>=51&&/native code/.test(kn))return!1;var t=kn.resolve(1),e=function(t){t((function(){}),(function(){}))};return(t.constructor={})[jn]=e,!(t.then((function(){}))instanceof e)})),Gn=Fn||!function(t,e){if(!e&&!ge)return!1;var n=!1;try{var r={};r[ve]=function(){return{next:function(){return{done:n=!0}}}},t(r)}catch(t){}return n}((function(t){kn.all(t).catch((function(){}))})),Rn=function(t){var e;return!(!y(t)||"function"!=typeof(e=t.then))&&e},Kn=function(t,e,n){if(!e.notified){e.notified=!0;var r=e.reactions;on((function(){for(var o=e.value,i=1==e.state,c=0;r.length>c;){var a,u,s,f=r[c++],l=i?f.ok:f.fail,p=f.resolve,h=f.reject,d=f.domain;try{l?(i||(2===e.rejection&&Hn(t,e),e.rejection=1),!0===l?a=o:(d&&d.enter(),a=l(o),d&&(d.exit(),s=!0)),a===f.promise?h(Pn("Promise-chain cycle")):(u=Rn(a))?u.call(a,p,h):p(a)):h(o)}catch(t){d&&!s&&d.exit(),h(t)}}e.reactions=[],e.notified=!1,n&&!e.rejection&&zn(t,e)}))}},Vn=function(t,e,n){var r,i;Nn?((r=Mn.createEvent("Event")).promise=e,r.reason=n,r.initEvent(t,!1,!0),o.dispatchEvent(r)):r={promise:e,reason:n},(i=o["on"+t])?i(r):t===Dn&&function(t,e){var n=o.console;n&&n.error&&(1===arguments.length?n.error(t):n.error(t,e))}("Unhandled promise rejection",n)},zn=function(t,e){wn.call(o,(function(){var n,r=e.value;if(Bn(e)&&(n=sn((function(){_n?Cn.emit("unhandledRejection",r,t):Vn(Dn,t,r)})),e.rejection=_n||Bn(e)?2:1,n.error))throw n.value}))},Bn=function(t){return 1!==t.rejection&&!t.parent},Hn=function(t,e){wn.call(o,(function(){_n?Cn.emit("rejectionHandled",t):Vn("rejectionhandled",t,e.value)}))},Un=function(t,e,n,r){return function(o){t(e,n,o,r)}},qn=function(t,e,n,r){e.done||(e.done=!0,r&&(e=r),e.value=n,e.state=2,Kn(t,e,!0))},Wn=function(t,e,n,r){if(!e.done){e.done=!0,r&&(e=r);try{if(t===n)throw Pn("Promise can't be resolved itself");var o=Rn(n);o?on((function(){var r={done:!1};try{o.call(n,Un(Wn,t,r,e),Un(qn,t,r,e))}catch(n){qn(t,r,n,e)}})):(e.value=n,e.state=1,Kn(t,e,!1))}catch(n){qn(t,{done:!1},n,e)}}};Fn&&(kn=function(t){!function(t,e,n){if(!(t instanceof e))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation")}(this,kn,En),Pt(t),hn.call(this);var e=Tn(this);try{t(Un(Wn,this,e),Un(qn,this,e))}catch(t){qn(this,e,t)}},(hn=function(t){Ln(this,{type:En,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=function(t,e,n){for(var r in e)et(t,r,e[r],n);return t}(kn.prototype,{then:function(t,e){var n,r,o,i=On(this),c=An((n=kn,void 0===(o=k(this).constructor)||null==(r=k(o)[je])?n:Pt(r)));return c.ok="function"!=typeof t||t,c.fail="function"==typeof e&&e,c.domain=_n?Cn.domain:void 0,i.parent=!0,i.reactions.push(c),0!=i.state&&Kn(this,i,!1),c.promise},catch:function(t){return this.then(void 0,t)}}),dn=function(){var t=new hn,e=Tn(t);this.promise=t,this.resolve=Un(Wn,t,e),this.reject=Un(qn,t,e)},an.f=An=function(t){return t===kn||t===vn?new dn(t):In(t)},"function"==typeof ie&&(gn=ie.prototype.then,et(ie.prototype,"then",(function(t,e){var n=this;return new kn((function(t,e){gn.call(n,t,e)})).then(t,e)}),{unsafe:!0}),"function"==typeof xn&&kt({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return un(kn,xn.apply(o,arguments))}}))),kt({global:!0,wrap:!0,forced:Fn},{Promise:kn}),mn=En,bn=!1,(yn=kn)&&!S(yn=bn?yn:yn.prototype,ae)&&ce(yn,ae,{configurable:!0,value:mn}),function(t){var e=ot(t),n=M.f;c&&e&&!e[ue]&&n(e,ue,{configurable:!0,get:function(){return this}})}(En),vn=ot(En),kt({target:En,stat:!0,forced:Fn},{reject:function(t){var e=An(this);return e.reject.call(void 0,t),e.promise}}),kt({target:En,stat:!0,forced:Fn},{resolve:function(t){return un(this,t)}}),kt({target:En,stat:!0,forced:Gn},{all:function(t){var e=this,n=An(e),r=n.resolve,o=n.reject,i=sn((function(){var n=Pt(e.resolve),i=[],c=0,a=1;de(t,(function(t){var u=c++,s=!1;i.push(void 0),a++,n.call(e,t).then((function(t){s||(s=!0,i[u]=t,--a||r(i))}),o)})),--a||r(i)}));return i.error&&o(i.value),n.promise},race:function(t){var e=this,n=An(e),r=n.reject,o=sn((function(){var o=Pt(e.resolve);de(t,(function(t){o.call(e,t).then(n.resolve,r)}))}));return o.error&&r(o.value),n.promise}});for(var Jn in{CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}){var Yn=o[Jn],Qn=Yn&&Yn.prototype;if(Qn&&Qn.forEach!==Yt)try{C(Qn,"forEach",Yt)}catch(t){Qn.forEach=Yt}}var Xn=function(){function t(t){var e=t.apiKey,n=t.channel,r=t.client,o=t.id,i=void 0===o?"__googleMapsScriptId":o,c=t.libraries,a=void 0===c?[]:c,u=t.language,s=t.region,f=t.version,l=t.mapIds,p=t.nonce,h=t.url,d=void 0===h?"https://maps.googleapis.com/maps/api/js":h;this.CALLBACK="__googleMapsCallback",this.callbacks=[],this.done=!1,this.loading=!1,this.version=f,this.apiKey=e,this.channel=n,this.client=r,this.id=i,this.libraries=a,this.language=u,this.region=s,this.mapIds=l,this.nonce=p,this.url=d}return t.prototype.createUrl=function(){var t=this.url;return t+="?callback="+this.CALLBACK,this.apiKey&&(t+="&key="+this.apiKey),this.channel&&(t+="&channel="+this.channel),this.client&&(t+="&client="+this.client),this.libraries.length>0&&(t+="&libraries="+this.libraries.join(",")),this.language&&(t+="&language="+this.language),this.region&&(t+="&region="+this.region),this.version&&(t+="&v="+this.version),this.mapIds&&(t+="&map_ids="+this.mapIds.join(",")),t},t.prototype.load=function(){return this.loadPromise()},t.prototype.loadPromise=function(){var t=this;return new Promise((function(e,n){t.loadCallback((function(t){t?n(t):e()}))}))},t.prototype.loadCallback=function(t){this.callbacks.push(t),this.execute()},t.prototype.setScript=function(){if(this.id&&document.getElementById(this.id))this.callback();else{var t=this.createUrl(),e=document.createElement("script");e.id=this.id,e.type="text/javascript",e.src=t,e.onerror=this.loadErrorCallback.bind(this),e.defer=!0,e.async=!0,this.nonce&&(e.nonce=this.nonce),document.head.appendChild(e)}},t.prototype.loadErrorCallback=function(t){this.onerrorEvent=t,this.callback()},t.prototype.setCallback=function(){window.__googleMapsCallback=this.callback.bind(this)},t.prototype.callback=function(){var t=this;this.done=!0,this.loading=!1,this.callbacks.forEach((function(e){e(t.onerrorEvent)})),this.callbacks=[]},t.prototype.execute=function(){window.google&&window.google.maps&&window.google.maps.version&&(console.warn("Aborted attempt to load Google Maps JS with @googlemaps/js-api-loader.This may result in undesirable behavior as script parameters may not match."),this.callback()),this.done?this.callback():this.loading||(this.loading=!0,this.setCallback(),this.setScript())},t}();t.Loader=Xn,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=index.umd.js.map
