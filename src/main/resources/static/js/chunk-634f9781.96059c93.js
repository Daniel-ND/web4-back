(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-634f9781"],{"057f":function(t,e,r){var n=r("fc6a"),i=r("241c").f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return i(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==o.call(t)?c(t):i(n(t))}},1148:function(t,e,r){"use strict";var n=r("a691"),i=r("1d80");t.exports="".repeat||function(t){var e=String(i(this)),r="",o=n(t);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(e+=e))1&o&&(r+=e);return r}},"1dde":function(t,e,r){var n=r("d039"),i=r("b622"),o=r("2d00"),a=i("species");t.exports=function(t){return o>=51||!n((function(){var e=[],r=e.constructor={};return r[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"25f0":function(t,e,r){"use strict";var n=r("6eeb"),i=r("825a"),o=r("d039"),a=r("ad6d"),c="toString",s=RegExp.prototype,l=s[c],u=o((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),d=l.name!=c;(u||d)&&n(RegExp.prototype,c,(function(){var t=i(this),e=String(t.source),r=t.flags,n=String(void 0===r&&t instanceof RegExp&&!("flags"in s)?a.call(t):r);return"/"+e+"/"+n}),{unsafe:!0})},"3ca3":function(t,e,r){"use strict";var n=r("6547").charAt,i=r("69f3"),o=r("7dd0"),a="String Iterator",c=i.set,s=i.getterFor(a);o(String,"String",(function(t){c(this,{type:a,string:String(t),index:0})}),(function(){var t,e=s(this),r=e.string,i=e.index;return i>=r.length?{value:void 0,done:!0}:(t=n(r,i),e.index+=t.length,{value:t,done:!1})}))},"408a":function(t,e,r){var n=r("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=n(t))throw TypeError("Incorrect invocation");return+t}},"4df4":function(t,e,r){"use strict";var n=r("0366"),i=r("7b0b"),o=r("9bdd"),a=r("e95a"),c=r("50c4"),s=r("8418"),l=r("35a1");t.exports=function(t){var e,r,u,d,f,v,h=i(t),p="function"==typeof this?this:Array,m=arguments.length,g=m>1?arguments[1]:void 0,y=void 0!==g,b=l(h),x=0;if(y&&(g=n(g,m>2?arguments[2]:void 0,2)),void 0==b||p==Array&&a(b))for(e=c(h.length),r=new p(e);e>x;x++)v=y?g(h[x],x):h[x],s(r,x,v);else for(d=b.call(h),f=d.next,r=new p;!(u=f.call(d)).done;x++)v=y?o(d,g,[u.value,x],!0):u.value,s(r,x,v);return r.length=x,r}},"746f":function(t,e,r){var n=r("428f"),i=r("5135"),o=r("e538"),a=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});i(e,t)||a(e,t,{value:o.f(t)})}},"7d8e":function(t,e,r){},"81d5":function(t,e,r){"use strict";var n=r("7b0b"),i=r("23cb"),o=r("50c4");t.exports=function(t){var e=n(this),r=o(e.length),a=arguments.length,c=i(a>1?arguments[1]:void 0,r),s=a>2?arguments[2]:void 0,l=void 0===s?r:i(s,r);while(l>c)e[c++]=t;return e}},8418:function(t,e,r){"use strict";var n=r("c04e"),i=r("9bf2"),o=r("5c6c");t.exports=function(t,e,r){var a=n(e);a in t?i.f(t,a,o(0,r)):t[a]=r}},"99af":function(t,e,r){"use strict";var n=r("23e7"),i=r("d039"),o=r("e8b5"),a=r("861d"),c=r("7b0b"),s=r("50c4"),l=r("8418"),u=r("65f0"),d=r("1dde"),f=r("b622"),v=r("2d00"),h=f("isConcatSpreadable"),p=9007199254740991,m="Maximum allowed index exceeded",g=v>=51||!i((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),y=d("concat"),b=function(t){if(!a(t))return!1;var e=t[h];return void 0!==e?!!e:o(t)},x=!g||!y;n({target:"Array",proto:!0,forced:x},{concat:function(t){var e,r,n,i,o,a=c(this),d=u(a,0),f=0;for(e=-1,n=arguments.length;e<n;e++)if(o=-1===e?a:arguments[e],b(o)){if(i=s(o.length),f+i>p)throw TypeError(m);for(r=0;r<i;r++,f++)r in o&&l(d,f,o[r])}else{if(f>=p)throw TypeError(m);l(d,f++,o)}return d.length=f,d}})},a434:function(t,e,r){"use strict";var n=r("23e7"),i=r("23cb"),o=r("a691"),a=r("50c4"),c=r("7b0b"),s=r("65f0"),l=r("8418"),u=r("1dde"),d=r("ae40"),f=u("splice"),v=d("splice",{ACCESSORS:!0,0:0,1:2}),h=Math.max,p=Math.min,m=9007199254740991,g="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!f||!v},{splice:function(t,e){var r,n,u,d,f,v,y=c(this),b=a(y.length),x=i(t,b),w=arguments.length;if(0===w?r=n=0:1===w?(r=0,n=b-x):(r=w-2,n=p(h(o(e),0),b-x)),b+r-n>m)throw TypeError(g);for(u=s(y,n),d=0;d<n;d++)f=x+d,f in y&&l(u,d,y[f]);if(u.length=n,r<n){for(d=x;d<b-n;d++)f=d+n,v=d+r,f in y?y[v]=y[f]:delete y[v];for(d=b;d>b-n+r;d--)delete y[d-1]}else if(r>n)for(d=b-n;d>x;d--)f=d+n-1,v=d+r-1,f in y?y[v]=y[f]:delete y[v];for(d=0;d<r;d++)y[d+x]=arguments[d+2];return y.length=b-n+r,u}})},a4d3:function(t,e,r){"use strict";var n=r("23e7"),i=r("da84"),o=r("d066"),a=r("c430"),c=r("83ab"),s=r("4930"),l=r("fdbf"),u=r("d039"),d=r("5135"),f=r("e8b5"),v=r("861d"),h=r("825a"),p=r("7b0b"),m=r("fc6a"),g=r("c04e"),y=r("5c6c"),b=r("7c73"),x=r("df75"),w=r("241c"),S=r("057f"),P=r("7418"),_=r("06cf"),O=r("9bf2"),k=r("d1e7"),R=r("9112"),T=r("6eeb"),N=r("5692"),C=r("f772"),L=r("d012"),q=r("90e3"),A=r("b622"),E=r("e538"),V=r("746f"),M=r("d44e"),j=r("69f3"),I=r("b727").forEach,F=C("hidden"),D="Symbol",$="prototype",G=A("toPrimitive"),U=j.set,Y=j.getterFor(D),B=Object[$],H=i.Symbol,J=o("JSON","stringify"),X=_.f,W=O.f,z=S.f,Q=k.f,K=N("symbols"),Z=N("op-symbols"),tt=N("string-to-symbol-registry"),et=N("symbol-to-string-registry"),rt=N("wks"),nt=i.QObject,it=!nt||!nt[$]||!nt[$].findChild,ot=c&&u((function(){return 7!=b(W({},"a",{get:function(){return W(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=X(B,e);n&&delete B[e],W(t,e,r),n&&t!==B&&W(B,e,n)}:W,at=function(t,e){var r=K[t]=b(H[$]);return U(r,{type:D,tag:t,description:e}),c||(r.description=e),r},ct=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof H},st=function(t,e,r){t===B&&st(Z,e,r),h(t);var n=g(e,!0);return h(r),d(K,n)?(r.enumerable?(d(t,F)&&t[F][n]&&(t[F][n]=!1),r=b(r,{enumerable:y(0,!1)})):(d(t,F)||W(t,F,y(1,{})),t[F][n]=!0),ot(t,n,r)):W(t,n,r)},lt=function(t,e){h(t);var r=m(e),n=x(r).concat(ht(r));return I(n,(function(e){c&&!dt.call(r,e)||st(t,e,r[e])})),t},ut=function(t,e){return void 0===e?b(t):lt(b(t),e)},dt=function(t){var e=g(t,!0),r=Q.call(this,e);return!(this===B&&d(K,e)&&!d(Z,e))&&(!(r||!d(this,e)||!d(K,e)||d(this,F)&&this[F][e])||r)},ft=function(t,e){var r=m(t),n=g(e,!0);if(r!==B||!d(K,n)||d(Z,n)){var i=X(r,n);return!i||!d(K,n)||d(r,F)&&r[F][n]||(i.enumerable=!0),i}},vt=function(t){var e=z(m(t)),r=[];return I(e,(function(t){d(K,t)||d(L,t)||r.push(t)})),r},ht=function(t){var e=t===B,r=z(e?Z:m(t)),n=[];return I(r,(function(t){!d(K,t)||e&&!d(B,t)||n.push(K[t])})),n};if(s||(H=function(){if(this instanceof H)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=q(t),r=function(t){this===B&&r.call(Z,t),d(this,F)&&d(this[F],e)&&(this[F][e]=!1),ot(this,e,y(1,t))};return c&&it&&ot(B,e,{configurable:!0,set:r}),at(e,t)},T(H[$],"toString",(function(){return Y(this).tag})),T(H,"withoutSetter",(function(t){return at(q(t),t)})),k.f=dt,O.f=st,_.f=ft,w.f=S.f=vt,P.f=ht,E.f=function(t){return at(A(t),t)},c&&(W(H[$],"description",{configurable:!0,get:function(){return Y(this).description}}),a||T(B,"propertyIsEnumerable",dt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:H}),I(x(rt),(function(t){V(t)})),n({target:D,stat:!0,forced:!s},{for:function(t){var e=String(t);if(d(tt,e))return tt[e];var r=H(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(d(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),n({target:"Object",stat:!0,forced:!s,sham:!c},{create:ut,defineProperty:st,defineProperties:lt,getOwnPropertyDescriptor:ft}),n({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:vt,getOwnPropertySymbols:ht}),n({target:"Object",stat:!0,forced:u((function(){P.f(1)}))},{getOwnPropertySymbols:function(t){return P.f(p(t))}}),J){var pt=!s||u((function(){var t=H();return"[null]"!=J([t])||"{}"!=J({a:t})||"{}"!=J(Object(t))}));n({target:"JSON",stat:!0,forced:pt},{stringify:function(t,e,r){var n,i=[t],o=1;while(arguments.length>o)i.push(arguments[o++]);if(n=e,(v(e)||void 0!==t)&&!ct(t))return f(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!ct(e))return e}),i[1]=e,J.apply(null,i)}})}H[$][G]||R(H[$],G,H[$].valueOf),M(H,D),L[F]=!0},a630:function(t,e,r){var n=r("23e7"),i=r("4df4"),o=r("1c7e"),a=!o((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:a},{from:i})},a8d6:function(t,e,r){"use strict";var n=r("7d8e"),i=r.n(n);i.a},b680:function(t,e,r){"use strict";var n=r("23e7"),i=r("a691"),o=r("408a"),a=r("1148"),c=r("d039"),s=1..toFixed,l=Math.floor,u=function(t,e,r){return 0===e?r:e%2===1?u(t,e-1,r*t):u(t*t,e/2,r)},d=function(t){var e=0,r=t;while(r>=4096)e+=12,r/=4096;while(r>=2)e+=1,r/=2;return e},f=s&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!c((function(){s.call({})}));n({target:"Number",proto:!0,forced:f},{toFixed:function(t){var e,r,n,c,s=o(this),f=i(t),v=[0,0,0,0,0,0],h="",p="0",m=function(t,e){var r=-1,n=e;while(++r<6)n+=t*v[r],v[r]=n%1e7,n=l(n/1e7)},g=function(t){var e=6,r=0;while(--e>=0)r+=v[e],v[e]=l(r/t),r=r%t*1e7},y=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==v[t]){var r=String(v[t]);e=""===e?r:e+a.call("0",7-r.length)+r}return e};if(f<0||f>20)throw RangeError("Incorrect fraction digits");if(s!=s)return"NaN";if(s<=-1e21||s>=1e21)return String(s);if(s<0&&(h="-",s=-s),s>1e-21)if(e=d(s*u(2,69,1))-69,r=e<0?s*u(2,-e,1):s/u(2,e,1),r*=4503599627370496,e=52-e,e>0){m(0,r),n=f;while(n>=7)m(1e7,0),n-=7;m(u(10,n,1),0),n=e-1;while(n>=23)g(1<<23),n-=23;g(1<<n),m(1,1),g(2),p=y()}else m(0,r),m(1<<-e,0),p=y()+a.call("0",f);return f>0?(c=p.length,p=h+(c<=f?"0."+a.call("0",f-c)+p:p.slice(0,c-f)+"."+p.slice(c-f))):p=h+p,p}})},cb29:function(t,e,r){var n=r("23e7"),i=r("81d5"),o=r("44d2");n({target:"Array",proto:!0},{fill:i}),o("fill")},d28b:function(t,e,r){var n=r("746f");n("iterator")},ddb0:function(t,e,r){var n=r("da84"),i=r("fdbc"),o=r("e260"),a=r("9112"),c=r("b622"),s=c("iterator"),l=c("toStringTag"),u=o.values;for(var d in i){var f=n[d],v=f&&f.prototype;if(v){if(v[s]!==u)try{a(v,s,u)}catch(p){v[s]=u}if(v[l]||a(v,l,d),i[d])for(var h in o)if(v[h]!==o[h])try{a(v,h,o[h])}catch(p){v[h]=o[h]}}}},e01a:function(t,e,r){"use strict";var n=r("23e7"),i=r("83ab"),o=r("da84"),a=r("5135"),c=r("861d"),s=r("9bf2").f,l=r("e893"),u=o.Symbol;if(i&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var d={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof f?new u(t):void 0===t?u():u(t);return""===t&&(d[e]=!0),e};l(f,u);var v=f.prototype=u.prototype;v.constructor=f;var h=v.toString,p="Symbol(test)"==String(u("test")),m=/^Symbol\((.*)\)[^)]+$/;s(v,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,e=h.call(t);if(a(d,t))return"";var r=p?e.slice(7,-1):e.replace(m,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:f})}},e538:function(t,e,r){var n=r("b622");e.f=n},e5ee:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{attrs:{id:"header"}}),r("div",{attrs:{id:"main"}},[r("div",{attrs:{id:"leftSidebar"}},[r("canvas",{attrs:{id:"canvas",width:"300",height:"300"},on:{click:t.addPointFromCanvas}}),r("div",{staticClass:"selection"},[r("form",{on:{submit:function(e){return e.preventDefault(),t.addPoint(e)}}},[r("ul",[r("li",[t._v("Select values")]),r("li",[t._v(" X: "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.x,expression:"x"}],attrs:{type:"radio",id:"x-5",value:"-5"},domProps:{checked:t._q(t.x,"-5")},on:{change:function(e){t.x="-5"}}}),r("label",{attrs:{for:"x-5"}},[t._v("-5")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.x,expression:"x"}],attrs:{type:"radio",id:"x-4",value:"-4"},domProps:{checked:t._q(t.x,"-4")},on:{change:function(e){t.x="-4"}}}),r("label",{attrs:{for:"x-4"}},[t._v("-4")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.x,expression:"x"}],attrs:{type:"radio",id:"x-3",value:"-3"},domProps:{checked:t._q(t.x,"-3")},on:{change:function(e){t.x="-3"}}}),r("label",{attrs:{for:"x-3"}},[t._v("-3")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.x,expression:"x"}],attrs:{type:"radio",id:"x-2",value:"-2"},domProps:{checked:t._q(t.x,"-2")},on:{change:function(e){t.x="-2"}}}),r("label",{attrs:{for:"x-2"}},[t._v("-2")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.x,expression:"x"}],attrs:{type:"radio",id:"x-1",value:"-1"},domProps:{checked:t._q(t.x,"-1")},on:{change:function(e){t.x="-1"}}}),r("label",{attrs:{for:"x-1"}},[t._v("-1")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.x,expression:"x"}],attrs:{type:"radio",id:"x0",value:"0"},domProps:{checked:t._q(t.x,"0")},on:{change:function(e){t.x="0"}}}),r("label",{attrs:{for:"x0"}},[t._v("0")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.x,expression:"x"}],attrs:{type:"radio",id:"x1",value:"1"},domProps:{checked:t._q(t.x,"1")},on:{change:function(e){t.x="1"}}}),r("label",{attrs:{for:"x1"}},[t._v("1")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.x,expression:"x"}],attrs:{type:"radio",id:"x2",value:"2"},domProps:{checked:t._q(t.x,"2")},on:{change:function(e){t.x="2"}}}),r("label",{attrs:{for:"x2"}},[t._v("2")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.x,expression:"x"}],attrs:{type:"radio",id:"x3",value:"3"},domProps:{checked:t._q(t.x,"3")},on:{change:function(e){t.x="3"}}}),r("label",{attrs:{for:"x3"}},[t._v("3")])]),r("li",[r("label",{attrs:{for:"y"}},[t._v("Y:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.y,expression:"y"}],attrs:{type:"text",id:"y",step:.001,maxlength:"4",placeholder:"-3...3",autocomplete:"off"},domProps:{value:t.y},on:{change:t.validateY,input:function(e){e.target.composing||(t.y=e.target.value)}}})]),r("li",[t._v(" R: "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.r,expression:"r"}],attrs:{type:"radio",id:"r-5",value:"-5"},domProps:{checked:t._q(t.r,"-5")},on:{change:[function(e){t.r="-5"},function(e){return t.changeR()}]}}),r("label",{attrs:{for:"r-5"}},[t._v("-5")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.r,expression:"r"}],attrs:{type:"radio",id:"r-4",value:"-4"},domProps:{checked:t._q(t.r,"-4")},on:{change:[function(e){t.r="-4"},function(e){return t.changeR()}]}}),r("label",{attrs:{for:"r-4"}},[t._v("-4")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.r,expression:"r"}],attrs:{type:"radio",id:"r-3",value:"-3"},domProps:{checked:t._q(t.r,"-3")},on:{change:[function(e){t.r="-3"},function(e){return t.changeR()}]}}),r("label",{attrs:{for:"r-3"}},[t._v("-3")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.r,expression:"r"}],attrs:{type:"radio",id:"r-2",value:"-2"},domProps:{checked:t._q(t.r,"-2")},on:{change:[function(e){t.r="-2"},function(e){return t.changeR()}]}}),r("label",{attrs:{for:"r-2"}},[t._v("-2")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.r,expression:"r"}],attrs:{type:"radio",id:"r-1",value:"-1"},domProps:{checked:t._q(t.r,"-1")},on:{change:[function(e){t.r="-1"},function(e){return t.changeR()}]}}),r("label",{attrs:{for:"r-1"}},[t._v("-1")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.r,expression:"r"}],attrs:{type:"radio",id:"r0",value:"0"},domProps:{checked:t._q(t.r,"0")},on:{change:[function(e){t.r="0"},function(e){return t.changeR()}]}}),r("label",{attrs:{for:"r0"}},[t._v("0")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.r,expression:"r"}],attrs:{type:"radio",id:"r1",value:"1"},domProps:{checked:t._q(t.r,"1")},on:{change:[function(e){t.r="1"},function(e){return t.changeR()}]}}),r("label",{attrs:{for:"r1"}},[t._v("1")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.r,expression:"r"}],attrs:{type:"radio",id:"r2",value:"2"},domProps:{checked:t._q(t.r,"2")},on:{change:[function(e){t.r="2"},function(e){return t.changeR()}]}}),r("label",{attrs:{for:"r2"}},[t._v("2")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.r,expression:"r"}],attrs:{type:"radio",id:"r3",value:"3"},domProps:{checked:t._q(t.r,"3")},on:{change:[function(e){t.r="3"},function(e){return t.changeR()}]}}),r("label",{attrs:{for:"r3"}},[t._v("3")])]),t._m(0)])])])]),r("div",{attrs:{id:"rightSidebar"}},[r("table",{staticClass:"results"},[t._m(1),t.listOfPoints.length?r("tbody",t._l(t.listOfPoints,(function(e){return r("tr",{key:e},[r("td",[t._v(t._s(e.x))]),r("td",[t._v(t._s(e.y))]),r("td",[t._v(t._s(e.r))]),e.result?r("td",{staticClass:"green"},[t._v("IN")]):r("td",{staticClass:"red"},[t._v("OUT")])])})),0):r("tbody",[t._m(2)])])])]),r("div",{attrs:{id:"footer"}},[r("a",{staticClass:"logout",attrs:{href:"/"},on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[t._v("LOGOUT")])])])},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("input",{attrs:{type:"submit",value:"check"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",[t._v("X")]),r("th",[t._v("Y")]),r("th",[t._v("R")]),r("th",[t._v("Res")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("td",{attrs:{colspan:"4"}},[t._v("NO DATA")])])}];r("a4d3"),r("e01a"),r("d28b"),r("99af"),r("cb29"),r("a434"),r("b680"),r("d3b7"),r("ac1f"),r("3ca3"),r("466d"),r("ddb0");function o(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}r("a630"),r("e260"),r("25f0");function a(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function s(t){return o(t)||a(t)||c()}var l={data:function(){return{x:"",r:1,y:"",xValid:!0,yValid:!0,rValid:!0,response:null,listOfPoints:[]}},methods:{changeR:function(){this.r<=0?this.rValid=!1:(console.log("change R "),this.drawCanvas())},validateY:function(){this.y.match(/(0|[1-9][0-9]*)(\.[0-9]+)?/)&&(this.yValid=this.y>-3&&this.y<3)},logout:function(){localStorage.removeItem("currentUser"),this.$router.push("/")},getPointsRequest:function(){var t=this,e=localStorage.getItem("currentUser");return console.log("TRYING"),this.$axios({method:"post",url:this.$URL+"getPoints",headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json",Authorization:"Bearer "+e}}).then((function(e){var r;(console.log("Я хочу обработать, полученные точки"),e.data.length)&&(r=t.listOfPoints).splice.apply(r,[0,t.listOfPoints.length].concat(s(e.data)))})).catch((function(t){console.log(t.response.data)}))},addPointRequest:function(t,e,r){var n=this,i=localStorage.getItem("currentUser");return this.$axios({method:"post",url:this.$URL+"addPoint",headers:{"Content-Type":"application/json",Authorization:"Bearer "+i},data:{x:t,y:e,r:r}}).then((function(i){var o=i.data.res;n.drawDefinedPoint(t,e,o),n.listOfPoints.unshift({x:t,y:e,r:r,result:o}),n.response=i})).catch((function(t){return console.log(t.response.data),!1}))},addPointFromCanvas:function(t){var e=this.getPointCoordinates(t);this.rValid?(console.log(e.x+" "+e.y+" "+this.r),this.addPointRequest(e.x,e.y,this.r)):alert("R is incorrect")},addPoint:function(){null==this.x&&(this.xValid=!1),null==this.y&&(this.yValid=!1),(null==this.r||this.r<=0)&&(this.rValid=!1),this.xValid||alert("X is incorrect"),this.yValid||alert("Y is incorrect"),this.rValid||alert("R is incorrect"),this.xValid&&this.yValid&&this.rValid&&this.addPointRequest(this.x,this.y,this.r)},drawDefinedPoint:function(t,e,r){var n=document.querySelector("#canvas"),i=n.getContext("2d");i.beginPath(),t=t/this.r*100+150,e=300-(e/this.r*100+150),i.arc(t,e,2,0,2*Math.PI),i.fillStyle=r?"rgba(255,240,245,0.98)":"#d50c11",i.fill()},getPointCoordinates:function(t){return{x:((t.offsetX-150)/100*this.r).toFixed(2),y:(-(t.offsetY-150)/100*this.r).toFixed(2)}},checkArea:function(t,e,r){return t<=r&&t>=0&&e>=-r/2&&e<=0||e<=2*-t+r&&e>=0&&t>=0||t*t+e*e<=r*r&&t<=0&&e<=0},reDrawCanvas:function(){var t=document.getElementById("plot"),e=t.getContext("2d");e.clearRect(0,0,t.width,t.height),this.drawCanvas()},drawCanvas:function(){console.log("lets draw canvas!!");var t=document.querySelector("#canvas"),e=t.getContext("2d");e.clearRect(0,0,300,300),e.fillStyle="#95a3b3",e.fillRect(150,50,100,100),e.beginPath(),e.arc(150,150,50,Math.PI,Math.PI+.5*Math.PI),e.lineTo(150,150),e.fill(),e.closePath(),e.beginPath(),e.lineTo(50,150),e.lineTo(150,200),e.lineTo(150,150),e.fill(),e.closePath(),e.strokeStyle="black",e.lineWidth=.5,e.beginPath(),e.moveTo(150,0),e.lineTo(150,300),e.closePath(),e.stroke(),e.beginPath(),e.moveTo(0,150),e.lineTo(300,150),e.closePath(),e.stroke();var r=!0,n=!1,i=void 0;try{for(var o,a=this.listOfPoints[Symbol.iterator]();!(r=(o=a.next()).done);r=!0){var c=o.value,s=this.checkArea(c.x,c.y,this.r);this.drawDefinedPoint(c.x,c.y,s)}}catch(l){n=!0,i=l}finally{try{r||null==a.return||a.return()}finally{if(n)throw i}}}},mounted:function(){var t=this;this.getPointsRequest().then((function(){t.$nextTick((function(){t.drawCanvas()}))}))}},u=l,d=(r("a8d6"),r("2877")),f=Object(d["a"])(u,n,i,!1,null,null,null);e["default"]=f.exports},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-634f9781.96059c93.js.map