/*! chainpoint-client-web v0.0.4-15 */
!function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports["common/Popup"]=t():e["common/Popup"]=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=12)}([function(e,t){e.exports=require("react")},function(e,t,n){"use strict";var o=n(3),r=n.n(o),u=n(4),c=r()({namespace:u.a,glue:"--"});t.a=c},,function(e,t){e.exports=require("css-ns")},function(e,t,n){"use strict";n.d(t,"a",function(){return o});var o="CCW"},,,function(e,t,n){"use strict";function o(e){var t=document.createElement("div");t.setAttribute("id",e),document.body.appendChild(t)}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"POPUP_ROOT_ID",function(){return r}),t.createPopup=o;var r="proof-popup-root"},,,,,function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function u(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=n(0),i=n.n(c),a=n(21),p=n.n(a),s=n(7),l=n(1),f=n(22),d=(n.n(f),function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}()),m=27,y=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.escFunction=function(e){e.keyCode===m&&n.props.onHidePopup()},n.el=document.createElement("div"),n.popupRoot=document.getElementById(s.POPUP_ROOT_ID),n.state={mounted:!1},n}return u(t,e),d(t,[{key:"componentDidMount",value:function(){this.popupRoot.appendChild(this.el),this.setState({mounted:!0}),document.body.style.overflow="hidden",document.addEventListener("keydown",this.escFunction,!1)}},{key:"componentDidUpdate",value:function(){}},{key:"componentWillUnmount",value:function(){this.el&&this.popupRoot.removeChild(this.el),document.body.style.overflow="visible",document.removeEventListener("keydown",this.escFunction,!1)}},{key:"render",value:function(){var e=this,t=this.props,n=t.header,o=t.onHidePopup,r=t.className;return p.a.createPortal(this.state.mounted?i.a.createElement("div",{className:Object(l.a)("popup "+r),ref:function(t){return e.popupNode=t}},i.a.createElement("div",{className:Object(l.a)("popup-inner")},i.a.createElement("div",{className:Object(l.a)("popup-overlay"),onClick:o}),i.a.createElement("div",{className:Object(l.a)("popup-content")},n&&i.a.createElement("div",{className:Object(l.a)("popup-header")},n),i.a.createElement("div",{className:Object(l.a)("popup-body")},this.props.children)))):null,this.el)}}]),t}(c.Component);t.default=y},,,,,,,,,function(e,t){e.exports=require("react-dom")},function(e,t){}])});