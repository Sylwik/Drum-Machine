(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{11:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(3),i=c.n(s),o=(c(9),c(4)),d=c(0),m=function(e){return Object(d.jsx)("div",{id:"display",children:e.text})},r=function(e){return Object(d.jsxs)("button",{id:e.id,className:"drum-pad",onClick:function(){e.onClick(e.number)},children:[Object(d.jsx)("audio",{id:e.text,className:"clip",src:e.audio}),e.text]})};var u=function(){var e=["Heater 1","Heater 2","Heater 3","Heater 4","Clap","Open HH","Kick n'Hat","Kick","Closed HH"],t=["Q","W","E","A","S","D","Z","X","C"],c=Object(n.useState)(""),a=Object(o.a)(c,2),s=a[0],i=a[1],u=["https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3","https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3","https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3","https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3","https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3","https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3","https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3","https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3","https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"],p=function(t){i(e[t]),new Audio(u[t]).play()};return Object(n.useEffect)((function(){document.addEventListener("keypress",(function(e){"q"===e.key?p(0):"w"===e.key?p(1):"e"===e.key?p(2):"a"===e.key?p(3):"s"===e.key?p(4):"d"===e.key?p(5):"z"===e.key?p(6):"x"===e.key?p(7):"c"===e.key&&p(8)}))}),[]),Object(d.jsxs)("div",{className:"drum-machine",children:[Object(d.jsx)(m,{text:s}),Object(d.jsxs)("div",{id:"keys-container",children:[Object(d.jsx)(r,{id:e[0],text:t[0],audio:u[0],onClick:p,number:0}),Object(d.jsx)(r,{id:e[1],text:t[1],audio:u[1],onClick:p,number:1}),Object(d.jsx)(r,{id:e[2],text:t[2],audio:u[2],onClick:p,number:2}),Object(d.jsx)(r,{id:e[3],text:t[3],audio:u[3],onClick:p,number:3}),Object(d.jsx)(r,{id:e[4],text:t[4],audio:u[4],onClick:p,number:4}),Object(d.jsx)(r,{id:e[5],text:t[5],audio:u[5],onClick:p,number:5}),Object(d.jsx)(r,{id:e[6],text:t[6],audio:u[6],onClick:p,number:6}),Object(d.jsx)(r,{id:e[7],text:t[7],audio:u[7],onClick:p,number:7}),Object(d.jsx)(r,{id:e[8],text:t[8],audio:u[8],onClick:p,number:8})]})]})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,12)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(u,{})}),document.getElementById("root")),p()},9:function(e,t,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.50e6e868.chunk.js.map