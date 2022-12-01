(function(){"use strict";var t={7868:function(t,e,a){var s=a(6369),n=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("HomeView")],1)},i=[],r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("h2",[t._v("My personal costs")]),e("div",{staticClass:"payments"},[e("ShowFormButton",{on:{chengeFormVisible:t.chengeFormVisible}}),e("AddPaymentForm",{staticClass:"addForm",attrs:{visible:t.formVisible},on:{addNewPayment:t.addNewPayment,closeForm:t.closeForm}}),e("PaymentsDisplay",{staticClass:"paymentList",attrs:{items:t.paymentsList}})],1)])},o=[],c=(a(7658),function(){var t=this,e=t._self._c;return e("div",{staticClass:"list"},[t._m(0),t._l(t.items,(function(a,s){return e("div",{directives:[{name:"show",rawName:"v-show",value:s>=t.minIndex&&s<=t.maxIndex,expression:"index >= minIndex && index <= maxIndex"}],key:s,staticClass:"list__item"},[e("span",{staticClass:"list__number"},[t._v(t._s(s+1))]),e("span",{staticClass:"list__date"},[t._v(t._s(a.date))]),e("span",{staticClass:"list__category"},[t._v(t._s(a.category))]),e("span",{staticClass:"list__value"},[t._v(t._s(a.value))])])})),e("NavPaginator",{staticClass:"navPaginator",attrs:{pagesNum:t.pagesNum,itemsNum:t.itemsNum,recordsInPage:t.recordsInPage},on:{changePage:t.changePage}})],2)}),u=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"list__item"},[e("span",{staticClass:"list__number"},[e("b",[t._v("#")])]),e("span",{staticClass:"list__date"},[e("b",[t._v("Date")])]),e("span",{staticClass:"list__category"},[e("b",[t._v("Category")])]),e("span",{staticClass:"list__value"},[e("b",[t._v("Value")])])])}],l=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.pagesNum>1,expression:"pagesNum > 1"}],staticClass:"paginator"},[e("span",{staticClass:"paginator__page",on:{click:t.onPrevPageClick}},[t._v("<")]),t._l(t.pagesNum,(function(a){return e("span",{key:a,staticClass:"paginator__page",on:{click:function(e){return t.onPageClick(a)}}},[t._v(t._s(a))])})),e("span",{staticClass:"paginator__page",on:{click:t.onNextPageClick}},[t._v(">")])],2)},m=[],d={name:"NavPaginator",props:{pagesNum:{type:Number,default(){return 1}},recordsInPage:{type:Number,default(){return 1}},itemsNum:{type:Number,default(){return 0}}},watch:{itemsNum:function(){this.isUpdated&&(this.currentPage=this.pagesNum,this.pageFocus())}},data(){return{container:null,currentPage:1,lastPage:!1,isUpdated:!1}},methods:{pageFocus(){const t=this.container.querySelectorAll(".paginator__page");for(const e of t)e.classList.remove("selectPage");this.container.querySelector(`.paginator__page:nth-child(${this.currentPage+1})`).classList.add("selectPage")},onPageClick(t){this.currentPage=t,this.pageFocus(),this.$emit("changePage",this.currentPage)},onPrevPageClick(){this.currentPage>1&&(this.currentPage--,this.pageFocus(),this.$emit("changePage",this.currentPage))},onNextPageClick(){this.currentPage<this.pagesNum&&(this.currentPage++,this.pageFocus(),this.$emit("changePage",this.currentPage))}},mounted(){this.container=document.querySelector(".paginator")},updated(){this.currentPage=this.pagesNum,this.pageFocus(),this.isUpdated=!0}},g=d,p=a(1001),h=(0,p.Z)(g,l,m,!1,null,null,null),v=h.exports,f={name:"PaymentsDisplay",components:{NavPaginator:v},props:{},watch:{items:function(){this.currentPage=this.pagesNum}},data(){return{currentPage:1,recordsInPage:3}},methods:{changePage(t){this.currentPage=t}},computed:{minIndex(){return(this.currentPage-1)*this.recordsInPage},maxIndex(){return this.minIndex+this.recordsInPage-1},pagesNum(){return Math.ceil(this.items.length/this.recordsInPage)},itemsNum(){return this.items.length},items(){return this.$store.getters.getPaymentsList}}},_=f,P=(0,p.Z)(_,c,u,!1,null,null,null),y=P.exports,C=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"form"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.category,expression:"category"}],staticClass:"form__select",attrs:{name:"category",onfocus:'style="color: black"'},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.category=e.target.multiple?a:a[0]}}},[e("option",{staticClass:"form__optionTitle",attrs:{selected:"",disabled:"",value:""}},[t._v("Select payment description")]),t._l(t.categories,(function(a,s){return e("option",{key:s,staticClass:"form__option",domProps:{value:a}},[t._v(t._s(a))])}))],2),e("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],staticClass:"form__input",attrs:{placeholder:"Payment amount"},domProps:{value:t.value},on:{input:function(e){e.target.composing||(t.value=e.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.date,expression:"date"}],staticClass:"form__input",attrs:{placeholder:"Payment date"},domProps:{value:t.date},on:{input:function(e){e.target.composing||(t.date=e.target.value)}}}),e("div",{staticClass:"form__buttons"},[e("button",{staticClass:"form__btn",on:{click:t.onCloseClick}},[t._v("CLOSE")]),e("button",{staticClass:"form__btn",on:{click:t.onAddClick}},[t._v("ADD")])])])},b=[],w={name:"AddPaymentForm",props:{visible:{type:Boolean,default(){return!1}}},data(){return{value:"",category:"",date:""}},methods:{onAddClick(){const t=/^\d+$/,e=/^\d{2}.\d{2}.\d{4}$/;if(!this.category)return void alert("Выберите категорию");if(!t.test(this.value))return void alert("Сумма должна быть задана числом!");if(!e.test(this.date)&&this.date)return void alert("Дата должна быть задана в формате: 'дд.мм.гггг'!");const a={value:+this.value,category:this.category,date:this.date||this.getCurrenrDate};this.$store.commit("addPayment",a)},onCloseClick(){this.$emit("closeForm")}},computed:{getCurrenrDate(){const t=new Date,e=t.getDate(),a=t.getMonth()+1,s=t.getFullYear();return`${e}.${a}.${s}`},categories(){return this.$store.getters.getCategoriesList}}},N=w,x=(0,p.Z)(N,C,b,!1,null,null,null),k=x.exports,F=function(){var t=this,e=t._self._c;return e("div",{staticClass:"showBtn"},[e("button",{staticClass:"showBtn__button",on:{click:t.onShowClick}},[t._v("ADD NEW COST")])])},L=[],$={name:"ShowFormButton",data(){return{}},methods:{onShowClick(){this.$emit("chengeFormVisible")}}},D=$,I=(0,p.Z)(D,F,L,!1,null,null,null),O=I.exports,S={name:"HomeView",components:{PaymentsDisplay:y,AddPaymentForm:k,ShowFormButton:O},data(){return{paymentsList:[],formVisible:!1}},methods:{addNewPayment(t){this.paymentsList.push(t)},chengeFormVisible(){this.formVisible=!0},closeForm(){this.formVisible=!1}},mounted(){const t=[{id:1,date:"20.03.2020",category:"food",value:169},{id:2,date:"21.03.2020",category:"navigation",value:50},{id:2,date:"22.03.2020",category:"sport",value:450},{id:4,date:"23.03.2020",category:"entertiment",value:969},{id:5,date:"24.03.2020",category:"education",value:1500},{id:6,date:"25.03.2020",category:"food",value:200}];this.$store.dispatch("fetchData",t)}},V=S,Z=(0,p.Z)(V,r,o,!1,null,null,null),A=Z.exports,j={name:"App",components:{HomeView:A},data(){return{}}},B=j,T=(0,p.Z)(B,n,i,!1,null,null,null),M=T.exports,q=a(3822);s.ZP.use(q.ZP);var E=new q.ZP.Store({state:{categoriesList:["education","entertiment","food","navigation","sport"],paymentsList:[]},getters:{getPaymentsList:t=>t.paymentsList,getCategoriesList:t=>t.categoriesList},mutations:{addPayment:(t,e)=>{t.paymentsList.push(e)},setPaymentsList:(t,e)=>{t.paymentsList=e}},actions:{fetchData({commit:t},e){return new Promise((t=>{setTimeout((()=>{t(e)}),1e3)})).then((e=>{t("setPaymentsList",e)}))}},modules:{}});s.ZP.config.productionTip=!1,new s.ZP({store:E,render:t=>t(M)}).$mount("#app")}},e={};function a(s){var n=e[s];if(void 0!==n)return n.exports;var i=e[s]={exports:{}};return t[s](i,i.exports,a),i.exports}a.m=t,function(){var t=[];a.O=function(e,s,n,i){if(!s){var r=1/0;for(l=0;l<t.length;l++){s=t[l][0],n=t[l][1],i=t[l][2];for(var o=!0,c=0;c<s.length;c++)(!1&i||r>=i)&&Object.keys(a.O).every((function(t){return a.O[t](s[c])}))?s.splice(c--,1):(o=!1,i<r&&(r=i));if(o){t.splice(l--,1);var u=n();void 0!==u&&(e=u)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[s,n,i]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var s in e)a.o(e,s)&&!a.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,s){var n,i,r=s[0],o=s[1],c=s[2],u=0;if(r.some((function(e){return 0!==t[e]}))){for(n in o)a.o(o,n)&&(a.m[n]=o[n]);if(c)var l=c(a)}for(e&&e(s);u<r.length;u++)i=r[u],a.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return a.O(l)},s=self["webpackChunkcosts"]=self["webpackChunkcosts"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(7868)}));s=a.O(s)})();
//# sourceMappingURL=app.03d01bdf.js.map