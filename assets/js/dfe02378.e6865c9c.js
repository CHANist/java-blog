"use strict";(self.webpackChunkjava_blog=self.webpackChunkjava_blog||[]).push([[291],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(t),f=o,y=d["".concat(p,".").concat(f)]||d[f]||s[f]||i;return t?r.createElement(y,a(a({ref:n},u),{},{components:t})):r.createElement(y,a({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3856:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],c={title:"Dependency Injection"},p=void 0,l={unversionedId:"spring/dependency_injection",id:"spring/dependency_injection",isDocsHomePage:!1,title:"Dependency Injection",description:"Today we are going to talk about multiple ways Spring created to allow fordependency injection (DI). We will also show Spring support some DI standard (JSR330), like @Inject.",source:"@site/docs/spring/dependency_injection.md",sourceDirName:"spring",slug:"/spring/dependency_injection",permalink:"/spring/dependency_injection",tags:[],version:"current",frontMatter:{title:"Dependency Injection"}},u=[],s={toc:u};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Today we are going to talk about multiple ways Spring created to allow for",(0,i.kt)("inlineCode",{parentName:"p"},"dependency injection (DI)"),". We will also show Spring support some DI standard (JSR330), like ",(0,i.kt)("inlineCode",{parentName:"p"},"@Inject"),". "),(0,i.kt)("p",null,"Of course, in order for Spring to inject dependency to another Java Bean, it requires Spring to hold a reference of all beans, which is centric to ",(0,i.kt)("inlineCode",{parentName:"p"},"Inversion of Control"),"."),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Using "),(0,i.kt)("p",null,"Further Study"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Understanding JSR 330\n",(0,i.kt)("a",{parentName:"p",href:"https://javax-inject.github.io/javax-inject/"},"https://javax-inject.github.io/javax-inject/")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/javax-inject/javax-inject"},"https://github.com/javax-inject/javax-inject")))),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Google Guice Dependency Injection")))}d.isMDXComponent=!0}}]);