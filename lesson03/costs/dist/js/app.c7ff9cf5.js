(function(){"use strict";var t={9583:function(t,e,n){var s=n(6369),a=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("h2",[t._v("My personal costs")]),e("div",{staticClass:"payments"},[e("ShowFormButton",{on:{chengeFormVisible:t.chengeFormVisible}}),e("AddPaymentForm",{staticClass:"addForm",attrs:{visible:t.formVisible},on:{addNewPayment:t.addNewPayment}}),e("PaymentsDisplay",{staticClass:"paymentList",attrs:{items:t.paymentsList}})],1)])},i=[],o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"list"},[t._m(0),t._l(t.items,(function(n,s){return e("div",{key:s,staticClass:"list__item"},[e("span",{staticClass:"list__number"},[t._v(t._s(s+1))]),e("span",{staticClass:"list__date"},[t._v(t._s(n.date))]),e("span",{staticClass:"list__category"},[t._v(t._s(n.type))]),e("span",{staticClass:"list__value"},[t._v(t._s(n.amount))])])}))],2)},r=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"list__item"},[e("span",{staticClass:"list__number"},[e("b",[t._v("#")])]),e("span",{staticClass:"list__date"},[e("b",[t._v("Date")])]),e("span",{staticClass:"list__category"},[e("b",[t._v("Category")])]),e("span",{staticClass:"list__value"},[e("b",[t._v("Value")])])])}],l={name:"PaymentsDisplay",props:{items:{type:Array,default(){return[]}}},data(){return{}}},u=l,c=n(1001),d=(0,c.Z)(u,o,r,!1,null,null,null),m=d.exports,p=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"form"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],attrs:{placeholder:"Payment description"},domProps:{value:t.type},on:{input:function(e){e.target.composing||(t.type=e.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],attrs:{placeholder:"Payment amount"},domProps:{value:t.amount},on:{input:function(e){e.target.composing||(t.amount=e.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.date,expression:"date"}],attrs:{placeholder:"Payment date"},domProps:{value:t.date},on:{input:function(e){e.target.composing||(t.date=e.target.value)}}}),e("button",{staticClass:"form__addBtn",on:{click:t.onAddClick}},[t._v("ADD")])])},v=[],f={name:"AddPaymentForm",props:{visible:{type:Boolean,default(){return!1}}},data(){return{amount:"",type:"",date:""}},methods:{onAddClick(){const t=/^\d+$/,e=/^\d{2}.\d{2}.\d{4}$/;if(!t.test(this.amount))return void alert("Сумма должна быть задана числом!");if(!e.test(this.date)&&this.date)return void alert("Дата должна быть задана в формате: 'дд.мм.гггг'!");const n={amount:+this.amount,type:this.type,date:this.date||this.getCurrenrDate};this.$emit("addNewPayment",n)}},computed:{getCurrenrDate(){const t=new Date,e=t.getDate(),n=t.getMonth()+1,s=t.getFullYear();return`${e}.${n}.${s}`}}},h=f,_=(0,c.Z)(h,p,v,!1,null,null,null),y=_.exports,b=function(){var t=this,e=t._self._c;return e("div",{staticClass:"showBtn"},[e("button",{staticClass:"showBtn__button",on:{click:t.onShowClick}},[t._v("ADD NEW COST")])])},g=[],C={name:"ShowFormButton",data(){return{}},methods:{onShowClick(){this.$emit("chengeFormVisible")}}},w=C,P=(0,c.Z)(w,b,g,!1,null,null,null),k=P.exports,F={name:"App",components:{PaymentsDisplay:m,AddPaymentForm:y,ShowFormButton:k},data(){return{paymentsList:[],formVisible:!1}},methods:{addNewPayment(t){this.paymentsList=[...this.paymentsList,t]},chengeFormVisible(){this.formVisible=!this.formVisible,console.log("click")}}},x=F,D=(0,c.Z)(x,a,i,!1,null,null,null),O=D.exports;s.ZP.config.productionTip=!1,new s.ZP({render:t=>t(O)}).$mount("#app")}},e={};function n(s){var a=e[s];if(void 0!==a)return a.exports;var i=e[s]={exports:{}};return t[s](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,s,a,i){if(!s){var o=1/0;for(c=0;c<t.length;c++){s=t[c][0],a=t[c][1],i=t[c][2];for(var r=!0,l=0;l<s.length;l++)(!1&i||o>=i)&&Object.keys(n.O).every((function(t){return n.O[t](s[l])}))?s.splice(l--,1):(r=!1,i<o&&(o=i));if(r){t.splice(c--,1);var u=a();void 0!==u&&(e=u)}}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[s,a,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,s){var a,i,o=s[0],r=s[1],l=s[2],u=0;if(o.some((function(e){return 0!==t[e]}))){for(a in r)n.o(r,a)&&(n.m[a]=r[a]);if(l)var c=l(n)}for(e&&e(s);u<o.length;u++)i=o[u],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(c)},s=self["webpackChunkcosts"]=self["webpackChunkcosts"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(9583)}));s=n.O(s)})();
//# sourceMappingURL=app.c7ff9cf5.js.map