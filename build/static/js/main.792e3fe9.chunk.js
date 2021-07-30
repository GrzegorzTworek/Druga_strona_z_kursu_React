(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{121:function(e,t){},123:function(e,t){},138:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(25),o=n.n(i),c=n(6),u=n(18),l=n(5),s="/",p="/notes",d="/notes/details/:id",f="/twitters",m="/twitters/details/:id",b="/articles",h="/articles/details/:id",g="/login",v="/register",x=n(41),E=n(68),O=n(26),j=n(40),w=n(22),y=n(23),C=n.n(y),k={userID:"6101bdf0f486656044767853"},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_SUCCESS":return Object(w.a)({},e,Object(O.a)({},t.payload.itemType,Object(j.a)(t.payload.data)));case"AUTHENTICATE_SUCCESS":return Object(w.a)({},e,{userID:t.payload.data._id});case"ADD_ITEM_SUCCESS":return Object(w.a)({},e,Object(O.a)({},t.payload.itemType,[].concat(Object(j.a)(e[t.payload.itemType]),[t.payload.data])));case"REMOVE_ITEM_SUCCESS":return Object(w.a)({},e,Object(O.a)({},t.payload.itemType,Object(j.a)(e[t.payload.itemType].filter(function(e){return e._id!==t.payload.id}))));default:return e}},I=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||x.b,T=Object(x.c)(S,I(Object(x.a)(E.a))),_=n(38),U=n(12),z=n(13),N=n(15),D=n(14),A=n(16),M=n(1),B=n(2);function V(){var e=Object(B.a)(["\n  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,600');\n  \n  *, *::before, *::after {\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  \n  html {\n    font-size: 62.5%; \n  }\n  \n  body {\n    margin: 0;\n    padding: 0;\n    font-size: 1.6rem;\n    font-family: \"Montserrat\", sans-serif;\n  }\n"]);return V=function(){return e},e}var P=Object(M.b)(V()),R=a.a.createContext("notes"),F={notes:"hsl(49, 100%, 58%)",twitters:"hsl(196, 83%, 75%)",articles:"hsl(106, 47%, 64%)",grey100:"hsl(0, 0%, 96%)",grey200:"hsl(0, 0%, 90%)",grey300:"hsl(0, 0%, 70%)",black:"hsl(0, 0%, 0%)",light:300,bold:600,fontSize:{xxs:"1rem",xs:"1.2rem",s:"1.6rem",m:"2.1rem",l:"2.4rem",xl:"4rem"}},H=function(e){function t(){var e,n;Object(U.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(N.a)(this,(e=Object(D.a)(t)).call.apply(e,[this].concat(a)))).state={pageType:"notes"},n.setCurrentPage=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=n.props.location.pathname,r=["twitters","articles","notes"].filter(function(e){return t.includes(e)}),a=Object(_.a)(r,1)[0];e.pageType!==a&&n.setState({pageType:a})},n}return Object(A.a)(t,e),Object(z.a)(t,[{key:"componentDidMount",value:function(){this.setCurrentPage()}},{key:"componentDidUpdate",value:function(e,t){this.setCurrentPage(t)}},{key:"render",value:function(){var e=this.props.children,t=this.state.pageType;return a.a.createElement("div",null,a.a.createElement(R.Provider,{value:t},a.a.createElement(P,null),a.a.createElement(M.a,{theme:F},e)))}}]),t}(r.Component),L=Object(u.f)(H);function Q(){var e=Object(B.a)(["\n  display: block;\n  width: 67px;\n  height: 67px;\n  border-radius: 20px;\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n  background-size: 50% 50%;\n  border: none;\n\n  &.active {\n    background-color: white;\n  }\n"]);return Q=function(){return e},e}var Y=M.d.button(Q(),function(e){return e.icon}),J=n(72),X=n.n(J),q=n(73),G=n.n(q),K=n(74),W=n.n(K),Z=n(75),$=n.n(Z),ee=n(35),te=n.n(ee),ne=function(e){return function(t){return a.a.createElement(R.Consumer,null,function(n){return a.a.createElement(e,Object.assign({},t,{pageContext:n}))})}};function re(){var e=Object(B.a)(["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n"]);return re=function(){return e},e}function ae(){var e=Object(B.a)(["\n  margin-top: auto;\n"]);return ae=function(){return e},e}function ie(){var e=Object(B.a)(["\n  display: block;\n  width: 67px;\n  height: 67px;\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n  background-size: 80%;\n  border: none;\n  margin-bottom: 10vh;\n"]);return ie=function(){return e},e}function oe(){var e=Object(B.a)(["\n  position: fixed;\n  left: 0;\n  top: 0;\n  padding: 25px 0;\n  width: 150px;\n  height: 100vh;\n  background-color: ",";\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n"]);return oe=function(){return e},e}var ce=M.d.nav(oe(),function(e){var t=e.activeColor,n=e.theme;return t?n[t]:n.note}),ue=Object(M.d)(c.c)(ie(),te.a),le=Object(M.d)(Y)(ae()),se=M.d.ul(re()),pe=function(e){var t=e.pageContext;return a.a.createElement(ce,{activeColor:t},a.a.createElement(ue,{to:"/"}),a.a.createElement(se,null,a.a.createElement("li",null,a.a.createElement(Y,{as:c.c,to:"/notes",icon:W.a,activeclass:"active"})),a.a.createElement("li",null,a.a.createElement(Y,{as:c.c,to:"/twitters",icon:$.a,activeclass:"active"})),a.a.createElement("li",null,a.a.createElement(Y,{as:c.c,to:"/articles",icon:X.a,activeclass:"active"}))),a.a.createElement(le,{as:c.c,to:"/login",icon:G.a}))};pe.defaultProps={pageContext:"notes"};var de=ne(pe);function fe(){var e=Object(B.a)(["\n  padding-left: 150px;\n"]);return fe=function(){return e},e}var me=M.d.div(fe()),be=function(e){var t=e.children;return a.a.createElement(me,null,a.a.createElement(de,null),t)},he=n(76),ge=n.n(he);function ve(){var e=Object(B.a)(["\n      padding: 10px 20px 10px 40px;\n      font-size: ",";\n      background-image: url(",");\n      background-size: 15px;\n      background-position: 15px 50%;\n      background-repeat: no-repeat;\n    "]);return ve=function(){return e},e}function xe(){var e=Object(B.a)(["\n  padding: 15px 30px;\n  font-size: ",";\n  font-weight: ",";\n  background-color: ",";\n  border: none;\n  border-radius: 50px;\n\n  ::placeholder {\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    color: ",";\n  }\n\n  ","\n"]);return xe=function(){return e},e}var Ee=M.d.input(xe(),function(e){return e.theme.fontSize.s},function(e){return e.theme.regular},function(e){return e.theme.grey100},function(e){return e.theme.grey300},function(e){return e.search&&Object(M.c)(ve(),function(e){return e.theme.fontSize.xs},ge.a)});function Oe(){var e=Object(B.a)(["\n  font-size: ",";\n  font-weight: ",";\n"]);return Oe=function(){return e},e}var je=M.d.h1(Oe(),function(e){var t=e.theme;return e.big?t.fontSize.xl:t.fontSize.l},function(e){return e.theme.bold});function we(){var e=Object(B.a)(["\n  font-size: ",";\n  font-weight: ",";\n"]);return we=function(){return e},e}var ye=M.d.p(we(),function(e){return e.theme.fontSize.s},function(e){return e.theme.regular});function Ce(){var e=Object(B.a)(["\n      background-color: hsl(0, 0%, 90%);\n      width: 105px;\n      height: 30px;\n      font-size: 10px;\n    "]);return Ce=function(){return e},e}function ke(){var e=Object(B.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: black;\n  text-decoration: none;\n  padding: 0;\n  background-color: ",";\n  width: 220px;\n  height: 47px;\n  border: none;\n  border-radius: 50px;\n  font-family: 'Montserrat';\n  font-weight: 600;\n  font-size: 16px;\n  text-transform: uppercase;\n\n  ","\n"]);return ke=function(){return e},e}var Se=M.d.button(ke(),function(e){var t=e.activecolor;return e.theme[t]},function(e){return e.secondary&&Object(M.c)(Ce())}),Ie=n(20);function Te(){var e=Object(B.a)(["\n  margin-top: 30px;\n"]);return Te=function(){return e},e}function _e(){var e=Object(B.a)(["\n  margin: 30px 0 100px;\n  border-radius: 20px;\n  height: 30vh;\n"]);return _e=function(){return e},e}function Ue(){var e=Object(B.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return Ue=function(){return e},e}function ze(){var e=Object(B.a)(["\n  border-left: 10px solid ",";\n  z-index: 9999;\n  position: fixed;\n  display: flex;\n  padding: 100px 90px;\n  flex-direction: column;\n  right: 0;\n  top: 0;\n  height: 100vh;\n  width: 680px;\n  background-color: white;\n  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);\n  transform: translate(",");\n  transition: transform 0.25s ease-in-out;\n"]);return ze=function(){return e},e}var Ne=M.d.div(ze(),function(e){return e.theme[e.activecolor]},function(e){return e.isVisible?"0":"100%"}),De=Object(M.d)(Ie.a)(Ue()),Ae=Object(M.d)(Ee)(_e()),Me=Object(M.d)(Ee)(Te()),Be=function(e){var t=e.pageContext,n=e.isVisible,r=e.addItem,i=e.handleClose;return a.a.createElement(Ne,{isVisible:n,activecolor:t},a.a.createElement(je,{big:!0},"Create new ",t),a.a.createElement(Ie.b,{initialValues:{title:"",content:"",articleUrl:"",twitterName:"",created:""},onSubmit:function(e){r(t,e),i()}},function(e){var n=e.values,r=e.handleChange,i=e.handleBlur;return a.a.createElement(De,null,a.a.createElement(Me,{type:"text",name:"title",placeholder:"title",onChange:r,onBlur:i,value:n.title}),"twitters"===t&&a.a.createElement(Me,{placeholder:"twitter name eg. hello_roman",type:"text",name:"twitterName",onChange:r,onBlur:i,value:n.twitterName}),"articles"===t&&a.a.createElement(Me,{placeholder:"link",type:"text",name:"articleUrl",onChange:r,onBlur:i,value:n.articleUrl}),a.a.createElement(Ae,{name:"content",as:"textarea",onChange:r,onBlur:i,value:n.content}),a.a.createElement(Se,{type:"submit",activecolor:t},"Add Note"))}))};Be.defaultProps={pageContext:"notes",isVisible:!1};var Ve=Object(l.b)(null,function(e){return{addItem:function(t,n){return e(function(e,t){return function(n,r){return n({type:"ADD_ITEM_REQUEST"}),C.a.post("http://localhost:9000/api/note",Object(w.a)({userID:r().userID,type:e},t)).then(function(t){var r=t.data;console.log(r),n({type:"ADD_ITEM_SUCCESS",payload:{itemType:e,data:r}})}).catch(function(e){console.log(e),n({type:"ADD_ITEM_FAILURE"})})}}(t,n))}}})(ne(Be)),Pe=n(79),Re=n.n(Pe);function Fe(){var e=Object(B.a)(["\n  position: fixed;\n  bottom: 40px;\n  right: 40px;\n  background-color: ",";\n  background-size: 35%;\n  border-radius: 50px;\n  z-index: 10000;\n"]);return Fe=function(){return e},e}function He(){var e=Object(B.a)(["\n  margin: 0;\n  font-weight: ",";\n"]);return He=function(){return e},e}function Le(){var e=Object(B.a)(["\n  margin: 25px 0 0 0;\n\n  ::first-letter {\n    text-transform: uppercase;\n  }\n"]);return Le=function(){return e},e}function Qe(){var e=Object(B.a)(["\n  margin: 25px 0 50px 0;\n"]);return Qe=function(){return e},e}function Ye(){var e=Object(B.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 85px;\n\n  @media (max-width: 1500px) {\n    grid-gap: 45px;\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  @media (max-width: 1100px) {\n    grid-template-columns: 1fr;\n  }\n"]);return Ye=function(){return e},e}function Je(){var e=Object(B.a)(["\n  position: relative;\n  padding: 25px 150px 25px 70px;\n"]);return Je=function(){return e},e}var Xe=M.d.div(Je()),qe=M.d.div(Ye()),Ge=M.d.div(Qe()),Ke=Object(M.d)(je)(Le()),We=Object(M.d)(ye)(He(),function(e){return e.theme.bold}),Ze=Object(M.d)(Y)(Fe(),function(e){var t=e.activecolor;return e.theme[t]}),$e=function(e){function t(){var e,n;Object(U.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(N.a)(this,(e=Object(D.a)(t)).call.apply(e,[this].concat(a)))).state={isNewItemBarVisible:!1},n.toggleNewItemBar=function(){n.setState(function(e){return{isNewItemBarVisible:!e.isNewItemBarVisible}})},n}return Object(A.a)(t,e),Object(z.a)(t,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.pageContext,r=this.state.isNewItemBarVisible;return a.a.createElement(be,null,a.a.createElement(Xe,null,a.a.createElement(Ge,null,a.a.createElement(Ee,{search:!0,placeholder:"Search"}),a.a.createElement(Ke,{big:!0,as:"h1"},n),a.a.createElement(We,null,"6 ",n)),a.a.createElement(qe,null,t),a.a.createElement(Ze,{onClick:this.toggleNewItemBar,icon:Re.a,activecolor:n}),a.a.createElement(Ve,{handleClose:this.toggleNewItemBar,isVisible:r})))}}]),t}(r.Component);$e.defaultProps={pageContext:"notes"};var et=ne($e),tt=n(80),nt=n.n(tt);function rt(){var e=Object(B.a)(["\n  display: block;\n  width: 47px;\n  height: 47px;\n  border-radius: 50px;\n  background: white url(",") no-repeat;\n  background-size: 60%;\n  background-position: 50%;\n  position: absolute;\n  right: 25px;\n  top: 50%;\n  transform: translateY(-50%);\n"]);return rt=function(){return e},e}function at(){var e=Object(B.a)(["\n  width: 86px;\n  height: 86px;\n  border: 5px solid ",";\n  border-radius: 50px;\n  position: absolute;\n  right: 25px;\n  top: 25px;\n"]);return at=function(){return e},e}function it(){var e=Object(B.a)(["\n  margin: 5px 0 0;\n"]);return it=function(){return e},e}function ot(){var e=Object(B.a)(["\n  margin: 0 0 5px;\n  font-weight: ",";\n  font-size: ",";\n"]);return ot=function(){return e},e}function ct(){var e=Object(B.a)(["\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n    "]);return ct=function(){return e},e}function ut(){var e=Object(B.a)(["\n  position: relative;\n  padding: 17px 30px;\n  background-color: ",";\n\n  :first-of-type {\n    z-index: 9999;\n  }\n\n  ","\n"]);return ut=function(){return e},e}function lt(){var e=Object(B.a)(["\n  min-height: 380px;\n  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);\n  border-radius: 10px;\n  overflow: hidden;\n  position: relative;\n  display: grid;\n  grid-template-rows: 0.25fr 1fr;\n"]);return lt=function(){return e},e}var st=M.d.div(lt()),pt=M.d.div(ut(),function(e){var t=e.activeColor,n=e.theme;return t?n[t]:"white"},function(e){return e.flex&&Object(M.c)(ct())}),dt=(Object(M.d)(ye)(ot(),function(e){return e.theme.bold},function(e){return e.theme.fontSize.xs}),Object(M.d)(je)(it())),ft=M.d.img(at(),function(e){return e.theme.twitters}),mt=M.d.a(rt(),nt.a),bt=function(e){function t(){var e,n;Object(U.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(N.a)(this,(e=Object(D.a)(t)).call.apply(e,[this].concat(a)))).state={redirect:!1},n.handleCardClick=function(){return n.setState({redirect:!0})},n}return Object(A.a)(t,e),Object(z.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.pageContext,r=e.title,i=(e.created,e.twitterName,e.articleUrl),o=e.content,c=e.removeItem;return this.state.redirect?a.a.createElement(u.a,{to:"".concat(n,"/details/").concat(t)}):a.a.createElement(st,null,a.a.createElement(pt,{onClick:this.handleCardClick,activeColor:n},a.a.createElement(dt,null,r),"twitters"===n&&a.a.createElement(ft,{src:"https://pbs.twimg.com/profile_images/1173367116562685954/k-MYyrws_400x400.jpg"}),"articles"===n&&a.a.createElement(mt,{href:i})),a.a.createElement(pt,{flex:!0},a.a.createElement(ye,null,o),a.a.createElement(Se,{onClick:function(){return c(n,t)},secondary:!0},"REMOVE")))}}]),t}(r.Component);bt.defaultProps={pageContext:"notes",twitterName:null,articleUrl:null};var ht=Object(l.b)(null,function(e){return{removeItem:function(t,n){return e(function(e,t){return function(n){n({type:"REMOVE_ITEM_REQUEST"}),console.log(e),C.a.delete("http://localhost:9000/api/note/".concat(t)).then(function(){n({type:"REMOVE_ITEM_SUCCESS",payload:{itemType:e,id:t}})}).catch(function(e){console.log(e),n({type:"REMOVE_ITEM_FAILURE"})})}}(t,n))}}})(ne(bt)),gt=function(e){var t=e.notes;return a.a.createElement(et,null,t.map(function(e){var t=e.title,n=e.content,r=e.created,i=e.id;return a.a.createElement(ht,{id:i,title:t,content:n,created:r,key:i})}))};gt.defaultProps={notes:[]};var vt=Object(l.b)(function(e){return{notes:e.notes}})(gt),xt=function(e){var t=e.articles;return a.a.createElement(et,null,t.map(function(e){var t=e.title,n=e.content,r=e.articleUrl,i=e.created,o=e.id;return a.a.createElement(ht,{id:o,title:t,content:n,articleUrl:r,created:i,key:o})}))};xt.defaultProps={articles:[]};var Et=Object(l.b)(function(e){return{articles:e.articles}})(xt),Ot=function(e){function t(){return Object(U.a)(this,t),Object(N.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(A.a)(t,e),Object(z.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchTwitters().fetchTwitters}},{key:"render",value:function(){var e=this.props.twitters;return a.a.createElement(et,null,e.map(function(e){var t=e.title,n=e.content,r=e.twitterName,i=(e.created,e._id);return a.a.createElement(ht,{id:i,title:t,content:n,twitterName:r,key:i})}))}}]),t}(r.Component);Ot.defaultProps={twitters:[]};var jt=Object(l.b)(function(e){return{twitters:e.twitters}},function(e){return{fetchTwitters:function(){return e((t="twitters",function(e,n){return e({type:"FETCH_REQUEST"}),C.a.get("http://localhost:9000/api/notes/type",{params:{type:t,userID:n().userID}}).then(function(n){var r=n.data;console.log(r),e({type:"FETCH_SUCCESS",payload:{data:r,itemType:t}})}).catch(function(t){console.log(t),e({type:"FETCH_FAILURE"})})}));var t}}})(Ot);function wt(){var e=Object(B.a)(["\n  position: absolute;\n  right: -80px;\n  top: 50px;\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n"]);return wt=function(){return e},e}function yt(){var e=Object(B.a)(["\n  display: block;\n  font-weight: ",";\n  font-size: ",";\n  color: black;\n  text-transform: uppercase;\n  margin: 20px 0 50px;\n"]);return yt=function(){return e},e}function Ct(){var e=Object(B.a)(["\n  margin: 0;\n  font-weight: ",";\n"]);return Ct=function(){return e},e}function kt(){var e=Object(B.a)(["\n  margin: 25px 0 0 0;\n\n  ::first-letter {\n    text-transform: uppercase;\n  }\n"]);return kt=function(){return e},e}function St(){var e=Object(B.a)(["\n  margin: 25px 0 50px 0;\n"]);return St=function(){return e},e}function It(){var e=Object(B.a)(["\n  padding: 25px 150px 25px 70px;\n  max-width: 50vw;\n  position: relative;\n\n  @media (max-width: 1200px) {\n    max-width: 80vw;\n  }\n"]);return It=function(){return e},e}var Tt=M.d.div(It()),_t=M.d.div(St()),Ut=Object(M.d)(je)(kt()),zt=Object(M.d)(ye)(Ct(),function(e){return e.theme.bold}),Nt=M.d.a(yt(),function(e){return e.theme.bold},function(e){return e.theme.fontSize.xs}),Dt=M.d.img(wt()),At=function(e){var t=e.pageContext,n=e.title,r=e.created,i=e.content,o=e.articleUrl,u=e.twitterName;return a.a.createElement(be,null,a.a.createElement(Tt,null,a.a.createElement(_t,null,a.a.createElement(Ut,{big:!0,as:"h1"},n),a.a.createElement(zt,null,r)),a.a.createElement(ye,null,i),"articles"===t&&a.a.createElement(Nt,{href:o},"Open article"),"twitters"===t&&a.a.createElement(Dt,{alt:n,src:"https://avatars.io/twitter/".concat(u)}),a.a.createElement(Se,{as:c.b,to:"/".concat(t),activecolor:t},"save / close")))};At.defaultProps={title:"",created:"",content:"",articleUrl:"",twitterName:""};var Mt=ne(At),Bt=(n(114),n(117),function(e){function t(){var e,n;Object(U.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(N.a)(this,(e=Object(D.a)(t)).call.apply(e,[this].concat(a)))).state={activeItem:{title:"",content:"",articleUrl:"",twitterName:""}},n}return Object(A.a)(t,e),Object(z.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(console.log(this.props.activeItem),this.props.activeItem){var t=Object(_.a)(this.props.activeItem,1)[0];this.setState({activeItem:t})}else{var n=this.props.match.params.id;C.a.get("http://localhost:9000/api/note/".concat(n)).then(function(t){var n=t.data;e.setState({activeItem:n})}).catch(function(e){return console.log(e)})}}},{key:"render",value:function(){var e=this.state.activeItem;return a.a.createElement(Mt,{title:e.title,created:e.created,content:e.content,articleUrl:e.articleUrl,twitterName:e.twitterName})}}]),t}(r.Component)),Vt=ne(Object(l.b)(function(e,t){return e[t.pageContext]?{activeItem:e[t.pageContext].filter(function(e){return e._id===t.match.params.id})}:{}})(Bt));function Pt(){var e=Object(B.a)(["\n  width: 400px;\n  height: 400px;\n  background-color: white;\n  border-radius: 10px;\n  box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.2);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]);return Pt=function(){return e},e}function Rt(){var e=Object(B.a)(["\n  width: 200px;\n  height: auto;\n"]);return Rt=function(){return e},e}function Ft(){var e=Object(B.a)(["\n  width: 100%;\n  height: 100vh;\n  background-color: ",";\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]);return Ft=function(){return e},e}var Ht=M.d.div(Ft(),function(e){return e.theme.notes}),Lt=M.d.img(Rt()),Qt=M.d.div(Pt()),Yt=function(e){var t=e.children;return a.a.createElement(Ht,null,a.a.createElement(Lt,{src:te.a,alt:""}),a.a.createElement(je,null,"Your new favorite online notes experience"),a.a.createElement(Qt,null,t))};function Jt(){var e=Object(B.a)(["\n  display: block;\n  font-weight: ",";\n  font-size: ",";\n  color: black;\n  text-transform: uppercase;\n  margin: 20px 0 50px;\n"]);return Jt=function(){return e},e}function Xt(){var e=Object(B.a)(["\n  margin: 0 0 30px 0;\n  height: 40px;\n  width: 300px;\n"]);return Xt=function(){return e},e}function qt(){var e=Object(B.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]);return qt=function(){return e},e}var Gt=Object(M.d)(Ie.a)(qt()),Kt=Object(M.d)(Ee)(Xt()),Wt=Object(M.d)(c.b)(Jt(),function(e){return e.theme.bold},function(e){return e.theme.fontSize.xs}),Zt=Object(l.b)(function(e){var t=e.userID;return{userID:void 0===t?null:t}},function(e){return{authenticate:function(t,n){return e(function(e,t){return function(n){return n({type:"AUTHENTICATE_REQUEST"}),C.a.post("http://localhost:9000/api/user/login",{username:e,password:t}).then(function(e){console.log(e),n({type:"AUTHENTICATE_SUCCESS",payload:e})}).catch(function(e){console.log(e),n({type:"AUTHENTICATE_FAILURE"})})}}(t,n))}}})(function(e){var t=e.userID,n=e.authenticate;return a.a.createElement(Yt,null,a.a.createElement(Ie.b,{initialValues:{username:"",password:""},onSubmit:function(e){var t=e.username,r=e.password;n(t,r)}},function(e){var n=e.handleChange,r=e.handleBlur,i=e.values;return t?a.a.createElement(u.a,{to:s}):a.a.createElement(a.a.Fragment,null,a.a.createElement(je,null,t),a.a.createElement(je,null,"Sign in"),a.a.createElement(Gt,null,a.a.createElement(Kt,{type:"text",name:"username",placeholder:"Login",onChange:n,onBlur:r,value:i.title}),a.a.createElement(Kt,{type:"password",name:"password",placeholder:"Password",onChange:n,onBlur:r,value:i.title}),a.a.createElement(Se,{activecolor:"notes",type:"submit"},"sign in")),a.a.createElement(Wt,{to:v},"I want my account!"))}))});function $t(){var e=Object(B.a)(["\n  display: block;\n  font-weight: ",";\n  font-size: ",";\n  color: black;\n  text-transform: uppercase;\n  margin: 20px 0 50px;\n"]);return $t=function(){return e},e}function en(){var e=Object(B.a)(["\n  margin: 0 0 30px 0;\n  height: 40px;\n  width: 300px;\n"]);return en=function(){return e},e}function tn(){var e=Object(B.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]);return tn=function(){return e},e}var nn=Object(M.d)(Ie.a)(tn()),rn=Object(M.d)(Ee)(en()),an=Object(M.d)(c.b)($t(),function(e){return e.theme.bold},function(e){return e.theme.fontSize.xs}),on=function(){return a.a.createElement(Yt,null,a.a.createElement(Ie.b,{initialValues:{username:"",password:""},onSubmit:function(e){e.username,e.password,console.log("hello")}},function(e){var t=e.handleChange,n=e.handleBlur,r=e.values;return a.a.createElement(a.a.Fragment,null,a.a.createElement(je,null,"Sign in"),a.a.createElement(nn,null,a.a.createElement(rn,{type:"text",name:"username",placeholder:"Login",onChange:t,onBlur:n,value:r.title}),a.a.createElement(rn,{type:"password",name:"password",placeholder:"Password",onChange:t,onBlur:n,value:r.title}),a.a.createElement(Se,{activecolor:"notes",type:"submit"},"register")),a.a.createElement(an,{to:g},"I want to log in!"))}))},cn=function(){return a.a.createElement(l.a,{store:T},a.a.createElement(c.a,null,a.a.createElement(L,null,a.a.createElement(u.d,null,a.a.createElement(u.b,{exact:!0,path:g,component:Zt}),a.a.createElement(u.b,{exact:!0,path:v,component:on}),a.a.createElement(u.b,{exact:!0,path:s,render:function(){return a.a.createElement(u.a,{to:"/notes"})}}),a.a.createElement(u.b,{exact:!0,path:p,component:vt}),a.a.createElement(u.b,{path:d,component:Vt}),a.a.createElement(u.b,{exact:!0,path:b,component:Et}),a.a.createElement(u.b,{path:h,component:Vt}),a.a.createElement(u.b,{exact:!0,path:f,component:jt}),a.a.createElement(u.b,{path:m,component:Vt})))))};o.a.render(a.a.createElement(cn,null),document.getElementById("root"))},35:function(e,t,n){e.exports=n.p+"static/media/logo.93d4f3ba.svg"},72:function(e,t,n){e.exports=n.p+"static/media/bulb.af737b55.svg"},73:function(e,t,n){e.exports=n.p+"static/media/logout.0969c92b.svg"},74:function(e,t,n){e.exports=n.p+"static/media/pen.84b70f8a.svg"},75:function(e,t,n){e.exports=n.p+"static/media/twitter.051af8ba.svg"},76:function(e,t,n){e.exports=n.p+"static/media/magnifier.a14461b8.svg"},79:function(e,t,n){e.exports=n.p+"static/media/plus.e43ce6c8.svg"},80:function(e,t,n){e.exports=n.p+"static/media/link.6fc1d8fe.svg"},82:function(e,t,n){e.exports=n(138)}},[[82,1,2]]]);
//# sourceMappingURL=main.792e3fe9.chunk.js.map