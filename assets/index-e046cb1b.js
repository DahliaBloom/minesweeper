(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const s of c.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();function _(){}function lt(e){return e()}function Y(){return Object.create(null)}function k(e){e.forEach(lt)}function it(e){return typeof e=="function"}function K(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let P;function j(e,t){return P||(P=document.createElement("a")),P.href=t,e===P.href}function ht(e){return Object.keys(e).length===0}function S(e,t,n){e.insertBefore(t,n||null)}function E(e){e.parentNode&&e.parentNode.removeChild(e)}function gt(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function G(e){return document.createElement(e)}function ot(e){return document.createTextNode(e)}function pt(){return ot("")}function W(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function C(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function mt(e){return Array.from(e.childNodes)}function At(e,t){t=""+t,e.data!==t&&(e.data=t)}function Q(e,t,n,r){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,r?"important":"")}let V;function y(e){V=e}function $(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach(r=>r.call(this,t))}const b=[],tt=[];let B=[];const et=[],_t=Promise.resolve();let X=!1;function Ct(){X||(X=!0,_t.then(st))}function Z(e){B.push(e)}const T=new Set;let O=0;function st(){if(O!==0)return;const e=V;do{try{for(;O<b.length;){const t=b[O];O++,y(t),Et(t.$$)}}catch(t){throw b.length=0,O=0,t}for(y(null),b.length=0,O=0;tt.length;)tt.pop()();for(let t=0;t<B.length;t+=1){const n=B[t];T.has(n)||(T.add(n),n())}B.length=0}while(b.length);for(;et.length;)et.pop()();X=!1,T.clear(),y(e)}function Et(e){if(e.fragment!==null){e.update(),k(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Z)}}function vt(e){const t=[],n=[];B.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),B=t}const I=new Set;let v;function Nt(){v={r:0,c:[],p:v}}function St(){v.r||k(v.c),v=v.p}function w(e,t){e&&e.i&&(I.delete(e),e.i(t))}function x(e,t,n,r){if(e&&e.o){if(I.has(e))return;I.add(e),v.c.push(()=>{I.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function ct(e){e&&e.c()}function z(e,t,n,r){const{fragment:l,after_update:c}=e.$$;l&&l.m(t,n),r||Z(()=>{const s=e.$$.on_mount.map(lt).filter(it);e.$$.on_destroy?e.$$.on_destroy.push(...s):k(s),e.$$.on_mount=[]}),c.forEach(Z)}function D(e,t){const n=e.$$;n.fragment!==null&&(vt(n.after_update),k(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ot(e,t){e.$$.dirty[0]===-1&&(b.push(e),Ct(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function H(e,t,n,r,l,c,s,d=[-1]){const h=V;y(e);const g=e.$$={fragment:null,ctx:[],props:c,update:_,not_equal:l,bound:Y(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(h?h.$$.context:[])),callbacks:Y(),dirty:d,skip_bound:!1,root:t.target||h.$$.root};s&&s(g.root);let L=!1;if(g.ctx=n?n(e,t.props||{},(m,F,...M)=>{const R=M.length?M[0]:F;return g.ctx&&l(g.ctx[m],g.ctx[m]=R)&&(!g.skip_bound&&g.bound[m]&&g.bound[m](R),L&&Ot(e,m)),F}):[],g.update(),L=!0,k(g.before_update),g.fragment=r?r(g.ctx):!1,t.target){if(t.hydrate){const m=mt(t.target);g.fragment&&g.fragment.l(m),m.forEach(E)}else g.fragment&&g.fragment.c();t.intro&&w(e.$$.fragment),z(e,t.target,t.anchor,t.customElement),st()}y(h)}class J{$destroy(){D(this,1),this.$destroy=_}$on(t,n){if(!it(n))return _;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const l=r.indexOf(n);l!==-1&&r.splice(l,1)}}$set(t){this.$$set&&!ht(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function bt(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ft={exports:{}};/*!
 * Library for making Minesweeper clones
 * https://github.com/binaryluke/Minesweeper
 *
 * Copyright 2015, Luke Howard (@binaryluke)
 *
 * Released under the MIT license
 * http://lukehoward.name/project/minesweeper/license
 */(function(e){(function(){var t={CLOSED:0,OPEN:1},n={NONE:0,EXCLAMATION:1,QUESTION:2},r={PRISTINE:0,IN_PROGRESS:1,LOST:2,WON:3},l=function(i,o,f,u){this.x=i||0,this.y=o||0,this.isMine=!!f,this.numAdjacentMines=u||0,this.state=t.CLOSED,this.flag=n.NONE},c=function(i){var o;try{o=L(i)}catch{o=!1}if(!o)throw new Error("The mine array supplied to Board constructor was not valid");this._state=r.PRISTINE,this._numRows=i.length,this._numCols=i[0].length,this._numMines=h(i,this._numRows,this._numCols),this._grid=d(i,this._numRows,this._numCols)};c.prototype.state=function(){return this._state},c.prototype.numRows=function(){return this._numRows},c.prototype.numCols=function(){return this._numCols},c.prototype.numMines=function(){return this._numMines},c.prototype.grid=function(){var i,o,f=[];for(i=0;i<this._numRows;i++)for(f.push([]),o=0;o<this._numCols;o++)f[i].push(this.cell(o,i));return this._grid},c.prototype._cell=function(i,o){if(i>=0&&o>=0&&o<this._numRows&&i<this._numCols)return this._grid[o][i]},c.prototype.cell=function(i,o){return M({},this._cell(+i,+o))},c.prototype.cycleCellFlag=function(i,o){var f=this._cell(+i,+o),u=!0;!f||f.state===t.OPEN||this._state===r.WON||this._state===r.LOST||(f.flag===n.NONE?f.flag=n.EXCLAMATION:f.flag===n.EXCLAMATION?f.flag=n.QUESTION:f.flag===n.QUESTION?f.flag=n.NONE:u=!1,u&&this._state===r.PRISTINE&&(this._state=r.IN_PROGRESS),this._updateState())},c.prototype.openCell=function(i,o){var f=this._cell(i,o);!f||f.state===t.OPEN||f.flag!==n.NONE||this._state===r.WON||this._state===r.LOST||(f.state=t.OPEN,f.isMine||(this._floodFill(i+1,o),this._floodFill(i-1,o),this._floodFill(i,o+1),this._floodFill(i,o-1),this._floodFill(i+1,o+1),this._floodFill(i-1,o-1),this._floodFill(i-1,o+1),this._floodFill(i+1,o-1)),this._state===r.PRISTINE&&(this._state=r.IN_PROGRESS),this._updateState())},c.prototype._floodFill=function(i,o){var f=this._cell(i,o);f&&!f.isMine&&f.state===t.CLOSED&&f.flag===n.NONE&&(f.state=t.OPEN,f.numAdjacentMines===0&&(this._floodFill(i+1,o),this._floodFill(i-1,o),this._floodFill(i,o+1),this._floodFill(i,o-1),this._floodFill(i+1,o+1),this._floodFill(i-1,o-1),this._floodFill(i-1,o+1),this._floodFill(i+1,o-1)))},c.prototype._updateState=function(){var i,o,f,u=!0;for(o=0;o<this._numRows;o++)for(i=0;i<this._numCols;i++)if(f=this._cell(i,o),f.state===t.OPEN){if(f.isMine){this._state=r.LOST;return}}else f.state===t.CLOSED&&(f.isMine?f.flag!==n.EXCLAMATION&&(u=!1):u=!1);u&&(this._state=r.WON)};var s=function(i){var o,f,u,a,p,A=[];for(i=i||{},u=i.rows||10,a=i.cols||i.rows||10,p=i.mines||parseInt(u*a*.15,10)||0,f=u*a,o=0;o<f;o++)o<p?A.push(1):A.push(0);return A=m(A),A=F(A,a),A},d=function(i,o,f){var u,a,p=[];for(a=0;a<o;a++)for(p[a]=[],u=0;u<f;u++)p[a][u]=new l(u,a,i[a][u]===1,g(i,u,a));return p},h=function(i,o,f){var u,a,p=0;for(a=0;a<o;a++)for(u=0;u<f;u++)i[a][u]===1&&p++;return p},g=function(i,o,f){var u,a,p=o+1,A=f+1,at=i[0].length,dt=i.length,q=0;for(a=f-1;a<=A;a++)for(u=o-1;u<=p;u++)(a!==f||u!==o)&&a>=0&&u>=0&&a<dt&&u<at&&i[a][u]===1&&q++;return q},L=function(i){var o,f,u,a,p=!0;if(i&&i.length)for(u=i.length,a=i[0]?i[0].length:0,a===0&&(p=!1),o=0;o<u;o++)if(i[o].length!==a)p=!1;else for(f=0;f<a;f++)i[o][f]!==0&&i[o][f]!==1&&(p=!1);else p=!1;return p},m=function(i){for(var o=i.length,f,u;o;)u=Math.floor(Math.random()*o--),f=i[o],i[o]=i[u],i[u]=f;return i},F=function(i,o){var f,u=i.length/o,a=[];for(f=0;f<u;f++)a.push(i.splice(0,o));return a},M=function(i,o){var f={},u;for(u in i)Object.prototype.hasOwnProperty.call(i,u)&&(f[u]=i[u]);for(u in o)Object.prototype.hasOwnProperty.call(o,u)&&(f[u]=o[u]);return f},R={Cell:l,CellStateEnum:t,CellFlagEnum:n,Board:c,BoardStateEnum:r,generateMineArray:s};e.exports=R})()})(ft);var Bt=ft.exports;const N=bt(Bt),ut="data:image/png;base64,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",wt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABxCAYAAAAj+QZ8AAAACXBIWXMAADE2AAAxNgGa50IgAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAA35JREFUeJzt3E1rU0EUxvHn3KQLEbFg24i4Et9wIUKpNQ0tQRHsB6hLt34uV6J+ABG7SJtbW0TrRjfdCiZBUWpBLTUZFyqUWOiJye08M3N+61mc8G9mctN2ZCVvO0ROMrkzX5165nsOjcz3AEfBdXtV3zNoJREEwA3fA2ilEURkFoG81iCGHIHxZrN92fcQGqkEgRMJYttKKAiCONiTCSKBHOzJBAFwZfn1l5O+hzhMSkGysR97130PcZiyduFCrSJFDvK/8rwz2xNsKJdXATwvcp5hBf8OOXassgngu2ZtCOdI8EGmp7EHhze61a4K8tdMPZxa5taVK8cb662Lhc4yJPUZwkyADe1X1lkve9hc63wqdKAhRBEkc+UXXXS1y68x/74hii2rVpv4AOC97zlGIYogACAi2o++1KIJAqc+2KlFE6Rn7xAu37a/bgLY9T3HsKIJsrh4fhfQPiDyiiYIADgg+HMkqiACF/w5EsWD4V8llJ/uud5t33McJBOn+pY5qiC12sQOgGXfcxxkda2jWhfVlhUDC0LGgpCxIGQsCBkLQsaCkLEgZCwIGQtCxoKQsSBkLAgZC0LGgpCxIGQsCBkLQsaCkLEgZCwIGQtCxoKQsSBkLAgZ9V8uruTtpSIHOWpOSq16bTL3PUc/dRAReVzkIEdN0N0CcMn3HP0S3rLkQrPZnvQ9Rb+Eg0Dk99V/VFIOQnmpWdJBAMz5HqBf0kEcMNNocP2PTNJBABwvlVpXfQ+xX+pB4ESozpHkg4AsyCAPhk+KHGTUnHM3AZxSLA0zyPzc1N0iBxm11bX2A0DuKZaeazQ+nq7XJ9uFD6UQ7ZYlyNSXCEjZ0bxL4g3iBrjVgegBkeoz+Ci1WlNvK2c6OwBOHLZW4Op53poudCDR/exHG2RpCd3VHC8huKVYPtOT7FXhQylEu2UBALLwLqOJO0iAt8xFHWQs+7kBgPkS0n9EHaRaPfvZQbZ8zzGIqIP8EdS2FX2QgZ5HCEQfBKWwDvbogyxUK+8AbPueQyvaB8N9ehA8gpNin8RHJIUgWJir3Pc9g1b0W1ZoLAgZC0LGgpCxIGQsCBkLQsaCkLEgZCwIGQtCxoKQsSBkLAgZC0LGgpCxIGQsCBkLQsaCkLEgZCwIGQtCxoKQsSBkLAgZC0LGgpCxIGQsCBkLQsaCkLEgZCwIGQtCxoKQ+QXfhJNkzDzbewAAAABJRU5ErkJggg==";function Qt(e){let t=e[0].numAdjacentMines+"",n;return{c(){n=ot(t)},m(r,l){S(r,n,l)},p(r,l){l&1&&t!==(t=r[0].numAdjacentMines+"")&&At(n,t)},d(r){r&&E(n)}}}function kt(e){let t,n;return{c(){t=G("img"),j(t.src,n=ut)||C(t,"src",n),C(t,"alt",""),Q(t,"width","70%")},m(r,l){S(r,t,l)},p:_,d(r){r&&E(t)}}}function yt(e){let t;function n(c,s){if(c[0].flag===N.CellFlagEnum.EXCLAMATION)return Lt;if(c[0].flag===N.CellFlagEnum.QUESTION)return Gt}let r=n(e),l=r&&r(e);return{c(){l&&l.c(),t=pt()},m(c,s){l&&l.m(c,s),S(c,t,s)},p(c,s){r===(r=n(c))&&l?l.p(c,s):(l&&l.d(1),l=r&&r(c),l&&(l.c(),l.m(t.parentNode,t)))},d(c){l&&l.d(c),c&&E(t)}}}function Gt(e){let t,n;return{c(){t=G("img"),j(t.src,n=wt)||C(t,"src",n),C(t,"alt",""),Q(t,"width","50%")},m(r,l){S(r,t,l)},p:_,d(r){r&&E(t)}}}function Lt(e){let t,n;return{c(){t=G("img"),j(t.src,n=ut)||C(t,"src",n),C(t,"alt",""),Q(t,"width","70%")},m(r,l){S(r,t,l)},p:_,d(r){r&&E(t)}}}function Ft(e){let t,n,r;function l(d,h){return d[0].state===N.CellStateEnum.CLOSED?yt:d[0].isMine?kt:Qt}let c=l(e),s=c(e);return{c(){t=G("div"),s.c(),C(t,"class","svelte-1hcf63t"),Q(t,"background-color",e[0].state===N.CellStateEnum.CLOSED?"var(--p-c)":"transparent")},m(d,h){S(d,t,h),s.m(t,null),n||(r=[W(t,"click",e[1]),W(t,"contextmenu",e[2])],n=!0)},p(d,[h]){c===(c=l(d))&&s?s.p(d,h):(s.d(1),s=c(d),s&&(s.c(),s.m(t,null))),h&1&&Q(t,"background-color",d[0].state===N.CellStateEnum.CLOSED?"var(--p-c)":"transparent")},i:_,o:_,d(d){d&&E(t),s.d(),n=!1,k(r)}}}function Mt(e,t,n){let{cell:r}=t;function l(s){$.call(this,e,s)}function c(s){$.call(this,e,s)}return e.$$set=s=>{"cell"in s&&n(0,r=s.cell)},[r,l,c]}class Rt extends J{constructor(t){super(),H(this,t,Mt,Ft,K,{cell:0})}}function nt(e,t,n){const r=e.slice();return r[3]=t[n],r}function rt(e){let t,n;function r(...c){return e[1](e[3],...c)}function l(){return e[2](e[3])}return t=new Rt({props:{cell:e[3]}}),t.$on("contextmenu",r),t.$on("click",l),{c(){ct(t.$$.fragment)},m(c,s){z(t,c,s),n=!0},p(c,s){e=c;const d={};s&1&&(d.cell=e[3]),t.$set(d)},i(c){n||(w(t.$$.fragment,c),n=!0)},o(c){x(t.$$.fragment,c),n=!1},d(c){D(t,c)}}}function Pt(e){let t,n,r=e[0].grid().flat(),l=[];for(let s=0;s<r.length;s+=1)l[s]=rt(nt(e,r,s));const c=s=>x(l[s],1,1,()=>{l[s]=null});return{c(){t=G("div");for(let s=0;s<l.length;s+=1)l[s].c();C(t,"class","board svelte-t5k4t6"),Q(t,"--boardSize",U)},m(s,d){S(s,t,d);for(let h=0;h<l.length;h+=1)l[h]&&l[h].m(t,null);n=!0},p(s,[d]){if(d&1){r=s[0].grid().flat();let h;for(h=0;h<r.length;h+=1){const g=nt(s,r,h);l[h]?(l[h].p(g,d),w(l[h],1)):(l[h]=rt(g),l[h].c(),w(l[h],1),l[h].m(t,null))}for(Nt(),h=r.length;h<l.length;h+=1)c(h);St()}},i(s){if(!n){for(let d=0;d<r.length;d+=1)w(l[d]);n=!0}},o(s){l=l.filter(Boolean);for(let d=0;d<l.length;d+=1)x(l[d]);n=!1},d(s){s&&E(t),gt(l,s)}}}const U=10;function It(e,t,n){let r=new N.Board(N.generateMineArray({rows:U,cols:U,mines:20}));return[r,(s,d)=>{d.preventDefault(),r.openCell(s.x,s.y),n(0,r)},s=>{r.cycleCellFlag(s.x,s.y),n(0,r)}]}class xt extends J{constructor(t){super(),H(this,t,It,Pt,K,{})}}function Tt(e){let t,n;return t=new xt({}),{c(){ct(t.$$.fragment)},m(r,l){z(t,r,l),n=!0},p:_,i(r){n||(w(t.$$.fragment,r),n=!0)},o(r){x(t.$$.fragment,r),n=!1},d(r){D(t,r)}}}class Xt extends J{constructor(t){super(),H(this,t,null,Tt,K,{})}}new Xt({target:document.getElementById("app")});
