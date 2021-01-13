(this["webpackJsonpturkish-sentimental-analysis"]=this["webpackJsonpturkish-sentimental-analysis"]||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},102:function(e,t,n){"use strict";n.r(t);var r=n(1),a=(n(48),n(49),n(50),n(51),n(52),n(53),n(0)),c=n.n(a),i=n(43),l=n.n(i),o=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,103)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))},s=n(29),u=(n(57),n(14)),d=n(3),j="/",f={ROOT:j,HOME:{ROOT:"".concat(j,"home")},ABOUT:{ROOT:"".concat(j,"about"),API_DOC:"".concat(j,"doc"),AUTHORS:"".concat(j,"authors")}},b=(n(58),n(59),n(2)),p=n.n(b);var h=function(e){var t=e.children,n=e.metaTitle,c=e.customClassName,i=p()("page-container",c);return Object(a.useEffect)((function(){document.title="Turkish Sentimental Analysis - ".concat(n)}),[n]),Object(r.jsx)("div",{className:i,children:Object(r.jsx)("div",{className:"main-body",children:Object(r.jsx)("div",{className:"main-body-content",children:t})})})},O=n(15),m=n.n(O),g=n(22),C=n(5);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function x(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var w=a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.5 14H14.71L14.43 13.73C15.63 12.33 16.25 10.42 15.91 8.39002C15.44 5.61002 13.12 3.39002 10.32 3.05002C6.09002 2.53002 2.53002 6.09002 3.05002 10.32C3.39002 13.12 5.61002 15.44 8.39002 15.91C10.42 16.25 12.33 15.63 13.73 14.43L14 14.71V15.5L18.25 19.75C18.66 20.16 19.33 20.16 19.74 19.75C20.15 19.34 20.15 18.67 19.74 18.26L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z",fill:"#989898"});function y(e,t){var n=e.title,r=e.titleId,c=x(e,["title","titleId"]);return a.createElement("svg",v({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},c),n?a.createElement("title",{id:r},n):null,w)}var A=a.forwardRef(y),E=(n.p,n(61),n(12));var I=function(e){var t=e.children,n=e.onSubmit,c=e.customClassName,i=e.isSubmitAllowed,l=void 0===i||i,o=e.values,s=Object(a.useState)(!0),u=Object(C.a)(s,2),d=u[0],j=u[1],f=p()("form",c);return Object(r.jsx)("form",{className:f,onChange:function(t){var n=e.onChange;d&&j(!1);n&&n(t)},onSubmit:function(e){e.stopPropagation(),e.preventDefault(),l&&n(o)},children:t})},R=n(23),N=n.n(R);n(89);var H=function(e){var t=e.result;return Object(r.jsxs)("div",{className:"result-card",children:[Object(r.jsxs)("div",{className:"result-card-header",children:[Object(r.jsx)("p",{className:"result-card-header-tag",children:"TAG"}),Object(r.jsx)("p",{className:"result-card-header-confidence",children:"CONFIDENCE"})]}),t.result?Object(r.jsxs)("div",{className:"result-card-item",children:[Object(r.jsx)("p",{className:"result-card-item-tag-positive",children:"POSITIVE"}),Object(r.jsx)("p",{className:"result-card-item-confidence",children:t.positive_percentage})]}):Object(r.jsxs)("div",{className:"result-card-item",children:[Object(r.jsx)("p",{className:"result-card-item-tag-negative",children:"NEGATIVE"}),Object(r.jsx)("p",{className:"result-card-item-confidence",children:t.negative_percentage})]})]})},L={result:null,positive_percentage:"",negative_percentage:""},S="https://c4cf19a46f49.ngrok.io/";var B=function(){var e=Object(a.useState)(""),t=Object(C.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(!1),l=Object(C.a)(i,2),o=l[0],s=l[1],u=Object(a.useState)(L),d=Object(C.a)(u,2),j=d[0],f=d[1],b=Object(a.useState)(""),p=Object(C.a)(b,2),h=p[0],O=p[1];return Object(r.jsxs)(I,{values:n,knownErrorKeys:["query"],customClassName:"predict-sentence-form",onSubmit:function(){return v.apply(this,arguments)},children:[Object(r.jsx)("p",{className:"predict-sentence-form-title",children:"Turkish Sentimental Analysis"}),Object(r.jsx)(E.Input,{isDisabled:o,leftIcon:Object(r.jsx)(A,{className:"predict-sentence-form-input-query-icon"}),placeholder:"Your sentence here...",name:"query",onChange:function(e){var t=e.currentTarget;c(t.value)},customClassName:"predict-sentence-form-input-query"}),Object(r.jsx)(E.Button,{isDisabled:""===n,shouldDisplaySpinner:o,type:"submit",customClassName:"blue predict-sentence-submit-button",children:"COMPUTE"}),h&&Object(r.jsx)("p",{className:"predict-sentece-form-error",children:h}),!0===j.result&&Object(r.jsx)(H,{result:j}),!1===j.result&&Object(r.jsx)(H,{result:j})]});function v(){return(v=Object(g.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.next=3,N.a.post("".concat(S),{query:n}).then((function(e){f(e.data),s(!1),O("")})).catch((function(e){console.log(e),f(L),O("Unexpected error!"),s(!1)}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}};function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function T(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var P=a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 4C7.584 4 4 7.584 4 12C4 16.416 7.584 20 12 20C16.416 20 20 16.416 20 12C20 7.584 16.416 4 12 4ZM12.8 17.6H11.2V16H12.8V17.6ZM14.456 11.4L13.736 12.136C13.336 12.544 13.048 12.912 12.904 13.488C12.84 13.744 12.8 14.032 12.8 14.4H11.2V14C11.2 13.632 11.264 13.28 11.376 12.952C11.536 12.488 11.8 12.072 12.136 11.736L13.128 10.728C13.496 10.376 13.672 9.84798 13.568 9.28798C13.464 8.71198 13.016 8.22398 12.456 8.06398C11.568 7.81598 10.744 8.31998 10.48 9.07998C10.384 9.37598 10.136 9.59998 9.824 9.59998H9.584C9.12 9.59998 8.8 9.15198 8.928 8.70398C9.272 7.52798 10.272 6.63198 11.512 6.43998C12.728 6.24798 13.888 6.87998 14.608 7.87998C15.552 9.18398 15.272 10.584 14.456 11.4Z",fill:"#737373"});function M(e,t){var n=e.title,r=e.titleId,c=T(e,["title","titleId"]);return a.createElement("svg",k({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},c),n?a.createElement("title",{id:r},n):null,P)}var Q=a.forwardRef(M);n.p;function U(){return(U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function F(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var Z=a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.544 6.75073H7.36441L7.85934 4.36606C7.91933 4.0886 7.82935 3.80364 7.63437 3.60116C7.30442 3.27121 6.77199 3.27121 6.44953 3.60116L3.44994 6.60075C3.15748 6.87821 3 7.26066 3 7.6581V12C3 12.8249 3.67491 13.4998 4.4998 13.4998H8.9392C9.53912 13.4998 10.079 13.1398 10.319 12.5924L11.9238 8.84294C12.3437 7.85308 11.6163 6.75073 10.544 6.75073ZM19.4978 10.5002H15.0584C14.4585 10.5002 13.9186 10.8602 13.6786 11.4076L12.0738 15.1571C11.6539 16.1469 12.3738 17.2493 13.4536 17.2493H16.6332L16.1383 19.634C16.0783 19.9114 16.1683 20.1964 16.3632 20.3988C16.6932 20.7288 17.2256 20.7288 17.5481 20.3988L20.5477 17.3993C20.8326 17.1143 20.9901 16.7394 20.9901 16.3419V12C20.9976 11.1751 20.3227 10.5002 19.4978 10.5002Z",fill:"#4C8098"});function V(e,t){var n=e.title,r=e.titleId,c=F(e,["title","titleId"]);return a.createElement("svg",U({width:90,height:60,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},c),n?a.createElement("title",{id:r},n):null,Z)}var D=a.forwardRef(V);n.p;function J(){return(J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function W(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var K=a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20 4.00833C19.8917 4.00833 19.7833 4.05 19.7083 4.13333L19.05 4.79167C18.8833 4.95833 18.625 4.95833 18.4583 4.79167L17.8 4.13333C17.6333 3.96667 17.375 3.96667 17.2083 4.13333L16.55 4.79167C16.3833 4.95833 16.125 4.95833 15.9583 4.79167L15.3 4.13333C15.1333 3.96667 14.875 3.96667 14.7083 4.13333L14.05 4.79167C13.8833 4.95833 13.625 4.95833 13.4583 4.79167L12.8 4.13333C12.6333 3.96667 12.375 3.96667 12.2083 4.13333L11.55 4.79167C11.3833 4.95833 11.125 4.95833 10.9583 4.79167L10.2917 4.125C10.125 3.95833 9.86667 3.95833 9.7 4.125L9.04167 4.79167C8.875 4.95833 8.61667 4.95833 8.45 4.79167L7.79167 4.125C7.625 3.95833 7.36667 3.95833 7.2 4.125L6.54167 4.79167C6.375 4.95833 6.11667 4.95833 5.95 4.79167L5.29167 4.125C5.21667 4.05 5.10833 4.00833 5 4.00833V20.3333C5.10833 20.3333 5.21667 20.2917 5.29167 20.2083L5.95 19.55C6.11667 19.3833 6.375 19.3833 6.54167 19.55L7.2 20.2083C7.36667 20.375 7.625 20.375 7.79167 20.2083L8.45 19.55C8.61667 19.3833 8.875 19.3833 9.04167 19.55L9.7 20.2083C9.86667 20.375 10.125 20.375 10.2917 20.2083L10.95 19.55C11.1167 19.3833 11.375 19.3833 11.5417 19.55L12.2 20.2083C12.3667 20.375 12.625 20.375 12.7917 20.2083L13.45 19.55C13.6167 19.3833 13.875 19.3833 14.0417 19.55L14.7 20.2083C14.8667 20.375 15.125 20.375 15.2917 20.2083L15.95 19.55C16.1167 19.3833 16.375 19.3833 16.5417 19.55L17.2 20.2083C17.3667 20.375 17.625 20.375 17.7917 20.2083L18.45 19.55C18.6167 19.3833 18.875 19.3833 19.0417 19.55L19.7 20.2083C19.7833 20.2917 19.8917 20.3333 19.9917 20.3333V4.00833H20ZM16.6668 16.3333H8.33351C7.87517 16.3333 7.50017 15.9583 7.50017 15.4999C7.50017 15.0416 7.87517 14.6666 8.33351 14.6666H16.6668C17.1252 14.6666 17.5002 15.0416 17.5002 15.4999C17.5002 15.9583 17.1252 16.3333 16.6668 16.3333ZM16.6668 13H8.33351C7.87517 13 7.50017 12.625 7.50017 12.1666C7.50017 11.7083 7.87517 11.3333 8.33351 11.3333H16.6668C17.1252 11.3333 17.5002 11.7083 17.5002 12.1666C17.5002 12.625 17.1252 13 16.6668 13ZM16.6668 9.66667H8.33351C7.87517 9.66667 7.50017 9.29167 7.50017 8.83334C7.50017 8.375 7.87517 8 8.33351 8H16.6668C17.1252 8 17.5002 8.375 17.5002 8.83334C17.5002 9.29167 17.1252 9.66667 16.6668 9.66667Z",fill:"#989898"});function q(e,t){var n=e.title,r=e.titleId,c=W(e,["title","titleId"]);return a.createElement("svg",J({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},c),n?a.createElement("title",{id:r},n):null,K)}var G=a.forwardRef(q);n.p;function Y(){return(Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function X(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var z=a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 10.8571C13.8971 10.8571 15.4171 9.32571 15.4171 7.42857C15.4171 5.53143 13.8971 4 12 4C10.1029 4 8.57143 5.53143 8.57143 7.42857C8.57143 9.32571 10.1029 10.8571 12 10.8571Z",fill:"#989898"}),_=a.createElement("path",{d:"M12 13.1429C9.33714 13.1429 4 14.48 4 17.1429V18.8571C4 19.4857 4.51429 20 5.14286 20H12H18.8571C19.4857 20 20 19.4857 20 18.8571V17.1429C20 14.48 14.6629 13.1429 12 13.1429Z",fill:"#989898"});function $(e,t){var n=e.title,r=e.titleId,c=X(e,["title","titleId"]);return a.createElement("svg",Y({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},c),n?a.createElement("title",{id:r},n):null,z,_)}var ee=a.forwardRef($);n.p,n(90);var te=function(){var e=Object(d.f)(),t=Object(a.useState)(!1),n=Object(C.a)(t,2),c=n[0],i=n[1],l=[{id:"authors",to:f.ABOUT.AUTHORS,content:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(ee,{className:"page-header-navigation-list-item-anchor-icon"}),"Authors"]})},{id:"doc",to:f.ABOUT.API_DOC,content:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(G,{className:"page-header-navigation-list-item-anchor-icon"}),"Doc"]})}];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("header",{className:"page-header authenticated",children:Object(r.jsxs)("div",{className:"page-header-body container",children:[o(),Object(r.jsx)(D,{className:"page-header-logo"}),Object(r.jsxs)("div",{className:"page-header-side-navigation",children:[Object(r.jsx)(Q,{className:"info-icon",onClick:function(){return i(!c)}}),Object(r.jsx)("div",{hidden:!c,className:"page-header-info-popup",children:Object(r.jsxs)("div",{className:"page-header-info-popup-body",children:[Object(r.jsx)("p",{className:"page-header-info-popup-title",children:"How it works?"}),Object(r.jsx)("p",{className:"page-header-info-popup-info",children:"1. Write your sentence!"}),Object(r.jsx)("br",{}),Object(r.jsx)("p",{className:"page-header-info-popup-info",children:"2. Get your result."})]})}),Object(r.jsx)(E.Button,{customClassName:"blue",onClick:function(){e.push(f.HOME.ROOT)},children:"Compute"})]})]})}),Object(r.jsx)("div",{className:"page-bottom-navigation-bar",children:o()})]});function o(){return Object(r.jsx)("ul",{className:"page-header-navigation",children:l.map((function(e){return Object(r.jsx)("li",{className:"page-header-navigation-list-item",children:Object(r.jsx)(u.b,{to:e.to,className:"page-header-navigation-list-item-anchor",activeClassName:"active",children:e.content})},e.id)}))})}};function ne(){return(ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function re(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var ae=a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.35 20.13C12.59 20.82 11.42 20.82 10.66 20.12L10.55 20.02C5.30003 15.27 1.87003 12.16 2.00003 8.28004C2.06003 6.58004 2.93003 4.95004 4.34003 3.99004C6.98003 2.19004 10.24 3.03004 12 5.09004C13.76 3.03004 17.02 2.18004 19.66 3.99004C21.07 4.95004 21.94 6.58004 22 8.28004C22.14 12.16 18.7 15.27 13.45 20.04L13.35 20.13Z",fill:"#E84D24"});function ce(e,t){var n=e.title,r=e.titleId,c=re(e,["title","titleId"]);return a.createElement("svg",ne({width:13,height:13,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},c),n?a.createElement("title",{id:r},n):null,ae)}var ie=a.forwardRef(ce);n.p,n(96);var le=function(){return Object(r.jsx)("footer",{className:"footer",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"page-footer-body",children:[Object(r.jsx)(D,{className:"page-footer-logo"}),Object(r.jsx)("div",{className:"authors",children:Object(r.jsxs)("p",{children:["Made with"," ",Object(r.jsx)(ie,{})," ","by ",Object(r.jsx)("span",{className:"page-footer-link",onClick:function(){return window.location.href="https://github.com/Anlerkan"},children:"Anlerkan"})," ","and"," ",Object(r.jsx)("span",{className:"page-footer-link",onClick:function(){return window.location.href="https://github.com/g3vxy"},children:"g3vxy"})," "]})}),Object(r.jsx)("small",{className:"page-footer-year",children:"2021"})]})})})};var oe=function(){return Object(r.jsx)(h,{metaTitle:"Home",customClassName:"home gray-bg",children:Object(r.jsxs)("div",{className:"home",children:[Object(r.jsx)(te,{}),Object(r.jsx)(B,{}),Object(r.jsx)(le,{})]})})};n(97),n(98);function se(){return(se=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ue(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var de=a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3 2H17C17.55 2 18 1.55 18 1C18 0.45 17.55 0 17 0H3C2.45 0 2 0.45 2 1C2 1.55 2.45 2 3 2ZM18.16 3.8C18.07 3.34 17.66 3 17.18 3H2.82001C2.34001 3 1.93001 3.34 1.84001 3.8L0.840013 8.8C0.720013 9.42 1.19001 10 1.82001 10H2.00001V15C2.00001 15.55 2.45001 16 3.00001 16H11C11.55 16 12 15.55 12 15V10H16V15C16 15.55 16.45 16 17 16C17.55 16 18 15.55 18 15V10H18.18C18.81 10 19.28 9.42 19.16 8.8L18.16 3.8ZM10 14H4V10H10V14Z",fill:"#989898"});function je(e,t){var n=e.title,r=e.titleId,c=ue(e,["title","titleId"]);return a.createElement("svg",se({width:15,height:15,viewBox:"0 0 20 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},c),n?a.createElement("title",{id:r},n):null,de)}var fe=a.forwardRef(je);n.p;function be(){return(be=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function pe(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var he=a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.6406 2.75375L5.66578 3.16898L5.2461 3.11814C3.71843 2.92324 2.38383 2.26226 1.25067 1.15216L0.696681 0.601353L0.553988 1.00811C0.251813 1.91483 0.444869 2.87239 1.0744 3.51642C1.41015 3.87233 1.33461 3.92317 0.755438 3.71132C0.553988 3.64353 0.377719 3.59268 0.360931 3.6181C0.302175 3.67742 0.503625 4.44856 0.663106 4.75362C0.881344 5.17733 1.32621 5.59255 1.81305 5.8383L2.22434 6.0332L1.73751 6.04168C1.26746 6.04168 1.25067 6.05015 1.30103 6.2281C1.46891 6.77892 2.13201 7.36362 2.87066 7.61784L3.39108 7.7958L2.93781 8.06697C2.26631 8.45677 1.4773 8.6771 0.688288 8.69405C0.310569 8.70252 0 8.73641 0 8.76184C0 8.84658 1.02404 9.32112 1.61999 9.50755C3.40786 10.0584 5.53148 9.82109 7.1263 8.88047C8.25945 8.21103 9.39261 6.8806 9.92142 5.59255C10.2068 4.90616 10.4922 3.652 10.4922 3.05035C10.4922 2.66054 10.5174 2.6097 10.9874 2.14363C11.2644 1.87246 11.5246 1.57587 11.575 1.49113C11.6589 1.33012 11.6505 1.33012 11.2224 1.47418C10.509 1.7284 10.4083 1.6945 10.7608 1.31317C11.021 1.042 11.3316 0.550509 11.3316 0.406451C11.3316 0.381029 11.2057 0.423399 11.063 0.499665C10.9119 0.584405 10.5761 0.711516 10.3243 0.787782L9.87105 0.93184L9.45976 0.652197C9.23313 0.499665 8.91416 0.330185 8.74629 0.27934C8.31821 0.160704 7.6635 0.177652 7.27738 0.313237C6.22816 0.694568 5.56506 1.67755 5.6406 2.75375Z",fill:"#989898"});function Oe(e,t){var n=e.title,r=e.titleId,c=pe(e,["title","titleId"]);return a.createElement("svg",be({width:15,height:15,viewBox:"0 0 12 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},c),n?a.createElement("title",{id:r},n):null,he)}var me=a.forwardRef(Oe);n.p;function ge(){return(ge=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Ce(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var ve=a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15 0H12C11.45 0 11 0.45 11 1C11 1.55 11.45 2 12 2H15C16.65 2 18 3.35 18 5C18 6.65 16.65 8 15 8H12C11.45 8 11 8.45 11 9C11 9.55 11.45 10 12 10H15C17.76 10 20 7.76 20 5C20 2.24 17.76 0 15 0ZM6 5C6 5.55 6.45 6 7 6H13C13.55 6 14 5.55 14 5C14 4.45 13.55 4 13 4H7C6.45 4 6 4.45 6 5ZM8 8H5C3.35 8 2 6.65 2 5C2 3.35 3.35 2 5 2H8C8.55 2 9 1.55 9 1C9 0.45 8.55 0 8 0H5C2.24 0 0 2.24 0 5C0 7.76 2.24 10 5 10H8C8.55 10 9 9.55 9 9C9 8.45 8.55 8 8 8Z",fill:"#989898"});function xe(e,t){var n=e.title,r=e.titleId,c=Ce(e,["title","titleId"]);return a.createElement("svg",ge({width:15,height:15,viewBox:"0 0 20 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},c),n?a.createElement("title",{id:r},n):null,ve)}var we=a.forwardRef(xe);n.p;function ye(){return(ye=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Ae(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var Ee=a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.4715 0C2.89368 0 0 2.89368 0 6.47149C0 10.3267 4.08629 15.6425 5.76888 17.6672C6.13868 18.1109 6.81356 18.1109 7.18336 17.6672C8.8567 15.6425 12.943 10.3267 12.943 6.47149C12.943 2.89368 10.0493 0 6.4715 0ZM6.47154 8.78273C5.19573 8.78273 4.16029 7.74729 4.16029 6.47148C4.16029 5.19567 5.19573 4.16023 6.47154 4.16023C7.74735 4.16023 8.78279 5.19567 8.78279 6.47148C8.78279 7.74729 7.74735 8.78273 6.47154 8.78273Z",fill:"#989898"});function Ie(e,t){var n=e.title,r=e.titleId,c=Ae(e,["title","titleId"]);return a.createElement("svg",ye({width:15,height:15,viewBox:"0 0 13 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},c),n?a.createElement("title",{id:r},n):null,Ee)}var Re=a.forwardRef(Ie),Ne=(n.p,n(99),n(45)),He=(n(100),"data:image/png;base64,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");var Le=function(e){var t=e.alt,n=e.size,c=e.src,i=e.customClassName,l=Object(a.useState)(!0),o=Object(C.a)(l,2),s=o[0],u=o[1];return Object(r.jsx)("img",{src:s?He:c||He,alt:t,style:Object(Ne.a)({},n),className:p()("avatar",i),onLoad:function(){u(!1)}})};var Se=function(e){var t=e.author;return Object(r.jsxs)("div",{className:"author-list-row",children:[Object(r.jsx)(Le,{size:{width:"120px",height:"120px"},alt:"".concat(t.login,"'s avatar"),customClassName:"author-list-row-item avatar",src:t.avatar_url}),Object(r.jsxs)("div",{className:"author-list-row-info",children:[Object(r.jsx)("p",{className:"author-list-row-item username",children:t.login}),t.company&&Object(r.jsxs)("p",{onClick:function(){return window.location.assign("https://github.com/".concat(t.company).replace("@",""))},className:"author-list-row-item company",children:[Object(r.jsx)(fe,{className:"author-list-item icon"}),t.company]}),t.twitter_username&&Object(r.jsxs)("p",{onClick:function(){return window.location.assign("https://twitter.com/".concat(t.twitter_username))},className:"author-list-row-item twitter",children:[Object(r.jsx)(me,{className:"author-list-item icon"}),t.twitter_username]}),t.blog&&Object(r.jsxs)("p",{onClick:function(){return window.location.assign("https://".concat(t.blog))},className:"author-list-row-item blog",children:[Object(r.jsx)(we,{className:"author-list-item icon"}),t.blog]}),t.location&&Object(r.jsxs)("p",{className:"author-list-row-item location",children:[Object(r.jsx)(Re,{className:"author-list-item icon"}),t.location]})]})]})},Be=["Anlerkan","g3vxy"],ke="https://api.github.com";var Te=function(){var e=Object(a.useState)([]),t=Object(C.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(!1),l=Object(C.a)(i,2),o=l[0],s=l[1];return Object(a.useEffect)((function(){!function(){u.apply(this,arguments)}()}),[]),Object(r.jsxs)("div",{className:"authors-list",children:[Object(r.jsx)("p",{className:"authors-list-title",children:"Authors"}),o?Object(r.jsx)(E.Spinner,{spinnerColor:"var(--ocean-blue)",backgroundColor:"white"}):Object(r.jsx)("div",{className:"authors-list-body",children:n.map((function(e){return Object(r.jsx)(Se,{author:e},e.id)}))}),Object(r.jsx)("p",{className:"authors-list-title",children:"Contributers"}),Object(r.jsx)("p",{className:"authors-list-contribute",onClick:function(){return window.location.assign("https://github.com/g3vxy/mnb_ml")},children:"No one contributed yet.Be first!"})]});function u(){return(u=Object(g.a)(m.a.mark((function e(){var t,n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[],s(!0),n=0;case 3:if(!(n<Be.length)){e.next=11;break}return e.next=6,N()("".concat(ke,"/users/").concat(Be[n]));case 6:r=e.sent,t.push(r.data);case 8:n++,e.next=3;break;case 11:return c(t),s(!1),e.abrupt("return",t);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}};var Pe=function(){return Object(r.jsx)(h,{metaTitle:"Authors",customClassName:"home gray-bg",children:Object(r.jsxs)("div",{className:"home",children:[Object(r.jsx)(te,{}),Object(r.jsx)(Te,{}),Object(r.jsx)(le,{})]})})};n(101);var Me=function(){return Object(r.jsx)(h,{metaTitle:"Doc",customClassName:"home gray-bg",children:Object(r.jsxs)("div",{className:"doc-page",children:[Object(r.jsx)(te,{}),Object(r.jsx)("div",{className:"doc-page-body",children:Object(r.jsx)("a",{href:"https://github.com/g3vxy/mnb_ml/blob/main/markdown_files/Rapor.pdf",children:Object(r.jsx)("img",{src:"https://www.iconpacks.net/icons/2/free-pdf-download-icon-2617-thumb.png",alt:"pdf",width:"120",height:"130"})})}),Object(r.jsx)(le,{})]})})};var Qe=function(){return[Object(r.jsx)(d.a,{exact:!0,path:f.HOME.ROOT,children:Object(r.jsx)(oe,{})},"route:=".concat(f.HOME.ROOT)),Object(r.jsx)(d.a,{exact:!0,path:f.ABOUT.API_DOC,children:Object(r.jsx)(Me,{})},"route:=".concat(f.ABOUT.API_DOC)),Object(r.jsx)(d.a,{exact:!0,path:f.ABOUT.AUTHORS,children:Object(r.jsx)(Pe,{})},"route:=".concat(f.ABOUT.AUTHORS)),Object(r.jsx)(d.a,{exact:!0,path:f.ABOUT.ROOT,children:Object(r.jsx)(oe,{})},"route:=".concat(f.ABOUT.ROOT))]};var Ue=function(){return[Object(r.jsx)(d.a,{path:"*",component:oe},"*")]};function Fe(){return Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(a.Suspense,{fallback:Object(r.jsx)(oe,{}),children:Object(r.jsx)(d.c,{children:[].concat(Object(s.a)(Qe()),Object(s.a)(Ue()))})})})}var Ze=function(){return Object(r.jsx)(u.a,{basename:"/",children:Object(r.jsx)(d.a,{path:"/",component:Fe})})};l.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(Ze,{})}),document.getElementById("root")),o()},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},61:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){}},[[102,1,2]]]);
//# sourceMappingURL=main.e9c05646.chunk.js.map