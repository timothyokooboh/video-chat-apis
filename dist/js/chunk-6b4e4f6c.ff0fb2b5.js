(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b4e4f6c"],{"004c":function(e,t,n){"use strict";n("c4dc")},3717:function(e,t,n){"use strict";n("bb83")},bb51:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("app-notification"),n("form-signup",{staticClass:"signup"})],1)},r=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("form",[n("h1",{staticClass:"form-control mb-5 form-title"},[e._v("Enter your username to begin a chat")]),n("div",{staticClass:"form-control"},[n("label",{staticClass:"mb-5 username",attrs:{for:"username"}},[e._v("Username")]),n("custom-input",{attrs:{id:"username",bgColor:"#F8F8F8",height:"3.5rem"},model:{value:e.user,callback:function(t){e.user=t},expression:"user"}})],1),n("div",{staticClass:"form-control"},[n("v-btn",{staticClass:"white--text btn",attrs:{color:"#F74D31",width:"100%",loading:e.loading},on:{click:e.submit}},[e._v(" submit ")])],1)])])},o=[],u=(n("96cf"),n("1da1")),c=n("5530"),i=n("3526"),l=n("1f27"),m=n("d4ec"),d=n("bee2"),f=n("4d33"),b=function(){function e(){Object(m["a"])(this,e)}return Object(d["a"])(e,[{key:"addUser",value:function(e){return f["a"].post("/user",e)}}]),e}(),p=new b,h=n("2f62"),g={components:{CustomInput:i["a"]},data:function(){return{user:"",loading:!1}},computed:Object(c["a"])({},Object(h["b"])(["username","userId","isAuth"])),methods:{submit:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.user){t.next=3;break}return l["a"].$emit("enter-username",{message:"Please enter a username"}),t.abrupt("return");case 3:return e.loading=!0,t.prev=4,t.next=7,p.addUser({username:e.user});case 7:n=t.sent,console.log(n),s=n.data.data.user._id,e.$store.commit("isAuthenticated",{username:e.user,auth:!0,userId:s}),e.storeDetails(s),e.$router.push("/chat").catch((function(){})),e.loading=!1,t.next=20;break;case 16:t.prev=16,t.t0=t["catch"](4),console.log(t.t0.response),e.loading=!1;case 20:case"end":return t.stop()}}),t,null,[[4,16]])})))()},storeDetails:function(e){sessionStorage.setItem("isAuthenticated",!0),sessionStorage.setItem("username",this.user),sessionStorage.setItem("userId",e)}}},v=g,w=(n("3717"),n("2877")),k=n("6544"),C=n.n(k),x=n("8336"),_=Object(w["a"])(v,a,o,!1,null,"5b5f863d",null),j=_.exports;C()(_,{VBtn:x["a"]});var I=n("6dac"),O={components:{FormSignup:j,AppNotification:I["a"]}},F=O,$=(n("004c"),Object(w["a"])(F,s,r,!1,null,"63cbad54",null));t["default"]=$.exports},bb83:function(e,t,n){},c4dc:function(e,t,n){}}]);
//# sourceMappingURL=chunk-6b4e4f6c.ff0fb2b5.js.map