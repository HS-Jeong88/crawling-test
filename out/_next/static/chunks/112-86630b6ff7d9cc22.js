(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[112],{7645:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},u=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(u=u.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),u.forEach((function(t){r(e,t,n[t])}))}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=o.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};i=e,c=Promise,(null!=c&&"undefined"!==typeof Symbol&&c[Symbol.hasInstance]?c[Symbol.hasInstance](i):i instanceof c)?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=u({},r,e));var i,c;var l=r=u({},r,t);0;if(l.suspense)return n(l);r.loadableGenerated&&delete(r=u({},r,r.loadableGenerated)).loadableGenerated;if("boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,a(n,r);delete r.ssr}return n(r)},t.noSSR=a;i(n(7294));var o=i(n(4588));function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){return delete t.webpack,delete t.modules,e(t)}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},3644:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var u=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext(null);t.LoadableContext=u},4588:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,a=(i=n(7294))&&i.__esModule?i:{default:i},c=n(2021),l=n(3644);var s=[],f=[],d=!1;function v(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var p=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}var t,n,u;return t=e,(n=[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;if(t.loading){if("number"===typeof n.delay)if(0===n.delay)this._state.pastDelay=!0;else{var r=this;this._delay=setTimeout((function(){r._update({pastDelay:!0})}),n.delay)}if("number"===typeof n.timeout){var u=this;this._timeout=setTimeout((function(){u._update({timedOut:!0})}),n.timeout)}}this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=o({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}])&&r(t.prototype,n),u&&r(t,u),e}();function b(e){return function(e,t){var n=function(){if(!u){var t=new p(e,r);u={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return u.promise()},r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);r.suspense&&(r.lazy=a.default.lazy(r.loader));var u=null;if(!d&&!r.suspense){var i=r.webpack?r.webpack():r.modules;i&&f.push((function(e){var t=!0,r=!1,u=void 0;try{for(var o,a=i[Symbol.iterator]();!(t=(o=a.next()).done);t=!0){var c=o.value;if(-1!==e.indexOf(c))return n()}}catch(l){r=!0,u=l}finally{try{t||null==a.return||a.return()}finally{if(r)throw u}}}))}var s=r.suspense?function(e,t){return a.default.createElement(r.lazy,o({},e,{ref:t}))}:function(e,t){n();var o=a.default.useContext(l.LoadableContext),i=c.useSubscription(u);return a.default.useImperativeHandle(t,(function(){return{retry:u.retry}}),[]),o&&Array.isArray(r.modules)&&r.modules.forEach((function(e){o(e)})),a.default.useMemo((function(){return i.loading||i.error?a.default.createElement(r.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:u.retry}):i.loaded?a.default.createElement(function(e){return e&&e.__esModule?e.default:e}(i.loaded),e):null}),[e,i])};return s.preload=function(){return!r.suspense&&n()},s.displayName="LoadableComponent",a.default.forwardRef(s)}(v,e)}function y(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return y(e,t)}))}b.preloadAll=function(){return new Promise((function(e,t){y(s).then(e,t)}))},b.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return d=!0,t()};y(f,e).then(n,n)}))},window.__NEXT_PRELOADREADY=b.preloadReady;var h=b;t.default=h},2021:function(e,t,n){!function(){"use strict";var t={800:function(e){var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function u(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map((function(e){return t[e]}));if("0123456789"!==r.join(""))return!1;var u={};return"abcdefghijklmnopqrst".split("").forEach((function(e){u[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},u)).join("")}catch(e){return!1}}()?Object.assign:function(e,o){for(var i,a,c=u(e),l=1;l<arguments.length;l++){for(var s in i=Object(arguments[l]))n.call(i,s)&&(c[s]=i[s]);if(t){a=t(i);for(var f=0;f<a.length;f++)r.call(i,a[f])&&(c[a[f]]=i[a[f]])}}return c}},569:function(e,t,n){0},403:function(e,t,n){var r=n(800),u=n(522);t.useSubscription=function(e){var t=e.getCurrentValue,n=e.subscribe,o=u.useState((function(){return{getCurrentValue:t,subscribe:n,value:t()}}));e=o[0];var i=o[1];return o=e.value,e.getCurrentValue===t&&e.subscribe===n||(o=t(),i({getCurrentValue:t,subscribe:n,value:o})),u.useDebugValue(o),u.useEffect((function(){function e(){if(!u){var e=t();i((function(u){return u.getCurrentValue!==t||u.subscribe!==n||u.value===e?u:r({},u,{value:e})}))}}var u=!1,o=n(e);return e(),function(){u=!0,o()}}),[t,n]),o}},138:function(e,t,n){e.exports=n(403)},522:function(e){e.exports=n(7294)}},r={};function u(e){var n=r[e];if(void 0!==n)return n.exports;var o=r[e]={exports:{}},i=!0;try{t[e](o,o.exports,u),i=!1}finally{i&&delete r[e]}return o.exports}u.ab="//";var o=u(138);e.exports=o}()},5152:function(e,t,n){n(7645)},8100:function(e,t,n){"use strict";var r=n(7294);function u(e,t,n,r){return new(n||(n=Promise))((function(u,o){function i(e){try{c(r.next(e))}catch(t){o(t)}}function a(e){try{c(r.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?u(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))}function o(e,t){var n,r,u,o,i={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(u=2&o[0]?r.return:o[0]?r.throw||((u=r.return)&&u.call(r),0):r.next)&&!(u=u.call(r,o[1])).done)return u;switch(r=0,u&&(o=[2&o[0],u.value]),o[0]){case 0:case 1:u=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(u=(u=i.trys).length>0&&u[u.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!u||o[1]>u[0]&&o[1]<u[3])){i.label=o[1];break}if(6===o[0]&&i.label<u[1]){i.label=u[1],u=o;break}if(u&&i.label<u[2]){i.label=u[2],i.ops.push(o);break}u[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(a){o=[6,a],r=0}finally{n=u=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}}var i,a=function(){},c=a(),l=Object,s=function(e){return e===c},f=function(e){return"function"==typeof e},d=function(e,t){return l.assign({},e,t)},v="undefined",p=function(){return typeof window!=v},b=new WeakMap,y=0,h=function(e){var t,n,r=typeof e,u=e&&e.constructor,o=u==Date;if(l(e)!==e||o||u==RegExp)t=o?e.toJSON():"symbol"==r?e.toString():"string"==r?JSON.stringify(e):""+e;else{if(t=b.get(e))return t;if(t=++y+"~",b.set(e,t),u==Array){for(t="@",n=0;n<e.length;n++)t+=h(e[n])+",";b.set(e,t)}if(u==l){t="#";for(var i=l.keys(e).sort();!s(n=i.pop());)s(e[n])||(t+=n+":"+h(e[n])+",");b.set(e,t)}}return t},g=!0,m=p(),w=typeof document!=v,O=m&&window.addEventListener?window.addEventListener.bind(window):a,_=w?document.addEventListener.bind(document):a,k=m&&window.removeEventListener?window.removeEventListener.bind(window):a,E=w?document.removeEventListener.bind(document):a,j={isOnline:function(){return g},isVisible:function(){var e=w&&document.visibilityState;return s(e)||"hidden"!==e}},S={initFocus:function(e){return _("visibilitychange",e),O("focus",e),function(){E("visibilitychange",e),k("focus",e)}},initReconnect:function(e){var t=function(){g=!0,e()},n=function(){g=!1};return O("online",t),O("offline",n),function(){k("online",t),k("offline",n)}}},C=!p()||"Deno"in window,P=function(e){return p()&&typeof window.requestAnimationFrame!=v?window.requestAnimationFrame(e):setTimeout(e,1)},R=C?r.useEffect:r.useLayoutEffect,x="undefined"!==typeof navigator&&navigator.connection,T=!C&&x&&(["slow-2g","2g"].includes(x.effectiveType)||x.saveData),V=function(e){if(f(e))try{e=e()}catch(n){e=""}var t=[].concat(e);return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?h(e):"",t,e?"$swr$"+e:""]},D=new WeakMap,L=function(e,t,n,r,u,o,i){void 0===i&&(i=!0);var a=D.get(e),c=a[0],l=a[1],s=a[3],f=c[t],d=l[t];if(i&&d)for(var v=0;v<d.length;++v)d[v](n,r,u);return o&&(delete s[t],f&&f[0])?f[0](2).then((function(){return e.get(t)})):e.get(t)},I=0,M=function(){return++I},A=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return u(void 0,void 0,void 0,(function(){var t,n,r,u,i,a,l,v,p,b,y,h,g,m,w,O,_,k,E,j,S;return o(this,(function(o){switch(o.label){case 0:if(t=e[0],n=e[1],r=e[2],u=e[3],a=!!s((i="boolean"===typeof u?{revalidate:u}:u||{}).populateCache)||i.populateCache,l=!1!==i.revalidate,v=!1!==i.rollbackOnError,p=i.optimisticData,b=V(n),y=b[0],h=b[2],!y)return[2];if(g=D.get(t),m=g[2],e.length<3)return[2,L(t,y,t.get(y),c,c,l,!0)];if(w=r,_=M(),m[y]=[_,0],k=!s(p),E=t.get(y),k&&(j=f(p)?p(E):p,t.set(y,j),L(t,y,j)),f(w))try{w=w(t.get(y))}catch(C){O=C}return w&&f(w.then)?[4,w.catch((function(e){O=e}))]:[3,2];case 1:if(w=o.sent(),_!==m[y][0]){if(O)throw O;return[2,w]}O&&k&&v&&(a=!0,w=E,t.set(y,E)),o.label=2;case 2:return a&&(O||(f(a)&&(w=a(w,E)),t.set(y,w)),t.set(h,d(t.get(h),{error:O}))),m[y][1]=M(),[4,L(t,y,w,O,c,l,!!a)];case 3:if(S=o.sent(),O)throw O;return[2,a?S:w]}}))}))},F=function(e,t){for(var n in e)e[n][0]&&e[n][0](t)},N=function(e,t){if(!D.has(e)){var n=d(S,t),r={},u=A.bind(c,e),o=a;if(D.set(e,[r,{},{},{},u]),!C){var i=n.initFocus(setTimeout.bind(c,F.bind(c,r,0))),l=n.initReconnect(setTimeout.bind(c,F.bind(c,r,1)));o=function(){i&&i(),l&&l(),D.delete(e)}}return[e,u,o]}return[e,D.get(e)[4]]},q=N(new Map),G=q[0],W=q[1],z=d({onLoadingSlow:a,onSuccess:a,onError:a,onErrorRetry:function(e,t,n,r,u){var o=n.errorRetryCount,i=u.retryCount,a=~~((Math.random()+.5)*(1<<(i<8?i:8)))*n.errorRetryInterval;!s(o)&&i>o||setTimeout(r,a,u)},onDiscarded:a,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:T?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:T?5e3:3e3,compare:function(e,t){return h(e)==h(t)},isPaused:function(){return!1},cache:G,mutate:W,fallback:{}},j),H=function(e,t){var n=d(e,t);if(t){var r=e.use,u=e.fallback,o=t.use,i=t.fallback;r&&o&&(n.use=r.concat(o)),u&&i&&(n.fallback=d(u,i))}return n},J=(0,r.createContext)({}),$=function(e){return f(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}]},X=function(){return d(z,(0,r.useContext)(J))},Y=function(e,t,n){var r=t[e]||(t[e]=[]);return r.push(n),function(){var e=r.indexOf(n);e>=0&&(r[e]=r[r.length-1],r.pop())}},B={dedupe:!0};l.defineProperty((function(e){var t=e.value,n=H((0,r.useContext)(J),t),u=t&&t.provider,o=(0,r.useState)((function(){return u?N(u(n.cache||G),t):c}))[0];return o&&(n.cache=o[0],n.mutate=o[1]),R((function(){return o?o[2]:c}),[]),(0,r.createElement)(J.Provider,d(e,{value:n}))}),"default",{value:z}),i=function(e,t,n){var i=n.cache,a=n.compare,l=n.fallbackData,v=n.suspense,p=n.revalidateOnMount,b=n.refreshInterval,y=n.refreshWhenHidden,h=n.refreshWhenOffline,g=D.get(i),m=g[0],w=g[1],O=g[2],_=g[3],k=V(e),E=k[0],j=k[1],S=k[2],x=(0,r.useRef)(!1),T=(0,r.useRef)(!1),I=(0,r.useRef)(E),F=(0,r.useRef)(t),N=(0,r.useRef)(n),q=function(){return N.current},G=function(){return q().isVisible()&&q().isOnline()},W=function(e){return i.set(S,d(i.get(S),e))},z=i.get(E),H=s(l)?n.fallback[E]:l,J=s(z)?H:z,$=i.get(S)||{},X=$.error,K=!x.current,Q=function(){return K&&!s(p)?p:!q().isPaused()&&(v?!s(J)&&n.revalidateIfStale:s(J)||n.revalidateIfStale)},U=!(!E||!t)&&(!!$.isValidating||K&&Q()),Z=function(e,t){var n=(0,r.useState)({})[1],u=(0,r.useRef)(e),o=(0,r.useRef)({data:!1,error:!1,isValidating:!1}),i=(0,r.useCallback)((function(e){var r=!1,i=u.current;for(var a in e){var c=a;i[c]!==e[c]&&(i[c]=e[c],o.current[c]&&(r=!0))}r&&!t.current&&n({})}),[]);return R((function(){u.current=e})),[u,o.current,i]}({data:J,error:X,isValidating:U},T),ee=Z[0],te=Z[1],ne=Z[2],re=(0,r.useCallback)((function(e){return u(void 0,void 0,void 0,(function(){var t,r,u,l,d,v,p,b,y,h,g,m,w;return o(this,(function(o){switch(o.label){case 0:if(t=F.current,!E||!t||T.current||q().isPaused())return[2,!1];l=!0,d=e||{},v=!_[E]||!d.dedupe,p=function(){return!T.current&&E===I.current&&x.current},b=function(){var e=_[E];e&&e[1]===u&&delete _[E]},y={isValidating:!1},h=function(){W({isValidating:!1}),p()&&ne(y)},W({isValidating:!0}),ne({isValidating:!0}),o.label=1;case 1:return o.trys.push([1,3,,4]),v&&(L(i,E,ee.current.data,ee.current.error,!0),n.loadingTimeout&&!i.get(E)&&setTimeout((function(){l&&p()&&q().onLoadingSlow(E,n)}),n.loadingTimeout),_[E]=[t.apply(void 0,j),M()]),w=_[E],r=w[0],u=w[1],[4,r];case 2:return r=o.sent(),v&&setTimeout(b,n.dedupingInterval),_[E]&&_[E][1]===u?(W({error:c}),y.error=c,g=O[E],!s(g)&&(u<=g[0]||u<=g[1]||0===g[1])?(h(),v&&p()&&q().onDiscarded(E),[2,!1]):(a(ee.current.data,r)?y.data=ee.current.data:y.data=r,a(i.get(E),r)||i.set(E,r),v&&p()&&q().onSuccess(r,E,n),[3,4])):(v&&p()&&q().onDiscarded(E),[2,!1]);case 3:return m=o.sent(),b(),q().isPaused()||(W({error:m}),y.error=m,v&&p()&&(q().onError(m,E,n),("boolean"===typeof n.shouldRetryOnError&&n.shouldRetryOnError||f(n.shouldRetryOnError)&&n.shouldRetryOnError(m))&&G()&&q().onErrorRetry(m,E,n,re,{retryCount:(d.retryCount||0)+1,dedupe:!0}))),[3,4];case 4:return l=!1,h(),p()&&v&&L(i,E,y.data,y.error,!1),[2,!0]}}))}))}),[E]),ue=(0,r.useCallback)(A.bind(c,i,(function(){return I.current})),[]);if(R((function(){F.current=t,N.current=n})),R((function(){if(E){var e=E!==I.current,t=re.bind(c,B),n=0,r=Y(E,w,(function(e,t,n){ne(d({error:t,isValidating:n},a(ee.current.data,e)?c:{data:e}))})),u=Y(E,m,(function(e){if(0==e){var r=Date.now();q().revalidateOnFocus&&r>n&&G()&&(n=r+q().focusThrottleInterval,t())}else if(1==e)q().revalidateOnReconnect&&G()&&t();else if(2==e)return re()}));return T.current=!1,I.current=E,x.current=!0,e&&ne({data:J,error:X,isValidating:U}),Q()&&(s(J)||C?t():P(t)),function(){T.current=!0,r(),u()}}}),[E,re]),R((function(){var e;function t(){var t=f(b)?b(J):b;t&&-1!==e&&(e=setTimeout(n,t))}function n(){ee.current.error||!y&&!q().isVisible()||!h&&!q().isOnline()?t():re(B).then(t)}return t(),function(){e&&(clearTimeout(e),e=-1)}}),[b,y,h,re]),(0,r.useDebugValue)(J),v&&s(J)&&E)throw F.current=t,N.current=n,T.current=!1,s(X)?re(B):X;return{mutate:ue,get data(){return te.data=!0,J},get error(){return te.error=!0,X},get isValidating(){return te.isValidating=!0,U}}}}}]);