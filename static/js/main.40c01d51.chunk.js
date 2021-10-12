(this["webpackJsonpelementary-cellular-automaton"]=this["webpackJsonpelementary-cellular-automaton"]||[]).push([[0],{23:function(t,e,n){},27:function(t,e,n){"use strict";n.r(e);var r,a,c,i,o,u,l=n(0),s=n.n(l),b=n(13),j=n.n(b),d=(n(23),n(9)),f=n(2),h=n(5),v=n(14),O=n(15),x=function(){function t(){Object(v.a)(this,t)}return Object(O.a)(t,null,[{key:"paddBinary",value:function(t,e){var n=t.length;return"0".repeat(e-n)+t}},{key:"getBinary",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8;return t.paddBinary(e.toString(2),n)}},{key:"genTable",value:function(e){for(var n=t.getBinary(e),r={},a=0;a<=7;a++)r[this.getBinary(7-a,3)]=n[a];return r}},{key:"getPrevtState",value:function(t){return[0,0].concat(Object(h.a)(t[t.length-1]),[0,0])}},{key:"shouldProcessNextState",value:function(t,e){return t.length===e}},{key:"addRow",value:function(t,e){e(t+1)}},{key:"getNewState",value:function(e,n){for(var r=t.getPrevtState(e),a=[],c=1;c<r.length-1;c++)a.push(parseInt(n[function(t,e){return[e[t-1],e[t],e[t+1]].join("")}(c,r)]));return a}},{key:"addNewState",value:function(e,n){return[].concat(Object(h.a)(e),[t.getNewState(e,n)])}},{key:"nextState",value:function(e,n,r,a){return t.addRow(r,a),t.shouldProcessNextState(e,r)?t.addNewState(e,n):e}},{key:"prevState",value:function(t,e,n){return e?(n(e-1),t.pop(),t):t}},{key:"initStates",value:function(e,n){for(var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[[1]],a=Object(h.a)(r),c=1;c<n;c++)a=t.addNewState(a,e);return a}}]),t}(),p=x,g=function(t){var e=t.rule,n=t.row,r=Object(l.useState)(p.genTable(e)),a=Object(f.a)(r,2),c=a[0],i=a[1],o=Object(l.useState)(n),u=Object(f.a)(o,2),s=u[0],b=u[1],j=Object(l.useState)(p.initStates(c,s)),d=Object(f.a)(j,2),h=d[0],v=d[1];return[h,{nextState:function(){var t=p.nextState(h,c,s,b);v(t)},prevState:function(){var t=p.prevState(h,s,b);v(t)},setRule:function(t){var e=p.genTable(t),n=p.initStates(e,s);i(e),v(n)}}]},m=n(3),w=n(4),S=w.a.button(r||(r=Object(m.a)(["\n\ttransition: 0.25s;\n\tcolor: black;\n\tbackground-color: #F5F5F5;\n\tborder: none;\n\tborder-radius: 10px;\n\ttransform: scale(1);\n\t&:hover {\n\t\tcursor: pointer;\n\t\ttransform: scale(1.25);\n\t}\n"]))),y=w.a.div(a||(a=Object(m.a)(["\n\theight: ","vh;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\t","\n\t","\n\n"])),(function(t){return t.height||1}),(function(t){return t.scroll&&"overflow: auto;"}),(function(t){return t.scroll&&"box-sizing: border-box;"})),k=w.a.input(c||(c=Object(m.a)(["\n    transition: 0.1s;\n    border: none;\n    border-bottom: 0.5px solid black;\n    text-align: center;\n    width: 3%;\n    font-family: 'Courier New', Courier, monospace;\n    &:focus {\n        outline: none;\n        border-bottom: 2px solid red;\n    }\n"]))),B=w.a.div(i||(i=Object(m.a)(["\n\tbackground-color: rgba(255, 255, 255, 0.9);\n\twidth: 100%;\n\tdisplay: flex;\n\tflex-direction: row;\n\tflex-wrap: wrap;\n\tjustify-content: center;\n\t","\n\t","\n\n"])),(function(t){return t.overflow&&"min-width: 100%;"}),(function(t){return t.overflow&&"width: max-content;"})),C=w.a.div(o||(o=Object(m.a)(["\n\tbackground-color: ",";\n\twidth: ","px;\n\theight: ","px;\n\tmargin: 0px 0px 0px 0px;\n\tpadding: 0px 0px 0px 0px;\n\t","\n"])),(function(t){return t.active?"black":"white"}),(function(t){return t.length||10}),(function(t){return t.length||10}),(function(t){return t.border&&"border: 0.125px solid black;"})),N=n(1),F=function(t){var e=t.isActive,n=t.length,r=t.border;return Object(N.jsx)(C,{active:e,length:n,border:r})},I={width:"10%",height:"30%",display:"flex",flexDirection:"column"},P=function(t){var e=t.prevStates,n=t.newState,r=function(t){return Object(N.jsx)(F,{isActive:Boolean(parseInt(t)),border:!0})};return Object(N.jsxs)("div",{style:I,children:[Object(N.jsx)(B,{children:e.map((function(t){return r(t)}))}),Object(N.jsx)(B,{children:r(n)})]})},R=w.a.span(u||(u=Object(m.a)(["\n    font-family: 'Courier New', Courier, monospace;\n    margin-right: 1%;\n    margin-left: 1%;\n"])));function T(t){return Boolean(/^\d+$/.exec(t))}function z(t){for(var e=p.genTable(t),n=[],r=7;r>=0;r--){var a=[],c=p.getBinary(r,3);a.push(c),a.push(e[c]),n.push(a)}return n}var E=function(t){var e=t.onNext,n=t.onPrev,r=t.onUpdate,a=t.onRule,c=Object(l.useState)(t.row),i=Object(f.a)(c,2),o=i[0],u=i[1],s=Object(l.useState)(t.dir),b=Object(f.a)(s,2),j=b[0],d=b[1],v=Object(l.useState)(t.rule),O=Object(f.a)(v,2),x=O[0],p=O[1],g=Object(l.useState)(t.size),m=Object(f.a)(g,2),w=m[0],C=m[1];return Object(l.useEffect)((function(){r({row:o,rule:x,size:w,dir:j})}),[o,x,w,j]),Object(l.useEffect)((function(){a(x)}),[x]),Object(N.jsxs)(y,{height:15,style:{marginTop:"1.5%"},children:[Object(N.jsxs)(B,{style:{marginBottom:"1%"},children:[Object(N.jsx)(R,{children:"RULE"}),Object(N.jsx)(k,{onChange:function(t){var e=t.target.value.trim();e||p(0),T(e)&&e>=0&&e<=255&&p(parseInt(e))},value:x}),Object(N.jsx)(R,{children:" | "}),Object(N.jsx)(S,{onClick:function(){u(o-1?o-1:1),n()},children:"\ud83d\udc48"}),Object(N.jsx)(R,{children:o}),Object(N.jsx)(S,{onClick:function(){u(o+1),e()},children:"\ud83d\udc49"}),Object(N.jsx)(R,{children:" | "}),Object(N.jsx)(R,{children:"SIZE"}),Object(N.jsx)(k,{onChange:function(t){var e=t.target.value.trim();e||C(1),T(e)&&C(e>0?parseInt(e):w)},value:w}),Object(N.jsx)(R,{children:" | "}),Object(N.jsx)(S,{onClick:function(){d("rtl"===j?"ltr":"rtl")},children:j.toUpperCase()})]}),Object(N.jsx)(B,{style:{marginBottom:"1%",width:"45%"},children:z(x).map((function(t){var e=Object(f.a)(t,2),n=e[0],r=e[1];return Object(N.jsx)(P,{prevStates:Object(h.a)(n),newState:r})}))}),Object(N.jsxs)(B,{style:{marginBottom:"1%",width:"30%",justifyContent:"space-evenly"},children:[Object(N.jsx)("a",{target:"_blank",href:"",children:"GitHub"}),Object(N.jsx)("a",{target:"_blank",href:"https://www.linkedin.com/in/mhyrzt/",children:"LinkedIn"})]})]})},L=function(t){var e=t.cells,n=t.size,r=t.dir;return Object(N.jsx)(y,{height:80,scroll:!0,style:{direction:r},children:e.map((function(t,e){return Object(N.jsx)(B,{overflow:!0,children:t.map((function(t,e){return Object(N.jsx)(F,{length:n,isActive:Boolean(t)},e)}))},e)}))})};var U=function(){var t=Object(l.useState)({rule:30,row:275,size:2,dir:"rtl"}),e=Object(f.a)(t,2),n=e[0],r=e[1],a=g(n),c=Object(f.a)(a,2),i=c[0],o=c[1],u=o.nextState,s=o.prevState,b=o.setRule;return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(L,Object(d.a)({cells:i},n)),Object(N.jsx)(E,Object(d.a)(Object(d.a)({},n),{},{onNext:u,onPrev:s,onRule:b,onUpdate:r}))]})},A=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),r(t),a(t),c(t),i(t)}))};j.a.render(Object(N.jsx)(s.a.StrictMode,{children:Object(N.jsx)(U,{})}),document.getElementById("root")),A()}},[[27,1,2]]]);
//# sourceMappingURL=main.40c01d51.chunk.js.map