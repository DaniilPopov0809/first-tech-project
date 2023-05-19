"use strict";(self.webpackChunkfirst_tech_project=self.webpackChunkfirst_tech_project||[]).push([[535],{3535:function(n,t,o){o.r(t),o.d(t,{default:function(){return On}});var e,r,a,i,l,c,s,d,p,x,u,f,g,Z,b,h,m,A,j,w,y,k,z,N=o(9434),T=o(2791),W=o(7016),C=o(6916),G=o(5206),M=function(n){return n.users.page},v=function(n){return n.users.isVisible},S=function(n){return n.users.isLoading},q=function(n){return n.filter},R=(0,C.P1)([function(n){return n.users.users},q],(function(n,t){return function(n,t){var o=JSON.parse(localStorage.getItem("following"));if("all"===t)return n;if("follow"===t){var e=n.filter((function(n){return!o.find((function(t){return t===n.id}))}));return 0===e.length&&G.Am.info("User cards not found!"),e}if("following"===t){var r=n.filter((function(n){return o.find((function(t){return t===n.id}))}));return 0===r.length&&G.Am.info("User cards not found!"),r}}(n,t)})),O=o(3433),V=o(9439),Q=o(168),Y=o(6088),U=Y.Z.div(e||(e=(0,Q.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  width: 380px;\n  padding-top: 284px;\n  background: linear-gradient(\n    114.99deg,\n    #471ca9 -0.99%,\n    #5736a3 54.28%,\n    #4b2a99 78.99%\n  );\n  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);\n  border-radius: 20px;\n"]))),D=Y.Z.img(r||(r=(0,Q.Z)(["\n  position: absolute;\n  width: 76px;\n  height: 22px;\n  left: 20px;\n  top: 20px;\n"]))),J=Y.Z.img(a||(a=(0,Q.Z)(["\n  position: absolute;\n  width: 308px;\n  height: 168px;\n  left: 36px;\n  top: 28px;\n"]))),B=Y.Z.div(i||(i=(0,Q.Z)(["\n  position: absolute;\n  width: 380px;\n  height: 8px;\n  left: 0px;\n  top: 214px;\n\n  background: var(--primary-button-color);\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),\n    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;\n"]))),L=Y.Z.div(l||(l=(0,Q.Z)(["\n  position: absolute;\n  left: 150px;\n  top: 178px;\n  z-index: 999;\n  width: 80px;\n  height: 80px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  background: var(--primary-button-color);\n  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),\n    inset 0px -2.19582px 4.39163px #ae7be3,\n    inset 0px 4.39163px 3.29372px #fbf8ff;\n"]))),I=Y.Z.img(c||(c=(0,Q.Z)(["\n  border-radius: 50%;\n"]))),F=Y.Z.p(s||(s=(0,Q.Z)(["\n  text-align: center;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 1.2;\n  text-transform: uppercase;\n  color: var(--primary-button-color);\n"]))),K=(0,Y.Z)(F)(d||(d=(0,Q.Z)(["\n  margin-bottom: 16px;\n"]))),E=(0,Y.Z)(F)(p||(p=(0,Q.Z)(["\n  margin-bottom: 16px;\n"]))),P=(0,Y.Z)(F)(x||(x=(0,Q.Z)(["\n  margin-bottom: 26px;\n"]))),X=Y.Z.button(u||(u=(0,Q.Z)(["\n  margin-bottom: 36px;\n  padding: 14px 56px;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 22px;\n  text-transform: uppercase;\n  color: var(--text-color);\n  background: var(--primary-button-color);\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  border-radius: 10.3108px;\n  border: none;\n  cursor: pointer;\n  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    scale: 1.05;\n  }\n"]))),H=(0,Y.Z)(X)(f||(f=(0,Q.Z)(["\n  background-color: var(--secondary-button-color);\n"]))),_=Y.Z.div(g||(g=(0,Q.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),$=o(184),nn=function(n){var t=n.userCard,o=t.tweets,e=t.avatar,r=t.followers,a=t.id,i=t.user,l=JSON.parse(localStorage.getItem("following")),c=(0,N.I0)(),s=(0,T.useState)((function(){return function(n,t){return!!n&&!!n.find((function(n){return n===t}))}(l,a)})),d=(0,V.Z)(s,2),p=d[0],x=d[1],u=(0,T.useState)((function(){return l||[]})),f=(0,V.Z)(u,2),g=f[0],Z=f[1];(0,T.useEffect)((function(){localStorage.setItem("following",JSON.stringify(g))}),[a,p,g,c]);var b=function(){Z(l),x(!p),!1===p&&(c((0,W.py)({id:a,followers:r})),Z((function(n){return[].concat((0,O.Z)(n),[a])})),G.Am.info("You following ".concat(i,"!"))),!0===p&&(c((0,W.xv)({id:a,followers:r})),Z((function(n){return n.filter((function(n){return n!==a}))})),G.Am.info("You unfollowing ".concat(i,"!")))};return(0,$.jsxs)(U,{children:[(0,$.jsx)(D,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAWCAMAAABdXIqIAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAACxMAAAsTAQCanBgAAABOUExURf///////////////////////////0dwTP///////////////////////////////////////////////////////////////////////1kQ3BYAAAAadFJOU0wwR0ImEwkACi9DBDkcNBcFNSEdKj4OKxg9MbzqigAAAQ1JREFUOMvNlclyxCAMRJtFtIzB68wk+f8fzYGJ7bGz2FUcohNVwKtGLQngr4gtSzSoEF1NGHxNGPqaMKsVYcWEKzDrRSUnAMB9eqiYnQkbWKf6BoiWkAPLhZJmv2Y8uBcTNjBDekCfNofvWMNDyQ4wJAclGex6YD7C3kVaUiTvYYZUC9w8gEBOQNQiczHhAAOgR1kAhEzwOedsP0gFgERusxG70zAlHYQk3RckvmbDpWvKZh1IZ8nBHpTZcP6ZvpjXPwXOxZLN/czzMKsktSXpkEi2ymLJL6XxIwxR1zprytTRuOyOvAQDml76W9ESJ1nWAOB27RSNuZdWMOPlRg//dATVHI5jxbHtzn8on8W9DG8QIJi0AAAAAElFTkSuQmCC",alt:"logo"}),(0,$.jsx)(J,{src:"data:image/png;base64,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",alt:"decoration"}),(0,$.jsx)(B,{}),(0,$.jsx)(L,{children:(0,$.jsx)(I,{src:e,alt:"avatar",width:62})}),(0,$.jsxs)(_,{children:[(0,$.jsx)(K,{children:i}),(0,$.jsxs)(E,{children:[o.toLocaleString("en-US")," tweets"]}),(0,$.jsxs)(P,{children:[r.toLocaleString("en-US")," followers"]}),p?(0,$.jsx)(H,{type:"button",onClick:b,children:"Following"}):(0,$.jsx)(X,{type:"button",onClick:b,children:"Follow"})]})]})},tn=Y.Z.div(Z||(Z=(0,Q.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),on=Y.Z.ul(b||(b=(0,Q.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n\n  gap: 30px;\n  margin-bottom: 30px;\n\n  @media screen and (max-width: 767px) {\n    justify-content: center;\n  }\n\n  @media screen and (max-width: 1279px) {\n    gap: 8px;\n  }\n"]))),en=Y.Z.li(h||(h=(0,Q.Z)([""]))),rn=o(8931),an=function(){var n=(0,N.I0)(),t=(0,N.v9)(R),o=(0,N.v9)(M);return(0,T.useEffect)((function(){n((0,W.Bs)(o))}),[n,o]),(0,T.useEffect)((function(){0===t.length?n((0,rn.Lq)(!1)):n((0,rn.Lq)(!0))}),[n,t.length]),(0,$.jsx)(tn,{children:(0,$.jsx)(on,{children:t.map((function(n){return(0,$.jsx)(en,{children:(0,$.jsx)(nn,{userCard:n})},n.id)}))})})},ln=o(1087),cn=(0,Y.Z)(ln.rU)(m||(m=(0,Q.Z)(["\n  display: inline-block;\n\n  padding: 14px 28px;\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 22px;\n  text-transform: uppercase;\n  color: var(--text-color);\n  background: var(--primary-button-color);\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  border-radius: 10.3108px;\n  border: none;\n  cursor: pointer;\n  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  display: flex;\n\n  &:hover,\n  &:focus {\n    scale: 1.05;\n    background: var(--secondary-button-color);\n  }\n"]))),sn=o(6036),dn=function(){return(0,$.jsxs)(cn,{to:"/",children:[(0,$.jsx)(sn.ZhP,{}),"Back"]})},pn=o(8966),xn=Y.Z.div(A||(A=(0,Q.Z)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),un=(0,Y.Z)(X)(j||(j=(0,Q.Z)(["\n  margin-bottom: 0;\n  display: flex;\n  align-items: center;\n\n  &:hover,\n  &:focus {\n    background: var(--secondary-button-color);\n  }\n"]))),fn=o(5667),gn=function(){var n=fn.animateScroll,t=(0,N.I0)(),o=(0,N.v9)(S),e=(0,N.v9)(v);return(0,$.jsx)(xn,{children:e&&(0,$.jsxs)(un,{type:"button",onClick:function(o){o.target.blur(),t((0,rn.fz)()),n.scrollToBottom()},children:["Load more"," ",o&&(0,$.jsx)(pn.iT,{height:20,width:20,color:"#5736a3",wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"oval-loading",secondaryColor:"#ae7be3",strokeWidth:10,strokeWidthSecondary:10})]})})},Zn=o(9126),bn=(0,Y.Z)(Zn.ULj)(w||(w=(0,Q.Z)(["\n  display: block;\n  color: var(--primary-button-color);\n  opacity: 0.75;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    color: var(--secondary-button-color);\n  }\n"]))),hn=Y.Z.button(y||(y=(0,Q.Z)(["\n  position: fixed;\n  bottom: 85px;\n  right: 40px;\n  padding: 0;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  border-radius: 5px;\n"]))),mn=o(5667),An=function(){var n=(0,T.useState)(!1),t=(0,V.Z)(n,2),o=t[0],e=t[1],r=mn.animateScroll;(0,T.useEffect)((function(){window.addEventListener("scroll",a)}));var a=function(){window.pageYOffset>200?e(!0):e(!1)};return(0,$.jsx)($.Fragment,{children:o&&(0,$.jsx)(hn,{type:"button",onClick:function(){r.scrollToTop()},tabIndex:"1",children:(0,$.jsx)(bn,{size:40,tabIndex:"0"})})})},jn=o(6362),wn=o(4925),yn=o(1175),kn=o(9256),zn={maxWidth:"250px"},Nn={fontWeight:600,textTransform:"uppercase",fontSize:"18px",lineHeight:"22px",color:"var(--text-color)","&:hover .MuiOutlinedInput-notchedOutline":{borderColor:"var(--secondary-button-color)"},"&.Mui-focused .MuiOutlinedInput-notchedOutline":{borderColor:"var(--secondary-button-color)"},".MuiOutlinedInput-notchedOutline":{borderColor:"var(--primary-button-color)",borderRadius:"10px",borderWidth:"2px",boxShadow:"0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25)"},".MuiSelect-icon":{padingTop:"10px",color:"var(--text-color)",fontSize:"28px"},"&.Mui-selected":{bgcolor:"var(--secondary-button-color)",minHeight:"auto"}},Tn={padding:0,textTransform:"uppercase",fontWeight:600,color:"var(--text-color)","&.Mui-focused":{color:"var(--text-color)"}},Wn={fontWeight:600,fontSize:"18px",lineHeight:"22px",textTransform:"uppercase",color:"var(--text-color)","&:hover, &:focus":{bgcolor:"var(--primary-button-color)"},"&.Mui-selected ":{bgcolor:"var(--secondary-button-color)"},"&.Mui-selected:hover, &.Mui-selected:focus ":{bgcolor:"var(--secondary-button-color)"}},Cn=o(6895),Gn=o(7107),Mn=o(4507),vn=(0,Gn.Z)({typography:{fontFamily:"'Montserrat', sans-serif"}}),Sn=function(){var n=(0,N.I0)(),t=(0,N.v9)(q);return(0,$.jsx)(Mn.Z,{theme:vn,children:(0,$.jsxs)(jn.Z,{sx:zn,children:[(0,$.jsx)(wn.Z,{id:"demo-simple-select-label",sx:Tn,children:"Filter"}),(0,$.jsxs)(yn.Z,{sx:Nn,labelId:"demo-simple-select-label",id:"demo-simple-select",value:t,label:"Filter",onChange:function(t){n((0,Cn.Ye)(t.target.value))},children:[(0,$.jsx)(kn.Z,{value:"all",sx:Wn,children:"All"}),(0,$.jsx)(kn.Z,{value:"follow",sx:Wn,children:"Follow"}),(0,$.jsx)(kn.Z,{value:"following",sx:Wn,children:"Followings"})]})]})})},qn=Y.Z.div(k||(k=(0,Q.Z)(["\n  padding: 24px 0;\n"]))),Rn=Y.Z.div(z||(z=(0,Q.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 30px;\n"]))),On=function(){var n=(0,N.v9)(v);return(0,$.jsxs)(qn,{children:[(0,$.jsxs)(Rn,{children:[(0,$.jsx)(dn,{}),(0,$.jsx)(Sn,{})]}),(0,$.jsx)(an,{}),n&&(0,$.jsx)(gn,{}),(0,$.jsx)(An,{})]})}}}]);
//# sourceMappingURL=535.ebf1968e.chunk.js.map