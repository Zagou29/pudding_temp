function y(){}function J(t,e){for(const n in e)t[n]=e[n];return t}function L(t){return t()}function D(){return Object.create(null)}function b(t){t.forEach(L)}function j(t){return typeof t=="function"}function ht(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let w;function mt(t,e){return w||(w=document.createElement("a")),w.href=e,t===w.href}function K(t){return Object.keys(t).length===0}function Q(t,...e){if(t==null)return y;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function pt(t,e,n){t.$$.on_destroy.push(Q(e,n))}function yt(t,e,n,i){if(t){const r=P(t,e,n,i);return t[0](r)}}function P(t,e,n,i){return t[1]&&i?J(n.ctx.slice(),t[1](i(e))):n.ctx}function gt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const c=[],o=Math.max(e.dirty.length,r.length);for(let u=0;u<o;u+=1)c[u]=e.dirty[u]|r[u];return c}return e.dirty|r}return e.dirty}function bt(t,e,n,i,r,c){if(r){const o=P(e,n,i,c);t.p(o,r)}}function xt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function $t(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function wt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function vt(t){return t??""}function Et(t,e,n){return t.set(n),e}function kt(t){return t&&j(t.destroy)?t.destroy:y}let k=!1;function U(){k=!0}function V(){k=!1}function X(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function Y(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let a=0;a<e.length;a++){const f=e[a];f.claim_order!==void 0&&s.push(f)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let s=0;s<e.length;s++){const a=e[s].claim_order,f=(r>0&&e[n[r]].claim_order<=a?r+1:X(1,r,$=>e[n[$]].claim_order,a))-1;i[s]=n[f]+1;const l=f+1;n[l]=s,r=Math.max(l,r)}const c=[],o=[];let u=e.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(c.push(e[s-1]);u>=s;u--)o.push(e[u]);u--}for(;u>=0;u--)o.push(e[u]);c.reverse(),o.sort((s,a)=>s.claim_order-a.claim_order);for(let s=0,a=0;s<o.length;s++){for(;a<c.length&&o[s].claim_order>=c[a].claim_order;)a++;const f=a<c.length?c[a]:null;t.insertBefore(o[s],f)}}function Z(t,e){t.appendChild(e)}function tt(t,e){if(k){for(Y(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Nt(t,e,n){k&&!n?tt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function W(t){t.parentNode&&t.parentNode.removeChild(t)}function At(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function B(t){return document.createElement(t)}function et(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function T(t){return document.createTextNode(t)}function St(){return T(" ")}function Ct(){return T("")}function O(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function nt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function jt(t,e){for(const n in e)nt(t,n,e[n])}function Tt(t){let e;return{p(...n){e=n,e.forEach(i=>t.push(i))},r(){e.forEach(n=>t.splice(t.indexOf(n),1))}}}function Mt(t){return t===""?null:+t}function it(t){return Array.from(t.childNodes)}function rt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function H(t,e,n,i,r=!1){rt(t);const c=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const u=t[o];if(e(u)){const s=n(u);return s===void 0?t.splice(o,1):t[o]=s,r||(t.claim_info.last_index=o),u}}for(let o=t.claim_info.last_index-1;o>=0;o--){const u=t[o];if(e(u)){const s=n(u);return s===void 0?t.splice(o,1):t[o]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,u}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function I(t,e,n,i){return H(t,r=>r.nodeName===e,r=>{const c=[];for(let o=0;o<r.attributes.length;o++){const u=r.attributes[o];n[u.name]||c.push(u.name)}c.forEach(o=>r.removeAttribute(o))},()=>i(e))}function zt(t,e,n){return I(t,e,n,B)}function Dt(t,e,n){return I(t,e,n,et)}function ot(t,e){return H(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>T(e),!0)}function Ot(t){return ot(t," ")}function qt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Lt(t,e){t.value=e??""}function Pt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Wt(t,e,n){for(let i=0;i<t.options.length;i+=1){const r=t.options[i];if(r.__value===e){r.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function Bt(t){const e=t.querySelector(":checked");return e&&e.__value}let v;function st(){if(v===void 0){v=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{v=!0}}return v}function Ht(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=B("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const r=st();let c;return r?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",c=O(window,"message",o=>{o.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{c=O(i.contentWindow,"resize",e),e()}),Z(t,i),()=>{(r||c&&i.contentWindow)&&c(),W(i)}}function It(t,e,n){t.classList[n?"add":"remove"](e)}function ct(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function Ft(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const c=r.textContent.trim();c===`HEAD_${t}_END`?(i-=1,n.push(r)):c===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function Rt(t,e){return new t(e)}let g;function p(t){g=t}function x(){if(!g)throw new Error("Function called outside component initialization");return g}function Gt(t){x().$$.on_mount.push(t)}function Jt(t){x().$$.after_update.push(t)}function Kt(){const t=x();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const c=ct(e,n,{cancelable:i});return r.slice().forEach(o=>{o.call(t,c)}),!c.defaultPrevented}return!0}}function Qt(t,e){return x().$$.context.set(t,e),e}function Ut(t){return x().$$.context.get(t)}const h=[],q=[];let m=[];const A=[],F=Promise.resolve();let S=!1;function R(){S||(S=!0,F.then(G))}function Vt(){return R(),F}function C(t){m.push(t)}function Xt(t){A.push(t)}const N=new Set;let _=0;function G(){if(_!==0)return;const t=g;do{try{for(;_<h.length;){const e=h[_];_++,p(e),ut(e.$$)}}catch(e){throw h.length=0,_=0,e}for(p(null),h.length=0,_=0;q.length;)q.pop()();for(let e=0;e<m.length;e+=1){const n=m[e];N.has(n)||(N.add(n),n())}m.length=0}while(h.length);for(;A.length;)A.pop()();S=!1,N.clear(),p(t)}function ut(t){if(t.fragment!==null){t.update(),b(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(C)}}function at(t){const e=[],n=[];m.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),m=e}const E=new Set;let d;function Yt(){d={r:0,c:[],p:d}}function Zt(){d.r||b(d.c),d=d.p}function lt(t,e){t&&t.i&&(E.delete(t),t.i(e))}function te(t,e,n,i){if(t&&t.o){if(E.has(t))return;E.add(t),d.c.push(()=>{E.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function ee(t,e){const n={},i={},r={$$scope:1};let c=t.length;for(;c--;){const o=t[c],u=e[c];if(u){for(const s in o)s in u||(i[s]=1);for(const s in u)r[s]||(n[s]=u[s],r[s]=1);t[c]=u}else for(const s in o)r[s]=1}for(const o in i)o in n||(n[o]=void 0);return n}function ne(t){return typeof t=="object"&&t!==null?t:{}}function ie(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function re(t){t&&t.c()}function oe(t,e){t&&t.l(e)}function ft(t,e,n,i){const{fragment:r,after_update:c}=t.$$;r&&r.m(e,n),i||C(()=>{const o=t.$$.on_mount.map(L).filter(j);t.$$.on_destroy?t.$$.on_destroy.push(...o):b(o),t.$$.on_mount=[]}),c.forEach(C)}function dt(t,e){const n=t.$$;n.fragment!==null&&(at(n.after_update),b(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function _t(t,e){t.$$.dirty[0]===-1&&(h.push(t),R(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function se(t,e,n,i,r,c,o,u=[-1]){const s=g;p(t);const a=t.$$={fragment:null,ctx:[],props:c,update:y,not_equal:r,bound:D(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:D(),dirty:u,skip_bound:!1,root:e.target||s.$$.root};o&&o(a.root);let f=!1;if(a.ctx=n?n(t,e.props||{},(l,$,...M)=>{const z=M.length?M[0]:$;return a.ctx&&r(a.ctx[l],a.ctx[l]=z)&&(!a.skip_bound&&a.bound[l]&&a.bound[l](z),f&&_t(t,l)),$}):[],a.update(),f=!0,b(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){U();const l=it(e.target);a.fragment&&a.fragment.l(l),l.forEach(W)}else a.fragment&&a.fragment.c();e.intro&&lt(t.$$.fragment),ft(t,e.target,e.anchor,e.customElement),V(),G()}p(s)}class ce{$destroy(){dt(this,1),this.$destroy=y}$on(e,n){if(!j(n))return y;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!K(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Qt as $,ft as A,dt as B,tt as C,y as D,yt as E,bt as F,xt as G,gt as H,pt as I,Ft as J,At as K,mt as L,It as M,Tt as N,O,ie as P,Xt as Q,Lt as R,ce as S,b as T,Mt as U,C as V,Wt as W,Bt as X,Kt as Y,vt as Z,Et as _,St as a,Ht as a0,et as a1,Dt as a2,Ut as a3,ee as a4,ne as a5,J as a6,jt as a7,wt as a8,$t as a9,Q as aa,j as ab,kt as ac,Nt as b,Ot as c,te as d,Ct as e,Zt as f,lt as g,W as h,se as i,Jt as j,B as k,zt as l,it as m,nt as n,Gt as o,Pt as p,T as q,ot as r,ht as s,Vt as t,qt as u,Yt as v,q as w,Rt as x,re as y,oe as z};
