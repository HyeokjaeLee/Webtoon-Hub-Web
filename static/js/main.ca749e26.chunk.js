(this["webpackJsonpwebtoon-hub-web"]=this["webpackJsonpwebtoon-hub-web"]||[]).push([[0],{18:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),i=n.n(s),r=n(7),a=n.n(r),o=(n(18),n(2)),l=n(8),u=n(9),j=n(12),b=n(11),d=n(4),p=n.n(d),O=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e;return e=""!=this.props.state?this.props.service+" / "+this.props.state:this.props.service,Object(c.jsx)(p.a,{children:Object(c.jsx)("a",{href:this.props.url,children:Object(c.jsxs)("li",{className:"webtoon_container",children:[Object(c.jsx)("div",{className:"webtoon_info",children:Object(c.jsxs)("ul",{className:"webtoon_info_container",children:[Object(c.jsx)("li",{style:{fontSize:"10px",listStyle:"none",textAlign:"right"},children:e}),Object(c.jsx)("li",{style:{fontSize:"10px",listStyle:"none"},children:this.props.title}),Object(c.jsx)("li",{style:{fontSize:"8px",listStyle:"none"},children:this.props.artist})]})}),Object(c.jsx)("div",{className:"thumnail",children:Object(c.jsx)("img",{src:this.props.img,className:"thumnail_img"})})]})})})}}]),n}(i.a.Component),f=n(10),h=function(e){var t=e.onLoginKakao;return Object(c.jsx)("div",{children:Object(c.jsx)(f.a,{jsKey:"71c837a33c49953187126f404e118511",onSuccess:function(e){return t(e)},onFailure:function(e){return console.log(e)},render:function(e){return Object(c.jsx)("div",{onClick:e.onClick,children:"login"})},getProfile:!0})})},m=(n(23),(new Date).getDay()),x=1,_=function(e){var t,n=new XMLHttpRequest;return n.onreadystatechange=function(){if(4==n.readyState&&200==n.status)try{t=JSON.parse(n.responseText)}catch(e){return void console.log(e.message+" in "+n.responseText)}},n.open("GET",e,!1),n.send(),t}("https://toy-projects-api.herokuapp.com/webtoon/all"),v=_.filter((function(e){return e.weekday==m}));var g=function(){document.querySelector("title").innerText="WEBTOON HUB";var e,t=Object(s.useState)(v),n=Object(o.a)(t,2),i=n[0],r=n[1],a=i.map((function(e,t){return Object(c.jsx)(O,{title:e.title,url:e.url,img:e.img,artist:e.artist,service:e.service,state:e.state,weekday:e.weekday},t)})),l=0,u=[],j=a.length;j%9==0?e=j/9:(e=(j-j%9)/9+1,l=j%9);for(var b=1;b<=e;b++)u[b]=b<e?{page_item_start_num:9*(b-1),page_item_end_num:9*(b-1)+9}:{page_item_start_num:9*(b-1),page_item_end_num:9*(b-1)+l};var d=Object(s.useState)(0),p=Object(o.a)(d,2),f=p[0],m=p[1],g=Object(s.useState)(9),w=Object(o.a)(g,2),y=w[0],S=w[1],N=Object(s.useState)(""),k=Object(o.a)(N,2),C=k[0],T=k[1],F=Object(s.useState)(!1),B=Object(o.a)(F,2),E=B[0],L=B[1],z=function(e){for(var t=[],n=0;n<6;n++)t[n]=e+n;return t},D=function(e){m(u[e].page_item_start_num),S(u[e].page_item_end_num)},H=Object(s.useState)(z(x)),J=Object(o.a)(H,2),P=J[0],q=J[1],A=function(e){q(z(e)),D(e)},I=function(t){return Object(c.jsx)("a",{className:"view_select_item",onClick:function(){switch(t.move){case">":x+10<e?A(x+=5):x+5<e&&A(x=e-5);break;case"<":x-5>1?A(x-=5):1!=x&&A(x=1)}},children:t.txt})},K=function(){var e=a.slice(f,y);return e=E?a:a.slice(f,y),Object(c.jsx)("ul",{className:"content_area",children:e})},M=function(){for(var e=[],t=function(t){e.push(Object(c.jsx)("a",{className:"view_select_item",onClick:function(){D(P[t]),window.scrollTo(0,0)},children:P[t]}))},n=0;n<6;n++)t(n);return 1!=E?Object(c.jsxs)("span",{className:"view_select",children:[Object(c.jsx)(I,{move:"<",txt:"<"}),e,Object(c.jsx)(I,{move:">",txt:">"})]}):Object(c.jsx)("span",{className:"view_select"})},R=function(){for(var e=[],t=["\uc77c","\uc6d4","\ud654","\uc218","\ubaa9","\uae08","\ud1a0","\uc644\uacb0"],n=function(e){return Object(c.jsx)("li",{className:"filter_option",children:Object(c.jsx)("a",{id:e.id,onClick:function(){var t;T(""),L(!1),r((t=e.filter_num,_.filter((function(e){return e.weekday==t})))),x=1,m(0),S(9),window.scrollTo(0,0)},children:e.weekday})})},s=0;s<8;s++)e[s]=Object(c.jsx)(n,{filter_num:s,weekday:t[s],id:"option_"+s});return Object(c.jsx)("ul",{className:"filter_container",children:e})};return Object(c.jsxs)("div",{className:"body",children:[Object(c.jsxs)("div",{className:"top_bar",children:[Object(c.jsx)("input",{type:"text",value:C,className:"top_bar_search_box",onChange:function(e){var t;T(e.target.value),""==e.target.value?(L(!1),r(v)):(L(!0),r((t=e.target.value,_.filter((function(e){return e.title.includes(t)||e.artist.includes(t)})))))}}),Object(c.jsx)("span",{className:"top_bar_item",children:"/SEARCH"})]}),Object(c.jsx)(R,{}),Object(c.jsx)(K,{}),Object(c.jsx)(M,{}),Object(c.jsx)(h,{})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),i(e),r(e)}))};a.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(g,{})}),document.getElementById("root")),w()}},[[24,1,2]]]);
//# sourceMappingURL=main.ca749e26.chunk.js.map