(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{128:function(e,t,n){},425:function(e,t,n){},427:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(5),s=n(17),a=n.n(s),o=(n(128),n(49)),i=n(50),h=n(52),l=n(51),b=function(e){e.searchfield;var t=e.searchChange;return Object(r.jsx)("div",{className:"pa2",children:Object(r.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},d=function(e){var t=e.name,n=e.email,c=e.id;return Object(r.jsxs)("div",{className:"tc bg-light-green dib br3 ma2 grow bw2 shadow-5",children:[Object(r.jsx)("img",{src:"https://robohash.org/".concat(c,"?200x200"),alt:"robots"}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:t}),Object(r.jsx)("p",{children:n})]})]})},j=function(e){var t=e.robots;return Object(r.jsx)("div",{children:t.map((function(e,n){return Object(r.jsx)(d,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},u=function(e){return Object(r.jsx)("div",{style:{overflow:"scroll",border:"1px solid black",height:"800px"},children:e.children})},f=(n(129),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(i.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(r.jsx)("h1",{children:"Ooops. That is nog good"}):this.props.children}}]),n}(c.Component)),O=(n(425),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(r.jsxs)("div",{className:"tc",children:[Object(r.jsx)("h1",{className:"f2",children:"RoboFriends"}),Object(r.jsx)(b,{searchChange:this.onSearchChange}),Object(r.jsx)(u,{children:Object(r.jsx)(f,{children:Object(r.jsx)(j,{robots:c})})})]}):Object(r.jsx)("h1",{children:"Loading"})}}]),n}(c.Component));n(426);a.a.render(Object(r.jsx)(O,{}),document.getElementById("root"))}},[[427,1,2]]]);
//# sourceMappingURL=main.50746864.chunk.js.map