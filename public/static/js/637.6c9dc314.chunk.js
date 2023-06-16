"use strict";(self.webpackChunkpiclash=self.webpackChunkpiclash||[]).push([[637],{3757:function(e,r,t){t.r(r),t.d(r,{default:function(){return J}});var n=t(5076),a=t(3433),s=t(1413),o=t(4165),c=t(5861),u=t(9439),i=t(2791),l=t(9434),d=(t(2211),t(3869));var p=t(1176),f=(t(276),t(1243)),m="/api/",h=f.Z.create({withCredentials:!0}),v={get:function(e,r){return x(e,"GET",r)},post:function(e,r){return x(e,"POST",r)},put:function(e,r){return x(e,"PUT",r)},delete:function(e,r){return x(e,"DELETE",r)}};function x(e){return g.apply(this,arguments)}function g(){return g=(0,c.Z)((0,o.Z)().mark((function e(r){var t,n,a,s=arguments;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>1&&void 0!==s[1]?s[1]:"GET",n=s.length>2&&void 0!==s[2]?s[2]:null,e.prev=2,e.next=5,h({url:"".concat(m).concat(r),method:t,data:n,params:"GET"===t?n:null});case 5:return a=e.sent,e.abrupt("return",a.data);case 9:throw e.prev=9,e.t0=e.catch(2),console.log("Had Issues ".concat(t,"ing to the backend, endpoint: ").concat(r,", with data:"),n),console.dir(e.t0),e.t0.response&&401===e.t0.response.status&&sessionStorage.clear(),e.t0;case 15:case"end":return e.stop()}}),e,null,[[2,9]])}))),g.apply(this,arguments)}var y="ai/";function b(e){return j.apply(this,arguments)}function j(){return(j=(0,c.Z)((0,o.Z)().mark((function e(r){var t;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.post(y+"genImg",{prompt:r});case 3:return t=e.sent,e.abrupt("return",t);case 7:throw e.prev=7,e.t0=e.catch(0),console.error("Error posting image: ".concat(e.t0)),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function k(){return k=(0,c.Z)((0,o.Z)().mark((function e(r,t,n){var a,s,c,u,i,l,d,f=arguments;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=f.length>3&&void 0!==f[3]?f[3]:"",s=n.username,c="Guest"===s?"Made by: ".concat(a,", "):"",e.prev=3,u="".concat(r,", ").concat(t),e.next=7,b(u);case 7:return i=e.sent,l="AI, ".concat(c,'With the prompt: "').concat(r,'". Category: ').concat(t,"."),e.next=11,p.W.createPost(n,l,i,!0);case 11:return d=e.sent,e.abrupt("return",{imgUrl:i,postId:d});case 15:throw e.prev=15,e.t0=e.catch(3),console.error("Error creating post with Dall E: ".concat(e.t0)),e.t0;case 19:case"end":return e.stop()}}),e,null,[[3,15]])}))),k.apply(this,arguments)}var Z={createPostWithAiImg:function(e,r,t){return k.apply(this,arguments)}},w=t(2685),I=t(406);function N(e){return function(){var r=(0,c.Z)((0,o.Z)().mark((function r(t,n){var a;return(0,o.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:try{a={type:I.wq,room:e},t(a)}catch(n){console.log("error:",n)}case 1:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()}var P=t(5849),C="aKKGgYXK0NXjHcKgAgWmRkUKQ9M2",R="room",E={createRoom:function(e,r,t){return S.apply(this,arguments)},joinRoom:function(e,r){return T.apply(this,arguments)},startGame:function(e){return U.apply(this,arguments)}};function S(){return S=(0,c.Z)((0,o.Z)().mark((function e(r,t,n){var a,s,c,u,i,l,p,f,m=arguments;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=m.length>3&&void 0!==m[3]?m[3]:"",s=(0,w.iH)(d.yG,"".concat(R,"/").concat(r)),e.next=4,(0,w.U2)(s);case 4:if((c=e.sent).exists()){e.next=10;break}u={id:r,category:P.Y.getRndCategory(),players:[{userId:n,nickname:a}],guests:n===C?1:0,votes:{},posts:[],status:"pending"},(0,w.t8)(s,u).then((function(){t(N(u))})),e.next=19;break;case 10:if(i=c.val(),l=i.players.includes(n),p=n===C,l&&!p){e.next=18;break}return l||i.players.push(n),p&&(i.guests+=1),e.next=18,(0,w.t8)(s,i);case 18:t(N(i));case 19:return f=(0,w.jM)(s,(function(e){t(N(e.val()))})),e.abrupt("return",f);case 21:case"end":return e.stop()}}),e)}))),S.apply(this,arguments)}function T(){return T=(0,c.Z)((0,o.Z)().mark((function e(r,t){var n;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,w.iH)(d.yG,"".concat(R,"/").concat(r)),e.next=3,(0,w.jM)(n,function(){var e=(0,c.Z)((0,o.Z)().mark((function e(r){var a;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.exists()){e.next=8;break}return(a=r.val()).players||(a.players=[]),a.players.push(t),e.next=6,(0,w.t8)(n,a);case 6:e.next=9;break;case 8:console.error("The specified room does not exist");case 9:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}}),e)}))),T.apply(this,arguments)}function U(){return U=(0,c.Z)((0,o.Z)().mark((function e(r){var t;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,w.iH)(d.yG,"".concat(R,"/").concat(r)),e.next=3,(0,w.jM)(t,function(){var e=(0,c.Z)((0,o.Z)().mark((function e(r){var n;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.exists()){e.next=11;break}if(!((n=r.val()).players.length>=3)){e.next=8;break}return n.gameStarted=!0,e.next=6,(0,w.t8)(t,n);case 6:e.next=9;break;case 8:console.error("A minimum of 3 players are required to start the game");case 9:e.next=12;break;case 11:console.error("The specified room does not exist");case 12:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}}),e)}))),U.apply(this,arguments)}var G=t(184);function M(e){var r=e.onClick,t=e.children,n=e.disabled,a=void 0!==n&&n;return(0,G.jsx)("button",{onClick:r,disabled:a,className:"w-full flex justify-center bg-blue-medium text-white px-4 py-2 rounded-lg transition-colors duration-200 ".concat(a?"bg-gray-400 cursor-not-allowed":"hover:bg-blue-light"),children:t})}function O(e){var r=e.createImgWithAi,t=e.nickname,n=e.handleNickChange,a=e.loggedInUser,s=e.prompt,o=e.handlePromptChange,c=e.MAX_PROMPT_LENGTH;return(0,G.jsxs)("form",{onSubmit:r,className:"space-y-4",children:["Guest"===(null===a||void 0===a?void 0:a.username)&&(0,G.jsx)("input",{type:"text",name:"nickname",value:t,placeholder:"Enter nickname here",onChange:function(e){return n(e)},className:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"}),(0,G.jsx)("input",{type:"text",placeholder:"Enter your prompt here",onChange:function(e){return o(e,c)},value:s,className:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"}),(0,G.jsx)(M,{type:"submit",children:"Submit"})]})}function A(e){var r=e.setRoomId,t=e.utilService;return(0,G.jsxs)("div",{children:[(0,G.jsx)("p",{className:"text-gray-600 mb-2",children:"Or create a new room:"}),(0,G.jsx)(M,{onClick:function(){return r(t.makeRoomId())},children:"Create Room"})]})}function _(e){var r=e.inputRoomId,t=e.setInputRoomId,n=e.joinRoom;return(0,G.jsxs)("div",{className:"mb-4 space-y-2",children:[(0,G.jsx)("input",{type:"text",value:r,onChange:function(e){return t(e.target.value)},placeholder:"Enter room ID to join",className:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500 focus:ring-2 focus:ring-blue-500"}),(0,G.jsx)(M,{onClick:n,children:"Join"})]})}function W(e){var r=e.roomId,t=e.room,n=e.numberOfPlayers;return(0,G.jsxs)("div",{className:"text-center space-y-2 mb-6",children:[(0,G.jsxs)("h2",{className:"text-blue-500 text-2xl font-bold",children:["Room #",r]}),(0,G.jsxs)("h3",{className:"text-blue-500 text-xl",children:["Category: ",null===t||void 0===t?void 0:t.category]}),"started"===(null===t||void 0===t?void 0:t.status)&&(0,G.jsx)("h3",{className:"text-blue-500 text-xl",children:"Game has started!"}),"pending"===(null===t||void 0===t?void 0:t.status)&&n<3&&(0,G.jsxs)("p",{className:"text-gray-600",children:["Wait for more people to join, current people in the room: ",n,"/3"]}),"pending"===(null===t||void 0===t?void 0:t.status)&&n>=3&&(0,G.jsxs)("p",{className:"text-gray-600",children:["Current people in the room: ",n]})]})}function H(e){var r=e.numberOfPlayers,t=e.startGameRoom,n=e.room,a=r<e.MIN_PEOPLE_TO_START||"pending"!==(null===n||void 0===n?void 0:n.status);return(0,G.jsx)("div",{className:"mb-4",children:!a&&(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)("p",{className:"text-gray-600",children:"You can start the game!"}),(0,G.jsx)(M,{onClick:t,disabled:a,children:"Start"})]})})}function L(e){var r=e.imgUrl,t=e.prompt;return(0,G.jsx)("div",{className:"mb-4",children:r&&(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)("p",{className:"text-gray-600 mb-2",children:"Your Image:"}),(0,G.jsx)("div",{className:"rounded-lg overflow-hidden shadow-lg",children:(0,G.jsx)("img",{className:"object-cover w-full h-64",src:r,alt:t})})]})})}var V=t(1088),F=function(e){var r=e.post,t=e.handleVote;return(0,G.jsxs)("div",{className:"space-y-2",children:[(0,G.jsx)("img",{src:r.imgUrl,alt:"Post by ".concat(r.nickname),className:"w-full h-auto rounded-lg"}),(0,G.jsx)(M,{onClick:function(){return t(r.id)},children:"Vote for this image"})]},r.id)},D=function(e){var r=e.posts,t=e.votes;return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)("p",{children:"Thank you for voting!"}),(0,G.jsx)("p",{children:"Leaderboard"}),(0,G.jsx)("div",{className:"grid grid-cols-2 gap-4",children:r.map((function(e){var r;return(0,G.jsxs)("div",{className:"space-y-2",children:[(0,G.jsx)("img",{src:e.imgUrl,alt:"Post by ".concat((null===e||void 0===e?void 0:e.nickname)||"a user"),className:"w-full h-auto rounded-lg"}),(0,G.jsxs)("div",{className:"flex items-center",children:[(0,G.jsx)(V.Z,{iconName:"starFilled"}),(0,G.jsx)("span",{className:"ml-2",children:(null===t||void 0===t||null===(r=t.filter((function(r){return r.postId===e.id})))||void 0===r?void 0:r.length)||0})]})]},e.id)}))})]})};function K(e){var r=e.hasVoted,t=e.handleVote,n=e.room,a=e.nickname,s=e.loggedInUser,o=e.GUEST_ID;if(r)return(0,G.jsx)(D,{posts:n.posts,votes:n.votes});var c=(0,i.useMemo)((function(){var e;return(null===n||void 0===n||null===(e=n.posts)||void 0===e?void 0:e.length)&&n.posts.filter((function(e){return function(e,r,t,n){return e.userId===n?r.nickname!==t:e.userId!==r.userId}(s,e,a,o)}))||[]}),[n,s,a,o]);return 0===c.length?null:(0,G.jsxs)("div",{className:"mb-4 space-y-2",children:[(0,G.jsx)("p",{children:"Select the image you want to vote for:"}),c.map((function(e){return(0,G.jsx)(F,{post:e,handleVote:t},e.id)}))]})}var Y=100,X=3;function q(){var e,r=(0,l.v9)((function(e){return e.userModule.loggedInUser})),t=(0,l.v9)((function(e){return e.roomModule.room}));console.log("room:",t);var n=(0,l.v9)((function(e){return e.roomModule.unsubscribe})),f=(0,l.I0)(),m=(0,i.useState)(""),h=(0,u.Z)(m,2),v=h[0],x=h[1],g=(0,i.useState)(""),y=(0,u.Z)(g,2),b=y[0],j=y[1],k=(0,i.useState)(""),N=(0,u.Z)(k,2),S=N[0],T=N[1],U=(0,i.useState)(""),M=(0,u.Z)(U,2),V=M[0],F=M[1],D=(0,i.useState)(""),q=(0,u.Z)(D,2),J=q[0],Q=q[1],z=(0,i.useState)(!1),B=(0,u.Z)(z,2),$=B[0],ee=B[1],re=(0,i.useState)(null),te=(0,u.Z)(re,2),ne=te[0],ae=te[1],se=(null===t||void 0===t||null===(e=t.players)||void 0===e||e.includes(C),(null===r||void 0===r?void 0:r.userId)===C),oe=(null===t||void 0===t?void 0:t.votes)||[],ce=!1;oe.length>0&&(ce=se?oe.some((function(e){return(null===e||void 0===e?void 0:e.nickname)===S})):oe.some((function(e){return e.userId===r.userId})));var ue=(null===t||void 0===t?void 0:t.guests)||1;function ie(){return(ie=(0,c.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(ue>=X)){e.next=3;break}return e.next=3,de({status:"started"});case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function le(){return(le=(0,c.Z)((0,o.Z)().mark((function e(t){var n,c;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!ce&&r){e.next=2;break}return e.abrupt("return");case 2:return n={userId:r.userId,nickname:S},c=(0,s.Z)((0,s.Z)({},n),{},{postId:t}),e.next=6,de({votes:[].concat((0,a.Z)(oe),[c])});case 6:return e.next=8,p.W.updatePostVotes(t,n);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function de(e){return pe.apply(this,arguments)}function pe(){return(pe=(0,c.Z)((0,o.Z)().mark((function e(r){var n;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t&&void 0!==t&&t.id){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,n=(0,w.iH)(d.yG,"".concat(R,"/").concat(t.id)),e.next=6,(0,w.i3)(n,(function(e){return e&&(e=(0,s.Z)((0,s.Z)({},e),r)),e}));case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.error("Failed to update room",e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})))).apply(this,arguments)}function fe(){return(fe=(0,c.Z)((0,o.Z)().mark((function e(n){var a,s,c,u,i;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r){e.next=3;break}return e.abrupt("return");case 3:if(a=S.replace(/\b\w/g,(function(e){return e.toUpperCase()})),!t.players.some((function(e){return e.userId===r.userId&&se&&a===e.nickname}))){e.next=6;break}return e.abrupt("return",ae("Nickname already exists"));case 6:if(!(a.length>=20)){e.next=8;break}return e.abrupt("return",ae("Nickname must be less than 20 characters"));case 8:return ae(null),ee(!0),e.prev=10,e.next=13,Z.createPostWithAiImg(v,t.category,r,a);case 13:if(s=e.sent,c=s.imgUrl,u=s.postId,!c){e.next=25;break}return(i=t.posts||[]).push({prompt:v,imgUrl:c,userId:null===r||void 0===r?void 0:r.userId,uppercaseNick:a,id:u}),e.next=21,de({posts:i});case 21:x(""),j(c),e.next=26;break;case 25:ae("AI service failed to return an image URL.");case 26:e.next=32;break;case 28:e.prev=28,e.t0=e.catch(10),console.log("err:",e.t0),e.t0.response?ae(e.t0.response.data):ae(e.t0.message);case 32:return e.prev=32,ee(!1),e.finish(32);case 35:case"end":return e.stop()}}),e,null,[[10,28,32,35]])})))).apply(this,arguments)}return(0,i.useEffect)((function(){var e=null===r||void 0===r?void 0:r.userId;if(e&&V)return null!==t&&void 0!==t&&t.id&&!V&&F(t.id),f(function(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return function(){var n=(0,c.Z)((0,o.Z)().mark((function n(a,s){var c,u;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,E.createRoom(e,a,r,t);case 3:c=n.sent,u={type:I.q3,unsubscribe:c},a(u),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log("error:",n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e,r){return n.apply(this,arguments)}}()}(V,e,S)),function(){n&&n()}}),[V]),(0,G.jsxs)("div",{className:"bg-gray-background flex flex-col items-center justify-center px-4 py-8",children:[$&&(0,G.jsx)("div",{className:"bg-gray-200 p-2 rounded-lg text-center",children:"Loading..."}),ne&&(0,G.jsx)("div",{className:"bg-red-200 p-2 rounded-lg text-center",children:JSON.stringify(ne)}),V&&(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(W,{roomId:V,room:t,numberOfPlayers:ue}),(0,G.jsx)(H,{room:t,numberOfPlayers:ue,startGameRoom:function(){return ie.apply(this,arguments)},MIN_PEOPLE_TO_START:X}),"started"===(null===t||void 0===t?void 0:t.status)&&!b&&!$&&(0,G.jsx)(O,{createImgWithAi:function(e){return fe.apply(this,arguments)},nickname:S,handleNickChange:function(e){var r=e.target.value;T(r)},loggedInUser:r,prompt:v,handlePromptChange:function(e){var r=e.target.value;r.length<=Y?x(r):x(r.slice(0,Y))},MAX_PROMPT_LENGTH:Y}),(0,G.jsx)(K,{loggedInUser:r,GUEST_ID:C,nickname:S,hasVoted:ce,handleVote:function(e){return le.apply(this,arguments)},room:t,numberOfPlayers:ue}),(0,G.jsx)(L,{imgUrl:b,prompt:v})]}),!V&&(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(_,{inputRoomId:J,setInputRoomId:Q,joinRoom:function(){F(J)}}),(0,G.jsx)(A,{setRoomId:F,utilService:P.Y})]})]})}function J(){return(0,G.jsx)(n.Z,{children:(0,G.jsxs)("div",{className:"flex flex-col items-center justify-center mt-20",children:[(0,G.jsx)("h1",{className:"text-4xl font-bold",children:"PicClash"}),(0,G.jsx)(q,{})]})})}}}]);
//# sourceMappingURL=637.6c9dc314.chunk.js.map