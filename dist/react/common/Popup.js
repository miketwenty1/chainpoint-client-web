!function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports["common/Popup"]=t():e["common/Popup"]=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=14)}([function(e,t){e.exports=require("react")},function(e,t,n){"use strict";var o=n(4),r=n.n(o),c=n(5),i=r()({namespace:c.a,glue:"--"});t.a=i},,function(e,t){e.exports=require("react-inlinesvg")},function(e,t){e.exports=require("css-ns")},function(e,t,n){"use strict";n.d(t,"a",function(){return o});var o="PAC"},,,function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function c(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),u=n.n(i),a=n(1),p=n(11),s=(n.n(p),function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}()),l=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),s(t,[{key:"render",value:function(){return u.a.createElement("header",{className:Object(a.a)("header")},this.props.children)}}]),t}(i.Component);t.default=l},,function(e,t,n){"use strict";function o(e){var t=document.createElement("div");t.setAttribute("id",e),document.body.appendChild(t)}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"POPUP_ROOT_ID",function(){return r}),t.createPopup=o;var r="proof-popup-root"},function(e,t){},,,function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function c(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),u=n.n(i),a=n(22),p=n.n(a),s=n(3),l=n.n(s),f=n(8),d=n(10),m=n(23),b=n.n(m),y=n(1),h=n(24),v=(n.n(h),function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}()),O=27,P=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.escFunction=function(e){e.keyCode===O&&n.props.onHidePopup()},n.el=document.createElement("div"),n.popupRoot=document.getElementById(d.POPUP_ROOT_ID),n.state={mounted:!1},n}return c(t,e),v(t,[{key:"componentDidMount",value:function(){this.popupRoot.appendChild(this.el),this.setState({mounted:!0}),document.body.style.overflow="hidden",document.addEventListener("keydown",this.escFunction,!1)}},{key:"componentDidUpdate",value:function(){}},{key:"componentWillUnmount",value:function(){this.el&&this.popupRoot.removeChild(this.el),document.body.style.overflow="visible",document.removeEventListener("keydown",this.escFunction,!1)}},{key:"render",value:function(){var e=this,t=this.props,n=t.header,o=t.onHidePopup,r=t.className;return p.a.createPortal(this.state.mounted?u.a.createElement("div",{className:Object(y.a)("popup "+r),ref:function(t){return e.popupNode=t}},u.a.createElement("div",{className:Object(y.a)("popup-inner")},u.a.createElement("div",{className:Object(y.a)("popup-overlay"),onClick:o}),u.a.createElement("div",{className:Object(y.a)("popup-content")},u.a.createElement("button",{className:Object(y.a)("popup-close"),onClick:o},u.a.createElement(l.a,{src:b.a})),n&&u.a.createElement("div",{className:Object(y.a)("popup-header")},u.a.createElement(f.default,null,n)),u.a.createElement("div",{className:Object(y.a)("popup-body")},this.props.children)))):null,this.el)}}]),t}(i.Component);t.default=P},,,,,,,,function(e,t){e.exports=require("react-dom")},function(e,t){e.exports="data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjQThCMUM5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMiI+CiAgICAgICAgPHBhdGggZD0iTTEgMWwxNCAxNE0xNSAxTDEgMTUiLz4KICAgIDwvZz4KPC9zdmc+Cg=="},function(e,t){}])});