// VENDORS
// ! lazysizes - v5.3.0
!function(e){var t=function(u,D,f){"use strict";var k,H;if(function(){var e;var t={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:true,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:true,ricTimeout:0,throttleDelay:125};H=u.lazySizesConfig||u.lazysizesConfig||{};for(e in t){if(!(e in H)){H[e]=t[e]}}}(),!D||!D.getElementsByClassName){return{init:function(){},cfg:H,noSupport:true}}var O=D.documentElement,i=u.HTMLPictureElement,P="addEventListener",$="getAttribute",q=u[P].bind(u),I=u.setTimeout,U=u.requestAnimationFrame||I,o=u.requestIdleCallback,j=/^picture$/i,r=["load","error","lazyincluded","_lazyloaded"],a={},G=Array.prototype.forEach,J=function(e,t){if(!a[t]){a[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")}return a[t].test(e[$]("class")||"")&&a[t]},K=function(e,t){if(!J(e,t)){e.setAttribute("class",(e[$]("class")||"").trim()+" "+t)}},Q=function(e,t){var a;if(a=J(e,t)){e.setAttribute("class",(e[$]("class")||"").replace(a," "))}},V=function(t,a,e){var i=e?P:"removeEventListener";if(e){V(t,a)}r.forEach(function(e){t[i](e,a)})},X=function(e,t,a,i,r){var n=D.createEvent("Event");if(!a){a={}}a.instance=k;n.initEvent(t,!i,!r);n.detail=a;e.dispatchEvent(n);return n},Y=function(e,t){var a;if(!i&&(a=u.picturefill||H.pf)){if(t&&t.src&&!e[$]("srcset")){e.setAttribute("srcset",t.src)}a({reevaluate:true,elements:[e]})}else if(t&&t.src){e.src=t.src}},Z=function(e,t){return(getComputedStyle(e,null)||{})[t]},s=function(e,t,a){a=a||e.offsetWidth;while(a<H.minSize&&t&&!e._lazysizesWidth){a=t.offsetWidth;t=t.parentNode}return a},ee=function(){var a,i;var t=[];var r=[];var n=t;var s=function(){var e=n;n=t.length?r:t;a=true;i=false;while(e.length){e.shift()()}a=false};var e=function(e,t){if(a&&!t){e.apply(this,arguments)}else{n.push(e);if(!i){i=true;(D.hidden?I:U)(s)}}};e._lsFlush=s;return e}(),te=function(a,e){return e?function(){ee(a)}:function(){var e=this;var t=arguments;ee(function(){a.apply(e,t)})}},ae=function(e){var a;var i=0;var r=H.throttleDelay;var n=H.ricTimeout;var t=function(){a=false;i=f.now();e()};var s=o&&n>49?function(){o(t,{timeout:n});if(n!==H.ricTimeout){n=H.ricTimeout}}:te(function(){I(t)},true);return function(e){var t;if(e=e===true){n=33}if(a){return}a=true;t=r-(f.now()-i);if(t<0){t=0}if(e||t<9){s()}else{I(s,t)}}},ie=function(e){var t,a;var i=99;var r=function(){t=null;e()};var n=function(){var e=f.now()-a;if(e<i){I(n,i-e)}else{(o||r)(r)}};return function(){a=f.now();if(!t){t=I(n,i)}}},e=function(){var v,m,c,h,e;var y,z,g,p,C,b,A;var n=/^img$/i;var d=/^iframe$/i;var E="onscroll"in u&&!/(gle|ing)bot/.test(navigator.userAgent);var _=0;var w=0;var M=0;var N=-1;var L=function(e){M--;if(!e||M<0||!e.target){M=0}};var x=function(e){if(A==null){A=Z(D.body,"visibility")=="hidden"}return A||!(Z(e.parentNode,"visibility")=="hidden"&&Z(e,"visibility")=="hidden")};var W=function(e,t){var a;var i=e;var r=x(e);g-=t;b+=t;p-=t;C+=t;while(r&&(i=i.offsetParent)&&i!=D.body&&i!=O){r=(Z(i,"opacity")||1)>0;if(r&&Z(i,"overflow")!="visible"){a=i.getBoundingClientRect();r=C>a.left&&p<a.right&&b>a.top-1&&g<a.bottom+1}}return r};var t=function(){var e,t,a,i,r,n,s,o,l,u,f,c;var d=k.elements;if((h=H.loadMode)&&M<8&&(e=d.length)){t=0;N++;for(;t<e;t++){if(!d[t]||d[t]._lazyRace){continue}if(!E||k.prematureUnveil&&k.prematureUnveil(d[t])){R(d[t]);continue}if(!(o=d[t][$]("data-expand"))||!(n=o*1)){n=w}if(!u){u=!H.expand||H.expand<1?O.clientHeight>500&&O.clientWidth>500?500:370:H.expand;k._defEx=u;f=u*H.expFactor;c=H.hFac;A=null;if(w<f&&M<1&&N>2&&h>2&&!D.hidden){w=f;N=0}else if(h>1&&N>1&&M<6){w=u}else{w=_}}if(l!==n){y=innerWidth+n*c;z=innerHeight+n;s=n*-1;l=n}a=d[t].getBoundingClientRect();if((b=a.bottom)>=s&&(g=a.top)<=z&&(C=a.right)>=s*c&&(p=a.left)<=y&&(b||C||p||g)&&(H.loadHidden||x(d[t]))&&(m&&M<3&&!o&&(h<3||N<4)||W(d[t],n))){R(d[t]);r=true;if(M>9){break}}else if(!r&&m&&!i&&M<4&&N<4&&h>2&&(v[0]||H.preloadAfterLoad)&&(v[0]||!o&&(b||C||p||g||d[t][$](H.sizesAttr)!="auto"))){i=v[0]||d[t]}}if(i&&!r){R(i)}}};var a=ae(t);var S=function(e){var t=e.target;if(t._lazyCache){delete t._lazyCache;return}L(e);K(t,H.loadedClass);Q(t,H.loadingClass);V(t,B);X(t,"lazyloaded")};var i=te(S);var B=function(e){i({target:e.target})};var T=function(e,t){var a=e.getAttribute("data-load-mode")||H.iframeLoadMode;if(a==0){e.contentWindow.location.replace(t)}else if(a==1){e.src=t}};var F=function(e){var t;var a=e[$](H.srcsetAttr);if(t=H.customMedia[e[$]("data-media")||e[$]("media")]){e.setAttribute("media",t)}if(a){e.setAttribute("srcset",a)}};var s=te(function(t,e,a,i,r){var n,s,o,l,u,f;if(!(u=X(t,"lazybeforeunveil",e)).defaultPrevented){if(i){if(a){K(t,H.autosizesClass)}else{t.setAttribute("sizes",i)}}s=t[$](H.srcsetAttr);n=t[$](H.srcAttr);if(r){o=t.parentNode;l=o&&j.test(o.nodeName||"")}f=e.firesLoad||"src"in t&&(s||n||l);u={target:t};K(t,H.loadingClass);if(f){clearTimeout(c);c=I(L,2500);V(t,B,true)}if(l){G.call(o.getElementsByTagName("source"),F)}if(s){t.setAttribute("srcset",s)}else if(n&&!l){if(d.test(t.nodeName)){T(t,n)}else{t.src=n}}if(r&&(s||l)){Y(t,{src:n})}}if(t._lazyRace){delete t._lazyRace}Q(t,H.lazyClass);ee(function(){var e=t.complete&&t.naturalWidth>1;if(!f||e){if(e){K(t,H.fastLoadedClass)}S(u);t._lazyCache=true;I(function(){if("_lazyCache"in t){delete t._lazyCache}},9)}if(t.loading=="lazy"){M--}},true)});var R=function(e){if(e._lazyRace){return}var t;var a=n.test(e.nodeName);var i=a&&(e[$](H.sizesAttr)||e[$]("sizes"));var r=i=="auto";if((r||!m)&&a&&(e[$]("src")||e.srcset)&&!e.complete&&!J(e,H.errorClass)&&J(e,H.lazyClass)){return}t=X(e,"lazyunveilread").detail;if(r){re.updateElem(e,true,e.offsetWidth)}e._lazyRace=true;M++;s(e,t,r,i,a)};var r=ie(function(){H.loadMode=3;a()});var o=function(){if(H.loadMode==3){H.loadMode=2}r()};var l=function(){if(m){return}if(f.now()-e<999){I(l,999);return}m=true;H.loadMode=3;a();q("scroll",o,true)};return{_:function(){e=f.now();k.elements=D.getElementsByClassName(H.lazyClass);v=D.getElementsByClassName(H.lazyClass+" "+H.preloadClass);q("scroll",a,true);q("resize",a,true);q("pageshow",function(e){if(e.persisted){var t=D.querySelectorAll("."+H.loadingClass);if(t.length&&t.forEach){U(function(){t.forEach(function(e){if(e.complete){R(e)}})})}}});if(u.MutationObserver){new MutationObserver(a).observe(O,{childList:true,subtree:true,attributes:true})}else{O[P]("DOMNodeInserted",a,true);O[P]("DOMAttrModified",a,true);setInterval(a,999)}q("hashchange",a,true);["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){D[P](e,a,true)});if(/d$|^c/.test(D.readyState)){l()}else{q("load",l);D[P]("DOMContentLoaded",a);I(l,2e4)}if(k.elements.length){t();ee._lsFlush()}else{a()}},checkElems:a,unveil:R,_aLSL:o}}(),re=function(){var a;var n=te(function(e,t,a,i){var r,n,s;e._lazysizesWidth=i;i+="px";e.setAttribute("sizes",i);if(j.test(t.nodeName||"")){r=t.getElementsByTagName("source");for(n=0,s=r.length;n<s;n++){r[n].setAttribute("sizes",i)}}if(!a.detail.dataAttr){Y(e,a.detail)}});var i=function(e,t,a){var i;var r=e.parentNode;if(r){a=s(e,r,a);i=X(e,"lazybeforesizes",{width:a,dataAttr:!!t});if(!i.defaultPrevented){a=i.detail.width;if(a&&a!==e._lazysizesWidth){n(e,r,i,a)}}}};var e=function(){var e;var t=a.length;if(t){e=0;for(;e<t;e++){i(a[e])}}};var t=ie(e);return{_:function(){a=D.getElementsByClassName(H.autosizesClass);q("resize",t)},checkElems:t,updateElem:i}}(),t=function(){if(!t.i&&D.getElementsByClassName){t.i=true;re._();e._()}};return I(function(){H.init&&t()}),k={cfg:H,autoSizer:re,loader:e,init:t,uP:Y,aC:K,rC:Q,hC:J,fire:X,gW:s,rAF:ee}}(e,e.document,Date);e.lazySizes=t,"object"==typeof module&&module.exports&&(module.exports=t)}("undefined"!=typeof window?window:{});

// ! lazysizes - v5.3.0
!function(e,t){var a=function(){t(e.lazySizes),e.removeEventListener("lazyunveilread",a,!0)};t=t.bind(null,e,e.document),"object"==typeof module&&module.exports?t(require("lazysizes")):"function"==typeof define&&define.amd?define(["lazysizes"],t):e.lazySizes?a():e.addEventListener("lazyunveilread",a,!0)}(window,function(e,i,o){"use strict";var l,d,u={};function s(e,t,a){var n,r;u[e]||(n=i.createElement(t?"link":"script"),r=i.getElementsByTagName("script")[0],t?(n.rel="stylesheet",n.href=e):(n.onload=function(){n.onerror=null,n.onload=null,a()},n.onerror=n.onload,n.src=e),u[e]=!0,u[n.src||n.href]=!0,r.parentNode.insertBefore(n,r))}i.addEventListener&&(l=function(e,t){var a=i.createElement("img");a.onload=function(){a.onload=null,a.onerror=null,a=null,t()},a.onerror=a.onload,a.src=e,a&&a.complete&&a.onload&&a.onload()},addEventListener("lazybeforeunveil",function(e){var t,a,n;if(e.detail.instance==o&&!e.defaultPrevented){var r=e.target;if("none"==r.preload&&(r.preload=r.getAttribute("data-preload")||"auto"),null!=r.getAttribute("data-autoplay"))if(r.getAttribute("data-expand")&&!r.autoplay)try{r.play()}catch(e){}else requestAnimationFrame(function(){r.setAttribute("data-expand","-10"),o.aC(r,o.cfg.lazyClass)});(t=r.getAttribute("data-link"))&&s(t,!0),(t=r.getAttribute("data-script"))&&(e.detail.firesLoad=!0,s(t,null,function(){e.detail.firesLoad=!1,o.fire(r,"_lazyloaded",{},!0,!0)})),(t=r.getAttribute("data-require"))&&(o.cfg.requireJs?o.cfg.requireJs([t]):s(t)),(a=r.getAttribute("data-bg"))&&(e.detail.firesLoad=!0,l(a,function(){r.style.backgroundImage="url("+(d.test(a)?JSON.stringify(a):a)+")",e.detail.firesLoad=!1,o.fire(r,"_lazyloaded",{},!0,!0)})),(n=r.getAttribute("data-poster"))&&(e.detail.firesLoad=!0,l(n,function(){r.poster=n,e.detail.firesLoad=!1,o.fire(r,"_lazyloaded",{},!0,!0)}))}},!(d=/\(|\)|\s|'/)))});
;
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).Swiper=t()}(this,(function(){"use strict";var e="undefined"==typeof document?{body:{},addEventListener:function(){},removeEventListener:function(){},activeElement:{blur:function(){},nodeName:""},querySelector:function(){return null},querySelectorAll:function(){return[]},getElementById:function(){return null},createEvent:function(){return{initEvent:function(){}}},createElement:function(){return{children:[],childNodes:[],style:{},setAttribute:function(){},getElementsByTagName:function(){return[]}}},location:{hash:""}}:document,t="undefined"==typeof window?{document:e,navigator:{userAgent:""},location:{},history:{},CustomEvent:function(){return this},addEventListener:function(){},removeEventListener:function(){},getComputedStyle:function(){return{getPropertyValue:function(){return""}}},Image:function(){},Date:function(){},screen:{},setTimeout:function(){},clearTimeout:function(){}}:window,i=function(e){for(var t=0;t<e.length;t+=1)this[t]=e[t];return this.length=e.length,this};function s(s,a){var n=[],r=0;if(s&&!a&&s instanceof i)return s;if(s)if("string"==typeof s){var l,o,d=s.trim();if(d.indexOf("<")>=0&&d.indexOf(">")>=0){var h="div";for(0===d.indexOf("<li")&&(h="ul"),0===d.indexOf("<tr")&&(h="tbody"),0!==d.indexOf("<td")&&0!==d.indexOf("<th")||(h="tr"),0===d.indexOf("<tbody")&&(h="table"),0===d.indexOf("<option")&&(h="select"),(o=e.createElement(h)).innerHTML=d,r=0;r<o.childNodes.length;r+=1)n.push(o.childNodes[r])}else for(l=a||"#"!==s[0]||s.match(/[ .<>:~]/)?(a||e).querySelectorAll(s.trim()):[e.getElementById(s.trim().split("#")[1])],r=0;r<l.length;r+=1)l[r]&&n.push(l[r])}else if(s.nodeType||s===t||s===e)n.push(s);else if(s.length>0&&s[0].nodeType)for(r=0;r<s.length;r+=1)n.push(s[r]);return new i(n)}function a(e){for(var t=[],i=0;i<e.length;i+=1)-1===t.indexOf(e[i])&&t.push(e[i]);return t}s.fn=i.prototype,s.Class=i,s.Dom7=i;var n={addClass:function(e){if(void 0===e)return this;for(var t=e.split(" "),i=0;i<t.length;i+=1)for(var s=0;s<this.length;s+=1)void 0!==this[s]&&void 0!==this[s].classList&&this[s].classList.add(t[i]);return this},removeClass:function(e){for(var t=e.split(" "),i=0;i<t.length;i+=1)for(var s=0;s<this.length;s+=1)void 0!==this[s]&&void 0!==this[s].classList&&this[s].classList.remove(t[i]);return this},hasClass:function(e){return!!this[0]&&this[0].classList.contains(e)},toggleClass:function(e){for(var t=e.split(" "),i=0;i<t.length;i+=1)for(var s=0;s<this.length;s+=1)void 0!==this[s]&&void 0!==this[s].classList&&this[s].classList.toggle(t[i]);return this},attr:function(e,t){var i=arguments;if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(var s=0;s<this.length;s+=1)if(2===i.length)this[s].setAttribute(e,t);else for(var a in e)this[s][a]=e[a],this[s].setAttribute(a,e[a]);return this},removeAttr:function(e){for(var t=0;t<this.length;t+=1)this[t].removeAttribute(e);return this},data:function(e,t){var i;if(void 0!==t){for(var s=0;s<this.length;s+=1)(i=this[s]).dom7ElementDataStorage||(i.dom7ElementDataStorage={}),i.dom7ElementDataStorage[e]=t;return this}if(i=this[0]){if(i.dom7ElementDataStorage&&e in i.dom7ElementDataStorage)return i.dom7ElementDataStorage[e];var a=i.getAttribute("data-"+e);return a||void 0}},transform:function(e){for(var t=0;t<this.length;t+=1){var i=this[t].style;i.webkitTransform=e,i.transform=e}return this},transition:function(e){"string"!=typeof e&&(e+="ms");for(var t=0;t<this.length;t+=1){var i=this[t].style;i.webkitTransitionDuration=e,i.transitionDuration=e}return this},on:function(){for(var e,t=[],i=arguments.length;i--;)t[i]=arguments[i];var a=t[0],n=t[1],r=t[2],l=t[3];function o(e){var t=e.target;if(t){var i=e.target.dom7EventData||[];if(i.indexOf(e)<0&&i.unshift(e),s(t).is(n))r.apply(t,i);else for(var a=s(t).parents(),l=0;l<a.length;l+=1)s(a[l]).is(n)&&r.apply(a[l],i)}}function d(e){var t=e&&e.target&&e.target.dom7EventData||[];t.indexOf(e)<0&&t.unshift(e),r.apply(this,t)}"function"==typeof t[1]&&(a=(e=t)[0],r=e[1],l=e[2],n=void 0),l||(l=!1);for(var h,p=a.split(" "),u=0;u<this.length;u+=1){var c=this[u];if(n)for(h=0;h<p.length;h+=1){var v=p[h];c.dom7LiveListeners||(c.dom7LiveListeners={}),c.dom7LiveListeners[v]||(c.dom7LiveListeners[v]=[]),c.dom7LiveListeners[v].push({listener:r,proxyListener:o}),c.addEventListener(v,o,l)}else for(h=0;h<p.length;h+=1){var f=p[h];c.dom7Listeners||(c.dom7Listeners={}),c.dom7Listeners[f]||(c.dom7Listeners[f]=[]),c.dom7Listeners[f].push({listener:r,proxyListener:d}),c.addEventListener(f,d,l)}}return this},off:function(){for(var e,t=[],i=arguments.length;i--;)t[i]=arguments[i];var s=t[0],a=t[1],n=t[2],r=t[3];"function"==typeof t[1]&&(s=(e=t)[0],n=e[1],r=e[2],a=void 0),r||(r=!1);for(var l=s.split(" "),o=0;o<l.length;o+=1)for(var d=l[o],h=0;h<this.length;h+=1){var p=this[h],u=void 0;if(!a&&p.dom7Listeners?u=p.dom7Listeners[d]:a&&p.dom7LiveListeners&&(u=p.dom7LiveListeners[d]),u&&u.length)for(var c=u.length-1;c>=0;c-=1){var v=u[c];n&&v.listener===n?(p.removeEventListener(d,v.proxyListener,r),u.splice(c,1)):n&&v.listener&&v.listener.dom7proxy&&v.listener.dom7proxy===n?(p.removeEventListener(d,v.proxyListener,r),u.splice(c,1)):n||(p.removeEventListener(d,v.proxyListener,r),u.splice(c,1))}}return this},trigger:function(){for(var i=[],s=arguments.length;s--;)i[s]=arguments[s];for(var a=i[0].split(" "),n=i[1],r=0;r<a.length;r+=1)for(var l=a[r],o=0;o<this.length;o+=1){var d=this[o],h=void 0;try{h=new t.CustomEvent(l,{detail:n,bubbles:!0,cancelable:!0})}catch(t){(h=e.createEvent("Event")).initEvent(l,!0,!0),h.detail=n}d.dom7EventData=i.filter((function(e,t){return t>0})),d.dispatchEvent(h),d.dom7EventData=[],delete d.dom7EventData}return this},transitionEnd:function(e){var t,i=["webkitTransitionEnd","transitionend"],s=this;function a(n){if(n.target===this)for(e.call(this,n),t=0;t<i.length;t+=1)s.off(i[t],a)}if(e)for(t=0;t<i.length;t+=1)s.on(i[t],a);return this},outerWidth:function(e){if(this.length>0){if(e){var t=this.styles();return this[0].offsetWidth+parseFloat(t.getPropertyValue("margin-right"))+parseFloat(t.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null},outerHeight:function(e){if(this.length>0){if(e){var t=this.styles();return this[0].offsetHeight+parseFloat(t.getPropertyValue("margin-top"))+parseFloat(t.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null},offset:function(){if(this.length>0){var i=this[0],s=i.getBoundingClientRect(),a=e.body,n=i.clientTop||a.clientTop||0,r=i.clientLeft||a.clientLeft||0,l=i===t?t.scrollY:i.scrollTop,o=i===t?t.scrollX:i.scrollLeft;return{top:s.top+l-n,left:s.left+o-r}}return null},css:function(e,i){var s;if(1===arguments.length){if("string"!=typeof e){for(s=0;s<this.length;s+=1)for(var a in e)this[s].style[a]=e[a];return this}if(this[0])return t.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(s=0;s<this.length;s+=1)this[s].style[e]=i;return this}return this},each:function(e){if(!e)return this;for(var t=0;t<this.length;t+=1)if(!1===e.call(this[t],t,this[t]))return this;return this},html:function(e){if(void 0===e)return this[0]?this[0].innerHTML:void 0;for(var t=0;t<this.length;t+=1)this[t].innerHTML=e;return this},text:function(e){if(void 0===e)return this[0]?this[0].textContent.trim():null;for(var t=0;t<this.length;t+=1)this[t].textContent=e;return this},is:function(a){var n,r,l=this[0];if(!l||void 0===a)return!1;if("string"==typeof a){if(l.matches)return l.matches(a);if(l.webkitMatchesSelector)return l.webkitMatchesSelector(a);if(l.msMatchesSelector)return l.msMatchesSelector(a);for(n=s(a),r=0;r<n.length;r+=1)if(n[r]===l)return!0;return!1}if(a===e)return l===e;if(a===t)return l===t;if(a.nodeType||a instanceof i){for(n=a.nodeType?[a]:a,r=0;r<n.length;r+=1)if(n[r]===l)return!0;return!1}return!1},index:function(){var e,t=this[0];if(t){for(e=0;null!==(t=t.previousSibling);)1===t.nodeType&&(e+=1);return e}},eq:function(e){if(void 0===e)return this;var t,s=this.length;return new i(e>s-1?[]:e<0?(t=s+e)<0?[]:[this[t]]:[this[e]])},append:function(){for(var t,s=[],a=arguments.length;a--;)s[a]=arguments[a];for(var n=0;n<s.length;n+=1){t=s[n];for(var r=0;r<this.length;r+=1)if("string"==typeof t){var l=e.createElement("div");for(l.innerHTML=t;l.firstChild;)this[r].appendChild(l.firstChild)}else if(t instanceof i)for(var o=0;o<t.length;o+=1)this[r].appendChild(t[o]);else this[r].appendChild(t)}return this},prepend:function(t){var s,a;for(s=0;s<this.length;s+=1)if("string"==typeof t){var n=e.createElement("div");for(n.innerHTML=t,a=n.childNodes.length-1;a>=0;a-=1)this[s].insertBefore(n.childNodes[a],this[s].childNodes[0])}else if(t instanceof i)for(a=0;a<t.length;a+=1)this[s].insertBefore(t[a],this[s].childNodes[0]);else this[s].insertBefore(t,this[s].childNodes[0]);return this},next:function(e){return this.length>0?e?this[0].nextElementSibling&&s(this[0].nextElementSibling).is(e)?new i([this[0].nextElementSibling]):new i([]):this[0].nextElementSibling?new i([this[0].nextElementSibling]):new i([]):new i([])},nextAll:function(e){var t=[],a=this[0];if(!a)return new i([]);for(;a.nextElementSibling;){var n=a.nextElementSibling;e?s(n).is(e)&&t.push(n):t.push(n),a=n}return new i(t)},prev:function(e){if(this.length>0){var t=this[0];return e?t.previousElementSibling&&s(t.previousElementSibling).is(e)?new i([t.previousElementSibling]):new i([]):t.previousElementSibling?new i([t.previousElementSibling]):new i([])}return new i([])},prevAll:function(e){var t=[],a=this[0];if(!a)return new i([]);for(;a.previousElementSibling;){var n=a.previousElementSibling;e?s(n).is(e)&&t.push(n):t.push(n),a=n}return new i(t)},parent:function(e){for(var t=[],i=0;i<this.length;i+=1)null!==this[i].parentNode&&(e?s(this[i].parentNode).is(e)&&t.push(this[i].parentNode):t.push(this[i].parentNode));return s(a(t))},parents:function(e){for(var t=[],i=0;i<this.length;i+=1)for(var n=this[i].parentNode;n;)e?s(n).is(e)&&t.push(n):t.push(n),n=n.parentNode;return s(a(t))},closest:function(e){var t=this;return void 0===e?new i([]):(t.is(e)||(t=t.parents(e).eq(0)),t)},find:function(e){for(var t=[],s=0;s<this.length;s+=1)for(var a=this[s].querySelectorAll(e),n=0;n<a.length;n+=1)t.push(a[n]);return new i(t)},children:function(e){for(var t=[],n=0;n<this.length;n+=1)for(var r=this[n].childNodes,l=0;l<r.length;l+=1)e?1===r[l].nodeType&&s(r[l]).is(e)&&t.push(r[l]):1===r[l].nodeType&&t.push(r[l]);return new i(a(t))},filter:function(e){for(var t=[],s=0;s<this.length;s+=1)e.call(this[s],s,this[s])&&t.push(this[s]);return new i(t)},remove:function(){for(var e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this},add:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var i,a;for(i=0;i<e.length;i+=1){var n=s(e[i]);for(a=0;a<n.length;a+=1)this[this.length]=n[a],this.length+=1}return this},styles:function(){return this[0]?t.getComputedStyle(this[0],null):{}}};Object.keys(n).forEach((function(e){s.fn[e]=s.fn[e]||n[e]}));var r={deleteProps:function(e){var t=e;Object.keys(t).forEach((function(e){try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}}))},nextTick:function(e,t){return void 0===t&&(t=0),setTimeout(e,t)},now:function(){return Date.now()},getTranslate:function(e,t){var i,s,a;void 0===t&&(t="x");var n=window.getComputedStyle(e,null);return window.WebKitCSSMatrix?((s=n.transform||n.webkitTransform).split(",").length>6&&(s=s.split(", ").map((function(e){return e.replace(",",".")})).join(", ")),a=new window.WebKitCSSMatrix("none"===s?"":s)):i=(a=n.MozTransform||n.OTransform||n.MsTransform||n.msTransform||n.transform||n.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,")).toString().split(","),"x"===t&&(s=window.WebKitCSSMatrix?a.m41:16===i.length?parseFloat(i[12]):parseFloat(i[4])),"y"===t&&(s=window.WebKitCSSMatrix?a.m42:16===i.length?parseFloat(i[13]):parseFloat(i[5])),s||0},parseUrlQuery:function(e){var t,i,s,a,n={},r=e||window.location.href;if("string"==typeof r&&r.length)for(a=(i=(r=r.indexOf("?")>-1?r.replace(/\S*\?/,""):"").split("&").filter((function(e){return""!==e}))).length,t=0;t<a;t+=1)s=i[t].replace(/#\S+/g,"").split("="),n[decodeURIComponent(s[0])]=void 0===s[1]?void 0:decodeURIComponent(s[1])||"";return n},isObject:function(e){return"object"==typeof e&&null!==e&&e.constructor&&e.constructor===Object},extend:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];for(var i=Object(e[0]),s=1;s<e.length;s+=1){var a=e[s];if(null!=a)for(var n=Object.keys(Object(a)),l=0,o=n.length;l<o;l+=1){var d=n[l],h=Object.getOwnPropertyDescriptor(a,d);void 0!==h&&h.enumerable&&(r.isObject(i[d])&&r.isObject(a[d])?r.extend(i[d],a[d]):!r.isObject(i[d])&&r.isObject(a[d])?(i[d]={},r.extend(i[d],a[d])):i[d]=a[d])}}return i}},l={touch:window.Modernizr&&!0===window.Modernizr.touch||!!(window.navigator.maxTouchPoints>0||"ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch),pointerEvents:!!window.PointerEvent&&"maxTouchPoints"in window.navigator&&window.navigator.maxTouchPoints>0,observer:"MutationObserver"in window||"WebkitMutationObserver"in window,passiveListener:function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("testPassiveListener",null,t)}catch(e){}return e}(),gestures:"ongesturestart"in window},o=function(e){void 0===e&&(e={});var t=this;t.params=e,t.eventsListeners={},t.params&&t.params.on&&Object.keys(t.params.on).forEach((function(e){t.on(e,t.params.on[e])}))},d={components:{configurable:!0}};o.prototype.on=function(e,t,i){var s=this;if("function"!=typeof t)return s;var a=i?"unshift":"push";return e.split(" ").forEach((function(e){s.eventsListeners[e]||(s.eventsListeners[e]=[]),s.eventsListeners[e][a](t)})),s},o.prototype.once=function(e,t,i){var s=this;if("function"!=typeof t)return s;function a(){for(var i=[],n=arguments.length;n--;)i[n]=arguments[n];s.off(e,a),a.f7proxy&&delete a.f7proxy,t.apply(s,i)}return a.f7proxy=t,s.on(e,a,i)},o.prototype.off=function(e,t){var i=this;return i.eventsListeners?(e.split(" ").forEach((function(e){void 0===t?i.eventsListeners[e]=[]:i.eventsListeners[e]&&i.eventsListeners[e].length&&i.eventsListeners[e].forEach((function(s,a){(s===t||s.f7proxy&&s.f7proxy===t)&&i.eventsListeners[e].splice(a,1)}))})),i):i},o.prototype.emit=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var i,s,a,n=this;if(!n.eventsListeners)return n;"string"==typeof e[0]||Array.isArray(e[0])?(i=e[0],s=e.slice(1,e.length),a=n):(i=e[0].events,s=e[0].data,a=e[0].context||n);var r=Array.isArray(i)?i:i.split(" ");return r.forEach((function(e){if(n.eventsListeners&&n.eventsListeners[e]){var t=[];n.eventsListeners[e].forEach((function(e){t.push(e)})),t.forEach((function(e){e.apply(a,s)}))}})),n},o.prototype.useModulesParams=function(e){var t=this;t.modules&&Object.keys(t.modules).forEach((function(i){var s=t.modules[i];s.params&&r.extend(e,s.params)}))},o.prototype.useModules=function(e){void 0===e&&(e={});var t=this;t.modules&&Object.keys(t.modules).forEach((function(i){var s=t.modules[i],a=e[i]||{};s.instance&&Object.keys(s.instance).forEach((function(e){var i=s.instance[e];t[e]="function"==typeof i?i.bind(t):i})),s.on&&t.on&&Object.keys(s.on).forEach((function(e){t.on(e,s.on[e])})),s.create&&s.create.bind(t)(a)}))},d.components.set=function(e){this.use&&this.use(e)},o.installModule=function(e){for(var t=[],i=arguments.length-1;i-- >0;)t[i]=arguments[i+1];var s=this;s.prototype.modules||(s.prototype.modules={});var a=e.name||Object.keys(s.prototype.modules).length+"_"+r.now();return s.prototype.modules[a]=e,e.proto&&Object.keys(e.proto).forEach((function(t){s.prototype[t]=e.proto[t]})),e.static&&Object.keys(e.static).forEach((function(t){s[t]=e.static[t]})),e.install&&e.install.apply(s,t),s},o.use=function(e){for(var t=[],i=arguments.length-1;i-- >0;)t[i]=arguments[i+1];var s=this;return Array.isArray(e)?(e.forEach((function(e){return s.installModule(e)})),s):s.installModule.apply(s,[e].concat(t))},Object.defineProperties(o,d);var h={updateSize:function(){var e,t,i=this.$el;e=void 0!==this.params.width?this.params.width:i[0].clientWidth,t=void 0!==this.params.height?this.params.height:i[0].clientHeight,0===e&&this.isHorizontal()||0===t&&this.isVertical()||(e=e-parseInt(i.css("padding-left"),10)-parseInt(i.css("padding-right"),10),t=t-parseInt(i.css("padding-top"),10)-parseInt(i.css("padding-bottom"),10),r.extend(this,{width:e,height:t,size:this.isHorizontal()?e:t}))},updateSlides:function(){var e=this.params,t=this.$wrapperEl,i=this.size,s=this.rtlTranslate,a=this.wrongRTL,n=this.virtual&&e.virtual.enabled,l=n?this.virtual.slides.length:this.slides.length,o=t.children("."+this.params.slideClass),d=n?this.virtual.slides.length:o.length,h=[],p=[],u=[];function c(t){return!e.cssMode||t!==o.length-1}var v=e.slidesOffsetBefore;"function"==typeof v&&(v=e.slidesOffsetBefore.call(this));var f=e.slidesOffsetAfter;"function"==typeof f&&(f=e.slidesOffsetAfter.call(this));var m=this.snapGrid.length,g=this.snapGrid.length,w=e.spaceBetween,b=-v,y=0,x=0;if(void 0!==i){var C,T;"string"==typeof w&&w.indexOf("%")>=0&&(w=parseFloat(w.replace("%",""))/100*i),this.virtualSize=-w,s?o.css({marginLeft:"",marginTop:""}):o.css({marginRight:"",marginBottom:""}),e.slidesPerColumn>1&&(C=Math.floor(d/e.slidesPerColumn)===d/this.params.slidesPerColumn?d:Math.ceil(d/e.slidesPerColumn)*e.slidesPerColumn,"auto"!==e.slidesPerView&&"row"===e.slidesPerColumnFill&&(C=Math.max(C,e.slidesPerView*e.slidesPerColumn)));for(var S,E=e.slidesPerColumn,M=C/E,P=Math.floor(d/e.slidesPerColumn),k=0;k<d;k+=1){T=0;var L=o.eq(k);if(e.slidesPerColumn>1){var z=void 0,I=void 0,O=void 0;if("row"===e.slidesPerColumnFill&&e.slidesPerGroup>1){var A=Math.floor(k/(e.slidesPerGroup*e.slidesPerColumn)),$=k-e.slidesPerColumn*e.slidesPerGroup*A,B=0===A?e.slidesPerGroup:Math.min(Math.ceil((d-A*E*e.slidesPerGroup)/E),e.slidesPerGroup);z=(I=$-(O=Math.floor($/B))*B+A*e.slidesPerGroup)+O*C/E,L.css({"-webkit-box-ordinal-group":z,"-moz-box-ordinal-group":z,"-ms-flex-order":z,"-webkit-order":z,order:z})}else"column"===e.slidesPerColumnFill?(O=k-(I=Math.floor(k/E))*E,(I>P||I===P&&O===E-1)&&(O+=1)>=E&&(O=0,I+=1)):I=k-(O=Math.floor(k/M))*M;L.css("margin-"+(this.isHorizontal()?"top":"left"),0!==O&&e.spaceBetween&&e.spaceBetween+"px")}if("none"!==L.css("display")){if("auto"===e.slidesPerView){var D=window.getComputedStyle(L[0],null),G=L[0].style.transform,V=L[0].style.webkitTransform;if(G&&(L[0].style.transform="none"),V&&(L[0].style.webkitTransform="none"),e.roundLengths)T=this.isHorizontal()?L.outerWidth(!0):L.outerHeight(!0);else if(this.isHorizontal()){var N=parseFloat(D.getPropertyValue("width")),F=parseFloat(D.getPropertyValue("padding-left")),H=parseFloat(D.getPropertyValue("padding-right")),q=parseFloat(D.getPropertyValue("margin-left")),R=parseFloat(D.getPropertyValue("margin-right")),j=D.getPropertyValue("box-sizing");T=j&&"border-box"===j?N+q+R:N+F+H+q+R}else{var W=parseFloat(D.getPropertyValue("height")),X=parseFloat(D.getPropertyValue("padding-top")),Y=parseFloat(D.getPropertyValue("padding-bottom")),U=parseFloat(D.getPropertyValue("margin-top")),_=parseFloat(D.getPropertyValue("margin-bottom")),K=D.getPropertyValue("box-sizing");T=K&&"border-box"===K?W+U+_:W+X+Y+U+_}G&&(L[0].style.transform=G),V&&(L[0].style.webkitTransform=V),e.roundLengths&&(T=Math.floor(T))}else T=(i-(e.slidesPerView-1)*w)/e.slidesPerView,e.roundLengths&&(T=Math.floor(T)),o[k]&&(this.isHorizontal()?o[k].style.width=T+"px":o[k].style.height=T+"px");o[k]&&(o[k].swiperSlideSize=T),u.push(T),e.centeredSlides?(b=b+T/2+y/2+w,0===y&&0!==k&&(b=b-i/2-w),0===k&&(b=b-i/2-w),Math.abs(b)<.001&&(b=0),e.roundLengths&&(b=Math.floor(b)),x%e.slidesPerGroup==0&&h.push(b),p.push(b)):(e.roundLengths&&(b=Math.floor(b)),x%e.slidesPerGroup==0&&h.push(b),p.push(b),b=b+T+w),this.virtualSize+=T+w,y=T,x+=1}}if(this.virtualSize=Math.max(this.virtualSize,i)+f,s&&a&&("slide"===e.effect||"coverflow"===e.effect)&&t.css({width:this.virtualSize+e.spaceBetween+"px"}),e.setWrapperSize&&(this.isHorizontal()?t.css({width:this.virtualSize+e.spaceBetween+"px"}):t.css({height:this.virtualSize+e.spaceBetween+"px"})),e.slidesPerColumn>1&&(this.virtualSize=(T+e.spaceBetween)*C,this.virtualSize=Math.ceil(this.virtualSize/e.slidesPerColumn)-e.spaceBetween,this.isHorizontal()?t.css({width:this.virtualSize+e.spaceBetween+"px"}):t.css({height:this.virtualSize+e.spaceBetween+"px"}),e.centeredSlides)){S=[];for(var Q=0;Q<h.length;Q+=1){var J=h[Q];e.roundLengths&&(J=Math.floor(J)),h[Q]<this.virtualSize+h[0]&&S.push(J)}h=S}if(!e.centeredSlides){S=[];for(var Z=0;Z<h.length;Z+=1){var ee=h[Z];e.roundLengths&&(ee=Math.floor(ee)),h[Z]<=this.virtualSize-i&&S.push(ee)}h=S,Math.floor(this.virtualSize-i)-Math.floor(h[h.length-1])>1&&h.push(this.virtualSize-i)}if(0===h.length&&(h=[0]),0!==e.spaceBetween&&(this.isHorizontal()?s?o.filter(c).css({marginLeft:w+"px"}):o.filter(c).css({marginRight:w+"px"}):o.filter(c).css({marginBottom:w+"px"})),e.centeredSlides&&e.centeredSlidesBounds){var te=0;u.forEach((function(t){te+=t+(e.spaceBetween?e.spaceBetween:0)}));var ie=(te-=e.spaceBetween)-i;h=h.map((function(e){return e<0?-v:e>ie?ie+f:e}))}if(e.centerInsufficientSlides){var se=0;if(u.forEach((function(t){se+=t+(e.spaceBetween?e.spaceBetween:0)})),(se-=e.spaceBetween)<i){var ae=(i-se)/2;h.forEach((function(e,t){h[t]=e-ae})),p.forEach((function(e,t){p[t]=e+ae}))}}r.extend(this,{slides:o,snapGrid:h,slidesGrid:p,slidesSizesGrid:u}),d!==l&&this.emit("slidesLengthChange"),h.length!==m&&(this.params.watchOverflow&&this.checkOverflow(),this.emit("snapGridLengthChange")),p.length!==g&&this.emit("slidesGridLengthChange"),(e.watchSlidesProgress||e.watchSlidesVisibility)&&this.updateSlidesOffset()}},updateAutoHeight:function(e){var t,i=[],s=0;if("number"==typeof e?this.setTransition(e):!0===e&&this.setTransition(this.params.speed),"auto"!==this.params.slidesPerView&&this.params.slidesPerView>1)for(t=0;t<Math.ceil(this.params.slidesPerView);t+=1){var a=this.activeIndex+t;if(a>this.slides.length)break;i.push(this.slides.eq(a)[0])}else i.push(this.slides.eq(this.activeIndex)[0]);for(t=0;t<i.length;t+=1)if(void 0!==i[t]){var n=i[t].offsetHeight;s=n>s?n:s}s&&this.$wrapperEl.css("height",s+"px")},updateSlidesOffset:function(){for(var e=this.slides,t=0;t<e.length;t+=1)e[t].swiperSlideOffset=this.isHorizontal()?e[t].offsetLeft:e[t].offsetTop},updateSlidesProgress:function(e){void 0===e&&(e=this&&this.translate||0);var t=this.params,i=this.slides,a=this.rtlTranslate;if(0!==i.length){void 0===i[0].swiperSlideOffset&&this.updateSlidesOffset();var n=-e;a&&(n=e),i.removeClass(t.slideVisibleClass),this.visibleSlidesIndexes=[],this.visibleSlides=[];for(var r=0;r<i.length;r+=1){var l=i[r],o=(n+(t.centeredSlides?this.minTranslate():0)-l.swiperSlideOffset)/(l.swiperSlideSize+t.spaceBetween);if(t.watchSlidesVisibility){var d=-(n-l.swiperSlideOffset),h=d+this.slidesSizesGrid[r];(d>=0&&d<this.size-1||h>1&&h<=this.size||d<=0&&h>=this.size)&&(this.visibleSlides.push(l),this.visibleSlidesIndexes.push(r),i.eq(r).addClass(t.slideVisibleClass))}l.progress=a?-o:o}this.visibleSlides=s(this.visibleSlides)}},updateProgress:function(e){if(void 0===e){var t=this.rtlTranslate?-1:1;e=this&&this.translate&&this.translate*t||0}var i=this.params,s=this.maxTranslate()-this.minTranslate(),a=this.progress,n=this.isBeginning,l=this.isEnd,o=n,d=l;0===s?(a=0,n=!0,l=!0):(n=(a=(e-this.minTranslate())/s)<=0,l=a>=1),r.extend(this,{progress:a,isBeginning:n,isEnd:l}),(i.watchSlidesProgress||i.watchSlidesVisibility)&&this.updateSlidesProgress(e),n&&!o&&this.emit("reachBeginning toEdge"),l&&!d&&this.emit("reachEnd toEdge"),(o&&!n||d&&!l)&&this.emit("fromEdge"),this.emit("progress",a)},updateSlidesClasses:function(){var e,t=this.slides,i=this.params,s=this.$wrapperEl,a=this.activeIndex,n=this.realIndex,r=this.virtual&&i.virtual.enabled;t.removeClass(i.slideActiveClass+" "+i.slideNextClass+" "+i.slidePrevClass+" "+i.slideDuplicateActiveClass+" "+i.slideDuplicateNextClass+" "+i.slideDuplicatePrevClass),(e=r?this.$wrapperEl.find("."+i.slideClass+'[data-swiper-slide-index="'+a+'"]'):t.eq(a)).addClass(i.slideActiveClass),i.loop&&(e.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+n+'"]').addClass(i.slideDuplicateActiveClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+n+'"]').addClass(i.slideDuplicateActiveClass));var l=e.nextAll("."+i.slideClass).eq(0).addClass(i.slideNextClass);i.loop&&0===l.length&&(l=t.eq(0)).addClass(i.slideNextClass);var o=e.prevAll("."+i.slideClass).eq(0).addClass(i.slidePrevClass);i.loop&&0===o.length&&(o=t.eq(-1)).addClass(i.slidePrevClass),i.loop&&(l.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicateNextClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicateNextClass),o.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+o.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicatePrevClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+o.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicatePrevClass))},updateActiveIndex:function(e){var t,i=this.rtlTranslate?this.translate:-this.translate,s=this.slidesGrid,a=this.snapGrid,n=this.params,l=this.activeIndex,o=this.realIndex,d=this.snapIndex,h=e;if(void 0===h){for(var p=0;p<s.length;p+=1)void 0!==s[p+1]?i>=s[p]&&i<s[p+1]-(s[p+1]-s[p])/2?h=p:i>=s[p]&&i<s[p+1]&&(h=p+1):i>=s[p]&&(h=p);n.normalizeSlideIndex&&(h<0||void 0===h)&&(h=0)}if((t=a.indexOf(i)>=0?a.indexOf(i):Math.floor(h/n.slidesPerGroup))>=a.length&&(t=a.length-1),h!==l){var u=parseInt(this.slides.eq(h).attr("data-swiper-slide-index")||h,10);r.extend(this,{snapIndex:t,realIndex:u,previousIndex:l,activeIndex:h}),this.emit("activeIndexChange"),this.emit("snapIndexChange"),o!==u&&this.emit("realIndexChange"),(this.initialized||this.runCallbacksOnInit)&&this.emit("slideChange")}else t!==d&&(this.snapIndex=t,this.emit("snapIndexChange"))},updateClickedSlide:function(e){var t=this.params,i=s(e.target).closest("."+t.slideClass)[0],a=!1;if(i)for(var n=0;n<this.slides.length;n+=1)this.slides[n]===i&&(a=!0);if(!i||!a)return this.clickedSlide=void 0,void(this.clickedIndex=void 0);this.clickedSlide=i,this.virtual&&this.params.virtual.enabled?this.clickedIndex=parseInt(s(i).attr("data-swiper-slide-index"),10):this.clickedIndex=s(i).index(),t.slideToClickedSlide&&void 0!==this.clickedIndex&&this.clickedIndex!==this.activeIndex&&this.slideToClickedSlide()}};var p={getTranslate:function(e){void 0===e&&(e=this.isHorizontal()?"x":"y");var t=this.params,i=this.rtlTranslate,s=this.translate,a=this.$wrapperEl;if(t.virtualTranslate)return i?-s:s;if(t.cssMode)return s;var n=r.getTranslate(a[0],e);return i&&(n=-n),n||0},setTranslate:function(e,t){var i=this.rtlTranslate,s=this.params,a=this.$wrapperEl,n=this.wrapperEl,r=this.progress,l=0,o=0;this.isHorizontal()?l=i?-e:e:o=e,s.roundLengths&&(l=Math.floor(l),o=Math.floor(o)),s.cssMode?n[this.isHorizontal()?"scrollLeft":"scrollTop"]=this.isHorizontal()?-l:-o:s.virtualTranslate||a.transform("translate3d("+l+"px, "+o+"px, 0px)"),this.previousTranslate=this.translate,this.translate=this.isHorizontal()?l:o;var d=this.maxTranslate()-this.minTranslate();(0===d?0:(e-this.minTranslate())/d)!==r&&this.updateProgress(e),this.emit("setTranslate",this.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]},translateTo:function(e,t,i,s,a){var n;void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===i&&(i=!0),void 0===s&&(s=!0);var r=this,l=r.params,o=r.wrapperEl;if(r.animating&&l.preventInteractionOnTransition)return!1;var d,h=r.minTranslate(),p=r.maxTranslate();if(d=s&&e>h?h:s&&e<p?p:e,r.updateProgress(d),l.cssMode){var u=r.isHorizontal();return 0===t?o[u?"scrollLeft":"scrollTop"]=-d:o.scrollTo?o.scrollTo(((n={})[u?"left":"top"]=-d,n.behavior="smooth",n)):o[u?"scrollLeft":"scrollTop"]=-d,!0}return 0===t?(r.setTransition(0),r.setTranslate(d),i&&(r.emit("beforeTransitionStart",t,a),r.emit("transitionEnd"))):(r.setTransition(t),r.setTranslate(d),i&&(r.emit("beforeTransitionStart",t,a),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.$wrapperEl[0].removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.$wrapperEl[0].removeEventListener("webkitTransitionEnd",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,i&&r.emit("transitionEnd"))}),r.$wrapperEl[0].addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.$wrapperEl[0].addEventListener("webkitTransitionEnd",r.onTranslateToWrapperTransitionEnd))),!0}};var u={setTransition:function(e,t){this.params.cssMode||this.$wrapperEl.transition(e),this.emit("setTransition",e,t)},transitionStart:function(e,t){void 0===e&&(e=!0);var i=this.activeIndex,s=this.params,a=this.previousIndex;if(!s.cssMode){s.autoHeight&&this.updateAutoHeight();var n=t;if(n||(n=i>a?"next":i<a?"prev":"reset"),this.emit("transitionStart"),e&&i!==a){if("reset"===n)return void this.emit("slideResetTransitionStart");this.emit("slideChangeTransitionStart"),"next"===n?this.emit("slideNextTransitionStart"):this.emit("slidePrevTransitionStart")}}},transitionEnd:function(e,t){void 0===e&&(e=!0);var i=this.activeIndex,s=this.previousIndex,a=this.params;if(this.animating=!1,!a.cssMode){this.setTransition(0);var n=t;if(n||(n=i>s?"next":i<s?"prev":"reset"),this.emit("transitionEnd"),e&&i!==s){if("reset"===n)return void this.emit("slideResetTransitionEnd");this.emit("slideChangeTransitionEnd"),"next"===n?this.emit("slideNextTransitionEnd"):this.emit("slidePrevTransitionEnd")}}}};var c={slideTo:function(e,t,i,s){var a;void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===i&&(i=!0);var n=this,r=e;r<0&&(r=0);var l=n.params,o=n.snapGrid,d=n.slidesGrid,h=n.previousIndex,p=n.activeIndex,u=n.rtlTranslate,c=n.wrapperEl;if(n.animating&&l.preventInteractionOnTransition)return!1;var v=Math.floor(r/l.slidesPerGroup);v>=o.length&&(v=o.length-1),(p||l.initialSlide||0)===(h||0)&&i&&n.emit("beforeSlideChangeStart");var f,m=-o[v];if(n.updateProgress(m),l.normalizeSlideIndex)for(var g=0;g<d.length;g+=1)-Math.floor(100*m)>=Math.floor(100*d[g])&&(r=g);if(n.initialized&&r!==p){if(!n.allowSlideNext&&m<n.translate&&m<n.minTranslate())return!1;if(!n.allowSlidePrev&&m>n.translate&&m>n.maxTranslate()&&(p||0)!==r)return!1}if(f=r>p?"next":r<p?"prev":"reset",u&&-m===n.translate||!u&&m===n.translate)return n.updateActiveIndex(r),l.autoHeight&&n.updateAutoHeight(),n.updateSlidesClasses(),"slide"!==l.effect&&n.setTranslate(m),"reset"!==f&&(n.transitionStart(i,f),n.transitionEnd(i,f)),!1;if(l.cssMode){var w=n.isHorizontal();return 0===t?c[w?"scrollLeft":"scrollTop"]=-m:c.scrollTo?c.scrollTo(((a={})[w?"left":"top"]=-m,a.behavior="smooth",a)):c[w?"scrollLeft":"scrollTop"]=-m,!0}return 0===t?(n.setTransition(0),n.setTranslate(m),n.updateActiveIndex(r),n.updateSlidesClasses(),n.emit("beforeTransitionStart",t,s),n.transitionStart(i,f),n.transitionEnd(i,f)):(n.setTransition(t),n.setTranslate(m),n.updateActiveIndex(r),n.updateSlidesClasses(),n.emit("beforeTransitionStart",t,s),n.transitionStart(i,f),n.animating||(n.animating=!0,n.onSlideToWrapperTransitionEnd||(n.onSlideToWrapperTransitionEnd=function(e){n&&!n.destroyed&&e.target===this&&(n.$wrapperEl[0].removeEventListener("transitionend",n.onSlideToWrapperTransitionEnd),n.$wrapperEl[0].removeEventListener("webkitTransitionEnd",n.onSlideToWrapperTransitionEnd),n.onSlideToWrapperTransitionEnd=null,delete n.onSlideToWrapperTransitionEnd,n.transitionEnd(i,f))}),n.$wrapperEl[0].addEventListener("transitionend",n.onSlideToWrapperTransitionEnd),n.$wrapperEl[0].addEventListener("webkitTransitionEnd",n.onSlideToWrapperTransitionEnd))),!0},slideToLoop:function(e,t,i,s){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===i&&(i=!0);var a=e;return this.params.loop&&(a+=this.loopedSlides),this.slideTo(a,t,i,s)},slideNext:function(e,t,i){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var s=this.params,a=this.animating;return s.loop?!a&&(this.loopFix(),this._clientLeft=this.$wrapperEl[0].clientLeft,this.slideTo(this.activeIndex+s.slidesPerGroup,e,t,i)):this.slideTo(this.activeIndex+s.slidesPerGroup,e,t,i)},slidePrev:function(e,t,i){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var s=this.params,a=this.animating,n=this.snapGrid,r=this.slidesGrid,l=this.rtlTranslate;if(s.loop){if(a)return!1;this.loopFix(),this._clientLeft=this.$wrapperEl[0].clientLeft}function o(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}var d,h=o(l?this.translate:-this.translate),p=n.map((function(e){return o(e)})),u=(r.map((function(e){return o(e)})),n[p.indexOf(h)],n[p.indexOf(h)-1]);return void 0===u&&s.cssMode&&n.forEach((function(e){!u&&h>=e&&(u=e)})),void 0!==u&&(d=r.indexOf(u))<0&&(d=this.activeIndex-1),this.slideTo(d,e,t,i)},slideReset:function(e,t,i){return void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),this.slideTo(this.activeIndex,e,t,i)},slideToClosest:function(e,t,i,s){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),void 0===s&&(s=.5);var a=this.activeIndex,n=Math.floor(a/this.params.slidesPerGroup),r=this.rtlTranslate?this.translate:-this.translate;if(r>=this.snapGrid[n]){var l=this.snapGrid[n];r-l>(this.snapGrid[n+1]-l)*s&&(a+=this.params.slidesPerGroup)}else{var o=this.snapGrid[n-1];r-o<=(this.snapGrid[n]-o)*s&&(a-=this.params.slidesPerGroup)}return a=Math.max(a,0),a=Math.min(a,this.snapGrid.length-1),this.slideTo(a,e,t,i)},slideToClickedSlide:function(){var e,t=this,i=t.params,a=t.$wrapperEl,n="auto"===i.slidesPerView?t.slidesPerViewDynamic():i.slidesPerView,l=t.clickedIndex;if(i.loop){if(t.animating)return;e=parseInt(s(t.clickedSlide).attr("data-swiper-slide-index"),10),i.centeredSlides?l<t.loopedSlides-n/2||l>t.slides.length-t.loopedSlides+n/2?(t.loopFix(),l=a.children("."+i.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+i.slideDuplicateClass+")").eq(0).index(),r.nextTick((function(){t.slideTo(l)}))):t.slideTo(l):l>t.slides.length-n?(t.loopFix(),l=a.children("."+i.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+i.slideDuplicateClass+")").eq(0).index(),r.nextTick((function(){t.slideTo(l)}))):t.slideTo(l)}else t.slideTo(l)}};var v={loopCreate:function(){var e=this,t=e.params,i=e.$wrapperEl;i.children("."+t.slideClass+"."+t.slideDuplicateClass).remove();var a=i.children("."+t.slideClass);if(t.loopFillGroupWithBlank){var n=t.slidesPerGroup-a.length%t.slidesPerGroup;if(n!==t.slidesPerGroup){for(var r=0;r<n;r+=1){var l=s(document.createElement("div")).addClass(t.slideClass+" "+t.slideBlankClass);i.append(l)}a=i.children("."+t.slideClass)}}"auto"!==t.slidesPerView||t.loopedSlides||(t.loopedSlides=a.length),e.loopedSlides=Math.ceil(parseFloat(t.loopedSlides||t.slidesPerView,10)),e.loopedSlides+=t.loopAdditionalSlides,e.loopedSlides>a.length&&(e.loopedSlides=a.length);var o=[],d=[];a.each((function(t,i){var n=s(i);t<e.loopedSlides&&d.push(i),t<a.length&&t>=a.length-e.loopedSlides&&o.push(i),n.attr("data-swiper-slide-index",t)}));for(var h=0;h<d.length;h+=1)i.append(s(d[h].cloneNode(!0)).addClass(t.slideDuplicateClass));for(var p=o.length-1;p>=0;p-=1)i.prepend(s(o[p].cloneNode(!0)).addClass(t.slideDuplicateClass))},loopFix:function(){this.emit("beforeLoopFix");var e,t=this.activeIndex,i=this.slides,s=this.loopedSlides,a=this.allowSlidePrev,n=this.allowSlideNext,r=this.snapGrid,l=this.rtlTranslate;this.allowSlidePrev=!0,this.allowSlideNext=!0;var o=-r[t]-this.getTranslate();if(t<s)e=i.length-3*s+t,e+=s,this.slideTo(e,0,!1,!0)&&0!==o&&this.setTranslate((l?-this.translate:this.translate)-o);else if(t>=i.length-s){e=-i.length+t+s,e+=s,this.slideTo(e,0,!1,!0)&&0!==o&&this.setTranslate((l?-this.translate:this.translate)-o)}this.allowSlidePrev=a,this.allowSlideNext=n,this.emit("loopFix")},loopDestroy:function(){var e=this.$wrapperEl,t=this.params,i=this.slides;e.children("."+t.slideClass+"."+t.slideDuplicateClass+",."+t.slideClass+"."+t.slideBlankClass).remove(),i.removeAttr("data-swiper-slide-index")}};var f={setGrabCursor:function(e){if(!(l.touch||!this.params.simulateTouch||this.params.watchOverflow&&this.isLocked||this.params.cssMode)){var t=this.el;t.style.cursor="move",t.style.cursor=e?"-webkit-grabbing":"-webkit-grab",t.style.cursor=e?"-moz-grabbin":"-moz-grab",t.style.cursor=e?"grabbing":"grab"}},unsetGrabCursor:function(){l.touch||this.params.watchOverflow&&this.isLocked||this.params.cssMode||(this.el.style.cursor="")}};var m,g,w,b,y,x,C,T,S,E,M,P,k,L,z,I={appendSlide:function(e){var t=this.$wrapperEl,i=this.params;if(i.loop&&this.loopDestroy(),"object"==typeof e&&"length"in e)for(var s=0;s<e.length;s+=1)e[s]&&t.append(e[s]);else t.append(e);i.loop&&this.loopCreate(),i.observer&&l.observer||this.update()},prependSlide:function(e){var t=this.params,i=this.$wrapperEl,s=this.activeIndex;t.loop&&this.loopDestroy();var a=s+1;if("object"==typeof e&&"length"in e){for(var n=0;n<e.length;n+=1)e[n]&&i.prepend(e[n]);a=s+e.length}else i.prepend(e);t.loop&&this.loopCreate(),t.observer&&l.observer||this.update(),this.slideTo(a,0,!1)},addSlide:function(e,t){var i=this.$wrapperEl,s=this.params,a=this.activeIndex;s.loop&&(a-=this.loopedSlides,this.loopDestroy(),this.slides=i.children("."+s.slideClass));var n=this.slides.length;if(e<=0)this.prependSlide(t);else if(e>=n)this.appendSlide(t);else{for(var r=a>e?a+1:a,o=[],d=n-1;d>=e;d-=1){var h=this.slides.eq(d);h.remove(),o.unshift(h)}if("object"==typeof t&&"length"in t){for(var p=0;p<t.length;p+=1)t[p]&&i.append(t[p]);r=a>e?a+t.length:a}else i.append(t);for(var u=0;u<o.length;u+=1)i.append(o[u]);s.loop&&this.loopCreate(),s.observer&&l.observer||this.update(),s.loop?this.slideTo(r+this.loopedSlides,0,!1):this.slideTo(r,0,!1)}},removeSlide:function(e){var t=this.params,i=this.$wrapperEl,s=this.activeIndex;t.loop&&(s-=this.loopedSlides,this.loopDestroy(),this.slides=i.children("."+t.slideClass));var a,n=s;if("object"==typeof e&&"length"in e){for(var r=0;r<e.length;r+=1)a=e[r],this.slides[a]&&this.slides.eq(a).remove(),a<n&&(n-=1);n=Math.max(n,0)}else a=e,this.slides[a]&&this.slides.eq(a).remove(),a<n&&(n-=1),n=Math.max(n,0);t.loop&&this.loopCreate(),t.observer&&l.observer||this.update(),t.loop?this.slideTo(n+this.loopedSlides,0,!1):this.slideTo(n,0,!1)},removeAllSlides:function(){for(var e=[],t=0;t<this.slides.length;t+=1)e.push(t);this.removeSlide(e)}},O=(m=window.navigator.platform,g=window.navigator.userAgent,w={ios:!1,android:!1,androidChrome:!1,desktop:!1,iphone:!1,ipod:!1,ipad:!1,edge:!1,ie:!1,firefox:!1,macos:!1,windows:!1,cordova:!(!window.cordova&&!window.phonegap),phonegap:!(!window.cordova&&!window.phonegap),electron:!1},b=window.screen.width,y=window.screen.height,x=g.match(/(Android);?[\s\/]+([\d.]+)?/),C=g.match(/(iPad).*OS\s([\d_]+)/),T=g.match(/(iPod)(.*OS\s([\d_]+))?/),S=!C&&g.match(/(iPhone\sOS|iOS)\s([\d_]+)/),E=g.indexOf("MSIE ")>=0||g.indexOf("Trident/")>=0,M=g.indexOf("Edge/")>=0,P=g.indexOf("Gecko/")>=0&&g.indexOf("Firefox/")>=0,k="Win32"===m,L=g.toLowerCase().indexOf("electron")>=0,z="MacIntel"===m,!C&&z&&l.touch&&(1024===b&&1366===y||834===b&&1194===y||834===b&&1112===y||768===b&&1024===y)&&(C=g.match(/(Version)\/([\d.]+)/),z=!1),w.ie=E,w.edge=M,w.firefox=P,x&&!k&&(w.os="android",w.osVersion=x[2],w.android=!0,w.androidChrome=g.toLowerCase().indexOf("chrome")>=0),(C||S||T)&&(w.os="ios",w.ios=!0),S&&!T&&(w.osVersion=S[2].replace(/_/g,"."),w.iphone=!0),C&&(w.osVersion=C[2].replace(/_/g,"."),w.ipad=!0),T&&(w.osVersion=T[3]?T[3].replace(/_/g,"."):null,w.ipod=!0),w.ios&&w.osVersion&&g.indexOf("Version/")>=0&&"10"===w.osVersion.split(".")[0]&&(w.osVersion=g.toLowerCase().split("version/")[1].split(" ")[0]),w.webView=!(!(S||C||T)||!g.match(/.*AppleWebKit(?!.*Safari)/i)&&!window.navigator.standalone)||window.matchMedia&&window.matchMedia("(display-mode: standalone)").matches,w.webview=w.webView,w.standalone=w.webView,w.desktop=!(w.ios||w.android)||L,w.desktop&&(w.electron=L,w.macos=z,w.windows=k,w.macos&&(w.os="macos"),w.windows&&(w.os="windows")),w.pixelRatio=window.devicePixelRatio||1,w);function A(e){var t=this.touchEventsData,i=this.params,a=this.touches;if(!this.animating||!i.preventInteractionOnTransition){var n=e;n.originalEvent&&(n=n.originalEvent);var l=s(n.target);if(("wrapper"!==i.touchEventsTarget||l.closest(this.wrapperEl).length)&&(t.isTouchEvent="touchstart"===n.type,(t.isTouchEvent||!("which"in n)||3!==n.which)&&!(!t.isTouchEvent&&"button"in n&&n.button>0||t.isTouched&&t.isMoved)))if(i.noSwiping&&l.closest(i.noSwipingSelector?i.noSwipingSelector:"."+i.noSwipingClass)[0])this.allowClick=!0;else if(!i.swipeHandler||l.closest(i.swipeHandler)[0]){a.currentX="touchstart"===n.type?n.targetTouches[0].pageX:n.pageX,a.currentY="touchstart"===n.type?n.targetTouches[0].pageY:n.pageY;var o=a.currentX,d=a.currentY,h=i.edgeSwipeDetection||i.iOSEdgeSwipeDetection,p=i.edgeSwipeThreshold||i.iOSEdgeSwipeThreshold;if(!h||!(o<=p||o>=window.screen.width-p)){if(r.extend(t,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=o,a.startY=d,t.touchStartTime=r.now(),this.allowClick=!0,this.updateSize(),this.swipeDirection=void 0,i.threshold>0&&(t.allowThresholdMove=!1),"touchstart"!==n.type){var u=!0;l.is(t.formElements)&&(u=!1),document.activeElement&&s(document.activeElement).is(t.formElements)&&document.activeElement!==l[0]&&document.activeElement.blur();var c=u&&this.allowTouchMove&&i.touchStartPreventDefault;(i.touchStartForcePreventDefault||c)&&n.preventDefault()}this.emit("touchStart",n)}}}}function $(e){var t=this.touchEventsData,i=this.params,a=this.touches,n=this.rtlTranslate,l=e;if(l.originalEvent&&(l=l.originalEvent),t.isTouched){if(!t.isTouchEvent||"mousemove"!==l.type){var o="touchmove"===l.type&&l.targetTouches&&(l.targetTouches[0]||l.changedTouches[0]),d="touchmove"===l.type?o.pageX:l.pageX,h="touchmove"===l.type?o.pageY:l.pageY;if(l.preventedByNestedSwiper)return a.startX=d,void(a.startY=h);if(!this.allowTouchMove)return this.allowClick=!1,void(t.isTouched&&(r.extend(a,{startX:d,startY:h,currentX:d,currentY:h}),t.touchStartTime=r.now()));if(t.isTouchEvent&&i.touchReleaseOnEdges&&!i.loop)if(this.isVertical()){if(h<a.startY&&this.translate<=this.maxTranslate()||h>a.startY&&this.translate>=this.minTranslate())return t.isTouched=!1,void(t.isMoved=!1)}else if(d<a.startX&&this.translate<=this.maxTranslate()||d>a.startX&&this.translate>=this.minTranslate())return;if(t.isTouchEvent&&document.activeElement&&l.target===document.activeElement&&s(l.target).is(t.formElements))return t.isMoved=!0,void(this.allowClick=!1);if(t.allowTouchCallbacks&&this.emit("touchMove",l),!(l.targetTouches&&l.targetTouches.length>1)){a.currentX=d,a.currentY=h;var p=a.currentX-a.startX,u=a.currentY-a.startY;if(!(this.params.threshold&&Math.sqrt(Math.pow(p,2)+Math.pow(u,2))<this.params.threshold)){var c;if(void 0===t.isScrolling)this.isHorizontal()&&a.currentY===a.startY||this.isVertical()&&a.currentX===a.startX?t.isScrolling=!1:p*p+u*u>=25&&(c=180*Math.atan2(Math.abs(u),Math.abs(p))/Math.PI,t.isScrolling=this.isHorizontal()?c>i.touchAngle:90-c>i.touchAngle);if(t.isScrolling&&this.emit("touchMoveOpposite",l),void 0===t.startMoving&&(a.currentX===a.startX&&a.currentY===a.startY||(t.startMoving=!0)),t.isScrolling)t.isTouched=!1;else if(t.startMoving){this.allowClick=!1,i.cssMode||l.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&l.stopPropagation(),t.isMoved||(i.loop&&this.loopFix(),t.startTranslate=this.getTranslate(),this.setTransition(0),this.animating&&this.$wrapperEl.trigger("webkitTransitionEnd transitionend"),t.allowMomentumBounce=!1,!i.grabCursor||!0!==this.allowSlideNext&&!0!==this.allowSlidePrev||this.setGrabCursor(!0),this.emit("sliderFirstMove",l)),this.emit("sliderMove",l),t.isMoved=!0;var v=this.isHorizontal()?p:u;a.diff=v,v*=i.touchRatio,n&&(v=-v),this.swipeDirection=v>0?"prev":"next",t.currentTranslate=v+t.startTranslate;var f=!0,m=i.resistanceRatio;if(i.touchReleaseOnEdges&&(m=0),v>0&&t.currentTranslate>this.minTranslate()?(f=!1,i.resistance&&(t.currentTranslate=this.minTranslate()-1+Math.pow(-this.minTranslate()+t.startTranslate+v,m))):v<0&&t.currentTranslate<this.maxTranslate()&&(f=!1,i.resistance&&(t.currentTranslate=this.maxTranslate()+1-Math.pow(this.maxTranslate()-t.startTranslate-v,m))),f&&(l.preventedByNestedSwiper=!0),!this.allowSlideNext&&"next"===this.swipeDirection&&t.currentTranslate<t.startTranslate&&(t.currentTranslate=t.startTranslate),!this.allowSlidePrev&&"prev"===this.swipeDirection&&t.currentTranslate>t.startTranslate&&(t.currentTranslate=t.startTranslate),i.threshold>0){if(!(Math.abs(v)>i.threshold||t.allowThresholdMove))return void(t.currentTranslate=t.startTranslate);if(!t.allowThresholdMove)return t.allowThresholdMove=!0,a.startX=a.currentX,a.startY=a.currentY,t.currentTranslate=t.startTranslate,void(a.diff=this.isHorizontal()?a.currentX-a.startX:a.currentY-a.startY)}i.followFinger&&!i.cssMode&&((i.freeMode||i.watchSlidesProgress||i.watchSlidesVisibility)&&(this.updateActiveIndex(),this.updateSlidesClasses()),i.freeMode&&(0===t.velocities.length&&t.velocities.push({position:a[this.isHorizontal()?"startX":"startY"],time:t.touchStartTime}),t.velocities.push({position:a[this.isHorizontal()?"currentX":"currentY"],time:r.now()})),this.updateProgress(t.currentTranslate),this.setTranslate(t.currentTranslate))}}}}}else t.startMoving&&t.isScrolling&&this.emit("touchMoveOpposite",l)}function B(e){var t=this,i=t.touchEventsData,s=t.params,a=t.touches,n=t.rtlTranslate,l=t.$wrapperEl,o=t.slidesGrid,d=t.snapGrid,h=e;if(h.originalEvent&&(h=h.originalEvent),i.allowTouchCallbacks&&t.emit("touchEnd",h),i.allowTouchCallbacks=!1,!i.isTouched)return i.isMoved&&s.grabCursor&&t.setGrabCursor(!1),i.isMoved=!1,void(i.startMoving=!1);s.grabCursor&&i.isMoved&&i.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);var p,u=r.now(),c=u-i.touchStartTime;if(t.allowClick&&(t.updateClickedSlide(h),t.emit("tap click",h),c<300&&u-i.lastClickTime<300&&t.emit("doubleTap doubleClick",h)),i.lastClickTime=r.now(),r.nextTick((function(){t.destroyed||(t.allowClick=!0)})),!i.isTouched||!i.isMoved||!t.swipeDirection||0===a.diff||i.currentTranslate===i.startTranslate)return i.isTouched=!1,i.isMoved=!1,void(i.startMoving=!1);if(i.isTouched=!1,i.isMoved=!1,i.startMoving=!1,p=s.followFinger?n?t.translate:-t.translate:-i.currentTranslate,!s.cssMode)if(s.freeMode){if(p<-t.minTranslate())return void t.slideTo(t.activeIndex);if(p>-t.maxTranslate())return void(t.slides.length<d.length?t.slideTo(d.length-1):t.slideTo(t.slides.length-1));if(s.freeModeMomentum){if(i.velocities.length>1){var v=i.velocities.pop(),f=i.velocities.pop(),m=v.position-f.position,g=v.time-f.time;t.velocity=m/g,t.velocity/=2,Math.abs(t.velocity)<s.freeModeMinimumVelocity&&(t.velocity=0),(g>150||r.now()-v.time>300)&&(t.velocity=0)}else t.velocity=0;t.velocity*=s.freeModeMomentumVelocityRatio,i.velocities.length=0;var w=1e3*s.freeModeMomentumRatio,b=t.velocity*w,y=t.translate+b;n&&(y=-y);var x,C,T=!1,S=20*Math.abs(t.velocity)*s.freeModeMomentumBounceRatio;if(y<t.maxTranslate())s.freeModeMomentumBounce?(y+t.maxTranslate()<-S&&(y=t.maxTranslate()-S),x=t.maxTranslate(),T=!0,i.allowMomentumBounce=!0):y=t.maxTranslate(),s.loop&&s.centeredSlides&&(C=!0);else if(y>t.minTranslate())s.freeModeMomentumBounce?(y-t.minTranslate()>S&&(y=t.minTranslate()+S),x=t.minTranslate(),T=!0,i.allowMomentumBounce=!0):y=t.minTranslate(),s.loop&&s.centeredSlides&&(C=!0);else if(s.freeModeSticky){for(var E,M=0;M<d.length;M+=1)if(d[M]>-y){E=M;break}y=-(y=Math.abs(d[E]-y)<Math.abs(d[E-1]-y)||"next"===t.swipeDirection?d[E]:d[E-1])}if(C&&t.once("transitionEnd",(function(){t.loopFix()})),0!==t.velocity){if(w=n?Math.abs((-y-t.translate)/t.velocity):Math.abs((y-t.translate)/t.velocity),s.freeModeSticky){var P=Math.abs((n?-y:y)-t.translate),k=t.slidesSizesGrid[t.activeIndex];w=P<k?s.speed:P<2*k?1.5*s.speed:2.5*s.speed}}else if(s.freeModeSticky)return void t.slideToClosest();s.freeModeMomentumBounce&&T?(t.updateProgress(x),t.setTransition(w),t.setTranslate(y),t.transitionStart(!0,t.swipeDirection),t.animating=!0,l.transitionEnd((function(){t&&!t.destroyed&&i.allowMomentumBounce&&(t.emit("momentumBounce"),t.setTransition(s.speed),t.setTranslate(x),l.transitionEnd((function(){t&&!t.destroyed&&t.transitionEnd()})))}))):t.velocity?(t.updateProgress(y),t.setTransition(w),t.setTranslate(y),t.transitionStart(!0,t.swipeDirection),t.animating||(t.animating=!0,l.transitionEnd((function(){t&&!t.destroyed&&t.transitionEnd()})))):t.updateProgress(y),t.updateActiveIndex(),t.updateSlidesClasses()}else if(s.freeModeSticky)return void t.slideToClosest();(!s.freeModeMomentum||c>=s.longSwipesMs)&&(t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}else{for(var L=0,z=t.slidesSizesGrid[0],I=0;I<o.length;I+=s.slidesPerGroup)void 0!==o[I+s.slidesPerGroup]?p>=o[I]&&p<o[I+s.slidesPerGroup]&&(L=I,z=o[I+s.slidesPerGroup]-o[I]):p>=o[I]&&(L=I,z=o[o.length-1]-o[o.length-2]);var O=(p-o[L])/z;if(c>s.longSwipesMs){if(!s.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(O>=s.longSwipesRatio?t.slideTo(L+s.slidesPerGroup):t.slideTo(L)),"prev"===t.swipeDirection&&(O>1-s.longSwipesRatio?t.slideTo(L+s.slidesPerGroup):t.slideTo(L))}else{if(!s.shortSwipes)return void t.slideTo(t.activeIndex);t.navigation&&(h.target===t.navigation.nextEl||h.target===t.navigation.prevEl)?h.target===t.navigation.nextEl?t.slideTo(L+s.slidesPerGroup):t.slideTo(L):("next"===t.swipeDirection&&t.slideTo(L+s.slidesPerGroup),"prev"===t.swipeDirection&&t.slideTo(L))}}}function D(){var e=this.params,t=this.el;if(!t||0!==t.offsetWidth){e.breakpoints&&this.setBreakpoint();var i=this.allowSlideNext,s=this.allowSlidePrev,a=this.snapGrid;this.allowSlideNext=!0,this.allowSlidePrev=!0,this.updateSize(),this.updateSlides(),this.updateSlidesClasses(),("auto"===e.slidesPerView||e.slidesPerView>1)&&this.isEnd&&!this.params.centeredSlides?this.slideTo(this.slides.length-1,0,!1,!0):this.slideTo(this.activeIndex,0,!1,!0),this.autoplay&&this.autoplay.running&&this.autoplay.paused&&this.autoplay.run(),this.allowSlidePrev=s,this.allowSlideNext=i,this.params.watchOverflow&&a!==this.snapGrid&&this.checkOverflow()}}function G(e){this.allowClick||(this.params.preventClicks&&e.preventDefault(),this.params.preventClicksPropagation&&this.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))}function V(){var e=this.wrapperEl;this.previousTranslate=this.translate,this.translate=this.isHorizontal()?-e.scrollLeft:-e.scrollTop,-0===this.translate&&(this.translate=0),this.updateActiveIndex(),this.updateSlidesClasses();var t=this.maxTranslate()-this.minTranslate();(0===t?0:(this.translate-this.minTranslate())/t)!==this.progress&&this.updateProgress(this.translate),this.emit("setTranslate",this.translate,!1)}var N=!1;function F(){}var H={init:!0,direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,preventInteractionOnTransition:!1,edgeSwipeDetection:!1,edgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!1,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopFillGroupWithBlank:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,containerModifierClass:"swiper-container-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0},q={update:h,translate:p,transition:u,slide:c,loop:v,grabCursor:f,manipulation:I,events:{attachEvents:function(){var e=this.params,t=this.touchEvents,i=this.el,s=this.wrapperEl;this.onTouchStart=A.bind(this),this.onTouchMove=$.bind(this),this.onTouchEnd=B.bind(this),e.cssMode&&(this.onScroll=V.bind(this)),this.onClick=G.bind(this);var a=!!e.nested;if(!l.touch&&l.pointerEvents)i.addEventListener(t.start,this.onTouchStart,!1),document.addEventListener(t.move,this.onTouchMove,a),document.addEventListener(t.end,this.onTouchEnd,!1);else{if(l.touch){var n=!("touchstart"!==t.start||!l.passiveListener||!e.passiveListeners)&&{passive:!0,capture:!1};i.addEventListener(t.start,this.onTouchStart,n),i.addEventListener(t.move,this.onTouchMove,l.passiveListener?{passive:!1,capture:a}:a),i.addEventListener(t.end,this.onTouchEnd,n),t.cancel&&i.addEventListener(t.cancel,this.onTouchEnd,n),N||(document.addEventListener("touchstart",F),N=!0)}(e.simulateTouch&&!O.ios&&!O.android||e.simulateTouch&&!l.touch&&O.ios)&&(i.addEventListener("mousedown",this.onTouchStart,!1),document.addEventListener("mousemove",this.onTouchMove,a),document.addEventListener("mouseup",this.onTouchEnd,!1))}(e.preventClicks||e.preventClicksPropagation)&&i.addEventListener("click",this.onClick,!0),e.cssMode&&s.addEventListener("scroll",this.onScroll),e.updateOnWindowResize?this.on(O.ios||O.android?"resize orientationchange observerUpdate":"resize observerUpdate",D,!0):this.on("observerUpdate",D,!0)},detachEvents:function(){var e=this.params,t=this.touchEvents,i=this.el,s=this.wrapperEl,a=!!e.nested;if(!l.touch&&l.pointerEvents)i.removeEventListener(t.start,this.onTouchStart,!1),document.removeEventListener(t.move,this.onTouchMove,a),document.removeEventListener(t.end,this.onTouchEnd,!1);else{if(l.touch){var n=!("onTouchStart"!==t.start||!l.passiveListener||!e.passiveListeners)&&{passive:!0,capture:!1};i.removeEventListener(t.start,this.onTouchStart,n),i.removeEventListener(t.move,this.onTouchMove,a),i.removeEventListener(t.end,this.onTouchEnd,n),t.cancel&&i.removeEventListener(t.cancel,this.onTouchEnd,n)}(e.simulateTouch&&!O.ios&&!O.android||e.simulateTouch&&!l.touch&&O.ios)&&(i.removeEventListener("mousedown",this.onTouchStart,!1),document.removeEventListener("mousemove",this.onTouchMove,a),document.removeEventListener("mouseup",this.onTouchEnd,!1))}(e.preventClicks||e.preventClicksPropagation)&&i.removeEventListener("click",this.onClick,!0),e.cssMode&&s.removeEventListener("scroll",this.onScroll),this.off(O.ios||O.android?"resize orientationchange observerUpdate":"resize observerUpdate",D)}},breakpoints:{setBreakpoint:function(){var e=this.activeIndex,t=this.initialized,i=this.loopedSlides;void 0===i&&(i=0);var s=this.params,a=this.$el,n=s.breakpoints;if(n&&(!n||0!==Object.keys(n).length)){var l=this.getBreakpoint(n);if(l&&this.currentBreakpoint!==l){var o=l in n?n[l]:void 0;o&&["slidesPerView","spaceBetween","slidesPerGroup","slidesPerColumn"].forEach((function(e){var t=o[e];void 0!==t&&(o[e]="slidesPerView"!==e||"AUTO"!==t&&"auto"!==t?"slidesPerView"===e?parseFloat(t):parseInt(t,10):"auto")}));var d=o||this.originalParams,h=s.slidesPerColumn>1,p=d.slidesPerColumn>1;h&&!p?a.removeClass(s.containerModifierClass+"multirow "+s.containerModifierClass+"multirow-column"):!h&&p&&(a.addClass(s.containerModifierClass+"multirow"),"column"===d.slidesPerColumnFill&&a.addClass(s.containerModifierClass+"multirow-column"));var u=d.direction&&d.direction!==s.direction,c=s.loop&&(d.slidesPerView!==s.slidesPerView||u);u&&t&&this.changeDirection(),r.extend(this.params,d),r.extend(this,{allowTouchMove:this.params.allowTouchMove,allowSlideNext:this.params.allowSlideNext,allowSlidePrev:this.params.allowSlidePrev}),this.currentBreakpoint=l,c&&t&&(this.loopDestroy(),this.loopCreate(),this.updateSlides(),this.slideTo(e-i+this.loopedSlides,0,!1)),this.emit("breakpoint",d)}}},getBreakpoint:function(e){if(e){var t=!1,i=[];Object.keys(e).forEach((function(e){i.push(e)})),i.sort((function(e,t){return parseInt(e,10)-parseInt(t,10)}));for(var s=0;s<i.length;s+=1){var a=i[s];a<=window.innerWidth&&(t=a)}return t||"max"}}},checkOverflow:{checkOverflow:function(){var e=this.params,t=this.isLocked,i=this.slides.length>0&&e.slidesOffsetBefore+e.spaceBetween*(this.slides.length-1)+this.slides[0].offsetWidth*this.slides.length;e.slidesOffsetBefore&&e.slidesOffsetAfter&&i?this.isLocked=i<=this.size:this.isLocked=1===this.snapGrid.length,this.allowSlideNext=!this.isLocked,this.allowSlidePrev=!this.isLocked,t!==this.isLocked&&this.emit(this.isLocked?"lock":"unlock"),t&&t!==this.isLocked&&(this.isEnd=!1,this.navigation.update())}},classes:{addClasses:function(){var e=this.classNames,t=this.params,i=this.rtl,s=this.$el,a=[];a.push("initialized"),a.push(t.direction),t.freeMode&&a.push("free-mode"),t.autoHeight&&a.push("autoheight"),i&&a.push("rtl"),t.slidesPerColumn>1&&(a.push("multirow"),"column"===t.slidesPerColumnFill&&a.push("multirow-column")),O.android&&a.push("android"),O.ios&&a.push("ios"),t.cssMode&&a.push("css-mode"),a.forEach((function(i){e.push(t.containerModifierClass+i)})),s.addClass(e.join(" "))},removeClasses:function(){var e=this.$el,t=this.classNames;e.removeClass(t.join(" "))}},images:{loadImage:function(e,t,i,s,a,n){var r;function l(){n&&n()}e.complete&&a?l():t?((r=new window.Image).onload=l,r.onerror=l,s&&(r.sizes=s),i&&(r.srcset=i),t&&(r.src=t)):l()},preloadImages:function(){var e=this;function t(){null!=e&&e&&!e.destroyed&&(void 0!==e.imagesLoaded&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit("imagesReady")))}e.imagesToLoad=e.$el.find("img");for(var i=0;i<e.imagesToLoad.length;i+=1){var s=e.imagesToLoad[i];e.loadImage(s,s.currentSrc||s.getAttribute("src"),s.srcset||s.getAttribute("srcset"),s.sizes||s.getAttribute("sizes"),!0,t)}}}},R={},j=function(e){function t(){for(var i,a,n,o=[],d=arguments.length;d--;)o[d]=arguments[d];1===o.length&&o[0].constructor&&o[0].constructor===Object?n=o[0]:(a=(i=o)[0],n=i[1]),n||(n={}),n=r.extend({},n),a&&!n.el&&(n.el=a),e.call(this,n),Object.keys(q).forEach((function(e){Object.keys(q[e]).forEach((function(i){t.prototype[i]||(t.prototype[i]=q[e][i])}))}));var h=this;void 0===h.modules&&(h.modules={}),Object.keys(h.modules).forEach((function(e){var t=h.modules[e];if(t.params){var i=Object.keys(t.params)[0],s=t.params[i];if("object"!=typeof s||null===s)return;if(!(i in n&&"enabled"in s))return;!0===n[i]&&(n[i]={enabled:!0}),"object"!=typeof n[i]||"enabled"in n[i]||(n[i].enabled=!0),n[i]||(n[i]={enabled:!1})}}));var p=r.extend({},H);h.useModulesParams(p),h.params=r.extend({},p,R,n),h.originalParams=r.extend({},h.params),h.passedParams=r.extend({},n),h.$=s;var u=s(h.params.el);if(a=u[0]){if(u.length>1){var c=[];return u.each((function(e,i){var s=r.extend({},n,{el:i});c.push(new t(s))})),c}var v,f,m;return a.swiper=h,u.data("swiper",h),a&&a.shadowRoot&&a.shadowRoot.querySelector?(v=s(a.shadowRoot.querySelector("."+h.params.wrapperClass))).children=function(e){return u.children(e)}:v=u.children("."+h.params.wrapperClass),r.extend(h,{$el:u,el:a,$wrapperEl:v,wrapperEl:v[0],classNames:[],slides:s(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:function(){return"horizontal"===h.params.direction},isVertical:function(){return"vertical"===h.params.direction},rtl:"rtl"===a.dir.toLowerCase()||"rtl"===u.css("direction"),rtlTranslate:"horizontal"===h.params.direction&&("rtl"===a.dir.toLowerCase()||"rtl"===u.css("direction")),wrongRTL:"-webkit-box"===v.css("display"),activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:h.params.allowSlideNext,allowSlidePrev:h.params.allowSlidePrev,touchEvents:(f=["touchstart","touchmove","touchend","touchcancel"],m=["mousedown","mousemove","mouseup"],l.pointerEvents&&(m=["pointerdown","pointermove","pointerup"]),h.touchEventsTouch={start:f[0],move:f[1],end:f[2],cancel:f[3]},h.touchEventsDesktop={start:m[0],move:m[1],end:m[2]},l.touch||!h.params.simulateTouch?h.touchEventsTouch:h.touchEventsDesktop),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,formElements:"input, select, option, textarea, button, video",lastClickTime:r.now(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:h.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),h.useModules(),h.params.init&&h.init(),h}}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var i={extendedDefaults:{configurable:!0},defaults:{configurable:!0},Class:{configurable:!0},$:{configurable:!0}};return t.prototype.slidesPerViewDynamic=function(){var e=this.params,t=this.slides,i=this.slidesGrid,s=this.size,a=this.activeIndex,n=1;if(e.centeredSlides){for(var r,l=t[a].swiperSlideSize,o=a+1;o<t.length;o+=1)t[o]&&!r&&(n+=1,(l+=t[o].swiperSlideSize)>s&&(r=!0));for(var d=a-1;d>=0;d-=1)t[d]&&!r&&(n+=1,(l+=t[d].swiperSlideSize)>s&&(r=!0))}else for(var h=a+1;h<t.length;h+=1)i[h]-i[a]<s&&(n+=1);return n},t.prototype.update=function(){var e=this;if(e&&!e.destroyed){var t=e.snapGrid,i=e.params;i.breakpoints&&e.setBreakpoint(),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.params.freeMode?(s(),e.params.autoHeight&&e.updateAutoHeight()):(("auto"===e.params.slidesPerView||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0))||s(),i.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}function s(){var t=e.rtlTranslate?-1*e.translate:e.translate,i=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(i),e.updateActiveIndex(),e.updateSlidesClasses()}},t.prototype.changeDirection=function(e,t){void 0===t&&(t=!0);var i=this.params.direction;return e||(e="horizontal"===i?"vertical":"horizontal"),e===i||"horizontal"!==e&&"vertical"!==e?this:(this.$el.removeClass(""+this.params.containerModifierClass+i).addClass(""+this.params.containerModifierClass+e),this.params.direction=e,this.slides.each((function(t,i){"vertical"===e?i.style.width="":i.style.height=""})),this.emit("changeDirection"),t&&this.update(),this)},t.prototype.init=function(){this.initialized||(this.emit("beforeInit"),this.params.breakpoints&&this.setBreakpoint(),this.addClasses(),this.params.loop&&this.loopCreate(),this.updateSize(),this.updateSlides(),this.params.watchOverflow&&this.checkOverflow(),this.params.grabCursor&&this.setGrabCursor(),this.params.preloadImages&&this.preloadImages(),this.params.loop?this.slideTo(this.params.initialSlide+this.loopedSlides,0,this.params.runCallbacksOnInit):this.slideTo(this.params.initialSlide,0,this.params.runCallbacksOnInit),this.attachEvents(),this.initialized=!0,this.emit("init"))},t.prototype.destroy=function(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0);var i=this,s=i.params,a=i.$el,n=i.$wrapperEl,l=i.slides;return void 0===i.params||i.destroyed?null:(i.emit("beforeDestroy"),i.initialized=!1,i.detachEvents(),s.loop&&i.loopDestroy(),t&&(i.removeClasses(),a.removeAttr("style"),n.removeAttr("style"),l&&l.length&&l.removeClass([s.slideVisibleClass,s.slideActiveClass,s.slideNextClass,s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),i.emit("destroy"),Object.keys(i.eventsListeners).forEach((function(e){i.off(e)})),!1!==e&&(i.$el[0].swiper=null,i.$el.data("swiper",null),r.deleteProps(i)),i.destroyed=!0,null)},t.extendDefaults=function(e){r.extend(R,e)},i.extendedDefaults.get=function(){return R},i.defaults.get=function(){return H},i.Class.get=function(){return e},i.$.get=function(){return s},Object.defineProperties(t,i),t}(o),W={name:"device",proto:{device:O},static:{device:O}},X={name:"support",proto:{support:l},static:{support:l}},Y={isEdge:!!window.navigator.userAgent.match(/Edge/g),isSafari:function(){var e=window.navigator.userAgent.toLowerCase();return e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0}(),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)},U={name:"browser",proto:{browser:Y},static:{browser:Y}},_={name:"resize",create:function(){var e=this;r.extend(e,{resize:{resizeHandler:function(){e&&!e.destroyed&&e.initialized&&(e.emit("beforeResize"),e.emit("resize"))},orientationChangeHandler:function(){e&&!e.destroyed&&e.initialized&&e.emit("orientationchange")}}})},on:{init:function(){window.addEventListener("resize",this.resize.resizeHandler),window.addEventListener("orientationchange",this.resize.orientationChangeHandler)},destroy:function(){window.removeEventListener("resize",this.resize.resizeHandler),window.removeEventListener("orientationchange",this.resize.orientationChangeHandler)}}},K={func:window.MutationObserver||window.WebkitMutationObserver,attach:function(e,t){void 0===t&&(t={});var i=this,s=new(0,K.func)((function(e){if(1!==e.length){var t=function(){i.emit("observerUpdate",e[0])};window.requestAnimationFrame?window.requestAnimationFrame(t):window.setTimeout(t,0)}else i.emit("observerUpdate",e[0])}));s.observe(e,{attributes:void 0===t.attributes||t.attributes,childList:void 0===t.childList||t.childList,characterData:void 0===t.characterData||t.characterData}),i.observer.observers.push(s)},init:function(){if(l.observer&&this.params.observer){if(this.params.observeParents)for(var e=this.$el.parents(),t=0;t<e.length;t+=1)this.observer.attach(e[t]);this.observer.attach(this.$el[0],{childList:this.params.observeSlideChildren}),this.observer.attach(this.$wrapperEl[0],{attributes:!1})}},destroy:function(){this.observer.observers.forEach((function(e){e.disconnect()})),this.observer.observers=[]}},Q={update:function(e){var t=this,i=t.params,s=i.slidesPerView,a=i.slidesPerGroup,n=i.centeredSlides,l=t.params.virtual,o=l.addSlidesBefore,d=l.addSlidesAfter,h=t.virtual,p=h.from,u=h.to,c=h.slides,v=h.slidesGrid,f=h.renderSlide,m=h.offset;t.updateActiveIndex();var g,w,b,y=t.activeIndex||0;g=t.rtlTranslate?"right":t.isHorizontal()?"left":"top",n?(w=Math.floor(s/2)+a+o,b=Math.floor(s/2)+a+d):(w=s+(a-1)+o,b=a+d);var x=Math.max((y||0)-b,0),C=Math.min((y||0)+w,c.length-1),T=(t.slidesGrid[x]||0)-(t.slidesGrid[0]||0);function S(){t.updateSlides(),t.updateProgress(),t.updateSlidesClasses(),t.lazy&&t.params.lazy.enabled&&t.lazy.load()}if(r.extend(t.virtual,{from:x,to:C,offset:T,slidesGrid:t.slidesGrid}),p===x&&u===C&&!e)return t.slidesGrid!==v&&T!==m&&t.slides.css(g,T+"px"),void t.updateProgress();if(t.params.virtual.renderExternal)return t.params.virtual.renderExternal.call(t,{offset:T,from:x,to:C,slides:function(){for(var e=[],t=x;t<=C;t+=1)e.push(c[t]);return e}()}),void S();var E=[],M=[];if(e)t.$wrapperEl.find("."+t.params.slideClass).remove();else for(var P=p;P<=u;P+=1)(P<x||P>C)&&t.$wrapperEl.find("."+t.params.slideClass+'[data-swiper-slide-index="'+P+'"]').remove();for(var k=0;k<c.length;k+=1)k>=x&&k<=C&&(void 0===u||e?M.push(k):(k>u&&M.push(k),k<p&&E.push(k)));M.forEach((function(e){t.$wrapperEl.append(f(c[e],e))})),E.sort((function(e,t){return t-e})).forEach((function(e){t.$wrapperEl.prepend(f(c[e],e))})),t.$wrapperEl.children(".swiper-slide").css(g,T+"px"),S()},renderSlide:function(e,t){var i=this.params.virtual;if(i.cache&&this.virtual.cache[t])return this.virtual.cache[t];var a=i.renderSlide?s(i.renderSlide.call(this,e,t)):s('<div class="'+this.params.slideClass+'" data-swiper-slide-index="'+t+'">'+e+"</div>");return a.attr("data-swiper-slide-index")||a.attr("data-swiper-slide-index",t),i.cache&&(this.virtual.cache[t]=a),a},appendSlide:function(e){if("object"==typeof e&&"length"in e)for(var t=0;t<e.length;t+=1)e[t]&&this.virtual.slides.push(e[t]);else this.virtual.slides.push(e);this.virtual.update(!0)},prependSlide:function(e){var t=this.activeIndex,i=t+1,s=1;if(Array.isArray(e)){for(var a=0;a<e.length;a+=1)e[a]&&this.virtual.slides.unshift(e[a]);i=t+e.length,s=e.length}else this.virtual.slides.unshift(e);if(this.params.virtual.cache){var n=this.virtual.cache,r={};Object.keys(n).forEach((function(e){var t=n[e],i=t.attr("data-swiper-slide-index");i&&t.attr("data-swiper-slide-index",parseInt(i,10)+1),r[parseInt(e,10)+s]=t})),this.virtual.cache=r}this.virtual.update(!0),this.slideTo(i,0)},removeSlide:function(e){if(null!=e){var t=this.activeIndex;if(Array.isArray(e))for(var i=e.length-1;i>=0;i-=1)this.virtual.slides.splice(e[i],1),this.params.virtual.cache&&delete this.virtual.cache[e[i]],e[i]<t&&(t-=1),t=Math.max(t,0);else this.virtual.slides.splice(e,1),this.params.virtual.cache&&delete this.virtual.cache[e],e<t&&(t-=1),t=Math.max(t,0);this.virtual.update(!0),this.slideTo(t,0)}},removeAllSlides:function(){this.virtual.slides=[],this.params.virtual.cache&&(this.virtual.cache={}),this.virtual.update(!0),this.slideTo(0,0)}},J={update:function(){var e=this.params.navigation;if(!this.params.loop){var t=this.navigation,i=t.$nextEl,s=t.$prevEl;s&&s.length>0&&(this.isBeginning?s.addClass(e.disabledClass):s.removeClass(e.disabledClass),s[this.params.watchOverflow&&this.isLocked?"addClass":"removeClass"](e.lockClass)),i&&i.length>0&&(this.isEnd?i.addClass(e.disabledClass):i.removeClass(e.disabledClass),i[this.params.watchOverflow&&this.isLocked?"addClass":"removeClass"](e.lockClass))}},onPrevClick:function(e){e.preventDefault(),this.isBeginning&&!this.params.loop||this.slidePrev()},onNextClick:function(e){e.preventDefault(),this.isEnd&&!this.params.loop||this.slideNext()},init:function(){var e,t,i=this.params.navigation;(i.nextEl||i.prevEl)&&(i.nextEl&&(e=s(i.nextEl),this.params.uniqueNavElements&&"string"==typeof i.nextEl&&e.length>1&&1===this.$el.find(i.nextEl).length&&(e=this.$el.find(i.nextEl))),i.prevEl&&(t=s(i.prevEl),this.params.uniqueNavElements&&"string"==typeof i.prevEl&&t.length>1&&1===this.$el.find(i.prevEl).length&&(t=this.$el.find(i.prevEl))),e&&e.length>0&&e.on("click",this.navigation.onNextClick),t&&t.length>0&&t.on("click",this.navigation.onPrevClick),r.extend(this.navigation,{$nextEl:e,nextEl:e&&e[0],$prevEl:t,prevEl:t&&t[0]}))},destroy:function(){var e=this.navigation,t=e.$nextEl,i=e.$prevEl;t&&t.length&&(t.off("click",this.navigation.onNextClick),t.removeClass(this.params.navigation.disabledClass)),i&&i.length&&(i.off("click",this.navigation.onPrevClick),i.removeClass(this.params.navigation.disabledClass))}},Z={update:function(){var e=this.rtl,t=this.params.pagination;if(t.el&&this.pagination.el&&this.pagination.$el&&0!==this.pagination.$el.length){var i,a=this.virtual&&this.params.virtual.enabled?this.virtual.slides.length:this.slides.length,n=this.pagination.$el,r=this.params.loop?Math.ceil((a-2*this.loopedSlides)/this.params.slidesPerGroup):this.snapGrid.length;if(this.params.loop?((i=Math.ceil((this.activeIndex-this.loopedSlides)/this.params.slidesPerGroup))>a-1-2*this.loopedSlides&&(i-=a-2*this.loopedSlides),i>r-1&&(i-=r),i<0&&"bullets"!==this.params.paginationType&&(i=r+i)):i=void 0!==this.snapIndex?this.snapIndex:this.activeIndex||0,"bullets"===t.type&&this.pagination.bullets&&this.pagination.bullets.length>0){var l,o,d,h=this.pagination.bullets;if(t.dynamicBullets&&(this.pagination.bulletSize=h.eq(0)[this.isHorizontal()?"outerWidth":"outerHeight"](!0),n.css(this.isHorizontal()?"width":"height",this.pagination.bulletSize*(t.dynamicMainBullets+4)+"px"),t.dynamicMainBullets>1&&void 0!==this.previousIndex&&(this.pagination.dynamicBulletIndex+=i-this.previousIndex,this.pagination.dynamicBulletIndex>t.dynamicMainBullets-1?this.pagination.dynamicBulletIndex=t.dynamicMainBullets-1:this.pagination.dynamicBulletIndex<0&&(this.pagination.dynamicBulletIndex=0)),l=i-this.pagination.dynamicBulletIndex,d=((o=l+(Math.min(h.length,t.dynamicMainBullets)-1))+l)/2),h.removeClass(t.bulletActiveClass+" "+t.bulletActiveClass+"-next "+t.bulletActiveClass+"-next-next "+t.bulletActiveClass+"-prev "+t.bulletActiveClass+"-prev-prev "+t.bulletActiveClass+"-main"),n.length>1)h.each((function(e,a){var n=s(a),r=n.index();r===i&&n.addClass(t.bulletActiveClass),t.dynamicBullets&&(r>=l&&r<=o&&n.addClass(t.bulletActiveClass+"-main"),r===l&&n.prev().addClass(t.bulletActiveClass+"-prev").prev().addClass(t.bulletActiveClass+"-prev-prev"),r===o&&n.next().addClass(t.bulletActiveClass+"-next").next().addClass(t.bulletActiveClass+"-next-next"))}));else{var p=h.eq(i),u=p.index();if(p.addClass(t.bulletActiveClass),t.dynamicBullets){for(var c=h.eq(l),v=h.eq(o),f=l;f<=o;f+=1)h.eq(f).addClass(t.bulletActiveClass+"-main");if(this.params.loop)if(u>=h.length-t.dynamicMainBullets){for(var m=t.dynamicMainBullets;m>=0;m-=1)h.eq(h.length-m).addClass(t.bulletActiveClass+"-main");h.eq(h.length-t.dynamicMainBullets-1).addClass(t.bulletActiveClass+"-prev")}else c.prev().addClass(t.bulletActiveClass+"-prev").prev().addClass(t.bulletActiveClass+"-prev-prev"),v.next().addClass(t.bulletActiveClass+"-next").next().addClass(t.bulletActiveClass+"-next-next");else c.prev().addClass(t.bulletActiveClass+"-prev").prev().addClass(t.bulletActiveClass+"-prev-prev"),v.next().addClass(t.bulletActiveClass+"-next").next().addClass(t.bulletActiveClass+"-next-next")}}if(t.dynamicBullets){var g=Math.min(h.length,t.dynamicMainBullets+4),w=(this.pagination.bulletSize*g-this.pagination.bulletSize)/2-d*this.pagination.bulletSize,b=e?"right":"left";h.css(this.isHorizontal()?b:"top",w+"px")}}if("fraction"===t.type&&(n.find("."+t.currentClass).text(t.formatFractionCurrent(i+1)),n.find("."+t.totalClass).text(t.formatFractionTotal(r))),"progressbar"===t.type){var y;y=t.progressbarOpposite?this.isHorizontal()?"vertical":"horizontal":this.isHorizontal()?"horizontal":"vertical";var x=(i+1)/r,C=1,T=1;"horizontal"===y?C=x:T=x,n.find("."+t.progressbarFillClass).transform("translate3d(0,0,0) scaleX("+C+") scaleY("+T+")").transition(this.params.speed)}"custom"===t.type&&t.renderCustom?(n.html(t.renderCustom(this,i+1,r)),this.emit("paginationRender",this,n[0])):this.emit("paginationUpdate",this,n[0]),n[this.params.watchOverflow&&this.isLocked?"addClass":"removeClass"](t.lockClass)}},render:function(){var e=this.params.pagination;if(e.el&&this.pagination.el&&this.pagination.$el&&0!==this.pagination.$el.length){var t=this.virtual&&this.params.virtual.enabled?this.virtual.slides.length:this.slides.length,i=this.pagination.$el,s="";if("bullets"===e.type){for(var a=this.params.loop?Math.ceil((t-2*this.loopedSlides)/this.params.slidesPerGroup):this.snapGrid.length,n=0;n<a;n+=1)e.renderBullet?s+=e.renderBullet.call(this,n,e.bulletClass):s+="<"+e.bulletElement+' class="'+e.bulletClass+'"></'+e.bulletElement+">";i.html(s),this.pagination.bullets=i.find("."+e.bulletClass)}"fraction"===e.type&&(s=e.renderFraction?e.renderFraction.call(this,e.currentClass,e.totalClass):'<span class="'+e.currentClass+'"></span> / <span class="'+e.totalClass+'"></span>',i.html(s)),"progressbar"===e.type&&(s=e.renderProgressbar?e.renderProgressbar.call(this,e.progressbarFillClass):'<span class="'+e.progressbarFillClass+'"></span>',i.html(s)),"custom"!==e.type&&this.emit("paginationRender",this.pagination.$el[0])}},init:function(){var e=this,t=e.params.pagination;if(t.el){var i=s(t.el);0!==i.length&&(e.params.uniqueNavElements&&"string"==typeof t.el&&i.length>1&&1===e.$el.find(t.el).length&&(i=e.$el.find(t.el)),"bullets"===t.type&&t.clickable&&i.addClass(t.clickableClass),i.addClass(t.modifierClass+t.type),"bullets"===t.type&&t.dynamicBullets&&(i.addClass(""+t.modifierClass+t.type+"-dynamic"),e.pagination.dynamicBulletIndex=0,t.dynamicMainBullets<1&&(t.dynamicMainBullets=1)),"progressbar"===t.type&&t.progressbarOpposite&&i.addClass(t.progressbarOppositeClass),t.clickable&&i.on("click","."+t.bulletClass,(function(t){t.preventDefault();var i=s(this).index()*e.params.slidesPerGroup;e.params.loop&&(i+=e.loopedSlides),e.slideTo(i)})),r.extend(e.pagination,{$el:i,el:i[0]}))}},destroy:function(){var e=this.params.pagination;if(e.el&&this.pagination.el&&this.pagination.$el&&0!==this.pagination.$el.length){var t=this.pagination.$el;t.removeClass(e.hiddenClass),t.removeClass(e.modifierClass+e.type),this.pagination.bullets&&this.pagination.bullets.removeClass(e.bulletActiveClass),e.clickable&&t.off("click","."+e.bulletClass)}}},ee={loadInSlide:function(e,t){void 0===t&&(t=!0);var i=this,a=i.params.lazy;if(void 0!==e&&0!==i.slides.length){var n=i.virtual&&i.params.virtual.enabled?i.$wrapperEl.children("."+i.params.slideClass+'[data-swiper-slide-index="'+e+'"]'):i.slides.eq(e),r=n.find("."+a.elementClass+":not(."+a.loadedClass+"):not(."+a.loadingClass+")");!n.hasClass(a.elementClass)||n.hasClass(a.loadedClass)||n.hasClass(a.loadingClass)||(r=r.add(n[0])),0!==r.length&&r.each((function(e,r){var l=s(r);l.addClass(a.loadingClass);var o=l.attr("data-background"),d=l.attr("data-src"),h=l.attr("data-srcset"),p=l.attr("data-sizes");i.loadImage(l[0],d||o,h,p,!1,(function(){if(null!=i&&i&&(!i||i.params)&&!i.destroyed){if(o?(l.css("background-image",'url("'+o+'")'),l.removeAttr("data-background")):(h&&(l.attr("srcset",h),l.removeAttr("data-srcset")),p&&(l.attr("sizes",p),l.removeAttr("data-sizes")),d&&(l.attr("src",d),l.removeAttr("data-src"))),l.addClass(a.loadedClass).removeClass(a.loadingClass),n.find("."+a.preloaderClass).remove(),i.params.loop&&t){var e=n.attr("data-swiper-slide-index");if(n.hasClass(i.params.slideDuplicateClass)){var s=i.$wrapperEl.children('[data-swiper-slide-index="'+e+'"]:not(.'+i.params.slideDuplicateClass+")");i.lazy.loadInSlide(s.index(),!1)}else{var r=i.$wrapperEl.children("."+i.params.slideDuplicateClass+'[data-swiper-slide-index="'+e+'"]');i.lazy.loadInSlide(r.index(),!1)}}i.emit("lazyImageReady",n[0],l[0])}})),i.emit("lazyImageLoad",n[0],l[0])}))}},load:function(){var e=this,t=e.$wrapperEl,i=e.params,a=e.slides,n=e.activeIndex,r=e.virtual&&i.virtual.enabled,l=i.lazy,o=i.slidesPerView;function d(e){if(r){if(t.children("."+i.slideClass+'[data-swiper-slide-index="'+e+'"]').length)return!0}else if(a[e])return!0;return!1}function h(e){return r?s(e).attr("data-swiper-slide-index"):s(e).index()}if("auto"===o&&(o=0),e.lazy.initialImageLoaded||(e.lazy.initialImageLoaded=!0),e.params.watchSlidesVisibility)t.children("."+i.slideVisibleClass).each((function(t,i){var a=r?s(i).attr("data-swiper-slide-index"):s(i).index();e.lazy.loadInSlide(a)}));else if(o>1)for(var p=n;p<n+o;p+=1)d(p)&&e.lazy.loadInSlide(p);else e.lazy.loadInSlide(n);if(l.loadPrevNext)if(o>1||l.loadPrevNextAmount&&l.loadPrevNextAmount>1){for(var u=l.loadPrevNextAmount,c=o,v=Math.min(n+c+Math.max(u,c),a.length),f=Math.max(n-Math.max(c,u),0),m=n+o;m<v;m+=1)d(m)&&e.lazy.loadInSlide(m);for(var g=f;g<n;g+=1)d(g)&&e.lazy.loadInSlide(g)}else{var w=t.children("."+i.slideNextClass);w.length>0&&e.lazy.loadInSlide(h(w));var b=t.children("."+i.slidePrevClass);b.length>0&&e.lazy.loadInSlide(h(b))}}},te={LinearSpline:function(e,t){var i,s,a,n,r,l=function(e,t){for(s=-1,i=e.length;i-s>1;)e[a=i+s>>1]<=t?s=a:i=a;return i};return this.x=e,this.y=t,this.lastIndex=e.length-1,this.interpolate=function(e){return e?(r=l(this.x,e),n=r-1,(e-this.x[n])*(this.y[r]-this.y[n])/(this.x[r]-this.x[n])+this.y[n]):0},this},getInterpolateFunction:function(e){this.controller.spline||(this.controller.spline=this.params.loop?new te.LinearSpline(this.slidesGrid,e.slidesGrid):new te.LinearSpline(this.snapGrid,e.snapGrid))},setTranslate:function(e,t){var i,s,a=this,n=a.controller.control;function r(e){var t=a.rtlTranslate?-a.translate:a.translate;"slide"===a.params.controller.by&&(a.controller.getInterpolateFunction(e),s=-a.controller.spline.interpolate(-t)),s&&"container"!==a.params.controller.by||(i=(e.maxTranslate()-e.minTranslate())/(a.maxTranslate()-a.minTranslate()),s=(t-a.minTranslate())*i+e.minTranslate()),a.params.controller.inverse&&(s=e.maxTranslate()-s),e.updateProgress(s),e.setTranslate(s,a),e.updateActiveIndex(),e.updateSlidesClasses()}if(Array.isArray(n))for(var l=0;l<n.length;l+=1)n[l]!==t&&n[l]instanceof j&&r(n[l]);else n instanceof j&&t!==n&&r(n)},setTransition:function(e,t){var i,s=this,a=s.controller.control;function n(t){t.setTransition(e,s),0!==e&&(t.transitionStart(),t.params.autoHeight&&r.nextTick((function(){t.updateAutoHeight()})),t.$wrapperEl.transitionEnd((function(){a&&(t.params.loop&&"slide"===s.params.controller.by&&t.loopFix(),t.transitionEnd())})))}if(Array.isArray(a))for(i=0;i<a.length;i+=1)a[i]!==t&&a[i]instanceof j&&n(a[i]);else a instanceof j&&t!==a&&n(a)}},ie={makeElFocusable:function(e){return e.attr("tabIndex","0"),e},addElRole:function(e,t){return e.attr("role",t),e},addElLabel:function(e,t){return e.attr("aria-label",t),e},disableEl:function(e){return e.attr("aria-disabled",!0),e},enableEl:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(e){var t=this.params.a11y;if(13===e.keyCode){var i=s(e.target);this.navigation&&this.navigation.$nextEl&&i.is(this.navigation.$nextEl)&&(this.isEnd&&!this.params.loop||this.slideNext(),this.isEnd?this.a11y.notify(t.lastSlideMessage):this.a11y.notify(t.nextSlideMessage)),this.navigation&&this.navigation.$prevEl&&i.is(this.navigation.$prevEl)&&(this.isBeginning&&!this.params.loop||this.slidePrev(),this.isBeginning?this.a11y.notify(t.firstSlideMessage):this.a11y.notify(t.prevSlideMessage)),this.pagination&&i.is("."+this.params.pagination.bulletClass)&&i[0].click()}},notify:function(e){var t=this.a11y.liveRegion;0!==t.length&&(t.html(""),t.html(e))},updateNavigation:function(){if(!this.params.loop&&this.navigation){var e=this.navigation,t=e.$nextEl,i=e.$prevEl;i&&i.length>0&&(this.isBeginning?this.a11y.disableEl(i):this.a11y.enableEl(i)),t&&t.length>0&&(this.isEnd?this.a11y.disableEl(t):this.a11y.enableEl(t))}},updatePagination:function(){var e=this,t=e.params.a11y;e.pagination&&e.params.pagination.clickable&&e.pagination.bullets&&e.pagination.bullets.length&&e.pagination.bullets.each((function(i,a){var n=s(a);e.a11y.makeElFocusable(n),e.a11y.addElRole(n,"button"),e.a11y.addElLabel(n,t.paginationBulletMessage.replace(/{{index}}/,n.index()+1))}))},init:function(){this.$el.append(this.a11y.liveRegion);var e,t,i=this.params.a11y;this.navigation&&this.navigation.$nextEl&&(e=this.navigation.$nextEl),this.navigation&&this.navigation.$prevEl&&(t=this.navigation.$prevEl),e&&(this.a11y.makeElFocusable(e),this.a11y.addElRole(e,"button"),this.a11y.addElLabel(e,i.nextSlideMessage),e.on("keydown",this.a11y.onEnterKey)),t&&(this.a11y.makeElFocusable(t),this.a11y.addElRole(t,"button"),this.a11y.addElLabel(t,i.prevSlideMessage),t.on("keydown",this.a11y.onEnterKey)),this.pagination&&this.params.pagination.clickable&&this.pagination.bullets&&this.pagination.bullets.length&&this.pagination.$el.on("keydown","."+this.params.pagination.bulletClass,this.a11y.onEnterKey)},destroy:function(){var e,t;this.a11y.liveRegion&&this.a11y.liveRegion.length>0&&this.a11y.liveRegion.remove(),this.navigation&&this.navigation.$nextEl&&(e=this.navigation.$nextEl),this.navigation&&this.navigation.$prevEl&&(t=this.navigation.$prevEl),e&&e.off("keydown",this.a11y.onEnterKey),t&&t.off("keydown",this.a11y.onEnterKey),this.pagination&&this.params.pagination.clickable&&this.pagination.bullets&&this.pagination.bullets.length&&this.pagination.$el.off("keydown","."+this.params.pagination.bulletClass,this.a11y.onEnterKey)}},se={run:function(){var e=this,t=e.slides.eq(e.activeIndex),i=e.params.autoplay.delay;t.attr("data-swiper-autoplay")&&(i=t.attr("data-swiper-autoplay")||e.params.autoplay.delay),clearTimeout(e.autoplay.timeout),e.autoplay.timeout=r.nextTick((function(){e.params.autoplay.reverseDirection?e.params.loop?(e.loopFix(),e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.isBeginning?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(e.slideTo(e.slides.length-1,e.params.speed,!0,!0),e.emit("autoplay")):(e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.params.loop?(e.loopFix(),e.slideNext(e.params.speed,!0,!0),e.emit("autoplay")):e.isEnd?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(e.slideTo(0,e.params.speed,!0,!0),e.emit("autoplay")):(e.slideNext(e.params.speed,!0,!0),e.emit("autoplay")),e.params.cssMode&&e.autoplay.running&&e.autoplay.run()}),i)},start:function(){return void 0===this.autoplay.timeout&&(!this.autoplay.running&&(this.autoplay.running=!0,this.emit("autoplayStart"),this.autoplay.run(),!0))},stop:function(){return!!this.autoplay.running&&(void 0!==this.autoplay.timeout&&(this.autoplay.timeout&&(clearTimeout(this.autoplay.timeout),this.autoplay.timeout=void 0),this.autoplay.running=!1,this.emit("autoplayStop"),!0))},pause:function(e){this.autoplay.running&&(this.autoplay.paused||(this.autoplay.timeout&&clearTimeout(this.autoplay.timeout),this.autoplay.paused=!0,0!==e&&this.params.autoplay.waitForTransition?(this.$wrapperEl[0].addEventListener("transitionend",this.autoplay.onTransitionEnd),this.$wrapperEl[0].addEventListener("webkitTransitionEnd",this.autoplay.onTransitionEnd)):(this.autoplay.paused=!1,this.autoplay.run())))}},ae={setTranslate:function(){for(var e=this.slides,t=0;t<e.length;t+=1){var i=this.slides.eq(t),s=-i[0].swiperSlideOffset;this.params.virtualTranslate||(s-=this.translate);var a=0;this.isHorizontal()||(a=s,s=0);var n=this.params.fadeEffect.crossFade?Math.max(1-Math.abs(i[0].progress),0):1+Math.min(Math.max(i[0].progress,-1),0);i.css({opacity:n}).transform("translate3d("+s+"px, "+a+"px, 0px)")}},setTransition:function(e){var t=this,i=t.slides,s=t.$wrapperEl;if(i.transition(e),t.params.virtualTranslate&&0!==e){var a=!1;i.transitionEnd((function(){if(!a&&t&&!t.destroyed){a=!0,t.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],i=0;i<e.length;i+=1)s.trigger(e[i])}}))}}},ne={setTranslate:function(){for(var e=this.slides,t=this.rtlTranslate,i=0;i<e.length;i+=1){var a=e.eq(i),n=a[0].progress;this.params.flipEffect.limitRotation&&(n=Math.max(Math.min(a[0].progress,1),-1));var r=-180*n,l=0,o=-a[0].swiperSlideOffset,d=0;if(this.isHorizontal()?t&&(r=-r):(d=o,o=0,l=-r,r=0),a[0].style.zIndex=-Math.abs(Math.round(n))+e.length,this.params.flipEffect.slideShadows){var h=this.isHorizontal()?a.find(".swiper-slide-shadow-left"):a.find(".swiper-slide-shadow-top"),p=this.isHorizontal()?a.find(".swiper-slide-shadow-right"):a.find(".swiper-slide-shadow-bottom");0===h.length&&(h=s('<div class="swiper-slide-shadow-'+(this.isHorizontal()?"left":"top")+'"></div>'),a.append(h)),0===p.length&&(p=s('<div class="swiper-slide-shadow-'+(this.isHorizontal()?"right":"bottom")+'"></div>'),a.append(p)),h.length&&(h[0].style.opacity=Math.max(-n,0)),p.length&&(p[0].style.opacity=Math.max(n,0))}a.transform("translate3d("+o+"px, "+d+"px, 0px) rotateX("+l+"deg) rotateY("+r+"deg)")}},setTransition:function(e){var t=this,i=t.slides,s=t.activeIndex,a=t.$wrapperEl;if(i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),t.params.virtualTranslate&&0!==e){var n=!1;i.eq(s).transitionEnd((function(){if(!n&&t&&!t.destroyed){n=!0,t.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],i=0;i<e.length;i+=1)a.trigger(e[i])}}))}}},re={init:function(){var e=this.params.thumbs,t=this.constructor;e.swiper instanceof t?(this.thumbs.swiper=e.swiper,r.extend(this.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),r.extend(this.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1})):r.isObject(e.swiper)&&(this.thumbs.swiper=new t(r.extend({},e.swiper,{watchSlidesVisibility:!0,watchSlidesProgress:!0,slideToClickedSlide:!1})),this.thumbs.swiperCreated=!0),this.thumbs.swiper.$el.addClass(this.params.thumbs.thumbsContainerClass),this.thumbs.swiper.on("tap",this.thumbs.onThumbClick)},onThumbClick:function(){var e=this.thumbs.swiper;if(e){var t=e.clickedIndex,i=e.clickedSlide;if(!(i&&s(i).hasClass(this.params.thumbs.slideThumbActiveClass)||null==t)){var a;if(a=e.params.loop?parseInt(s(e.clickedSlide).attr("data-swiper-slide-index"),10):t,this.params.loop){var n=this.activeIndex;this.slides.eq(n).hasClass(this.params.slideDuplicateClass)&&(this.loopFix(),this._clientLeft=this.$wrapperEl[0].clientLeft,n=this.activeIndex);var r=this.slides.eq(n).prevAll('[data-swiper-slide-index="'+a+'"]').eq(0).index(),l=this.slides.eq(n).nextAll('[data-swiper-slide-index="'+a+'"]').eq(0).index();a=void 0===r?l:void 0===l?r:l-n<n-r?l:r}this.slideTo(a)}}},update:function(e){var t=this.thumbs.swiper;if(t){var i="auto"===t.params.slidesPerView?t.slidesPerViewDynamic():t.params.slidesPerView;if(this.realIndex!==t.realIndex){var s,a=t.activeIndex;if(t.params.loop){t.slides.eq(a).hasClass(t.params.slideDuplicateClass)&&(t.loopFix(),t._clientLeft=t.$wrapperEl[0].clientLeft,a=t.activeIndex);var n=t.slides.eq(a).prevAll('[data-swiper-slide-index="'+this.realIndex+'"]').eq(0).index(),r=t.slides.eq(a).nextAll('[data-swiper-slide-index="'+this.realIndex+'"]').eq(0).index();s=void 0===n?r:void 0===r?n:r-a==a-n?a:r-a<a-n?r:n}else s=this.realIndex;t.visibleSlidesIndexes&&t.visibleSlidesIndexes.indexOf(s)<0&&(t.params.centeredSlides?s=s>a?s-Math.floor(i/2)+1:s+Math.floor(i/2)-1:s>a&&(s=s-i+1),t.slideTo(s,e?0:void 0))}var l=1,o=this.params.thumbs.slideThumbActiveClass;if(this.params.slidesPerView>1&&!this.params.centeredSlides&&(l=this.params.slidesPerView),this.params.thumbs.multipleActiveThumbs||(l=1),l=Math.floor(l),t.slides.removeClass(o),t.params.loop||t.params.virtual&&t.params.virtual.enabled)for(var d=0;d<l;d+=1)t.$wrapperEl.children('[data-swiper-slide-index="'+(this.realIndex+d)+'"]').addClass(o);else for(var h=0;h<l;h+=1)t.slides.eq(this.realIndex+h).addClass(o)}}},le=[W,X,U,_,{name:"observer",params:{observer:!1,observeParents:!1,observeSlideChildren:!1},create:function(){r.extend(this,{observer:{init:K.init.bind(this),attach:K.attach.bind(this),destroy:K.destroy.bind(this),observers:[]}})},on:{init:function(){this.observer.init()},destroy:function(){this.observer.destroy()}}},{name:"virtual",params:{virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,addSlidesBefore:0,addSlidesAfter:0}},create:function(){r.extend(this,{virtual:{update:Q.update.bind(this),appendSlide:Q.appendSlide.bind(this),prependSlide:Q.prependSlide.bind(this),removeSlide:Q.removeSlide.bind(this),removeAllSlides:Q.removeAllSlides.bind(this),renderSlide:Q.renderSlide.bind(this),slides:this.params.virtual.slides,cache:{}}})},on:{beforeInit:function(){if(this.params.virtual.enabled){this.classNames.push(this.params.containerModifierClass+"virtual");var e={watchSlidesProgress:!0};r.extend(this.params,e),r.extend(this.originalParams,e),this.params.initialSlide||this.virtual.update()}},setTranslate:function(){this.params.virtual.enabled&&this.virtual.update()}}},{name:"navigation",params:{navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock"}},create:function(){r.extend(this,{navigation:{init:J.init.bind(this),update:J.update.bind(this),destroy:J.destroy.bind(this),onNextClick:J.onNextClick.bind(this),onPrevClick:J.onPrevClick.bind(this)}})},on:{init:function(){this.navigation.init(),this.navigation.update()},toEdge:function(){this.navigation.update()},fromEdge:function(){this.navigation.update()},destroy:function(){this.navigation.destroy()},click:function(e){var t,i=this.navigation,a=i.$nextEl,n=i.$prevEl;!this.params.navigation.hideOnClick||s(e.target).is(n)||s(e.target).is(a)||(a?t=a.hasClass(this.params.navigation.hiddenClass):n&&(t=n.hasClass(this.params.navigation.hiddenClass)),!0===t?this.emit("navigationShow",this):this.emit("navigationHide",this),a&&a.toggleClass(this.params.navigation.hiddenClass),n&&n.toggleClass(this.params.navigation.hiddenClass))}}},{name:"pagination",params:{pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:function(e){return e},formatFractionTotal:function(e){return e},bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",modifierClass:"swiper-pagination-",currentClass:"swiper-pagination-current",totalClass:"swiper-pagination-total",hiddenClass:"swiper-pagination-hidden",progressbarFillClass:"swiper-pagination-progressbar-fill",progressbarOppositeClass:"swiper-pagination-progressbar-opposite",clickableClass:"swiper-pagination-clickable",lockClass:"swiper-pagination-lock"}},create:function(){r.extend(this,{pagination:{init:Z.init.bind(this),render:Z.render.bind(this),update:Z.update.bind(this),destroy:Z.destroy.bind(this),dynamicBulletIndex:0}})},on:{init:function(){this.pagination.init(),this.pagination.render(),this.pagination.update()},activeIndexChange:function(){this.params.loop?this.pagination.update():void 0===this.snapIndex&&this.pagination.update()},snapIndexChange:function(){this.params.loop||this.pagination.update()},slidesLengthChange:function(){this.params.loop&&(this.pagination.render(),this.pagination.update())},snapGridLengthChange:function(){this.params.loop||(this.pagination.render(),this.pagination.update())},destroy:function(){this.pagination.destroy()},click:function(e){this.params.pagination.el&&this.params.pagination.hideOnClick&&this.pagination.$el.length>0&&!s(e.target).hasClass(this.params.pagination.bulletClass)&&(!0===this.pagination.$el.hasClass(this.params.pagination.hiddenClass)?this.emit("paginationShow",this):this.emit("paginationHide",this),this.pagination.$el.toggleClass(this.params.pagination.hiddenClass))}}},{name:"lazy",params:{lazy:{enabled:!1,loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"}},create:function(){r.extend(this,{lazy:{initialImageLoaded:!1,load:ee.load.bind(this),loadInSlide:ee.loadInSlide.bind(this)}})},on:{beforeInit:function(){this.params.lazy.enabled&&this.params.preloadImages&&(this.params.preloadImages=!1)},init:function(){this.params.lazy.enabled&&!this.params.loop&&0===this.params.initialSlide&&this.lazy.load()},scroll:function(){this.params.freeMode&&!this.params.freeModeSticky&&this.lazy.load()},resize:function(){this.params.lazy.enabled&&this.lazy.load()},scrollbarDragMove:function(){this.params.lazy.enabled&&this.lazy.load()},transitionStart:function(){this.params.lazy.enabled&&(this.params.lazy.loadOnTransitionStart||!this.params.lazy.loadOnTransitionStart&&!this.lazy.initialImageLoaded)&&this.lazy.load()},transitionEnd:function(){this.params.lazy.enabled&&!this.params.lazy.loadOnTransitionStart&&this.lazy.load()},slideChange:function(){this.params.lazy.enabled&&this.params.cssMode&&this.lazy.load()}}},{name:"controller",params:{controller:{control:void 0,inverse:!1,by:"slide"}},create:function(){r.extend(this,{controller:{control:this.params.controller.control,getInterpolateFunction:te.getInterpolateFunction.bind(this),setTranslate:te.setTranslate.bind(this),setTransition:te.setTransition.bind(this)}})},on:{update:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},resize:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},observerUpdate:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},setTranslate:function(e,t){this.controller.control&&this.controller.setTranslate(e,t)},setTransition:function(e,t){this.controller.control&&this.controller.setTransition(e,t)}}},{name:"a11y",params:{a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}"}},create:function(){var e=this;r.extend(e,{a11y:{liveRegion:s('<span class="'+e.params.a11y.notificationClass+'" aria-live="assertive" aria-atomic="true"></span>')}}),Object.keys(ie).forEach((function(t){e.a11y[t]=ie[t].bind(e)}))},on:{init:function(){this.params.a11y.enabled&&(this.a11y.init(),this.a11y.updateNavigation())},toEdge:function(){this.params.a11y.enabled&&this.a11y.updateNavigation()},fromEdge:function(){this.params.a11y.enabled&&this.a11y.updateNavigation()},paginationUpdate:function(){this.params.a11y.enabled&&this.a11y.updatePagination()},destroy:function(){this.params.a11y.enabled&&this.a11y.destroy()}}},{name:"autoplay",params:{autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1}},create:function(){var e=this;r.extend(e,{autoplay:{running:!1,paused:!1,run:se.run.bind(e),start:se.start.bind(e),stop:se.stop.bind(e),pause:se.pause.bind(e),onVisibilityChange:function(){"hidden"===document.visibilityState&&e.autoplay.running&&e.autoplay.pause(),"visible"===document.visibilityState&&e.autoplay.paused&&(e.autoplay.run(),e.autoplay.paused=!1)},onTransitionEnd:function(t){e&&!e.destroyed&&e.$wrapperEl&&t.target===this&&(e.$wrapperEl[0].removeEventListener("transitionend",e.autoplay.onTransitionEnd),e.$wrapperEl[0].removeEventListener("webkitTransitionEnd",e.autoplay.onTransitionEnd),e.autoplay.paused=!1,e.autoplay.running?e.autoplay.run():e.autoplay.stop())}}})},on:{init:function(){this.params.autoplay.enabled&&(this.autoplay.start(),document.addEventListener("visibilitychange",this.autoplay.onVisibilityChange))},beforeTransitionStart:function(e,t){this.autoplay.running&&(t||!this.params.autoplay.disableOnInteraction?this.autoplay.pause(e):this.autoplay.stop())},sliderFirstMove:function(){this.autoplay.running&&(this.params.autoplay.disableOnInteraction?this.autoplay.stop():this.autoplay.pause())},touchEnd:function(){this.params.cssMode&&this.autoplay.paused&&!this.params.autoplay.disableOnInteraction&&this.autoplay.run()},destroy:function(){this.autoplay.running&&this.autoplay.stop(),document.removeEventListener("visibilitychange",this.autoplay.onVisibilityChange)}}},{name:"effect-fade",params:{fadeEffect:{crossFade:!1}},create:function(){r.extend(this,{fadeEffect:{setTranslate:ae.setTranslate.bind(this),setTransition:ae.setTransition.bind(this)}})},on:{beforeInit:function(){if("fade"===this.params.effect){this.classNames.push(this.params.containerModifierClass+"fade");var e={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};r.extend(this.params,e),r.extend(this.originalParams,e)}},setTranslate:function(){"fade"===this.params.effect&&this.fadeEffect.setTranslate()},setTransition:function(e){"fade"===this.params.effect&&this.fadeEffect.setTransition(e)}}},{name:"effect-flip",params:{flipEffect:{slideShadows:!0,limitRotation:!0}},create:function(){r.extend(this,{flipEffect:{setTranslate:ne.setTranslate.bind(this),setTransition:ne.setTransition.bind(this)}})},on:{beforeInit:function(){if("flip"===this.params.effect){this.classNames.push(this.params.containerModifierClass+"flip"),this.classNames.push(this.params.containerModifierClass+"3d");var e={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};r.extend(this.params,e),r.extend(this.originalParams,e)}},setTranslate:function(){"flip"===this.params.effect&&this.flipEffect.setTranslate()},setTransition:function(e){"flip"===this.params.effect&&this.flipEffect.setTransition(e)}}},{name:"thumbs",params:{thumbs:{multipleActiveThumbs:!0,swiper:null,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-container-thumbs"}},create:function(){r.extend(this,{thumbs:{swiper:null,init:re.init.bind(this),update:re.update.bind(this),onThumbClick:re.onThumbClick.bind(this)}})},on:{beforeInit:function(){var e=this.params.thumbs;e&&e.swiper&&(this.thumbs.init(),this.thumbs.update(!0))},slideChange:function(){this.thumbs.swiper&&this.thumbs.update()},update:function(){this.thumbs.swiper&&this.thumbs.update()},resize:function(){this.thumbs.swiper&&this.thumbs.update()},observerUpdate:function(){this.thumbs.swiper&&this.thumbs.update()},setTransition:function(e){var t=this.thumbs.swiper;t&&t.setTransition(e)},beforeDestroy:function(){var e=this.thumbs.swiper;e&&this.thumbs.swiperCreated&&e&&e.destroy()}}}];return void 0===j.use&&(j.use=j.Class.use,j.installModule=j.Class.installModule),j.use(le),j}));

;
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function () {
    var typesToPatch = ['DocumentType', 'Element', 'CharacterData'],
        remove = function remove() {
            // The check here seems pointless, since we're not adding this
            // method to the prototypes of any any elements that CAN be the
            // root of the DOM. However, it's required by spec (see point 1 of
            // https://dom.spec.whatwg.org/#dom-childnode-remove) and would
            // theoretically make a difference if somebody .apply()ed this
            // method to the DOM's root node, so let's roll with it.
            if (this.parentNode != null) {
                this.parentNode.removeChild(this);
            }
        };

    for (var i = 0; i < typesToPatch.length; i++) {
        var type = typesToPatch[i];
        if (window[type] && !window[type].prototype.remove) {
            window[type].prototype.remove = remove;
        }
    }
})();
(function (root) {

    // Store setTimeout reference so promise-polyfill will be unaffected by
    // other code modifying setTimeout (like sinon.useFakeTimers())
    var setTimeoutFunc = setTimeout;

    function noop() { }

    // Polyfill for Function.prototype.bind
    function bind(fn, thisArg) {
        return function () {
            fn.apply(thisArg, arguments);
        };
    }

    function Promise(fn) {
        if (_typeof(this) !== 'object') throw new TypeError('Promises must be constructed via new');
        if (typeof fn !== 'function') throw new TypeError('not a function');
        this._state = 0;
        this._handled = false;
        this._value = undefined;
        this._deferreds = [];

        doResolve(fn, this);
    }

    function handle(self, deferred) {
        while (self._state === 3) {
            self = self._value;
        }
        if (self._state === 0) {
            self._deferreds.push(deferred);
            return;
        }
        self._handled = true;
        Promise._immediateFn(function () {
            var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
            if (cb === null) {
                (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
                return;
            }
            var ret;
            try {
                ret = cb(self._value);
            } catch (e) {
                reject(deferred.promise, e);
                return;
            }
            resolve(deferred.promise, ret);
        });
    }

    function resolve(self, newValue) {
        try {
            // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
            if (newValue === self) throw new TypeError('A promise cannot be resolved with itself.');
            if (newValue && ((typeof newValue === 'undefined' ? 'undefined' : _typeof(newValue)) === 'object' || typeof newValue === 'function')) {
                var then = newValue.then;
                if (newValue instanceof Promise) {
                    self._state = 3;
                    self._value = newValue;
                    finale(self);
                    return;
                } else if (typeof then === 'function') {
                    doResolve(bind(then, newValue), self);
                    return;
                }
            }
            self._state = 1;
            self._value = newValue;
            finale(self);
        } catch (e) {
            reject(self, e);
        }
    }

    function reject(self, newValue) {
        self._state = 2;
        self._value = newValue;
        finale(self);
    }

    function finale(self) {
        if (self._state === 2 && self._deferreds.length === 0) {
            Promise._immediateFn(function () {
                if (!self._handled) {
                    Promise._unhandledRejectionFn(self._value);
                }
            });
        }

        for (var i = 0, len = self._deferreds.length; i < len; i++) {
            handle(self, self._deferreds[i]);
        }
        self._deferreds = null;
    }

    function Handler(onFulfilled, onRejected, promise) {
        this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
        this.onRejected = typeof onRejected === 'function' ? onRejected : null;
        this.promise = promise;
    }

    /**
     * Take a potentially misbehaving resolver function and make sure
     * onFulfilled and onRejected are only called once.
     *
     * Makes no guarantees about asynchrony.
     */
    function doResolve(fn, self) {
        var done = false;
        try {
            fn(function (value) {
                if (done) return;
                done = true;
                resolve(self, value);
            }, function (reason) {
                if (done) return;
                done = true;
                reject(self, reason);
            });
        } catch (ex) {
            if (done) return;
            done = true;
            reject(self, ex);
        }
    }

    Promise.prototype['catch'] = function (onRejected) {
        return this.then(null, onRejected);
    };

    Promise.prototype.then = function (onFulfilled, onRejected) {
        var prom = new this.constructor(noop);

        handle(this, new Handler(onFulfilled, onRejected, prom));
        return prom;
    };

    Promise.all = function (arr) {
        var args = Array.prototype.slice.call(arr);

        return new Promise(function (resolve, reject) {
            if (args.length === 0) return resolve([]);
            var remaining = args.length;

            function res(i, val) {
                try {
                    if (val && ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' || typeof val === 'function')) {
                        var then = val.then;
                        if (typeof then === 'function') {
                            then.call(val, function (val) {
                                res(i, val);
                            }, reject);
                            return;
                        }
                    }
                    args[i] = val;
                    if (--remaining === 0) {
                        resolve(args);
                    }
                } catch (ex) {
                    reject(ex);
                }
            }

            for (var i = 0; i < args.length; i++) {
                res(i, args[i]);
            }
        });
    };

    Promise.resolve = function (value) {
        if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.constructor === Promise) {
            return value;
        }

        return new Promise(function (resolve) {
            resolve(value);
        });
    };

    Promise.reject = function (value) {
        return new Promise(function (resolve, reject) {
            reject(value);
        });
    };

    Promise.race = function (values) {
        return new Promise(function (resolve, reject) {
            for (var i = 0, len = values.length; i < len; i++) {
                values[i].then(resolve, reject);
            }
        });
    };

    // Use polyfill for setImmediate for performance gains
    Promise._immediateFn = typeof setImmediate === 'function' && function (fn) {
        setImmediate(fn);
    } || function (fn) {
        setTimeoutFunc(fn, 0);
    };

    Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
        if (typeof console !== 'undefined' && console) {
            console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
        }
    };

    /**
     * Set the immediate function to execute callbacks
     * @param fn {function} Function to execute
     * @deprecated
     */
    Promise._setImmediateFn = function _setImmediateFn(fn) {
        Promise._immediateFn = fn;
    };

    /**
     * Change the function to execute on unhandled rejection
     * @param {function} fn Function to execute on unhandled rejection
     * @deprecated
     */
    Promise._setUnhandledRejectionFn = function _setUnhandledRejectionFn(fn) {
        Promise._unhandledRejectionFn = fn;
    };

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Promise;
    } else if (!root.Promise) {
        root.Promise = Promise;
    }
})(window);

/* global Promise */
(function (window) {
    'use strict';

    if (!window.Promise) {
        window.Promise = Promise;
    }

    var RULE_REQUIRED = 'required',
        RULE_EMAIL = 'email',
        RULE_MINLENGTH = 'minLength',
        RULE_MAXLENGTH = 'maxLength',
        RULE_PASSWORD = 'password',
        RULE_ZIP = 'zip',
        RULE_PHONE = 'phone',
        RULE_REMOTE = 'remote',
        RULE_STRENGTH = 'strength',
        RULE_FUNCTION = 'function';

    var formatParams = function formatParams(params, method) {
        if (typeof params === 'string') {
            return params;
        }

        var letter = method.toLowerCase() === 'post' ? '' : '?';
        if (Array.isArray(params)) {
            return letter + params.map(function (obj) {
                return obj.name + '=' + obj.value;
            }).join('&');
        }
        return letter + Object.keys(params).map(function (key) {
            return key + '=' + params[key];
        }).join('&');
    };

    var ajax = function ajax(options) {
        var url = options.url,
            method = options.method,
            data = options.data,
            debug = options.debug,
            callback = options.callback,
            error = options.error;

        if (debug) {
            callback('test');
            return;
        }

        var async = options.async === false ? false : true;
        var xhr = new XMLHttpRequest();
        var params = formatParams(data, 'get');
        var body = null;

        if (method.toLowerCase() === 'post') {
            body = formatParams(data, 'post');
            params = '';
        }

        xhr.open(method, url + params, async);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function () {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    callback(this.responseText);
                } else {
                    error && error(this.responseText);
                }
            }
        };
        xhr.send(body);
    };

    var JustValidate = function JustValidate(selector, options) {
        this.options = options || {};
        this.rules = this.options.rules || {};
        this.messages = this.options.messages || undefined;
        this.colorWrong = this.options.colorWrong || '#B81111';
        this.result = {};
        this.elements = [];
        this.tooltip = this.options.tooltip || {};
        this.tooltipFadeOutTime = this.tooltip.fadeOutTime || 5000;
        this.tooltipFadeOutClass = this.tooltip.fadeOutClass || 'just-validate-tooltip-hide';
        this.tooltipSelectorWrap = document.querySelectorAll(this.tooltip.selectorWrap).length ? document.querySelectorAll(this.tooltip.selectorWrap) : document.querySelectorAll('.just-validate-tooltip-container');
        this.bindHandlerKeyup = this.handlerKeyup.bind(this);
        this.submitHandler = this.options.submitHandler || undefined;
        this.invalidFormCallback = this.options.invalidFormCallback || undefined;
        this.promisesRemote = [];
        this.isValidationSuccess = false;
        this.focusWrongField = this.options.focusWrongField || false;
        this.REGEXP = {
            // eslint-disable-next-line max-len
            email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            zip: /^\d{5}(-\d{4})?$/,
            phone: /^([0-9]( |-)?)?(\(?[0-9]{3}\)?|[0-9]{3})( |-)?([0-9]{3}( |-)?[0-9]{4}|[a-zA-Z0-9]{7})$/,
            password: /[^\w\d]*(([0-9]+.*[A-Za-z]+.*)|[A-Za-z]+.*([0-9]+.*))/,
            strengthPass: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]/
        };
        this.DEFAULT_REMOTE_ERROR = 'Error';
        this.state = {
            tooltipsTimer: null
        };

        this.setForm(document.querySelector(selector));
    };

    JustValidate.prototype = {
        defaultRules: {
            email: {
                required: true,
                email: true
            },
            name: {
                required: true,
                minLength: 3,
                maxLength: 15
            },
            text: {
                required: true,
                maxLength: 300,
                minLength: 5
            },
            password: {
                required: true,
                password: true,
                minLength: 4,
                maxLength: 8
            },
            zip: {
                required: true,
                zip: true
            },
            phone: {
                phone: true
            }
        },

        defaultMessages: {
            required: 'The field is required',
            email: 'Please, type a valid email',
            maxLength: 'The field must contain a maximum of :value characters',
            minLength: 'The field must contain a minimum of :value characters',
            password: 'Password is not valid',
            remote: 'Email already exists',
            strength: 'Password must contents at least one uppercase letter, one lowercase letter and one number',
            function: 'Function returned false'
        },

        /**
         * Keyup handler
         * @param ev
         */
        handlerKeyup: function handlerKeyup(ev) {
            var elem = ev.target,
                item = {
                    name: elem.getAttribute('data-validate-field'),
                    value: elem.value
                };
            delete this.result[item.name];
            this.validateItem({
                name: item.name,
                value: item.value,
                group: [],
                isKeyupChange: true
            });
            this.renderErrors();
        },

        setterEventListener: function setterEventListener(item, event, handler, type) {
            if (event === 'keyup') {
                handler = this.bindHandlerKeyup;
            }
            switch (type) {
                case 'add':
                    {
                        item.addEventListener(event, handler);
                        break;
                    }
                case 'remove':
                    {
                        item.removeEventListener(event, handler);
                        break;
                    }
            }
        },

        getElementsRealValue: function getElementsRealValue() {
            var $elems = this.$form.querySelectorAll('*'),
                name = void 0,
                result = {};
            for (var i = 0, len = $elems.length; i < len; ++i) {
                name = $elems[i].getAttribute('name');
                if (name) {
                    if ($elems[i].type === 'checkbox') {
                        result[name] = $elems[i].checked;
                        continue;
                    }
                    result[name] = $elems[i].value;
                }
            }
            return result;
        },

        validationFailed: function validationFailed() {
            if (this.invalidFormCallback) {
                this.invalidFormCallback(this.result);
            }

            var $firstErrorField = document.querySelector('.js-validate-error-field');

            if (this.focusWrongField && $firstErrorField && $firstErrorField.focus) {
                $firstErrorField.focus();
            }
        },

        validationSuccess: function validationSuccess() {
            if (Object.keys(this.result).length === 0) {
                this.isValidationSuccess = false;
                if (this.submitHandler) {
                    var realValues = this.getElementsRealValue();
                    this.submitHandler(this.$form, realValues, ajax);
                    return;
                }

                this.$form.submit();
            }
        },

        setForm: function setForm(form) {
            var _this = this;

            this.$form = form;
            this.$form.setAttribute('novalidate', 'novalidate');
            this.$form.addEventListener('submit', function (ev) {
                ev.preventDefault();
                _this.result = [];
                _this.getElements();

                if (!_this.promisesRemote.length) {
                    if (_this.isValidationSuccess) {
                        _this.validationSuccess();
                    } else {
                        _this.validationFailed();
                    }
                    return;
                }

                Promise.all(_this.promisesRemote).then(function () {
                    _this.promisesRemote = [];

                    if (_this.isValidationSuccess) {
                        _this.validationSuccess();
                    } else {
                        _this.validationFailed();
                    }
                });
            });
        },

        isEmail: function isEmail(email) {
            return this.REGEXP.email.test(email);
        },

        isZip: function isZip(zip) {
            return this.REGEXP.zip.test(zip);
        },

        isPhone: function isPhone(phone) {
            return this.REGEXP.phone.test(phone);
        },

        isPassword: function isPassword(password) {
            return this.REGEXP.password.test(password);
        },

        isEmpty: function isEmpty(val) {
            var newVal = val;
            if (val.trim) {
                newVal = val.trim();
            }

            return !newVal;
        },

        checkLengthMax: function checkLengthMax(text, max) {
            return text.length <= max;
        },

        checkLengthMin: function checkLengthMin(text, min) {
            return text.length >= min;
        },

        checkStrengthPass: function checkStrengthPass(password) {
            return this.REGEXP.strengthPass.test(password);
        },

        getElements: function getElements() {
            var _this2 = this;

            var elems = this.$form.querySelectorAll('[data-validate-field]');
            this.elements = [];

            var _loop = function _loop(i, len) {
                var item = elems[i],
                    name = item.getAttribute('data-validate-field'),
                    value = item.value,
                    isElemInGroup = false,
                    group = [];

                if (item.type === 'checkbox') {
                    value = item.checked || '';
                    item.addEventListener('change', function (ev) {
                        var elem = ev.target,
                            item = {
                                name: elem.getAttribute('data-validate-field'),
                                value: elem.checked
                            };

                        delete _this2.result[item.name];
                        _this2.validateItem({
                            name: item.name,
                            value: item.value,
                            group: []
                        });
                        _this2.renderErrors();
                    });
                }

                if (item.type === 'radio') {
                    var findElem = _this2.elements.filter(function (item) {
                        if (item.name === name) {
                            return item;
                        }
                    })[0];

                    if (findElem) {
                        findElem.group.push(item.checked);
                        isElemInGroup = true;
                    } else {
                        group.push(item.checked);
                    }

                    item.addEventListener('change', function (ev) {
                        var elem = ev.target,
                            item = {
                                name: elem.getAttribute('data-validate-field'),
                                value: elem.checked
                            };

                        delete _this2.result[item.name];
                        _this2.validateItem({
                            name: item.name,
                            value: item.value,
                            group: []
                        });
                        _this2.renderErrors();
                    });
                }

                _this2.setterEventListener(item, 'keyup', _this2.handlerKeyup, 'add');

                if (!isElemInGroup) {
                    _this2.elements.push({
                        name: name,
                        value: value,
                        group: group
                    });
                }
            };

            for (var i = 0, len = elems.length; i < len; ++i) {
                _loop(i, len);
            }

            this.validateElements();
        },

        /**
         * Validate Required field
         * @param {string} value Value for validate
         * @returns {boolean} True if validate is OK
         */
        validateRequired: function validateRequired(value) {
            return !this.isEmpty(value);
        },

        /**
         * Validate Email field
         * @param {string} value Value for validate
         * @returns {boolean} True if validate is OK
         */
        validateEmail: function validateEmail(value) {
            return this.isEmail(value);
        },

        /**
         * Validate Phone field
         * @param {string} value Value for validate
         * @returns {boolean} True if validate is OK
         */
        validatePhone: function validatePhone(value) {
            return this.isPhone(value);
        },

        /**
         * Validate field for Min Length
         * @param {string} value Value for validate
         * @param {integer} min
         * @returns {boolean} True if validate is OK
         */
        validateMinLength: function validateMinLength(value, min) {
            return this.checkLengthMin(value, min);
        },

        /**
         * Validate field for Max Length
         * @param {string} value Value for validate
         * @param {integer} max
         * @returns {boolean} True if validate is OK
         */
        validateMaxLength: function validateMaxLength(value, max) {
            return this.checkLengthMax(value, max);
        },

        /**
         * Validate field for strength password
         * @param {string} password Value for validate
         * @returns {boolean} True if validate is OK
         */
        validateStrengthPass: function validateStrengthPass(password) {
            return this.checkStrengthPass(password);
        },

        /**
         * Validate Password field
         * @param {string} value Value for validate
         * @returns {boolean} True if validate is OK
         */
        validatePassword: function validatePassword(value) {
            return this.isPassword(value);
        },

        /**
         * Validate ZIP field
         * @param {string} value Value for validate
         * @returns {boolean} True if validate is OK
         */
        validateZip: function validateZip(value) {
            return this.isZip(value);
        },

        /**
         * Validate for remote check
         * @param value
         * @param name
         * @param {string} url
         * @param {string} successAnswer
         * @returns {boolean} True if validate is OK
         */
        validateRemote: function validateRemote(_ref) {
            var value = _ref.value,
                name = _ref.name,
                url = _ref.url,
                successAnswer = _ref.successAnswer,
                sendParam = _ref.sendParam,
                method = _ref.method;

            return new Promise(function (resolve) {
                ajax({
                    url: url,
                    method: method,
                    data: _defineProperty({}, sendParam, value),
                    async: true,
                    callback: function callback(data) {
                        if (data.toLowerCase() === successAnswer.toLowerCase()) {
                            resolve('ok');
                        }
                        resolve({
                            type: 'incorrect',
                            name: name
                        });
                    },
                    error: function error() {
                        resolve({
                            type: 'error',
                            name: name
                        });
                    }
                });
            });
        },

        generateMessage: function generateMessage(rule, name, value) {
            var messages = this.messages || this.defaultMessages;
            var customMessage = messages[name] && messages[name][rule] || this.messages && typeof this.messages[name] === 'string' && messages[name] ||
                // (messages[name][rule]) ||
                this.defaultMessages[rule] || this.DEFAULT_REMOTE_ERROR;

            if (value) {
                customMessage = customMessage.replace(':value', value.toString());
            }
            this.result[name] = {
                message: customMessage
            };
        },

        validateElements: function validateElements() {
            var _this3 = this;

            this.lockForm();
            this.elements.forEach(function (item) {
                _this3.validateItem({
                    name: item.name,
                    value: item.value,
                    group: item.group
                });
            });

            if (!this.promisesRemote.length) {
                this.renderErrors();
                return;
            }

            Promise.all(this.promisesRemote).then(function (resp) {
                resp.forEach(function (result) {
                    if (result === 'ok') {
                        _this3.renderErrors();
                        return;
                    }
                    if (result.type === 'error') {
                        alert('Server error occured. Please try later.');
                    }
                    _this3.generateMessage(RULE_REMOTE, result.name);
                    _this3.renderErrors();
                });
            });
        },

        validateItem: function validateItem(_ref2) {
            var _this4 = this;

            var name = _ref2.name,
                group = _ref2.group,
                value = _ref2.value,
                isKeyupChange = _ref2.isKeyupChange;

            var rules = this.rules[name] || this.defaultRules[name] || false;

            if (!rules) {
                return;
            }
            for (var rule in rules) {
                var ruleValue = rules[rule];

                if (rule !== RULE_REQUIRED && rule !== RULE_FUNCTION && value == '') {
                    return;
                }
                switch (rule) {
                    case RULE_FUNCTION:
                        {
                            if (typeof ruleValue !== 'function') {
                                break;
                            }
                            if (ruleValue(name, value)) {
                                break;
                            }
                            this.generateMessage(RULE_FUNCTION, name, ruleValue);
                            return;
                        }
                    case RULE_REQUIRED:
                        {
                            if (!ruleValue) {
                                break;
                            }

                            if (group.length) {
                                var isSuccessValidateGroup = false;

                                // At least one item in group
                                group.forEach(function (item) {
                                    if (_this4.validateRequired(item)) {
                                        isSuccessValidateGroup = true;
                                    }
                                });

                                if (isSuccessValidateGroup) {
                                    break;
                                }
                            } else {
                                if (this.validateRequired(value)) {
                                    break;
                                }
                            }

                            this.generateMessage(RULE_REQUIRED, name);
                            return;
                        }

                    case RULE_EMAIL:
                        {
                            if (!ruleValue) {
                                break;
                            }
                            if (this.validateEmail(value)) {
                                break;
                            }
                            this.generateMessage(RULE_EMAIL, name);
                            return;
                        }

                    case RULE_MINLENGTH:
                        {
                            if (!ruleValue) {
                                break;
                            }
                            if (this.validateMinLength(value, ruleValue)) {
                                break;
                            }
                            this.generateMessage(RULE_MINLENGTH, name, ruleValue);
                            return;
                        }

                    case RULE_MAXLENGTH:
                        {
                            if (!ruleValue) {
                                break;
                            }
                            if (this.validateMaxLength(value, ruleValue)) {
                                break;
                            }
                            this.generateMessage(RULE_MAXLENGTH, name, ruleValue);
                            return;
                        }

                    case RULE_PHONE:
                        {
                            if (!ruleValue) {
                                break;
                            }
                            if (this.validatePhone(value)) {
                                break;
                            }
                            this.generateMessage(RULE_PHONE, name);
                            return;
                        }

                    case RULE_PASSWORD:
                        {
                            if (!ruleValue) {
                                break;
                            }
                            if (this.validatePassword(value)) {
                                break;
                            }
                            this.generateMessage(RULE_PASSWORD, name);
                            return;
                        }

                    case RULE_STRENGTH:
                        {
                            if (!ruleValue || (typeof ruleValue === 'undefined' ? 'undefined' : _typeof(ruleValue)) !== 'object') {
                                break;
                            }

                            if (ruleValue.default && this.validateStrengthPass(value)) {
                                break;
                            }

                            if (ruleValue.custom) {
                                var regexp = void 0;

                                try {
                                    regexp = new RegExp(ruleValue.custom);
                                } catch (e) {
                                    regexp = this.REGEXP.strengthPass;

                                    // eslint-disable-next-line no-console
                                    console.error('Custom regexp for strength rule is not valid. Default regexp was used.');
                                }

                                if (regexp.test(value)) {
                                    break;
                                }
                            }
                            this.generateMessage(RULE_STRENGTH, name);
                            return;
                        }

                    case RULE_ZIP:
                        {
                            if (!ruleValue) {
                                break;
                            }
                            if (this.validateZip(value)) {
                                break;
                            }
                            this.generateMessage(RULE_ZIP, name);
                            return;
                        }

                    case RULE_REMOTE:
                        {
                            if (isKeyupChange) {
                                break;
                            }

                            if (!ruleValue) {
                                break;
                            }

                            var url = ruleValue.url,
                                successAnswer = ruleValue.successAnswer,
                                method = ruleValue.method,
                                sendParam = ruleValue.sendParam;

                            var $elem = this.$form.querySelector('input[data-validate-field="' + name + '"]');
                            this.setterEventListener($elem, 'keyup', this.handlerKeyup, 'remove');

                            this.promisesRemote.push(this.validateRemote({
                                name: name,
                                value: value,
                                url: url,
                                method: method,
                                sendParam: sendParam,
                                successAnswer: successAnswer
                            }));
                            return;
                        }
                }
            }
        },

        clearErrors: function clearErrors() {
            var $elems = document.querySelectorAll('.js-validate-error-label');
            for (var i = 0, len = $elems.length; i < len; ++i) {
                $elems[i].remove();
            }

            $elems = document.querySelectorAll('.js-validate-error-field');
            for (var _i = 0, _len = $elems.length; _i < _len; ++_i) {
                $elems[_i].classList.remove('js-validate-error-field');
                $elems[_i].style.border = '';
                $elems[_i].style.color = '';
            }
        },

        renderErrors: function renderErrors() {
            var _this5 = this;

            this.clearErrors();
            this.unlockForm();

            this.isValidationSuccess = false;
            if (Object.keys(this.result).length === 0) {
                this.isValidationSuccess = true;
                return;
            }

            for (var _item in this.result) {
                var message = this.result[_item].message;
                var $elems = this.$form.querySelectorAll('[data-validate-field="' + _item + '"]');

                var $elem = $elems[$elems.length - 1];

                var div = document.createElement('div');

                div.innerHTML = message;
                div.className = 'js-validate-error-label';
                div.setAttribute('style', 'color: ' + this.colorWrong);
                $elem.style.border = '1px solid ' + this.colorWrong;
                $elem.style.color = '' + this.colorWrong;
                $elem.classList.add('js-validate-error-field');

                if ($elem.type === 'checkbox' || $elem.type === 'radio') {
                    var $label = document.querySelector('label[for="' + $elem.getAttribute('id') + '"]');

                    if ($elem.parentNode.tagName.toLowerCase() === 'label') {
                        $elem.parentNode.parentNode.insertBefore(div, null);
                    } else if ($label) {
                        $label.parentNode.insertBefore(div, $label.nextSibling);
                    } else {
                        $elem.parentNode.insertBefore(div, $elem.nextSibling);
                    }
                } else {
                    $elem.parentNode.insertBefore(div, $elem.nextSibling);
                }
            }

            if (!this.tooltipSelectorWrap.length) {
                return;
            }

            this.state.tooltipsTimer = setTimeout(function () {
                _this5.hideTooltips();
            }, this.tooltipFadeOutTime);
        },

        hideTooltips: function hideTooltips() {
            var _this6 = this;

            var $elemsErrorLabel = document.querySelectorAll('.js-validate-error-label');

            $elemsErrorLabel.forEach(function (item) {
                item.classList.add(_this6.tooltipFadeOutClass);
            });

            this.state.tooltipsTimer = null;
        },

        lockForm: function lockForm() {
            var $elems = this.$form.querySelectorAll('input, textarea, button, select');
            for (var i = 0, len = $elems.length; i < len; ++i) {
                $elems[i].setAttribute('disabled', 'disabled');
                $elems[i].style.pointerEvents = 'none';
                $elems[i].style.webitFilter = 'grayscale(100%)';
                $elems[i].style.filter = 'grayscale(100%)';
            }
        },

        unlockForm: function unlockForm() {
            var $elems = this.$form.querySelectorAll('input, textarea, button, select');
            for (var i = 0, len = $elems.length; i < len; ++i) {
                $elems[i].removeAttribute('disabled');
                $elems[i].style.pointerEvents = '';
                $elems[i].style.webitFilter = '';
                $elems[i].style.filter = '';
            }
        }
    };

    window.JustValidate = JustValidate;
})(window);
;
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AOS=t():e.AOS=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(1),a=(o(r),n(6)),u=o(a),c=n(7),f=o(c),s=n(8),d=o(s),l=n(9),p=o(l),m=n(10),b=o(m),v=n(11),y=o(v),g=n(14),h=o(g),w=[],k=!1,x={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},j=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(k=!0),k)return w=(0,y.default)(w,x),(0,b.default)(w,x.once),w},O=function(){w=(0,h.default)(),j()},_=function(){w.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})},S=function(e){return e===!0||"mobile"===e&&p.default.mobile()||"phone"===e&&p.default.phone()||"tablet"===e&&p.default.tablet()||"function"==typeof e&&e()===!0},z=function(e){x=i(x,e),w=(0,h.default)();var t=document.all&&!window.atob;return S(x.disable)||t?_():(document.querySelector("body").setAttribute("data-aos-easing",x.easing),document.querySelector("body").setAttribute("data-aos-duration",x.duration),document.querySelector("body").setAttribute("data-aos-delay",x.delay),"DOMContentLoaded"===x.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?j(!0):"load"===x.startEvent?window.addEventListener(x.startEvent,function(){j(!0)}):document.addEventListener(x.startEvent,function(){j(!0)}),window.addEventListener("resize",(0,f.default)(j,x.debounceDelay,!0)),window.addEventListener("orientationchange",(0,f.default)(j,x.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,b.default)(w,x.once)},x.throttleDelay)),x.disableMutationObserver||(0,d.default)("[data-aos]",O),w)};e.exports={init:z,refresh:j,refreshHard:O}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=b,o=v;return b=v=void 0,k=t,g=e.apply(o,n)}function r(e){return k=e,h=setTimeout(s,t),_?o(e):g}function a(e){var n=e-w,o=e-k,i=t-n;return S?j(i,y-o):i}function c(e){var n=e-w,o=e-k;return void 0===w||n>=t||n<0||S&&o>=y}function s(){var e=O();return c(e)?d(e):void(h=setTimeout(s,a(e)))}function d(e){return h=void 0,z&&b?o(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),k=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(O())}function m(){var e=O(),n=c(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(s,t),o(w)}return void 0===h&&(h=setTimeout(s,t)),g}var b,v,y,g,h,w,k=0,_=!1,S=!1,z=!0;if("function"!=typeof e)throw new TypeError(f);return t=u(t)||0,i(n)&&(_=!!n.leading,S="maxWait"in n,y=S?x(u(n.maxWait)||0,t):y,z="trailing"in n?!!n.trailing:z),m.cancel=l,m.flush=p,m}function o(e,t,o){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(f);return i(o)&&(r="leading"in o?!!o.leading:r,a="trailing"in o?!!o.trailing:a),n(e,t,{leading:r,maxWait:t,trailing:a})}function i(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||r(e)&&k.call(e)==d}function u(e){if("number"==typeof e)return e;if(a(e))return s;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=m.test(e);return n||b.test(e)?v(e.slice(2),n?2:8):p.test(e)?s:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f="Expected a function",s=NaN,d="[object Symbol]",l=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,y="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,h=y||g||Function("return this")(),w=Object.prototype,k=w.toString,x=Math.max,j=Math.min,O=function(){return h.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=b,o=v;return b=v=void 0,O=t,g=e.apply(o,n)}function r(e){return O=e,h=setTimeout(s,t),_?i(e):g}function u(e){var n=e-w,o=e-O,i=t-n;return S?x(i,y-o):i}function f(e){var n=e-w,o=e-O;return void 0===w||n>=t||n<0||S&&o>=y}function s(){var e=j();return f(e)?d(e):void(h=setTimeout(s,u(e)))}function d(e){return h=void 0,z&&b?i(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),O=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(j())}function m(){var e=j(),n=f(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(s,t),i(w)}return void 0===h&&(h=setTimeout(s,t)),g}var b,v,y,g,h,w,O=0,_=!1,S=!1,z=!0;if("function"!=typeof e)throw new TypeError(c);return t=a(t)||0,o(n)&&(_=!!n.leading,S="maxWait"in n,y=S?k(a(n.maxWait)||0,t):y,z="trailing"in n?!!n.trailing:z),m.cancel=l,m.flush=p,m}function o(e){var t="undefined"==typeof e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==("undefined"==typeof e?"undefined":u(e))}function r(e){return"symbol"==("undefined"==typeof e?"undefined":u(e))||i(e)&&w.call(e)==s}function a(e){if("number"==typeof e)return e;if(r(e))return f;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=p.test(e);return n||m.test(e)?b(e.slice(2),n?2:8):l.test(e)?f:+e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",f=NaN,s="[object Symbol]",d=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,v="object"==("undefined"==typeof t?"undefined":u(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,g=v||y||Function("return this")(),h=Object.prototype,w=h.toString,k=Math.max,x=Math.min,j=function(){return g.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e){var t=void 0,o=void 0,i=void 0;for(t=0;t<e.length;t+=1){if(o=e[t],o.dataset&&o.dataset.aos)return!0;if(i=o.children&&n(o.children))return!0}return!1}function o(e,t){var n=window.document,o=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,a=new o(i);r=t,a.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function i(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),o=Array.prototype.slice.call(e.removedNodes),i=t.concat(o);if(n(i))return r()})}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){};t.default=o},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,f=function(){function e(){n(this,e)}return i(e,[{key:"phone",value:function(){var e=o();return!(!r.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!u.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new f},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate")},o=function(e,t){var o=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,r){n(e,i+o,t)})};t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(12),r=o(i),a=function(e,t){return e.forEach(function(e,n){e.node.classList.add("aos-init"),e.position=(0,r.default)(e.node,t.offset)}),e};t.default=a},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(13),r=o(i),a=function(e,t){var n=0,o=0,i=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(o=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,r.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+e.offsetHeight;break;case"center-center":n+=i/2+e.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=e.offsetHeight+i;break;case"center-top":n+=e.offsetHeight/2+i}return a.anchorPlacement||a.offset||isNaN(t)||(o=t),n+o};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,function(e){return{node:e}})};t.default=n}])});
;

// include('./vendors/_cookies.js');
// include('./vendors/_fslightbox.js');
// include('./vendors/_wNumb.js');
// include('./vendors/_nouislider.js');
// include('./vendors/_CQuery.js');
// include('./vendors/_underscore.js');
// include('./vendors/_swiper.js');
// include('./vendors/_simpleBar.js');
// include('./vendors/_tippy.js');
// include('./vendors/_OverlayScrollbars.js');
// include('./vendors/_maskedinput.js');
// VENDORS


// MODULES
function getWindowTop(element) {
    return element.getBoundingClientRect().top + window.scrollY;
}

// Return direct childrenby classname
var getChildren = function (elem, selector) {
    return Array.prototype.filter.call(elem.children, function (child) {
        return child.matches(selector);
    });
};

//SlideToggle
let _slideUp = (target, duration = 500) => {
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.height = target.offsetHeight + 'px';
    target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;

    window.setTimeout(() => {
        target.style.display = 'none';
        target.style.removeProperty('height');
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
        target.classList.remove('_slide');
    }, duration);
};

let _slideDown = (target, duration = 500) => {

    target.style.removeProperty('display');
    let display = window.getComputedStyle(target).display;
    if (display === 'none') { display = 'block'; }

    target.style.display = display;
    let height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;

    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + 'ms';
    target.style.height = height + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');

    window.setTimeout(() => {
        target.style.removeProperty('height');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
        target.classList.remove('_slide');
    }, duration);
};

let _slideToggle = (target, duration = 500) => {
    if (!target.classList.contains('_slide')) {
        target.classList.add('_slide');
        if (window.getComputedStyle(target).display === 'none') {
            return _slideDown(target, duration);
        } else {
            return _slideUp(target, duration);
        }
    }
};
//SlideToggle
;
(function () {
	let originalPositions = [];
	let daElements = document.querySelectorAll('[data-da]');
	let daElementsArray = [];
	let daMatchMedia = [];
	//Заполняем массивы
	if (daElements.length > 0) {
		let number = 0;
		for (let index = 0; index < daElements.length; index++) {
			const daElement = daElements[index];
			const daMove = daElement.getAttribute('data-da');
			if (daMove != '') {
				const daArray = daMove.split(',');
				const daPlace = daArray[1] ? daArray[1].trim() : 'last';
				const daBreakpoint = daArray[2] ? daArray[2].trim() : '767';
				const daType = daArray[3] === 'min' ? daArray[3].trim() : 'max';
				const daDestination = document.querySelector('.' + daArray[0].trim());
				if (daArray.length > 0 && daDestination) {
					daElement.setAttribute('data-da-index', number);
					//Заполняем массив первоначальных позиций
					originalPositions[number] = {
						"parent": daElement.parentNode,
						"index": indexInParent(daElement)
					};
					//Заполняем массив элементов
					daElementsArray[number] = {
						"element": daElement,
						"destination": document.querySelector('.' + daArray[0].trim()),
						"place": daPlace,
						"breakpoint": daBreakpoint,
						"type": daType
					};
					number++;
				}
			}
		}
		dynamicAdaptSort(daElementsArray);

		//Создаем события в точке брейкпоинта
		for (let index = 0; index < daElementsArray.length; index++) {
			const el = daElementsArray[index];
			const daBreakpoint = el.breakpoint;
			const daType = el.type;

			daMatchMedia.push(window.matchMedia("(" + daType + "-width: " + daBreakpoint + "px)"));
			daMatchMedia[index].addListener(dynamicAdapt);
		}
	}
	//Основная функция
	function dynamicAdapt(e) {
		for (let index = 0; index < daElementsArray.length; index++) {
			const el = daElementsArray[index];
			const daElement = el.element;
			const daDestination = el.destination;
			const daPlace = el.place;
			const daBreakpoint = el.breakpoint;
			const daClassname = "_dynamic_adapt_" + daBreakpoint;

			if (daMatchMedia[index].matches) {
				//Перебрасываем элементы
				if (!daElement.classList.contains(daClassname)) {
					let actualIndex = indexOfElements(daDestination)[daPlace];
					if (daPlace === 'first') {
						actualIndex = indexOfElements(daDestination)[0];
					} else if (daPlace === 'last') {
						actualIndex = indexOfElements(daDestination)[indexOfElements(daDestination).length];
					}
					daDestination.insertBefore(daElement, daDestination.children[actualIndex]);
					daElement.classList.add(daClassname);
				}
			} else {
				//Возвращаем на место
				if (daElement.classList.contains(daClassname)) {
					dynamicAdaptBack(daElement);
					daElement.classList.remove(daClassname);
				}
			}
		}
		customAdapt();
	}

	//Вызов основной функции
	dynamicAdapt();

	//Функция возврата на место
	function dynamicAdaptBack(el) {
		const daIndex = el.getAttribute('data-da-index');
		const originalPlace = originalPositions[daIndex];
		const parentPlace = originalPlace['parent'];
		const indexPlace = originalPlace['index'];
		const actualIndex = indexOfElements(parentPlace, true)[indexPlace];
		parentPlace.insertBefore(el, parentPlace.children[actualIndex]);
	}
	//Функция получения индекса внутри родителя
	function indexInParent(el) {
		var children = Array.prototype.slice.call(el.parentNode.children);
		return children.indexOf(el);
	}
	//Функция получения массива индексов элементов внутри родителя
	function indexOfElements(parent, back) {
		const children = parent.children;
		const childrenArray = [];
		for (let i = 0; i < children.length; i++) {
			const childrenElement = children[i];
			if (back) {
				childrenArray.push(i);
			} else {
				//Исключая перенесенный элемент
				if (childrenElement.getAttribute('data-da') == null) {
					childrenArray.push(i);
				}
			}
		}
		return childrenArray;
	}
	//Сортировка объекта
	function dynamicAdaptSort(arr) {
		arr.sort(function (a, b) {
			if (a.breakpoint > b.breakpoint) {
				return -1;
			} else {
				return 1;
			}
		});
		arr.sort(function (a, b) {
			if (a.place > b.place) {
				return 1;
			} else {
				return -1;
			}
		});
	}
	//Дополнительные сценарии адаптации
	function customAdapt() {
		//const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	}
}());
;
// testimonials SLIDER
window.addEventListener('load', function () {
    var leadersSlider = new Swiper(".testimonials__slider", {
        waitForTransition: false,
        observer: true,
        observerParents: true,
        observerSlideChildren: true,
        updateOnWindowResize: true,
        watchOverflow: true,
        spaceBetween: 16,
        loop: true,
        speed: 1000,
        slidesPerView: '1',
        grabCursor: true,
        slideToClickedSlide: true,

        watchSlidesVisibility: true,
        slideActiveClass: 'testimonials__item_active',
        slideVisibleClass: 'testimonials__item_visible',
        // calculateHeight: true,

        autoplay: {
            delay: 500000,
            disableOnInteraction: false,
        },

        navigation: {
            nextEl: '.testimonials__btn_next',
            prevEl: '.testimonials__btn_prev',
        },
        pagination: {
            el: '.testimonials__pagination',
        },

        breakpoints: {
            767: {
                spaceBetween: 20,
                slidesPerView: '2',
            },
            1199: {
                spaceBetween: 32,
                slidesPerView: '3',
            },
        },
    });

    leadersSlider.el.addEventListener("mouseenter", function (event) {
        leadersSlider.autoplay.stop();
    }, false);

    leadersSlider.el.addEventListener("mouseleave", function (event) {
        leadersSlider.autoplay.start();
    }, false);
}, false);
// PARTNERS SLIDER
;
let popup_reply = document.querySelector('.popup_reply');
// validate
function validateForms(selector, rules, messages) {
    new window.JustValidate(selector, {
        rules: rules,
        messages: messages,
        submitHandler: function (popup_reply) {
            popup_open('reply');
            // setTimeout(() => {
            //     popup_close();
            // }, 5000);
        }

        // submitHandler: function (form, values, ajax) {
        //     console.log(form);

        //     let formData = new FormData(form);

        //     fetch("mail.php", {
        //         method: "POST",
        //         body: formData
        //     })
        //         .then(function (data) {
        //             console.log(data);
        //             console.log('Отправлено');
        //             form.reset();
        //         });
        // }
    });
}

let form_contacts = document.querySelector('.form_contacts');
let form_consult = document.querySelector('.form_consult');

if (form_contacts) {
    validateForms('.form_contacts',
        {
            name: { required: true, minLength: 2, maxLength: 15 },
            company: { required: true, minLength: 2, },
            tel: { required: true, },
            letter: { required: true, email: true },
        },
        {
            name: {
                required: 'Required field',
                minLength: 'At least 2 symbols'
            },
            company: {
                required: 'Required field',
                minLength: 'At least 2 symbols'
            },
            tel: {
                required: 'Required field',
            },
            letter: {
                required: 'Required field',
                email: 'Enter correct email'
            },
        });
}

if (form_consult) {
    validateForms('.form_consult',
        {
            name: { required: true, minLength: 2, maxLength: 15 },
            tel: { required: true, },
            letter: { required: true, email: true },
        },
        {
            name: {
                required: 'Required field',
                minLength: 'At least 2 symbols'
            },
            tel: {
                required: 'Required field',
            },
            letter: {
                required: 'Required field',
                email: 'Enter correct email'
            },
        });
}
;

// include('./modules/_fls-validate.js');
// include('./modules/_media.js');
// include('./modules/_fetch.js');
// MODULES


// UI
// GOTOP
scrollToElement('.gotop', 'body');
let goTop = document.querySelector('.gotop');

function gotopScroll() {
    let scrollTop = window.scrollY;
    if (goTop) {
        goTop.classList.toggle('gotop_toggle', scrollTop > 0);
    }
}

['scroll', 'load'].forEach(evt =>
    window.addEventListener(evt, () => {
        gotopScroll();
    }, false)
);
// GOTOP
;
function scrollToItem() {
    let scrollBases = document.querySelectorAll('[data-scrollTo]');
    let scrollGap = 0;

    for (let i = 0; i < scrollBases.length; i++) {
        const scrollBase = scrollBases[i];
        if (scrollBase) {

            let target = scrollBase.getAttribute('data-scrollTo');
            let scrollTarget = document.querySelector(target);
            if (scrollBase && scrollBase.hasAttribute('data-scrollTo-gap')) {
                scrollGap = scrollBase.getAttribute('data-scrollTo-gap');
            }
            scrollBase.addEventListener('click', function () {
                window.scrollTo({
                    top: getWindowTop(scrollTarget) - scrollGap,
                    behavior: 'smooth'
                });
            });
        }
    }
}

scrollToItem();

function scrollToElement(scrollName, scrollTarget, scrollGap = 0) {
    let scrollBases = document.querySelectorAll(scrollName);
    let scrollOffset = document.querySelector(scrollTarget);

    if (scrollBases && scrollTarget) {
        for (let i = 0; i < scrollBases.length; i++) {
            let scrollBase = scrollBases[i];

            if (scrollBase) {
                scrollBase.addEventListener('click', function () {
                    window.scrollTo({
                        top: getWindowTop(scrollOffset) + scrollGap,
                        behavior: 'smooth'
                    });
                });
            }
        }
    }
}
;
// RIPPLE
(function (window) {
    'use strict';

    var Waves = Waves || {};
    var $$ = document.querySelectorAll.bind(document);

    // Find exact position of element
    function isWindow(obj) {
        return obj !== null && obj === obj.window;
    }

    function getWindow(elem) {
        return isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
    }

    function offset(elem) {
        var docElem, win,
            box = {
                top: 0,
                left: 0
            },
            doc = elem && elem.ownerDocument;

        docElem = doc.documentElement;

        if (typeof elem.getBoundingClientRect !== typeof undefined) {
            box = elem.getBoundingClientRect();
        }
        win = getWindow(doc);
        return {
            top: box.top + win.pageYOffset - docElem.clientTop,
            left: box.left + win.pageXOffset - docElem.clientLeft
        };
    }

    function convertStyle(obj) {
        var style = '';

        for (var a in obj) {
            if (obj.hasOwnProperty(a)) {
                style += (a + ':' + obj[a] + ';');
            }
        }

        return style;
    }

    var Effect = {

        // Effect delay
        duration: 500,

        show: function (e, element) {

            // Disable right click
            if (e.button === 2) {
                return false;
            }

            var el = element || this;

            // Create ripple
            var ripple = document.createElement('div');
            ripple.className = 'ripple__waves';
            el.appendChild(ripple);

            // Get click coordinate and element witdh
            var pos = offset(el);
            var relativeY = (e.pageY - pos.top);
            var relativeX = (e.pageX - pos.left);
            var scale = 'scale(' + ((el.clientWidth / 100) * 80) + ')';

            // Support for touch devices
            if ('touches' in e) {
                relativeY = (e.touches[0].pageY - pos.top);
                relativeX = (e.touches[0].pageX - pos.left);
            }

            // Attach data to element
            ripple.setAttribute('data-hold', Date.now());
            ripple.setAttribute('data-scale', scale);
            ripple.setAttribute('data-x', relativeX);
            ripple.setAttribute('data-y', relativeY);

            // Set ripple position
            var rippleStyle = {
                'top': relativeY + 'px',
                'left': relativeX + 'px'
            };

            ripple.className = ripple.className + ' waves-notransition';
            ripple.setAttribute('style', convertStyle(rippleStyle));
            ripple.className = ripple.className.replace('waves-notransition', '');

            // Scale the ripple
            rippleStyle['-webkit-transform'] = scale;
            rippleStyle['-moz-transform'] = scale;
            rippleStyle['-ms-transform'] = scale;
            rippleStyle['-o-transform'] = scale;
            rippleStyle.transform = scale;
            rippleStyle.opacity = '1';

            rippleStyle['-webkit-transition-duration'] = Effect.duration + 'ms';
            rippleStyle['-moz-transition-duration'] = Effect.duration + 'ms';
            rippleStyle['-o-transition-duration'] = Effect.duration + 'ms';
            rippleStyle['transition-duration'] = Effect.duration + 'ms';

            rippleStyle['-webkit-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
            rippleStyle['-moz-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
            rippleStyle['-o-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
            rippleStyle['transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';

            ripple.setAttribute('style', convertStyle(rippleStyle));
        },

        hide: function (e) {
            TouchHandler.touchup(e);

            var el = this;
            var width = el.clientWidth * 1.4;

            // Get first ripple
            var ripple = null;
            var ripples = el.getElementsByClassName('ripple__waves');
            if (ripples.length > 0) {
                ripple = ripples[ripples.length - 1];
            } else {
                return false;
            }

            var relativeX = ripple.getAttribute('data-x');
            var relativeY = ripple.getAttribute('data-y');
            var scale = ripple.getAttribute('data-scale');

            // Get delay beetween mousedown and mouse leave
            var diff = Date.now() - Number(ripple.getAttribute('data-hold'));
            var delay = 350 - diff;

            if (delay < 0) {
                delay = 0;
            }

            // Fade out ripple after delay
            setTimeout(function () {
                var style = {
                    'top': relativeY + 'px',
                    'left': relativeX + 'px',
                    'opacity': '0',

                    // Duration
                    '-webkit-transition-duration': Effect.duration + 'ms',
                    '-moz-transition-duration': Effect.duration + 'ms',
                    '-o-transition-duration': Effect.duration + 'ms',
                    'transition-duration': Effect.duration + 'ms',
                    '-webkit-transform': scale,
                    '-moz-transform': scale,
                    '-ms-transform': scale,
                    '-o-transform': scale,
                    'transform': scale,
                };

                ripple.setAttribute('style', convertStyle(style));

                setTimeout(function () {
                    try {
                        el.removeChild(ripple);
                    } catch (e) {
                        return false;
                    }
                }, Effect.duration);
            }, delay);
        },

        // Little hack to make <input> can perform waves effect
        wrapInput: function (elements) {
            for (var a = 0; a < elements.length; a++) {
                var el = elements[a];

                if (el.tagName.toLowerCase() === 'input') {
                    var parent = el.parentNode;

                    // If input already have parent just pass through
                    if (parent.tagName.toLowerCase() === 'i' && parent.className.indexOf('ripple') !== -1) {
                        continue;
                    }

                    // Put element class and style to the specified parent
                    var wrapper = document.createElement('i');
                    wrapper.className = el.className + ' waves-input-wrapper';

                    var elementStyle = el.getAttribute('style');

                    if (!elementStyle) {
                        elementStyle = '';
                    }

                    wrapper.setAttribute('style', elementStyle);

                    el.className = 'waves-button-input';
                    el.removeAttribute('style');

                    // Put element as child
                    parent.replaceChild(wrapper, el);
                    wrapper.appendChild(el);
                }
            }
        }
    };


    /**
     * Disable mousedown event for 500ms during and after touch
     */
    var TouchHandler = {
        /* uses an integer rather than bool so there's no issues with
         * needing to clear timeouts if another touch event occurred
         * within the 500ms. Cannot mouseup between touchstart and
         * touchend, nor in the 500ms after touchend. */
        touches: 0,
        allowEvent: function (e) {
            var allow = true;

            if (e.type === 'touchstart') {
                TouchHandler.touches += 1; //push
            } else if (e.type === 'touchend' || e.type === 'touchcancel') {
                setTimeout(function () {
                    if (TouchHandler.touches > 0) {
                        TouchHandler.touches -= 1; //pop after 500ms
                    }
                }, 500);
            } else if (e.type === 'mousedown' && TouchHandler.touches > 0) {
                allow = false;
            }

            return allow;
        },
        touchup: function (e) {
            TouchHandler.allowEvent(e);
        }
    };


    /**
     * Delegated click handler for .ripple element.
     * returns null when .ripple element not in "click tree"
     */
    function getWavesEffectElement(e) {
        if (TouchHandler.allowEvent(e) === false) {
            return null;
        }

        var element = null;
        var target = e.target || e.srcElement;

        while (target.parentElement !== null) {
            if (!(target instanceof SVGElement) && target.className.indexOf('ripple') !== -1) {
                element = target;
                break;
            } else if (target.classList.contains('ripple')) {
                element = target;
                break;
            }
            target = target.parentElement;
        }

        return element;
    }

    /**
     * Bubble the click and show effect if .ripple elem was found
     */
    function showEffect(e) {
        var element = getWavesEffectElement(e);

        if (element !== null) {
            Effect.show(e, element);

            if ('ontouchstart' in window) {
                element.addEventListener('touchend', Effect.hide, false);
                element.addEventListener('touchcancel', Effect.hide, false);
            }

            element.addEventListener('mouseup', Effect.hide, false);
            element.addEventListener('mouseleave', Effect.hide, false);
        }
    }

    Waves.displayEffect = function (options) {
        options = options || {};

        if ('duration' in options) {
            Effect.duration = options.duration;
        }

        //Wrap input inside <i> tag
        Effect.wrapInput($$('.ripple'));

        if ('ontouchstart' in window) {
            document.body.addEventListener('touchstart', showEffect, false);
        }

        document.body.addEventListener('mousedown', showEffect, false);
    };

    /**
     * Attach Waves to an input element (or any element which doesn't
     * bubble mouseup/mousedown events).
     *   Intended to be used with dynamically loaded forms/inputs, or
     * where the user doesn't want a delegated click handler.
     */
    Waves.attach = function (element) {
        //FUTURE: automatically add waves classes and allow users
        // to specify them with an options param? Eg. light/classic/button
        if (element.tagName.toLowerCase() === 'input') {
            Effect.wrapInput([element]);
            element = element.parentElement;
        }

        if ('ontouchstart' in window) {
            element.addEventListener('touchstart', showEffect, false);
        }

        element.addEventListener('mousedown', showEffect, false);
    };

    window.Waves = Waves;

    document.addEventListener('DOMContentLoaded', function () {
        Waves.displayEffect();
    }, false);

})(window);
// RIPPLE
;
if (document.querySelector('.wrapper')) {
    document.querySelector('.wrapper').classList.add('_loaded');
}

let unlock = true;

//=================
//ActionsOnHash
// if (location.hash) {
//     const hsh = location.hash.replace('#', '');
//     if (document.querySelector('.popup_' + hsh)) {
//         popup_open(hsh);
//     } else if (document.querySelector('div.' + hsh)) {
//         _goto(document.querySelector('.' + hsh), 500, '');
//     }
// }
//=================

//BodyLock
function body_lock(delay) {
    let body = document.querySelector("body");
    if (body.classList.contains('body-toggle')) {
        body_lock_remove(delay);
    } else {
        body_lock_add(delay);
    }
}
function body_lock_remove(delay) {
    let body = document.querySelector("body");
    if (unlock) {
        let lock_padding = document.querySelectorAll("._lp");
        setTimeout(() => {
            for (let index = 0; index < lock_padding.length; index++) {
                const el = lock_padding[index];
                el.style.paddingRight = '0px';
            }
            body.style.paddingRight = '0px';
            body.classList.remove("body-toggle");
        }, delay);

        unlock = false;
        setTimeout(function () {
            unlock = true;
        }, delay);
    }
}
function body_lock_add(delay) {
    let body = document.querySelector("body");
    if (unlock) {
        let lock_padding = document.querySelectorAll("._lp");
        for (let index = 0; index < lock_padding.length; index++) {
            const el = lock_padding[index];
            el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
        }
        body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
        body.classList.add("body-toggle");

        unlock = false;
        setTimeout(function () {
            unlock = true;
        }, delay);
    }
}
//=================

//Popups
let popup_link = document.querySelectorAll('._popup-link');
let popups = document.querySelectorAll('.popup');
if (popup_link) {
    for (let index = 0; index < popup_link.length; index++) {
        const el = popup_link[index];
        el.addEventListener('click', function (e) {
            if (unlock) {
                let item = el.getAttribute('href').replace('#', '');
                let video = el.getAttribute('data-video');
                popup_open(item, video);
            }
            e.preventDefault();
        });
    }
}

for (let index = 0; index < popups.length; index++) {
    const popup = popups[index];
    popup.addEventListener("click", function (e) {
        if (!e.target.closest('.popup__body')) {
            popup_close(e.target.closest('.popup'));
        }
    });
}
function popup_open(item, video = '') {

    let activePopup = document.querySelectorAll('.popup._active');
    if (activePopup.length > 0) {
        popup_close('', false);
    }
    let curent_popup = document.querySelector('.popup_' + item);
    if (curent_popup && unlock) {
        if (video != '' && video != null) {
            let popup_video = document.querySelector('.popup_video');
            popup_video.querySelector('.popup__video').innerHTML = '<iframe src="https://www.youtube.com/embed/' + video + '?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>';
        }
        if (!document.querySelector('.menu__body._active')) {
            body_lock_add(500);
        }
        curent_popup.classList.add('_active');
        history.pushState('', '', '#' + item);
    }
}
function popup_close(item, bodyUnlock = true) {
    if (unlock) {
        if (!item) {
            for (let index = 0; index < popups.length; index++) {
                const popup = popups[index];
                let video = popup.querySelector('.popup__video');
                if (video) {
                    video.innerHTML = '';
                }
                popup.classList.remove('_active');
            }
        } else {
            let video = item.querySelector('.popup__video');
            if (video) {
                video.innerHTML = '';
            }
            item.classList.remove('_active');
        }
        if (!document.querySelector('.menu__body._active') && bodyUnlock) {
            body_lock_remove(500);
        }
        history.pushState('', '', window.location.href.split('#')[0]);
    }
}
let popup_close_icon = document.querySelectorAll('.popup__close,._popup-close');
if (popup_close_icon) {
    for (let index = 0; index < popup_close_icon.length; index++) {
        const el = popup_close_icon[index];
        el.addEventListener('click', function () {
            popup_close(el.closest('.popup'));
        })
    }
}
document.addEventListener('keydown', function (e) {
    if (e.code === 'Escape') {
        popup_close();
    }
});

//========================================
//Wrap
function _wrap(el, wrapper) {
    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);
}
//========================================
//RemoveClasses
function _removeClasses(el, class_name) {
    for (var i = 0; i < el.length; i++) {
        el[i].classList.remove(class_name);
    }
}
//========================================
//IsHidden
function _is_hidden(el) {
    return (el.offsetParent === null)
}
//========================================
//Animate
function animate({ timing, draw, duration }) {
    let start = performance.now();
    requestAnimationFrame(function animate(time) {
        // timeFraction изменяется от 0 до 1
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;

        // вычисление текущего состояния анимации
        let progress = timing(timeFraction);

        draw(progress); // отрисовать её

        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }

    });
}
function makeEaseOut(timing) {
    return function (timeFraction) {
        return 1 - timing(1 - timeFraction);
    }
}
function makeEaseInOut(timing) {
    return function (timeFraction) {
        if (timeFraction < .5)
            return timing(2 * timeFraction) / 2;
        else
            return (2 - timing(2 * (1 - timeFraction))) / 2;
    }
}
function quad(timeFraction) {
    return Math.pow(timeFraction, 2)
}
function circ(timeFraction) {
    return 1 - Math.sin(Math.acos(timeFraction));
}
/*
animate({
    duration: 1000,
    timing: makeEaseOut(quad),
    draw(progress) {
        window.scroll(0, start_position + 400 * progress);
    }
});*/

//Полифилы
(function () {
    // проверяем поддержку
    if (!Element.prototype.closest) {
        // реализуем
        Element.prototype.closest = function (css) {
            var node = this;
            while (node) {
                if (node.matches(css)) return node;
                else node = node.parentElement;
            }
            return null;
        };
    }
})();
(function () {
    // проверяем поддержку
    if (!Element.prototype.matches) {
        // определяем свойство
        Element.prototype.matches = Element.prototype.matchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector;
    }
})();
function _goto(target_block, speed, offset = 0) {
    let header = '';
    //OffsetHeader
    //if (window.innerWidth < 992) {
    //	header = 'header';
    //}
    let options = {
        speedAsDuration: true,
        speed: speed,
        header: header,
        offset: offset,
        easing: 'easeOutQuad',
    };
    let scr = new SmoothScroll();
    scr.animateScroll(target_block, '', options);
}
;

// include('./ui/_tabs.js');
// include('./ui/_select.js');
// include('./ui/_file-input.js');
// include('./ui/_number.js');
// include('./ui/_range.js');
// include('./ui/_cookie.js');
// include('./ui/_spoller.js');
// include('./ui/_ibg.js');
// include('./ui/_validation.js');
// include('./ui/_scroll.js');
// include('./ui/_map.js');
// include('./ui/_tippy.js');
// include('./ui/_livesearch.js');
// include('./ui/_drop.js');
// include('./ui/_mask.js');
// include('./ui/_lazy.js');
// include('./ui/_paralax.js');
// include('./ui/_textarea.js');
// include('./ui/_show-pass.js');
// include('./ui/_dashboard.js');
// include('./ui/_colorpicker.js');
// include('./ui/_preload.js');
// include('./ui/_toast.js');
// UI

// COMPONENTS
// Toggler
function toggleActive(toggler, togglerAttr) {
    if (toggler && togglerAttr) {
        toggler.onclick = () => {
            toggler.classList.add(togglerAttr + '_active');
        };
    }
}

window.addEventListener('load', () => {
    let togglers = document.querySelectorAll("[data-toggler]");

    if (togglers) {
        for (let i = 0; i < togglers.length; i++) {
            const toggler = togglers[i];
            const togglerAttr = toggler.getAttribute('data-toggler');
            toggleActive(toggler, togglerAttr);
        }
    }
}, false);
// Toggler
;
//  Change header on scroll
function headerScroll() {
    let scrollTop = window.scrollY;
    if (scrollTop > 300) {
        document.querySelector('.header').classList.add('header_scroll');
    } else if (scrollTop < 100) {
        document.querySelector('.header').classList.remove('header_scroll');
    }
}

['scroll', 'load'].forEach(evt =>
    window.addEventListener(evt, () => {
        headerScroll();
    }, false)
);
//  Change header on scroll
;
// Menu
let menu = document.querySelector(".menu");
let menu_burger = document.querySelector(".menu__burger");
let body = document.querySelector('body');
let menuItems = document.querySelectorAll(".menu__item");
let menuStripe = document.querySelector(".menu__stripe");


// Stripe movement
function stripe(element) {
    if (element && menuStripe) {
        let stripeLeft = element.offsetLeft;
        let width = element.offsetWidth;
        menuStripe.style.left = stripeLeft + 'px';
        menuStripe.style.width = width + 'px';
    }
}

// Move stripe on hover
function stripeOver(menuItem) {
    menuItem.addEventListener("mouseover", function () {
        stripe(this);
        if (menuStripe) {
            menuStripe.classList.add("menu__stripe_active");
        }
    });
}

// Move stripe back to active on leave
function stripeLeave(menuItem) {
    menuItem.addEventListener("mouseleave", function () {
        let menuItemActive = document.querySelector(".menu__item_active");
        stripe(menuItemActive);
        if (menuStripe) {
            menuStripe.classList.remove("menu__stripe_active");
        }
    });
}

// Hide menu
function MenuHide(params) {
    menu.classList.remove('menu_toggle');
    body.classList.remove('body-toggle');
    menu_burger.classList.remove('burger_active');
}

// Close menu on Esc
document.addEventListener('keydown', function (e) {
    if (e.keyCode === 27) {
        menu.classList.remove('menu_toggle');
        body.classList.remove('body-toggle');
    }
});

// Move stripe to active menu item
window.addEventListener('load', function () {
    let menuItemActive = document.querySelector(".menu__item_active");
    stripe(menuItemActive);

    for (let i = 0; i < menuItems.length; ++i) {
        let menuItem = menuItems[i];
        stripeOver(menuItem);
        stripeLeave(menuItem);
        // stripeClick(menuItem);
    }
}, false);

// ANCHOR ===========================================================================
// // Chacnge active item on scroll
// window.addEventListener("scroll", function () {
//     let scrollDistance = window.scrollY;
//     let anchorList = document.querySelectorAll("._anchor");

//     for (let i = 0; i < anchorList.length; ++i) {
//         let anchorItemTop = getWindowTop(anchorList[i]);

//         if (anchorItemTop - 100 <= scrollDistance && menuStripe.classList.contains('menu__stripe_stopper')) {
//             menuItems.forEach((menuListItem) => menuListItem.classList.remove("menu__item_active"));
//             menuItems[i].classList.add('menu__item_active');
//             let menuItemActive = document.querySelector(".menu__item_active");
//             stripe(menuItemActive);
//         }
//     }
// });

// // Chacnge active item on click
// function stripeClick(menuItem) {
//     menuItem.addEventListener("click", function () {
//         // Hide menu when moving to anchor
//         menuStripe.classList.remove('menu__stripe_stopper');

//         MenuHide();
//         menuItems.forEach((menuListItem) => menuListItem.classList.remove("menu__item_active"));
//         menuItem.classList.add("menu__item_active");
//         var menuItemIndex = [...menuItems].indexOf(menuItem);
//         var rect = document.querySelectorAll('._anchor')[menuItemIndex];
//         window.scrollTo({ top: getWindowTop(rect) - 50, behavior: 'smooth' });
//         setTimeout(function () {
//             menuStripe.classList.add('menu__stripe_stopper');
//         }, 500);

//         menuStripe.classList.remove('menu__stripe_active');
//     });
// }

// // Go top on logo click
// let headerLogo = document.querySelector('.header__logo');
// if (headerLogo) {
//     headerLogo.addEventListener('click', function () {
//         menuItems.forEach((menuListItem) => menuListItem.classList.remove("menu__item_active"));
//         menuItems[0].classList.add('menu__item_active');

//         window.scrollTo({
//             top: 0,
//             behavior: 'smooth'
//         });

//         stripe(menuItems[0]);
//     });
// }
// ANCHOR ===========================================================================
;
// Burger
window.addEventListener('load', function () {
    let burger = document.querySelector(".burger");
    let body = document.querySelector('body');
    let menu = document.querySelector(".menu");

    if (burger && menu) {
        burger.addEventListener('click', function () {
            burger.classList.toggle('burger_active');
            menu.classList.toggle('menu_toggle');
            body.classList.toggle('body-toggle');
        });

        document.addEventListener('keydown', function (e) {
            if (e.keyCode === 27) {
                burger.classList.remove('burger_active');
                menu.classList.remove('menu_toggle');
                body.classList.remove('body-toggle');
            }
        });
    }
}, false);
// Burger
;

// include('./components/_search.js');
// COMPONENTS

AOS.init({
    duration: 1000,
    easing: 'ease-out-back',
});

window.addEventListener('load', function () {
    AOS.refresh();

    window.addEventListener("scroll", function (e) {
        AOS.refresh();
    });
}, false);
;
