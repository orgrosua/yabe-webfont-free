import{s as w,e as Z,m as _,i as T,t as B,p as V,u as z,r as k,v as M,w as rr,x as er,d as tr,y as nr,U as m,a as S,l as D,f as d,z as p,q as G,h as ar,j as or,b as ir,g as sr}from"./_Uint8Array-Dz8rZXn2.js";function cr(r,e){for(var t=-1,a=r==null?0:r.length;++t<a&&e(r[t],t,r)!==!1;);return r}function N(r,e,t){e=="__proto__"&&w?w(r,e,{configurable:!0,enumerable:!0,value:t,writable:!0}):r[e]=t}var fr=Object.prototype,ur=fr.hasOwnProperty;function K(r,e,t){var a=r[e];(!(ur.call(r,e)&&Z(a,t))||t===void 0&&!(e in r))&&N(r,e,t)}function y(r,e,t,a){var g=!t;t||(t={});for(var i=-1,o=e.length;++i<o;){var s=e[i],c=a?a(t[s],r[s],s,t,r):void 0;c===void 0&&(c=r[s]),g?N(t,s,c):K(t,s,c)}return t}function gr(r,e){return r&&y(e,_(e),r)}function lr(r){var e=[];if(r!=null)for(var t in Object(r))e.push(t);return e}var br=Object.prototype,pr=br.hasOwnProperty;function yr(r){if(!T(r))return lr(r);var e=B(r),t=[];for(var a in r)a=="constructor"&&(e||!pr.call(r,a))||t.push(a);return t}function A(r){return V(r)?z(r,!0):yr(r)}function Tr(r,e){return r&&y(e,A(e),r)}var R=typeof exports=="object"&&exports&&!exports.nodeType&&exports,x=R&&typeof module=="object"&&module&&!module.nodeType&&module,dr=x&&x.exports===R,P=dr?k.Buffer:void 0,I=P?P.allocUnsafe:void 0;function Ar(r,e){if(e)return r.slice();var t=r.length,a=I?I(t):new r.constructor(t);return r.copy(a),a}function jr(r,e){var t=-1,a=r.length;for(e||(e=Array(a));++t<a;)e[t]=r[t];return e}function Or(r,e){return y(r,M(r),e)}var hr=rr(Object.getPrototypeOf,Object);const q=hr;var $r=Object.getOwnPropertySymbols,Y=$r?function(r){for(var e=[];r;)tr(e,M(r)),r=q(r);return e}:er;function vr(r,e){return y(r,Y(r),e)}function wr(r){return nr(r,A,Y)}var mr=Object.prototype,Sr=mr.hasOwnProperty;function xr(r){var e=r.length,t=new r.constructor(e);return e&&typeof r[0]=="string"&&Sr.call(r,"index")&&(t.index=r.index,t.input=r.input),t}function j(r){var e=new r.constructor(r.byteLength);return new m(e).set(new m(r)),e}function Pr(r,e){var t=e?j(r.buffer):r.buffer;return new r.constructor(t,r.byteOffset,r.byteLength)}var Ir=/\w*$/;function Er(r){var e=new r.constructor(r.source,Ir.exec(r));return e.lastIndex=r.lastIndex,e}var E=S?S.prototype:void 0,L=E?E.valueOf:void 0;function Lr(r){return L?Object(L.call(r)):{}}function Cr(r,e){var t=e?j(r.buffer):r.buffer;return new r.constructor(t,r.byteOffset,r.length)}var Fr="[object Boolean]",Ur="[object Date]",_r="[object Map]",Br="[object Number]",Mr="[object RegExp]",Dr="[object Set]",Gr="[object String]",Nr="[object Symbol]",Kr="[object ArrayBuffer]",Rr="[object DataView]",qr="[object Float32Array]",Yr="[object Float64Array]",Wr="[object Int8Array]",Hr="[object Int16Array]",Jr="[object Int32Array]",Qr="[object Uint8Array]",Xr="[object Uint8ClampedArray]",Zr="[object Uint16Array]",Vr="[object Uint32Array]";function zr(r,e,t){var a=r.constructor;switch(e){case Kr:return j(r);case Fr:case Ur:return new a(+r);case Rr:return Pr(r,t);case qr:case Yr:case Wr:case Hr:case Jr:case Qr:case Xr:case Zr:case Vr:return Cr(r,t);case _r:return new a;case Br:case Gr:return new a(r);case Mr:return Er(r);case Dr:return new a;case Nr:return Lr(r)}}var C=Object.create,kr=function(){function r(){}return function(e){if(!T(e))return{};if(C)return C(e);r.prototype=e;var t=new r;return r.prototype=void 0,t}}();function re(r){return typeof r.constructor=="function"&&!B(r)?kr(q(r)):{}}var ee="[object Map]";function te(r){return D(r)&&d(r)==ee}var F=p&&p.isMap,ne=F?G(F):te,ae="[object Set]";function oe(r){return D(r)&&d(r)==ae}var U=p&&p.isSet,ie=U?G(U):oe,se=1,ce=2,fe=4,W="[object Arguments]",ue="[object Array]",ge="[object Boolean]",le="[object Date]",be="[object Error]",H="[object Function]",pe="[object GeneratorFunction]",ye="[object Map]",Te="[object Number]",J="[object Object]",de="[object RegExp]",Ae="[object Set]",je="[object String]",Oe="[object Symbol]",he="[object WeakMap]",$e="[object ArrayBuffer]",ve="[object DataView]",we="[object Float32Array]",me="[object Float64Array]",Se="[object Int8Array]",xe="[object Int16Array]",Pe="[object Int32Array]",Ie="[object Uint8Array]",Ee="[object Uint8ClampedArray]",Le="[object Uint16Array]",Ce="[object Uint32Array]",n={};n[W]=n[ue]=n[$e]=n[ve]=n[ge]=n[le]=n[we]=n[me]=n[Se]=n[xe]=n[Pe]=n[ye]=n[Te]=n[J]=n[de]=n[Ae]=n[je]=n[Oe]=n[Ie]=n[Ee]=n[Le]=n[Ce]=!0;n[be]=n[H]=n[he]=!1;function b(r,e,t,a,g,i){var o,s=e&se,c=e&ce,Q=e&fe;if(t&&(o=g?t(r,a,g,i):t(r)),o!==void 0)return o;if(!T(r))return r;var O=ir(r);if(O){if(o=xr(r),!s)return jr(r,o)}else{var l=d(r),h=l==H||l==pe;if(ar(r))return Ar(r,s);if(l==J||l==W||h&&!g){if(o=c||h?{}:re(r),!s)return c?vr(r,Tr(o,r)):Or(r,gr(o,r))}else{if(!n[l])return g?r:{};o=zr(r,l,s)}}i||(i=new or);var $=i.get(r);if($)return $;i.set(r,o),ie(r)?r.forEach(function(f){o.add(b(f,e,t,f,r,i))}):ne(r)&&r.forEach(function(f,u){o.set(u,b(f,e,t,u,r,i))});var X=Q?c?wr:sr:c?A:_,v=O?void 0:X(r);return cr(v||r,function(f,u){v&&(u=f,f=r[u]),K(o,u,b(f,e,t,u,r,i))}),o}var Fe=1,Ue=4;function Be(r){return b(r,Fe|Ue)}export{K as a,Be as c};